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
  
  limit: any = 4;
  skip: any = 0;
  pageNumber: any = 1
  total: any;


  listItem: any = [];


  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getItem()
  }

  getItem(){
    this.http.get('https://dummyjson.com/todos?limit='+this.limit+'&skip='+ this.skip).subscribe(
      (res:any) => {
        if(res.todos.length > 0){
        this.listItem = res.todos
        this.total = res.total
        }
        else{
          
          alert('No more product')
        }
      },
      (err) => {}
    )
  }


  nextPage(){
    this.skip = this.limit + this.skip
    this.getItem()
    console.log(this.getItem())

  }

  prevPage(){
    if(this.skip > 0){
      this.skip = this.skip - this.limit
      this.getItem()
    }
    console.log(this.getItem())

  }


  //function for pagenition 
  getPageRange(): number[]{
    const rangeSize = 5;

    // Number of pages to be displayed for navigation 
    const totalPages = Math.ceil(this.total / this.limit);

    //Get the current page
    const currentPage = Math.ceil(this.skip / this.limit);

    // putting the display pages for navigation in an array to be able to use FOR LOOP
    const range: any = []

    //Determine the start and end page for the range 
    const start = Math.max(1, currentPage - Math.floor(rangeSize/ 2))
    const end = Math.min(start + rangeSize - 1, totalPages);

    //Populate the range array 
    for(let i = start; i<=end; i++){
      range.push(i);
    }
    console.log(range)

    return range
  }



  goToPage(page: number): void {
    const totalPages = Math.ceil(this.total / this.limit);
    if (page >= 1 && page <= totalPages && page !== this.skip / this.limit) {
      this.skip = (page - 1) * this.limit;  // Adjust skip to jump to the correct page
      this.getItem();
    }
  }
  

  

}
