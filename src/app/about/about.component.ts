import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor(private titleService: Title) { 
		// Setting up the title
		this.titleService.setTitle('About Me | Felix Husen');
	}

	ngOnInit() {}
}
