import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable,of,throwError } from 'rxjs';
import { IQuote } from '../quote/quote.interface';


const data:Record<string,IQuote> = {"1":{author:"marco aurelio",id:1,quote:"abemus papa"},
"2":{author:"hiulius cesar",id:2,quote:"abemus casa"},
"3":{author:"bamben iuno",id:3,quote:"ena coid!"},
"4":{author:"ciro pizza aurelio",id:4,quote:"margherita abemus papa"},
"5":{author:"caio sempronio relio",id:5,quote:"teresa mangia sempre"},}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log({request})

    const {url,body,method} = request; 
    let quoteId:string|undefined = "" // id del quote quando vado a cercarlo

    if(method==='GET' && url.includes('quotes')){
      return of(new HttpResponse({status:200,body:Object.values(data)}))
    }

    switch (method) {
      case 'GET':
        if(url.includes('quote')){
          quoteId = url.split('/').pop();
          if(!quoteId){
            return throwError(()=>new HttpResponse({status:400}))
          }
          const quote = data[quoteId];
          if(!quote){
            return throwError(()=>new HttpResponse({status:400}))
          }
          else{
            return of(new HttpResponse({status:200,body:quote}))
          }

        }   
        break;
        // case 'POST':
        // case 'PUT': ... se funziona il get poi fai tutti gli altri
          
      

    
      default:
        return of(new HttpResponse({status:200})) 
        
    }
    

    return next.handle(request);
  }
}
