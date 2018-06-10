import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemEnquiryPage } from './item-enquiry';

@NgModule({
  declarations: [
    ItemEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemEnquiryPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemEnquiryPage
  ]
})
export class ItemEnquiryPageModule { }
