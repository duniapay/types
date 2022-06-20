import { UserType } from "../../enums";

/**
 * @interface UserModel
 * This interface represents Payments Gateway users (Module | Merchant).
 */
interface UserModel {
  id: number;
  fullName: string;
  userType: UserType;
  isActive: boolean;
  isVerified: boolean;
  testKey: string;
  prodKey: string;
}

export default UserModel;
