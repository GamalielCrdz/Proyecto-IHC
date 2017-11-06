import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './routes';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { RedondosComponent } from './components/redondos/redondos.component';
import { AvionComponent } from './components/avion/avion.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TravelService } from "./services/travel.service";
import { HotelService } from "./services/hotel.service"
import { HttpModule } from '@angular/http';
import { ServiciosApiComponent } from './components/servicios-api/servicios-api.component';

var firebaseConfig = {
  apiKey: "AIzaSyDQyPdZpqFnzX2CzR4lkEcZ0lZHxJehO6w",
  authDomain: "viajesredondos-c348f.firebaseapp.com",
  databaseURL: "https://viajesredondos-c348f.firebaseio.com",
  projectId: "viajesredondos-c348f",
  storageBucket: "viajesredondos-c348f.appspot.com",
  messagingSenderId: "115458480807"
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    HomeComponent,
    RedondosComponent,
    AvionComponent,
    HotelComponent,
    DetallesComponent,
    ComprarComponent,
    PagoFormComponent,
    ServiciosApiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule],
  providers: [TravelService, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
