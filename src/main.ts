import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { tabsconfig } from './app/tabs/tabs.config';

import { TabsComponent } from './app/tabs/tabs.component';


bootstrapApplication(AppComponent ,appConfig)
  .catch((err) => console.error(err));
