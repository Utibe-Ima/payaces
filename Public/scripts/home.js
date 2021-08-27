
      var show__form = document.querySelector('#show-form')
      var pop__up = document.querySelector('#pop-up')
      var close__btn = document.querySelector('#close-btn')
      var hideSectionText = document.querySelector('.section-text')
      var hero = document.querySelector(".section-body")

      console.log(pop__up);

      // shows the form
      function showForm() {
        window.addEventListener('click', function () {
          pop__up.classList.add('active')
        })
        hero.classList.add('trans')
      }

      // removes form
      function closeForm() {
        window.addEventListener('click', function () {
          pop__up.classList.remove('active')
        })
        hero.style.display = "flex"
        hero.classList.remove('trans')

      }

      