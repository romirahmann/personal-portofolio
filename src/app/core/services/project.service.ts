import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { 
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.tokenStorageService.getToken()}`
    });
  }

  // category
  getAllCategory():Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/master/categories`, {headers});
  }

  // Project
  getAllProject():Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/master/projects`, {headers});
  }
  getProjectOnly():Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/master/project-only`, {headers});
  }
  getAllDataProject():Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/master/data-projects`, {headers});
  }
  getAllDataByProjectId(projectId: number):Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/master/data-projects/${projectId}`, {headers});
  }
  addProject(data:any):Observable<any>{
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/master/project`, data, {headers});
  }

  // upload image
  uploadDocument(formData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/upload`, formData, {headers});
  }
  getFileDocument(fileName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/file/${fileName}`, { responseType: 'blob' });
  }
  addImage(data:any):Observable<any>{
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/master/image`, data, {headers});
  }


}
