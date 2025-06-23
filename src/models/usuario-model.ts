import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';

export class UsuarioModel extends Model {
  private _idusuario!: number;
  private _nomeusuario!: string;
  private _emailusuario!: string;
  private _senhausuario!: string;

  get idusuario(): number {
    return this._idusuario;
  }
  set idusuario(value: number) {
    this._idusuario = value;
  }

  get nomeusuario(): string {
    return this._nomeusuario;
  }
  set nomeusuario(value: string) {
    this._nomeusuario = value;
  }

  get emailusuario(): string {
    return this._emailusuario;
  }
  set emailusuario(value: string) {
    this._emailusuario = value;
  }

  get senhausuario(): string {
    return this._senhausuario;
  }
  set senhausuario(value: string) {
    this._senhausuario = value;
  }
}

UsuarioModel.init(
  {
    idusuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: 'Código do Usuário',
    },
    nomeusuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'Nome de exibição do usuário',
    },
    emailusuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      comment: 'Endereço de e-mail do usuário',
    },
    senhausuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'Senha criptografada do usuário',
    },
  },
  {
    sequelize,
    modelName: 'UsuarioModel',
    tableName: 'tbl_usuario',
    timestamps: false,
  }
);
