import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
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

  public async getById() {
    try {
      const { id } = this.req.params;
      const { status, message } = await this.service.getById(id);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    try {
      const { id } = this.req.params;
      const { status, message } = await this.service.updateById(id, this.req.body);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}