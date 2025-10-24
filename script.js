document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')) return;


      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));


      button.classList.add('active');
      const target = document.getElementById(button.dataset.tab);
      target.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollerInner = document.querySelector('.scroller__inner');
  const brands = scrollerInner.innerHTML;

  scrollerInner.innerHTML = brands + brands + brands;
  
  document.querySelector('.scroller').setAttribute('data-animated', 'true');
});


