"use strict";
window.onload = function () {

let slider = new Slider({
    images: '.slide-wrap',
    btnPrev: document.querySelector('.prev-btn'),
    btnNext: document.querySelector('.next-btn'),
    autoplay: false
});

};

function Slider(obj) {
    let that = this;

    addCloneSlides();

    this.images = document.querySelectorAll(obj.images);
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.autoplay = obj.autoplay;

    let i = 1;
    let flag = true;


    // add clone slides

    function addCloneSlides() {
        let imgs = document.querySelectorAll(obj.images);
        let slidesList = imgs[0].parentNode;
        let firstImgSrc = imgs[0].querySelector('img').getAttribute('src');
        let lastImgSrc = imgs[imgs.length - 1].querySelector('img').getAttribute('src');

        let rowFirst;
        let resultHTMLFirst = '<div class="slide-wrap" data-clone="clone">\
                                <img src=$imgSrc alt="#">\
                          </div>';

        rowFirst = resultHTMLFirst
            .replace("$imgSrc", firstImgSrc);
        slidesList.innerHTML += rowFirst;


        let rowSecond;
        let resultHTMLSecond = '<div class="slide-wrap" data-clone="clone">\
                                <img src=$imgSrc alt="#">\
                          </div>';
        rowSecond = resultHTMLSecond
            .replace("$imgSrc", lastImgSrc);
        slidesList.innerHTML = rowSecond + slidesList.innerHTML;
    }

    let widthScreen = this.images[i].offsetWidth;
    let container = document.querySelector('.slides-list');
    container.style.transform = `translateX(${-i * widthScreen}px)`;

    if (this.autoplay) {
        if (flag) {
            setInterval(function () {
                moveRight()
            }, 3000);
        }
    }

    this.btnPrev.addEventListener('click', function () {
        if (flag) {
            moveLeft();
        }
    });

    this.btnNext.addEventListener('click', function () {
        if (flag) {
            moveRight();
        }
    });

    function moveLeft() {
        that.images[i].classList.remove('active-slide');
        i--;

        if (i < 0) {
            i = that.images.length - 1;
        }

        let nextPosX = -(i) * widthScreen;
        let prevPosX = -(i + 1) * widthScreen;
        let getAtr = that.images[i].getAttribute('data-clone');
        let tempPos = nextPosX - 3;

        flag = false;

        if (getAtr === 'clone') {
            setInterval(function () {
                if (prevPosX <= nextPosX) {
                    prevPosX += 15;
                    container.style.transform = `translateX(${prevPosX}px)`;
                    if (prevPosX <= tempPos) {
                        flag = true;
                    }
                }
            }, 0);
            i = that.images.length - 2;
            that.images[i].classList.add('active-slide');
            container.style.transform = `translateX(${-i * widthScreen}px)`;
        } else {
            setInterval(function () {
                if (prevPosX <= nextPosX) {
                    prevPosX += 15;
                    container.style.transform = `translateX(${prevPosX}px)`;
                    if (prevPosX <= tempPos) {
                        flag = true;
                    }
                }
            }, 0);

            that.images[i].classList.add('active-slide');
        }
    }

    function moveRight() {
        that.images[i].classList.remove('active-slide');
        i++;

        if (i >= that.images.length) {
            i = 0;
        }

        let prevPosX = -(i - 1) * widthScreen;
        let nextPosX = -i * widthScreen;
        let getAtr = that.images[i].getAttribute('data-clone');
        let tempPos = prevPosX - widthScreen - 2;

        flag = false;

        if (getAtr === 'clone') {
            setInterval(function () {
                if (prevPosX > nextPosX) {
                    prevPosX -= 15;
                    container.style.transform = `translateX(${prevPosX}px)`;
                    if (prevPosX >= tempPos) {
                        flag = true;
                    }
                }
            }, 0);
            i = 1;
            that.images[i].classList.add('active-slide');
            container.style.transform = `translateX(${-(i - 1) * widthScreen}px)`;
        } else {
            setInterval(function () {
                if (prevPosX > nextPosX) {
                    prevPosX -= 15;
                    container.style.transform = `translateX(${prevPosX}px)`;
                    if (prevPosX >= tempPos) {
                        flag = true;
                    }
                }
            }, 0);
            that.images[i].classList.add('active-slide');
        }
    }

    // Drag

    let sliderWrap = document.querySelector('.slider-wrap');

    sliderWrap.addEventListener('mousedown', (e) => {
        let start = e.pageX;
        let end;

        sliderWrap.onmousemove = function (e) {
            end = e.pageX;
        };

        document.onmouseup = function () {
            if (start > end) {
                if (flag) {
                    moveRight();
                }
            }
            if (start < end) {
                if (flag) {
                    moveLeft();
                }
            }
            sliderWrap.onmousemove = null;
            document.onmouseup = null;
        };
    });

    sliderWrap.ondragstart = function () {
        return false;
    };
}