//v1

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

  //QUIZ NAV
  const quizNavClickHandler = function (e) {
    e.preventDefault();
    document
      .querySelector("div.surv_slider_nav.w-slider-nav div:nth-child(2)")
      .dispatchEvent(new Event("tap"));
  };

  document
    .querySelectorAll("#one-one, #one-two, #one-three, #one-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#two-one, #two-two, #two-three, #two-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#three-one, #three-two, #three-three, #three-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#four-one, #four-two, #four-three, #four-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#five-one, #five-two, #five-three, #five-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#six-one, #six-two, #six-three, #six-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#seven-one, #seven-two, #seven-three, #seven-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#eight-one, #eight-two, #eight-three, #eight-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#nine-one, #nine-two, #nine-three, #nine-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });
  document
    .querySelectorAll("#ten-one, #ten-two, #ten-three, #ten-four")
    .forEach(function (el) {
      el.addEventListener("click", quizNavClickHandler);
    });

  document.getElementById("reset_quiz").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("div.surv_slider_nav.w-slider-nav div:nth-child(1)")
      .dispatchEvent(new Event("tap"));
  });
});

document
  .getElementById("1")
  .querySelector(".tab_line")
  .querySelector(".tabline")
  .classList.add("tab_active");
document
  .getElementById("1")
  .querySelector(".tab_line")
  .querySelector(".tab_shape")
  .classList.add("tab_active");

document.querySelectorAll(".tab_menu .tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document
      .querySelector(".tab_menu .tab_line .tab_shape.tab_active")
      .classList.remove("tab_active");
    document
      .querySelector(".tab_menu .tab_line .tabline.tab_active")
      .classList.remove("tab_active");
    tab.querySelector(".tab_line .tabline").classList.add("tab_active");
    tab.querySelector(".tab_line .tab_shape").classList.add("tab_active");
  });
});

document.querySelectorAll(".tab_menu .tab").forEach(function (tab) {
  tab.addEventListener("mouseout", function () {
    tab.querySelector(".tab_line").style.opacity = "50";
  });
});

document.querySelectorAll(".tab_menu .tab").forEach(function (tab) {
  tab.addEventListener("mouseover", function () {
    tab.querySelector(".tab_line").style.opacity = "100";
  });
});

document
  .querySelectorAll("#one-one, #one-two, #one-three, #one-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerOne = el.getAttribute("data-answer");
      localStorage.setItem("answerOne", answerOne);
    });
  });
document
  .querySelectorAll("#two-one, #two-two, #two-three, #two-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerTwo = el.getAttribute("data-answer");
      localStorage.setItem("answerTwo", answerTwo);
    });
  });
document
  .querySelectorAll("#three-one, #three-two, #three-three, #three-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerThree = el.getAttribute("data-answer");
      localStorage.setItem("answerThree", answerThree);
    });
  });
document
  .querySelectorAll("#four-one, #four-two, #four-three, #four-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerFour = el.getAttribute("data-answer");
      localStorage.setItem("answerFour", answerFour);
    });
  });

document
  .querySelectorAll("#five-one, #five-two, #five-three, #five-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerFive = el.getAttribute("data-answer");
      localStorage.setItem("answerFive", answerFive);
    });
  });

document
  .querySelectorAll("#six-one, #six-two, #six-three, #six-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerSix = el.getAttribute("data-answer");
      localStorage.setItem("answerSix", answerSix);
    });
  });

document
  .querySelectorAll("#seven-one, #seven-two, #seven-three, #seven-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerSeven = el.getAttribute("data-answer");
      localStorage.setItem("answerSeven", answerSeven);
    });
  });

document
  .querySelectorAll("#eight-one, #eight-two, #eight-three, #eight-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerEight = el.getAttribute("data-answer");
      localStorage.setItem("answerEight", answerEight);
    });
  });

document
  .querySelectorAll("#nine-one, #nine-two, #nine-three, #nine-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerNine = el.getAttribute("data-answer");
      localStorage.setItem("answerNine", answerNine);
    });
  });

document
  .querySelectorAll("#ten-one, #ten-two, #ten-three, #ten-four")
  .forEach(function (el) {
    el.addEventListener("click", function () {
      let answerTen = el.getAttribute("data-answer");
      let answerEleven = el.getAttribute("data-answer");
      localStorage.setItem("answerTen", answerTen);
      localStorage.setItem("answerEleven", answerEleven);
    });
  });

document.querySelectorAll(".quiz-a").forEach(function (quizA) {
  quizA.addEventListener("click", function () {
    quizA.classList.add("selected");
    quizA.parentNode
      .querySelectorAll(".quiz-a")
      .forEach(function (siblingQuizA) {
        if (siblingQuizA !== quizA) {
          siblingQuizA.classList.remove("selected");
        }
      });
  });
});

document.querySelector(".check-answer").addEventListener("click", function () {
  let answers = [
    Number(localStorage.getItem("answerOne")),
    Number(localStorage.getItem("answerTwo")),
    Number(localStorage.getItem("answerThree")),
    Number(localStorage.getItem("answerFour")),
    Number(localStorage.getItem("answerFive")),
    Number(localStorage.getItem("answerSix")),
    Number(localStorage.getItem("answerSeven")),
    Number(localStorage.getItem("answerEight")),
    Number(localStorage.getItem("answerNine")),
    Number(localStorage.getItem("answerTen")),
    Number(localStorage.getItem("answerEleven")),
  ];

  function mostFrequent(arr) {
    var counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    var maxKey = 1;

    for (var i = 0; i < arr.length; i++) {
      var key = arr[i];
      if (key >= 1 && key <= 4) {
        counts[key]++;
        if (counts[key] > counts[maxKey]) {
          maxKey = key;
        }
      }
    }
    return maxKey;
  }

  var mostFrequentNumber = mostFrequent(answers);

  var copy;
  switch (mostFrequentNumber) {
    case 1:
      copy = "Hedonists";
      document.querySelector(".answer-value").textContent = copy;
      document.querySelector(".answer-logo").classList.add("hedo");
      document
        .querySelector(".answer-logo")
        .classList.remove("techno", "nomads", "barba");
      break;
    case 2:
      copy = "Barbarians";
      document.querySelector(".answer-value").textContent = copy;
      document.querySelector(".answer-logo").classList.add("barba");
      document
        .querySelector(".answer-logo")
        .classList.remove("techno", "nomads", "hedo");
      break;
    case 3:
      copy = "Nomads";
      document.querySelector(".answer-value").textContent = copy;
      document.querySelector(".answer-logo").classList.add("nomads");
      document
        .querySelector(".answer-logo")
        .classList.remove("techno", "barba", "hedo");
      break;
    case 4:
      copy = "Technognostics";
      document.querySelector(".answer-value").textContent = copy;
      document.querySelector(".answer-logo").classList.add("techno");
      document
        .querySelector(".answer-logo")
        .classList.remove("nomads", "barba", "hedo");
      break;
    default:
      copy = "Average is out of range.";
  }
});

var Webflow = Webflow || [];
Webflow.push(function () {
  var l = document.querySelector("#quiz-slider .w-slider-arrow-left");
  var r = document.querySelector("#quiz-slider .quiz-right-arrow");

  document
    .querySelector("#quiz-slider")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("back-button")) {
        l.dispatchEvent(new Event("tap"));
      } else if (e.target.classList.contains("quiz-a")) {
        r.dispatchEvent(new Event("tap"));
      }
    });
});
