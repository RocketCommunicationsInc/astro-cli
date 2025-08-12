import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';

@Component({
  selector: 'app-global-status-bar',
  imports: [AstroComponentsModule],
  templateUrl: './global-status-bar.component.html',
  styleUrl: './global-status-bar.component.css',
})
export class GlobalStatusBarComponent {
  darkMode: boolean = true;
  appsOpen: boolean = false;

  handleDarkMode() {
    this.darkMode
      ? document.body.classList.add('light-theme')
      : document.body.classList.remove('light-theme');

    this.darkMode = !this.darkMode;
    this.appsOpen = false;
  }
}
