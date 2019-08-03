import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatDialogModule, MatSnackBarModule,
  MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatDialogModule, MatSnackBarModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule],
  exports: [MatToolbarModule, MatDialogModule, MatSnackBarModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule]
})

export class AppMaterialModule { }
