import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Register } from './components/pages/auth/register/register';
import { Login } from './components/pages/auth/login/login';
import { Contact } from './components/pages/contact/contact';
import { Viewdeals } from './components/pages/viewdeals/viewdeals';



export const routes: Routes = [
    { path: '', component: Home},
    { path: 'register', component: Register},
    { path: 'login', component: Login},
     { path: 'contact', component: Contact},
    { path: 'viewdeals', component: Viewdeals},
   

];
