import { DeleteResult } from 'typeorm';

export interface IBaseRepository<T> {
  create(data: T | any): Promise<T>;
  delete(id: string): Promise<DeleteResult>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
}
