import { CreationAttributes } from "sequelize";
import { ILocalVisitacao } from "../interface/localvisitacao-interface";
import { LocalVisitacaoModel } from "../models/localvisitacao-model";
export class LocalVisitacaoService{
    constructor(){}


      public async criar(novo_item: CreationAttributes<LocalVisitacaoModel>) {
    try {
      await LocalVisitacaoModel.create(novo_item);
    } catch (erro: any) {
      throw new Error("Erro ao tentar incluir um novo local [" + erro.message + "]");
    }
  }

    public async listar() {
        try {
            const locais: LocalVisitacaoModel[]  =   await LocalVisitacaoModel.findAll();
            return locais;
        } catch (erro: any) {
            throw new Error("Erro ao tentar listar locais [" + erro.message + "]");
        }
    }

    public async buscar(id: number): Promise<LocalVisitacaoModel> {
        try {
            const local = <LocalVisitacaoModel> await LocalVisitacaoModel.findByPk(id);
            return local;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

public async alterar(id: number, item: Partial<CreationAttributes<LocalVisitacaoModel>>) {
    try {
      const local = await LocalVisitacaoModel.findByPk(id);
      if (!local) {
        throw new Error('Local não encontrado');
      }

      await local.update(item);
    } catch (erro: any) {
      throw new Error(`Erro ao tentar alterar o local [${erro.message}]`);
    }
  }


    public async delete(id: number) {
        try {
            const local : LocalVisitacaoModel = await this.buscar(id);
            if (local) {
                local.destroy();
            } else {
                throw new Error('Local não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }


    

}