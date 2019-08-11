import { IIngredient } from './IIngredient';

export interface IRecipe {
  Id: string;
  Name: string;
  ImageUrl?: string;
  Created: Date;
  LastEdited: Date;
  Ingredients: IIngredient[];
  Description: string;
}
