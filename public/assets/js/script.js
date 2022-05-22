function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu')
    const nav = document.querySelector('.header_ul')
    const html = document.querySelector('html')

    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')

    if (window.innerWidth <= 768) {
        if (nav.classList.contains("active")) {
            html.style.overflow = 'hidden'
        } else {
            html.style.overflow = 'visible'
        }
    }
}

try {
    window.addEventListener('scroll', function () {
        var anime = document.querySelectorAll('.animeX');
        var animeTourLeft = document.querySelectorAll('.animeTourLeft')
        var animeTour = document.querySelectorAll('.animeTour')
        var animeClientleft = document.querySelectorAll('.animeClientleft')
        var animeClient = document.querySelectorAll('.animeClient')

        for (var s = 0; s < anime.length; s++) {
            var windowheight = window.innerHeight;
            var animetop = anime[s].getBoundingClientRect().top;
            var animepoint = 150

            if (animetop < windowheight - animepoint) {
                anime[s].classList.add('active')
            } else {
                anime[s].classList.remove('active')
            }
        }

        for (var l = 0; l < animeTourLeft.length; l++) {
            var windowheight = window.innerHeight;
            var animeTourLefttop = animeTourLeft[l].getBoundingClientRect().top;
            var animeTourLeftpoint = 150

            if (animeTourLefttop < windowheight - animeTourLeftpoint) {
                animeTourLeft[l].classList.add('active')
            } else {
                animeTourLeft[l].classList.remove('active')
            }
        }

        for (var cl = 0; cl < animeClientleft.length; cl++) {
            var windowheight = window.innerHeight;
            var animeClientlefttop = animeClientleft[cl].getBoundingClientRect().top;
            var animeClientleftpoint = 150

            if (animeClientlefttop < windowheight - animeClientleftpoint) {
                animeClientleft[cl].classList.add('active')
            } else {
                animeClientleft[cl].classList.remove('active')
            }
        }

        for (var r = 0; r < animeTour.length; r++) {
            var windowheight = window.innerHeight;
            var animeTourtop = animeTour[r].getBoundingClientRect().top;
            var animeTourpoint = 150

            if (animeTourtop < windowheight - animeTourpoint) {
                animeTour[r].classList.add('active')
            } else {
                animeTour[r].classList.remove('active')
            }
        }

        for (var rc = 0; rc < animeTour.length; rc++) {
            var windowheight = window.innerHeight;
            var animeClienttop = animeClient[rc].getBoundingClientRect().top;
            var animeClientpoint = 150

            if (animeClienttop < windowheight - animeClientpoint) {
                animeClient[rc].classList.add('active')
            } else {
                animeClient[rc].classList.remove('active')
            }
        }
    })
} catch (error) {
    console.log(1, error)
}


var select = document.querySelector('.select')
select.addEventListener('change', () => {
    var logo = document.querySelector('.span_logo')
    var lang_tour = document.querySelector('.lang_tour')
    var lang_umra = document.querySelector('.lang_umra')
    var lang_hotel = document.querySelector('.lang_hotel')
    var lang_ticket = document.querySelector('.lang_ticket')
    var lang_excursion = document.querySelector('.lang_excursion')
    var Hlogo = document.querySelector('.header_text h1')
    var Plogo = document.querySelector('.header_text p')
    var lang_tourah = document.querySelector('.lang_tourah')
    var lang_tourone = document.querySelector('.lang_tourone')
    var lang_touroneh = document.querySelector('.lang_touroneh')
    var lang_touronep = document.querySelector('.lang_touronep')
    var lang_toura = document.querySelector('.lang_toura')
    var lang_tourtwoh = document.querySelector('.lang_tourtwoh')
    var lang_tourtwop = document.querySelector('.lang_tourtwop')
    var lang_tourac = document.querySelector('.lang_tourac')
    var lang_tourthreeh = document.querySelector('.lang_tourthreeh')
    var lang_tourthreep = document.querySelector('.lang_tourthreep')
    var lang_tourab = document.querySelector('.lang_tourab')
    var lang_umrah1 = document.querySelector('.lang_umrah1')
    var lang_umrah = document.querySelector('.lang_umrah')
    var lang_umraoneh = document.querySelector('.lang_umraoneh')
    var lang_umraonep = document.querySelector('.lang_umraonep')
    var lang_umrah2 = document.querySelector('.lang_umrah2')
    var lang_umratwoh = document.querySelector('.lang_umratwoh')
    var lang_umratwop = document.querySelector('.lang_umratwop')
    var lang_hotelh = document.querySelector('.lang_hotelh')
    var lang_hoteloneh = document.querySelector('.lang_hoteloneh')
    var lang_hoteloneh2 = document.querySelector('.lang_hoteloneh2')
    var lang_hotelonep = document.querySelector('.lang_hotelonep')
    var lang_hotela = document.querySelector('.lang_hotela')
    var lang_hoteltwoh = document.querySelector('.lang_hoteltwoh')
    var lang_hoteltwoh2 = document.querySelector('.lang_hoteltwoh2')
    var lang_hoteltwop = document.querySelector('.lang_hoteltwop')
    var lang_hotelc = document.querySelector('.lang_hotelc')
    // var lang_hotelthreeh = document.querySelector('.lang_hotelthreeh')
    var lang_hotelthreeh2 = document.querySelector('.lang_hotelthreeh2')
    var lang_hotelthreep = document.querySelector('.lang_hotelthreep')
    var lang_hotelaf = document.querySelector('.lang_hotelaf')
    var clienth = document.querySelector('.clienth')
    var clientone = document.querySelector('.clientone')
    var clienttwo = document.querySelector('.clienttwo')
    var clientthree = document.querySelector('.clientthree')
    var place_h = document.querySelector('.place_h')
    var istanbul = document.querySelector('.istanbul')
    var misr = document.querySelector('.misr')
    var ispaniya = document.querySelector('.ispaniya')
    var italiya = document.querySelector('.italiya')
    var dubai = document.querySelector('.dubai')
    var turkish = document.querySelector('.turkish')
    var comp = document.querySelector('.comp')
    var comp_about = document.querySelector('.comp_about')
    var main_map = document.querySelector('.main_map')
    var only_h = document.querySelector('.only_h')
    var question = document.querySelector('.question')
    var info_form = document.querySelector('.info_form')
    var form_name = document.querySelector('.form_name')
    var form_phone = document.querySelector('.form_phone')
    var btn = document.querySelector('.btn')
    var last_info = document.querySelector('.last_info')



    if (select.value == 'uzb') {
        logo.textContent ='DTT'
        lang_tour.textContent ='Turlari'
        lang_umra.textContent ='Umra va Haj'
        lang_hotel.textContent ='Mehmonxona'
        lang_ticket.textContent ='Aviachipta'
        lang_excursion.textContent ='Ekskursiyalar'
        Plogo.textContent = 'Mehmonxonalar bilan to\'g\'ridan-to\'g\'ri aloqalar tufayli O\'zbekistondan 30% gacha foydali sayohatlar'
        lang_tourah.textContent = 'Turlari'
        lang_tourone.textContent = '"Dream tour travel" aviakompaniyasi bilan sayohat qiling, ajoyib ta\'til har qachongidan ham yaqinroq, yaqinroq.\n' + '"Orzu turu sayohati" Uchishning yaxshiroq usuli yo\'q.'
        lang_touroneh.textContent = 'Santorini'
        lang_touronep.textContent = 'Egey dengizining to\'lqinlari orasida jahon tarixidagi eng rang-barang orollardan biri - Santorini.\n'
        lang_toura.textContent = 'MA\'LUMOT OLISH'
        lang_tourtwoh.textContent = 'Bora-Bora\n'
        lang_tourtwop.textContent = 'Bora Bora romantik va Tinch okeanidagi eng go\'zal orollardan biri bo\'lib, Taiti yaqinida joylashgan.\n'
        lang_tourac.textContent = 'MA\'LUMOT OLISH'
        lang_tourthreeh.textContent = 'Fiji'
        lang_tourthreep.textContent = 'Fidji - jannat, bu joy dam olish uchun maxsus yaratilganga o\'xshaydi.\n'
        lang_tourab.textContent = 'MA\'LUMOT OLISH'
        lang_umrah1.textContent = 'Umra va Haj'
        lang_umrah.textContent = 'Dream tour travel kompaniyasi dunyoning eng go\'zal joylariga eng yaxshi narxlarni taqdim etadi\n'
        lang_umraoneh.textContent = 'Saudiya Arabistoni\n'
        lang_umraonep.textContent = 'Medina Jiddadagi yig\'ilishlar va ofis xizmatlari. Saudiya Arabistoni Madina va Makka o\'rtasida qulay transport;\n' + 'Madina atrofida ekskursiyalar (Kubo masjidi, Kiblain, Uhud-Dag va Xendak masjidi);\n' + 'Makka togʻlariga (Savr, Harofot, Muzdalifa, Mino, Jamorot va Nur togʻlariga) ekskursiyalar.'
        lang_umrah2.textContent = 'Umra va Haj'
        lang_umratwop.textContent = 'Saudiya Arabistoni Madina va Makka o\'rtasida qulay transport; Madina atrofida ekskursiyalar (Kubo masjidi, Kiblain, Uhud-Dag va Xendak masjidi); Makka tog‘lariga ekskursiyalar.Saudiya Arabistoni Haj va Umra vazirligi 18 yoshdan 65 yoshgacha bo‘lgan islomiy ziyoratgohlarni ziyorat qilmoqda.'
        lang_hotelh.textContent = '\n'+'Eng yaxshi mehmonxonalar'
        lang_hoteloneh.textContent = 'ROYAL BORA BORA'
        lang_hoteloneh2.textContent = 'Bora Boradagi mehmonxona\n'
        lang_hotelonep.textContent = 'ROYAL BORA BORA Bora Bora shahrida joylashgan. Restoran, ochiq basseyn, bar va bog\' mavjud. Ushbu 3 yulduzli mehmonxonaning barcha xonalari bog\' manzarasiga ega.'
        lang_hotela.textContent = 'Kengaytirish'
        lang_hoteltwoh.textContent = '\n' + 'SAN ANTONIO - ISHNING KICHIK LUXURY MEHMONLARI'
        lang_hoteltwoh2.textContent = 'Santorinidagi mehmonxona\n'
        lang_hoteltwop.textContent = '\n' + 'Ajoyib dengiz manzaralarini taqdim etuvchi Hotel San Antonio Imerovigli chekkasida tanho joyda joylashgan.\n'
        lang_hotelc.textContent = 'Kengaytirish'
        lang_hotelthreeh2.textContent = 'Fijidagi mehmonxona\n'
        lang_hotelthreep.textContent = 'Fiji Marriott Momi Bay xalqaro hashamatli kurorti Fijidagi Momi ko\'rfazida joylashgan. Oxirgi marta 1 soat oldin band qilingan\n'
        lang_hotelaf.textContent = 'Kengaytirish'
        clienth.textContent = 'Mijozlarimizdan fikr-mulohazalar\n'
        clientone.textContent = 'Men xam shu tilaklarga kushilaman UMRIZDАN BАRАKА TOPING SOG BOLING OTА ONАNGIZ ROXАTINGIZNI KURIShSIN АGАR SERTIFIKАT BERILIShI KERАK BULSА FIRMАLАRАRO BIRINChI URINNNI SIZLАRGА BERGАN BULАRDIM ChUNKI SERVIS OLIY DАRАJАDА KАTTА RАXMАT!!!'
        clienttwo.textContent = 'Ollohim shirkatingizning izni bilan 10 kunlik shirin tushlar koʼrishni ato yetdingiz.Bundanda martabalaringiz ulug bulsin. Xalk xizmatida xormay tolmay tarakkiyotingizni rivojini tilab kolamiz.Xurmat ila, gruximiz barcha aʼzolari!'
        clientthree.textContent = 'Raxbarlar va xodimlaringizni xaklariga duodamiz, Bundanda martabalaringiz ulug bulsin. Xalk xizmatida xormay tolmay tarakkiyotingizni rivojini tilab kolamiz.Xurmat ila, gruximiz barcha aʼzolari!zni rivojini tilab kolamiz.Xurmat ila, gruximiz barcha aʼzolari!'
        place_h.textContent = 'Siz tashrif buyurishingiz mumkin bo\'lgan joylar\n'
        istanbul.textContent = 'Istanbul'
        misr.textContent = 'Misr'
        ispaniya.textContent = 'Ispaniya'
        italiya.textContent = 'Italiya'
        dubai.textContent = 'dubai'
        turkish.textContent = 'Turkiya'
        comp.textContent = 'Kompaniya haqida\n'
        comp_about.textContent = '\n' +
            'Dream tour travel - bu turoperator va agentlik faoliyatini muvaffaqiyatli amalga oshiruvchi kompaniya. Kompaniya jiddiy obro\'ga ega, ajoyib o\'tmishi va ilg\'or kelajagi!'
        main_map.textContent = '\n' + 'Bizning joy'
        only_h.textContent = 'Biz bilan bog\'lanish'
        question.textContent = 'Savollaringiz bormi?\n'
        info_form.textContent = 'Shaklni to\'ldiring va operatorimiz siz bilan bog\'lanadi\n'
        form_name.placeholder = 'Sizning ismingiz\n'
        form_phone.placeholder = 'Telefon raqami\n'
        btn.textContent = 'Yuborish'
        last_info.textContent = 'Yoki raqamga qo\'ng\'iroq qiling'
    } else if (select.value == 'rus') {
        logo.textContent ='ДТТ'
        lang_tour.textContent ='Туры'
        lang_umra.textContent ='Умра и Хадж'
        lang_hotel.textContent ='Отели'
        lang_ticket.textContent ='авиабилет'
        lang_excursion.textContent ='Экскурсии'
        Plogo.textContent = 'Туры из Узбекистана с выгодной до 30% за счет прямых контактов с отелями'
        lang_tourah.textContent ='Туры'
        lang_tourone.textContent = 'Отправляйтесь в путешествие с авиакомпанией «Dream tour travel» отличный отдых ближе, ближе чем, когда-либо.\n' + '«Dream tour travel» Нет лучшего способа летать.'
        lang_touroneh.textContent = 'Санторини'
        lang_touronep.textContent = 'Среди волн Эгейского моря расположился один из самых красочных островов мировой истории - Санторини'
        lang_tourac.textContent = 'ПОДРОБНЕЕ'
        lang_tourtwoh.textContent = 'Бора-Бора'
        lang_tourtwop.textContent = 'Бора-Бора - романтический и один из самых красивых островов в Тихом океане, располоенный недалеко от Таити'
        lang_tourab.textContent = 'ПОДРОБНЕЕ'
        lang_tourthreeh.textContent = 'Фиджи'
        lang_tourthreep.textContent = 'Фиджи - райский уголок, это место как будто специально создано для отдыха.'
        lang_toura.textContent = 'ПОДРОБНЕЕ'
        lang_umrah1.textContent ='Умра и Хадж'
        lang_umrah.textContent = 'Компания Dream tour travel предоставляет лучшие цены в самые красивые места различных стран мира'
        lang_umraoneh.textContent = 'Саудовская Аравия'
        lang_umraonep.textContent = 'Встречи и канцелярские услуги в Медине Джидде. Саудовская Аравия  Удобный транспорт между Мединой и Меккой;\n' +
            '                Экскурсии по окрестностям Мадины (мечеть Кубо, Киблейн, Ухуд-Даг и Мечеть Хендак);\n' +
            '                Экскурсии в горы Маккан (горы Савр, Арофот, Муздалифа, Мина, Джаморот и Нур).'
        lang_umrah1.textContent ='Умра и Хадж'
        lang_umratwop.textContent = 'Саудовская Аравия Удобный транспорт между Мединой и Меккой; Экскурсии по окрестностям Мадины (мечеть Кубо, Киблейн, Ухуд-Даг и Мечеть Хендак); Экскурсии в горы Маккан.Министерство хаджа и умры Саудовской Аравии посещает исламские святыни для людей в возрасте от 18 до 65 лет'
        lang_hotelh.textContent = 'Лучшие отели'
        lang_hoteloneh.textContent = 'ROYAL BORA BORA'
        lang_hoteloneh2.textContent = 'Отель на Бора-Бора'
        lang_hotelonep.textContent = 'Отель ROYAL BORA BORA находится на острове Бора-Бора. К услугам гостей ресторан, открытый бассейн, бар и сад. Из всех номеров этого 3-звездочного отеля открывается вид на сад.'
        lang_hotela.textContent = 'Развернуть'
        lang_hoteltwoh.textContent = 'SAN ANTONIO - SMALL LUXURY HOTELS OF THE WORKD'
        lang_hoteltwoh2.textContent = 'Отель на Санторини'
        lang_hoteltwop.textContent = 'Отель San Antonio, из которого открывается потрясающий вид на море, расположен в уединенном месте на окраине курорта Имеровигли.'
        lang_hotelc.textContent = 'Развернуть'
        lang_hotelthreeh2.textContent = 'Отель на Фиджи'
        lang_hotelthreep.textContent = 'Международный курортный отель класса люкс Fiji Marriott Momi Bay находится в заливе Моми, Фиджи. Последний раз забронировано 1 час назад'
        lang_hotelaf.textContent = 'Развернуть'
        clienth.textContent = 'Отзывы наших клиентов'
        clientone.textContent = 'Я тоже согласна с этими пожеланиями БЛАГОСЛОВЛЯЙТЕ СВОЮ ЖИЗНЬ, БУДЬТЕ ЗДОРОВЫ, ВАШИ РОДИТЕЛИ БУДУТ СЧАСТЛИВЫ, ЕСЛИ ВАМ НУЖЕН СЕРТИФИКАТ.'
        clienttwo.textContent = 'С разрешения вашей компании, Аллах, вы подарили нам 10 дней сладких снов.' + '\n' +
            'Пусть твоя карьера будет выше этого. Желаем успехов в служении народу. С уважением, все члены нашей команды!'
        clientthree.textContent = 'Ваши службы и организация очень хорошо организованы, мы молимся за права ваших лидеров и сотрудников, и пусть ваша карьера будет великой. Желаем успехов в служении народу. С уважением, все члены нашей команды!'
        place_h.textContent = 'Места, которые вы сможете посетить'
        istanbul.textContent = 'Стамбул'
        misr.textContent = 'Египет'
        ispaniya.textContent = 'Испания'
        italiya.textContent = 'Италия'
        dubai.textContent = 'Дубай'
        turkish.textContent = 'Турция'
        comp.textContent = 'О компании'
        comp_about.textContent = 'Dream tour travel - компания, успешно осуществляющая туроператорскую и агентскую деятельность. Компания обладает серьезной репутацией, с выдающимся прошлым и передовым будущим!'
        main_map.textContent = 'наши места'
        only_h.textContent = 'Связаться с нами'
        question.textContent = 'Остались вопросы?'
        info_form.textContent = 'Заполните форму и наш оператор с вами свяжется'
        form_name.placeholder = 'Ваше имя'
        form_phone.placeholder = 'Номер телефона'
        btn.textContent = 'Отправить'
        last_info.textContent = 'Или позвоните по номеру'
    } else if (select.value == 'eng') {
        logo.textContent ='DTT'
        lang_tour.textContent ='Type'
        lang_umra.textContent ='\n' + 'Umrah and Hajj'
        lang_hotel.textContent ='Hotels'
        lang_ticket.textContent ='Air ticket'
        lang_excursion.textContent ='Excursions'
        Plogo.textContent = 'Tours from Uzbekistan with profitable up to 30% due to direct contacts with hotels'
        lang_tourah.textContent = 'Type'
        lang_tourone.textContent = '\n' +
            'Take a trip with the airline "Dream tour travel" a great vacation is closer, closer than ever.\n' +
            '              "Dream tour travel" There is no better way to fly.'
        lang_touroneh.textContent = 'Santorini'
        lang_touronep.textContent = 'Among the waves of the Aegean Sea is one of the most colorful islands in world history - Santorini\n'
        lang_tourac.textContent = 'Learn more'
        lang_tourtwoh.textContent = '\n' +
            'Bora-Bora'
        lang_tourtwop.textContent = 'Bora Bora - romantic and one of the most beautiful islands in the Pacific Ocean, located near Tahiti\n'
        lang_tourab.textContent = 'Learn more'
        lang_tourthreeh.textContent = 'Fiji'
        lang_tourthreep.textContent = 'Fiji is a paradise, this place seems to be specially created for relaxation.\n'
        lang_toura.textContent = 'Learn more'
        lang_umrah1.textContent = 'Umrah and Hajj'
        lang_umrah.textContent = 'Dream tour travel company provides the best prices to the most beautiful places around the world\n'
        lang_umraoneh.textContent = 'Saudi Arabia\n'
        lang_umraonep.textContent = 'Meetings and office services in Medina Jeddah. Saudi Arabia Convenient transportation between Medina and Mecca;\n' +
            '                Excursions around Madina (Kubo Mosque, Kiblain, Uhud-Dag and Hendak Mosque);\n' +
            '                Excursions to the Makkan mountains (mountains Savr, Harofot, Muzdalifah, Mina, Jamorot and Nur).'
        lang_umrah2.textContent = 'Umrah and Hajj'
        lang_umratwop.textContent = '\n' +
            'Saudi Arabia Convenient transportation between Medina and Mecca; Excursions around Madina (Kubo Mosque, Kiblain, Uhud-Dag and Hendak Mosque); Excursions to the Makkan mountains. The Ministry of Hajj and Umrah of Saudi Arabia visits Islamic shrines for people aged 18 to 65 years'
        lang_hotelh.textContent = 'Best hotels\n'
        lang_hoteloneh.textContent = 'ROYAL BORA BORA'
        lang_hoteloneh2.textContent = 'Hotel in Bora Bora\n'
        lang_hotelonep.textContent = '\n' +
            'ROYAL BORA BORA is located in Bora Bora. Features a restaurant, outdoor swimming pool, a bar and garden. All rooms at this 3-star hotel have garden views.'
        lang_hotela.textContent = 'Expand'
        lang_hoteltwoh.textContent = 'SAN ANTONIO - SMALL LUXURY HOTELS OF THE WORKD'
        lang_hoteltwoh2.textContent = 'Hotel in Santorini'
        lang_hoteltwop.textContent = '\n' +
            'Offering stunning sea views, Hotel San Antonio enjoys a secluded location on the outskirts of Imerovigli.'
        lang_hotelc.textContent = 'Expand'
        lang_hotelthreeh2.textContent = '\n' +
            'Hotel in Fiji'
        lang_hotelthreep.textContent = '\n' +
            'The Fiji Marriott Momi Bay International Luxury Resort is located in Momi Bay, Fiji. Last booked 1 hour ago'
        lang_hotelaf.textContent = 'Expand'
        clienth.textContent = 'Feedback from our clients\n'
        clientone.textContent = '\n' +
            'I also agree with these wishes. BLESS YOUR LIFE, BE HEALTHY, YOUR PARENTS WILL BE HAPPY IF YOU NEED A CERTIFICATE.'
        clienttwo.textContent = '\n' +
            'With the permission of your company, Allah, you gave us 10 days of sweet dreams.\n' +
            'May your career be above that. We wish you success in serving the people. Sincerely, all members of our team!'
        clientthree.textContent = 'Your services and organization are very well organized, we pray for the rights of your leaders and staff, and may your career be great. We wish you success in serving the people. Sincerely, all members of our team!'
        place_h.textContent = 'Places you can visit'
        istanbul.textContent = 'Istanbul'
        misr.textContent = 'Egypt'
        ispaniya.textContent = 'Spain'
        italiya.textContent = 'Italy'
        dubai.textContent = 'Dubai'
        turkish.textContent = 'Turkey'
        comp.textContent = 'About company'
        comp_about.textContent = 'Dream tour travel is a company successfully carrying out tour operator and agency activities. The company has a serious reputation, with an outstanding past and an advanced future!'
        main_map.textContent = 'our places\n'
        only_h.textContent = '\n' +
            'Contact us'
        question.textContent = '\n' +
            'Do you have any questions?'
        info_form.textContent = '\n' +
            'Fill out the form and our operator will contact you questions?'
        form_name.placeholder = 'your name'
        form_phone.placeholder = '\n' +
            'Phone number'
        btn.textContent = 'Send\n'
        last_info.textContent = '\n' + 'Or call the number'
    }
})


let btn = document.getElementById('btn');
let phone = document.querySelector('.form_phone')
let name = document.querySelector('.form_name')


name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9]/g, "")
    const checkName = /^[a-zA-Zа-яА-Я-.]+$/.test(name.value) && name.value.length >= 0;
    if (checkName) {
        phone.addEventListener('input', () => {
            const checkPhone = phone.value
            let some = checkPhone.toString()
            if (some.length > 14) {
                btn.removeAttribute('disabled');
            } else if (some.length > 0 && some.length < 15) {
                btn.disabled = true;
            }
        })
    }
})

btn.addEventListener('click', () => {
    setTimeout(alert("Xabar jo'natildi"), 1000)
})



document.addEventListener("input", () => {
    const input = document.querySelector(".form_phone");

    input.addEventListener('input', (e) => {
        if (e.target.value) {
            const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,4})/);
            e.target.value = +"+998 " + ' ' + x[2] + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '')
        }
    });
});
