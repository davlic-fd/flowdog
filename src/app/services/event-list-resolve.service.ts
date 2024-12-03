import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {EventRepositoryService} from '../repositories/event-repository.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolveService {

  constructor(
    private eventRepository: EventRepositoryService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventRepository.getAll();
  }
}
