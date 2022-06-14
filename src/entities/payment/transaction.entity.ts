import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TransactionStatus, TransactionType } from "../../enums";

@Entity({ name: "transaction" })
class Transaction {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "user_address", type: "varchar", length: 255 })
  userAddress?: string;

  @Column({ name: "transaction_id", type: "varchar", length: 255 })
  transactionId: string;

  @Column({ name: "quote_id", type: "int", nullable: true })
  quoteId?: number;

  @Column({ type: "varchar", length: 255 })
  reference: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @Column({ type: "varchar", length: 255 })
  provider?: string;

  @Column({ name: "transaction_type", enum: TransactionType, type: "enum" })
  transactionType: TransactionType;

  @Column({ name: "fiat_type", type: "varchar", length: 255 })
  fiatType?: string;

  @Column({ name: "crypto_type", type: "varchar", length: 255 })
  cryptoType?: string;

  @Column({ name: "fiat_amount", type: "decimal", precision: 9, scale: 2 })
  fiatAmount?: number;

  @Column({ name: "crypto_amount", type: "decimal", precision: 14, scale: 4 })
  cryptoAmount?: number;

  @Column({ type: "decimal", precision: 9, scale: 2 })
  fees?: number;

  @Column({ type: "varchar", length: 255 })
  sender?: string;

  @Column({ type: "varchar", length: 255 })
  receiver?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  otp?: string;

  @Column({
    name: "transaction_status",
    type: "enum",
    enum: TransactionStatus,
  })
  transactionStatus: TransactionStatus;

  @Column({ name: "transaction_status_details", type: "text" })
  transactionStatusDetails: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Transaction;
