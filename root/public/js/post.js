const commentCreator = async (event) => {
  event.preventDefault();
  console.log('clicked')

  const user_id = document.querySelector('#user_id')
  const post_id = document.querySelector('#post_id')
  const comment_text = document.querySelector('#comment_text')
  if (user_id && post_id && comment_text) {
    const response = await fetch('/api/post/newcomment', {
      method: 'POST',
      body: JSON.stringify({ user_id, post_id, comment_text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('you suck');
    }
  }
};
const postCreator = async (event) => {
  event.preventDefault();
  console.log('clicked')

  const user_id = document.querySelector('#user_id').value
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value
  if (title && content) {
    const response = await fetch('/api/post/', {
      method: 'POST',
      body: JSON.stringify({ title: title, content: content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('you suck');
    }
  }
};






// document
//   .querySelector('.commentForm')
//   .addEventListener('submit', commentCreator);
document
  .querySelector('.postForm')
  .addEventListener('submit', postCreator);
