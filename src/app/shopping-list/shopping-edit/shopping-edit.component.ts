import { Component, EventEmitter, OnInit,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output('addItemToList') addItemToList = new EventEmitter<{name:string,amount:number}>();

  constructor() { }
   
  ngOnInit(): void {
  }

  onClickAdd(event:Event, itemName:HTMLInputElement,itemAmount:HTMLInputElement){
      event.preventDefault();
       //aggiungi {} e {} alla lista 
       this.addItemToList.emit({amount:+itemAmount.value,name:itemName.value});
       itemAmount.value="";
       itemName.value="";
  }
   


}
