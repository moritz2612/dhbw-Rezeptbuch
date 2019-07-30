import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatDialogModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule
} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule],
    exports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule]
})

export class AppMaterialModule { }
