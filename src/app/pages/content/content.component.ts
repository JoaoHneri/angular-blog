import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = '';
  contentTitle:string = '';
  contentDescription:string = '';
  private id:string | null = "";
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>this.id = value.get("id"));
    this.setValuesToComponent(this.id);
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Isso cria uma animação suave de rolagem
      });
    }
  scrollToTop();    
  }

  setValuesToComponent(id: string|null){
    const result = dataFake.filter(data => data.id === id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
    
  }
}
