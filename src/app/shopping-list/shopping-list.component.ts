import { IngredientDialogComponent } from './../shared/components/ingredient-dialog/ingredient-dialog.component';
import { MatDialog } from '@angular/material';
import { Helper } from './../shared/utils/Helper';
import { GrocerylistService } from './../shared/services/grocerylist.service';
import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/models/IIngredient';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  items: IIngredient[];
  objectKeys = Object.keys;
  constructor(private groceryListService: GrocerylistService, public dialog: MatDialog) { }

  ngOnInit() {
    const allItems = this.groceryListService.getAll();
    this.items = Helper.sumAmount(allItems);
  }

  addNewItem() {
    // open the dialog
    const dialogRef = this.dialog.open(IngredientDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          // work around
          const list: any[] = [];
          list.push(result);
          this.groceryListService.addIngredientToShoppingList(list);
          const allItems = this.groceryListService.getAll();
          this.items = Helper.sumAmount(allItems);
        }
      });
  }
}
