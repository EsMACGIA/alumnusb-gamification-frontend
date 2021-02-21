import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

// @Injectable()
@Injectable({ 
    providedIn: 'root'
  }) 
export class UploadCsvService extends BaseService {

    // Returns an observable 
    uploadCsv(file):Observable<any> { 
    
        // Create form data 
        const formData = new FormData();  
        
        // Store form name as "file" with file data 
        formData.append("file", file, file.name); 
        
        // Make http post request over api 
        // with formData as req 
        console.log(formData)
        return this.postBase(formData, 'csv/upload-csv/');
    } 
}
