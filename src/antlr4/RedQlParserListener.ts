// @ts-nocheck
// Generated from ./src/antlr4/RedQlParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { RedQlContext } from "./RedQlParser";
import { LoginAndBlockContext } from "./RedQlParser";
import { UnaryBlockContext } from "./RedQlParser";
import { MemberDotExpressionContext } from "./RedQlParser";
import { ArgumentsContext } from "./RedQlParser";
import { ExpressionArgumentContext } from "./RedQlParser";
import { AttributeArgumentContext } from "./RedQlParser";
import { NumberLiteralArgumentContext } from "./RedQlParser";
import { AttributeContext } from "./RedQlParser";
import { MethodContext } from "./RedQlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RedQlParser`.
 */
export default class RedQlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RedQlParser.redQl`.
	 * @param ctx the parse tree
	 */
	enterRedQl?: (ctx: RedQlContext) => void;
	/**
	 * Exit a parse tree produced by `RedQlParser.redQl`.
	 * @param ctx the parse tree
	 */
	exitRedQl?: (ctx: RedQlContext) => void;
	/**
	 * Enter a parse tree produced by the `LoginAndBlock`
	 * labeled alternative in `RedQlParser.blockOperator`.
	 * @param ctx the parse tree
	 */
	enterLoginAndBlock?: (ctx: LoginAndBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `LoginAndBlock`
	 * labeled alternative in `RedQlParser.blockOperator`.
	 * @param ctx the parse tree
	 */
	exitLoginAndBlock?: (ctx: LoginAndBlockContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryBlock`
	 * labeled alternative in `RedQlParser.blockOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryBlock?: (ctx: UnaryBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryBlock`
	 * labeled alternative in `RedQlParser.blockOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryBlock?: (ctx: UnaryBlockContext) => void;
	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `RedQlParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `RedQlParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `RedQlParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `RedQlParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by the `ExpressionArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterExpressionArgument?: (ctx: ExpressionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpressionArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitExpressionArgument?: (ctx: ExpressionArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `AttributeArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterAttributeArgument?: (ctx: AttributeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `AttributeArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitAttributeArgument?: (ctx: AttributeArgumentContext) => void;
	/**
	 * Enter a parse tree produced by the `NumberLiteralArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteralArgument?: (ctx: NumberLiteralArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberLiteralArgument`
	 * labeled alternative in `RedQlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteralArgument?: (ctx: NumberLiteralArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `RedQlParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `RedQlParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `RedQlParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `RedQlParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;
}

