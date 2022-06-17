import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsumerComponent } from './Component/consumer/consumer.component';
import { LoggerServiceFactory } from './DipendencyInjection/LoggerService.factory';
import { LOGGER_TOKEN } from './DipendencyInjection/LoggerToken.token';

@NgModule({
  declarations: [AppComponent, ConsumerComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOGGER_TOKEN, // il token per identificare questo dependency
      useFactory: LoggerServiceFactory,
      deps: [], // nessun dependency
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
