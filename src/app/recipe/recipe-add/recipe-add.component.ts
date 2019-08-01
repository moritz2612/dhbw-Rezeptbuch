import { IRecipe } from './../../shared/models/IRecipe';
import { IngredientDialogComponent } from './../../shared/components/ingredient-dialog/ingredient-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { IIngredient } from 'src/app/shared/models/IIngredient';
import { RecipeService } from 'src/app/shared/services/recipe.service';
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
  // tslint:disable-next-line
  constructor(private fb: FormBuilder, public dialog: MatDialog, private storage: AngularFireStorage, private recipeService: RecipeService) { }

  ngOnInit() {
  }


  uploadFile(event) {
    const file = event.target.files[0];

    const id = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(id);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          this.imageUrl = url;
        });
      })
    ).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(IngredientDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this.ingredient = result;
          this.ingredientList.push(this.ingredient);
        }
      });
  }

  save() {
    const recipe: IRecipe = {
      Name: this.name,
      Description: this.description,
      Ingredients: this.ingredientList,
      Created: new Date(),
      LastEdited: new Date(),
    };
    this.recipeService.addRecipe(recipe);
  }
}
