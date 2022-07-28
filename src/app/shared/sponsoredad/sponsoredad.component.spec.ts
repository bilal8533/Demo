import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredadComponent } from './sponsoredad.component';

describe('SponsoredadComponent', () => {
  let component: SponsoredadComponent;
  let fixture: ComponentFixture<SponsoredadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoredadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
