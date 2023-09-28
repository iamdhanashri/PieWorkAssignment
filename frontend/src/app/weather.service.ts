
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://orange-red-cricket-sock.cyclic.cloud/api/weather'; 

  constructor(private http: HttpClient) {}

  createWeatherEntry(data: any) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getWeatherEntries() {
    return this.http.get(`${this.baseUrl}`);
  }

  updateWeatherEntry(id: string, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteWeatherEntry(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getWeatherDataForPage2(): Observable<any[]> {
    const url = `${this.baseUrl}/api/weather/page2`; // Replace with the actual API endpoint for Page 2 data
    return this.http.get<any[]>(url);
  }
}
