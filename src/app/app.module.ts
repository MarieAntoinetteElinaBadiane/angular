import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AuthService } from './services/auth.service';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './auth.guard';
import { AppService } from './services/app.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UserpartenaireService } from './services/userpartenaire.service';
import { UsercompteService } from './services/usercompte.service';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { DepotComponent } from './depot/depot.component';
import { DepotService } from './services/depot.service';
import { CompteComponent } from './compte/compte.component';
import { CompteService } from './services/compte.service';
import { TransactionService } from './services/transaction.service';
import { TransactionComponent } from './transaction/transaction.component';
import { RetraitComponent } from './retrait/retrait.component';
import { RetraitService } from './services/retrait.service';

@NgModule({
  declarations: [
    AppComponent,
    SignINComponent,
    UserComponent,
    PartenaireComponent,
    AccueilComponent,
    AdminComponent,
    UploadImageComponent,
    ListePartenaireComponent,
    DepotComponent,
    CompteComponent,
    TransactionComponent,
    RetraitComponent
  ],
  imports: [
BrowserModule,
FormsModule,
HttpClientModule,
AppRoutingModule
  ],
  providers: [TokenInterceptorService,
  UserpartenaireService, UsercompteService,
  DepotService, CompteService, TransactionService, RetraitService,
  AuthService, AuthGuard,
  AppService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
  multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
