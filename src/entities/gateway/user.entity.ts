import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserType } from "../../enums";
import Account from "./account.entity";
import Docs from "./documents.entity";

/**
 * @class User
 * This class represents Payments Gateway users (Module | Merchant).
 */
@Entity({ name: "user" })
class User {
  @PrimaryColumn()
  id: number;

  @Column({ name: "full_name", type: "varchar", length: 255 })
  fullName: string;

  @Column({ name: "user_type", enum: UserType, type: "enum" })
  userType: UserType;

  @Column({ name: "is_active", type: "boolean", default: false })
  isActive: boolean;

  @Column({ name: "is_verified", type: "boolean", default: false })
  isVerified: boolean;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Docs, (docs) => docs.user)
  documents: Array<Docs>;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;
}

export default User;
