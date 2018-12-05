import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  properties: Property[];

  constructor(public propertyService: PropertyService) {
    this.properties = this.propertyService.getSearchProperties();
    console.log(this.properties);
  }

  ngOnInit() {
  }

}
