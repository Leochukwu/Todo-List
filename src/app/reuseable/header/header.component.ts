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
      name: "Home"
    },
    {id: 1,
      name: "Add-Todo"
    },
    {id: 1,
      name: "View-Todo"
    },
    {id: 1,
      name: "Contact"
    },
  ]


}
