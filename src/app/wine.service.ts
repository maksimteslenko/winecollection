import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wine } from './wine';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  private winesUrl = 'api/wines';

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.winesUrl)
    .pipe(
      catchError(this.handleError('getWines', []))
    );
  }

  getWine(id: number): Observable<Wine> {
    const url = `${this.winesUrl}/${id}`;
    return this.http.get<Wine>(url).pipe(
      catchError(this.handleError<Wine>(`getWine id=${id}`))
    );
  }

  updateWine (wine: Wine): Observable<any> {
    return this.http.put(this.winesUrl, wine, httpOptions).pipe(
      catchError(this.handleError<any>('updateWine'))
    );
  }

  createWine (wine: Wine): Observable<Wine> {
    return this.http.post<Wine>(this.winesUrl, wine, httpOptions).pipe(
      catchError(this.handleError<Wine>('createWine'))
    );
  }

  deleteWine (wine: Wine | number): Observable<Wine> {
    const id = typeof wine === 'number' ? wine : wine.id;
    const url = `${this.winesUrl}/${id}`;
  
    return this.http.delete<Wine>(url, httpOptions).pipe(
      catchError(this.handleError<Wine>('deleteWine'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
   
      return of(result as T);
    };
  }
}
