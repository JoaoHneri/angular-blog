import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*GKEwP2XD15OAjzMe75tgew.png';
  contentTitle:string = 'Framework';
  contentDescription:string = 'Veja a inovação';
  constructor() { }

  ngOnInit(): void {
  }

}
