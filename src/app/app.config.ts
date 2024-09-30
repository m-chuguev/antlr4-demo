import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMonacoEditor } from "ngx-monaco-editor-v2";

import { routes } from './app.routes';
import {MONACO_DEFAULT_OPTIONS, MONACO_ON_LOAD} from "./monaco-config";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideMonacoEditor({
    defaultOptions: MONACO_DEFAULT_OPTIONS,
    onMonacoLoad: MONACO_ON_LOAD
  })]
};
