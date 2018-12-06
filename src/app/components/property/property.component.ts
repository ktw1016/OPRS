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

  streetName: string;
  location: string;
  propertyType: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  otherRooms: number;

  currentUser;
  isEdit = false;
  isCustomer = false;

  constructor(public propertyService: PropertyService, public accountService: AccountService) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.currentUser !== null) {
      this.isCustomer = this.currentUser.type === 'Customer';
    }
  }

  deleteProperty(event){
    var propertyId = (String(<HTMLElement>event.path[1].id));
    this.propertyService.deleteProperty(propertyId);
  }

  clickEdit(){
    this.isEdit = true;
  }

  clickApply(event){
    this.editProperty(String(<HTMLElement>event.path[0].id));
    this.isEdit = false;
  }
  clickCancel(){
    this.isEdit = false;
  }

  editProperty(id: string){
    console.log(id);
    this.propertyService.editProperty(id, this.streetName, this.location, this.propertyType, this.rent, this.bedrooms, this.bathrooms, this.otherRooms);
  }

  ngOnInit() {}

  addToVisitingList() {
    this.currentUser.visitationList.push(this.property.propertyId);
    this.accountService.updateAccount(this.currentUser);
  }
}
