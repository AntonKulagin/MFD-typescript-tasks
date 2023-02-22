const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<[]> => {
  return fetch(url).then((response) => response.json());
};

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const transformAndLogData = (comment: IComment): void => {
  console.log(`ID: ${comment.id}, Email: ${comment.email}`);
};

getData(COMMENTS_URL).then((data) => {
  data.forEach(transformAndLogData);
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
