import { IGroceryList } from './IGroceryList';
import { IIngredient } from './IIngredient';

export interface IRecipe {
    Name: string;
    ImageUrl?: string;
    Created: Date;
    LastEdited: Date;
    Ingredients: IIngredient[];
    Description: string;
}
