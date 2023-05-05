import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createCarDomain(motor: IMotorcycle | null): Motorcycle | null {
    if (motor) {
      return new Motorcycle(motor);
    }
    return null;
  }

  public async create(motor: IMotorcycle) {
    const model = new MotorcycleODM();
    const newMotor = await model.create(motor);
    const message = this.createCarDomain(newMotor);
    return { status: 201, message };
  }
}