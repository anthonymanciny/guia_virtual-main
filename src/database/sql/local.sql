CREATE TABLE `tbl_local_visitacao` (
  `idlocal_visitacao` INT NOT NULL AUTO_INCREMENT COMMENT 'Código do Local de Visitação',
  `Titulo` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Título do Local de Visitação',
  `Localizacao` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Endereço ou referência do Local',
  `Zona` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Zona geográfica do Local',
  `Tipo_Local` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Tipo do Local de Visitação',
   `Imagem` LONGBLOB COMMENT 'Arquivo de imagem do ponto de visitação',
  `Descricao` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Descrição detalhada do Local de Visitação',
  PRIMARY KEY (`idlocal_visitacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela que armazena os locais de visitação';
