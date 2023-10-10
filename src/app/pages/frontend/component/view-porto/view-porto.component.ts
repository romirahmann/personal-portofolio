import { Component, Input } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-view-porto',
  templateUrl: './view-porto.component.html',
  styleUrls: ['./view-porto.component.scss']
})
export class ViewPortoComponent {

  @Input() id!: number;

  // ProjectData
  dataProjects!: any;
  displayProjects!: any;
  images!: any;

  // parameter
  projectId!: number;

  // image
  gambarUtama!: string;
  imageActive!: string;

  constructor(private apiService: ProjectService, private router: ActivatedRoute, public activeModal: NgbActiveModal){
  }
  
  ngOnInit() { 
    this.getParams();
    this.fecthAllProject();
    console.log(this.id)
  }

  getParams(){
    this.router.params.subscribe((params: any) => {
      this.projectId = +params['projectId']; // Assuming parameter name is 'document_id' 
    });
  }

  fecthAllProject(){
    this.apiService.getAllDataByProjectId(this.id).subscribe(
      (res: any) => {
        // console.log(res.data);
        const projects = res.data.map((project: any) => ({
          ...project,
          image_names: project.image_names ? project.image_names.split(',') : [] // Memecah string menjadi array jika ada, jika tidak, gunakan array kosong
        }));
        this.dataProjects = projects.filter((project: any) => !project.is_deleted);
        this.displayProjects = this.dataProjects[0]
        console.log(this.displayProjects)
        this.images = this.dataProjects[0].image_names;
        this.imageActive = this.images[0];
        if (this.images.length > 0) {
          this.firstImage(this.images[0]);  
        }
      }
    )
  }

  firstImage(filename: string) {
    if (filename) {
      this.gambarUtama = `http://localhost:3000/api/file/${filename}`;
    }
  }

  gantiGambarUtama(image: string) {
    this.gambarUtama = `http://localhost:3000/api/file/${image}`;
    this.imageActive = image;
  }


}
