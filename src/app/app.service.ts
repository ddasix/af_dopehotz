import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Track } from './track.interface';

@Injectable()
export class AppService {
    private url= 'https://api.dopehotz.com/tracks/';
    private posturl= 'https://api.dopehotz.com/tracks/';
    private onStageUrl= 'https://api.dopehotz.com/tracks/on-stage/';
    private test= 'https://auth.dopehotz.com/check/';
    constructor (private http: Http) {

    }

    getTracks(): Observable<any> {
        return this.http.get(this.url).map(
            (response: Response) => {
                // console.log(response.json());
                return response.json().results;
            }
        );
    }

    postTrack(): Observable<any> {
        const headers = new Headers();
        headers.append('Authorization', 'Token 251064bc010d919ae03dbdfca95cf75c63596362');
        const options = new RequestOptions({headers: headers});
        const data = {title: 'asdf', body: 'sdf', track_id: '275435386'};
        return this.http.post(this.posturl, data, options).map(
            (response: Response) => {
                // console.log(response.json());
                return response.json();
            }
        );
    }

    getOnstage(): Observable<any> {
        return this.http.get(this.onStageUrl).map(
            (response: Response) => {
                return response.json().results;
            }
        );
    }
    // getNaverUser(): Observable<any> {
    //     return this.http.get(this.url2).map(
    //         (response: Response) => {
    //             console.log(response.json());
    //             return response.json().list;

    //         }
    //     );
    // }
}
