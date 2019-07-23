import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeOverviewComponent } from './recipe/recipe-overview/recipe-overview.component';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeOverviewComponent },
  { path: 'recipe/edit/:recipeId', component: RecipeEditComponent },
  { path: 'recipe/add', component: RecipeAddComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', component: RecipeOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
