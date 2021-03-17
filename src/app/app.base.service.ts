import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * Service with methods to add, edit or
 * delete elements to backend.
 *
 * @export
 * @class BaseService
 */
@Injectable()
export class BaseService {

    API_URL: string = 'https://gamification-api-dev.herokuapp.com/api/';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    /**
     *Creates an instance of BaseService.
     * @param {HttpClient} http
     * @memberof BaseService
     */
    constructor(
        private http: HttpClient,
        private router: Router,
    ) {}

    /**
     * Method to get elements from backend
     *
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} Return list of elements
     * if everything is ok or error if not
     * @memberof BaseService
     */
    getBase(endpoint: string, httpOptions = this.httpOptions): Observable<any> {
        const apiURL =  `${this.API_URL}${endpoint}`;
        return this.http.get(apiURL, httpOptions).pipe(
            catchError(this.handleError('getBase')),
        );
    }

    /**
     * Method to add element to backend
     *
     * @param {object} element to be added
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} Return element if everything is ok
     * or error if not
     * @memberof BaseService
     */
    postBase(element: Object, endpoint: string, httpOptions = this.httpOptions): Observable<any> {
        const apiURL =  `${this.API_URL}${endpoint}`;
        return this.http.post(apiURL, element, httpOptions).pipe(
            catchError(this.handleError<any>('postBase')),
        );
    }

    /**
     * Method to edit element
     *
     * @param {Object} element to be edited
     * @param {string} endpoint // Provides the endpoint to access backend.
     * @returns {Observable<any>} return element if everythings is ok
     * or error if not
     * @memberof BaseService
     */
    putBase(element: Object, endpoint: string, httpOptions = this.httpOptions): Observable<any> {
        const apiURL =  `${this.API_URL}${endpoint}`;
        return this.http.put(apiURL, element, httpOptions).pipe(
            catchError(this.handleError<any>('putBase')),
        );
    }

    /**
     * Method to delete element
     *
     * @param {Object} element to be deleted
     * @returns {Observable<any>} return null if everythings is ok
     * or error if not
     * @memberof BaseService
     */
    deleteBase(element: Object, endpoint: string, httpOptions = this.httpOptions): Observable<any> {
        const apiURL = `${this.API_URL}${endpoint}`;
        return this.http.delete(apiURL, httpOptions).pipe(
            catchError(this.handleError<any>('deleteBase')),
        );
    }

    /**
     * Method to handle errors
     *
     * @private
     * @template T
     * @param {string} [operation='operation'] operation that generates the error
     * @returns Observable with error info
     * @memberof BaseService
     */
    private handleError<T>(operation = 'operation') {
        return (error_object: any): Observable<T> => {
            // When the JWT token is expired
            if (error_object.status == 401 && localStorage.getItem('currentToken')) {
                localStorage.removeItem('currentToken');
                localStorage.removeItem('userId');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('isAdmin');
                this.router.navigate(['/']);
            }
            return of(error_object);
        };
    }

    /**
     * Method to set authorization headers
     */
    setHeaders(file = false): any {
        if (file) {
            const httpOptions = {
                headers: new HttpHeaders(
                    {
                        'Authorization': `JWT ${localStorage.getItem('currentToken')}`,
                    },
                ),
            };
            return httpOptions;
        } else {
            const httpOptions = {
                headers: new HttpHeaders(
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('currentToken')}`,
                    },
                ),
            };
            return httpOptions;
        }
    }
}
