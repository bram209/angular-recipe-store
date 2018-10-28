import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {

  ingredientName: string
  ingredientAmount: number

  constructor() {
   }

  ngOnInit() {
  }

  addIngredient() {
    console.log(`Adding ingredient: ${this.ingredientAmount} x ${this.ingredientName}`)
  }

  isDisabled() {
    return !this.ingredientAmount || !this.ingredientName;
  }
}
