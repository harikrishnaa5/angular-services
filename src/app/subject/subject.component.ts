import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    let subject = new Subject();
    const data = ajax('https://randomuser.me/api/');
    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));

    data.subscribe(subject);

    // subject.subscribe((data) => {
    //   console.log(data)
    // })
    // subject.subscribe((data) => {
    //   console.log(data)
    // })
    // subject.next(Math.random())
  }
}
