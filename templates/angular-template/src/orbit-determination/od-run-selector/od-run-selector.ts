import { Component, Input } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';

@Component({
  selector: 'app-od-run-selector',
  imports: [AstroComponentsModule],
  templateUrl: './od-run-selector.html',
  styleUrl: './od-run-selector.css',
})
export class OdRunSelector {
  @Input() odRunItems: OrbitDeterminationItem[] = [
    {
      name: '',
      id: '',
      SV: '----',
      date: 'YYYY-MM-DD 00:00:00 Z',
      disabled: true,
    },
  ];
}
