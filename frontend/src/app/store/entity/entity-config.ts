import { EntityDataModuleConfig } from '@ngrx/data/src/entity-data-config';
import { entityMetaData } from './entity-metadata';

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: entityMetaData,
};
