import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyContent } from './privacy-policy-content';

describe('PrivacyPolicyContent', () => {
  let component: PrivacyPolicyContent;
  let fixture: ComponentFixture<PrivacyPolicyContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
