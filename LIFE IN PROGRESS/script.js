document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')) return;

      // deactivate previous
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // activate new
      button.classList.add('active');
      const target = document.getElementById(button.dataset.tab);
      target.classList.add('active');
    });
  });
});

// Duplicate brands for infinite scroll
document.addEventListener('DOMContentLoaded', function() {
  const scrollerInner = document.querySelector('.scroller__inner');
  const brands = scrollerInner.innerHTML;
  
  // Duplicate content 2 times for seamless loop
  scrollerInner.innerHTML = brands + brands + brands;
  
  // Enable animation
  document.querySelector('.scroller').setAttribute('data-animated', 'true');
});


