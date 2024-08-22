import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./reuseable/header/header.component";
import { CommonModule } from '@angular/common';
import { AddListComponent } from "./pages/add-list/add-list.component";
import { ListComponent } from "./pages/list/list.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, CommonModule, AddListComponent, ListComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
