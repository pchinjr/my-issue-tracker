@app
my-issue-tracker

@http
get /
get /testIssues

@scheduled
issues rate(5 minutes)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL


@aws
profile begin
region us-east-1