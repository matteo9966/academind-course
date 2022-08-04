import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-output',
  templateUrl: './color-output.component.html',
  styleUrls: ['./color-output.component.css'],
})
export class ColorOutputComponent implements OnInit {
  constructor() {}

  private _red = 0;
  private _blue = 0;
  private _yellow = 0;

  @Input()
  set red(value: number) {
    this.backgroundColor = `rgb(${value},${this.blue},${this.yellow})`;
    this._red = value;
  }
  get red() {
    return this._red;
  }
  @Input()
  set blue(value: number) {
    this.backgroundColor = `rgb(${this.red},${value},${this.yellow})`;
    this._blue = value;
  }
  get blue() {
    return this._blue;
  }

  @Input()
  set yellow(value: number) {
    this.backgroundColor = `rgb(${this.red},${this.blue},${value})`;
    this._yellow = value;
  }
  get yellow() {
    return this._yellow;
  }

  backgroundColor = `rgb(${this.red},${this.blue},${this.yellow})`;

  ngOnInit(): void {}
}
