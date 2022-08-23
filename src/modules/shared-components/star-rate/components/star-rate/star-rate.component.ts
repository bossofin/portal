import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss'],
  inputs: ['grade'],
})
export class StarRateComponent implements OnInit {
  private _grade: number;
  public get grade(): number {
    return this._grade;
  }
  public set grade(value: number) {
    this._grade = Math.round(value);
    this.gradeArray = Array(this.grade).fill('');
    if (this.grade < 5) {
      this.starOutlinedArray = Array(5 - this.grade).fill('');
    }
  }

  gradeArray: string[];
  starOutlinedArray: string[];
  constructor() {}

  ngOnInit(): void {}
}
