import { RecipeService } from './../../shared/services/recipe.service';
import { IRecipe } from './../../shared/models/IRecipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  private items: IRecipe[];
  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.items = this.recipeService.getAll();
  }

}
