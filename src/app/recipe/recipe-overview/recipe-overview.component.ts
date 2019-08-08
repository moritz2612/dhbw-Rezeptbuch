import { GrocerylistService } from './../../shared/services/grocerylist.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { RecipeService } from './../../shared/services/recipe.service';
import { IRecipe } from './../../shared/models/IRecipe';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  items: IRecipe[];
  recipePlaceHolderImageUrl;
  // tslint:disable
  constructor(private snackBar: MatSnackBar, private grocerylistService: GrocerylistService, private location: Location, private recipeService: RecipeService) {
    this.recipePlaceHolderImageUrl = environment.recipePlaceHolderImageUrl;
  }
  // tslint:enable

  ngOnInit() {
    this.items = this.recipeService.getAll();
  }

  addToShoppingList(recipe) {
    if (recipe.Ingredients && recipe.Ingredients.length > 0) {
      this.grocerylistService.addIngredientToShoppingList(recipe.Ingredients);
      this.snackBar.open(`Added ingredients of ${recipe.Name}`, '', { duration: 2500 });
    }
  }
}
