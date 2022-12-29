// Synchonous // 

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// Mimic server response time //
// In questo esempio il server impiega 2 secondi per creare il post e 1 secondo per prendere il post
// Quindi tenta di prendere il post prima che sia stato creato

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts()