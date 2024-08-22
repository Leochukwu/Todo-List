import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add-todo', component: AddListComponent},
    {path: 'list', component: ListComponent}
];
