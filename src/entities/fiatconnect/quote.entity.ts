import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ConversionType } from "../../enums";

/**
 * @class Quote
 * This class represents quotation estimation.
 */
@Entity({ name: "quote" })
class Quote {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "crypto_address", type: "varchar", length: 255 })
  cryptoAdress?: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @Column({ name: "fiat_type", type: "varchar", length: 255 })
  fiatType: string;

  @Column({ name: "crypto_type", type: "varchar", length: 255 })
  cryptoType: string;

  @Column({ name: "fiat_amount", type: "decimal", precision: 9, scale: 2 })
  fiatAmount: number;

  @Column({ name: "crypto_amount", type: "decimal", precision: 14, scale: 4 })
  cryptoAmount: number;

  @Column({ type: "decimal", precision: 9, scale: 2 })
  fees: number;

  @Column({
    name: "quote_for",
    type: "enum",
    enum: ConversionType,
  })
  quoteFor: ConversionType;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Quote;
