parser grammar RedQlParser;

options {
    tokenVocab = RedQlLexer;
}

redQl
    : blockOperator EOF
    ;

blockOperator
    : singleExpression (And singleExpression)+?                                 # LoginAndBlock
    | singleExpression                                                          # UnaryBlock
    ;

singleExpression
    : attribute Dot method arguments                                            # MemberDotExpression
    ;

arguments
    : OpenParen (argument (Comma argument)*)? CloseParen
    ;

argument
    : singleExpression                                                          # ExpressionArgument
    | attribute                                                                 # AttributeArgument
    | DecimalLiteral                                                            # NumberLiteralArgument
    ;


attribute
    : Identifier
    ;

method
    : Identifier
    ;

