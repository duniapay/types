import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AccountType, MomoProviders } from "../../enums";
import Merchant from "./merchant.entity";

/**
 * @class MerchantAccount
 * This class represents merchant payment accounts infos.
 */
@Entity({ name: "merchant_account" })
class MerchantAccount {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  iban?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  mobile?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  email?: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @Column({
    name: "institution_or_provider",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  institutionOrProvider?: string | MomoProviders;

  @Column({ name: "account_type", type: "enum", enum: AccountType })
  accountType: AccountType;

  @ManyToOne(() => Merchant, (merchant) => merchant.accounts)
  merchant: Merchant;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;
}

export default MerchantAccount;
