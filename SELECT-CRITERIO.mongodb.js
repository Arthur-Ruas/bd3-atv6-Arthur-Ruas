const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

/* Seleciona todos os dados de todos arquivos da collection */
db['bd3-nosql-atv6'].find({ "cpf": "12345611192" },
  {
    "cod_aluno": 0
  }
);