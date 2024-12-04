
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'About Me'
        },
        {
            label: 'Experience'
        },
        {
            label: 'Education'
        },
        {
            label: 'Projects'
        },
        {
          label: 'Contact Me'
        }
    ];
  }
  isMenuOpen: boolean = false; // State to track if the menu is open

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
