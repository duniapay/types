import { UserType } from "../../enums";
import MerchantAccountModel from "./account.models";
import MerchantDocumentModel from "./document.model";

/**
 * @interface MerchantModel
 * This interface represents Payments Gateway Merchant (Module | Merchant).
 */
interface MerchantModel {
  id: number;
  fullName: string;
  userType: UserType;
  isActive: boolean;
  isVerified: boolean;
  testKey: string;
  prodKey: string;
  accounts?: Array<MerchantAccountModel>;
  documents?: Array<MerchantDocumentModel>;
  updatedAt?: Date;
  createdAt?: Date;
}

export default MerchantModel;
