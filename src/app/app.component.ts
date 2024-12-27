import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [SubscribeService]
})
export class AppComponent {
  // title = 'angular-services-dependency-injection';
  title = 'angular-observable';

  data: any[] = [];

  //observable
  //the observer receives all the subscribers who subscribed to myObservable
  myObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5, 6]); //next method is used to emit some value
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    setTimeout(() => {observer.next(4)}, 4000);
    setTimeout(() => {observer.next(5)}, 5000);
    setTimeout(() => {observer.next(6)}, 6000);

  });

  GetAsyncData() {
    //observer
    //next error complete
    this.myObservable.subscribe((value: any) => {
      this.data.push(value)
    });
  }
}
