import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/DipendencyInjection/LoggerService.service';
import { LOGGER_TOKEN } from 'src/app/DipendencyInjection/LoggerToken.token';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  constructor(@Inject(LOGGER_TOKEN) private loggerService:LoggerService) { }

  ngOnInit(): void {
    this.loggerService.logTheDay();
  }

}
