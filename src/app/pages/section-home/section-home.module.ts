import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionHomePageRoutingModule } from './section-home-routing.module';

import { SectionHomePage } from './section-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionHomePageRoutingModule
  ],
  declarations: [SectionHomePage]
})
export class SectionHomePageModule {}
