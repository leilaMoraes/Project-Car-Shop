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
}