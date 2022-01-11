export default class AstroService {
  
  socialTypes = ['Не выбрано', 'ИЛЭ (Дон Кихот)', 'СЭИ (Дюма)', 'ЭСЭ (Гюго)', 'ЛИИ (Робеспьер)', 'ИЭИ (Есенин)', 'СЛЭ (Жуков)', 'ЭИЭ (Гамлет)', 'ЛСИ (Максим Горький)',
        'ИЛИ (Бальзак)', 'СЭЭ (Наполеон)', 'ЭСИ (Драйзер)', 'ЛИЭ (Джек Лондон)', 'ЛСЭ (Шритлиц)', 'ЭИИ (Достоевский)', 'ИЭЭ (Гексли)', 'СЛИ (Габен)'];

  sixteenPersTypes = ['Не выбрано', 'Стратег (INTJ-A / INTJ-T)', 'Ученый (INTP-A / INTP-T)', "Командир (ENTJ-A / ENTJ-T)", "Полемист (ENTP-A / ENTP-T)",
      "Активист (INFJ-A / INFJ-T)", "Посредник (INFP-A / INFP-T)", "Тренер (ENFJ-A / ENFJ-T)", "Борец (ENFP-A / ENFP-T)",
      "Администратор (ISTJ-A / ISTJ-T)", "Защитник (ISFJ-A / ISFJ-T)", "Менеджер (ESTJ-A / ESTJ-T)", "Консул (ESFJ-A / ESFJ-T)",
      "Виртуоз (ISTP-A / ISTP-T)", "Артист (ISFP-A / ISFP-T)", "Делец (ESTP-A / ESTP-T)", "Развлекатель (ESFP-A / ESFP-T)"]

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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.token
      },
      body: JSON.stringify(data)
    })
  }
}
