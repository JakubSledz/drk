$(document).ready(function () {
  // FACTIONS NAV
  $("#1").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.factions_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
  });
  $("#2").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    //$('.w-slider-nav:nth-child(2)').trigger('tap');
  });
  $("#3").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    //$('.w-slider-nav:nth-child(2)').trigger('tap');
  });
  $("#4").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(4)").trigger("tap");
    //$('.w-slider-nav:nth-child(2)').trigger('tap');
  });
  //QUIZ NAV
  $("#one-one, #one-two, #one-three, #one-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    console.log("dziala");
    $("div.surv_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
  });
  $("#two-one, #two-two, #two-three, #two-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
  });
  $("#three-one, #three-two, #three-three, #three-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(4)").trigger("tap");
  });
  $("#four-one, #four-two, #four-three, #four-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(5)").trigger("tap");
  });
  $("#five-one, #five-two, #five-three, #five-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(6)").trigger("tap");
  });
  $("#six-one, #six-two, #six-three, #six-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(7)").trigger("tap");
  });
  $("#seven-one, #seven-two, #seven-three, #seven-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(8)").trigger("tap");
  });
  $("#eight-one, #eight-two, #eight-three, #eight-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(9)").trigger("tap");
  });
  $("#nine-one, #nine-two, #nine-three, #nine-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(10)").trigger("tap");
  });
  $("#ten-one, #ten-two, #ten-three, #ten-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(11)").trigger("tap");
  });
});

//QUIZ RESET
$(".reset-quiz").on("click", function (e) {
  e.preventDefault();
  $(".quiz-wrapper").find(".quiz-a").removeClass("selected");
  localStorage.clear();

  $("div.surv_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
  console.log("dziala");
});

$("#1").find(".tab_line").find(".tabline").addClass("tab_active");

$("#1").find(".tab_line").find(".tab_shape").addClass("tab_active");

$(".tab_menu")
  .find(".tab")
  .on("click", function () {
    $(".tab_menu")
      .find(".tab_line")
      .find(".tab_shape")
      .removeClass("tab_active");
    $(".tab_menu").find(".tab_line").find(".tabline").removeClass("tab_active");
    $(this).find(".tab_line").find(".tabline").addClass("tab_active");
    $(this).find(".tab_line").find(".tab_shape").addClass("tab_active");
  });

$(".tab_menu")
  .find(".tab")
  .on("mouseout", function () {
    $(this).find(".tab_line").delay(0).animate(
      {
        opacity: "50",
      },
      { duration: 500, queue: true },
      "linear"
    );
  });

$(".tab_menu")
  .find(".tab")
  .on("mouseover", function () {
    $(this).find(".tab_line").delay(0).animate(
      {
        opacity: "100",
      },
      { duration: 500, queue: true },
      "linear"
    );
  });

$("#one-one, #one-two, #one-three, #one-four").each(function () {
  $(this).on("click", function () {
    let answerOne = $(this).attr("data-answer");
    localStorage.setItem("answerOne", answerOne);
  });
});
$("#two-one, #two-two, #two-three, #two-four").each(function () {
  $(this).on("click", function () {
    let answerTwo = $(this).attr("data-answer");
    localStorage.setItem("answerTwo", answerTwo);
  });
});
$("#three-one, #three-two, #three-three, #three-four").each(function () {
  $(this).on("click", function () {
    let answerThree = $(this).attr("data-answer");
    localStorage.setItem("answerThree", answerThree);
  });
});
$("#four-one, #four-two, #four-three, #four-four").each(function () {
  $(this).on("click", function () {
    let answerFour = $(this).attr("data-answer");
    localStorage.setItem("answerFour", answerFour);
  });
});

$("#five-one, #five-two, #five-three, #five-four").each(function () {
  $(this).on("click", function () {
    let answerFive = $(this).attr("data-answer");
    localStorage.setItem("answerFive", answerFive);
  });
});

$("#six-one, #six-two, #six-three, #six-four").each(function () {
  $(this).on("click", function () {
    let answerSix = $(this).attr("data-answer");
    localStorage.setItem("answerSix", answerSix);
  });
});

$("#seven-one, #seven-two, #seven-three, #seven-four").each(function () {
  $(this).on("click", function () {
    let answerSeven = $(this).attr("data-answer");
    localStorage.setItem("answerSeven", answerSeven);
  });
});

$("#eight-one, #eight-two, #eight-three, #eight-four").each(function () {
  $(this).on("click", function () {
    let answerEight = $(this).attr("data-answer");
    localStorage.setItem("answerEight", answerEight);
  });
});

$("#nine-one, #nine-two, #nine-three, #nine-four").each(function () {
  $(this).on("click", function () {
    let answerNine = $(this).attr("data-answer");
    localStorage.setItem("answerNine", answerNine);
  });
});

$("#ten-one, #ten-two, #ten-three, #ten-four").each(function () {
  $(this).on("click", function () {
    let answerTen = $(this).attr("data-answer");
    let answerEleven = $(this).attr("data-answer");
    localStorage.setItem("answerTen", answerTen);
    localStorage.setItem("answerEleven", answerEleven);
  });
});

$(".quiz-a").on("click", function () {
  $(this).addClass("selected");
  $(this).siblings(".quiz-a").removeClass("selected");
});
/*
$(".close-quiz").on("click", function () {
  $(".quiz-wrapper").addClass("hidden");
  $(".quiz-wrapper").removeClass("show");
  $(".quiz-wrapper").find(".quiz-a").removeClass("selected");
  localStorage.clear();
});
*/
$(".btn-quiz-open.nomargin").on("click", function () {
  $(".quiz-wrapper").removeClass("hidden");
  $(".quiz-wrapper").addClass("show");
  $(".answer-value").addClass("hidden");
  $(".answer-value").removeClass("show");
});

$(".check-answer").on("click", function () {
  //Array of numbers
  let answerOne = Number(localStorage.getItem("answerOne"));
  let answerTwo = Number(localStorage.getItem("answerTwo"));
  let answerThree = Number(localStorage.getItem("answerThree"));
  let answerFour = Number(localStorage.getItem("answerFour"));

  let answerFive = Number(localStorage.getItem("answerFive"));
  let answerSix = Number(localStorage.getItem("answerSix"));
  let answerSeven = Number(localStorage.getItem("answerSeven"));
  let answerEight = Number(localStorage.getItem("answerEight"));
  let answerNine = Number(localStorage.getItem("answerNine"));
  let answerTen = Number(localStorage.getItem("answerTen"));
  let answerEleven = Number(localStorage.getItem("answerEleven"));

  var numbers = [
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    answerSix,
    answerSeven,
    answerEight,
    answerNine,
    answerTen,
    answerEleven,
  ];

  //Function to calculate the average
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

  //Get the average of the numbers array
  var mostFrequentNumber = mostFrequent(numbers);

  //Round the average to the nearest whole number

  //Create a copy based on the rounded average value
  var copy;
  switch (mostFrequentNumber) {
    case 1:
      copy = "Hedonists";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("hedo");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("barba");
      break;
    case 2:
      copy = "Barbarians";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("barba");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("hedo");

      break;
    case 3:
      copy = "Nomads";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("nomads");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("barba");
      $(".answer-logo").removeClass("hedo");

      break;
    case 4:
      copy = "Technognostics";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("barba");
      $(".answer-logo").removeClass("hedo");

      break;
    default:
      copy = "Average is out of range.";
  }

  //Use jQuery to display the copy in an element with the id "result"
});
/*
$(".reset-quiz").on("click", function () {
  $(".quiz-wrapper").find(".quiz-a").removeClass("selected");
  $("div.surv_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
  localStorage.clear();
});
*/

var Webflow = Webflow || [];
Webflow.push(function () {
  var l = $("#quiz-slider .w-slider-arrow-left");
  var r = $("#quiz-slider .quiz-right-arrow");
  $("#quiz-slider")
    .on("click", ".back-button", function () {
      l.trigger("tap");
    })
    .on("click", ".quiz-a", function () {
      r.trigger("tap");
    });
});
