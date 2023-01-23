import fs from "fs"
import datefns from "date-fns"
import {updateConfig } from "./update-config.mjs"

const config = JSON.parse(fs.readFileSync("./config.json"))

const inception = new Date(config.INCEPTION)
const patch = config.PATCH + 1
const now = Date.now()

// new version every month
const major = datefns.differenceInYears(now, inception) + 1 //datefns.format(now, "yyyy") //datefns.differenceInMonths(now, inception)

const minor = datefns.differenceInMonths(now, inception) + 1 //datefns.format(now, "MM") //datefns.differenceInMonths(now, inception) //datefns.format(now, 'dd')

// patch is offset in minutes this week
const build = datefns.differenceInDays(now, inception) + 1 //datefns.format(now, "dd") //datefns.differenceInDays(now, inception)

const version = `${major}.${minor}.${build}.${patch}` //datefns.format(Date.now(), 'yyyy.MM.dd.HHmmss')

console.log(version)

const envUpdate = {
  PATCH: patch,
  VERSION: version,
  UPDATED: datefns.format(now, "LLLL d, yyyy"),
}

updateConfig(envUpdate)
