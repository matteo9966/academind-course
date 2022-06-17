import { LoggerService } from "./LoggerService.service"

export const LoggerServiceFactory = ()=>{
    return new LoggerService();
}