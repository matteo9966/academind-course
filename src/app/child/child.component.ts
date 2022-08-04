import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  private _name='';

  constructor() { }
  
  // @Input() name: string='';

   @Input()
   get name():string { return this._name}
   set name(name:string){
    this._name = (name && name.trim() || 'scegli un nome valido');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(const [key,value] of Object.entries(changes)){
      console.log(key,value);
    }
  }

}
