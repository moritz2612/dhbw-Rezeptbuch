import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatIconModule, MatDialogModule, MatOptionModule, MatSelectModule, MatSnackBarModule,
  MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatDialogModule, MatOptionModule, MatSelectModule, MatSnackBarModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule],
  exports: [MatToolbarModule, MatIconModule, MatDialogModule, MatOptionModule, MatSelectModule, MatSnackBarModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule]
})

export class AppMaterialModule { }
