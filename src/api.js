// Base URL
const base_url = "https://api.rawg.io/api/";
// "https://api.rawg.io/api?key=952e8351357441dbb07145d383909fb8/";

// Getting the date

const getCurrentDate = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentDate();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games

const popular_games = `games?key=952e8351357441dbb07145d383909fb8&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming = `games?key=952e8351357441dbb07145d383909fb8&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=952e8351357441dbb07145d383909fb8&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${popular_games}`;

// Game Details

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=952e8351357441dbb07145d383909fb8`;
// Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=952e8351357441dbb07145d383909fb8`;
