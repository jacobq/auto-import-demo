# eai-alias-issue

```sh
$ git checkout 5cd08f1e8b6cf5ec752393cc423e7d1bafa32ca6
$ yarn
$ ember s
# Browse http://localhost:4200
# Observe error in console:
# memory adapter plugin error: Cannot find global "PouchDB" object! Did you remember to include pouchdb.js?
```

Note: can work around this particular case by using `pouchdb-adapter-memory` package, but isn't there a way to do this in ember-auto-import/webpack? Not sure what I'm doing wrong / why it doesn't work.
