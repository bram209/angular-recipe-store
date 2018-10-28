import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  ingredientName: string
  ingredientAmount: number

  constructor(private ingredientsService: IngredientsService) {
  }

  ngOnInit() {
  }

  addIngredient() {
    console.log(`Adding ingredient: ${this.ingredientAmount} x ${this.ingredientName}`);
    this.ingredientsService.addIngredient(new Ingredient(this.ingredientName, this.ingredientAmount));
  }

  isDisabled() {
    return !this.ingredientAmount || !this.ingredientName;
  }
}
