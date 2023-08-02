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
    localStorage.clear(); // Clearing the localStorage here

    // Removing the "selected" class from all elements with the class "quiz-a"
    const quizAnswers = document.querySelectorAll(".quiz-a");
    quizAnswers.forEach(function (answer) {
      answer.classList.remove("selected");
    });
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
      //Array of numbers
      const answers = [
        Number(localStorage.getItem("answer1")),
        Number(localStorage.getItem("answer2")),
        Number(localStorage.getItem("answer3")),
        Number(localStorage.getItem("answer4")),
        Number(localStorage.getItem("answer5")),
        Number(localStorage.getItem("answer6")),
        Number(localStorage.getItem("answer7")),
        Number(localStorage.getItem("answer8")),
        Number(localStorage.getItem("answer9")),
        Number(localStorage.getItem("answer10")),
        Number(localStorage.getItem("answer11")),
      ];

      //Function to calculate the most frequent number in the array
      function mostFrequent(arr) {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
        let maxKey = 1;

        for (let i = 0; i < arr.length; i++) {
          const key = arr[i];
          if (key >= 1 && key <= 4) {
            counts[key]++;
            if (counts[key] > counts[maxKey]) {
              maxKey = key;
            }
          }
        }
        return maxKey;
      }

      //Get the most frequent number from the answers array
      const mostFrequentNumber = mostFrequent(answers);

      //Set the appropriate copy and class based on the most frequent number
      let copy;
      switch (mostFrequentNumber) {
        case 1:
          copy = "Hedonists";
          document.querySelector(".answer-value").forEach(function (el) {
            el.textContent = copy;
          });
          document.querySelector(".answer-logo").classList.add("hedo");
          document
            .querySelector(".answer-logo")
            .classList.remove("techno", "nomads", "barba");
          break;
        case 2:
          copy = "Barbarians";
          document.querySelector(".answer-value").forEach(function (el) {
            el.textContent = copy;
          });
          document.querySelector(".answer-logo").classList.add("barba");
          document
            .querySelector(".answer-logo")
            .classList.remove("techno", "nomads", "hedo");
          break;
        case 3:
          copy = "Nomads";
          document.querySelector(".answer-value").forEach(function (el) {
            el.textContent = copy;
          });
          document.querySelector(".answer-logo").classList.add("nomads");
          document
            .querySelector(".answer-logo")
            .classList.remove("techno", "barba", "hedo");
          break;
        case 4:
          copy = "Technognostics";
          document.querySelector(".answer-value").forEach(function (el) {
            el.textContent = copy;
          });
          document.querySelector(".answer-logo").classList.add("techno");
          document
            .querySelector(".answer-logo")
            .classList.remove("nomads", "barba", "hedo");
          break;
        default:
          copy = "Average is out of range.";
      }
    });

  // Webflow Slider handling
  var Webflow = Webflow || [];
  Webflow.push(function () {
    const l = document
      .getElementById("quiz-slider")
      .querySelector(".w-slider-arrow-left");
    const r = document
      .getElementById("quiz-slider")
      .querySelector(".quiz-right-arrow");
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
});
