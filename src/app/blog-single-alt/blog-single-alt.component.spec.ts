import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleAltComponent } from './blog-single-alt.component';

describe('BlogSingleAltComponent', () => {
  let component: BlogSingleAltComponent;
  let fixture: ComponentFixture<BlogSingleAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingleAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
