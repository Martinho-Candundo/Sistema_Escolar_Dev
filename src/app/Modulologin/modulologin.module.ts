import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulologinRoutingModule } from './modulologin-routing.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TelaLoginComponent,
  ],
  imports: [
    CommonModule,
    ModulologinRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
})
export class ModulologinModule { }
