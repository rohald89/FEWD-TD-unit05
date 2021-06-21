//===========================
//======= JAVASCRIPT ========
//===========================

const images = document.querySelectorAll(".thumbnail");
const captions = document.querySelectorAll("[data-title]");
const input = document.querySelector("#search");

captions.forEach((caption, i) => {
  let title = caption.getAttribute("data-title").toLowerCase();
  input.addEventListener('keyup', () => {
    title.indexOf(input.value.toLowerCase()) < 0 ? 
    images[i].style.display = 'none' : 
    images[i].style.display = '';
  });
});

//===========================
//========= jQuery ==========
//===========================

// const $images = $(".thumbnail");
// const $captions = $("[data-title]");
// const $input = $("#search");

// $captions.each(function (i) {
//   let $caption = $(this).attr("data-title");
//   $input.on("keyup", () => {
//     if ($caption.indexOf($input.val().toLowerCase()) < 0) {
//       $images[i].style.display = "none";
//     } else {
//       $images[i].style.display = "";
//     }
//   });
// });
