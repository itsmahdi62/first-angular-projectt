import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modle';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') nameInputRef !: ElementRef;
  @ViewChild('itemCount') amountInputRef  !: ElementRef;
  
  constructor(private slService : ShoppingService) { }
  
  ngOnInit() {
    
  }
  onAddRecipe(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value , this.amountInputRef.nativeElement.value )
    this.slService.addIngredient(newIngredient)
  }
}
