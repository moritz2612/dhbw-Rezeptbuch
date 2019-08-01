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
}
