function loadHeader(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './src/html-templates/header-footer/header.html', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var header = document.querySelector('.header');
            if (header) {
                header.innerHTML = xhr.responseText;

                // Execute the callback after the navbar is loaded
                if (typeof callback === 'function') {
                    callback();
                }
            } else {
                console.error('Header element not found');
            }
        } else {
            console.error('Network response was not ok');
        }
    };

    xhr.onerror = function() {
        console.error('Error loading the header');
    };

    xhr.send();
}

// so prof ///////////////

/*

let header = document.querySelector(".header");

header.innerHTML = `

    <nav class="navbar">
        <!-- navbar 0   -->
        <div class="nav0-wrapper">
            <div class="navbar0">
                <div class="nav0-open-cl">
                    <div class="links-nav0">
                        <a href="#" class="btn btn-link btn-link-blue">За нас</a>
                        <a href="#" class="btn btn-link btn-link-blue">Тела</a>
                        <a href="#" class="btn btn-link btn-link-blue">Партнери</a>
                        <a href="#" class="btn btn-link btn-link-blue">Регулатива на МАСИТ</a>
                        <a href="#" class="btn btn-link btn-link-blue">Контакт</a>
                    </div>
                </div>
            </div>
        </div>


        <!-- navbar 1  -->
        <div class="navbar1 padding-lr">
            <a href="index.html">
                <!-- logo  -->
                <div class="logo-nav">
                    <img src="./src/img/logo/logo.png" alt="">
                </div>
            </a>
            <!-- links  -->
            <div class="links-nav">
                <a href="#" class="btn btn-link btn-link-blue">Услуга за ЗИС</a>
                <a href="#" class="btn btn-link btn-link-blue">Членки на МАСИТ</a>
                <a href="#" class="btn btn-link btn-link-blue">Стани член</a>

                <!-- promena na jazik  -->
                <a href="#" class="jazik">
                    <div class="jazik-selected"></div>
                    <span class="span-mk">МК</span><span class="span-en hover-color">EN</span>
                </a>
            </div>
        </div>


        <!-- navbar 2  -->
        <div class="navbar2">
            <div class="padding-lr-nav"></div>
            <!-- za nas link  -->
            <div class="za-nas">
                <div>
                    <a href="javascript:void(0);" class="btn btn-link btn-link-blue">За нас
                        <?xml version="1.0" encoding="UTF-8"?>
                        <svg id="triagolnik-ico" class="btn-ico btn-ico-s" xmlns="http://www.w3.org/2000/svg"
                            version="1.1" viewBox="0 0 147.1 73.5">
                            <defs>
                                <style>
                                    .st1 {
                                        stroke-width: 1px;
                                    }
                                </style>
                            </defs>
                            <polygon class="st1" points="147.1 0 0 0 73.5 73.5 147.1 0" />
                        </svg>
                    </a>
                </div>
            </div>
            <!-- maska  -->
            <div class="nav-mask">
                <div class="maska-levo"></div>
                <div class="mask-middle"></div>
                <div class="maska-desno"></div>
            </div>
            <!-- publikacii  -->
            <div class="publikacii">
                <div>
                    <a href="#" class="btn btn-link btn-link-blue">Проекти</a>
                    <a href="#" class="btn btn-link btn-link-blue">Новости</a>
                    <a href="#" class="btn btn-link btn-link-blue">Публикации</a>
                </div>
            </div>
            <div class="padding-lr-nav"></div>
        </div>
    </nav>
`;

*/









