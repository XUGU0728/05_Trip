//메인페이지 
        let title = document.querySelector(".title")
        setTimeout(() => {
            title.classList.add("on")
        }, 500)

//PART2 - 스크롤이벤트
    let targets = document.querySelectorAll(".part2Box01 div img")
    targets.forEach((img) => img.classList.add("fade-in"))

    targets.forEach((img, index) => {
        if (index < 3) {
        setTimeout(() => {
            img.classList.add("show")
        }, index * 600)
        }
    })

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY
        let windowHeight = window.innerHeight

        targets.forEach((img, index) => {
        if (index >= 3) {
            let elTop = img.offsetTop
            if (scrollY + windowHeight * 0.8 > elTop) {
            img.classList.add("show")
            }
        }
        })
    })

//PART3 - 롤링이벤트용 클론
    let rollLeft = document.querySelector(".rollLeft")
    let rollRight = document.querySelector(".rollRight")

    rollLeft.innerHTML += rollLeft.innerHTML
    rollRight.innerHTML += rollRight.innerHTML