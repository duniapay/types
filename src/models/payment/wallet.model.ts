import { AccountType } from "../../enums";

/**
 * @interface WalletRecipientModel
 * This interface represents recipient (cashin | cashout) executed by our platform.
 */
interface WalletRecipientModel {
  id: number;
  country: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export { WalletRecipientModel };
