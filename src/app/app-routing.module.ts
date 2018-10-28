import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientAddComponent } from './ingredients/ingredient-add/ingredient-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingredients', pathMatch: 'full' },
  {
    path: 'ingredients', component: IngredientsComponent, children: [
      { path: 'new', component: IngredientAddComponent },
      { path: 'edit/:id', component: IngredientAddComponent }
    ]
  },
  { path: 'recipes', component: RecipesComponent },
  { path: '**', redirectTo: '/ingredients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
