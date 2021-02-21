import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Creado con ♥ por <b>MACGIA</b> 2021
    </span>
    <div class="socials">
      <a
        class="btn btn-icon btn-neutral btn-round btn-simple mr-1"
        href="https://www.instagram.com/alumn_usb/"
        target="_blank"
      >
        <i class="fab fa-instagram"> </i>
      </a>
      <a
        class="btn btn-icon btn-neutral btn-round btn-simple mr-1"
        href="https://twitter.com/alumn_usb/"
        target="_blank"
      >
        <i class="fab fa-twitter"> </i>
      </a>
      <a
        class="btn btn-icon btn-neutral btn-round btn-simple mr-1"
        href="https://www.facebook.com/alumnusb/"
        target="_blank"
      >
        <i class="fab fa-facebook"> </i>
      </a>
      <a
        class="btn btn-icon btn-neutral btn-round btn-simple mr-1"
        href="https://www.youtube.com/c/alumnusb/"
        target="_blank"
      >
        <i class="fab fa-youtube"> </i>
      </a>
      <a
        class="btn btn-icon btn-neutral btn-round btn-simple"
        href="https://www.linkedin.com/company/alumnusb/"
        target="_blank"
      >
        <i class="fab fa-linkedin"> </i>
      </a>
    </div>
  `,
})
export class FooterComponent {
}
