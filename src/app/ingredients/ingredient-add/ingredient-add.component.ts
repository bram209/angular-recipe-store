import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;
  ingredientIndex: number;

  constructor(private ingredientsService: IngredientsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.ingredientIndex = +params['id'];
          const ingredient = this.ingredientsService.getIngredient(this.ingredientIndex);
          this.ingredientName = ingredient.name;
          this.ingredientAmount = ingredient.amount;
        } else {
          this.ingredientIndex = null;
        }
      });
  }

  addIngredient() {
    console.log(`Adding ingredient: ${this.ingredientAmount} x ${this.ingredientName}`);
    this.ingredientsService.addIngredient(new Ingredient(this.ingredientName, this.ingredientAmount));
  }

  updateIngredient() {
    this.ingredientsService.updateIngredient(this.ingredientIndex,
      new Ingredient(this.ingredientName, this.ingredientAmount)
    );
  }

  deleteIngredient() {
    this.ingredientsService.updateIngredient(this.ingredientIndex, undefined);
  }


  isDisabled() {
    return !this.ingredientAmount || !this.ingredientName;
  }
}
