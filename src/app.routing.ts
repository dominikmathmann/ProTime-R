import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {RecordingComponent} from './components/recording/recording.component'
import {LoginComponent} from './components/login/login.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'record', component: RecordingComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: HomeComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);