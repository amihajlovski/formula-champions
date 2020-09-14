import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material';
import { ChampionshipComponent } from './components/championship/championship.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardComponent } from './components/season/card/season-card.component';
import { SeasonListComponent } from './components/season/list/season-list.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HttpInterceptorService } from './interceptors/http/http-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { SeasonComponent } from './pages/season/season.component';
import { DriverBirthdayPipe } from './pipes/driver-birthday.pipe';
import { DriverNamePipe } from './pipes/driver-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionshipComponent,
    LoaderComponent,
    SeasonComponent,
    SeasonListComponent,
    TimelineComponent,
    DriverBirthdayPipe,
    DriverNamePipe,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    DriverBirthdayPipe,
    DriverNamePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
