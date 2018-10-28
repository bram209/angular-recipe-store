import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input()
  ingredients: Ingredient[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  editIngredient(index) {
    this.router.navigate(['edit', index], { relativeTo: this.route });
  }
}
