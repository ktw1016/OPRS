import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @Input() property: Property;
  currentUser;
  isCustomer = false;

  constructor(public propertyService: PropertyService, public accountService: AccountService) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.currentUser !== null) {
      this.isCustomer = this.currentUser.type === 'Customer';
    }
  }

  ngOnInit() {}

  addToVisitingList() {
    this.currentUser.visitationList.push(this.property.propertyId);
    this.accountService.updateAccount(this.currentUser);
  }
}
