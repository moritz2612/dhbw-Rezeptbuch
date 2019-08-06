import { Router } from '@angular/router';
import { Helper } from './../../shared/utils/Helper';
import { IRecipe } from './../../shared/models/IRecipe';
import { IngredientDialogComponent } from './../../shared/components/ingredient-dialog/ingredient-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { IIngredient } from 'src/app/shared/models/IIngredient';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  name: string;
  ingredient: any;
  description: string;
  imageUrl;
  ingredientList: IIngredient[] = [];
  private file;
  recipePlaceHolderImageUrl: string;
  // tslint:disable-next-line
  constructor(private location: Location, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder, public dialog: MatDialog, private storage: AngularFireStorage, private recipeService: RecipeService) {
    this.recipePlaceHolderImageUrl = environment.recipePlaceHolderImageUrl;
  }

  ngOnInit() {

  }

  addToShoppingList() {

  }

  uploadFile(event) {
    this.file = event.target.files[0];
  }

  removeIngredient(index) {
    // remove ingredient from list at given index
    this.ingredientList.splice(index, 1);
  }

  openDialog(): void {
    // open the dialog
    const dialogRef = this.dialog.open(IngredientDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.ingredient = result;
          this.ingredientList.push(this.ingredient);
        }
      });
  }

  cancel() {
    this.router.navigate(['/recipes']);
  }

  save() {
    // check if file is not null and upload it to firebasestore
    if (this.file) {
      const id = Math.random().toString(36).substring(2);
      const ref = this.storage.ref(id);
      const task = ref.put(this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => {
            this.imageUrl = url;
            const recipe: IRecipe = {
              Id: Helper.generateGUID(),
              Name: this.name,
              Description: this.description,
              ImageUrl: this.imageUrl,
              Ingredients: this.ingredientList,
              Created: new Date(),
              LastEdited: new Date(),
            };
            this.recipeService.addRecipe(recipe);
          });
        })
      ).subscribe();
    } else {
      const recipe: IRecipe = {
        Id: Helper.generateGUID(),
        Name: this.name,
        Ingredients: this.ingredientList,
        Description: this.description,
        Created: new Date(),
        LastEdited: new Date(),
      };
      this.recipeService.addRecipe(recipe);
    }
    // show snackbar
    this.snackBar.open('Recipe', 'successfully saved', { duration: 2500 });
    // navigate back to recipes
    this.router.navigate(['/recipes']);
  }
}
