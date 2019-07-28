import { IngredientDialogComponent } from './../../shared/components/ingredient-dialog/ingredient-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  ingredient: any;
  imageUrl;
  ingredientList = [];
  constructor(private fb: FormBuilder, public dialog: MatDialog, private storage: AngularFireStorage) { }

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
      data: { ingredient: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ingredient = result;
      this.ingredientList.push(this.ingredient);
    });
  }
}
