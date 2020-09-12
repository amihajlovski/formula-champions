import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionshipComponent } from './components/championship/championship.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SeasonListComponent } from './components/season/list/season-list/season-list.component';
import { HttpInterceptorService } from './interceptors/http/http-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { SeasonComponent } from './pages/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionshipComponent,
    LoaderComponent,
    SeasonComponent,
    SeasonListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
