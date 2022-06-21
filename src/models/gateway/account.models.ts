import { AccountType, MomoProviders } from "../../enums";
import MerchantModel from "./merchant.models";

/**
 * @interface MerchantAccountModel
 * This interface represents Payments Gateway merchant account.
 */
interface MerchantAccountModel {
  id: number;
  institutionOrProvider?: string | MomoProviders;
  accountType: AccountType;
  iban?: string;
  mobile?: string;
  email?: string;
  country: string;
  merchant?: MerchantModel;
  updatedAt?: Date;
  createdAt?: Date;
}

export default MerchantAccountModel;
