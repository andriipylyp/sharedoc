import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionsPageComponent } from './resolutions-page.component';

describe('ResolutionsPageComponent', () => {
  let component: ResolutionsPageComponent;
  let fixture: ComponentFixture<ResolutionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
