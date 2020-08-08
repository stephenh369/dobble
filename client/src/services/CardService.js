const baseURL = "http://localhost:3000/api/cards/"

export default {
    getCards(){
        return fetch(baseURL)
        .then(res => res.json())
      }
}