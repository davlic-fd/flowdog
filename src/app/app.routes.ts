import { Routes } from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
import {EventListResolveService} from './services/event-list-resolve.service';

export const routes: Routes = [
  {
    path: '',
    component: EventsListComponent,
    resolve: {
      events: EventListResolveService
    }
  }
];
