import { IRecipe } from './../../shared/models/IRecipe';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
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
    });
  }
}
