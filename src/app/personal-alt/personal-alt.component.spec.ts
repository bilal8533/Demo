import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAltComponent } from './personal-alt.component';

describe('PersonalAltComponent', () => {
  let component: PersonalAltComponent;
  let fixture: ComponentFixture<PersonalAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
