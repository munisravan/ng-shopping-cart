import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ShoppingCartModule} from '../../src/shopping-cart.module';
import {DemoAddToCartComponent} from './demo-add-to-cart/demo-add-to-cart.component';
import {DemoCheckoutComponent} from './demo-cart-checkout/demo-cart-checkout.component';
import {DemoCartSummaryComponent} from './demo-cart-summary/demo-cart-summary.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DemoCartViewComponent} from './demo-cart-view/demo-cart-view.component';
import {DemoCartShowcaseComponent} from './demo-cart-showcase/demo-cart-showcase.component';
import {DemoCartItem} from './demo-cart-item';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DemoShowcaseItemComponent} from './demo-showcase-item-component/demo-showcase-item.component';
import {DemoComponent} from './demo.component';

@NgModule({
  declarations: [
    DemoComponent,
    DemoAddToCartComponent,
    DemoCheckoutComponent,
    DemoCartSummaryComponent,
    DemoCartViewComponent,
    DemoCartShowcaseComponent,
    DemoShowcaseItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ShoppingCartModule.forRoot({
      itemType: DemoCartItem,
      serviceType: 'sessionStorage',
      serviceOptions: {storageKey: 'NgCartDemo', clearOnError: true},
    }),
    NgbModule.forRoot(),
  ],
  bootstrap: [DemoComponent],
  entryComponents: [DemoShowcaseItemComponent]
})
export class AppModule {
}
