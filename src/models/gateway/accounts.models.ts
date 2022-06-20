import { AccountType, MomoProviders } from "../../enums";

/**
 * @interface AccountModel
 * This interface represents FiatConnect users account.
 */
interface AccountModel {
  id: number;
  /// Institution or Momo provivder name.
  institutionOrProvider?: string | MomoProviders;
  iban?: string;
  mobile?: string;
  email: string;
  type: AccountType;
}

export default AccountModel;
