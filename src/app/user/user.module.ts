import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './list/user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserComponent],
  providers: [UserService],
})
export class UserModule {}
