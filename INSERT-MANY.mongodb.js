const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);

/* Exemplo de inserção de dados com INSERTMANY(muitos) */
db['bd3-nosql-atv6'].insertMany(
  [
    {
      "cod_aluno": "2",
      "cod_turma": "1",
      "nome": "Igor",
      "cpf": "12345677892",
      "rg": "123156789",
      "telefone_aluno": "90878678912",
      "telefone_responsavel": "11025432101",
      "email": "igor@gmail.com",
      "data_nascimento": "12/07/2005"
    },
    {
      "cod_aluno": "3",
      "cod_turma": "1",
      "nome": "Giovanna",
      "cpf": "12345611192",
      "rg": "123150908",
      "telefone_aluno": "90101678912",
      "telefone_responsavel": "11029892101",
      "email": "giovanna@gmail.com",
      "data_nascimento": "27/06/2004"
    },
    {
      "cod_aluno": "3",
      "cod_turma": "1",
      "nome": "Lucas",
      "cpf": "12341117892",
      "rg": "123190909",
      "telefone_aluno": "90874444912",
      "telefone_responsavel": "11025111101",
      "email": "lucas@gmail.com",
      "data_nascimento": "17/01/2005"
    },
    {
      "cod_aluno": "4",
      "cod_turma": "1",
      "nome": "Thiago",
      "cpf": "12376574890",
      "rg": "129876289",
      "telefone_aluno": "90818768912",
      "telefone_responsavel": "11017625101",
      "email": "thiago@gmail.com",
      "data_nascimento": "07/06/2005"
    },
    {
      "cod_aluno": "5",
      "cod_turma": "2",
      "nome": "Thauan",
      "cpf": "12312347892",
      "rg": "123109819",
      "telefone_aluno": "90112678912",
      "telefone_responsavel": "89725432101",
      "email": "thauan@gmail.com",
      "data_nascimento": "12/04/2005"
    },
    {
      "cod_aluno": "6",
      "cod_turma": "2",
      "nome": "Mathias",
      "cpf": "12786423192",
      "rg": "878150908",
      "telefone_aluno": "90871645912",
      "telefone_responsavel": "49812892101",
      "email": "mathias@gmail.com",
      "data_nascimento": "25/03/2005"
    },
    {
      "cod_aluno": "7",
      "cod_turma": "3",
      "nome": "Juan",
      "cpf": "12341456892",
      "rg": "121342909",
      "telefone_aluno": "90761824912",
      "telefone_responsavel": "11897645101",
      "email": "juan@gmail.com",
      "data_nascimento": "09/07/2005"
    },
    {
      "cod_aluno": "8",
      "cod_turma": "3",
      "nome": "Miguel",
      "cpf": "12376182730",
      "rg": "129810293",
      "telefone_aluno": "90193468912",
      "telefone_responsavel": "18754915101",
      "email": "miguel@gmail.com",
      "data_nascimento": "27/11/2003"
    },
    {
      "cod_aluno": "9",
      "cod_turma": "3",
      "nome": "Jhonny",
      "cpf": "12102945890",
      "rg": "119203289",
      "telefone_aluno": "90182734912",
      "telefone_responsavel": "19283465101",
      "email": "jhonnyBala@gmail.com",
      "data_nascimento": "28/03/2007"
    }
  ]
);
  