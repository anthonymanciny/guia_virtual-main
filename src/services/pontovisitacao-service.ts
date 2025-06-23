import { CreationAttributes } from "sequelize";
import { IPontoVisitacao } from "../interface/pontovisitacao-interface";
import { PontoVisitacaoModel } from "../models/ponto-model";
import path from 'path';

export class PontoVisitacaoService {
    constructor() {}

    public async criar(novo_item: CreationAttributes<PontoVisitacaoModel>, files: any) {
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

    // Criar registro com os dados completos
    await PontoVisitacaoModel.create(dadosParaCriar);

    return { message: 'Ponto de visitação criado com sucesso!' };
  } catch (erro: any) {
    throw new Error('Erro ao tentar incluir um novo ponto [' + erro.message + ']');
  }
}

    public async listar() {
        try {
            const pontos: PontoVisitacaoModel[] = await PontoVisitacaoModel.findAll();
            return pontos;
        } catch (erro: any) {
            throw new Error("Erro ao tentar listar pontos [" + erro.message + "]");
        }
    }

    public async buscar(id: number): Promise<PontoVisitacaoModel> {
        try {
            const ponto = <PontoVisitacaoModel>await PontoVisitacaoModel.findByPk(id);
            return ponto;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async buscarPorIdLocalVisitacao(idLocalVisitacao: number): Promise<PontoVisitacaoModel[]> {
        try {
          const pontos = await PontoVisitacaoModel.findAll({ where: { idLocalVisitacao } });
          return pontos as PontoVisitacaoModel[];
        } catch (erro: any) {
          throw new Error(erro.message);
        }
      }
    
   public async alterar(id: number, item: Partial<IPontoVisitacao>) {
  try {
    const ponto = await this.buscar(id);
    if (!ponto) {
      throw new Error('Ponto não encontrado');
    }

    // Atualiza todos os campos presentes em item, independente do que for
    ponto.set(item);

    await ponto.save();
  } catch (erro: any) {
    throw new Error(erro.message);
  }
}

    public async delete(id: number) {
        try {
            const ponto: PontoVisitacaoModel = await this.buscar(id);
            if (ponto) {
                await ponto.destroy();
            } else {
                throw new Error('Ponto não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }
}
