<div class="container">
  <form  action="{{ route('sendContact') }}" method="post" class="form_info d-flex flex-column align-items-center justify-content-around animeX">
    @csrf
    <h3 class="question">Остались вопросы?</h3>
    <p class="info_form col-8">Заполните форму и наш оператор с вами свяжется</p>

    <input autocomplete="off" name="name" type="text" class="form-control form_name" required placeholder="Ваше имя">
    <input autocomplete="off" name="tel" type="tel" class="form-control form_phone" required placeholder="Номер телефона">
    <button type="submit" class="btn btn-primary" id="btn" disabled>Отправить</button>


    <p class="phone_info col-8 text-center"><span class="last_info">Или позвоните по номеру</span> <a href="tel: +998909881100">+998 (90) 988-11-00</a></p>
  </form>
</div>
