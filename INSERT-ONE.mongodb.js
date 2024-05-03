const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);

db['bd3-nosql-atv6'].insertOne(
    {
        "cod_aluno": "1",
        "cod_turma": "1",
        "nome": "Arthur",
        "cpf": "12345678912",
        "rg": "123456789",
        "telefone_aluno": "12345678912",
        "telefone_responsavel": "98765432101",
        "email": "arthur@gmail.com",
        "data_nascimento": "17/06/2005"
    }
);