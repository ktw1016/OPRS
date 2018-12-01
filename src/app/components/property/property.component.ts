import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: Property;

  constructor() { }

  ngOnInit() {
  }

}
