import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class users_tb extends Model<users_tb> {
  @AutoIncrement
  @PrimaryKey
  
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  })
  id: any;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthday!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  picture?: string;
}
