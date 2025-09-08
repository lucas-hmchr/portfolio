import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeContent } from './legal-notice-content';

describe('LegalNoticeContent', () => {
  let component: LegalNoticeContent;
  let fixture: ComponentFixture<LegalNoticeContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticeContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
