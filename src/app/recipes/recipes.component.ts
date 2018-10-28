import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient';
import { IngredientsService } from '../ingredients/ingredients.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = [
    {
      name: 'pizza', ingredients: [
        new Ingredient('tomatoes', 5), new Ingredient('cheese', 3)
      ]
    }
  ];


  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.ingredientsService.addIngredient(ingredient);
    });
  }

}
