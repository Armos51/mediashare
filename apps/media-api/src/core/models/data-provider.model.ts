import { Injectable } from '@nestjs/common';
import { OptionalId } from 'mongodb';
import { PinoLogger } from 'nestjs-pino';
import { MongoRepository } from 'typeorm';
import { BcBaseEntity } from '../entities/base.entity';

/* TODO: @bcdevlucas - let's work together to change these */
export type MsDocumentType<T> = OptionalId<T>;
/**
 * Base class to extend for interacting with the database through a repository pattern.
 *
 * Add new standard database interaction methods here. Abstract away complex & nonstandard ones
 * @export
 * @class DataService
 * @template E - Model extends MsBaseEntity
 * @template R - repository extends MongoRepository<Model>
 */
@Injectable()
export abstract class DataService<
  E extends BcBaseEntity<E>,
  R extends MongoRepository<E>
> {
  constructor(
    protected repository: R,
    private entity: E,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(this.constructor.name);
  }

  /**
   * Create a repository item
   *
   * @param {E} dto
   * @return {*}
   * @memberof DataService
   */
  async create(dto: Partial<E>) {
    this.logger.info('create props', dto);

    try {
      const object = this.entity.factory(dto);
      const created = await this.repository.save(object);

      this.logger.info('create result', created);

      return created;
    } catch (error) {
      this.logger.error(`${this.constructor.name}.create ${error}`);
    }
  }

  /**
   * Find a document by Id
   *
   * @param {string} id
   * @return {*}
   * @memberof DataService
   */
  async findOne(id: string) {
    this.logger.info('findOne props', id);

    try {
      const document = await this.repository.findOne(id);
      this.logger.info('findOne result', document);
      return document;
    } catch (error) {
      this.logger.error(`${this.constructor.name}.findOne ${error}`);
    }
  }

  // async findByQuery( query: ) {

  //   try {
  //       const document = await this.repository.query
  //   } catch (error) {

  //   }
  // }

  /**
   * update a document by Id with deep  partial
   *
   * @param {string} id
   * @param {Partial<E>} dto
   * @return {*}
   * @memberof DataService
   */
  async update(id: string, dto: Partial<E>) {
    this.logger.info('update props', id, dto);
    try {
      const update = await this.repository.updateOne({ id }, dto);
      this.logger.info('update result', update);
      return update;
    } catch (error) {
      this.logger.error(`${this.constructor.name}.update ${error}`);
    }
  }

  /**
   * Remove document by Id
   *
   * @param {string} id
   * @return {*}
   * @memberof DataService
   */
  async remove(id: string) {
    try {
      this.logger.info('remove props', id);
      const removed = await this.repository.softDelete(id);
      return removed;
    } catch (error) {
      this.logger.error(`${this.constructor.name}.remove ${error}`);
    }
  }

  /**
   * Findall documents in collection
   *
   * @return {*}
   * @memberof DataService
   */
  async findAll() {
    this.logger.info('findAll');

    try {
      const findAll = await this.repository.find();
      this.logger.info('findAll result', findAll);
      return findAll;
    } catch (error) {
      this.logger.error(`${this.constructor.name}.findAll ${error}`);
    }
  }
}
