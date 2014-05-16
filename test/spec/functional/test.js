/* global casper */
'use strict';

casper.test.begin('A Twitter Bootstrap dropdown can be opened', 3, function(test) {
    casper.start('http://getbootstrap.com/2.3.2/javascript.html#dropdowns', function() {
        casper.echo('\n1. Verify HTTP connection:');
        test.assertHttpStatus(200);

        casper.echo('\n2. Verify #navbar-example exists:');
        test.assertExists('#navbar-example');

        casper.echo('\nClick the dropdown...');
        this.click('#dropdowns .nav-pills .dropdown:last-of-type a.dropdown-toggle');

        casper.echo('\n3. Wait for the dropdown to open...');
        this.waitUntilVisible('#dropdowns .nav-pills .open', function() {
            test.pass('Dropdown is open\n');
        });
    }).run(function() {
        test.done();
    });
});
