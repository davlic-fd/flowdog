import {BasicEvent} from './basic-event';

export interface DeviceMalfunctionEvent extends BasicEvent {
  type: "deviceMalfunction";
  evtData: {
    reasonCode: number;
    reasonText: string;
  };
}
