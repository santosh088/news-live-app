import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
 
  constructor(private http:HttpClient) { }

  const = "/blogsandnews/getBlogs";

  getBlogs(): Observable<any> {
    return this.http.get(this.const,{ responseType: 'text' });
  }
}
