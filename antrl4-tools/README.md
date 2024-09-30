# Установка antlr4-tools
Это Brew скприпт для быстрой установки antrl4-tools на машине пользователя.
Установка доступна только на система, поддерживающей [Brew](https://brew.sh/).

### Сборка Typescript
[Сборка](https://github.com/antlr/antlr4/blob/master/doc/typescript-target.md) происходит на основе `RedQlLexer` и `RedQlParser` с созданием визитора ([опции сборки](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md)).
Собранные файлы получают довольно "грязными" - временное решение проставлять `// @ts-nocheck`

### Альтернативы
При необходимости можно использовать [сборку на python](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) или библиотеку [antlr4ts](https://www.npmjs.com/package/antlr4ts) c antlr4ts-cli и добавлением node-polyfill-webpack-plugin в сборку приложения.
