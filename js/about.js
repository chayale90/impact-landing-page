function init() {
    declareEvents()
}


function declareEvents() {
    let my_btn = document.querySelector("#my_btn");
    let p = document.createElement("p");
    // p.className = "lead";
    document.querySelector("#id_div").append(p);
    //    document.querySelector(".para").append(p);

    my_btn.addEventListener("click", function () {
        if (p.innerHTML.length < 1) {
            p.innerHTML = `  Magic Kass stands as a beacon of quality and beauty in the indoor gaming world, ranking
            among the top 9 complexes globally. It has become the heart of the area, drawing
            visitors from afar with its magnetic appeal.
            <br />
            Overseeing every detail, the Impact company meticulously planned and crafted the
            10,000 square meter space. Each element reflects a perfect fusion of expertise and care.
            <br />
            Join us in experiencing the allure of attractions that inspire wonder, innovation that
            captivates, and a legacy of excellence in indoor gaming and entertainment.
            <br />
            Welcome to the world of Dan Gigi - Where Imagination Meets Reality.
            `
            my_btn.innerHTML = `Read less`
            // my_btn.style.background = ""

        } else {
            p.innerHTML = "";
            my_btn.innerHTML = `Read more`

        }
    })
}



init();