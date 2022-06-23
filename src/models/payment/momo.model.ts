import { AccountType, TransactionStatus, TransactionType } from "../../enums";
import { MomoTxType } from "../../enums/momo.providers";

/**
 * @interface MomoTransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface MomoTransactionModel {
  id: number;
  country: string;
  provider: string;
  type: AccountType.MOBILE_MONEY;
  subtype: MomoTxType;
  phone: string;
  accountId: string;
  otp?: string;
}

/**
 * @interface MomoRecipient
 * This interface represents recipient (cashin | cashout) executed by our platform.
 */
interface MomoRecipient {
  id: number;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  provider: string;
}

export { MomoTransactionModel, MomoRecipient };
