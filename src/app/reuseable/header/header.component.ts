import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menu: any =[
    {id: 1,
      name: "Home",
      link: '#'

    },
    {id: 2,
      name: "Add-Todo",
      link: 'add-todo'
    },
    {id: 3,
      name: "View-Todo",
      link: 'list'
    },
    {id: 4,
      name: "Contact",
      link: '#'
    },
  ]


}
