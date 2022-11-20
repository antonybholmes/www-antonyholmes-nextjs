const axios = require("axios")

const CALENDAR_ID = "t3n1b5bkpmtgf546khvpq6oglc@group.calendar.google.com"
const API_KEY = "AIzaSyBj1KBwlLU7jrY2eFkhsYg9DHV2dqqzadA"
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents(callback) {
  axios.get(url).then(resp => {
    const events = []

    resp.data.items.map(e => {
      events.push({
        start: e.start.date || e.start.dateTime,
        end: e.end.date || e.end.dateTime,
        title: e.summary,
        location: e.location,
        notes: e.notes,
      })
    })

    callback(events)
  })
}
