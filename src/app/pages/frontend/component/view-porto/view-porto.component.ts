import { Component } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-porto',
  templateUrl: './view-porto.component.html',
  styleUrls: ['./view-porto.component.scss']
})
export class ViewPortoComponent {

  // ProjectData
  dataProjects!: any;
  displayProjects!: any;
  images!: any;

  // parameter
  projectId!: number;

  constructor(private apiService: ProjectService, private router: ActivatedRoute){}
  
  ngOnInit() { 
    this.getParams();
    this.fecthAllProject(); 
  }

  getParams(){
    this.router.params.subscribe((params: any) => {
      this.projectId = +params['projectId']; // Assuming parameter name is 'document_id' 
    });
  }

  fecthAllProject(){
    this.apiService.getAllDataByProjectId(this.projectId).subscribe(
      (res: any) => {
        // console.log(res.data);
        const projects = res.data.map((project: any) => ({
          ...project,
          image_names: project.image_names ? project.image_names.split(',') : [] // Memecah string menjadi array jika ada, jika tidak, gunakan array kosong
        }));
        this.dataProjects = projects.filter((project: any) => !project.is_deleted);
        this.displayProjects = this.dataProjects[0]
        this.images = this.dataProjects[0].image_names;
      }
    )
  }

}
