import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const { status, message } = await this.service.create(this.req.body);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const { status, message } = await this.service.getAll();
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}