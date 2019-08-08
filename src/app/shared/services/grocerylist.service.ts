import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { IIngredient } from '../models/IIngredient';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {
  constructor() { }

  getAll(): IIngredient[] {
    const groceryListJSON: string = localStorage.getItem(environment.groceryListLocalStorageKey);
    let groceryList: IIngredient[] = [];
    if (groceryListJSON) {
      groceryList = JSON.parse(groceryListJSON);
    } else {
      groceryList = [];
    }
    return groceryList;
  }

  addIngredientToShoppingList(ingredients: IIngredient[]) {
    const items = this.getAll();
    ingredients.forEach(i => {
      items.push(i);
    });
    localStorage.setItem(environment.groceryListLocalStorageKey, JSON.stringify(items));
  }
}
