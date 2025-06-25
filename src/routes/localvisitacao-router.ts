import express, { Router } from 'express';
import { LocalVisitacaoController } from '../controllers/localvisitacao-controller';
import { authenticateJWT } from '../middleware/auth';
import upload from '../middleware/upload-mid';


export class LocalVisitacaoRouter {
    public readonly router!: Router;
    private localvisitacaoController: LocalVisitacaoController;

    constructor() {

        this.router = express.Router();
        this.localvisitacaoController = new LocalVisitacaoController();

        this.router.post(
            '/criar',
            authenticateJWT, // Middleware de autenticação JWT
            upload.fields(
                [{ name: 'imagem', maxCount: 10 }
                ]), // Middleware de upload de arquivos
            (req, res) => {this.localvisitacaoController.criar(req, res);
        });

        this.router.get('/buscar/:id', (req, res) => {
            this.localvisitacaoController.buscar(req, res);
        });

        this.router.get('/listar', (req, res) => {
            this.localvisitacaoController.listar(req, res);
        });


        this.router.put('/alterar/:id',authenticateJWT, (req, res) => {
            this.localvisitacaoController.alterar(req, res);
        });

        this.router.delete('/excluir/:id', (req, res) => {
            this.localvisitacaoController.excluir(req, res);
        });
    }
}