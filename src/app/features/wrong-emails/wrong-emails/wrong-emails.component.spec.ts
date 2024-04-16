import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongEmailsComponent } from './wrong-emails.component';

describe('WrongEmailsComponent', () => {
  let component: WrongEmailsComponent;
  let fixture: ComponentFixture<WrongEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrongEmailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
