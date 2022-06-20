import { IdentityModel } from "../kyc";
import AccountModel from "./accounts.models";

/**
 * @interface UserModel
 * This interface represents Payments Gateway users (Module | Merchant).
 */
interface UserModel {
  id: number;
  fullName: string;
  isActive: boolean;
  isVerified?: boolean;
  city: string;
  country: string;
  address?: string;
  phone: string;
  accounts: Array<AccountModel>;
  documents: Array<IdentityModel>;
}

export default UserModel;
