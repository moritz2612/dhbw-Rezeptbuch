import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private recipeService: RecipeService) {
    const items = this.recipeService.getAll();
    if (items.length === 0) {
      recipeService.addDefaultRecipes();
    }
  }
}
