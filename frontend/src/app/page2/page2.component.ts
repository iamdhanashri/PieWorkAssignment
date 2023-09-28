
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './Page2.component.html',
  styleUrls: ['./Page2.component.css']
})
export class Page2Component implements OnInit {
  weatherData: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getWeatherDataForPage2().subscribe(
      (data: any[]) => {
        this.weatherData = data;
      },
      (error: any) => {
        console.error('Error fetching weather data for Page 2:', error);
      }
    );
  }
}
