
const comment = [
    "Все відмінно!", 
    "Загалом все непогано. Але не всі.", 
    "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
    "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?"
]
const db = [
    {
        id:1, 
        url: 'photos/1.jpg',
        decription: 'some random text as user',
        likes: Math.round(Math.random()*175)+15,
        comments: [
            {
                id: 135,
                avatar: 'img/avatar-6.svg',
                message: comment[Math.round(Math.random()*5)],
                name: 'Артем',
            }
        ]
    },
    {
        id:2, 
        url: 'photos/2.jpg',
        decription: 'some random text',
        likes: Math.round(Math.random()*175)+15,
        comments: [
            {
                id: 135,
                avatar: 'img/avatar-6.svg',
                message: comment[Math.round(Math.random()*5)],
                name: 'Артем',
            }
        ]
    }, {
        id:3, 
        url: 'photos/3.jpg',
        decription: 'some random text',
        likes: Math.round(Math.random()*175)+15,
        comments: [
            {
                id: 135,
                avatar: 'img/avatar-6.svg',
                message: comment[Math.round(Math.random()*5)],
                name: 'Артем',
            }
        ]
    }, {
        id:4, 
        url: 'photos/4.jpg',
        decription: 'some random text',
        likes: Math.round(Math.random()*175)+15,
        comments: [
            {
                id: 135,
                avatar: 'img/avatar-6.svg',
                message: comment[Math.round(Math.random()*5)],
                name: 'Артем',
            }
        ]
    }, {
        id:5, 
        url: 'photos/5.jpg',
        decription: 'some random text',
        likes: Math.round(Math.random()*175)+15,
        comments: [
            {
                id: 135,
                avatar: 'img/avatar-6.svg',
                message: comment[Math.round(Math.random()*5)],
                name: 'Артем',
            }
        ]
    },
    ]

export {db} 