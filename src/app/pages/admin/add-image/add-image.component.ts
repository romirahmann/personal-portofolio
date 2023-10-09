import { Component } from "@angular/core";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {
// bread crumb items
breadCrumbItems!: Array<{}>;

// Input File
selectedFile!: File;
filename!: string;

// input
projectId!: number;

// project
dataProject!: any;


constructor(private apiService: ProjectService){}

ngOnInit() {
  this.breadCrumbItem();
  this.fecthProjects();
 }

 breadCrumbItem(){
   this.breadCrumbItems = [{ label: "Project" }, { label: "add image" }];
 }

  //  Project
  fecthProjects(){
    this.apiService.getProjectOnly().subscribe(
      (res: any) =>{
        this.dataProject = res.data;
      }, (err: any) => {
        console.log(err, "Internal Server Error")
      }
    )
  }

  // File
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }

  addDataImage(){
    let data = [
      {
        project_id: this.projectId,
        image_name: this.filename
      }
    ]
    
    this.apiService.addImage(data).subscribe(
      (res: any) =>{
        console.log("Successfully Add Data Image");
      }, (err: any) => {
        console.log(err, "Failure to upload data image")
      }
    )
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.apiService.uploadDocument(formData).subscribe(
      response => {
        // console.log(response);
        this.filename = response.filename;
        console.log('File sudah di upload:', this.filename);
        this.addDataImage();
      },
      error => {
        console.error(error);
      }
    );
  }


 onSubmit(){
  this.uploadFile();
 }
}
