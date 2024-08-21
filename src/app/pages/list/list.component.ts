import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  listItem: any = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/todos?limit=4').subscribe(
      (res:any) => {
        this.listItem = res.todos
        console.log(this.listItem)
      },
      (err) => {}
    )
    
  }

}
