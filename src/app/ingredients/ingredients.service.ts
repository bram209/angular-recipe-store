import { Ingredient } from "../models/Ingredient";
import { Subject } from "rxjs";

export class IngredientsService {
    ingredientsChanged = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('tomatoes', 15),
        new Ingredient('cheese', 10)
    ];

    getIngredients() {
        // Return a copy
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

}
