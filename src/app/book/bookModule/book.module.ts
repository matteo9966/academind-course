import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromBook from '../Store/book.reducer'
import { featureBookKey } from 'src/app/Store/store.FeatureSelector';
import { BookComponent } from '../book.component';
import { BookFormComponent } from '../book-form/book-form.component';


@NgModule({
  declarations: [BookComponent, BookFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureBookKey, fromBook.bookReducer),
  ],
  exports:[BookComponent, BookFormComponent]
})
export class BookModule { }
