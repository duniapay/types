import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ConversionType } from "../../enums";

/**
 * @class Conversion
 * This class represents FiatConnect conversion (crypto to fiat/Fiat to crypto).
 */
@Entity({ name: "conversion" })
class Conversion {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "crypto_address", type: "varchar", length: 255 })
  cryptoAdress: string;

  @Column({ name: "quote_id", type: "int" })
  quoteId: number;

  @Column({
    name: "reference_transaction",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  referenceTransaction?: string;

  @Column({ name: "conversion_type", type: "enum", enum: ConversionType })
  conversionType: ConversionType;

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

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Conversion;
