import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { TabsComponent } from './app/tabs/tabs.component';
// import { config } from './app/tabs/tabs.config.server';

const bootstrap = () => bootstrapApplication(AppComponent,  config);

export default bootstrap;
