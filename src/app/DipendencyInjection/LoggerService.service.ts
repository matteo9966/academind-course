export class LoggerService{ // questo è il service,voglio usarlo dentro un component o qualcosa
    constructor(){}
    logTheDay(){
        console.log('today is:');
        console.log(new Date());
    }
}