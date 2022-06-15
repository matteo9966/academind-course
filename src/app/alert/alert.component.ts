import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message:string="";
  @Output() closeDialog:EventEmitter<boolean> = new EventEmitter<boolean>(true);


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onClose(){
    this.closeDialog.emit(true);
  }

}
