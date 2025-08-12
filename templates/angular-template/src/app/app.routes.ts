import { Routes } from '@angular/router';
import { Layout } from '../layout/layout';
import { OrbitDetermination } from '../orbit-determination/orbit-determination';
import { OrbitPropagation } from '../orbit-propagation/orbit-propagation';
import { ConjunctionAssessment } from '../conjunction-assessment/conjunction-assessment';

export const routes: Routes = [
  {
    component: Layout,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'orbit-determination',
        pathMatch: 'full',
      },
      {
        path: 'orbit-determination',
        component: OrbitDetermination,
      },
      {
        path: 'orbit-propagation',
        component: OrbitPropagation,
      },
      {
        path: 'conjunction-assessment',
        component: ConjunctionAssessment,
      },
    ],
  },
];
