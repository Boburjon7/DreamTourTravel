@extends('layouts.main')

@section('content')
<section>
       <div class="container">
         <div class="section_tour d-flex flex-column justify-content-center">
           <div class="tour_text d-flex flex-column">
             <h1 id="tour" class="lang_tourah">Туры</h1>
             <p class="col-xl-5 col-lg-12 col-md-12 col-sm-12 lang_tourone">Отправляйтесь в путешествие с авиакомпанией «Dream tour travel» отличный отдых ближе, ближе чем, когда-либо.
              «Dream tour travel» Нет лучшего способа летать.</p>
           </div>
           <div class="tour_card d-flex justify-content-center align-items-center flex-wrap">
             <div class="tour_item  animeTourLeft col-xl-6 col-lg-7 col-md-10 d-flex flex-column align-items-center my-3">
               <img src="{{ @asset('assets/images/nature_1.png') }}" alt="">
               <h2 class="col-11 col-sm-10 lang_touroneh">Санторини</h2>
               <p class="col-11 col-sm-10 lang_touronep">Среди волн Эгейского моря расположился один из самых красочных островов мировой истории - Санторини</p>
               <a href="https://www.grekomania.ru/places/santorini" class="col-11 col-sm-10 lang_tourac" target="_blank">ПОДРОБНЕЕ</a>
             </div>
             <div class="tour_item  animeTour col-xl-6 col-lg-7 col-md-10 d-flex flex-column align-items-center my-3">
               <img src="{{ @asset('assets/images/nature_2.png') }}" alt="">
               <h2 class="col-11 col-sm-10 lang_tourtwoh">Бора-Бора</h2>
               <p class="col-11 col-sm-10 lang_tourtwop">Бора-Бора - романтический и один из самых красивых островов в Тихом океане, располоенный недалеко от Таити</p>
               <a href="https://wiotto.com/ru/article/all-about-bora-bora" class="col-11 col-sm-10 lang_tourab" target="_blank">ПОДРОБНЕЕ</a>
             </div>
             <div class="tour_item  animeX col-xl-6 col-lg-7 col-md-10 d-flex flex-column align-items-center my-3">
               <img src="{{ @asset('assets/images/nature_3.png') }}" alt="">
               <h2 class="col-11 col-sm-10 lang_tourthreeh">Фиджи</h2>
               <p class="col-11 col-sm-10 lang_tourthreep">Фиджи - райский уголок, это место как будто специально создано для отдыха.</p>
               <a href="https://planetofhotels.com/guide/ru/fidzhi" class="col-11 col-sm-10 lang_toura" target="_blank">ПОДРОБНЕЕ</a>
             </div>
           </div>
         </div>
       </div>
     </section>

     <section>
      <div class="container">
        <div class="section_tour d-flex flex-column justify-content-center">
          <div class="tour_text d-flex flex-column">
            <h1 id="haji" class="lang_umrah1">Умра и Хадж</h1>
            <p class="col-xl-5 col-lg-12 col-md-12 col-sm-12 lang_umrah">Компания Dream tour travel предоставляет лучшие цены в самые красивые места различных стран мира</p>
          </div>
          <div class="tour_card d-flex justify-content-center align-items-center flex-wrap">
            <div class="tour_item  animeTourLeft col-xl-6 col-lg-7 col-md-10 d-flex flex-column align-items-center my-3">
              <img src="{{ @asset('assets/images/haji1.jpg') }}" alt="">
              <h2 class="col-11 col-sm-10 lang_umraoneh">Саудовская Аравия</h2>
              <p class="col-11 col-sm-10 lang_umraonep">Встречи и канцелярские услуги в Медине Джидде. Саудовская Аравия  Удобный транспорт между Мединой и Меккой;
                Экскурсии по окрестностям Мадины (мечеть Кубо, Киблейн, Ухуд-Даг и Мечеть Хендак);
                Экскурсии в горы Маккан (горы Савр, Арофот, Муздалифа, Мина, Джаморот и Нур).</p>
            </div>
            <div class="tour_item  animeTour col-xl-6 col-lg-7 col-md-10 d-flex flex-column align-items-center my-3">
              <img src="{{ @asset('assets/images/haji2.jpg') }}" alt="" class="item_img">
              <h2 class="col-11 col-sm-10 lang_umrah2">Умра и Хадж</h2>
              <p class="col-11 col-sm-10 lang_umratwop">Саудовская Аравия Удобный транспорт между Мединой и Меккой; Экскурсии по окрестностям Мадины (мечеть Кубо, Киблейн, Ухуд-Даг и Мечеть Хендак); Экскурсии в горы Маккан.Министерство хаджа и умры Саудовской Аравии посещает исламские святыни для людей в возрасте от 18 до 65 лет</p>
            </div>
          </div>
        </div>
      </div>
    </section>


     <section>
       <div class="container">
         <div class="section_hotel d-flex flex-column justify-content-center">
           <h1 class="section_h text-center text-lg-start lang_hotelh" id="hotel">Лучшие отели</h1>
            <div class="hotel_item d-flex flex-column align-items-center justify-content-between">
              <div class="hotel_card animeX my-4 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between">
                <img src="{{ @asset('assets/images/otel_1.png') }}" alt="">
                <div class="hotel_text d-flex flex-column justify-content-between col-11 col-lg-5 col-sm-8 col-md-7 mt-3 mt-lg-0">
                  <div class="hotel_h d-flex align-items-center">
                    <h1 class="lang_hoteloneh">ROYAL BORA BORA</h1>
                    <div class="hotel_star d-flex align-items-center justify-content-center ms-2">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="hotel_location d-flex align-items-center justify-content-start">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    <h2 class="lang_hoteloneh2">Отель на Бора-Бора</h2>
                  </div>
                  <p class="lang_hotelonep">Отель ROYAL BORA BORA находится на острове Бора-Бора. К услугам гостей ресторан, открытый бассейн, бар и сад. Из всех номеров этого 3-звездочного отеля открывается вид на сад. </p>
                  <a href="https://www.royalborabora.com/en/" target="_blank" class="lang_hotela">Развернуть</a>
                </div>
              </div>
              <div class="hotel_card animeX my-4 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between">
                <img src="{{ @asset('assets/images/otel_2.png') }}" alt="">
                <div class="hotel_text d-flex flex-column justify-content-between col-11 col-lg-5 col-sm-8 col-md-7 mt-3 mt-lg-0">
                  <div class="hotel_h d-flex align-items-center">
                    <h1 class="lang_hoteltwoh">SAN ANTONIO - SMALL LUXURY HOTELS OF THE WORKD </h1>
                    <div class="hotel_star d-flex align-items-center justify-content-center ms-2">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="hotel_location d-flex align-items-center justify-content-start">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    <h2 class="lang_hoteltwoh2">Отель на Санторини</h2>
                  </div>
                  <p class="lang_hoteltwop">Отель San Antonio, из которого открывается потрясающий вид на море, расположен в уединенном месте на окраине курорта Имеровигли.</p>
                  <a href="https://www.sanantonio-santorini.com/" target="_blank" class="lang_hotelc">Развернуть</a>
                </div>
              </div>
              <div class="hotel_card animeX my-4 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between">
                <img src="{{ @asset('assets/images/otel_3.png') }}" alt="">
                <div class="hotel_text d-flex flex-column justify-content-between col-11 col-lg-5 col-sm-8 col-md-7 mt-3 mt-lg-0">
                  <div class="hotel_h d-flex align-items-center">
                    <h1 class="lang_hotelthreeh">FIJI MARRIOTT RESORT MOMI BAY</h1>
                    <div class="hotel_star d-flex align-items-center justify-content-center ms-2">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="hotel_location d-flex align-items-center justify-content-start">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    <h2 class="lang_hotelthreeh2">Отель на Фиджи</h2>
                  </div>
                  <p class="lang_hotelthreep">Международный курортный отель класса люкс Fiji Marriott Momi Bay находится в заливе Моми, Фиджи. Последний раз забронировано 1 час назад</p>
                  <a href="https://www.marriott.com/en-us/hotels/nanmc-fiji-marriott-resort-momi-bay/overview/" target="_blank" class="lang_hotelaf">Развернуть</a>
                </div>
              </div>
            </div>
         </div>
       </div>
     </section>


     <section>
       <div class="container">
         <div class="section_client d-flex flex-column align-items-center justify-content-center">
           <h1 class="client clienth" id="client">Отзывы наших клиентов</h1>
            <div class="client_item d-flex align-items-center justify-content-between flex-column flex-lg-row flex-wrap">
              <div class="client_card animeClientleft col-lg-3 col-md-5 col-sm-8 m-3 d-flex flex-column align-items-center justify-content-center">

                <div class="client_img d-flex align-items-center justify-content-center">
                  <img src="{{ @asset('assets/images/client1.jpg') }}" alt="">
                </div>

                <p class="my-3 clientone">Я тоже согласна с этими пожеланиями БЛАГОСЛОВЛЯЙТЕ СВОЮ ЖИЗНЬ, БУДЬТЕ ЗДОРОВЫ, ВАШИ РОДИТЕЛИ БУДУТ СЧАСТЛИВЫ, ЕСЛИ ВАМ НУЖЕН СЕРТИФИКАТ.<span>
                </span></p>
              </div>
              <div class="client_card animeX col-lg-3 col-md-5 col-sm-8 m-3 d-flex flex-column align-items-center justify-content-center">

                <div class="client_img d-flex align-items-center justify-content-center">
                  <img src="{{ @asset('assets/images/client2.jpg') }}" alt="">
                </div>

                <p class="my-3 clienttwo">С разрешения вашей компании, Аллах, вы подарили нам 10 дней сладких снов.
Пусть твоя карьера будет выше этого. Желаем успехов в служении народу. С уважением, все члены нашей команды!
              </p>
              </div>
              <div class="client_card client_card3 animeClient col-lg-3 col-md-5 col-sm-8 m-3 d-flex flex-column align-items-center justify-content-center">

                <div class="client_img d-flex align-items-center justify-content-center">
                  <img src="{{ @asset('assets/images/client3.jpg') }}" alt="">
                </div>

                <p class="my-3 clientthree">Ваши службы и организация очень хорошо организованы, мы молимся за права ваших лидеров и сотрудников, и пусть ваша карьера будет великой. Желаем успехов в служении народу. С уважением, все члены нашей команды! <span>
                </span></p>
              </div>
            </div>
         </div>
       </div>
     </section>


     <section>
       <div class="container">
         <div class="section_place d-flex flex-column align-items-center justify-content-center">
           <h1 class="place_h" id="place">Места, которые вы сможете посетить</h1>
           <div class="place_item d-flex flex-wrap flex-column flex-lg-row justify-content-between align-items-center">
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/Istanbul.jpg') }}" alt="">
               <h1 class="my-2 istanbul">Стамбул</h1>
             </div>
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/misr.jpg') }}" alt="">
               <h1 class="my-2 misr"> Египет</h1>
             </div>
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/ispaniya.jpg') }}" alt="">
               <h1 class="my-2 ispaniya"> Испания</h1>
             </div>
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/italiya.jpg') }}" alt="">
               <h1 class="my-2 italiya">Италия</h1>
             </div>
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/dubai.jpg') }}" alt="">
               <h1 class="my-2 dubai">Дубай</h1>
             </div>
             <div class="place_card d-flex align-items-center justify-content-center flex-column animeX col-lg-6  mb-5">
               <img src="{{ @asset('assets/images/turkish.jpg') }}" alt="">
               <h1 class="my-2 turkish">Турция</h1>
             </div>
           </div>
         </div>
       </div>
     </section>



     <section>
       <div class="container">
         <div class="section_about d-flex flex-wrap flex-column flex-lg-row justify-content-center align-items-center">
           <div class="about_text col-lg-6 col-md-8 d-flex flex-column justify-content-between">
             <h1 class="text-center text-lg-start animeX comp"> О компании</h1>
             <p class="animeX comp_about">Dream tour travel - компания, успешно осуществляющая туроператорскую и агентскую деятельность. Компания обладает серьезной репутацией, с выдающимся прошлым и передовым будущим!</p>
           </div>
           <img class="col-lg-6 col-md-8 mt-5 mt-lg-0 animeX" src="{{ @asset('assets/images/about.png') }}" alt="">
         </div>
       </div>
     </section>


     <main>
       <h1 class="main_map d-flex justify-content-center align-items-center">наши места</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5995.9128330713465!2d69.229181!3d41.288053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2d878f26f16a58!2zNDHCsDE3JzE3LjAiTiA2OcKwMTMnNDUuMSJF!5e0!3m2!1sru!2s!4v1652183464098!5m2!1sru!2s" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </main>


    <h1 class="only_h d-flex justify-content-center align-items-center">Связаться с нами</h1>
     <section class="section_form">
        @include('index.contactForm')
     </section>
@endsection
