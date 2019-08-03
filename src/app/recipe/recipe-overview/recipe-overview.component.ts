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
  constructor(private snackBar: MatSnackBar, private location: Location, private recipeService: RecipeService) {
    this.recipePlaceHolderImageUrl = environment.recipePlaceHolderImageUrl;
  }

  ngOnInit() {
    this.items = this.recipeService.getAll();
  }

  delete(recipe: IRecipe) {
    this.items = this.recipeService.delete(recipe);
    this.snackBar.open(recipe.Name, 'successfully deleted', { duration: 2500 });
  }
}
