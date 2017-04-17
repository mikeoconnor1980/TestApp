import { NavBarItem } from '../../core/models/navbar-item';

export class NavBarItemService{
  getAll() : NavBarItem[] {
    return [
      {name: 'Home', routerLink: '/home', class: 'glyphicon-home', },
      {name: 'Counter', routerLink: '/counter', class: 'glyphicon-education'},
      {name: 'Fetch Data', routerLink: '/fetch-data', class: 'glyphicon-th-list' },
      {name: 'Test Data', routerLink: '/home', class: 'glyphicon-home' },
    ];
  }
}