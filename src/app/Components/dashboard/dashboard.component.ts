import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://images.unsplash.com/photo-1612853228637-e89987ca1df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWx0cmElMjB3aWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
