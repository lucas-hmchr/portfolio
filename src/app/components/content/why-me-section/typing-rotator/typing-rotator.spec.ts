import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingRotator } from './typing-rotator';

describe('TypingRotator', () => {
  let component: TypingRotator;
  let fixture: ComponentFixture<TypingRotator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingRotator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingRotator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
