import {Component, inject} from '@angular/core';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {RED_QL_LANGUAGE_ID, RED_QL_LANGUAGE_ID_PROVIDER} from './providers';
import {FormsModule} from '@angular/forms';
import {InitialMonacoService} from './services/initial-monaco.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [EditorComponent, FormsModule],
    styleUrl: './app.component.css',
    providers: [RED_QL_LANGUAGE_ID_PROVIDER, InitialMonacoService],
})
export class AppComponent {
    private language = inject(RED_QL_LANGUAGE_ID);
    public initialService = inject(InitialMonacoService);

    public editorOptions = {theme: this.language, language: this.language};
    public code: string = 'UserId.EqualTo(1, 2) && Sender.StartWith(FraudId.Cut(0, 5))\n';
}
