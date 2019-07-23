import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule],
    exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule]
})

export class AppMaterialModule { }
