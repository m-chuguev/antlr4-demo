import type {editor} from 'monaco-editor';

// https://github.com/microsoft/monaco-editor/issues/1631
export class MonacoDefineTheme implements editor.IStandaloneThemeData {
    public base: editor.BuiltinTheme = 'vs';
    public inherit = false;
    public rules: editor.ITokenThemeRule[] = [
        {token: 'attribute', foreground: '8a1d92'},
        {token: 'string', foreground: '347b50'},
        {token: 'number', foreground: '0030aa'},
        {token: 'boolean', foreground: '0030aa'},
        {token: 'base-operators', foreground: '1650eb'},
        {token: 'comment', foreground: '909090'},
        {token: 'method', foreground: '7b7a43'},
        {token: 'named-argument', foreground: '007298'},
        {token: 'error', foreground: 'f40000'},
    ];

    public colors: editor.IColors = {
        'editor.background': '#ffffff',
        'input.border': '#cccccc',
    };
}
