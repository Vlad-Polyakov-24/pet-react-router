const FIREBASE_ROOT_DOMAIN = 'https://react-router-jokes-b4682-default-rtdb.firebaseio.com';

const getJokes = async () => {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Jokes fetching error.');
  const convertedJokes = [];

  for (const key in data) {
    const joke = {
      id: key,
      ...data[key],
    };

    convertedJokes.push(joke);
  }

  return convertedJokes;
};

const getJoke = async (jokeID) => {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes/${jokeID}.json`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Joke fetching error.');

  return {
    id: jokeID,
    ...data,
  };
};

const addJoke = async (jokeData) => {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`, {
    method: 'POST',
    body: JSON.stringify(jokeData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Joke adding error.');
};

const addComment = async (requestData) => {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/comments/${requestData.jokeID}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
        'Content-Type': 'application/json',
      },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.text || 'Comment adding error.');

  return { commentId: data.username };
};

const getComments = async (jokeID) => {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/comments/${jokeID}.json`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Comments fetching error.');
  const convertedComments = [];

  for (const key in data) {
    const comment = {
      id: key,
      ...data[key],
    };

    convertedComments.push(comment);
  }

  return convertedComments;
};

export { getJokes, getJoke, addJoke, addComment, getComments };