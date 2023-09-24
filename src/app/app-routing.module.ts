import {  RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core"
import { RecpiesComponent } from './recpies/recpies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRouts : Routes = [
  {path : '' , redirectTo : '/recipes' , pathMatch:'full'},
  {path : 'recipes' , component : RecpiesComponent },
  {path : 'shopping-list' ,component : ShoppingListComponent} , 
]

@NgModule({
    imports : [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]

})

export class AppRoutingModule{

}