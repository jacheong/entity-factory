import { Component, Inject, InjectionToken, Injector, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEntity } from 'src/app/base-entity';
import { EntityFactory } from 'src/app/entity-type.config';

export const LAZY_ENTITY = new InjectionToken<BaseEntity>('lazy-entity-token');

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  providers: [
    {
      provide: LAZY_ENTITY,
      useFactory: EntityFactory,
      deps: [Injector]
    }
  ]
})
export class LazyComponent implements OnInit {

  polling$: Observable<number>;

  constructor(
    @Inject(LAZY_ENTITY) private localEntityService: BaseEntity
  ) { }

  ngOnInit(): void {
    this.localEntityService.log();
    this.polling$ = this.localEntityService.getPolling();
  }

}
