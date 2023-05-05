import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allMotorcycles, id, motorcycleInput, motorcycleOutput, updateInput,
  updateOutput, wrongId } from '../../mocks/motorcycleMocks';

describe('Testa MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cria uma nova moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result).to.be.deep.equal({ status: 201, message: motorcycleOutput });
  });

  it('Retorna todas as motos do banco de dados', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal({ status: 200, message: allMotorcycles });
  });

  it('Retorna uma moto através do id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.getById(id);

    expect(result).to.be.deep.equal({ status: 200, message: motorcycleOutput });
  });

  it('Retorna um erro caso o id não exista no banco de dados (getById)', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new MotorcycleService();
    const result = await service.getById(wrongId);
    const message = { message: 'Motorcycle not found' };

    expect(result).to.be.deep.equal({ status: 404, message });
  });

  it('Retorna um erro caso o id esteja num formato inválido (getById)', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new MotorcycleService();
    const result = await service.getById('1');
    const message = { message: 'Invalid mongo id' };

    expect(result).to.be.deep.equal({ status: 422, message });
  });

  it('Atualiza uma moto através do id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

    const service = new MotorcycleService();
    const result = await service.updateById(id, updateInput);

    expect(result).to.be.deep.equal({ status: 200, message: updateOutput });
  });

  it('Retorna um erro caso o id não exista no banco de dados (update)', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new MotorcycleService();
    const result = await service.updateById(wrongId, updateInput);
    const message = { message: 'Motorcycle not found' };

    expect(result).to.be.deep.equal({ status: 404, message });
  });

  it('Retorna um erro caso o id esteja num formato inválido (update)', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const service = new MotorcycleService();
    const result = await service.updateById('1', updateInput);
    const message = { message: 'Invalid mongo id' };

    expect(result).to.be.deep.equal({ status: 422, message });
  });
});
