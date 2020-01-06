import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	navbarOpen: boolean = false;
	routerUrl: string = '/';

	constructor(private router: Router) {
		// Assigning the current url to the routerUrl
		this.routerUrl = this.router.url;
	}

	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	ngOnInit() {}

}
