/**
 * Created by fernando on 6/9/16.
 */
var jade = require('jade');

// compile
var fn = jade.compile('string of jade', options);
var html = fn(locals);

// renderFile
var html = jade.renderFile('templates/jade/marketplace.jade', merge('marketplace', locals));
