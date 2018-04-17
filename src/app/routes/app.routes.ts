import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { HoroscopeComponent } from '../components/horoscope/horoscope.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'horoscope/:sign', component: HoroscopeComponent },
    { path: '**', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(routes); 