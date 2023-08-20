import {EventEmitter} from "@angular/core"
import { Recipe  } from "../recipe.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe' , 'This is simply a test',"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/14/0/0181847_pork-chops_s4x3.jpg.rend.hgtvcom.476.357.suffix/1393206943617.jpeg")
      ] ; 


    getRecipes(){
        return this.recipes.slice()
    }
}