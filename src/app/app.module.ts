import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrogueriaComponent } from './Components/drogueria/drogueria.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './Components/menu-lateral/menu-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';

@NgModule({
  declarations: [
    AppComponent,
    DrogueriaComponent,
    ClienteComponent,
    FarmacoComponent,
    MenuLateralComponent,
    RepuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
