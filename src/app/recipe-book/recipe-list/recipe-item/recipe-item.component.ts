import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  @Input() recipe:Recipe|null=null;
  ngOnInit(): void {
  }

  // @Output() showRecipeDetail = new EventEmitter<Recipe>();

  onClickShowDetail(){
    if(this.recipe)
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.showRecipeDetail.emit(this.recipe);
  }

}
