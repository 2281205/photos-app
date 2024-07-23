const decriptions = [
  "Мое перше фото! як вам?",
  "Вчорашній день був чудовій",
  "Мій настрій",
  "Відпустка!!",
  "хочу спробувати щось нове!",
  "no comment...",
  "+1 photo",
];
const comments = [
  "Все відмінно!",
  "Загалом все непогано. Але не всі.",
  "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
  "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
  "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
  "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?",
];
const authors = ["Артем", "Василь", "Ганна", "Иван", "Гусь", "Катя", "Олег"];

const likeRange = {
  min: 15,
  max: 175,
};

function randomElement(i) {
  return i[Math.floor(Math.random() * i.length)];
}

function randomNumber(maxRange, minRange = 0) {
  return Math.floor(Math.random() * maxRange) + minRange;
}

function createComment(index) {
  return {
    id: index + 1,
    avatar: `img/avatar-${randomNumber(authors.length, 1)}.svg`,
    message: randomElement(comments),
    name: randomElement(authors),
  };
}

function createPost(index, maxLike, minLike) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    decription: randomElement(decriptions),
    likes: randomNumber(maxLike, minLike),
    comments: renderComments(randomNumber(comments.length, 1)),
  };
}

function renderComments(i) {
  const arr = new Array(i).fill();
  const comment = arr.map((item, index) => {
    return (item = createComment(index));
  });
  return comment;
}

function renderPosts(i) {
  const arr = new Array(i).fill(0);
  const post = arr.map((item, index) => {
    return (item = createPost(index, likeRange.max, likeRange.min));
  });
  return post;
}
export { renderPosts };
