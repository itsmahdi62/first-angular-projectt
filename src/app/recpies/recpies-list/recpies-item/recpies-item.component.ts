import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from "../recipe.service"
@Component({
  selector: 'app-recpies-item',
  templateUrl: './recpies-item.component.html',
  styleUrls: ['./recpies-item.component.css']
})
export class RecpiesItemComponent {
  @Input() recipe!: Recipe; 

  constructor(private recipeService : RecipeService){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
