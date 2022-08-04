import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor() {}
  private _time = 11;
  set time(time: number) {
    if (time < 0) {
      this._time = 11;
      return
    }
    this._time = time;
  }
  get time() {
    return this._time;
  }

  timerId: any;
  ngOnInit(): void {}

  countDown() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.time--;
    }, 1000);
  }

  start() {
    this.countDown();
  }
  reset() {
    this.time = 11;
  }
  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
