import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class UploadCsvService extends BaseService {

    uploadCsv(file): Observable<any> {
        return this.postBase('csv/upload-csv/', this.setHeaders());
    }

}
