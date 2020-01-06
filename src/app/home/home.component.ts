import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	projects: Project[] = [
		new Project('Milenial Global Pro', '../../assets/images/milenialglobalpro.png', 'http://milenialglobalpro.com'),
		new Project('Affirmation with Brainwaves', '../../assets/images/brainwaveaffirmation.png', 'https://play.google.com/store/apps/details?id=com.paffirmation'),
		new Project('Financial Calculator', '../../assets/images/financialcalculator.png', 'https://play.google.com/store/apps/details?id=com.ffx.fcalculator')
	]

	constructor(private titleService: Title) {
		// Setting up the title
		this.titleService.setTitle('Home | Felix Husen');
	}

	ngOnInit() {

	}

}
