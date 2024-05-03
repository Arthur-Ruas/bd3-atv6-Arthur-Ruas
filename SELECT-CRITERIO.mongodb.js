const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv6'].find({ "cpf": "12345611192" },
  {
    "cod_aluno": 0
  }
);
