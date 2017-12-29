import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app.service';
import { Track } from '../../../track.interface';

@Component({
    selector: 'app-asset-on-stage',
    templateUrl: './asset-on-stage.component.html',
    styleUrls: ['./asset-on-stage.component.css']
})
export class AssetOnStageComponent implements OnInit {
    tracks: Track[];
    @Input() track: Track;

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.getOnstage().subscribe(
            (tracks: Track[]) => this.tracks = tracks
            , (error: Response) => console.log(error)
        );
    }

}
