# JavaScript Engine

[Reference](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

A JavaScript Engine is a program that converts JavaScript code into something the computer can understand. The process involves several steps:

## Lexical Analysis

The first step in the JavaScript engine. It breaks up the code into tokens to identify their meaning.

## Parser

Takes the tokens from the lexical analysis and creates an Abstract Syntax Tree (AST). The AST is a data structure that represents the code. You can visualize an AST using tools like [astexplorer.net](https://astexplorer.net).

## Interpreter

Converts the AST into bytecode. Bytecode is a lower-level language that is specific to the JavaScript engine.

## Machine Code

The bytecode is then converted into machine code, which is a set of instructions that the computer can understand.
