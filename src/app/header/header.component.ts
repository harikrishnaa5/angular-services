import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SubscribeService]
})
export class HeaderComponent {
  constructor(private subService: SubscribeService) {}

  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscription() {
    this.subService.OnSubscribeClicked('quaterly')
  }
}
