firebase.initializeApp({
	databaseURL: 'https://dht11capstone.firebaseio.com/'
})

const db = firebase.database()
const ref = db.ref('sensors')
let keys
let k

function getDB(){ 
  ref.on('value', data => { 
    let html = '<div class="display"><table><tr>'
    let values = data.val()
    let keys = Object.keys(values)
    console.log(keys)
    for (let i = 0; i < keys.length; i++) {
      k = keys[i]
      let temp = values[k].temperature
      let hum = values[k].humidity
      let date = values[k].timestamp 
      let moi = values[k].moisture
      let lux = values[k].light     
    }
    let seconds = values[k].timestamp
    let d = new Date(seconds*1000)
    console.log(values[k])
   	html += '<tr><td>Temperature</td><td>' + values[k].temperature +' *C</td></tr>'
  	html += '<tr><td>Humidity</td><td>' + values[k].humidity +' %</td></tr>'
    html += '<tr><td>Moisture</td><td>' + values[k].moisture +' %</td></tr>'
    html += '<tr><td>Light</td><td>' + values[k].light +' Lux</td></tr>'
  	html += '<tr><td>Date</td><td>' + d +'</td></tr>'
    html += '</tr></table></div>'
    document.getElementById('history').innerHTML = html     
  })
}

getDB()