import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(`New user : ${name} is created with status: ${status}`);
  }
}
