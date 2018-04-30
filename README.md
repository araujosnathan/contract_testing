# Package.json
Este é o arquivo de dependências do projeto, ou seja, todas as bibliotecas que foram usadas no projeto devem estar dentro desse arquivo para facilitar a sua instalação e também seu uso no projeto.

# Arquivos *_testing.js 
Estes arquivos possuem os testes das API's, ou seja, nele descrevemos as "funcionalidades" que iremos testar, assim como os demais cenários de teste de cada API: cenários de sucesso, alternativos, erros e etc!

# Arquivo schema_*.js
Estes arquivos são responsáveis pela construção do objeto JSON (schemas) que a documentação da API exige, ou seja, estes arquivos mapeam exatamente os objetos que a API deveria retornar. Os objetos desse arquivo são usados em nossos testes (Arquivos *_testing.js) para darmos o assert entre o JSON que a API está retornando e este objeto que a documentação específica. Dessa forma conseguimos identificar se a API está respeitando o seu contrato.

# Como executar?

Primero você precisa instalar as dependências do projeto:
```
npm install
```

Agora que todas as dependêcias foram instaladas, para executar o projeto basta executar:
```
npm test
```

PS: Este é o link para o exemplo de documentação das API's testadas: https://gist.github.com/nathsilv/b3ecfa1948f8bf75252f98f3fa6b8931
