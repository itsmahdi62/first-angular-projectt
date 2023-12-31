import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modle";

export class ShoppingService{

    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients : Ingredient[] = [
        new Ingredient("Apples" , 5),
        new Ingredient("Tomamtoes" , 8),
      ]; 

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}