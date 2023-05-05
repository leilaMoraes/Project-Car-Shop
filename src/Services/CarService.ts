import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const model = new CarODM();
    const newCar = await model.create(car);
    const message = this.createCarDomain(newCar);
    return { status: 201, message };
  }

  public async getAll() {
    const model = new CarODM();
    const cars = await model.getAll();
    const message = cars.map((car) => this.createCarDomain(car));
    return { status: 200, message };
  }

  public async getById(id: string) {
    const model = new CarODM();
    if (!isValidObjectId(id)) {
      const message = { message: 'Invalid mongo id' };
      return { status: 422, message };
    }
    const car = await model.getById(id);
    if (!car) {
      const message = { message: 'Car not found' };
      return { status: 404, message };
    }
    const message = this.createCarDomain(car);
    return { status: 200, message };
  }
}