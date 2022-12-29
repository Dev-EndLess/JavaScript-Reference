// Promises //

// 1. Create in modo specifico per le Operazioni Async
// 2. Si possono concatenare le operazioni usando `.then`
// 3. Gli eventi sono messi in coda
// 4. Miglior Error Handling grazie al `.catch`
// 5. Avoid Inversion of Control (speriamo di capire cosa voglia dire)

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];


// Mimic the server response time with setTimout
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
.then(getPosts);

