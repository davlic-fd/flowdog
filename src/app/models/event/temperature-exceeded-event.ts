import {BasicEvent} from './basic-event';

export interface TemperatureExceededEvent extends BasicEvent {
  type: "temperatureExceeded";
  evtData: {
    temp: number;
    threshold: number;
  };
}
