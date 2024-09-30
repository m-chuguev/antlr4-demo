# `Демо проект для TJS#1` - Интерфейс без границ: как мы заменили привычные формы на язык запросов

### Посмотреть результат: [antlr4-demo](https://m-chuguev.github.io/antlr4-demo/)

Лексемы, грамматики и другие артефакты antlr4 вы можете найти в директории `antlr4`.

Все настройки monaco и создание подсказок - в директории `monaco-config`.

### Запуск приложения
Все артефакты уже собраны, можно просто запустить Angular приложение
```json
"start": "ng serve"
```

### Установка Antlr4 через brew `(только Mac)`
```json
"antlr4:install-tools": "brew bundle --file=./antrl4-tools/brewfile -vd"
```

### Сборка артефактов Antlr4
```json
"antlr4:build-redql": "antlr -Dlanguage=TypeScript -visitor ./src/antlr4/RedQlLexer.g4 ./src/antlr4/RedQlParser.g4",
```

<hr>

### Ссылки и материалы

- [Antlr4](https://github.com/antlr/antlr4)
- [Документация Antlr4](https://github.com/antlr/antlr4/blob/master/doc/index.md)
- [Примеры описания языков на Antlr4](https://github.com/antlr/grammars-v4)
- [Регулярные выражения](https://www.regular-expressions.info/unicode.html#prop)
- [Документация Monaco Editor](https://microsoft.github.io/monaco-editor/)

