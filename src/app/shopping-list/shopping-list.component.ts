import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit{
  ingredients : Ingredient[] | any ;

  constructor(private slService: ShoppingService){}
  
  ngOnInit(): void {
    this.ingredients  = this.slService.getIngredients();
  }

  onIngredientAdd(ingredient : Ingredient){
    this.ingredients.push(ingredient)
  }
}
