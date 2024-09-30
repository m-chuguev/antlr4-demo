import {RED_QL_LANGUAGE_NAME} from '../providers';
import {NgxMonacoEditorConfig} from 'ngx-monaco-editor-v2';
import {MonacoDefineTheme} from './define-theme';

export const MONACO_DEFAULT_OPTIONS: NgxMonacoEditorConfig['defaultOptions'] = {
    theme: RED_QL_LANGUAGE_NAME,
    language: RED_QL_LANGUAGE_NAME,
    lineNumbers: 'off',
    roundedSelection: false,
    scrollBeyondLastLine: false,
    minimap: {
        enabled: false,
    },
    automaticLayout: true,
    renderLineHighlight: 'none',
    hideCursorInOverviewRuler: true,
    overviewRulerLanes: 0,
    wordBasedSuggestions: false,
    wordWrap: 'on',
    wordWrapColumn: 140,
    lineDecorationsWidth: 6,
    lineNumbersMinChars: 2,
    glyphMargin: false,
    folding: false,
    tabCompletion: 'onlySnippets',
    acceptSuggestionOnCommitCharacter: false,
    acceptSuggestionOnEnter: 'on',
    fontLigatures: false,
    fontSize: 14,
    lineHeight: 20,
};

export const MONACO_ON_LOAD: NgxMonacoEditorConfig['onMonacoLoad'] = (): void => {
    window.monaco.languages.register({id: RED_QL_LANGUAGE_NAME});
    window.monaco.editor.defineTheme(RED_QL_LANGUAGE_NAME, new MonacoDefineTheme());
};
