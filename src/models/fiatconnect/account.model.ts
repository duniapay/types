import { AccountType } from "../../enums";

/**
 * @interface AccountModel
 * This interface represents FiatConnect users account.
 */
interface AccountModel {
  id: number;
  cryptoAddress: string;
  accountName: string;
  institutionName: string;
  iban?: string;
  mobile?: string;
  country: string;
  operator?: string;
  accountType: AccountType;
}

export default AccountModel;
