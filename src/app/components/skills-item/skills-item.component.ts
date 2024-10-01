import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
interface ISkills {
  title: string;
  percent: number;
  icon: string;
}
@Component({
  selector: 'app-skills-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.css',
})
export class SkillsItemComponent {
  @Input() skill!: ISkills;
}
