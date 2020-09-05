import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIssueComponent } from './submit-issue.component';

describe('SubmitIssueComponent', () => {
  let component: SubmitIssueComponent;
  let fixture: ComponentFixture<SubmitIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
