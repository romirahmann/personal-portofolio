import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // category
  getAllCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/master/categories`);
  }

  // Project
  getAllProject():Observable<any>{
    return this.http.get(`${this.baseUrl}/master/projects`);
  }
  getProjectOnly():Observable<any>{
    return this.http.get(`${this.baseUrl}/master/project-only`);
  }
  getAllDataProject():Observable<any>{
    return this.http.get(`${this.baseUrl}/master/data-projects`);
  }
  getAllDataByProjectId(projectId: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/master/data-projects/${projectId}`);
  }
  addProject(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/master/project`, data);
  }

  // upload image
  uploadDocument(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
  getFileDocument(fileName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/file/${fileName}`, { responseType: 'blob' });
  }
  addImage(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/master/image`, data);
  }


}
