import { BIN_OPERATION_NODE_TYPE } from '../constants';
import Token from '../Token';
import ExpressionNode from './ExpressionNode';

export default class BinOperationNode extends ExpressionNode {
  operator: Token;
  left: ExpressionNode;
  right: ExpressionNode;

  constructor(operator: Token, left: ExpressionNode, right: ExpressionNode) {
    super(BIN_OPERATION_NODE_TYPE);
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}
