import { UserType } from "../../enums";

/**
 * @interface CustomerModel
 * This interface represents Payments Gateway Customer (Module | Merchant).
 */
interface CustomerModel {
  id: number;
  fullName: string;
  userType: UserType;
  isActive: boolean;
  isVerified: boolean;
  testKey: string;
  prodKey: string;
}

export default CustomerModel;
