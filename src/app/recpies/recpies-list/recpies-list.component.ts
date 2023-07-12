import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recpies-list',
  templateUrl: './recpies-list.component.html',
  styleUrls: ['./recpies-list.component.css']
})
export class RecpiesListComponent {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes : Recipe[] = [
      new Recipe('A Test Recipe' , 'This is simply a test',"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/14/0/0181847_pork-chops_s4x3.jpg.rend.hgtvcom.476.357.suffix/1393206943617.jpeg")
    ] ; 

    onRecipeSelected(recipe : Recipe){
      this.recipeWasSelected.emit(recipe)
    }
}
