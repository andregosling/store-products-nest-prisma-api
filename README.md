
# Produtos de uma loja com NestJs e Prisma

CRUD criado com NestJS e Prisma para atualizar e listar os produtos de uma loja.


# Instalação

#### Clonando o repositório

```bash
git clone https://github.com/andregosling/store-products-nest-prisma-api.git

cd store-products-nest-prisma-api

code . # Opcional, usado para abrir o Visual Studio Code no projeto
```

#### Instalando as dependências

```bash
npm install (or yarn install)
```

#### Criando o banco de dados

Certifique-se de estar com o MySQL iniciado no XAMPP.

```sql
CREATE DATABASE `store-nest-products` /*!40100 COLLATE 'utf8mb4_general_ci' */
```

#### Sincronizando o banco de dados ao prisma

```bash
yarn prisma db push
```

# Execução

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Rest API

## Criar produto

``POST http://localhost:3000/products ``

### Request

```
curl --request POST \
  --url http://localhost:3000/products \
  --header 'Content-Type: application/json' \
  --data '{"name": "Produto01","ammount": 5}'
```

### Response 

```json
{
    "id": 1,
    "name": "Produto01",
    "ammount": 5
}
```

## Buscar por todos os produtos

``GET http://localhost:3000/products``

### Request

```curl
curl --request GET \
  --url http://localhost:3000/products
```

### Response 

```json
[{
    "id": 1,
    "name": "Produto01",
    "ammount": 5
}]
```

## Buscar por um produto em específico

``GET http://localhost:3000/products/:id``

### Request

```curl
curl --request GET \
  --url http://localhost:3000/products/1
```

### Response 

```json
{
    "id": 1,
    "name": "Produto01",
    "ammount": 5
}
```

## Atualizar dados de um produto

``PATCH http://localhost:3000/products/:id``

### Request

```curl
curl --request PATCH \
  --url http://localhost:3000/products/1 \
  --header 'Content-Type: application/json' \
  --data '{"name": "newProduct01"}'
```

### Response 

```json
{
    "id": 1,
    "name": "newProduct01",
    "ammount": 5
}
```

## Deletar produto

``DELETE http://localhost:3000/products/1``

### Request

```curl
curl --request DELETE \
  --url http://localhost:3000/products/1
```

### Response 

```json
{
    "id": 1,
    "name": "Produto01",
    "ammount": 5
}
```
