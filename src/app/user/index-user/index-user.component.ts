import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
    selector: 'app-index-user',
    templateUrl: './index-user.component.html',
    styleUrls: ['./index-user.component.css']
})

export class IndexUserComponent implements OnInit {

    private currentUser = JSON.parse(localStorage.getItem('currentUser'));

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (this.currentUser === null) {
            this.router.navigateByUrl('/');
        }else {
            console.log(this.currentUser.token);
        }
    }
}
