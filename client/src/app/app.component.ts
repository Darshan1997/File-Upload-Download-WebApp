import { Component } from '@angular/core';
import { NewService } from './new.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import {saveAs} from 'file-saver'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public url = "http://localhost:4800/users/uploads";
  public arraylist = []

  public uploader: FileUploader = new FileUploader({ url: this.url })


  constructor(private service: NewService) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.arraylist.push(JSON.parse(response))
    }
  }


  download(index) {
    const fileName = this.arraylist[index].filename
    var data = {fileName : fileName}
    this.service.downloadFile(data).subscribe(data => 
      saveAs(data,fileName)
    )
  }

}
