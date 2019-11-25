import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Injector } from '@angular/core';

import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { ShellComponent } from '../components/shell/shell.component';
import 'zone.js';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    ShellComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(ShellComponent, injector);
    const custElem = createCustomElement(ShellComponent, {injector : this.injector, strategyFactory});
    customElements.define('custom-element', custElem);

}
ngDoBootstrap() {

}
}
