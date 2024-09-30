import type {OnDestroy} from '@angular/core';
import {inject, Injectable} from '@angular/core';
import type {IDisposable} from 'monaco-editor';
import type MonacoEditor from 'monaco-editor';
import {RED_QL_LANGUAGE_ID} from "../providers";
import {getMonacoLanguageConfiguration} from "../monaco-config/language-configuration";
import {getMonacoTokensProviders} from "../monaco-config/tokens-provider";
import {MonacoSuggestionsItemProvider} from "../monaco-config/completion-item-provider";

@Injectable()
export class InitialMonacoService implements OnDestroy {
  private readonly attributes = ['UserId', 'Sender', 'FraudId', 'FraudId2', 'UserName'];
  private readonly methods = ['EqualTo', 'StartWith', 'Cut', 'Add', 'NotEqualTo'];
  private readonly languageId = inject(RED_QL_LANGUAGE_ID);

  private readonly monacoSubscriptions: IDisposable[] = [];

  public initEditor(): void {
    const monaco: typeof MonacoEditor = (window as any).monaco ;

    this.monacoSubscriptions.push(
      monaco.languages.setLanguageConfiguration(
        this.languageId,
        getMonacoLanguageConfiguration(),
      ),
      monaco.languages.setMonarchTokensProvider(
        this.languageId,
        getMonacoTokensProviders(this.attributes, this.methods),
      ),
      monaco.languages.registerCompletionItemProvider(
        this.languageId,
        new MonacoSuggestionsItemProvider(this.attributes, this.methods),
      ),
    )
  }

  public ngOnDestroy(): void {
    this.unsubscribe();
  }

  public unsubscribe(): void {
    for (const monacoSubscription of this.monacoSubscriptions) {
      monacoSubscription.dispose();
    }
  }
}
