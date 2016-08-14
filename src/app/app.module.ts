
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HomeComponent } from './Home.component';
import { KataModule } from './katas/kata.module';
import { HttpModule } from '@angular/http'

@NgModule({
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    KataModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}