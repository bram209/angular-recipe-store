import { Ingredient } from "../models/Ingredient";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class IngredientsService {
    public ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[];

    constructor(private httpClient: HttpClient) { }

    getIngredients() {
        if (this.ingredients) {
            // Return a copy
            return this.ingredients.slice();
        } else {
            this.httpClient
                .get<Ingredient[]>('https://ordina-fontys-workshop.firebaseio.com/ingredients.json')
                .subscribe((response) => {
                    this.ingredients = response;
                    this.ingredientsChanged.next(this.ingredients.slice());
                });
        }
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.httpClient.put('https://ordina-fontys-workshop.firebaseio.com/ingredients.json', this.ingredients)
            .subscribe((response) => {
                this.ingredientsChanged.next(response as Ingredient[]);
            });
    }

}
