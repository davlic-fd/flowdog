import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventRepositoryService {

  private mockEvents: object[] = [
    {
      "deviceId": "A23",
      "eventDate": 1710355477,
      "type": "deviceMalfunction",
      "evtData": {
        "reasonCode": 12,
        "reasonText": "temp sensor not responding"
      }
    },
    {
      "deviceId": "A23",
      "eventDate": 1710354477,
      "type": "deviceMalfunction",
      "evtData": {
        "reasonCode": 11,
        "reasonText": "no power"
      }
    },
    {
      "deviceId": "F12HJ",
      "eventDate": 1710353477,
      "type": "temperatureExceeded",
      "evtData": {
        "temp": 10.3,
        "threshold": 8.5
      }
    },
    {
      "deviceId": "D12-1-12",
      "eventDate": 1710352477,
      "type": "doorUnlocked",
      "evtData": {
        "unlockDate": 1710350477
      }
    }
  ];
  constructor(
    // TODO: inject HttpClient
    // private http: HttpClient
  ) { }

  getAll(): object[] {
    // TODO: read from the API
    return this.mockEvents;
  }
}
