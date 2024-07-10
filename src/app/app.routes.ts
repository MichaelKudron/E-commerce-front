import { Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'',
        title:"start",
        component:StartPageComponent
    },
    {
        path:'login',
        title:'login',
        component:LoginComponent
    },
    {
        path:'register',
        title:'register',
        component:RegisterComponent
    }
];
