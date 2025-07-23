 document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.nextElementSibling;
    const isActive = description.classList.toggle('active');
    if (isActive) {
      description.style.maxHeight = description.scrollHeight + 'px';
      description.style.opacity = '1';
      this.textContent = 'Скрыть';
    } else {
      description.style.maxHeight = '0';
      description.style.opacity = '0';
      this.textContent = 'Раскрыть';
    }
    
    this.classList.toggle('active', isActive);
  });
 
let currentSlide = 0;
        const slides = document.querySelectorAll('.gallery-img');
        
        function showSlide(n) {
            slides.forEach(img => img.classList.remove('active'));
            slides[n].classList.add('active');
        }
        
        function changeSlide(n) {
            currentSlide += n;
            
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            
            showSlide(currentSlide);
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        });
    });

// Находим контейнер со слайдами
    const slides = document.querySelector('.slides');

    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.slide').length;

    // Находим кнопки «Назад» и «Вперёд»
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Находим сам слайдер (нужен для остановки автопрокрутки при наведении)
    const slider = document.querySelector('.slider');

    let currentIndex = 0; // Переменная для хранения текущего индекса слайда
    let autoPlayInterval; // Переменная для хранения интервала автопрокрутки

    /**
     * Функция для смены слайдов
     * @param {number} index — индекс слайда, на который нужно перейти
     */
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если текущий слайд первый, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если текущий слайд последний, переходим на первый
        }

        currentIndex = index; // Запоминаем текущий индекс
        slides.style.transform = `translateX(${-index * 100}%)`; // Смещаем контейнер слайдов
    }

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    /**
     * Функция запуска автоматического перелистывания слайдов
     * Устанавливает интервал на три секунды
     */
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3000);
    }

    /**
     * Функция остановки автопрокрутки
     * Останавливает заданный ранее интервал
     */
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Запускаем автопрокрутку при загрузке страницы
    startAutoPlay();

    // Останавливаем автопрокрутку, если пользователь навёл курсор на слайдер
    slider.addEventListener('mouseenter', stopAutoPlay);

    // Возобновляем автопрокрутку, когда пользователь убирает курсор
    slider.addEventListener('mouseleave', startAutoPlay);

    /* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function ClickList() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}