import { AccountType, TransactionStatus, TransactionType } from "../../enums";
import BankTransactionModel from "./bank.model";
import MomoTransactionModel from "./momo.model";

/**
 * @interface TransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface TransactionModel {
  id: number;
  reference: string;
  amount: number;
  currency: string;
  customerId: string;
  transactionType: TransactionType;
  metadata: BankTransactionModel | MomoTransactionModel;
  transactionStatus: TransactionStatus;
  transactionStatusDetails?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default TransactionModel;
