import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private titleService: Title) {
		// Setting up the title
		this.titleService.setTitle('Home | Felix Husen');
	}

	ngOnInit() {

	}

}
