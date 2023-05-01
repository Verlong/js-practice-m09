// 1. Counter
// Використовуй html з файлу counter.html
// Отримай всі кнопки з атрибутом data-action
// До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// При кліку на кнопку data-action="save" зберігай значення counter у local storage
// При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// При кліку на кнопку data-action="decrease" зменшуй counter на 1
// При кліку на кнопку data-action="increase" збільшуй counter на 1
// При кліку на кнопку data-action="reset" роби counter = 0

const buttonsDA = document.querySelectorAll('[data-action]');
const counterValue = document.querySelector('.counter-value');

let counter = Number(localStorage.getItem('counter')) || 0;
counterValue.textContent = counter;

buttonsDA.forEach(button => {
  button.addEventListener('click', () => {
    const typeAction = button.dataset.action;
    // console.log(typeAction);

    switch (typeAction) {
      case 'decrease':
        counter--;
        console.log(counter);
        break;

      case 'increase':
        counter++;
        console.log(counter);
        break;

      case 'reset':
        counter = 0;
        console.log(counter);
        break;

      case 'save':
        localStorage.setItem('counter', counter);
        break;

      case 'clear-save':
        localStorage.removeItem('counter');
        break;

      default:
        break;
    }

    counterValue.textContent = counter;
  });
});
