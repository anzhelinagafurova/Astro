export default class AstroService {
  //data = [];

  sendDataPost(data, url) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}
  //   let ws = new WebSocket('wss://dating-app-urfu.herokuapp.com/ws/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDA0MjA5NTgsIm5iZiI6MCwiZXhwIjoxNjQwNDI0NTU4LCJzdWIiOiI2IiwidXNlciI6eyJpZCI6NiwicGhvbmUiOiIwMjk1ODk0ODUzIn19.2lPi1FKMpmFt-yfyL-YZd9QbA5sp9dWt966UKZG_8D4');
  //   ws.onmessage = function(event) {
  //     var msg = JSON.parse(event.data)
  //     console.log(msg)
  // }

  // console.log(JSON.stringify(userInfo))
    // fetch('/auth/test_auth', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDA0MjA5NTgsIm5iZiI6MCwiZXhwIjoxNjQwNDI0NTU4LCJzdWIiOiI2IiwidXNlciI6eyJpZCI6NiwicGhvbmUiOiIwMjk1ODk0ODUzIn19.2lPi1FKMpmFt-yfyL-YZd9QbA5sp9dWt966UKZG_8D4'
    //   }
    // })

          // setUserName(answer.name)
      // setWelcomeMessage(answer.welcome_msg)
      // setProlifePhoto(answer.image_link)
      // setId(answer.id)

          // if (answer.status === 1) {
    //   alert("Password is incorrect!")
    // }
    // if (answer.status === 2) {
    //   const { history } = this.props;
    //   history.push('/edit');
    // }
    // })