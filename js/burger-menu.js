/*бургер*/
window.addEventListener('DOMContentLoaded', function () {
  /*js запускается после прогона html при условии если тег script добавлен в body, а не в конце кода*/
  // document.querySelector('#burger').addEventListener('click', function() {
  /*определяем id елемента на которое будет вешаться событие и устанавливается событие click*/
  //  document.querySelector('#menu').classList.toggle('burger__menu-active');
  /*находим елемент, который будет выполнен при событии click, выбираем метод toggle и указываем класс is-active который будет использоваться при успешном собитии.*/
  //});

  const burgerBtn = document.querySelector('#burger');
  const burger__menu = document.querySelector('#burger-menu');

  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-icon-active');
    if (burgerBtn.classList.contains('burger-icon-active')) {
      burger__menu.classList.add('burger__menu-active');
    } else {
      burger__menu.classList.remove('burger__menu-active');
    };
  });
});
