/**
 * Earthpoints API
 * Earthpoints API description
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EarthpointsApi);
  }
}(this, function(expect, EarthpointsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EarthpointsApi.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be.a(EarthpointsApi.User);
    });

    it('should have the property userid (base name: "userid")', function() {
      // uncomment below and update the code to test the property userid
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "points")', function() {
      // uncomment below and update the code to test the property points
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastEmailed (base name: "lastEmailed")', function() {
      // uncomment below and update the code to test the property lastEmailed
      //var instance = new EarthpointsApi.User();
      //expect(instance).to.be();
    });

  });

}));
