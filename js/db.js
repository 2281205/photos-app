const decriptions = [
  "Мое перше фото! як вам?",
  "Вчорашній день був чудовій",
  "Мій настрій",
  "Відпустка!!",
  "хочу спробувати щось нове!",
  "no comment ;((...",
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
const authors = ["Артем", "Василь", "Ганна", "Иван", "Гусь", "Катя"];

const countRange = {
  start: 1,
  min: 15,
  max: 175,
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(maxRange, minRange = 0) {
  return Math.floor(Math.random() * maxRange) + minRange;
}

function getCommentsArray(countOfComments) {
  const arr = new Array(countOfComments).fill();
  const comment = arr.map(
    (item, index) =>
      (item = {
        id: index + countRange.start,
        avatar: `img/avatar-${getRandomNumber(
          authors.length,
          countRange.start
        )}.svg`,
        message: getRandomElement(comments),
        name: getRandomElement(authors),
      })
  );
  return comment;
}

export function getPostsArray(countOfPosts) {
  const arr = new Array(countOfPosts).fill();
  const post = arr.map(
    (item, index) =>
      (item = {
        id: index + countRange.start,
        avatar: `img/avatar-${getRandomNumber(
          authors.length,
          countRange.start
        )}.svg`,
        name: getRandomElement(authors),
        url:
          index >= 25
            ? `photos/${getRandomNumber(25, 1)}.jpg`
            : `photos/${index + countRange.start}.jpg`,
        decription: getRandomElement(decriptions),
        likes: getRandomNumber(countRange.max, countRange.min),
        comments: getCommentsArray(
          getRandomNumber(comments.length, countRange.start)
        ),
      })
  );
  return post;
}
