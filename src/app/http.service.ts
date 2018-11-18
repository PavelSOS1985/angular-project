import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Emoji} from './emoji';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    emojisAll: Emoji[] = [];

    constructor(private http: HttpClient) {
    }

    getData(): Observable<Emoji[]> {
        return this.http.get<Emoji[]>('https://api.github.com/emojis').pipe(
            map(data => {
                return data;
            })
        );
    }

    getAll() {
        return this.getData()
            .subscribe(all => this.emojisAll = all);
    }
}