import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpostComponent } from './popularpost.component';

describe('PopularpostComponent', () => {
  let component: PopularpostComponent;
  let fixture: ComponentFixture<PopularpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
