import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public async create(car: ICar) {
    const model = new CarODM();
    const newCar = await model.create(car);
    return { status: 200, message: newCar };
  }
}