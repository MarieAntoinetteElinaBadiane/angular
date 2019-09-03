import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SignINComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AppService } from './services/app.service';
import { UserpartenaireService } from './services/userpartenaire.service';
import { UsercompteService } from './services/usercompte.service';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { DepotComponent } from './depot/depot.component';
import { DepotService } from './services/depot.service';
import { CompteComponent } from './compte/compte.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RetraitComponent } from './retrait/retrait.component';


const routes: Routes = [
  { path: 'auth', component: AuthService },
  { path: 'sign-in', component: SignINComponent},
  { path: 'liste-partenaire', component: ListePartenaireComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'partenaire', component: PartenaireComponent,
  canActivate: [AuthGuard]},
  { path: 'retrait', component: RetraitComponent, canActivate: [AuthGuard]},
  { path: 'accueil', component: AccueilComponent },
  { path: 'depot', component: DepotComponent, canActivate: [AuthGuard] },
  { path: 'compte', component: CompteComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  {path: 'upload-image', component: UploadImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
