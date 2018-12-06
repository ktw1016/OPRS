import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitingListComponent } from './view-visiting-list.component';

describe('ViewVisitingListComponent', () => {
  let component: ViewVisitingListComponent;
  let fixture: ComponentFixture<ViewVisitingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVisitingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
