import { AccountType, TransactionStatus, TransactionType } from "../../enums";
import { BankRecipientModel, BankTransactionModel } from "./bank.model";
import { MomoRecipient, MomoTransactionModel } from "./momo.model";
import { WalletRecipientModel } from "./wallet.model";

/**
 * @interface TransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface TransactionModel {
  id: number;
  reference: string;
  amount: number;
  currency: string;
  recipient: MomoRecipient | BankRecipientModel | WalletRecipientModel;
  transactionType: TransactionType;
  metadata: BankTransactionModel | MomoTransactionModel;
  transactionStatus: TransactionStatus;
  transactionStatusDetails?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default TransactionModel;
