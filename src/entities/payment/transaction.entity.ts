import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AccountType, TransactionStatus, TransactionType } from "../../enums";

/**
 * @class Transaction
 * This class represents transactions(cashin | cashout) executed by our platform.
 */
@Entity({ name: "transaction" })
class Transaction {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "transaction_id", type: "varchar", length: 255 })
  transactionId: string;

  @Column({ type: "varchar", length: 255 })
  reference: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  provider?: string;

  @Column({ name: "transaction_type", enum: TransactionType, type: "enum" })
  transactionType: TransactionType;

  @Column({ type: "decimal", precision: 9, scale: 2, nullable: true })
  fees?: number;

  @Column({ name: "account_type", enum: AccountType, type: "enum" })
  accountType: AccountType;

  @Column({
    name: "mobile_money_account",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  mobileMoneyAccount?: string;

  @Column({
    name: "bank_account",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  bankAccount?: string;

  @Column({
    name: "iban_account",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  ibanAccount?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  otp?: string;

  @Column({
    name: "transaction_status",
    type: "enum",
    enum: TransactionStatus,
  })
  transactionStatus: TransactionStatus;

  @Column({ name: "transaction_status_details", type: "text", nullable: true })
  transactionStatusDetails?: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Transaction;
