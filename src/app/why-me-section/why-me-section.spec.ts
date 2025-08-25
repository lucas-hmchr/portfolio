import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeSection } from './why-me-section';

describe('WhyMeSection', () => {
  let component: WhyMeSection;
  let fixture: ComponentFixture<WhyMeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
