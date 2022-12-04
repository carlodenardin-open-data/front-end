import { Audited } from "../../common/interfaces/audited";

export interface Coordinate extends Audited {
  latitude: number;
  longitude: number;
}
