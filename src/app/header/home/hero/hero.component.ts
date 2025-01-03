import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [SubscribeService] // using this providers we are telling angular what to provide
})
export class HeroComponent {
  //using this constructor we are telling angular how to provide the dependency
  // constructor(private subService: SubscribeService) {}

  //also we can tell angular this by using an 'inject' function
  subService = inject(SubscribeService)
  onSubscription() {
    this.subService.OnSubscribeClicked('yearly');
  }
}
