import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { IIngredient } from '../models/IIngredient';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {
  constructor() { }

  getAll(): IIngredient[] {
    // get JSON from localStorage
    const groceryListJSON: string = localStorage.getItem(environment.groceryListLocalStorageKey);
    let groceryList: IIngredient[] = [];
    if (groceryListJSON) {
      // parse
      groceryList = JSON.parse(groceryListJSON);
    } else {
      // nothing found, init new list
      groceryList = [];
    }
    return groceryList;
  }

  addIngredientToShoppingList(ingredients: IIngredient[]) {
    const items = this.getAll();
    ingredients.forEach(i => { items.push(i); });
    localStorage.setItem(environment.groceryListLocalStorageKey, JSON.stringify(items));
  }
}
