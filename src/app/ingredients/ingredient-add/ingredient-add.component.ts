import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  ingredientName: string
  ingredientAmount: number

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient() {
    console.log(`Adding ingredient: ${this.ingredientAmount} x ${this.ingredientName}`);
    this.ingredientAdded.emit({ name: this.ingredientName, amount: this.ingredientAmount })
  }

  isDisabled() {
    return !this.ingredientAmount || !this.ingredientName;
  }
}
