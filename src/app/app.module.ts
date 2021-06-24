import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENTITY_TYPE } from './entity-type.config';
import { Entity } from './entity.enum';
import { EagerModule } from './eager/eager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    EagerModule
  ],
  providers: [
    {
      provide: ENTITY_TYPE,
      useValue: {
        entity: Entity.A
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
