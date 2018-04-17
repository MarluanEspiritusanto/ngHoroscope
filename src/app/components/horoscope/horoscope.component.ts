import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoroscopeService } from '../../services/horoscope.service';


@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {

  horoscope: any;

  constructor(private activatedRoute: ActivatedRoute, private horoscopeService: HoroscopeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.horoscopeService.getTodayHoroscopeBySign(data.sign).subscribe((horoscope) => {
        this.horoscope = horoscope;
        console.log(this.horoscope);
      });
    });
  }
}
