import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {RecordingComponent} from './components/recording/recording.component'
import {LoginComponent} from './components/login/login.component'
import {ReportComponent} from './components/report/report.component'
import {LoginGuard, AutoLoginGuard} from './services/index'

const MODE=process.env.runtime;

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'record', component: RecordingComponent, canActivate: [LoginGuard] },
    { path: 'report', component: ReportComponent, canActivate: [LoginGuard] },
    { path: '**', component: HomeComponent },
];

export const appRoutingProviders: any[] = [
    { provide: LoginGuard, useClass: MODE=="development" ? AutoLoginGuard : LoginGuard}
];

export const routing = RouterModule.forRoot(appRoutes);