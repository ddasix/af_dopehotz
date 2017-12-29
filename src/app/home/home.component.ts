import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Track } from '../track.interface';
import { Observable } from 'rxjs/Observable';
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tracks: Track[];
    @Input() track: Track;

    constructor(private appService: AppService) {

    }

    ngOnInit() {
        const hash = window.location.hash;
        if ( hash !== '') {
            const json = JSON.parse(JSON.stringify(hash.match(/status=(.*)&access_token=(.*)/)));
            switch (json[1]) {
                case 'success' :
                    localStorage.setItem('currentUser', JSON.stringify({ token: json[2]}));
                    window.location.hash = '';
                    break;
                case 'error' :
                    alert('엑세스 할 수 없는 계정입니다.');
                    break;
                default :
                    break;
            }
        }
        this.appService.getTracks().subscribe(
            (tracks: Track[]) => this.tracks = tracks
            , (error: Response) => console.log(error)
        );
    }

    carousel () {
        (<any>$('.top_carousel')).owlCarousel({
            margin: 15,
            loop: true,
            autoWidth: true,
            items: 10,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            URLhashListener: false
        });
    }
}
