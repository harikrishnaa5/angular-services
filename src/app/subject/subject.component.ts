import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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
    // let subject = new Subject();
    // let subject = new BehaviorSubject(100);
    let subject = new ReplaySubject(2);

    // const data = ajax('https://randomuser.me/api/');
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));

    // data.subscribe(subject);

    subject.next(100);
    subject.next(200);
    subject.next(300);

    subject.subscribe((data) => {
      console.log('Subscriber1 ' + data);
    });

    subject.subscribe((data) => {
      console.log('Subscriber2 ' + data);
    });

    subject.next(499);

    subject.subscribe((data) => {
      console.log('Subscriber3 ' + data);
    });
    subject.next(2024);
  }
}
