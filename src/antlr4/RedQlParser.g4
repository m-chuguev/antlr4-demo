parser grammar RedQlParser;

options {
    tokenVocab = RedQlLexer;
}

redQl
    : blockOperator EOF
    ;

blockOperator
    : singleExpression (And singleExpression)+?                                 # LoginAndBlock1
    | singleExpression                                                          # UnaryBlock
    ;

singleExpression
    : attribute Dot method arguments                                            # MemberDotExpression
    | partSingleExpression                                                      # NotCompleteExpression
    ;

partSingleExpression
    : attribute Dot method                                                      # PartAttributeDotMethod
    | attribute Dot                                                             # PartAttributeDot
    | attribute                                                                 # PartAttribute
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

