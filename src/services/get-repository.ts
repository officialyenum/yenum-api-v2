import { EntityTarget, Repository } from 'typeorm';
import { AppDataSource, TestAppDataSource } from '../data-source';

const handleGetRepository = <T>(entity: EntityTarget<T>): Repository<T> => {
  const environment = process.env.NODE_ENV || 'development';
  return environment === 'test'
    ? TestAppDataSource.getRepository(entity)
    : AppDataSource.getRepository(entity);
};

export default handleGetRepository;