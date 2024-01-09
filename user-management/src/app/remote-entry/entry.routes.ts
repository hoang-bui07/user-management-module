import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AuthGuard } from '@micro-app/auth';

export const remoteRoutes: Route[] = [
  { 
    path: '',
    component: RemoteEntryComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { roles: ['Admin'] }
  },
];
