import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MainComponent } from './main/main.component';
import { ReversePipe } from './reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    MainComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
