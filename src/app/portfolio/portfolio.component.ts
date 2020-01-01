import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	constructor(private titleService: Title) { 
		// Setting up the title
		this.titleService.setTitle('Portfolio | Felix Husen');
	}

	ngOnInit() {}

}
