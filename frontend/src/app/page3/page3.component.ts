// src/app/page3/page3.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component {
  pageTitle: string = 'Page 3';
  isFormVisible: boolean = false;
  formData: any = {};
  showHelpContent: boolean = false; 

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  submitForm() {
    console.log('Form submitted with data:', this.formData);
  }

  showHelp() {
    this.showHelpContent = !this.showHelpContent;
  }
}
