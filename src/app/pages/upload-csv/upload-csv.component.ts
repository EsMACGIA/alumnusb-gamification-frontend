import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { UploadCsvService } from './upload-csv.service'

@Component({
  selector: 'ngx-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss'],
})
export class UploadCsvComponent implements OnInit {
  fruits = fruits;

  // Variable to store shortLink from api response 
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 

  constructor(private uploadCsvService: UploadCsvService) { }

  ngOnInit(): void {
  }

  // On file Select 
  onChange(event) { 
    this.file = event.target.files[0]; 
  }

  uploadCsvFile() {
    this.loading = !this.loading; 
        console.log(this.file); 
        var k = this.uploadCsvService.uploadCsv(this.file).subscribe( 
            (event: any) => { 
                if (typeof (event) === 'object') { 
  
                    // Short link via api response 
                    this.shortLink = event.link; 
  
                    this.loading = false; // Flag variable  
                } 
            } 
        ); 
        console.log(k);
  }
}
