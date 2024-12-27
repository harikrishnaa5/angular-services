export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(`New user : ${name} is created with status: ${status}`);
  }
}
