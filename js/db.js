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

function renderComments(i) {
  const arr = new Array(i).fill(0);
  let comment = arr.map((item, index) => {
    return (item = {
      id: index + 1,
      avatar: `img/avatar-${
        Math.floor(Math.random() * authors.length) + 1
      }.svg`,
      message: comments[Math.floor(Math.random() * comments.length)],
      name: authors[Math.floor(Math.random() * authors.length)],
    });
  });
  return comment;
}

function renderPosts(i) {
  const arr = new Array(i).fill(0);
  let post = arr.map((item, index) => {
    return (item = {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      decription: decriptions[Math.floor(Math.random() * decriptions.length)],
      likes: Math.floor(Math.random() * 175) + 15,
      comments: renderComments(Math.floor(Math.random() * comments.length) + 1),
    });
  });
  return post;
}
export { renderPosts };
