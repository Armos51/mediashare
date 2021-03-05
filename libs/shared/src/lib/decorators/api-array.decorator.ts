import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray } from 'class-validator';
import { ObjectId } from 'mongodb';
import { ApiDecoratorOptions, apiDecoratorDefaults } from '../models';
const objectId = new ObjectId();

const ApiArray = function ({ required, type, example = ['item'] }: ApiDecoratorOptions = apiDecoratorDefaults) {
  return applyDecorators(IsArray(), ApiProperty({ type: type, required, isArray: true, example }));
};

const ObjectIdArray = function ({ required }: ApiDecoratorOptions = apiDecoratorDefaults) {
  return ApiArray({ required, type: ObjectId, example: [objectId] });
};

export { ApiArray, ObjectIdArray };
