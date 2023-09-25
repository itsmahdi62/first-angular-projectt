import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpiesListComponent } from './recpies/recpies-list/recpies-list.component';
import { RecpiesDetailComponent } from './recpies/recpies-detail/recpies-detail.component';
import { RecpiesItemComponent } from './recpies/recpies-list/recpies-item/recpies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive"
import {ShoppingService} from "./shopping-list/shopping.service"
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpiesComponent,
    RecpiesListComponent,
    RecpiesDetailComponent,
    RecpiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
