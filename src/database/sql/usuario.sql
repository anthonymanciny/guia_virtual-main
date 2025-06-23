CREATE TABLE `tbl_usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT COMMENT 'Código do Usuário',
  `NomeUsuario` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Nome de exibição do usuário',
  `EmailUsuario` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL UNIQUE COMMENT 'Endereço de e-mail do usuário',
  `SenhaUsuario` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Senha criptografada do usuário',
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela que armazena as credenciais dos usuários';
