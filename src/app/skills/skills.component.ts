import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  progress: number;
  target: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  codingSkills: Skill[] = [
    { name: 'HTML', progress: 0, target: 90 },
    { name: 'CSS', progress: 0, target: 85 },
    { name: 'Javascript', progress: 0, target: 70 },
    { name: 'Android', progress: 0, target: 70 },
    { name: 'C#', progress: 0, target: 50 }
  ];

  professionalSkills: Skill[] = [
    { name: 'Web Design UI', progress: 0, target: 95 },
    { name: 'Web Application UI', progress: 0, target: 90 },
    { name: 'Mobile Application UI', progress: 0, target: 70 },
    { name: 'Bootstrap', progress: 0, target: 85 },
    { name: 'PHP Frameworks (Laminas, Zend, Laravel)', progress: 0, target: 80 },
    { name: 'React, Angular', progress: 0, target: 80 },
    { name: 'C#, JavaFX UI', progress: 0, target: 50 }
  ];

  ngOnInit(): void {
    this.animateProgressBars();
  }

  animateProgressBars(): void {
    const speed = 30;
    this.codingSkills.forEach(skill => this.animateSkill(skill, speed));
    this.professionalSkills.forEach(skill => this.animateSkill(skill, speed));
  }

  animateSkill(skill: Skill, speed: number): void {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress <= skill.target) {
        skill.progress = progress;
        progress++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
}
