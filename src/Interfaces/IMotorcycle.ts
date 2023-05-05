import IVehicles from './IVehicles';

export default interface IMotorcycle extends IVehicles{
  category: string;
  engineCapacity: number;
}