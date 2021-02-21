import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent implements OnInit {
  fruits = fruits;
  constructor() { }

  ngOnInit(): void {
  }

}