import { Ingredient } from "../shared/ingredient.modle";

export class ShoppingService{
    private ingredients : Ingredient[] = [
        new Ingredient("Apples" , 5),
        new Ingredient("Tomamtoes" , 8),
      ]; 

    getIngredients(){
        return this.ingredients.slice();
    }
}