import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input() recipe:Recipe|null=null;
  ngOnInit(): void {
  }

  @Output() showRecipeDetail = new EventEmitter<Recipe>();

  onClickShowDetail(){
    if(this.recipe)
    this.showRecipeDetail.emit(this.recipe);
  }

}
