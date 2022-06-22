import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { validationMessages } from '../messages';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() label="";
  @Input() control!:FormControl; // è il form control
  @Input() placeholder?:string;
  @Input() messages = validationMessages;

  constructor() { }

  ngOnInit(): void {
  }



}
