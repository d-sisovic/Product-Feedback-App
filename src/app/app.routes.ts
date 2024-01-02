import { Routes } from '@angular/router';
import { RoutePath } from './ts/enums/route-path.enum';
import { HomeComponent } from './components/home/home.component';
import { EditFeedbackComponent } from './components/edit-feedback/edit-feedback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: RoutePath.EDIT + '/:id', component: EditFeedbackComponent }
];
