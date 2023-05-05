import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const model = 'Honda Cb 600f Hornet';

const id = '6348513f34c397abcad040b2';

const wrongId = '6348213f34c397abcad040b2';

const motorcycleInput: IMotorcycle = {
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutput: Motorcycle = new Motorcycle({
  id,
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

const allMotorcycles: IMotorcycle[] = [
  {
    id,
    model,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const updateInput: IMotorcycle = {
  model,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const updateOutput: Motorcycle = new Motorcycle({
  id: '634852326b35b59438fbea2f',
  model,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
});

export { motorcycleInput, motorcycleOutput, allMotorcycles, id,
  wrongId, updateInput, updateOutput };