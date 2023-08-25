import { Component  , Input} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recpies-list/recipe.service';

@Component({
  selector: 'app-recpies-detail',
  templateUrl: './recpies-detail.component.html',
  styleUrls: ['./recpies-detail.component.css']
})
export class RecpiesDetailComponent {
@Input() recipe: Recipe | any;

constructor(private recipeService : RecipeService){}

onAddToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
}

}
