import { AccountType } from "../../enums";

interface AccountModel {
  id: number;
  userAddress: string;
  accountName: string;
  institutionName: string;
  iban: string;
  mobile: string;
  country: string;
  operator: string;
  accountType: AccountType;
}

export default AccountModel;
