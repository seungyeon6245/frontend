const continents = [
    {
        "_id": 1,
        "name": "옷"
    },
    {
        "_id": 2,
        "name": "가구"
    },
    {
        "_id": 3,
        "name": "식물"
    },
    {
        "_id": 4,
        "name": "디지털 기기"
    },
    {
        "_id": 5,
        "name": "가전제품"
    },
    {
        "_id": 6,
        "name": "기타"
    },
    {
        "_id": 7,
        "name": "책"
    }

]

const price = [
    {
        "_id": 0,
        "name": "모든 가격",
        "array": []
    },
    {
        "_id": 1,
        "name": "5000원 미만",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "1만원대",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "2만원대",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "3만원대",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "3만원 이상",
        "array": [300, 1500000]
    }
]




export {
    continents,
    price
}