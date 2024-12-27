import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';
import { from, Observable, of } from 'rxjs';

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
  array1: any[] = [3, 4, 5, 6, 7]
  array2: any[] = ['e', 'a', 'd', 'g', 'b', 'e']
  //observable
  //the observer receives all the subscribers who subscribed to myObservable
  // myObservable = new Observable((observer) => {
  //   // observer.next([1, 2, 3, 4, 5, 6]); //next method is used to emit some value
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {observer.error(new Error('Something happened'))}, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.next(6);
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  myObservable1 = of(this.array1, this.array2)
  myObservable2 = from('487564839')
  myPromise = new Promise((resolve, reject) => {
    resolve([4, 5, 3, 1, 2])
  })
  myObservable3 = from(this.myPromise)

  GetAsyncData() {
    //observer
    //next error complete
    this.myObservable3.subscribe({
      next: (value: any) => {
        this.data.push(value);
        console.log(value)
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All the data is streamed');
      },
    });
  }
}
