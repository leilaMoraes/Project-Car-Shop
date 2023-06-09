import { Model, Schema, model, models, UpdateQuery,
} from 'mongoose';
  
export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById({ _id: id });
  }

  public async updateById(id: string, vehicle: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id }, 
      { ...vehicle } as UpdateQuery<T>,
      { new: true },
    );
  }
}