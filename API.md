# API Document

## Launch API Server

Required Node.js version over v10.

```shell
$ cd api-server
$ npm i # or yarn
$ npm start
$ open http://localhost:8000
```

## GET /items

### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "Light pink shoes",
      "description": "Pre-owned, in good condition with signs of wear, ...",
      "like_count": 91,
      "comment_count": 59,
      "price": 51,
      "is_sold_out": false,
      "shipping_fee": "送料込み",
      "image": "images/image_1.png",
      "category_id": 2
    },
    {
      "id": 2,
      "name": "Vegan leather bag",
      "description": "Black tote in excellent condition.\n\nFabric:Vegan leather ...",
      "like_count": 0,
      "comment_count": 0,
      "price": 10000,
      "is_sold_out": true,
      "shipping_fee": "送料込み",
      "image": "images/image_2.png",
      "category_id": 2
    },
    ...
  ]
}
```

## GET /items/:id

### Response

```json
{
  "id": 1,
  "name": "Light pink shoes",
  "description": "Pre-owned, in good condition with signs of wear, ...",
  "like_count": 91,
  "comment_count": 59,
  "price": 51,
  "is_sold_out": false,
  "shipping_fee": "送料込み",
  "image": "images/image_1.png",
  "category_id": 2
}
```

## GET /categories

### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "インテリア"
    },
    {
      "id": 2,
      "name": "レディース"
    },
    {
      "id": 3,
      "name": "ベビー・キッズ"
    },
    {
      "id": 4,
      "name": "エンタメ"
    },
    {
      "id": 5,
      "name": "メンズ"
    }
  ]
}
```
