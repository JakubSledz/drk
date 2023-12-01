//v9

$(document).ready(function () {
  //TECHNO NAV
  $("#techno_description").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.techno_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#techno_introduction").removeClass("btn_active");
    $("#techno_activities").removeClass("btn_active");
    $("#techno_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#techno_introduction").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.techno_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    $("#techno_description").removeClass("btn_active");
    $("#techno_activities").removeClass("btn_active");
    $("#techno_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#techno_activities").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.techno_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#techno_description").removeClass("btn_active");
    $("#techno_introduction").removeClass("btn_active");
    $("#techno_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#techno_story").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.techno_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#techno_description").removeClass("btn_active");
    $("#techno_introduction").removeClass("btn_active");
    $("#techno_activities").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });

  //HEDO NAV
  $("#hedo_description").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.hedo_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#hedo_introduction").removeClass("btn_active");
    $("#hedo_act").removeClass("btn_active");
    $("#hedo_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#hedo_introduction").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.hedo_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    $("#hedo_description").removeClass("btn_active");
    $("#hedo_act").removeClass("btn_active");
    $("#hedo_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#hedo_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.hedo_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#hedo_description").removeClass("btn_active");
    $("#hedo_introduction").removeClass("btn_active");
    $("#hedo_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#hedo_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.hedo_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#hedo_description").removeClass("btn_active");
    $("#hedo_introduction").removeClass("btn_active");
    $("#hedo_act").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });

  //BARB NAV
  $("#barb_description").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.barb_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#barb_introduction").removeClass("btn_active");
    $("#barb_act").removeClass("btn_active");
    $("#barb_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#barb_introduction").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.barb_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    $("#barb_description").removeClass("btn_active");
    $("#barb_act").removeClass("btn_active");
    $("#barb_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#barb_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.barb_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#barb_description").removeClass("btn_active");
    $("#barb_introduction").removeClass("btn_active");
    $("#barb_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#barb_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.barb_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#barb_description").removeClass("btn_active");
    $("#barb_introduction").removeClass("btn_active");
    $("#barb_act").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });

  //NOMADS NAV
  $("#nomads_description").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.nomads_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#nomads_introduction").removeClass("btn_active");
    $("#nomads_act").removeClass("btn_active");
    $("#nomads_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#nomads_introduction").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.nomads_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    $("#nomads_description").removeClass("btn_active");
    $("#nomads_act").removeClass("btn_active");
    $("#nomads_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#nomads_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.nomads_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#nomads_description").removeClass("btn_active");
    $("#nomads_introduction").removeClass("btn_active");
    $("#nomads_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#nomads_act").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.nomads_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("#nomads_description").removeClass("btn_active");
    $("#nomads_introduction").removeClass("btn_active");
    $("#nomads_act").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $(this).addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });

  // FACTIONS NAV
  /*$("#1, #2, #3, #4").on("click", function () {
    $('.w-slide [aria-hidden="true"]').each(function () {
      $(this).css("height", "0px");
    });
  });*/

  $("#1").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.factions_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("div.techno_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#techno_introduction").removeClass("btn_active");
    $("#techno_activities").removeClass("btn_active");
    $("#techno_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $("#techno_description").addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
  });
  $("#2").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(2)").trigger("tap");
    $("div.hedo_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#hedo_introduction").removeClass("btn_active");
    $("#hedo_act").removeClass("btn_active");
    $("#hedo_story").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $("#hedo_description").addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
    //$('.w-slider-nav:nth-child(2)').trigger('tap');
  });
  $("#3").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(3)").trigger("tap");
    $("div.barb_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#barb_introduction").removeClass("btn_active");
    $("#barb_act").removeClass("btn_active");
    $("#barb_story").removeClass("btn_active");
    // This line removes the class 'btn_active' from the element that currently has it
    $("#barb_description").addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
    //$('.w-slider-nav:nth-child(2)').trigger('tap');
  });
  $("#4").click(function (e) {
    e.preventDefault();
    $("div.factions_slider_nav.w-slider-nav div:nth-child(4)").trigger("tap");
    $("div.nomads_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
    $("#nomads_introduction").removeClass("btn_active");
    $("#nomads_story").removeClass("btn_active");
    $("#nomads_act").removeClass("btn_active"); // This line removes the class 'btn_active' from the element that currently has it
    $("#nomads_description").addClass("btn_active"); // This line adds the class 'btn_active' to the clicked element
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
  /*
  $("#ten-one, #ten-two, #ten-three, #ten-four").click(function (e) {
    e.preventDefault();
    //$('.w-slider-nav:nth-child(1)').trigger('tap');
    $("div.surv_slider_nav.w-slider-nav div:nth-child(11)").trigger("tap");
  });*/
  $("#reset_quiz").click(function (e) {
    e.preventDefault();
    // Remove the "selected" class from all elements with class "quiz-a"
    $(".quiz-a").removeClass("selected");
    // Reset the slider to the first slide
    $("div.surv_slider_nav.w-slider-nav div:nth-child(1)").trigger("tap");
  });
});

$(document).ready(function () {
  $("#1")
    .find(".tabline, .tab_shape")
    .removeClass("techno")
    .addClass("tab_active");
  // your other code
});

$(".tab_menu")
  .find(".tab")
  .on("click", function () {
    var $this = $(this);

    // remove 'tab_active' from all tablines and tab_shapes and add respective classes
    $("#1")
      .find(".tabline, .tab_shape")
      .removeClass("tab_active")
      .addClass("techno");
    $("#2")
      .find(".tabline, .tab_shape")
      .removeClass("tab_active")
      .addClass("hedonists");
    $("#3")
      .find(".tabline, .tab_shape")
      .removeClass("tab_active")
      .addClass("barbarians");
    $("#4")
      .find(".tabline, .tab_shape")
      .removeClass("tab_active")
      .addClass("nomads");

    // now for clicked tab, add 'tab_active' and remove its respective class
    if ($this.attr("id") === "1") {
      $this
        .find(".tabline, .tab_shape")
        .addClass("tab_active")
        .removeClass("techno");
    } else if ($this.attr("id") === "2") {
      $this
        .find(".tabline, .tab_shape")
        .addClass("tab_active")
        .removeClass("hedonists");
    } else if ($this.attr("id") === "3") {
      $this
        .find(".tabline, .tab_shape")
        .addClass("tab_active")
        .removeClass("barbarians");
    } else if ($this.attr("id") === "4") {
      $this
        .find(".tabline, .tab_shape")
        .addClass("tab_active")
        .removeClass("nomads");
    }
  });

$(".tab_menu")
  .find(".tab")
  .on("mouseenter", function () {
    $(this).find(".tab_line").css("opacity", "0.5");
  })
  .on("mouseleave", function () {
    $(this).find(".tab_line").css("opacity", "1");
  });
/*
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
*/
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
/*
$("#ten-one, #ten-two, #ten-three, #ten-four").each(function () {
  $(this).on("click", function () {
    let answerTen = $(this).attr("data-answer");
    let answerEleven = $(this).attr("data-answer");
    localStorage.setItem("answerTen", answerTen);
  });
});/*

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

$(".check-answer").on("click", function (e) {
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
  // let answerTen = Number(localStorage.getItem("answerTen"));
  //let answerEleven = Number(localStorage.getItem("answerEleven"));

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
    //answerTen,
    //answerEleven,
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
      copy = "Hedonist";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("hedo");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("barba");
      break;
    case 2:
      copy = "Barbarian";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("barba");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("hedo");

      break;
    case 3:
      copy = "Nomad";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("nomads");
      $(".answer-logo").removeClass("techno");
      $(".answer-logo").removeClass("barba");
      $(".answer-logo").removeClass("hedo");

      break;
    case 4:
      copy = "Technognostic";
      $(".answer-value").text(copy);
      $(".answer-logo").addClass("techno");
      $(".answer-logo").removeClass("nomads");
      $(".answer-logo").removeClass("barba");
      $(".answer-logo").removeClass("hedo");

      break;
    default:
      copy = "Average is out of range.";
  }
  e.preventDefault();
  //$('.w-slider-nav:nth-child(1)').trigger('tap');
  $("div.surv_slider_nav.w-slider-nav div:nth-child(11)").trigger("tap");

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

/*
  if(slideNumber = 2) {
         		$("#2")
     				 .find(".tabline, .tab_shape")
      				.addClass("tab_active")
      				.removeClass("hedo");
             $("#1")
      				.find(".tabline, .tab_shape")
     				  .removeClass("tab_active")
     					.addClass("techno");
    				$("#3")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("barbarians");
    				$("#4")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("nomads");
         };
         if(slideNumber = 4) {
         		$("#4")
     				 .find(".tabline, .tab_shape")
      				.addClass("tab_active")
      				.removeClass("nomads");
             $("#1")
      				.find(".tabline, .tab_shape")
     				  .removeClass("tab_active")
     					.addClass("techno");
    				$("#3")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("barbarians");
    				$("#2")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("hedo");
         };
          if(slideNumber = 1) {
         		$("#1")
     				 .find(".tabline, .tab_shape")
      				.addClass("tab_active")
      				.removeClass("techno");
             $("#4")
      				.find(".tabline, .tab_shape")
     				  .removeClass("tab_active")
     					.addClass("nomads");
    				$("#3")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("barbarians");
    				$("#2")
      				.find(".tabline, .tab_shape")
      				.removeClass("tab_active")
      				.addClass("hedo");
         };
         
*/
