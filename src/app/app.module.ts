import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotoAlbumsComponent } from './components/photo-albums/photo-albums.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';

const appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'posts',component:PostsComponent},
  {path:'photos',component:PhotoAlbumsComponent},
  {path:'posts/:id',component:PostDetailsComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PhotoAlbumsComponent,
    PostDetailsComponent,
    HeaderComponent,
    FooterComponent,
    PostItemComponent,
    PhotoItemComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({auth:loginReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
