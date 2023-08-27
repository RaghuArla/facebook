import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,tap,map, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

/*
  getContact() {
    console.log("contact service called");
    return this.http.get("http://localhost:3000/posts");
  }
  */
  getContacts(): Observable<Object> {
      return this.http.get<Object>("http://localhost:3000/contacts").pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}





}
