import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-gallery-porto',
  templateUrl: './gallery-porto.component.html',
  styleUrls: ['./gallery-porto.component.scss']
})
export class GalleryPortoComponent {
  dataProjects: any;
  filterredData: any;
  galleryFilter: number = 0;
  constructor(private apiService: ProjectService){}
  ngOnInit() {
    this.fecthProject();
    
  }


fecthProject(){
  this.apiService.getAllDataProject().subscribe(
    (res:any) => {
      const projects = res.data.map((project: any) => ({
        ...project,
        image_names: project.image_names ? project.image_names.split(',') : [] // Memecah string menjadi array jika ada, jika tidak, gunakan array kosong
      }));
      this.dataProjects = projects.filter((project: any) => !project.is_deleted);
      this.filterredData = this.dataProjects;
      console.log(this.dataProjects);
    }, (error:any) => {
      console.log(error, "Internal Service Error");
    }
    )
}

activeCategory(category: number) {
  this.galleryFilter = category;
  if (this.galleryFilter === 0) {
    this.filterredData = this.dataProjects;
  } else {
    this.filterredData = this.dataProjects.filter((x: any) => x.categories_id === this.galleryFilter);
  }
}

}
