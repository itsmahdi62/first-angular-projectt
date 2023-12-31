import {EventEmitter} from "@angular/core"
import { Recipe  } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.modle";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe' , 'This is simply a test',"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/14/0/0181847_pork-chops_s4x3.jpg.rend.hgtvcom.476.357.suffix/1393206943617.jpeg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('Meat', 3),
        ]),
        new Recipe('Second Recipe' , 'This is simply a test',"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/14/0/0181847_pork-chops_s4x3.jpg.rend.hgtvcom.476.357.suffix/1393206943617.jpeg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('Meat', 3),
        ]),
      ] ; 


    getRecipes(){
        return this.recipes.slice()
    }
    getRecipe(index:number){
        return this.recipes[index]
    }
}