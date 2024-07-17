const decriptionDB = [
    "Мое перше фото! як вам?", 
    "Вчорашній день був чудовій", 
    "Мій настрій",
    "Відпустка!!",
    "хочу спробувати щось нове!",
    "no comment..."
]
const commentDB = [
    "Все відмінно!", 
    "Загалом все непогано. Але не всі.", 
    "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
    "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?"
]
const authorDB = [
    {name:'Артем',path:'img/avatar-1.svg'},
    {name:'Василь',path:'img/avatar-2.svg'},
    {name:'Ганна',path:'img/avatar-3.svg'},
    {name:'Иван',path:'img/avatar-4.svg'},
    {name:'Гусь',path:'img/avatar-5.svg'},
    {name:'Катя',path:'img/avatar-6.svg'}
]

const renderComments = (i) => {
    const arr = new Array(i).fill(0)
    let comment = arr.map( (item, index) => {
        let autorId = Math.floor(Math.random()*authorDB.length);
        return item = 
                    { 
                        id: index+1,
                        avatar: authorDB[autorId].path,
                        message: commentDB[Math.floor(Math.random()*commentDB.length)],
                        name: authorDB[autorId].name,
                    }
    });
return comment;
}

const renderDB = (i) => {
    const arr = new Array(i).fill(0)
    let DB = arr.map( (item, index) => {
        let pathPhoto = `photos/${index+1}.jpg`
        return item = 
                    { 
                        id: index+1,
                        url: pathPhoto,
                        decription: decriptionDB[Math.floor(Math.random()*decriptionDB.length)],
                        likes: Math.floor(Math.random()*175)+15,
                        comments: renderComments(Math.floor(Math.random()*commentDB.length)),
                    }
    });
return DB;
}
 export {renderDB} 