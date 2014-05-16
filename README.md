# Boilerplate | CasperJS with Grunt

## Set Up
1. `npm install`
2. `grunt test`
    or
    ```
    grunt casper
    ```
    or
    `grunt casper:functional`

### Note
If you need to hit your local server (as opposed to the remote server in the example), you'll have to fire that up first.

E.g., `grunt serve` (if you have that configured in your Gruntfile).

[//]: # With my setup, after `grunt serve` I couldn't get `grunt test` or `grunt watch` to work.  But that's OK for now because `grunt serve` includes `grunt watch`, so it runs CasperJS whenever a JS file is changed.  And to run CasperJS manually, I can still use `grunt casper` or `grunt casper:functional` as long as I have already run `grunt serve`.

[//]: # TODO:  Add boilerplate for hitting a local server.
