import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '@interfaces/req-response';

import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UserService);

  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed( () => {
    if(this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return `Información del Usuario`;
  })


  // constructor(){
  //   this.route.params.subscribe( params => {
  //     console.log(params);
  //   });    
  // }
}
