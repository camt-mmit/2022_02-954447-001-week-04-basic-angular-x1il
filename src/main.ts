import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FriendComponent } from './app/friend/friend.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { ProfileComponent } from './app/profile/profile.component';
import { StatusComponent } from './app/status/status.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'hello-word', pathMatch: 'full' },
      { path: 'hello-world', component: HelloWorldComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'friend', component: FriendComponent },
      { path: 'status', component: StatusComponent },
    ]),
  ],
}).catch((err) => console.error(err));
