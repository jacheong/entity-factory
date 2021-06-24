import { InjectionToken, Injector } from '@angular/core';
import { AService } from './a.service';
import { BService } from './b.service';
import { BaseEntity } from './base-entity';
import { CService } from './c.service';
import { Entity } from './entity.enum';

export interface EntityType {
	entity: Entity;
}

export const ENTITY_TYPE = new InjectionToken<EntityType>('entity-type-token');

export function EntityFactory(injector: Injector): AService | BService | CService {
	let service: any;

	switch (injector.get(ENTITY_TYPE).entity) {
		case Entity.A:
			service = injector.get(AService);
			break;
		case Entity.B:
			service = injector.get(BService);
			break;
		case Entity.C:
			service = injector.get(CService);
			break;
		default:
			service = injector.get(AService);

			break;
	}

	return service;
}
