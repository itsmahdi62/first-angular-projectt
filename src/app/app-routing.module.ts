import {  RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core"
import { RecpiesComponent } from './recpies/recpies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecpieStartComponent } from "./recpies/recpie-start/recpie-start.component"
import { RecpiesDetailComponent } from './recpies/recpies-detail/recpies-detail.component';

const appRouts : Routes = [
  {path : '' , redirectTo : '/recipes' , pathMatch:'full'},
  {path : 'recipes' , component : RecpiesComponent , children: [
    {path:'' , component : RecpieStartComponent},
    {path:':id' , component:RecpiesDetailComponent}
  ]},
  {path : 'shopping-list' ,component : ShoppingListComponent} , 
]

@NgModule({
    imports : [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]

})

export class AppRoutingModule{

}