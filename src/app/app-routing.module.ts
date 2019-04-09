import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {AuthGuard} from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:userId', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:userId/website', component: WebsiteListComponent},
  {path: 'user/:userId/website/new', component: WebsiteNewComponent},
  {path: 'user/:userId/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:userId/website/:wid/page', component: PageListComponent},
  {path: 'user/:userId/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:userId/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new/header', component: WidgetHeaderComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent}


];

export const routing = RouterModule.forRoot(routes, { useHash: true });


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


