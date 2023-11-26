
function MakeCarousel(location) {
    let img1 = document.createElement("img");
    img1.src = "./assets/dragon-ball-with-4-stars-logo-F11C43957B-seeklogo.com.png";
    img1.className = "d-block w-100";
    img1.alt = "...";

    let img = document.createElement("img");
    img.src = "./assets/dragon-ball-with-4-stars-logo-F11C43957B-seeklogo.com.png";
    img.className = "d-block w-100";
    img.alt = "...";

    let imgDiv = document.createElement("div");
    imgDiv.className = "carousel-item";

    imgDiv.appendChild(img1);

    let imgActiveDiv = document.createElement("div");
    imgActiveDiv.className = "carousel-item active";

    imgActiveDiv.appendChild(img);

    let innerDiv = document.createElement("div");
    innerDiv.className = "carousel-inner";

    innerDiv.appendChild(imgActiveDiv);
    innerDiv.appendChild(imgDiv);

    let prevIcon = document.createElement("span");
    prevIcon.className = "carousel-control-prev-icon";
    prevIcon.ariaHidden = "true";

    let prev = document.createElement("span");
    prev.className = "visually-hidden";
    prev.textContent = "Previous";

    let prevBtn = document.createElement("button");
    prevBtn.className = "carousel-control-prev";
    prevBtn.type = "button";
    prevBtn.dataset.bsTarget = "#carouselExample";
    prevBtn.dataset.bsSlide = "prev";

    prevBtn.appendChild(prevIcon);
    prevBtn.appendChild(prev);

    let nextIcon = document.createElement("span");
    nextIcon.className = "carousel-control-next-icon";
    nextIcon.ariaHidden = "true";

    let next = document.createElement("span");
    next.className = "visually-hidden";
    next.textContent = "Next";

    let nextBtn = document.createElement("button");
    nextBtn.className = "carousel-control-next";
    nextBtn.type = "button";
    nextBtn.dataset.bsTarget = "#carouselExample";
    nextBtn.dataset.bsSlide = "next";

    nextBtn.appendChild(nextIcon);
    nextBtn.appendChild(next);

    let outerDiv = document.createElement("div");
    outerDiv.id = "carouselExample";
    outerDiv.className = "carousel slide";

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(prevBtn);
    outerDiv.appendChild(nextBtn);
    location.appendChild(outerDiv);

}

export { MakeCarousel}

