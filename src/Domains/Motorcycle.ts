import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.category = 'Street' || 'Custom' || 'Trail';
    this.engineCapacity = motor.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }  

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}