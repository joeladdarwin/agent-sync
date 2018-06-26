import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeadernavComponent } from './headernav/headernav.component';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    HeadernavComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    HeadernavComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
