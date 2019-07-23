import { IRecipe } from './../../shared/models/IRecipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  private items: IRecipe[] = [
    {
      Id: '1',
      Name: 'Test Gericht 1',
      ImageUrl: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_4-1.jpg',
      Created: new Date(),
      LastEdited: new Date()
    },
    {
      Id: '2',
      Name: 'Test Gericht 2',
      ImageUrl: 'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_2622edit.jpg',
      Created: new Date(),
      LastEdited: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
