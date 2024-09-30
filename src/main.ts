import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

declare global {
    interface Window {
        monaco: typeof import('monaco-editor');
    }
}
