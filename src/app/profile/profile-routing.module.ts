import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';

import { ProfileComponent }           from './profile.component';
import { ProfilePageComponent }           from '../profile-page/profile-page.component';
import { ContentComponent }           from '../content/content.component';
import { AboutComponent }             from '../about/about.component';
import { NotfoundComponent }             from '../notfound/notfound.component';
import { ContactComponent }             from '../contact/contact.component';

import { AuthGuard }                from '../auth-guard.service';
import { DummyGuard }                from '../dummy-guard.service';

const homeRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [DummyGuard],
    canActivateChild: [DummyGuard],
    children: [
        {
            //path: 'profile',
            path: '',
            component: ProfilePageComponent,
            //canActivate: [AuthGuard]
        },
        // {
        //     path: '',
        //     component: ContentComponent,
        //     canActivate: [AuthGuard]
        // },
        {
          path: 'search',
          loadChildren: '../search/search.module#SearchModule'
        },
        {
            path: 'about',
            component: AboutComponent,
        },
        {
            path: 'contact',
            component: ContactComponent,
        },
        {
            path: '**',
            component: NotfoundComponent,
        }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    HomeModule,
    RouterModule
  ]
})
export class ProfileRoutingModule {}
