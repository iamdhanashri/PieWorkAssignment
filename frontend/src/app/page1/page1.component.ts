
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  entries: Weather[] = [];
  newEntry: Weather = new Weather('', '', 0);
  showHelpContent = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherEntries();
  }

  getWeatherEntries() {
    this.weatherService.getWeatherEntries().subscribe(
      (data: any) => {
        this.entries = data as Weather[]; 
      },
      (error: any) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
  
  addNewEntry() {
    this.weatherService.createWeatherEntry(this.newEntry).subscribe(
      (data: any) => {
        const newWeatherEntry: Weather = data as Weather;
        this.entries.push(newWeatherEntry);
        this.newEntry = new Weather('', '', 0);
      },
      (error: any) => {
        console.error('Error adding weather entry:', error);
      }
    );
  }
  

  editEntry(entry: Weather) {
    // Implement edit logic here (e.g., open a modal)
  }

  deleteEntry(entry: Weather) {
    const entryId = entry._id; 
    
    if (entryId) {
      this.weatherService.deleteWeatherEntry(entryId).subscribe(
        () => {
          const index = this.entries.indexOf(entry);
          if (index !== -1) {
            this.entries.splice(index, 1);
          }
        },
        (error: any) => {
          console.error('Error deleting weather entry:', error);
        }
      );
    } else {
      console.error('Entry does not have a valid _id.'); 
    }
  }
  
  showHelp() {
    this.showHelpContent = !this.showHelpContent;
  }
}
