import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailsComponent } from './add-emails.component';

describe('AddEmailsComponent', () => {
  let component: AddEmailsComponent;
  let fixture: ComponentFixture<AddEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
