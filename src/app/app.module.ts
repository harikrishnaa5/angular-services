import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent,
    SidebarComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [SubscribeService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
