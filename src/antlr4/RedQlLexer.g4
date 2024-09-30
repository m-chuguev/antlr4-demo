lexer grammar RedQlLexer;

/// Операнды и символы
OpenParen                   : '(';
CloseParen                  : ')';
Comma                       : ',';
Dot                         : '.';
And                         : '&&';

/// Числа
DecimalLiteral: [0-9] | [1-9] [0-9]*;

/// Идентификаторы
Identifier: IdentifierStart IdentifierPart*;

// Пропускаем пробелы
WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
LineTerminator: [\r\n\u2028\u2029] -> channel(HIDDEN);

// Фрагменты
fragment IdentifierPart: IdentifierStart | [\p{L}] | [\p{Nd}] | [\p{Pc}];

fragment IdentifierStart: [\p{Lu}];


