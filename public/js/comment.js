const form = document.querySelector('.comment-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const commentContent = document.querySelector('#commentContent').value;
    const userId = document.querySelector('#user_id')
    const postId = document.querySelector('#postId').value;
  
    const response = await fetch('http://localhost:3001/api/post/newcomment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_id: postId,
        user_id: userId.dataset.userid,
        comment_text: commentContent
      })
    });
  
    const result = await response.json();
  
    if (response.status === 200) {
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  });
  