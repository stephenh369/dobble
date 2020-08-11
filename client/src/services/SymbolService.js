const baseURL = "http://localhost:3000/api/symbols/"

export default {
    getSymbols(){
        return fetch(baseURL)
        .then(res => res.json())
      }
}
