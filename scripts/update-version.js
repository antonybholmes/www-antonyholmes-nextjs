const fs = require("fs")
const datefns = require("date-fns")
const updateEnv = require("./update-env.js")

const env = JSON.parse(fs.readFileSync("./env.json"))

const inception = new Date(env.INCEPTION)
const patch = env.PATCH + 1
const now = Date.now()

// new version every month
const major = datefns.differenceInYears(now, inception) + 1 //datefns.format(now, "yyyy") //datefns.differenceInMonths(now, inception)

const minor = datefns.differenceInMonths(now, inception) + 1 //datefns.format(now, "MM") //datefns.differenceInMonths(now, inception) //datefns.format(now, 'dd')

// patch is offset in minutes this week
const build = datefns.differenceInDays(now, inception) + 1 //datefns.format(now, "dd") //datefns.differenceInDays(now, inception)

version = `${major}.${minor}.${build}.${patch}` //datefns.format(Date.now(), 'yyyy.MM.dd.HHmmss')

console.log(version)

const envUpdate = {
  PATCH: patch,
  VERSION: version,
  UPDATED: datefns.format(now, "LLLL d, yyyy"),
}

updateEnv(envUpdate)
