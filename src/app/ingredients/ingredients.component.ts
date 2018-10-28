import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient('apples', 12), new Ingredient('bananas', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
