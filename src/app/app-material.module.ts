import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatDialogModule,
    MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule],
    exports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule]
})

export class AppMaterialModule { }
