//===========================
//========= jQuery ==========
//===========================

const $images = $(".thumbnail");
const $captions = $("[data-title]");
const $input = $("#search");

$captions.each(function (i) {
  let $caption = $(this).attr("data-title");
  $input.on("keyup", () => {
    if ($caption.indexOf($input.val().toLowerCase()) < 0) {
      $images[i].style.display = "none";
    } else {
      $images[i].style.display = "";
    }
  });
});

//===========================
//======= JAVASCRIPT ========
//===========================

// const images = document.getElementsByClassName("thumbnail");
// const captions = document.querySelectorAll("[data-title]");
// const input = document.getElementById("search");

// for (let i = 0; i < captions.length; i++) {
//   let caption = captions[i].getAttribute("data-title").toLowerCase();
//   console.log(caption);
//   input.addEventListener("keyup", () => {
//     if (caption.indexOf(input.value.toLowerCase()) < 0) {
//       images[i].style.display = "none";
//     } else {
//       images[i].style.display = "";
//     }
//   });
// }
