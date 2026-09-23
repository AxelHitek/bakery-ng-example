import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './components/deposit/deposit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
