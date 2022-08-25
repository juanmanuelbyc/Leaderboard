const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vwUFEqlNDqs5YjsJKNKi/scores';

export const postScore = async (data) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const getScores = async () => {
  const response = await fetch(url).then((response) => response.json());
  return response.result;
};
