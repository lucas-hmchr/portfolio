import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSection } from './skill-section';

describe('SkillSection', () => {
  let component: SkillSection;
  let fixture: ComponentFixture<SkillSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
