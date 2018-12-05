import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/models/user-account';
import { AuthService } from 'src/app/services/auth.service';
import { PropertyService } from 'src/app/services/property.service';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/property';


@Component({
  selector: 'app-owner-property-list',
  templateUrl: './owner-property-list.component.html',
  styleUrls: ['./owner-property-list.component.scss']
})
export class OwnerPropertyListComponent implements OnInit {
  ownerPropertiesId: [];
  ownerProperties: Property[];
  signedIn: Boolean;

  constructor(public propertyService: PropertyService) {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.signedIn = true;
      let currUser = JSON.parse(localStorage.getItem('user'));
      this.ownerPropertiesId = currUser.propertyList;
      console.log(this.ownerPropertiesId);

      this.getOwnerProperties(this.ownerPropertiesId);


    } else {
      this.signedIn = false;
    }

  }

  ngOnInit() {
  }

  getOwnerProperties(ownerPropertiesId) {
    //console.log(this.ownerPropertiesId[0]);
    for (let i=0; i<this.ownerPropertiesId.length; i++) {

      this.propertyService.getProperty(ownerPropertiesId[i]).subscribe(values => {
        this.ownerProperties.push(values);
        console.log(values);
      });
    }
    console.log(this.ownerProperties[0]);
   }

}
