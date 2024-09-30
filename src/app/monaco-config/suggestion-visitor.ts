import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import RedQlParserVisitor from '../../antlr4/RedQlParserVisitor';
import MonacoEditor, {editor, IRange, languages, Position} from 'monaco-editor';
import {AttributeContext, MethodContext} from '../../antlr4/RedQlParser';

export class SuggestionsVisitor
    extends ParseTreeVisitor<languages.CompletionItem[]>
    implements RedQlParserVisitor<languages.CompletionItem[]>
{
    private result: languages.CompletionItem[] = [];
    private readonly range: IRange;

    constructor(
        private readonly attributes: string[],
        private readonly methods: string[],
        private readonly monaco: typeof MonacoEditor,
        model: editor.ITextModel,
        private readonly position: Position,
    ) {
        super();
        const word: MonacoEditor.editor.IWordAtPosition =
            model.getWordUntilPosition(position);

        this.range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
        };
    }

    public suggestions(): languages.CompletionItem[] {
        return this.result;
    }

    public visitAttribute(ctx: AttributeContext): languages.CompletionItem[] {
        if (this.isCurrentGrammar(ctx)) {
            this.result = this.attributes.map(
                (name: string): languages.CompletionItem => ({
                    label: name,
                    kind: this.monaco.languages.CompletionItemKind.Class,
                    insertText: name,
                    range: this.range,
                }),
            );
        }

        return this.visitChildren(ctx);
    }

    public visitMethod(ctx: MethodContext): languages.CompletionItem[] {
        if (this.isCurrentGrammar(ctx)) {
            this.result = this.methods.map(
                (name: string): languages.CompletionItem => ({
                    label: name,
                    kind: this.monaco.languages.CompletionItemKind.Class,
                    insertText: name,
                    range: this.range,
                }),
            );

            console.log(this.result);
        }

        return this.visitChildren(ctx);
    }

    private isCurrentGrammar(ctx: ParserRuleContext): boolean {
        const start: number = ctx.start.column;
        const stop: number = start + ctx.getText().length + 1;
        const line: number = ctx.start.line;

        return (
            start <= this.position.column &&
            this.position.column <= stop &&
            line <= this.position.lineNumber
        );
    }
}
