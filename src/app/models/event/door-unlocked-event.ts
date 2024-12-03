import {BasicEvent} from './basic-event';

export interface DoorUnlockedEvent extends BasicEvent {
  type: "doorUnlocked";
  evtData: {
    unlockDate: string;
  };
}
