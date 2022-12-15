import { EntityMetadataMap } from '@ngrx/data';
import { transactionEntityMetadata } from '../transaction/transaction-entity-metadata';

export const entityMetaData: EntityMetadataMap = {
  Transaction: transactionEntityMetadata,
};
