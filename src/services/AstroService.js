export default class AstroService {
  
  socialTypes = ['Не выбрано', 'ИЛЭ (Дон Кихот)', 'СЭИ (Дюма)', 'ЭСЭ (Гюго)', 'ЛИИ (Робеспьер)', 'ИЭИ (Есенин)', 'СЛЭ (Жуков)', 'ЭИЭ (Гамлет)', 'ЛСИ (Максим Горький)',
        'ИЛИ (Бальзак)', 'СЭЭ (Наполеон)', 'ЭСИ (Драйзер)', 'ЛИЭ (Джек Лондон)', 'ЛСЭ (Шритлиц)', 'ЭИИ (Достоевский)', 'ИЭЭ (Гексли)', 'СЛИ (Габен)'];

  sixteenPersTypes = ['Не выбрано', 'Стратег (INTJ-A / INTJ-T)', 'Ученый (INTP-A / INTP-T)', "Командир (ENTJ-A / ENTJ-T)", "Полемист (ENTP-A / ENTP-T)",
      "Активист (INFJ-A / INFJ-T)", "Посредник (INFP-A / INFP-T)", "Тренер (ENFJ-A / ENFJ-T)", "Борец (ENFP-A / ENFP-T)",
      "Администратор (ISTJ-A / ISTJ-T)", "Защитник (ISFJ-A / ISFJ-T)", "Менеджер (ESTJ-A / ESTJ-T)", "Консул (ESFJ-A / ESFJ-T)",
      "Виртуоз (ISTP-A / ISTP-T)", "Артист (ISFP-A / ISFP-T)", "Делец (ESTP-A / ESTP-T)", "Развлекатель (ESFP-A / ESFP-T)"]

  people = [
    {
      name: "Эдуард",
      age: 22,
      city: "Екатеринбург",
      percent: 22,
      img: "https://sun9-28.userapi.com/impg/c858224/v858224481/2248af/GJL67cxNM0w.jpg?size=814x1017&quality=96&sign=f6d2cc9cf969a6e0ed1af64ae6f6a0db&type=album",
      socio: 60,
      pers: 80,
      number: 30,
      zz: 60,
      tpers: "Менеджер",
      tsocio: "Бальзак",
      tnumber: "9",
      tzz: 2
    },
    {
      name: "Снежана",
      age: 21,
      city: "Челябинск",
      percent: 22,
      img: "https://sun9-78.userapi.com/impg/lJDgKieNPqJHaB9Cmh3bD9Q9mPduZK-bA-Nvcw/4jBGj8GWXpU.jpg?size=852x1280&quality=96&sign=9689e12dfece27aa7867ceb0193b5c0d&type=album",
      socio: 60,
      pers: 80,
      number: 30,
      zz: 34,
      tpers: "Делец",
      tsocio: "Штирлиц",
      tnumber: "4",
      tzz: 3
    },
    {
      name: "Сергей",
      age: 20,
      city: "Екатеринбург",
      percent: 22,
      img: "https://sun9-86.userapi.com/impf/c855436/v855436307/108766/fF2Y-ntxxJE.jpg?size=810x1080&quality=96&sign=6de9ec5574009b75ac023138d152e0fd&type=album",
      socio: 60,
      pers: 80,
      number: 30,
      zz: 3,
      tpers: "Тренер",
      tsocio: "Гюго",
      tnumber: "4",
      tzz: 4
    },
    {
      name: "Евгения",
      age: 23,
      city: "Москва",
      percent: 87,
      img: "https://sun9-12.userapi.com/impg/c855616/v855616440/1d90ca/NzYqkXU_rc8.jpg?size=1080x1350&quality=96&sign=32a1526e87248f14b66984cd861d8b33&type=album",
      socio: 60,
      pers: 80,
      number: 30,
      zz: 50,
      tpers: "Посредник",
      tsocio: "Дюма",
      tnumber: "4",
      tzz: 5
    },

    {
      name: "Виктория",
      age: 21,
      city: "Москва",
      percent: 22,
      img: "https://c.pxhere.com/photos/27/67/girl_model_woman_posture_pretty_hair_long_hair-769830.jpg!d",
      socio: 60,
      pers: 80,
      number: 30,
      zz: 19,
      tpers: "Администратор",
      tsocio: "Наполеон",
      tnumber: "7",
      tzz: 6
    },
  ]

  sendDataPost(data, url) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  sendDataPut(data, url) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.token
      },
      //body: JSON.stringify(data)
    })
  }
}
