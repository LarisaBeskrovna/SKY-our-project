// let faqTitle = document.querySelectorAll(".faq-title-list");

// faqTitle.forEach((elem) => {
//     elem.addEventListener("click", function () {
//         let faqText = document.querySelectorAll(".faq-text-list");
//         /*прогоняем через цикл и удаляем класс active*/
//         faqText.forEach((elem)=>{
//             elem.classList.remove("active");
//             elem.classList.remove("active");
//         })

//         let parentElem = this.parentNode;

//         let contentBlock = parentElem.querySelector(".faq-text-list");
//         let titleBlock = parentElem.querySelector(".faq-title-list");


//         if(contentBlock.classList.contains("active")&& titleBlock.classList.contains("active")) {
//             contentBlock.classList.remove("active");
//             titleBlock.classList.remove("active");
//         }
//         else {
//             contentBlock.classList.add("active");
//             titleBlock.classList.add("active");
//         }
//     })
// })


// $(".faq-title-list").on("click", function () {
//     $(".faq-text-list.active").removeClass("active");
//     $(".faq-title-list.active").removClass("active");

//     let thisContentBlock = $(this).parent().find(".faq-text-list");
//     let thisTitleBlock = $(this).parent().find(".faq-title-list");

//     if (thisContentBlock.hasClass("active") && thisTitleBlock.hasClass("active")) {
//         thisTitleBlock.removeClass("active");
//         thisContentBlock.removeClass("active");
//     }
//     else {
//         thisContentBlock.addClass("active");
//         thisTitleBlock.addClass("active");
//     }
// });

