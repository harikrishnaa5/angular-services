import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random())
    // })

    // SUBJECT
    // let subject = new Subject();

    // BEHAVIOR SUBJECT
    // let subject = new BehaviorSubject(100);

    // REPLAY SUBJECT
    // let subject = new ReplaySubject(2);

    // const data = ajax('https://randomuser.me/api/');
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));

    // data.subscribe(subject);

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    // subject.subscribe((data) => {
    //   console.log('Subscriber1 ' + data);
    // });

    // subject.subscribe((data) => {
    //   console.log('Subscriber2 ' + data);
    // });

    // subject.next(499);

    // subject.subscribe((data) => {
    //   console.log('Subscriber3 ' + data);
    // });
    // subject.next(2024);

    // ASYNC SUBJECT
    // const Subject = new AsyncSubject()

    // Subject.next(100)
    // Subject.next(200)
    // Subject.next(300)
    // Subject.next(400)
    // // Subject.complete()
  
    // Subject.subscribe(data => console.log('subscriber1 : ' + data))
    
    // Subject.subscribe(data => console.log('subscriber2 : ' + data))
    // Subject.next(1400)
    // Subject.complete()
    
    // Subject.subscribe(data => console.log('subscriber3 : ' + data))

    // PROMISE 
    const promise = new Promise((resolve, reject) => {
      console.log('promise is called')
      resolve(100)
      resolve(200)
      resolve(300)
    })
    promise.then((data) => console.log(data, 'promise data'))

    // OBSERVABLE
    const obs = new Observable((data) => {
      console.log('observable is called')
      data.next(100)
      data.next(200)
      data.next(300)
    })

    obs.subscribe((val) => console.log(val))

  }
}
