import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannersComponent
  ],
  imports: [
    CommonModule
  ],
 exports:[
    HeaderComponent,
    FooterComponent,
    BannersComponent
  ]
})
export class SharedModule { }
