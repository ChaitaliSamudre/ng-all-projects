import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactList1Component } from './contact-list1.component';

describe('ContactList1Component', () => {
  let component: ContactList1Component;
  let fixture: ComponentFixture<ContactList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
