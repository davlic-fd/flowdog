import {DeviceMalfunctionEvent} from './device-malfunction-event';
import {TemperatureExceededEvent} from './temperature-exceeded-event';
import {DoorUnlockedEvent} from './door-unlocked-event';

export type Event = DeviceMalfunctionEvent | TemperatureExceededEvent | DoorUnlockedEvent;
