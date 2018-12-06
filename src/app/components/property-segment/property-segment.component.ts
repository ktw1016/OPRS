import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-segment',
  templateUrl: './property-segment.component.html',
  styleUrls: ['./property-segment.component.scss']
})
export class PropertySegmentComponent implements OnInit {

  @Input() property: Property;

  constructor() { }

  ngOnInit() {
  }

}
