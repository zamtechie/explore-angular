import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import appRoutes from './routerConfig';
import { HomeComponent } from './home/home.component';

import { ApiService } from './service/api.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
