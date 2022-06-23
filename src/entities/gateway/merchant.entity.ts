import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserType } from "../../enums";
import MerchantAccount from "./account.entity";
import MerchantDocument from "./document.entity";

/**
 * @class Merchant
 * This class represents Payments Gateway users (Module | Merchant).
 */
@Entity({ name: "merchant" })
class Merchant {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "full_name", type: "varchar", length: 255 })
  fullName: string;

  @Column({ name: "user_type", enum: UserType, type: "enum" })
  userType: UserType;

  @Column({ name: "is_active", type: "boolean", default: false })
  isActive: boolean;

  @Column({ name: "is_verified", type: "boolean", default: false })
  isVerified: boolean;

  @Column({ name: "test_key", type: "varchar", length: 255 })
  testKey: string;

  @Column({ name: "prod_key", type: "varchar", length: 255 })
  prodKey: string;

  @OneToMany(() => MerchantAccount, (account) => account.merchant, {
    nullable: true,
  })
  accounts?: Array<MerchantAccount>;

  @OneToMany(() => MerchantDocument, (document) => document.merchant, {
    nullable: true,
  })
  documents?: Array<MerchantDocument>;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;
}

export default Merchant;
