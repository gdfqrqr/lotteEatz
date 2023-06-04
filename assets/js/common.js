$(function () {
    
    var swiper1 = new Swiper(".sc-visual.swiper", {
        navigation: {
            nextEl: ".sc-visual .btn-next",
            prevEl: ".sc-visual .btn-prev",
        },
        pagination: {
            el: ".pagination",
            type: "fraction",
        },
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   },
    });

    var swiper3 = new Swiper(".sc-cont .swiper", {
        navigation: {
            nextEl: ".sc-cont .btn-next",
            prevEl: ".sc-cont .btn-prev",
        },
        slidesPerView: 4.8,
        spaceBetween: 10,
        loop: true,
    });

    var swiper4 = new Swiper(".sc-benefit .swiper", {
        navigation: {
            nextEl: ".sc-benefit .btn-next",
            prevEl: ".sc-benefit .btn-prev",
        },
        slidesPerView: 2.5,
        spaceBetween: 20,
    });

    var swiper5 = new Swiper(".sc-quick .swiper", {
        navigation: {
            nextEl: ".sc-quick .btn-next",
            prevEl: ".sc-quick .btn-prev",
        },
        slidesPerView: 7,
        spaceBetween: 10,
    });

    var swiper6 = new Swiper(".sc-md .swiper", {
        navigation: {
            nextEl: ".sc-md .btn-next",
            prevEl: ".sc-md .btn-prev",
        },
        slidesPerView: 4.8,
        spaceBetween: 10,
    });

    var swiper7 = new Swiper(".sc-event .swiper", {
        navigation: {
            nextEl: ".sc-event .btn-next",
            prevEl: ".sc-event .btn-prev",
        },
        slidesPerView: 2.8,
        spaceBetween: 10,
    });

    var swiper8 = new Swiper(".sc-youtube .swiper", {
        navigation: {
            nextEl: ".sc-youtube .btn-next",
            prevEl: ".sc-youtube .btn-prev",
        },
        slidesPerView: 2.8,
        spaceBetween: 10,
    });

    $('.gnb-wrap').hover(function(){
        $(this).addClass('on');
    }, function(){
        $(this).removeClass('on');
    })

    // scrolltopbutton
    $('.btn-top').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 },600, 'easeInExpo');
	});

    $(window).scroll(function(){
        curr=$(this).scrollTop();
        sectionOffset = $('.section').offset().top;

        if (curr >= sectionOffset) {
            $('.floating-wrap .btn-top').addClass('on');
        } else {
            $('.floating-wrap .btn-top').removeClass('on');
        }
    })

    //데이터바인딩
    $('.sc-best .list-item').click(function(e){
        e.preventDefault();

        // on 효과
        $(this).addClass('on').siblings().removeClass('on');

        // 데이터 불러오기
        company = $(this).find('a').data('company'); // <a data-company="lotte">
        favList(company);
    })

    $('.sc-adress .tab-item').click(function(e){
        e.preventDefault();

        // on 효과
        $(this).addClass('on').siblings().removeClass('on');

        // 데이터 불러오기
        delivery = $(this).find('a').data('deli'); // <a data-company="lotte">
        deliList(delivery);
    })

    
    function favList(company) { // 1, 2, 3 -> [1, 2, 3]
        fetch(`./assets/data/${company}.json`)
        .then(res=>res.json())
        .then(json=>{
            allData = json.items;
            let html=``;
            let html2=``;
            allData.forEach(el => {

                isBest = (el.best)?`<span>BEST</span>`:'';
                isReorder = (el.reorder)?`<span class="reorder">재주문 1위</span>`:'';
                isPriceFormat = (el.price)? `<div class="prod-box price">${priceFormat(el.price)}원</div>`:'';
                html+=`<li class="menu-list">
                            <a href="" class="link-prod">
                                <div class="thumb-box">
                                    <div class="thumb-img">
                                        <img src="${el.thumb}" alt>
                                    </div>
                                    <div class="badge-wrap">
                                       ${isBest}
                                       ${isReorder}
                                    </div>
                                </div>
                                <div class="prod-info">
                                    <div class="prod-box">${el.title}</div>
                                    ${isPriceFormat}
                                </div>
                            </a>
                        </li>`;
                    });

            const colorObj = {
                'lotte': '#EF3D2E',
                'krispy': '#1CAC68',
                'plating': '#000',
                'angelinus': '#AA9481',
            }
            
            html2 += `<a href="" class="link-more"><span><em style="color: ${colorObj[company]}">${json.company}</em> &nbsp;메뉴 보러가기
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g transform="translate(-54 -4.001)"><rect width="10" height="10" transform="translate(54 4.001)" fill="#fff" opacity="0"/><path d="M10232.7-747.317l4,4-4,4" transform="translate(-10174.203 752.317)" fill="none" stroke="#000" stroke-width="1"/></g></svg></i></span></a>`;

            $('#favList').html(html);
            $('.more-wrap').html(html2);
        })
    }
    favList('lotte');


    var swiper2;

    function deliList(e) { // 1, 2, 3 -> [1, 2, 3]
        fetch(`./assets/data/${e}.json`)
        .then(res=>res.json())
        .then(json=>{
            allData = json.items;
            let html=``;
            allData.forEach(el => {
                isState = (el.state)?`<div class="badge-state">
                                                    <span>원활</span>
                                                </div>`:`<div class="badge-state grey">
                                                                    <span>불가</span>
                                                                </div>`;
                isState2 = (el.state)?`<i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45">
                                                    <g id="그룹_3737" data-name="그룹 3737" transform="translate(2.368 2.353)">
                                                    <path id="패스_15229" data-name="패스 15229" d="M3363.253,1906.279a3.628,3.628,0,0,1-2.537-1.025,3.58,3.58,0,0,1-.927-3.69l2.277-7.08a21.78,21.78,0,0,1,3.262-26.8,22.093,22.093,0,0,1,31.112,0,21.778,21.778,0,0,1,0,30.928,22.129,22.129,0,0,1-24.069,4.708l-7.917,2.756A3.657,3.657,0,0,1,3363.253,1906.279Z" transform="translate(-3361.252 -1863.632)" fill="#1cac68"/>
                                                    <path id="패스_15230" data-name="패스 15230" d="M3398.635,1873.232a19.717,19.717,0,0,0-27.765,0,19.433,19.433,0,0,0-2.34,24.8l-2.617,8.136a1.256,1.256,0,0,0,.324,1.289,1.276,1.276,0,0,0,1.3.287l8.806-3.065a19.541,19.541,0,0,0,22.287-31.442Zm-13.883,30.792a17,17,0,0,1-7.746-1.84,1.279,1.279,0,0,0-1-.067l-6.9,2.4,2.033-6.324a1.255,1.255,0,0,0-.185-1.13,16.792,16.792,0,0,1-3.3-10.034,17.095,17.095,0,1,1,17.094,16.992Z" transform="translate(-3365.12 -1867.516)" fill="#fff"/>
                                                    <g id="그룹_3736" data-name="그룹 3736" transform="translate(9.141 11.72)">
                                                        <path id="패스_15231" data-name="패스 15231" d="M3427.331,1903.827a2.624,2.624,0,1,0-2.64-2.625A2.633,2.633,0,0,0,3427.331,1903.827Z" transform="translate(-3411.221 -1898.578)" fill="#fff"/>
                                                        <path id="패스_15232" data-name="패스 15232" d="M3397.871,1903.827a2.624,2.624,0,1,0-2.64-2.625A2.633,2.633,0,0,0,3397.871,1903.827Z" transform="translate(-3392.943 -1898.578)" fill="#fff"/>
                                                        <path id="패스_15233" data-name="패스 15233" d="M3409.558,1928.679a1.564,1.564,0,0,0-.816-.195H3390.7a1.561,1.561,0,0,0-.845.211,1.391,1.391,0,0,0-.44,1.924,12.2,12.2,0,0,0,19.606,1.36,10.77,10.77,0,0,0,1.017-1.387A1.39,1.39,0,0,0,3409.558,1928.679Z" transform="translate(-3389.203 -1917.2)" fill="#fff"/>
                                                    </g>
                                                    </g>
                                                </svg>
                                            </i>`:`<i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45">
                                                <g id="ic_불가" transform="translate(-3960.118 -1861.279)">
                                                <path id="패스_15244" data-name="패스 15244" d="M3964.487,1906.279a3.629,3.629,0,0,1-2.537-1.025,3.58,3.58,0,0,1-.927-3.69l2.277-7.08a21.78,21.78,0,0,1,3.261-26.8,22.093,22.093,0,0,1,31.112,0,21.777,21.777,0,0,1,0,30.928,22.128,22.128,0,0,1-24.068,4.708l-7.917,2.755A3.653,3.653,0,0,1,3964.487,1906.279Z" fill="#444"/>
                                                <g id="그룹_3756" data-name="그룹 3756" transform="translate(3962.484 1863.646)">
                                                    <path id="패스_15256" data-name="패스 15256" d="M6096.362,490.434a19.725,19.725,0,0,0-27.765,0,19.41,19.41,0,0,0-2.341,24.778l-2.616,8.131a1.255,1.255,0,0,0,.323,1.288,1.275,1.275,0,0,0,1.3.286l8.807-3.062a19.752,19.752,0,0,0,22.287-3.84,19.412,19.412,0,0,0,0-27.581Zm-13.883,30.771a17,17,0,0,1-7.746-1.839,1.278,1.278,0,0,0-1-.067l-6.9,2.4,2.034-6.32a1.254,1.254,0,0,0-.186-1.129,16.774,16.774,0,0,1-3.3-10.027,17.094,17.094,0,1,1,17.094,16.981Z" transform="translate(-6062.847 -484.722)" fill="#fff"/>
                                                    <g id="그룹_4021" data-name="그룹 4021" transform="translate(11.314 12.633)">
                                                    <path id="패스_15243" data-name="패스 15243" d="M3816.687,1934.576h-9.051a1.413,1.413,0,1,0,0,2.825h9.051a1.413,1.413,0,1,0,0-2.825Z" transform="translate(-3803.842 -1921.947)" fill="#fff" fill-rule="evenodd"/>
                                                    <path id="합치기_181" data-name="합치기 181" d="M16995.248,12279.03l-1.119-1.158-1.139,1.137c-.371.371-1.121.227-1.672-.319s-.7-1.306-.324-1.677l1.172-1.172-1.15-1.191c-.367-.38-.209-1.131.35-1.668s1.318-.674,1.686-.294l1.115,1.154,1.133-1.133c.371-.372,1.127-.227,1.676.324s.7,1.3.32,1.672l-1.168,1.169,1.152,1.194c.361.375.2,1.126-.355,1.668a1.688,1.688,0,0,1-1.117.508A.753.753,0,0,1,16995.248,12279.03Z" transform="translate(-16991.773 -12272.824)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
                                                    <path id="합치기_180" data-name="합치기 180" d="M16995.3,12278.979l-1.154-1.154-1.154,1.154c-.371.371-1.121.226-1.672-.324s-.7-1.3-.324-1.673l1.154-1.153-1.154-1.154c-.371-.371-.225-1.126.32-1.676s1.3-.7,1.676-.32l1.154,1.154,1.154-1.154c.371-.375,1.127-.23,1.676.32s.7,1.3.32,1.676l-1.154,1.154,1.154,1.153c.371.372.227,1.127-.32,1.673a1.676,1.676,0,0,1-1.127.529A.756.756,0,0,1,16995.3,12278.979Z" transform="translate(-16979.773 -12272.793)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
                                                    </g>
                                                </g>
                                                </g>
                                            </svg>
                                            </i>`;
       
                html+=`<li class="swiper-slide">
                            <div class="thumb-box">
                               <img src="${el.thumb}" alt>
                                <div class="badge-wrap">
                                    ${isState2}
                                    <span>${el.state?`원활`:`불가`}</span>
                                </div>
                            </div>
                            <div class="info-wrap">
                                <div class="badge-box">
                                    <div class="badge-distance">${el.distance}</div>
                                  ${isState}
                                </div>
                                <div class="info-title"><span>${el.store}</span></div>
                            </div>
                        </li>`;     
                    });
                    
            $('#delivery').html(html);

            if (swiper2) {
                swiper2.destroy();
            }
 
            swiper2 = new Swiper(".tab-right.swiper", {
                navigation: {
                    nextEl: ".tab-right .btn-next",
                    prevEl: ".tab-right .btn-prev",
                },
                slidesPerView: 'auto',
                spaceBetween: 10
            });
        })
    }
    deliList("delivery");

    // 상품 원단위 쉼표넣기
    function priceFormat(price){
        return result = price.toLocaleString('ko-KR');
    }

    //패밀리 사이트 열고 닫기
    $('.btn-family').click(function(){
        $('.family-wrap').addClass('on')
        $('body').addClass('hidden')
    })

    $('.family-wrap .btn-close').click(function(e){
        e.preventDefault()
        $('.family-wrap').removeClass('on')
        $('body').removeClass('hidden')
    })

    $(document).click(function(e){
        if ($('.footer').has(e.target).length == 0){
            $('body').removeClass('hidden')
            $('.family-wrap').removeClass('on')
        }
    })

    // family site
    let arr = [
        { name: "롯데그룹" },
        { name: "롯데GRS" },
        { name: "L.POINT" },
        { name: "롯데채용센터" },
        { name: "롯데제과", sub: ["나뚜루", "파스퇴르몰", "파스퇴르아이"] },
        { name: "롯데칠성음료", sub: ["롯데칠성몰"] },
        { name: "롯데주류BG", sub: ["WINE"] },
        { name: "롯데아사히주류" },
        { name: "롯데백화점", sub: ["엘롯데", "영플라자", "프리미엄아울렛", "롯데아울렛", "상품본부"]  },
        { name: "에비뉴엘" },
        { name: "롯데마트", sub: ["롯데마트 홍보"] },
        { name: "롯데하이마트" },
        { name: "토이저러스" },
        { name: "롯데슈퍼" },
        { name: "롯데시네마" },
        { name: "롯데홈쇼핑" },
        { name: "코리아세븐" },
        { name: "유니클로" },
        { name: "무인양품" },
        { name: "롯데상사" },
        { name: "롯데닷컴" },
        { name: "롯데피플네트웍스" },
        { name: "샤롯데씨어터" },
        { name: "H&B(롭스)" },
        { name: "롯데호텔" },
        { name: "롯데면세점" },
        { name: "롯데인터넷면세점" },
        { name: "롯데월드", sub: ["워터파크", "아쿠아리움"]},
        { name: "롯데물산" },
        { name: "롯데월드타워&몰" },
        { name: "롯데몰 김포공항점" },
        { name: "롯데제이티비" },
        { name: "롯데손해보험", sub: ["롯데하우머치"]},
        { name: "롯데카드" },
        { name: "롯데캐피탈" },
        { name: "롯데건설", sub: ["롯데캐슬"] },
        { name: "한국후지필름", sub: ["후지필름쇼핑몰"] },
        { name: "롯데알미늄", sub: ["롯데이라이프"] },
        { name: "롯데케미칼" },
        { name: "롯데엠시시" },
        { name: "캐논코리아 주식회사" },
        { name: "롯데기공" },
        { name: "롯데인재개발원" },
        { name: "사이버 인재개발원" },
        { name: "롯데정보통신" },
        { name: "롯데자이언츠" },
        { name: "롯데스카이힐C.C" },
        { name: "롯데리조트" },
        { name: "대홍기획" },
        { name: "캐시비" },
        { name: "마이비" },
        { name: "롯데중앙연구소" },
        { name: "롯데글로벌로지스" },
        { name: "롯데재단" },
        { name: "롯데렌터카" },
        { name: "롯데콘서트홀" },
        { name: "롯데뮤지엄" },
    ]

    let familyHtml = ''

    arr.forEach(el => {
        let subListTemplate = ''

        // sub를 위해서 별도로 돌림
        if (el.sub) {
            subListTemplate += /* html */`<ul class="sub-site-list">`

            // li 만들기
            el.sub.forEach(item => {
                // console.log(item);
                let li = /* html */`<li class="sub-site-item">
                <a href="">
                    <span>${item}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="ic_arrow_H20" transform="translate(-335 -446)">
                    <rect id="사각형_5264" data-name="사각형 5264" width="20" height="20" transform="translate(335 446)" fill="none"/>
                    <path id="패스_14702" data-name="패스 14702" d="M979,4744l5-5,5,5" transform="translate(5086 -529) rotate(90)" fill="none" stroke="#707070" stroke-width="1"/>
                    </g>
                    </svg>
                </a>
            </li>`

                subListTemplate += li
            })

            subListTemplate +=  /* html */`</ul>`
        }

        const template = /* html */` <div class="group-box">
            <a href="" class="link-site">
            <span>${el.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="ic_arrow_H20" transform="translate(-335 -446)">
                    <rect id="사각형_5264" data-name="사각형 5264" width="20" height="20" transform="translate(335 446)" fill="none"/>
                    <path id="패스_14702" data-name="패스 14702" d="M979,4744l5-5,5,5" transform="translate(5086 -529) rotate(90)" fill="none" stroke="#707070" stroke-width="1"/>
                    </g>
                </svg>
            </a>
            ${subListTemplate}
        </div>`


        familyHtml += template
    })

    $('.family-inner-content').html(familyHtml)
})

