import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { allCars,
  carInput, carOutput, id, updateInput, updateOutput, wrongId } from '../../mocks/carMock';

describe('Testa CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cria um novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal({ status: 201, message: carOutput });
  });

  it('Retorna todos os carros do banco de dados', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal({ status: 200, message: allCars });
  });

  it('Retorna um carro através do id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById(id);

    expect(result).to.be.deep.equal({ status: 200, message: carOutput });
  });

  it('Retorna um erro caso o id não exista no banco de dados (getById)', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new CarService();
    const result = await service.getById(wrongId);
    const message = { message: 'Car not found' };

    expect(result).to.be.deep.equal({ status: 404, message });
  });

  it('Retorna um erro caso o id esteja num formato inválido (getById)', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new CarService();
    const result = await service.getById('1');
    const message = { message: 'Invalid mongo id' };

    expect(result).to.be.deep.equal({ status: 422, message });
  });

  it('Atualiza um carro através do id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

    const service = new CarService();
    const result = await service.updateById(id, updateInput);

    expect(result).to.be.deep.equal({ status: 200, message: updateOutput });
  });

  it('Retorna um erro caso o id não exista no banco de dados (update)', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new CarService();
    const result = await service.updateById(wrongId, updateInput);
    const message = { message: 'Car not found' };

    expect(result).to.be.deep.equal({ status: 404, message });
  });

  it('Retorna um erro caso o id esteja num formato inválido (update)', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new CarService();
    const result = await service.updateById('1', updateInput);
    const message = { message: 'Invalid mongo id' };

    expect(result).to.be.deep.equal({ status: 422, message });
  });
});
