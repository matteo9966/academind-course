import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../services/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editing = false; // a flag for when im in editing mode
  index:number=-1;
  editingIndexSubj: Subscription | undefined;
  
  @Output('addItemToList') addItemToList = new EventEmitter<{
    name: string;
    amount: number;
  }>();

  @ViewChild('formcomp', { static: true }) formComp: NgForm | undefined;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnDestroy(): void {
    this.editingIndexSubj?.unsubscribe();
  }

  ngOnInit(): void {
    this.editingIndexSubj =
      this.shoppingListService.selectedIngredientIndex$.subscribe((index) => {
        this.editing = true;
        this.index=index;
        const elementInshoppingList =
          this.shoppingListService.getIngredientFromList(index);
        if (elementInshoppingList) {
          this.formComp?.setValue({
            name: elementInshoppingList.name,
            amount: elementInshoppingList.amount,
          });
        }
      });
  }

  onClickAdd(
    event: Event,
    itemName: HTMLInputElement,
    itemAmount: HTMLInputElement
  ) {
    event.preventDefault();
    console.log({editing:this.editing})


    this.addItemToList.emit({
      amount: +itemAmount.value,
      name: itemName.value,
    });
    itemAmount.value = '';
    itemName.value = '';
  }

  onSubmit() {
    if (
      this.formComp?.controls['name'].status === 'VALID' &&
      this.formComp.controls['amount'].status === 'VALID'
    ) {

      if(this.editing){
        
        this.shoppingListService.updateIngredient(this.index,new Ingredient(this.formComp.form.value['name'],+this.formComp.form.value['amount']))
        this.editing=false;
        this.index=-1;
        return
      }

      this.addItemToList.emit({
        amount: +this.formComp.form.value['amount'],
        name: this.formComp.form.value['name'],
      });
    }
  }
}
