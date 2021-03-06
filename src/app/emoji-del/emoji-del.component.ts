import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-emoji-del',
    templateUrl: './emoji-del.component.html',
    styleUrls: ['./emoji-del.component.scss']
})
export class EmojiDelComponent implements OnInit {
    list: object;
    textButton = 'Восстановить';
    state = 'del';

    constructor(private service: HttpService) {
    }

    ngOnInit() {
        this.list = this.service.listDel;
    }

}
