import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OnStageComponent } from './on-stage/on-stage.component';
import { OpenMicComponent } from './open-mic/open-mic.component';
import { IndexUserComponent } from './user/index-user/index-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { IndexTrackComponent } from './track/index-track/index-track.component';
import { EditTrackComponent } from './track/edit-track/edit-track.component';
import { CreateTrackComponent } from './track/create-track/create-track.component';
import { IndexPostComponent } from './post/index-post/index-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { SearchComponent } from './search/search.component';
import { AssetFeedComponent } from './assets/list/asset-feed/asset-feed.component';
import { AssetOnStageComponent } from './assets/list/asset-on-stage/asset-on-stage.component';
import { AssetOpenMicComponent } from './assets/list/asset-open-mic/asset-open-mic.component';
import { AppHeaderComponent } from './assets/app-header/app-header.component';
import { AppPlayerComponent } from './assets/app-player/app-player.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { ShareTrackComponent } from './track/share-track/share-track.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'openmic', component: OpenMicComponent }
  , { path: 'home', component: HomeComponent }
  , { path: 'onstage', component: OnStageComponent }
  , { path: 'user/userid', component: IndexUserComponent }
  , { path: 'user/modify', component: EditUserComponent }
  , { path: 'track/tracknum', component: IndexTrackComponent }
  , { path: 'track/edit/tracknum', component: EditTrackComponent }
  , { path: 'track/post', component: CreateTrackComponent }
  , { path: 'shoutout/articlenum', component: IndexPostComponent }
  , { path: 'shoutout/edit/articlenum', component: EditPostComponent }
  , { path: 'shoutout/post', component: CreatePostComponent }
  , { path: 'search/keyword', component: SearchComponent }
  , { path: 'track/share', component: ShareTrackComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {
    constructor() {
    }
}
