import { Injectable } from '@angular/core';
import { IRecipe } from '../models/IRecipe';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getAll(): IRecipe[] {
    const recipesJSON: string = localStorage.getItem(environment.recipesLocalStorageKey);
    let recipes: IRecipe[] = [];
    if (recipesJSON) {
      recipes = JSON.parse(recipesJSON);
    } else {
      recipes = [];
    }
    return recipes;
  }

  addRecipe(newRecipe: IRecipe) {
    const recipes = this.getAll();
    recipes.push(newRecipe);
    localStorage.setItem(environment.recipesLocalStorageKey, JSON.stringify(recipes));
  }

  update(recipe: IRecipe) {
    // update LastEdited
    recipe.LastEdited = new Date();
    const recipes: IRecipe[] = this.getAll();
    const index: number = this.getIndex(recipes, recipe);
    recipes[index] = recipe;
    localStorage.setItem(environment.recipesLocalStorageKey, JSON.stringify(recipes));
  }

  delete(recipe: IRecipe) {
    const recipes: IRecipe[] = this.getAll();
    const index: number = recipes.findIndex(r => r.Id === recipe.Id);
    recipes.splice(index, 1);
    localStorage.setItem(environment.recipesLocalStorageKey, JSON.stringify(recipes));
    return recipes;
  }

  getIndex(recipes: IRecipe[], item: IRecipe) {
    return recipes.findIndex(r => r.Id === item.Id);
  }

  getById(allRecipes: IRecipe[], id: string) {
    return allRecipes.filter(r => r.Id === id)[0];
  }

  // set default recipes on startup if no recipes found
  addDefaultRecipes() {
    localStorage.setItem(environment.recipesLocalStorageKey, JSON.stringify(environment.defaultRecipes));
  }
}
