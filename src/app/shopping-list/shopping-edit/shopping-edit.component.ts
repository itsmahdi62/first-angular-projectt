import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modle';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') nameInputRef!: ElementRef;
  @ViewChild('itemNumber') amountInputRef !: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }
  ngOnInit() {

  }
  onAddRecipe(){
    console.log("4")
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value , this.amountInputRef.nativeElement.value )
    this.ingredientAdded.emit(newIngredient)
  }
}
