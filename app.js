const questionWrapper = document.querySelectorAll(".question-wrapper")
const paragraph = document.querySelectorAll(".par");
const answear = document.querySelectorAll(".answear");

for(let i = 0; i < questionWrapper.length; i++) {
    questionWrapper[i].addEventListener('click', () => {
        answear.forEach(ans => {
            if(ans != answear[i]) {
                ans.classList.remove("active");
            }
        })
        answear[i].classList.toggle("active");
        paragraph.forEach(par => {
            if(par != paragraph[i]) {
                par.classList.remove("parActive");
            }
        })
        paragraph[i].classList.toggle("parActive");
    })
}
