import { renderPosts } from "./db.js";

function showPost(post) {
  const postItem = document.querySelector("#picture").cloneNode(true).content;
  console.log(document.querySelector("#picture").cloneNode(true));

  const postImg = postItem.querySelector(".picture__img");
  const postComment = postItem.querySelector(".picture__comments");
  const postLikes = postItem.querySelector(".picture__likes");
  postImg.src = post.url;
  postComment.textContent = post.comments.length;
  postLikes.textContent = post.likes;

  const appendPost = document.querySelector(".pictures__title");
  let fragment = document.createDocumentFragment();
  fragment.appendChild(postItem);
  appendPost.after(fragment);
}

console.log(renderPosts(25));

renderPosts(10).forEach((element) => showPost(element));
