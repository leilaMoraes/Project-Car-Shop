import IVehicles from './IVehicles';

export default interface ICar extends IVehicles{
  doorsQty: number;
  seatsQty: number;
}