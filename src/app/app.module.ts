import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
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
import { AssetTrackItemComponent } from './assets/list/asset-track-item/asset-track-item.component';
import { AssetReplyComponent } from './assets/list/asset-reply/asset-reply.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { AssetPostComponent } from './assets/list/asset-post/asset-post.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , OnStageComponent
    , OpenMicComponent
    , IndexUserComponent
    , EditUserComponent
    , CreateUserComponent
    , IndexTrackComponent
    , EditTrackComponent
    , CreateTrackComponent
    , IndexPostComponent
    , EditPostComponent
    , CreatePostComponent
    , SearchComponent
    , AssetFeedComponent
    , AssetOnStageComponent
    , AssetOpenMicComponent
    , AppHeaderComponent
    , AppPlayerComponent
    , LoginUserComponent
    , ShareTrackComponent
    , AssetTrackItemComponent
    , AssetReplyComponent, ListPostComponent, AssetPostComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , HttpModule
  ],
  providers: [HttpModule, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
