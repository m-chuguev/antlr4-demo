// @ts-nocheck
// Generated from ./src/antlr4/RedQlParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';

import {RedQlContext} from './RedQlParser';
import {LoginAndBlockContext} from './RedQlParser';
import {UnaryBlockContext} from './RedQlParser';
import {MemberDotExpressionContext} from './RedQlParser';
import {ArgumentsContext} from './RedQlParser';
import {ExpressionArgumentContext} from './RedQlParser';
import {AttributeArgumentContext} from './RedQlParser';
import {NumberLiteralArgumentContext} from './RedQlParser';
import {AttributeContext} from './RedQlParser';
import {MethodContext} from './RedQlParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RedQlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class RedQlParserVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RedQlParser.redQl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRedQl?: (ctx: RedQlContext) => Result;
    /**
     * Visit a parse tree produced by the `LoginAndBlock`
     * labeled alternative in `RedQlParser.blockOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoginAndBlock?: (ctx: LoginAndBlockContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryBlock`
     * labeled alternative in `RedQlParser.blockOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryBlock?: (ctx: UnaryBlockContext) => Result;
    /**
     * Visit a parse tree produced by the `MemberDotExpression`
     * labeled alternative in `RedQlParser.singleExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RedQlParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by the `ExpressionArgument`
     * labeled alternative in `RedQlParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionArgument?: (ctx: ExpressionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by the `AttributeArgument`
     * labeled alternative in `RedQlParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeArgument?: (ctx: AttributeArgumentContext) => Result;
    /**
     * Visit a parse tree produced by the `NumberLiteralArgument`
     * labeled alternative in `RedQlParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteralArgument?: (ctx: NumberLiteralArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `RedQlParser.attribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute?: (ctx: AttributeContext) => Result;
    /**
     * Visit a parse tree produced by `RedQlParser.method`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethod?: (ctx: MethodContext) => Result;
}
