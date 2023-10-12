import { Component } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // PAGINATION
  index: number = 1;
  pageSize: number = 20;
  currentPage: number = 1;
  totalPages: number = 0;
  displayProject: any;
  entires: any;


  // project data
  dataProjects!: any;

  constructor(private apiService: ProjectService){}

  ngOnInit() {
    this.breadCrumbItems = [{ label: "WEB DEVELOPMENT" }];
    // this.fecthProjects();
    this.fecthAllDataProject();
  }

  fecthProjects() {
    this.apiService.getAllProject().subscribe(
      (res:any) => {
        const projects = res.data
        this.dataProjects = projects.filter((project: any) => !project.is_deleted);
        console.log(this.dataProjects);
        this.entires = this.dataProjects.length;
        this.calculateTotalPages();
        this.updateDisplayDocuments();

      }, (error:any) => {
        console.log(error, "Internal Service Error");
      }
    )
  }

  fecthAllDataProject(){
    this.apiService.getAllDataProject().subscribe(
    (res:any) => {
      const projects = res.data.map((project: any) => ({
        ...project,
        image_names: project.image_names ? project.image_names.split(',') : [] // Memecah string menjadi array jika ada, jika tidak, gunakan array kosong
      }));
      this.dataProjects = projects.filter((project: any) => !project.is_deleted);
      this.entires = this.dataProjects.length;
      this.calculateTotalPages();
      this.updateDisplayDocuments();
      console.log(this.displayProject)
    }, (error:any) => {
      console.log(error, "Internal Service Error");
    }
    )
  }


  // Pagination
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.entires / this.pageSize);
  }
  
  updateDisplayDocuments(){
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayProject = this.dataProjects.slice(startIndex, endIndex);
  }
  nextPage(){
    if (this.currentPage < this.totalPages){
      this.currentPage++;
      this.updateDisplayDocuments();
    }
  }
  prevPage(){
    if (this.currentPage > 1){
          this.currentPage--;
          this.updateDisplayDocuments();
        }
  }
  getStartIndex(): number {
    return  (this.currentPage - 1) * this.pageSize + 1;
  }
  getEndIndex(): number {
    const endIndex: number = this.currentPage * this.pageSize;
    return Math.min(endIndex, this.entires);
  }

}
