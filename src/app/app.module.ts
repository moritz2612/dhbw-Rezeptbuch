import { environment } from './../environments/environment';
import { IngredientDialogComponent } from './shared/components/ingredient-dialog/ingredient-dialog.component';
import { AppMaterialModule } from './app-material.module';
import { RecipeOverviewComponent } from './recipe/recipe-overview/recipe-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientDialogComponent,
    RecipeDetailsComponent,
    RecipeAddComponent,
    RecipeEditComponent,
    RecipeOverviewComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  entryComponents: [IngredientDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
