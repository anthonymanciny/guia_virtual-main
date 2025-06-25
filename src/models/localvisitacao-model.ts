import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';

export class LocalVisitacaoModel extends Model {
  private _idlocal_visitacao!: number;
  private _titulo!: string;
  private _localizacao!: string;
  private _zona!: string;
  private _tipo_local!: string;
  private _imagem!: string[]; // agora é array
  private _descricao!: string;

  get idlocal_visitacao(): number {
    return this._idlocal_visitacao;
  }
  set idlocal_visitacao(value: number) {
    this._idlocal_visitacao = value;
  }

  get titulo(): string {
    return this._titulo;
  }
  set titulo(value: string) {
    this._titulo = value;
  }

  get localizacao(): string {
    return this._localizacao;
  }
  set localizacao(value: string) {
    this._localizacao = value;
  }

  get zona(): string {
    return this._zona;
  }
  set zona(value: string) {
    this._zona = value;
  }

  get tipo_local(): string {
    return this._tipo_local;
  }
  set tipo_local(value: string) {
    this._tipo_local = value;
  }

    get imagem(): string[] {
    return this._imagem;
  }
  set imagem(value: string[]) {
    this._imagem = value;
  }

  get descricao(): string {
    return this._descricao;
  }
  set descricao(value: string) {
    this._descricao = value;
  }
}

LocalVisitacaoModel.init(
  {
    idlocal_visitacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: 'Código do Local de Visitação',
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'Título do Local de Visitação',
    },
    

    localizacao: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'Endereço ou referência do Local',
    },
    zona: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'Zona geográfica do Local',
    },
    tipo_local: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'Tipo do Local de Visitação',
    },
    imagem: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: 'Lista de caminhos das imagens do ponto de visitação',
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Descrição detalhada do Local de Visitação',
    },
  },
  {
    sequelize,
    modelName: 'LocalVisitacaoModel',
    tableName: 'tbl_local_visitacao',
    timestamps: false,
  }
);
