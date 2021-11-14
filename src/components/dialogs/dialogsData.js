export default class AstroService {
    dialogData = {
        "data":[
            {
                "id": "76f64",
                "name": "Анна",
                "image": "https://games-of-thrones.ru/sites/default/files/pictures/alll/AnnaMiha/48.jpg",
                "lastMessage": "Привет, ты мне понравился..",
                "time": "10м"
            },
            {
                "id": "76f65",
                "name": "Алексей",
                "image": "https://gdezhivet.com/wp-content/uploads/2019/07/Алексей-Воробьев-1.jpg",
                "lastMessage": "Мне нравятся парни",
                "time": "1ч"
            }
        ]
    }

    getMockedData() {
        return new Promise((resolve) => {
            resolve(this.dialogData, 500)
        })
    }
}
