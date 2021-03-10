@app
my-issue-tracker

@http
get /

@scheduled
issues rate(1 day)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
