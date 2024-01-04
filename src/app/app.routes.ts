import { Routes } from '@angular/router';
import { RoutePath } from './ts/enums/route-path.enum';
import { HomeComponent } from './components/home/home.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { EditFeedbackComponent } from './components/edit-feedback/edit-feedback.component';
import { CreateEditFeedbackComponent } from './components/create-edit-feedback/create-edit-feedback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: RoutePath.ROADMAP, component: RoadmapComponent },
  { path: RoutePath.EDIT + '/:id', component: EditFeedbackComponent },
  { path: RoutePath.CREATE_FEEDBACK, component: CreateEditFeedbackComponent },
  { path: RoutePath.EDIT_FEEDBACK + '/:id', component: CreateEditFeedbackComponent }
];
