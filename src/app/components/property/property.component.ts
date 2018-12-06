import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: Property;

  constructor(public propertyService: PropertyService) {}

  deleteProperty(event){
    var propertyId = (<HTMLElement>event.path[1].id);
    this.propertyService.deleteProperty(propertyId);
    //console.log(id);
    //propertyService.deleteProperty();
  }

  ngOnInit() {}

}
