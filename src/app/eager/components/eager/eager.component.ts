import { Component, Inject, InjectionToken, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEntity } from 'src/app/base-entity';
import { EntityFactory } from 'src/app/entity-type.config';

export const LOCAL_ENTITY = new InjectionToken<BaseEntity>('local-entity-token');

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss'],
  providers: [
    {
      provide: LOCAL_ENTITY,
      useFactory: EntityFactory,
      deps: [Injector]
    }
  ]
})
export class EagerComponent implements OnInit {
  polling$: Observable<number>;

  constructor(
    @Inject(LOCAL_ENTITY) private localEntityService: BaseEntity
  ) { }

  ngOnInit(): void {
    this.localEntityService.log();
    this.polling$ = this.localEntityService.getPolling();
  }

}
