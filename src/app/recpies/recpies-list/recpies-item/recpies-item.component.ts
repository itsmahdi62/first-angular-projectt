import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recpies-item',
  templateUrl: './recpies-item.component.html',
  styleUrls: ['./recpies-item.component.css']
})
export class RecpiesItemComponent {
  @Input() recipe!: Recipe; 
  @Output() selectedRecipeEvent = new EventEmitter<void>()

  selectedRecipe(){
    this.selectedRecipeEvent.emit()
  }
}
