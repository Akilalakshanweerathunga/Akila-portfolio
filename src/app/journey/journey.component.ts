import { Component, OnInit } from '@angular/core';

interface JourneyItem {
  period: string;
  title: string;
  institution: string;
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  education: JourneyItem[] = [
    {
      period: '2020-Present',
      title: 'Undergraduate BSE(Hons). Software Engineering',
      institution: 'The Open University Sri Lanka'
    }
  ];

  experience: JourneyItem[] = [
    {
      period: '2023-Present',
      title: 'Trainee UI Developer',
      institution: 'Portion (pvt) Ltd.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
