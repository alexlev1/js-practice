function qBall() {
  // Ответы магического шара
  var answerGood = ["У тебя всё получится", "Мой ответ - да!", "Скорее да, чем нет"];
  var answerNeutral = ["Сложно ответить, спроси по-позже", "Задай вопрос по-другому", "Я не знаю"];
  var answerBad = ["Ничего не получится", "Это принесёт тебе одни неприятности", "Мой ответ - нет!"];

  // Рандом настроения
  var rand = Math.floor(Math.random() * 3);
  var answers = [answerGood, answerNeutral, answerBad];
  var answerMood = answers[rand];

  // Рандом ответа
  var random = Math.floor(Math.random() * answerMood.length);

  alert( answerMood[random] );
}
