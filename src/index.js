import './style.css';
import { postScore, getScores } from './modules/apiMethods.js';
import {
  newName,
  newScore,
  submitButton,
  refreshButton,
  boardContainer,
} from './modules/DOM-references.js';

const printRow = (rowData) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.setAttribute('class', 'data');
  td.innerHTML = `${rowData.user}: ${rowData.score}`;
  tr.appendChild(td);
  boardContainer.appendChild(tr);
};

const loadScores = async () => {
  const getRes = await getScores();
  getRes.forEach((result) => {
    printRow(result);
  });
};

const refresh = () => {
  boardContainer.innerHTML = '';
  loadScores();
};

const submitScore = () => {
  const requestBody = {
    user: newName.value,
    score: newScore.value,
  };
  postScore(requestBody);
};

loadScores();
submitButton.addEventListener('click', submitScore);
refreshButton.addEventListener('click', refresh);
