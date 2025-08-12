import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { GlobalStatusBarComponent } from '../components/global-status-bar/global-status-bar.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    AstroComponentsModule,
    GlobalStatusBarComponent,
    SideNavComponent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
