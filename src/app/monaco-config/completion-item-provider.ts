import type {editor, languages, Position} from 'monaco-editor';

import {SuggestionsVisitor} from './suggestion-visitor';
import {CharStream, CharStreams, CommonTokenStream} from 'antlr4';
import RedQlLexer from '../../antlr4/RedQlLexer';
import RedQlParser from '../../antlr4/RedQlParser';

export class MonacoSuggestionsItemProvider implements languages.CompletionItemProvider {
    constructor(
        private readonly attributes: string[],
        private readonly methods: string[],
    ) {}

    public provideCompletionItems(
        model: editor.ITextModel,
        position: Position,
    ): languages.ProviderResult<languages.CompletionList> {
        const visitor: SuggestionsVisitor = new SuggestionsVisitor(
            this.attributes,
            this.methods,
            window.monaco,
            model,
            position,
        );

        visitor.visit(this.createParser(model.getValue()).redQl());

        return {suggestions: visitor.suggestions()};
    }

    private createParser(text: string): RedQlParser {
        const inputStream: CharStream = CharStreams.fromString(text);
        const lexer: RedQlLexer = new RedQlLexer(inputStream);

        lexer.removeErrorListeners();
        const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        const parser: RedQlParser = new RedQlParser(tokenStream);

        parser.removeErrorListeners();

        return parser;
    }
}
