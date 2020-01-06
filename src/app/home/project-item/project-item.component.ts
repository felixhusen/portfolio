import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'project',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input('item') project: Project;

  constructor() { }

  ngOnInit() {
  }

}
