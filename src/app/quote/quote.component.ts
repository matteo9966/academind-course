import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuote } from './quote.interface';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  constructor(private quoteService:QuoteService) { }

  quotes$:Observable<IQuote[]> = this.quoteService.getAll();

  ngOnInit(): void {
    // this.quoteService.
  }

}
