import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/models/user-account';
import { AuthService } from 'src/app/services/auth.service';
import { PropertyService } from 'src/app/services/property.service';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-view-visiting-list',
  templateUrl: './view-visiting-list.component.html',
  styleUrls: ['./view-visiting-list.component.scss']
})
export class ViewVisitingListComponent implements OnInit {
  visitingPropertiesId = [];
  visitingProperties: Property[];
  signedIn: Boolean;

  constructor(public propertyService: PropertyService) {
    this.visitingProperties = [];
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.signedIn = true;
      const currUser = JSON.parse(localStorage.getItem('user'));
      this.visitingPropertiesId = currUser.visitationList;
      console.log(this.visitingPropertiesId);

      this.getVisitationProperties(this.visitingPropertiesId);
    } else {
      this.signedIn = false;
    }

  }

  ngOnInit() {
  }

  getVisitationProperties(visitingPropertiesId) {
    for (let i = 0; i < this.visitingPropertiesId.length; i++) {
      this.propertyService
        .getProperty(visitingPropertiesId[i])
        .subscribe(values => {
          this.visitingProperties.push(values);
          console.log(values);
        });
    }
    console.log(this.visitingProperties[0]);
  }

}
