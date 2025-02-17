import { Component } from '@angular/core';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarHeaderComponent, SidebarMainComponent, SidebarFooterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
