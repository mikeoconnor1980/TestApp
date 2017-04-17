import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../models/navbar-item';
import { NavBarItemService } from '../../../calendar/services/navbar-item.service';

@Component({
  selector: 'navbar-item-list',
  templateUrl: './navbar-item-list.component.html'
})
export class NavBarItemListComponent implements OnInit{
  NavBarItems: NavBarItem[] = [];
  constructor(private _navbaritemService : NavBarItemService){ }

  ngOnInit(){
    this.NavBarItems = this._navbaritemService.getAll();
  }
}