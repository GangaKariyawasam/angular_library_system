import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import {LogInComponent} from './view/log-in/log-in.component';
import { RegistrationComponent } from './view/registration/registration.component';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CoursesComponent } from './view/courses/courses.component';
import { StudentRegisterComponent } from './view/student-register/student-register.component';
import {MatOptionModule} from '@angular/material/core';
import { SearchResultComponent } from './view/search-result/search-result.component';
import {MatCardModule} from '@angular/material/card';
import {AppRouterModule} from './app.router.module';
import { FooterComponent } from './view/footer/footer.component';
import {BookService} from "./service/book.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {InterceptorService} from "./service/interceptor.service";
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';
import { StudentProfileComponent } from './view/student-profile/student-profile.component';
import {TokenInterceptorService} from "./service/token-interceptor.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DashBoardComponent } from './view/dash-board/dash-board.component';
import { HomeComponent } from './view/dash-board/home/home.component';
import { StudentComponent } from './view/dash-board/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    MainMenuComponent,
    CoursesComponent,
    StudentRegisterComponent,
    SearchResultComponent,
    FooterComponent,
    HighlightSearchPipe,
    StudentProfileComponent,
    DashBoardComponent,
    HomeComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatCardModule,
    AppRouterModule,
    MatDialogModule,
    HttpClientModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [RegistrationComponent]
})
export class AppModule { }

