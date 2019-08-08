import { MatSnackBar } from '@angular/material';
import { GrocerylistService } from './../../shared/services/grocerylist.service';
import { IRecipe } from './../../shared/models/IRecipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipePlaceHolderImageUrl: string;
  recipe: IRecipe;
  // tslint:disable
  constructor(private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute, private grocerylistService: GrocerylistService, private recipeService: RecipeService) {
    this.recipePlaceHolderImageUrl = environment.recipePlaceHolderImageUrl;
  }

  ngOnInit() {
    // subscribe to params observable
    this.route.params.subscribe(params => {
      const recipeIdParam = 'id';
      const id: string = params[recipeIdParam];
      const allRecipes: IRecipe[] = this.recipeService.getAll();
      // get recipe
      this.recipe = this.recipeService.getById(allRecipes, id);
      if (!this.recipe) {
        this.router.navigate(['recipes']);
        this.snackBar.open(`Konnte Rezept mit Id: ${id} nicht finden`, '', { duration: 2000 });
      }
    });
  }

  addToShoppingList() {
    // check if empty or undefined
    if (this.recipe.Ingredients && this.recipe.Ingredients.length > 0) {
      // add to shopping cart
      this.grocerylistService.addIngredientToShoppingList(this.recipe.Ingredients);
      this.snackBar.open(`Added ingredients of ${this.recipe.Name}`, '', { duration: 2500 });
    }
  }

  delete(recipe: IRecipe) {
    this.recipeService.delete(recipe);
    this.snackBar.open(recipe.Name, 'successfully deleted', { duration: 2500 });
  }
}
