import { DeleteResult } from 'typeorm';
import { IBaseRepository } from './base.interface.repository';
import { Repository } from 'typeorm';
export abstract class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private repository: Repository<T>) {}

  async create(data: any): Promise<T> {
    return await this.repository.save(data);
  }
  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }
  async findById(id: number): Promise<T> {
    return await this.repository.findOne<T>(id);
  }
  // async findWithRelations(relations: any): Promise<T> {
  //   return await this.repository.find(relations);
  // }
}
