
const postCreator = async (event) => {
  event.preventDefault();
  console.log('clicked')
  
  const user_id = document.getElementById("user_id").dataset.userid;
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value
  
  if (title && content) {
  const response = await fetch('/api/post/', {
  method: 'POST',
  body: JSON.stringify({ title: title, content: content, user_id: user_id }),
  headers: { 'Content-Type': 'application/json' },
  });
  

  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('An error occurred while creating the post');
  }
  
  }
  };
  
  document
  .querySelector('.postForm')
  .addEventListener('submit', postCreator);


  // const form = document.querySelector('.comment-form');

  // form.addEventListener('submit', async (e) => {
  //   e.preventDefault();
  
  //   const commentContent = document.querySelector('#commentContent').value;
  //   const userId = document.querySelector('#userId').value;
  //   const postId = document.querySelector('#postId').value;
  
  //   const response = await fetch('/newcomment', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       post_id: postId,
  //       user_id: userId,
  //       comment_text: commentContent
  //     })
  //   });
  
  //   const result = await response.json();
  
  //   if (response.status === 200) {
  //     console.log(result.message);
  //   } else {
  //     console.error(result.message);
  //   }
  // });
  


// document
//   .querySelector('.commentForm')
//   .addEventListener('submit', commentCreator);
// document
//   .querySelector('.postForm')
//   .addEventListener('submit', postCreator);
