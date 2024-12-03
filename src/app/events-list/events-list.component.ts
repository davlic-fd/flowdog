import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Event} from '../models/event/event';
import dayjs from 'dayjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events-list',
  imports: [
    CommonModule
  ],
  templateUrl: './events-list.component.html',
  standalone: true,
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {

  public dateFormat = 'YYYY-MM-DD HH:mm:ss';
  public events: Event[] = [];
  public currentEvent: Event|null = null;

  constructor(
    protected route: ActivatedRoute,
    protected modalService: NgbModal
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    this.events.map((event: Event) => {
      event.eventDate = dayjs(new Date(parseInt(event.eventDate) * 1000)).format(this.dateFormat);
      if (event.type === "doorUnlocked") {
        event.evtData.unlockDate = dayjs(new Date(parseInt(event.evtData.unlockDate) * 1000)).format(this.dateFormat);
      }
    });
  }

  openModal(content: any, event: Event) {
    this.currentEvent = event;
    this.modalService.open(content);
  }

  closeModal() {
    this.currentEvent = null;
    this.modalService.dismissAll();
  }

  getObjectProperties(obj: Event|null): { key: string, value: any }[] {
    if (!obj) {
      return [];
    }

    return Object.keys(obj.evtData).map(key => ({ key, value: obj.evtData[key as keyof typeof obj.evtData] }));
  }
}
