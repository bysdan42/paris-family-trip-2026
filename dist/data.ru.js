export const travelers = {
  "dan": "Дан",
  "grandpa": "Дедушка",
  "miri": "Мири",
  "ariel": "Ариэль",
  "tai": "Тай",
  "tony": "Тони",
  "liz": "Лиз"
};
export const documents = {
  "edgar": {
    "title": "Подтверждение Edgar · апартаменты в Париже",
    "type": "PDF · 2 страницы · публичная копия",
    "path": "./documents/edgar-confirmation-public.pdf",
    "description": "Бронирование подтверждено · 2–7.10 · апартаменты с тремя спальнями для всех семерых, 5 ночей. €2,354.52 с налогами (около ₪8,283). Без питания, невозвратный тариф. Номер бронирования, PIN и электронная почта скрыты; оригинал хранится у Дана.",
    "status": "Бронирование подтверждено"
  },
  "disney": {
    "title": "Подтверждение Disney и отеля",
    "type": "PDF · 13 страниц",
    "path": "./documents/disney-confirmation.pdf",
    "description": "Explorers · 28.9–2.10 · два номера, 4 ночи и 4 дня посещения парков.",
    "status": "Подтверждение бронирования",
    "reference": "35160655"
  },
  "outbound": {
    "title": "Рейс туда · Transavia",
    "type": "Изображение подтверждения",
    "path": "./documents/flight-outbound.png",
    "description": "28.9 · TLV 18:35 → ORY 22:40 · рейс TO3459. Снимок подтверждения, не посадочный талон.",
    "status": "Снимок подтверждения",
    "reference": "RCUP3Z"
  },
  "inbound": {
    "title": "Обратный рейс · Transavia",
    "type": "Изображение подтверждения",
    "path": "./documents/flight-return.png",
    "description": "7.10 · ORY 10:30 → TLV 16:05 · рейс TO3454. Снимок подтверждения, не посадочный талон.",
    "status": "Снимок подтверждения",
    "reference": "RCUP3Z"
  },
  "planning": {
    "title": "Исходный план поездки",
    "type": "Markdown · скачать",
    "path": "./documents/trip-planning.md",
    "description": "Итоги обсуждения, состав семьи и исходный маршрут. Проверенные изменения отражены в дневнике поездки.",
    "status": "План поездки"
  }
};
export const days = [
  {
    "id": "2026-09-28",
    "date": "28.9",
    "weekday": "Понедельник",
    "short": "Пн",
    "label": "Вылетаем",
    "symbol": "✈",
    "title": "Приключение начинается",
    "subtitle": "Тель-Авив → Орли → Explorers",
    "area": "По пути в Париж",
    "mood": "Прилетаем и отдыхаем",
    "hotel": "Explorers · ночь 1 из 4",
    "transport": "Перелёт + трансфер в отель",
    "documents": [
      "outbound",
      "disney",
      "planning"
    ],
    "missing": [
      "Подтверждение трансфера из Орли в отель"
    ],
    "notes": [
      "Согласовать с Explorers прибытие после полуночи: самолёт садится в 22:40, а в отель приедем, скорее всего, уже 29.9.",
      "Время рейсов местное. В документах нет подтверждённых сроков получения багажа и трансфера."
    ],
    "events": [
      {
        "time": "18:35",
        "title": "Вылетаем из Тель-Авива",
        "description": "Transavia · TO3459 · из Тель-Авива (TLV) в Париж-Орли (ORY).",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом",
        "kind": "flight",
        "flight": {
          "from": "TLV",
          "to": "ORY",
          "departure": "18:35",
          "arrival": "22:40",
          "number": "TO3459"
        }
      },
      {
        "time": "22:40",
        "title": "Bonjour, Paris!",
        "description": "Прилёт в Орли, паспортный контроль и получение багажа. На эту ночь больше ничего не планируем.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом",
        "map": "Paris Orly Airport"
      },
      {
        "time": "Ночь",
        "title": "Сразу в отель — и спать",
        "description": "Прямой трансфер в Explorers; показать подтверждение на стойке регистрации. Два номера для всей семьи.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Проживание забронировано",
        "map": "Explorers Hotel Disneyland Paris"
      }
    ],
    "options": [
      {
        "title": "Отдельный трансфер для всех семерых",
        "description": "Удобный вариант после позднего прилёта. Нужна машина на 7 пассажиров с местом для багажа и детскими креслами; подтверждение трансфера пока не приложено.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ]
      },
      {
        "title": "Первое утро без будильника",
        "description": "Если дорога затянется, начнём первый день Disney позже. Лучше выбрать меньше впечатлений и спокойно ими насладиться.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ]
      }
    ]
  },
  {
    "id": "2026-09-29",
    "date": "29.9",
    "weekday": "Вторник",
    "short": "Вт",
    "label": "Disney I",
    "symbol": "✦",
    "title": "Однажды внутри сказки",
    "subtitle": "Первый день в парках · Disneyland Park",
    "area": "Диснейленд",
    "mood": "Начинаем неспешно",
    "hotel": "Explorers · ночь 2 из 4",
    "transport": "Трансфер из отеля · уточнить на ресепшене",
    "documents": [
      "disney",
      "planning"
    ],
    "missing": [],
    "notes": [
      "В программе три дня в парках, а в подтверждении — четыре. Дополнительный день предложен как вариант на 2.10.",
      "Континентальный завтрак включён. Часы работы, представления и ограничения по росту проверяем в приложении Disney в день посещения."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Завтрак и восстановление сил",
        "description": "Спокойное утро после короткой ночи. Завтрак в отеле включён в бронирование.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Включено в пакет"
      },
      {
        "time": "После завтрака",
        "title": "Входим в сказку",
        "description": "Начинаем вместе в Disneyland Park. Выбираем одну зону и темп, удобный для всех.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Вход включён",
        "map": "Disneyland Park Paris",
        "url": "https://www.disneylandparis.com/"
      },
      {
        "time": "Обед",
        "title": "Настоящая пауза",
        "description": "Поесть, присесть и отдохнуть. Если разделяемся, заранее назначаем место и время встречи.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "После обеда",
        "title": "Каждому — своё волшебство",
        "description": "Дан, Ариэль и Тай могут выбрать ещё аттракционы; дедушка, Мири и малышки — спокойный маршрут. Учитываем желания и ограничения по росту.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "Вечер",
        "title": "Ещё немного магии или ранний отдых",
        "description": "Представление или парад — по расписанию парка и по силам. Точное время пока не выбрано.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "url": "https://www.disneylandparis.com/"
      }
    ],
    "options": [
      {
        "title": "Ненадолго разделяемся ради приключений",
        "description": "Время для аттракционов, подходящих старшим детям. Сначала проверяем ограничения по росту и очереди.",
        "group": [
          "dan",
          "ariel",
          "tai"
        ]
      },
      {
        "title": "Сказки без спешки",
        "description": "Встречи с персонажами, одна зона и перерывы для отдыха; при необходимости возвращаемся в отель пораньше.",
        "group": [
          "grandpa",
          "miri",
          "tony",
          "liz"
        ]
      }
    ]
  },
  {
    "id": "2026-09-30",
    "date": "30.9",
    "weekday": "Среда",
    "short": "Ср",
    "label": "Disney II",
    "symbol": "✦",
    "title": "Открываем новые миры",
    "subtitle": "Disney Adventure World · второй день в парках",
    "area": "Диснейленд",
    "mood": "День открытий",
    "hotel": "Explorers · ночь 3 из 4",
    "transport": "Трансфер из отеля · прогулка по парку",
    "documents": [
      "disney",
      "planning"
    ],
    "missing": [],
    "notes": [
      "В программе три дня в парках, а в подтверждении — четыре. Дополнительный день предложен как вариант на 2.10.",
      "Континентальный завтрак включён. Часы работы, представления и ограничения по росту проверяем в приложении Disney в день посещения.",
      "С 29.3.2026 парк Walt Disney Studios называется Disney Adventure World."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Начинаем с завтрака",
        "description": "Завтракаем в отеле и выбираем два-три главных впечатления дня.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Включено в пакет"
      },
      {
        "time": "Утро в парке",
        "title": "Disney Adventure World",
        "description": "Второй парк с мирами Disney, Pixar и Marvel. Начинаем вместе, дальнейший маршрут выбираем на месте.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Вход включён",
        "map": "Disney Adventure World",
        "url": "https://news.disneylandparis.com/en/walt-disney-studio-park-discovery/"
      },
      {
        "time": "Обед",
        "title": "Обедаем и набираемся сил",
        "description": "Общий перерыв; оставляем время посидеть и дать малышкам отдохнуть.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "После обеда",
        "title": "«Холодное сердце» или супергерои",
        "description": "Можно разделиться по интересам: мир Frozen и встречи с персонажами или приключения Marvel. Проверяем доступность и ограничения в приложении.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "url": "https://news.disneylandparis.com/en/walt-disney-studio-park-discovery/"
      },
      {
        "time": "Вечер",
        "title": "Возвращаемся до того, как устанем",
        "description": "Остаться подольше можно по желанию. Ждать закрытия совсем не обязательно.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "День вокруг Frozen",
        "description": "Одна тема — меньше ходьбы и решений. Проверяем доступные развлечения в приложении.",
        "group": [
          "miri",
          "tony",
          "liz"
        ],
        "url": "https://news.disneylandparis.com/en/walt-disney-studio-park-discovery/"
      },
      {
        "title": "Pixar и Marvel",
        "description": "Дан, Ариэль и Тай выбирают маршрут по интересам; дедушка может присоединиться или отдохнуть.",
        "group": [
          "dan",
          "grandpa",
          "ariel",
          "tai"
        ],
        "url": "https://news.disneylandparis.com/en/walt-disney-studio-park-discovery/"
      }
    ]
  },
  {
    "id": "2026-10-01",
    "date": "1.10",
    "weekday": "Четверг",
    "short": "Чт",
    "label": "Disney III",
    "symbol": "✦",
    "title": "Возвращаемся к любимым моментам",
    "subtitle": "Третий день в парках · выбираем сами",
    "area": "Диснейленд",
    "mood": "Любимое и то, что не успели",
    "hotel": "Explorers · ночь 4 из 4",
    "transport": "Трансфер из отеля · прогулки по паркам",
    "documents": [
      "disney",
      "planning"
    ],
    "missing": [],
    "notes": [
      "В программе три дня в парках, а в подтверждении — четыре. Дополнительный день предложен как вариант на 2.10.",
      "Континентальный завтрак включён. Часы работы, представления и ограничения по росту проверяем в приложении Disney в день посещения.",
      "Лучше собрать вещи вечером: завтра выезд до 11:00 и переезд в Париж."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Семейный выбор",
        "description": "Каждый выбирает одно впечатление, которое хочется повторить. Учитываем очереди и расстояния.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Вход включён",
        "url": "https://www.disneylandparis.com/"
      },
      {
        "time": "Обед",
        "title": "Общий перерыв на обед",
        "description": "Назначаем постоянное место встречи перед следующим разделением.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "После обеда",
        "title": "Сувениры и последние открытия",
        "description": "Ещё один любимый аттракцион или спокойная прогулка; оставляем время собрать вещи.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "Вечер",
        "title": "Последняя ночь в Explorers",
        "description": "Готовим багаж и проверяем получение машины на завтра. Подтверждение аренды пока не приложено.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "Короткий день и отдых в отеле",
        "description": "Мири, дедушка и малышки могут закончить раньше; Дан и мальчики продолжают, договорившись о встрече.",
        "group": [
          "miri",
          "grandpa",
          "tony",
          "liz"
        ]
      },
      {
        "title": "Оставить немного на завтра",
        "description": "В пакете Disney четыре дня посещения. Если хочется ещё один день в парке вместо парка кошачьих, выбираем этот вариант на 2.10.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ]
      }
    ]
  },
  {
    "id": "2026-10-02",
    "date": "2.10",
    "weekday": "Пятница",
    "short": "Пт",
    "label": "Природа и Париж",
    "symbol": "❋",
    "title": "Из сказки — в город",
    "subtitle": "Выезд · природа по пути · первый вечер в Париже",
    "area": "Disney → Париж",
    "mood": "День переезда",
    "hotel": "Edgar Suites Hameau · ночь 1 из 5 · забронировано",
    "transport": "Планируется минивэн · получение в Marne-la-Vallée",
    "documents": [
      "edgar",
      "disney",
      "planning"
    ],
    "missing": [
      "Бронирование машины на 2–3.10",
      "Подтверждение парковки Edgar и соответствия габаритов машины"
    ],
    "notes": [
      "Выезд до 11:00 согласно подтверждению отеля.",
      "Edgar Suites Hameau · 38 Rue du Hameau, 75015 Paris · телефон +33 1 89 74 40 52. Апартаменты с тремя спальнями для семерых, 2–7.10; заезд 15:00–22:00.",
      "Стоимость бронирования: €2,354.52 с налогами (около ₪8,283 по подтверждению), без питания, невозвратный тариф. Возвратный залог за ущерб: €250 отдельно от стоимости проживания.",
      "Частная парковка: €30 в день, бронируется отдельно; место ещё не подтверждено. По сайту Edgar: высота до 2 м, ширина до 1,80 м. Перед бронированием нужно проверить габариты семиместной машины.",
      "Профессиональная уборка до и после проживания; по сайту сети ежедневная уборка не включена.",
      "Посещение парка кошачьих зависит от погоды и ещё не проверенных часов работы. Работа паркового поезда не подтверждена."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Завтракаем и собираемся",
        "description": "Прощаемся с Explorers и проверяем оба номера.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Включено в пакет"
      },
      {
        "time": "До 11:00",
        "title": "Выезд из отеля",
        "description": "Время освобождения номеров указано в подтверждении бронирования.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом"
      },
      {
        "time": "После выезда",
        "title": "Забираем минивэн",
        "description": "Планируем получение около станции Marne-la-Vallée. Компания, время и точный пункт пока не подтверждены.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Marne la Vallee Chessy station"
      },
      {
        "time": "Обед",
        "title": "Parc des Félins",
        "description": "Спокойная прогулка в парке кошачьих. Билеты не куплены; перед выездом проверить часы работы, транспорт внутри парка и длину маршрута.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Parc des Felins Lumigny France"
      },
      {
        "time": "15:00–22:00",
        "title": "Заселение в Edgar Suites Hameau",
        "description": "Едем в Париж и заселяемся в апартаменты с тремя спальнями по адресу 38 Rue du Hameau. После парка кошачьих планируем прибытие до 22:00. Парковку нужно подтвердить отдельно.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Проживание забронировано",
        "map": "Edgar Suites Hameau 38 Rue du Hameau Paris",
        "url": "https://www.edgarsuites.com/residence/hameau-porte-de-versailles/"
      }
    ],
    "alternateEvents": [
      {
        "time": "До 11:00",
        "title": "Выезд и хранение багажа",
        "description": "Заранее уточнить, можно ли оставить чемоданы в отеле; в парки с ними не идти.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом"
      },
      {
        "time": "Далее",
        "title": "Четвёртый день Disney",
        "description": "Используем дополнительный день вместо парка кошачьих. По подтверждению можно выбрать четыре дня посещения во время проживания; возможность входа в день выезда уточнить у отеля.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Вариант из пакета",
        "url": "https://www.disneylandparis.com/",
        "map": "Disneyland Paris"
      },
      {
        "time": "Вечер",
        "title": "Забираем багаж и едем в Париж",
        "description": "Нужно изменить время получения машины или заказать трансфер. Заезд в Edgar — 15:00–22:00; позднее прибытие согласовать заранее.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "Природа по пути в город",
        "description": "Исходный маршрут: получение машины, парк кошачьих и Париж. Подходит при хорошей погоде и достаточном запасе сил.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "plan": "nature"
      },
      {
        "title": "Ещё один день Disney",
        "description": "Используем четвёртый день из пакета вместо парка кошачьих. Нужно согласовать хранение багажа и переезд в Париж.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "plan": "disney"
      }
    ]
  },
  {
    "id": "2026-10-03",
    "date": "3.10",
    "weekday": "Суббота",
    "short": "Сб",
    "label": "Две группы",
    "symbol": "⑂",
    "title": "Два маршрута. Один вечер вместе.",
    "subtitle": "Авиация и открытия или спокойный шопинг",
    "area": "Ле-Бурже + Париж",
    "mood": "День двух маршрутов",
    "hotel": "Edgar Suites Hameau · забронировано",
    "transport": "На машине в музей · на общественном транспорте за покупками",
    "documents": [
      "edgar",
      "planning"
    ],
    "missing": [
      "Билеты в Музей авиации и космонавтики",
      "Детали возврата машины"
    ],
    "notes": [
      "В октябре Музей авиации и космонавтики открыт 10:00–17:00, последний вход в 16:30.",
      "По сайту музея зал межвоенного периода закрыт до 14.10. Тип билета выбираем по интересующим экспозициям.",
      "Уточнить часы работы пункта возврата в субботу, заправку и место встречи в Париже."
    ],
    "events": [
      {
        "time": "10:00",
        "title": "Команда исследователей: курс на Ле-Бурже",
        "description": "Музей авиации и космонавтики: самолёты, космос и Concorde. Для некоторых экспозиций нужен соответствующий билет.",
        "group": [
          "dan",
          "grandpa",
          "ariel",
          "tai"
        ],
        "status": "В планах",
        "url": "https://www.museeairespace.fr/visiteurs/horaires/",
        "map": "Musee de l Air et de l Espace Le Bourget",
        "split": "science"
      },
      {
        "time": "В это время",
        "title": "Спокойная команда: день покупок",
        "description": "Мири и малышки в центре города. Выбираем один район — Осман или Ле-Аль — с обедом и перерывами.",
        "group": [
          "miri",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Galeries Lafayette Haussmann Paris",
        "split": "shopping"
      },
      {
        "time": "Обед",
        "title": "Каждая группа в своём темпе",
        "description": "Обед и отдых на каждом маршруте; взрослые согласуют время общей встречи.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "После обеда",
        "title": "Возвращаемся и сдаём машину",
        "description": "Точный пункт возврата ещё не выбран. Проверить время закрытия перед поездкой в музей.",
        "group": [
          "dan",
          "grandpa",
          "ariel",
          "tai"
        ],
        "status": "В планах"
      },
      {
        "time": "Вечер",
        "title": "Все за одним столом",
        "description": "Встречаемся в Париже и делимся открытиями дня.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "Авиация в спокойном темпе",
        "description": "Заранее выбрать две экспозиции и оставить время на отдых. Дедушка может сократить визит, не меняя план покупок другой группы.",
        "group": [
          "dan",
          "grandpa",
          "ariel",
          "tai"
        ],
        "url": "https://www.museeairespace.fr/visiteurs/horaires/"
      },
      {
        "title": "Покупки в одном месте",
        "description": "Выбрать Осман или Ле-Аль, не переезжая между ними. Так меньше переходов с Тони и Лиз.",
        "group": [
          "miri",
          "tony",
          "liz"
        ]
      }
    ]
  },
  {
    "id": "2026-10-04",
    "date": "4.10",
    "weekday": "Воскресенье",
    "short": "Вс",
    "label": "Наука и магия",
    "symbol": "✧",
    "title": "День, когда наука встречает магию",
    "subtitle": "Изобретения · Николя Фламель · Маре · Сена",
    "area": "Маре + Сена",
    "mood": "Любопытство и немного алхимии",
    "hotel": "Edgar Suites Hameau · забронировано",
    "transport": "Метро и пешком · отдых на площади Вогезов",
    "documents": [
      "edgar",
      "planning"
    ],
    "missing": [
      "Билеты в Музей магии",
      "Подтверждение прогулки по Сене"
    ],
    "notes": [
      "Arts et Métiers открыт в воскресенье 10:00–18:00.",
      "Музей магии открыт в воскресенье 14:00–19:00; последний вход в 18:00.",
      "Прогулка по Сене предложена на вечер. Компания, причал и время ещё не выбраны."
    ],
    "events": [
      {
        "time": "10:00",
        "title": "Машины, изменившие мир",
        "description": "Музей Arts et Métiers: изобретения и вычислительные приборы. Группа с малышками может сократить посещение.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "url": "https://www.arts-et-metiers.net/musee/horaires-et-acces",
        "map": "Musee des Arts et Metiers Paris"
      },
      {
        "time": "12:00",
        "title": "По следам Николя Фламеля",
        "description": "Остановка снаружи у дома 51 Rue de Montmorency. Связь с историей алхимии, а не место съёмок «Гарри Поттера».",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "51 Rue de Montmorency Paris"
      },
      {
        "time": "13:00",
        "title": "Пауза на площади Вогезов",
        "description": "Обед и отдых перед продолжением дня.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Place des Vosges Paris"
      },
      {
        "time": "15:00",
        "title": "Магия в старинном подвале",
        "description": "Musée de la Magie — иллюзии и представление. Перед бронированием проверить наличие билетов, язык выступления и доступность помещения.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "url": "https://museedelamagie.com/?page_id=154",
        "map": "Musee de la Magie Paris"
      },
      {
        "time": "Вечер по силам",
        "title": "Париж с воды",
        "description": "Прогулка по Сене, только если останутся силы. Время подберём под выбранные причал и компанию.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "Короткая семейная программа",
        "description": "Главное в этот день — площадь Вогезов и Музей магии; часть посещения научного музея можно пропустить.",
        "group": [
          "miri",
          "tony",
          "liz"
        ],
        "url": "https://museedelamagie.com/?page_id=154"
      },
      {
        "title": "Ещё немного изобретений",
        "description": "Дан и Ариэль могут задержаться в музее и встретиться со всеми на площади Вогезов.",
        "group": [
          "dan",
          "ariel"
        ],
        "url": "https://www.arts-et-metiers.net/musee/horaires-et-acces"
      }
    ]
  },
  {
    "id": "2026-10-05",
    "date": "5.10",
    "weekday": "Понедельник",
    "short": "Пн",
    "label": "Наука и Эйфель",
    "symbol": "↟",
    "title": "От бесконечности к горизонту",
    "subtitle": "Латинский квартал · маятник Фуко · Эйфелева башня",
    "area": "Латинский квартал + Эйфелева башня",
    "mood": "День больших вопросов",
    "hotel": "Edgar Suites Hameau · забронировано",
    "transport": "Метро и пешком · переезд к Эйфелевой башне",
    "documents": [
      "edgar",
      "planning"
    ],
    "missing": [
      "Билет на Эйфелеву башню и время входа",
      "Билеты в Maison Poincaré"
    ],
    "notes": [
      "Исправление исходного плана: в понедельник Maison Poincaré открывается в 14:00, а не утром.",
      "Музей рассчитан преимущественно на посетителей от 12 лет; на сайте указан семейный маршрут от 7 лет. С колясками вход запрещён.",
      "В исходном плане указано, что билеты на Эйфелеву башню куплены, но сам билет не приложен. Расписание дня нужно подстроить под него."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Маятник Фуко",
        "description": "Планируем посещение Пантеона и рассказ о вращении Земли. Точные часы посещения ещё не проверены.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Pantheon Paris"
      },
      {
        "time": "Обед",
        "title": "Пауза в Латинском квартале",
        "description": "Обед и отдых до открытия музея математики. Можно спокойно провести время в Люксембургском саду.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Jardin du Luxembourg Paris"
      },
      {
        "time": "14:00",
        "title": "В гости к бесконечности",
        "description": "Maison Poincaré. Предложенное время учитывает часы работы, но зависит от времени входа на Эйфелеву башню.",
        "group": [
          "dan",
          "ariel",
          "tai"
        ],
        "status": "В планах",
        "url": "https://www.ihp.fr/fr/informations-pratiques",
        "map": "Maison Poincare Paris",
        "split": "science"
      },
      {
        "time": "В это время",
        "title": "Спокойная команда в саду",
        "description": "Мири, дедушка, Тони и Лиз могут отдохнуть в Люксембургском саду до общей встречи.",
        "group": [
          "miri",
          "grandpa",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Jardin du Luxembourg Paris",
        "split": "shopping"
      },
      {
        "time": "По билету",
        "title": "Железная леди",
        "description": "Встречаемся и поднимаемся на Эйфелеву башню на лифте. Время входа неизвестно; при совпадении приоритет у билета на башню, музей переносим или пропускаем.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Требуется билет для проверки",
        "map": "Eiffel Tower Paris"
      }
    ],
    "options": [
      {
        "title": "Эйфелева башня — в приоритете",
        "description": "Если вход на башню назначен на середину дня, пропускаем музей математики. Не пытаемся вместить оба посещения в короткий промежуток.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ]
      },
      {
        "title": "Разделяемся ради математики",
        "description": "Дан, Ариэль и Тай в музее с 14:00; Мири, дедушка и малышки в саду. Встречаемся перед поездкой к башне.",
        "group": [
          "dan",
          "ariel",
          "tai"
        ],
        "url": "https://www.ihp.fr/fr/informations-pratiques"
      }
    ]
  },
  {
    "id": "2026-10-06",
    "date": "6.10",
    "weekday": "Вторник",
    "short": "Вт",
    "label": "Прощание с Парижем",
    "symbol": "♡",
    "title": "Ещё немного Парижа",
    "subtitle": "Монмартр · волшебные палочки · прощальный ужин",
    "area": "Монмартр + Батиньоль",
    "mood": "Собираем последние впечатления",
    "hotel": "Edgar Suites Hameau · ночь 5 из 5 · забронировано",
    "transport": "Общественный транспорт · фуникулёр при необходимости",
    "documents": [
      "edgar",
      "planning",
      "inbound"
    ],
    "missing": [
      "Трансфер в аэропорт утром 7.10"
    ],
    "notes": [
      "Исправление плана: кафе Aux 2 Balais в Bercy работало до октября 2025 года. Здесь запланирован магазин по адресу 61 Boulevard des Batignolles.",
      "По сайту магазин открыт во вторник 10:00–13:00 и 13:45–19:00. Кафе и сливочное пиво не гарантированы.",
      "Не оставляем сбор вещей и заказ трансфера на последний момент."
    ],
    "events": [
      {
        "time": "Утро",
        "title": "Париж с высоты",
        "description": "Монмартр, панорама и площадь художников. При необходимости пользуемся фуникулёром и выбираем короткую прогулку.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Place du Tertre Paris"
      },
      {
        "time": "Обед",
        "title": "Обед и ещё одна передышка",
        "description": "Отдыхаем в районе перед поездкой в магазин. Уставшая группа может на этом закончить прогулку.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      },
      {
        "time": "После обеда",
        "title": "Палочки и сувениры",
        "description": "La Boutique Aux 2 Balais, филиал Batignolles. Магазин «Гарри Поттера» по актуальному адресу.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "61 Boulevard des Batignolles Paris",
        "url": "https://laboutiqueaux2balais.com/pages/notre-histoire"
      },
      {
        "time": "Вечер",
        "title": "Прощальный ужин и чемоданы",
        "description": "Готовим багаж, документы на рейс и трансфер в Орли. Завтра вылет, без дополнительных достопримечательностей.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах"
      }
    ],
    "options": [
      {
        "title": "Короткий день для уставших",
        "description": "Мири, дедушка и малышки могут пропустить часть прогулки по улочкам Монмартра и встретиться со всеми за обедом.",
        "group": [
          "miri",
          "grandpa",
          "tony",
          "liz"
        ]
      },
      {
        "title": "Больше времени в волшебном магазине",
        "description": "Дан и дети, которым нравится «Гарри Поттер», могут задержаться в магазине, согласовав это с остальными.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "url": "https://laboutiqueaux2balais.com/pages/notre-histoire"
      }
    ]
  },
  {
    "id": "2026-10-07",
    "date": "7.10",
    "weekday": "Среда",
    "short": "Ср",
    "label": "Домой",
    "symbol": "✈",
    "title": "Au revoir, Paris",
    "subtitle": "Париж-Орли → Тель-Авив",
    "area": "По пути домой",
    "mood": "Увозим воспоминания",
    "hotel": "Edgar Suites Hameau · выезд до 11:00",
    "transport": "Трансфер в Орли + обратный рейс",
    "documents": [
      "edgar",
      "inbound",
      "planning"
    ],
    "missing": [
      "Подтверждение трансфера в Орли"
    ],
    "notes": [
      "07:00 — предложенное время выезда, не подтверждённое время подачи машины. Уточнить с учётом расположения отеля, дорожной обстановки и требований авиакомпании.",
      "Прилёт в Израиль в 16:05 по снимку подтверждения. Везде указано местное время."
    ],
    "events": [
      {
        "time": "07:00, ориентир",
        "title": "Из Edgar в Орли",
        "description": "Ранний выезд из апартаментов на 38 Rue du Hameau и трансфер. Заранее проверить терминал, багаж и время подачи машины с учётом требований регистрации.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "В планах",
        "map": "Paris Orly Airport"
      },
      {
        "time": "10:30",
        "title": "Летим домой",
        "description": "Transavia · TO3454 · из Парижа-Орли (ORY) в Тель-Авив (TLV).",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом",
        "kind": "flight",
        "flight": {
          "from": "ORY",
          "to": "TLV",
          "departure": "10:30",
          "arrival": "16:05",
          "number": "TO3454"
        }
      },
      {
        "time": "16:05",
        "title": "Здравствуй, дом",
        "description": "Прилёт в Тель-Авив и получение багажа.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ],
        "status": "Подтверждено документом"
      }
    ],
    "options": [
      {
        "title": "Выехать раньше",
        "description": "Если отель далеко, водитель советует или авиакомпания требует раннего прибытия — выезжаем до 07:00. Других планов на утро нет.",
        "group": [
          "dan",
          "grandpa",
          "miri",
          "ariel",
          "tai",
          "tony",
          "liz"
        ]
      }
    ]
  }
];
export function relevantForTraveler(items,traveler){return items.filter(item=>traveler==='all'||item.group.includes(traveler));}
export function getEvents(day,plan){return day.alternateEvents&&plan==='disney'?day.alternateEvents:day.events;}
export function resolveDayIndex(hash){const requested=new URLSearchParams(hash.replace(/^#/, '')).get('day');const index=days.findIndex(day=>day.id===requested);return index<0?0:index;}
