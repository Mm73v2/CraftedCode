import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsItemComponent } from './skills-item.component';

describe('SkillsItemComponent', () => {
  let component: SkillsItemComponent;
  let fixture: ComponentFixture<SkillsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
