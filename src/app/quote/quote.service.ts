import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { IQuote } from './quote.interface';
@Injectable({
  providedIn: 'root'
})
export class QuoteService  extends EntityCollectionServiceBase<IQuote> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Quote',serviceElementsFactory);
  }
}
