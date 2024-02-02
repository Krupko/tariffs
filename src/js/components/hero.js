const currency = document.querySelectorAll('.js-currency'),
  period = document.querySelectorAll('.js-period'),
  rur = 90,
  eur = 0.9,
  usd = 1;

let priceBasic = document.querySelector('.js-price-basic'),
  priceProfessional = document.querySelector('.js-price-professional'),
  pricePremium = document.querySelector('.js-price-premium');

const result = (a, b) => a * b  //функция конвертации

const priceBasicRur = result(priceBasic.innerHTML, rur),
  priceBasicEur = result(priceBasic.innerHTML, eur),
  priceBasicUsd = result(priceBasic.innerHTML, usd),

  priceProfessionalRur = result(priceProfessional.innerHTML, rur),
  priceProfessionalEur = result(priceProfessional.innerHTML, eur),
  priceProfessionalUsd = result(priceProfessional.innerHTML, usd),

  pricePremiumRur = result(pricePremium.innerHTML, rur),
  pricePremiumEur = result(pricePremium.innerHTML, eur),
  pricePremiumUsd = result(pricePremium.innerHTML, usd);

currency.forEach((e) => {
  e.addEventListener('click', () => {
    period.forEach((k) => {  //Приведение к дефолтному значению периода
      if (k.innerHTML == '/Day') {
        k.innerHTML = ''
        k.innerHTML = '/Months'
      }
    })
    currency.forEach((el) => {  // Конвертор валюты
      if (el.innerHTML == '$') {
        el.innerHTML = ''
        el.innerHTML = '₽'
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicRur
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalRur
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumRur
      }
      else if (el.innerHTML == '₽') {
        el.innerHTML = ''
        el.innerHTML = '€'
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicEur;
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalEur
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumEur
      }
      else if (el.innerHTML == '€') {
        el.innerHTML = ''
        el.innerHTML = '$'
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicUsd
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalUsd
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumUsd
      }
    })
  })
})

period.forEach((elem) => {  // Смена периода месяц | день
  elem.addEventListener('click', () => {
    period.forEach((ek) => {
      if (ek.innerHTML == '/Months') {
        ek.innerHTML = ''
        ek.innerHTML = '/Day'
      } else if (ek.innerHTML == '/Day') {
        ek.innerHTML = ''
        ek.innerHTML = '/Months'
      }
    })

    currency.forEach((e) => {  //Расчет стоимости в зависимости от выбранного периода
      if (e.innerHTML == '€' && elem.innerHTML == '/Day') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicEur / 30
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalEur / 30
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumEur / 30

      } else if (e.innerHTML == '€' && elem.innerHTML == '/Months') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicEur
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalEur
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumEur
      }
    })

    currency.forEach((e) => {
      if (e.innerHTML == '₽' && elem.innerHTML == '/Day') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicRur / 30
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalRur / 30
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumRur / 30

      } else if (e.innerHTML == '₽' && elem.innerHTML == '/Months') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicRur
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalRur
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumRur
      }
    })

    currency.forEach((e) => {
      if (e.innerHTML == '$' && elem.innerHTML == '/Day') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicUsd / 30
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalUsd / 30
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumUsd / 30

      } else if (e.innerHTML == '$' && elem.innerHTML == '/Months') {
        priceBasic.innerHTML = ''
        priceBasic.innerHTML = priceBasicUsd
        priceProfessional.innerHTML = ''
        priceProfessional.innerHTML = priceProfessionalUsd
        pricePremium.innerHTML = ''
        pricePremium.innerHTML = pricePremiumUsd
      }
    })
  })
})

