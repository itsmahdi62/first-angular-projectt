import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recpies-list/recipe.service';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers : [RecipeService]
})
export class RecpiesComponent {
  selectedRecipe !: Recipe;

  constructor(private recipeService : RecipeService){}
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) => {
        this.selectedRecipe = recipe ; 
      }
    )
  }
}
