import { Component, Inject, ChangeDetectorRef  } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
  destroyByClick = false;
  loading = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  constructor(
    private authService: AuthService,
    service: NbAuthService,
    router: Router,
    cd: ChangeDetectorRef,
    @Inject(NB_AUTH_OPTIONS) options: {},
    private toastrService: NbToastrService,
  ) {
    super(service, options, cd, router);
  }

  registerUser(user) {
    this.loading = true;
    this.authService.register(user).subscribe(data => {
      if (data) {
        if (data.id) {
          this.showToast('success', 'Te has registrado satisfactoriamente', '');
          this.router.navigate(['/auth/login']);
        } else if (data.error) {
          for (const error of data.error.error) {
            this.showToast('danger', error, '');
          }
        }
        this.loading = false;
      }
    },
    err => {
      this.showToast('danger', 'Hubo un error, intente de nuevo', '');
    },
    );
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }
}
