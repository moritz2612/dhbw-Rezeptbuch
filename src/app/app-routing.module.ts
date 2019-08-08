import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeOverviewComponent } from './recipe/recipe-overview/recipe-overview.component';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipeOverviewComponent },
  { path: 'recipe/edit/:id', component: RecipeEditComponent },
  { path: 'recipe/view/:id', component: RecipeDetailsComponent },
  { path: 'recipe/add', component: RecipeAddComponent },
  { path: '', redirectTo: '/404', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
