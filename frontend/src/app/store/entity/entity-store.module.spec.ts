import { TestBed } from '@angular/core/testing';
import { EntityDataService } from '@ngrx/data';
import { StoreModule } from '../store.module';
import { EntityStoreModule } from './entity-store.module';

describe('EntityStoreModule', () => {
  let entityStoreModule: EntityStoreModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule],
    });

    entityStoreModule = TestBed.inject(EntityStoreModule);
  });

  it('should create the entity store module', () => {
    expect(entityStoreModule).toBeTruthy();
  });

  it('should have Transaction service registered', () => {
    const entityDataService = TestBed.inject(EntityDataService);

    expect(entityDataService.getService('Transaction')).toBeTruthy();
  });
});
