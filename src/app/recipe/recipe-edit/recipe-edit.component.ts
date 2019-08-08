import { GrocerylistService } from './../../shared/services/grocerylist.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { IngredientDialogComponent } from './../../shared/components/ingredient-dialog/ingredient-dialog.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { RecipeService } from './../../shared/services/recipe.service';
import { IRecipe } from './../../shared/models/IRecipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipePlaceHolderImageUrl: string;
  recipe: IRecipe;
  isUploading = false;
  // tslint:disable
  constructor(private dialog: MatDialog,
    private storage: AngularFireStorage, private snackBar: MatSnackBar,
    private location: Location, private route: ActivatedRoute,
    private recipeService: RecipeService, private router: Router) {
    this.recipePlaceHolderImageUrl = environment.recipePlaceHolderImageUrl;
  }
  // tslint:enable

  ngOnInit() {
    // get id from url through observable
    this.route.params.subscribe(params => {
      const recipeIdParam = 'id';
      const id: string = params[recipeIdParam];
      const all = this.recipeService.getAll();
      this.recipe = this.recipeService.getById(all, id);
      if (!this.recipe) {
        this.router.navigate(['recipes']);
        this.snackBar.open(`Konnte Rezept mit Id: ${id} nicht finden`, '', { duration: 2000 });
      }
    });
  }

  uploadFile(event) {
    this.isUploading = true;
    const file = event.target.files[0];
    const id = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(id);
    const task = ref.put(file);

    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          this.recipe.ImageUrl = url;
          this.isUploading = false;
        });
      })).subscribe();
  }

  removeIngredient(index) {
    // remove ingredient at given index
    this.recipe.Ingredients.splice(index, 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(IngredientDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(result => { // subscribe to the response
        if (result) {
          // push item into ingredients array
          this.recipe.Ingredients.push(result);
        }
      });
  }

  cancel() {
    // navigate back
    this.router.navigate(['/recipes']);
  }

  update() {
    this.recipeService.update(this.recipe);
    this.snackBar.open('Recipe', 'successfully updated', { duration: 2500 });
    this.router.navigate(['/recipes']);
  }
}
