import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { UsuarioModel } from '../../models/usuario-model';

export const register = async (req: Request, res: Response) => {
  try {
    const data = { ...req.body }; // pega todos os campos enviados

    // Verifica se tem senha para hash
    if (!data.senhausuario) {
      return res.status(400).json({ message: 'Senha é obrigatória.' });
    }

    // Verificar se o email já está registrado (considerando que o model tem emailusuario)
    if (!data.emailusuario) {
      return res.status(400).json({ message: 'Email é obrigatório.' });
    }

    const userExists = await UsuarioModel.findOne({ where: { emailusuario: data.emailusuario } });
    if (userExists) {
      return res.status(400).json({ message: 'Email já está em uso.' });
    }

    // Criptografar a senha e substituir no objeto data
    data.senhausuario = await bcrypt.hash(data.senhausuario, 10);

    // Criar o usuário com todos os campos recebidos e modificados (senha hasheada)
    await UsuarioModel.create(data);

    return res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao registrar o usuário.', error: err });
  }
};
