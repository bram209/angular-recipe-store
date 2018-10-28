import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientAddComponent } from './ingredients/ingredient-add/ingredient-add.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsService } from './ingredients/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    IngredientListComponent,
    IngredientAddComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
