import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/shop', title: 'Projects',  icon:'shopping_cart', class: '' },
    { path: '/blog', title: 'Blog',  icon:'rss_feed', class: '' },
    { path: '/about', title: 'About Us',  icon:'supervisor_account', class: '' },
    { path: '/contact', title: 'Contact Us',  icon:'contact_mail', class: '' },
    { path: '/orders', title: 'Orders',  icon:'local_atm', class: '' },
    { path: '/reports', title: 'Reports',  icon:'reorder', class: '' },
  //  { path: '/', title: 'User Profile',  icon:'person', class: '' }, 
  //  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  //  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  //  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'account_circle', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
