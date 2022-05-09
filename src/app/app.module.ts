import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import appRoutes from './routerConfig';
import { ApiService } from './service/api.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
