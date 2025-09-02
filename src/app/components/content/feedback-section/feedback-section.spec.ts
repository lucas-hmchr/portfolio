import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSection } from './feedback-section';

describe('FeedbackSection', () => {
  let component: FeedbackSection;
  let fixture: ComponentFixture<FeedbackSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
