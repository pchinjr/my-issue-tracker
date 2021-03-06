let tiny = require('tiny-json-http')
let data = require('@begin/data')

exports.handler = async function scheduled(event) {
  console.log(JSON.stringify(event, null, 2))
  let date = new Date().toLocaleDateString()
  let url = 'https://api.github.com/repositories/137939671/issues'
  const issues = await tiny.get({ url })
  let numberOfIssues = issues.body.length

  //save the number of issues per day
  await data.set({
    table: 'issues',
    number: numberOfIssues,
    date: date
  })

  return
}