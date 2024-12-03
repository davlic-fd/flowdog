export interface BasicEvent {
  deviceId: string;
  eventDate: string;
  type: "deviceMalfunction"|"temperatureExceeded"|"doorUnlocked";
  evtData: object;
}
