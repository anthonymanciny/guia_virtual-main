import { CreationAttributes } from "sequelize";
import { ILocalVisitacao } from "../interface/localvisitacao-interface";
import { LocalVisitacaoModel } from "../models/localvisitacao-model";
import path from 'path';

export class LocalVisitacaoService{
    constructor(){}

    public async criar(novo_item: CreationAttributes<LocalVisitacaoModel>, files: any) {
  try {
    const PORT = process.env.PORT || '3000';
    const BASE_URL = `http://localhost:${PORT}`;

    // Clonar o objeto para não alterar o original
    const dadosParaCriar = { ...novo_item };

    // Substituir os arquivos enviados (imagem e audio)
 if (files) {
  if (files.imagem && files.imagem.length > 0) {
    dadosParaCriar.imagem = files.imagem.map(
      (file: any) => `${BASE_URL}/uploads/image/${file.filename}`
    );
  }

  if (files.audio && files.audio.length > 0) {
    dadosParaCriar.audio = files.audio.map(
      (file: any) => `${BASE_URL}/uploads/audio/${file.filename}`
    );
  }
}



      await LocalVisitacaoModel.create(dadosParaCriar);
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