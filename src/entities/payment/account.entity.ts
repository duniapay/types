import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AccountType } from "../../enums";

@Entity({ name: "account" })
class Account {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "user_address", type: "varchar", length: 255 })
  userAddress: string;

  @Column({ name: "account_name", type: "varchar", length: 255 })
  accountName: string;

  @Column({ name: "insitution_name", type: "varchar", length: 255 })
  institutionName: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  iban?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  mobile?: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  operator?: string;

  @Column({ name: "account_type", type: "enum", enum: AccountType })
  accountType: AccountType;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Account;
