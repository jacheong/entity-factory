import { Component, Inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EntityType, ENTITY_TYPE } from './entity-type.config';
import { Entity } from './entity.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'service-factory-two';

	constructor(
    private router: Router,
    @Inject(ENTITY_TYPE) private entityType: EntityType
  ) {
		this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe({
			next: (event: NavigationStart) => {
				this.setEntityType(event.url.split('/')[1]);
			}
		});
	}

	setEntityType(entity: string) {
		switch (entity) {
			case Entity.A:
        this.entityType.entity = Entity.A;
				break;
			case Entity.B:
        this.entityType.entity = Entity.B;
				break;
			case Entity.C:
        this.entityType.entity = Entity.C;
				break;
			default:
        this.entityType.entity = Entity.A;
				break;
		}
	}
}
