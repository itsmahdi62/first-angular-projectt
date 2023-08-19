import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recpies-list',
  templateUrl: './recpies-list.component.html',
  styleUrls: ['./recpies-list.component.css']
})
export class RecpiesListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes : Recipe[] | any; 

  constructor(private recipeService : RecipeService){}

    ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
    }
    onRecipeSelected(recipe : Recipe){
      this.recipeWasSelected.emit(recipe)
    }
}
