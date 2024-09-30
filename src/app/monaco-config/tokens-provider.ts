import type {languages} from 'monaco-editor';

export const getMonacoTokensProviders = (
    attributes: string[],
    methods: string[],
): languages.IMonarchLanguage => ({
    attributes,
    methods,
    boolean: ['true', 'false'],
    baseOperators: ['&&', '!'],
    assign: ['='],
    digits: /\d+/,
    symbols: /[!#$%&*+/:<=>?@^|~-]+/,

    tokenizer: {
        root: [
            [
                /\w\w+/,
                {
                    cases: {
                        '@attributes': 'attribute',
                        '@methods': 'method',
                        '@boolean': 'boolean',
                    },
                },
            ],
            {include: '@whitespace'},
            [
                /@symbols/,
                {
                    cases: {
                        '@baseOperators': 'base-operators',
                        '@assign': '',
                        '@default': 'error',
                    },
                },
            ],
            [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
            [/"/, 'string', '@string_double'],
        ],
        whitespace: [
            [/[\t\n\r ]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^*/]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[*/]/, 'comment'],
        ],
        string_double: [
            [/[^"\\]+/, 'string'],
            [/"/, 'string', '@pop'],
        ],
    },
});
