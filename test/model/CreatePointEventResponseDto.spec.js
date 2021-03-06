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
    instance = new EarthpointsApi.CreatePointEventResponseDto();
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

  describe('CreatePointEventResponseDto', function() {
    it('should create an instance of CreatePointEventResponseDto', function() {
      // uncomment below and update the code to test CreatePointEventResponseDto
      //var instance = new EarthpointsApi.CreatePointEventResponseDto();
      //expect(instance).to.be.a(EarthpointsApi.CreatePointEventResponseDto);
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instance = new EarthpointsApi.CreatePointEventResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new EarthpointsApi.CreatePointEventResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property userTotalPoints (base name: "userTotalPoints")', function() {
      // uncomment below and update the code to test the property userTotalPoints
      //var instance = new EarthpointsApi.CreatePointEventResponseDto();
      //expect(instance).to.be();
    });

  });

}));
