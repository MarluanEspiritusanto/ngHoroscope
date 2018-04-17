import { Injectable } from '@angular/core';
import * as Icons from '../config/icons.json';
import { HttpClient } from '@angular/common/http';
import { Horoscope } from '../models/horoscope';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HoroscopeService {

    constructor(private http: HttpClient) { 
    }

    public getHoroscopeIcons(){
        return new Promise((resolve, reject) => {
            try {
                resolve(Icons)
            } catch(err) {
                reject(err);
            }
        });
    }

    public getTodayHoroscopeBySign(sign: string): Observable<Horoscope>{
        return this.http.get<Horoscope>(`http://horoscope-api.herokuapp.com/horoscope/today/${sign}`);
    }
}
