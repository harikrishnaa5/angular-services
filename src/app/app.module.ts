import { InjectionToken, NgModule } from '@angular/core';
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
import { LoggerService } from './Services/logger.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectComponent } from './subject/subject.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

export const USER_SERVICE = new InjectionToken<UserService>('USER_SERVICE')

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
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    UnsubscribeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    SubscribeService, 
    {provide: USER_SERVICE, useClass: UserService}, 
    // LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
