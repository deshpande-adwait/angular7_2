import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindable',
  templateUrl: './bindable.component.html',
  styleUrls: ['./bindable.component.css']
})
export class BindableComponent implements OnInit {

  username:string = '';
  isDisplayed:boolean = false;
  clicksWithTimestamps: Array<Date> = [];
  noOfClicks: number = 0

  constructor() { }

  ngOnInit() {
    this.username = '';
    this.isDisplayed = false;
    this.clicksWithTimestamps = [];
    this.noOfClicks = 0;
  }

  onReset():void {
    this.username = '';
  };

  onToggleDisplay(): void {

    this.isDisplayed = !this.isDisplayed;
    this.clicksWithTimestamps.push(new Date());
    this.noOfClicks++;
  }

  getBackgroundColor(): string {
    return this.noOfClicks > 4 ? 'blue' : 'grey'
  }

  getColor(): string {
    return this.noOfClicks > 4 ? 'white' : 'black'
  }
}
