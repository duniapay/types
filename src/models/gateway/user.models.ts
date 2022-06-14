import { UserType } from "../../enums";

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
