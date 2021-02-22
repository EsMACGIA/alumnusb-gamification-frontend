import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { UploadCsvService } from './upload-csv.service'
import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss'],
})
export class UploadCsvComponent implements OnInit {
  fruits = fruits;

  file: File = null;

  constructor(private uploadCsvService: UploadCsvService, private toastrService: NbToastrService) { }
  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;
  
  ngOnInit(): void {
  }

  onChange(event) { 
    this.file = event.target.files[0]; 
    document.getElementById('file-name').setAttribute("placeholder", this.file.name);
  }

  uploadCsvFile() {
    if (this.file == null){
      this.showToast('warning', 'No se ha seleccionado ningun archivo', '');
      return;
    }
    this.showToast('primary', 'El archivo esta siendo cargado', '');
        this.uploadCsvService.uploadCsv(this.file).subscribe( 
          // On success
            (event: any) => { 
                if (typeof (event) === 'object') { 
                    this.showToast('success', 'El archivo fue cargado exitosamente', '');
                } 
            } 
        // On error
        ,  (event: any) => { 
          this.showToast('danger', 'El archivo no pudo ser cargado', '');
      } ); 
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }
}
