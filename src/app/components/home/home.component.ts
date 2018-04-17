import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../services/horoscope.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Icons: any;
  constructor(private horoscopeService: HoroscopeService, private router: Router) { 
    this.horoscopeService.getHoroscopeIcons().then((icons) => {
      this.Icons = icons;
    });
  }

  public getHoroscopeBySign(sign){
    this.router.navigate(['/horoscope', sign])
  }
}
