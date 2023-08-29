import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallPhotoCover: string = "";
  @Input()
  smallTitle: string = "";
  @Input()
  id:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
