import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { BaseEntity } from './base-entity';

@Injectable({
  providedIn: 'any'
})
export class BService implements BaseEntity {
  private polling$: Observable<number> = interval(2000).pipe(shareReplay());

  log() {
    console.log(`B Entity...`);
  }

  getPolling(): Observable<number> {
    return this.polling$;
  }

  constructor() { }
}
