import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    ingredients: new FormArray([]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  id: number = -1;
  editMode = false; // edit mode serve per sapere se sto creando una nuova ricetta o la sto solo modificando
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((par) => {
      if (par['id']) {
        this.id = +par['id'];
        this.editMode = true;
      }
    });
    this.initForm();
  }

  initForm() {
    const addIngredientsToFormArray = (
      ingredients: Ingredient[] | undefined
    ) => {
      if (!ingredients) return;
      for (let ingredient of ingredients) {
        const nameControl = new FormControl(ingredient.name);
        const amountControl = new FormControl(ingredient.amount);
        (<FormArray>this.form.get('ingredients')).push(
          new FormGroup({
            name: nameControl,
            amount: amountControl,
          })
        );
      }
    };

    if (this.editMode) {
      //se sono in edit mode, prendo i dati della ricetta dal service:
      const recipe = this.recipeService.getRecipe(this.id);
      //passo i campi già inizializzati al form
      this.form.patchValue({
        name: recipe?.name,
        url: recipe?.imagePath,
        description: recipe?.description,
      });
      addIngredientsToFormArray(recipe?.ingredients);
    }
  }

  get ingredients() {
    return (<FormArray>this.form.get('ingredients')).controls;
  }

  onSubmit() {
    console.log('onsubmit!')
    console.log({editmode:this.editMode})

    if (!this.form.valid) {
      console.log({form:this.form})
      return;
    }

    // const ingredients
    const newRecipe = new Recipe(
      this.form.value['name'],
      this.form.value['description'],
      this.form.value['url'],
      this.form.value['ingredients']
    );

    if (this.editMode) {
      if (this.id>=0) {
        this.recipeService.updateRecipe(this.id,newRecipe);
      }
    } else {
      this.recipeService.addNewRecipe(newRecipe)
    } 
  }

  onClickAddNewIngredient() {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl(''),
      })
    );
  }

  deleteIngredient(index:number){
    this.recipeService.removeIngredient(this.id,index);
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
}
