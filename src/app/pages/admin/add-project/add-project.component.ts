import { Component } from "@angular/core";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.scss"],
})
export class AddProjectComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // fecthData
  categories!: any;

  // input
  projectTitle!: string;
  description!: string;
  categoryId!: number;

  constructor(private apiService: ProjectService){}

  ngOnInit() {
   this.breadCrumbItem();
    this.fecthAllCategory();
  }

  breadCrumbItem(){
    this.breadCrumbItems = [{ label: "Project" }, { label: "add" }];
  }

  fecthAllCategory(){
    this.apiService.getAllCategory().subscribe(
      (res: any) => {
        this.categories = res.data;
      }, (error: any) => {
        console.log(error, "Internal Server Error");
      }
    )
  }

  fecthProject(){
    this.apiService.getAllProject().subscribe(
      (res:any) => {
        console.log("Refresh Data");
      }, (error:any) => {
        console.log(error, "Internal Service Error");
      }
    )
  }

  insertData(data: any){
    this.apiService.addProject(data).subscribe(
      (res: any) => {
        console.log(res, "Insert Data Berhasil");
        this.fecthProject();
        this.projectTitle = '',
        this.categoryId = 0,
        this.description = ''
      }
    )
  }

  dataProject(){
     const newData: any = [
      {
        project_title: this.projectTitle,
        categories_id: this.categoryId,
        description: this.description,
      }
    ]
    // console.log(newData)
    this.insertData(newData);
  }

  onSubmit(){
    this.dataProject(); 
  }

}
