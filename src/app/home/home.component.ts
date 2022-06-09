import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cout = 0;
  subscription: Subscription | undefined;
  constructor() {}

  ngOnInit(): void {
    // this.subscription=interval(1000).subscribe(count=>{
    //   console.log(count);
    //   this.cout=count;
    // })
    // setTimeout(()=>this.subscription?.unsubscribe(),4000)

    const customIntervalObservable = new Observable((subscriber) => {
      let count = 0;
      setInterval(() => subscriber.next(count++), 1000);
      
    });

    this.subscription = customIntervalObservable.subscribe((x) =>
      console.log(x)
    );
  }
}
