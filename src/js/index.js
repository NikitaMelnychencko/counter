const counter = {
  value: 0,
  increment() {
    console.log('increment->this', this);
    this.value += 1;

  },
  decrement() {
    console.log('decrement->this', this);
    this.value -= 1;
  }

}

//link to button 
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
console.log(decrementBtn);
console.log(incrementBtn);
//link to value 
const valueEj = document.querySelector('.js-value');
console.log(valueEj);

//event recorder
decrementBtn.addEventListener('click', function () {
  console.log('click on decrement');

  counter.decrement();
  console.log(counter);
  valueEj.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
  console.log('click on increment');

  counter.increment();
  console.log(counter);
  valueEj.textContent = counter.value;
});