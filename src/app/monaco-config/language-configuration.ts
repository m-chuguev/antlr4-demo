import type {languages} from 'monaco-editor';

export const getMonacoLanguageConfiguration = (): languages.LanguageConfiguration => ({
    wordPattern: /(-?\d*\.\d\w*)|([^\s!"#%&'()*+,./:;<=>?@[\\\]^`{|}~-]+)/g,

    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },

    brackets: [['(', ')']],

    autoClosingPairs: [
        {open: '(', close: ')'},
        {open: '"', close: '"', notIn: ['string']},
        {open: '/**', close: ' */', notIn: ['string']},
    ],
});
