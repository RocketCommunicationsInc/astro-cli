import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';

type NavItem = {
  name: string;
  id: string;
  selected: boolean;
};

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, AstroComponentsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  expanded: boolean = false;
  currentNav: string = 'orbit-determination';
  navList: NavItem[] = [
    {
      name: 'Orbit Determination',
      id: 'orbit-determination',
      selected: true,
    },
    {
      name: 'Orbit Propagation',
      id: 'orbit-propagation',
      selected: false,
    },
    {
      name: 'Conjunction Assessment',
      id: 'conjunction-assessment',
      selected: false,
    },
  ];

  handleExpanded() {
    this.expanded = !this.expanded;
  }

  handleNavClick(id: string) {
    this.currentNav = id;
    this.navList = this.navList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: true,
        };
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
  }
}
