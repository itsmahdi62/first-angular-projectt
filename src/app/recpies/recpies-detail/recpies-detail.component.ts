import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recpies-list/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recpies-detail',
  templateUrl: './recpies-detail.component.html',
  styleUrls: ['./recpies-detail.component.css']
})
export class RecpiesDetailComponent {
 recipe !: Recipe; 
   id !: number ; 

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute){
      
    }


    ngOnInit(){
      this.route.params.subscribe(
        (params:Params) =>{
          this.id += params['id'];
        }
      )
    }
}
