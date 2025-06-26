import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';
import { LocalVisitacaoModel } from './localvisitacao-model';

export class PontoVisitacaoModel extends Model {
  private _idponto_visitacao!: number;
  private _idlocal_visitacao!: number;
  private _nome!: string;
  private _imagem!: string[]; // agora é array
  private _audio!: string[];  // agora é array
  private _mapa!: string[];
  private _descricao!: string;

  get idponto_visitacao(): number {
    return this._idponto_visitacao;
  }
  set idponto_visitacao(value: number) {
    this._idponto_visitacao = value;
  }

  get idlocal_visitacao(): number {
    return this._idlocal_visitacao;
  }
  set idlocal_visitacao(value: number) {
    this._idlocal_visitacao = value;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    this._nome = value;
  }

  get imagem(): string[] {
    return this._imagem;
  }
  set imagem(value: string[]) {
    this._imagem = value;
  }

  get audio(): string[] {
    return this._audio;
  }
  set audio(value: string[]) {
    this._audio = value;
  }

  get mapa(): string[] {
    return this._mapa;
  }
  set mapa(value: string[]) {
    this._mapa = value;
  }

  get descricao(): string {
    return this._descricao;
  }
  set descricao(value: string) {
    this._descricao = value;
  }
}

PontoVisitacaoModel.init(
  {
    idponto_visitacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: 'Código do Ponto de Visitação',
    },
    idlocal_visitacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'Código do Local de Visitação relacionado',
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'Nome do Ponto de Visitação',
    },
    imagem: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: 'Lista de caminhos das imagens do ponto de visitação',
    },
    audio: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: 'Lista de caminhos dos áudios do ponto de visitação',
    },
    mapa: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: 'Lista de caminhos dos áudios do ponto de visitação',
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'descricao explicativo do Ponto de Visitação',
    },
  },
  {
    sequelize,
    modelName: 'PontoVisitacaoModel',
    tableName: 'tbl_ponto_visitacao',
    timestamps: false,
  }
);

// Associações
PontoVisitacaoModel.belongsTo(LocalVisitacaoModel, {
  foreignKey: 'idlocal_visitacao',
});
LocalVisitacaoModel.hasMany(PontoVisitacaoModel, {
  foreignKey: 'idlocal_visitacao',
});
