 <header class="header">
       <img src="{{ @asset('assets/images/header_bg.png') }}" alt="">
       <div class="container">
         <div class="header_top d-flex flex-column justify-content-around align-items-center">
           <nav class="header_nav d-flex align-items-center justify-content-around">
              <span class="span_logo"><a href="index.html">ДТТ</a></span>
              <ul class="header_ul">
                <i class="far fa-times toggleMenu" onclick="toggleMenu();"></i>
                <li><a href="#tour" class="header_ul_a lang_tour" onclick="toggleMenu();">Туры</a></li>
                <li><a href="#haji" class="header_ul_a lang_umra" onclick="toggleMenu();">Умра и Хадж</a></li>
                <li><a href="#hotel" class="header_ul_a lang_hotel" onclick="toggleMenu();">Отели</a></li>
                <li><a href="https://book.uzairways.com/uz/" class="header_ul_a lang_ticket" onclick="toggleMenu();" target="_blank">авиабилет</a></li>
                <li><a href="#place" class="header_ul_a lang_excursion" onclick="toggleMenu();">Экскурсии</a></li>
              </ul>
              <div class="responsive d-flex flex-row-reverse align-items-center justify-content-between">
                <select name="" id="" class="select">
                  <option value="rus">Rus</option>
                  <option value="uzb">Uzb</option>
                  <option value="eng">Eng</option>
                </select>
                <i class="fas fa-bars toggleMenu" onclick="toggleMenu();"></i>
              </div>
           </nav>
           <div class="header_text d-flex flex-column justify-content-center align-items-center">
             <h1>Dream tour travel</h1>
             <p>Туры из Узбекистана с выгодной до 30% за счет прямых контактов с отелями</p>
           </div>
         </div>
       </div>
     </header>
