import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motor: IMotorcycle | null): Motorcycle | null {
    if (motor) {
      return new Motorcycle(motor);
    }
    return null;
  }

  public async create(motor: IMotorcycle) {
    const model = new MotorcycleODM();
    const newMotor = await model.create(motor);
    const message = this.createMotorcycleDomain(newMotor);
    return { status: 201, message };
  }

  public async getAll() {
    const model = new MotorcycleODM();
    const motorcycles = await model.getAll();
    const message = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return { status: 200, message };
  }

  public async getById(id: string) {
    const model = new MotorcycleODM();
    if (!isValidObjectId(id)) {
      const message = { message: 'Invalid mongo id' };
      return { status: 422, message };
    }
    const motorcycle = await model.getById(id);
    if (!motorcycle) {
      const message = { message: 'Motorcycle not found' };
      return { status: 404, message };
    }
    const message = this.createMotorcycleDomain(motorcycle);
    return { status: 200, message };
  }
}