import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { OdRunSelector } from './od-run-selector/od-run-selector';
import { OdRunInputs } from './od-run-inputs/od-run-inputs';

@Component({
  selector: 'app-orbit-determination',
  imports: [AstroComponentsModule, OdRunSelector, OdRunInputs],
  templateUrl: './orbit-determination.html',
  styleUrl: './orbit-determination.css',
})
export class OrbitDetermination {}
