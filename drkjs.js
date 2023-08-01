document.addEventListener("DOMContentLoaded", function () {
  // FACTIONS NAV
  document.getElementById("1").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.factions_slider_nav.w-slider-nav div:nth-child(1)")
      .dispatchEvent(new Event("tap"));
  });
  document.getElementById("2").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.factions_slider_nav.w-slider-nav div:nth-child(2)")
      .dispatchEvent(new Event("tap"));
  });
  document.getElementById("3").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.factions_slider_nav.w-slider-nav div:nth-child(3)")
      .dispatchEvent(new Event("tap"));
  });
  document.getElementById("4").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.factions_slider_nav.w-slider-nav div:nth-child(4)")
      .dispatchEvent(new Event("tap"));
  });

  // QUIZ NAV
  function triggerQuizNav(index) {
    return function (e) {
      e.preventDefault();
      document
        .querySelector(
          `div.surv_slider_nav.w-slider-nav div:nth-child(${index})`
        )
        .dispatchEvent(new Event("tap"));
    };
  }

  for (let i = 1; i <= 11; i++) {
    const quizElements = document.querySelectorAll(
      `#one-${i}, #two-${i}, #three-${i}, #four-${i}, #five-${i}, #six-${i}, #seven-${i}, #eight-${i}, #nine-${i}, #ten-${i}`
    );
    quizElements.forEach(function (element) {
      element.addEventListener("click", triggerQuizNav(i + 1));
    });
  }

  document.getElementById("reset_quiz").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.surv_slider_nav.w-slider-nav div:nth-child(1)")
      .dispatchEvent(new Event("tap"));
  });

  // Setting "tab_active" class on element with ID "1"
  document
    .getElementById("1")
    .querySelector(".tab_line .tabline")
    .classList.add("tab_active");
  document
    .getElementById("1")
    .querySelector(".tab_line .tab_shape")
    .classList.add("tab_active");

  // Handling tab menu clicks
  const tabMenus = document.querySelectorAll(".tab_menu .tab");
  tabMenus.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const tabLine = tab.querySelector(".tab_line .tabline");
      const tabShape = tab.querySelector(".tab_line .tab_shape");
      document
        .querySelectorAll(".tab_menu .tab_line .tab_shape")
        .forEach(function (el) {
          el.classList.remove("tab_active");
        });
      document
        .querySelectorAll(".tab_menu .tab_line .tabline")
        .forEach(function (el) {
          el.classList.remove("tab_active");
        });
      tabLine.classList.add("tab_active");
      tabShape.classList.add("tab_active");
    });

    tab.addEventListener("mouseout", function () {
      tab.querySelector(".tab_line").style.opacity = "0.5";
    });

    tab.addEventListener("mouseover", function () {
      tab.querySelector(".tab_line").style.opacity = "1";
    });
  });

  // Saving quiz answers to localStorage
  function saveQuizAnswer(element, answerName) {
    element.addEventListener("click", function () {
      const answer = element.getAttribute("data-answer");
      localStorage.setItem(answerName, answer);
    });
  }

  const quizQuestions = [
    { questionIds: ["one", "two", "three", "four"] },
    { questionIds: ["five", "six", "seven", "eight", "nine", "ten"] },
    { questionIds: ["eleven"] },
  ];

  quizQuestions.forEach(function (questionSet, index) {
    const answerName = `answer${index + 1}`;
    questionSet.questionIds.forEach(function (questionId) {
      const elements = document.querySelectorAll(
        `#${questionId}-one, #${questionId}-two, #${questionId}-three, #${questionId}-four`
      );
      elements.forEach(function (element) {
        saveQuizAnswer(element, answerName);
      });
    });
  });

  // Handling "selected" class on quiz answers
  const quizAnswers = document.querySelectorAll(".quiz-a");
  quizAnswers.forEach(function (answer) {
    answer.addEventListener("click", function () {
      this.classList.add("selected");
      const siblings = Array.from(this.parentNode.children).filter(
        (el) => el !== this
      );
      siblings.forEach(function (sibling) {
        sibling.classList.remove("selected");
      });
    });
  });

  // Handling quiz open and check-answer buttons
  document
    .querySelector(".btn-quiz-open.nomargin")
    .addEventListener("click", function () {
      document.querySelector(".quiz-wrapper").classList.remove("hidden");
      document.querySelector(".quiz-wrapper").classList.add("show");
      document.querySelectorAll(".answer-value").forEach(function (el) {
        el.classList.add("hidden");
        el.classList.remove("show");
      });
    });

  document
    .querySelector(".check-answer")
    .addEventListener("click", function () {
      // Get answers from localStorage
      const answers = Array.from({ length: 11 }, (_, i) =>
        Number(localStorage.getItem(`answer${i + 1}`))
      );

      // Function to calculate the most frequent number
      function mostFrequent(arr) {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
        let maxKey = 1;

        for (const num of arr) {
          if (num >= 1 && num <= 4) {
            counts[num]++;
            if (counts[num] > counts[maxKey]) {
              maxKey = num;
            }
          }
        }
        return maxKey;
      }

      // Get the most frequent answer
      const mostFrequentAnswer = mostFrequent(answers);

      // Display the result
      const copyElement = document.querySelector(".answer-value");
      const logoElement = document.querySelector(".answer-logo");

      switch (mostFrequentAnswer) {
        case 1:
          copyElement.textContent = "Hedonists";
          logoElement.className = "answer-logo hedo";
          break;
        case 2:
          copyElement.textContent = "Barbarians";
          logoElement.className = "answer-logo barba";
          break;
        case 3:
          copyElement.textContent = "Nomads";
          logoElement.className = "answer-logo nomads";
          break;
        case 4:
          copyElement.textContent = "Technognostics";
          logoElement.className = "answer-logo techno";
          break;
        default:
          copyElement.textContent = "Average is out of range.";
      }
    });

  // Uncomment the following code if you need to handle reset functionality
  // document.querySelector(".reset-quiz").addEventListener("click", function () {
  //   document.querySelectorAll(".quiz-a").forEach(function (answer) {
  //     answer.classList.remove("selected");
  //   });
  //   document.querySelector("div.surv_slider_nav.w-slider-nav div:nth-child(1)").dispatchEvent(new Event("tap"));
  //   localStorage.clear();
  // });

  // Code for Webflow Slider
  const l = document.querySelector("#quiz-slider .w-slider-arrow-left");
  const r = document.querySelector("#quiz-slider .quiz-right-arrow");
  document
    .getElementById("quiz-slider")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("back-button")) {
        l.dispatchEvent(new Event("tap"));
      } else if (event.target.classList.contains("quiz-a")) {
        r.dispatchEvent(new Event("tap"));
      }
    });
});
