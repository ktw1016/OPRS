import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from 'src/app/services/property.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { forEach } from '@angular/router/src/utils/collection';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  property: Property = new Property();
  currentUser;
  constructor(
    public propertyService: PropertyService,
    public accountService: AccountService,
    public storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  addProperty() {
    this.property.propertyId = this.propertyService.createId();
    this.propertyService.addProperty(this.property);
    this.currentUser.propertyList.push(this.property.propertyId);
    this.accountService.updateAccount(this.currentUser);
  }

  uploadImage(event) {
    const files = event.target.files;
    for (const file of files) {
      const id = Math.random().toString(36).substring(2);
      const ref = this.storage.ref(id);
      ref.put(file).then(res => {
        res.ref.getDownloadURL().then(url => {
          this.property.photoURLs.push(url);
        });
      });
    }
  }
}
