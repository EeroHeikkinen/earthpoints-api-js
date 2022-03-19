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
    instance = new EarthpointsApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('appControllerCreate', function() {
      it('should call appControllerCreate successfully', function(done) {
        //uncomment below and update the code to test appControllerCreate
        //instance.appControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerDashboard', function() {
      it('should call appControllerDashboard successfully', function(done) {
        //uncomment below and update the code to test appControllerDashboard
        //instance.appControllerDashboard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerFacebookConnect', function() {
      it('should call appControllerFacebookConnect successfully', function(done) {
        //uncomment below and update the code to test appControllerFacebookConnect
        //instance.appControllerFacebookConnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerFacebookConnectRedirect', function() {
      it('should call appControllerFacebookConnectRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerFacebookConnectRedirect
        //instance.appControllerFacebookConnectRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerFacebookLogin', function() {
      it('should call appControllerFacebookLogin successfully', function(done) {
        //uncomment below and update the code to test appControllerFacebookLogin
        //instance.appControllerFacebookLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerFacebookLoginRedirect', function() {
      it('should call appControllerFacebookLoginRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerFacebookLoginRedirect
        //instance.appControllerFacebookLoginRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerInstagramConnect', function() {
      it('should call appControllerInstagramConnect successfully', function(done) {
        //uncomment below and update the code to test appControllerInstagramConnect
        //instance.appControllerInstagramConnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerInstagramConnectRedirect', function() {
      it('should call appControllerInstagramConnectRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerInstagramConnectRedirect
        //instance.appControllerInstagramConnectRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerInstagramLogin', function() {
      it('should call appControllerInstagramLogin successfully', function(done) {
        //uncomment below and update the code to test appControllerInstagramLogin
        //instance.appControllerInstagramLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerInstagramLoginRedirect', function() {
      it('should call appControllerInstagramLoginRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerInstagramLoginRedirect
        //instance.appControllerInstagramLoginRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerLanding', function() {
      it('should call appControllerLanding successfully', function(done) {
        //uncomment below and update the code to test appControllerLanding
        //instance.appControllerLanding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerLoginWithClientCredentials', function() {
      it('should call appControllerLoginWithClientCredentials successfully', function(done) {
        //uncomment below and update the code to test appControllerLoginWithClientCredentials
        //instance.appControllerLoginWithClientCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerLogout', function() {
      it('should call appControllerLogout successfully', function(done) {
        //uncomment below and update the code to test appControllerLogout
        //instance.appControllerLogout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerPointBadge', function() {
      it('should call appControllerPointBadge successfully', function(done) {
        //uncomment below and update the code to test appControllerPointBadge
        //instance.appControllerPointBadge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerSse', function() {
      it('should call appControllerSse successfully', function(done) {
        //uncomment below and update the code to test appControllerSse
        //instance.appControllerSse(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerTwitterConnect', function() {
      it('should call appControllerTwitterConnect successfully', function(done) {
        //uncomment below and update the code to test appControllerTwitterConnect
        //instance.appControllerTwitterConnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerTwitterConnectRedirect', function() {
      it('should call appControllerTwitterConnectRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerTwitterConnectRedirect
        //instance.appControllerTwitterConnectRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerTwitterLogin', function() {
      it('should call appControllerTwitterLogin successfully', function(done) {
        //uncomment below and update the code to test appControllerTwitterLogin
        //instance.appControllerTwitterLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appControllerTwitterLoginRedirect', function() {
      it('should call appControllerTwitterLoginRedirect successfully', function(done) {
        //uncomment below and update the code to test appControllerTwitterLoginRedirect
        //instance.appControllerTwitterLoginRedirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emailTemplateControllerCreate', function() {
      it('should call emailTemplateControllerCreate successfully', function(done) {
        //uncomment below and update the code to test emailTemplateControllerCreate
        //instance.emailTemplateControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emailTemplateControllerEditByDay', function() {
      it('should call emailTemplateControllerEditByDay successfully', function(done) {
        //uncomment below and update the code to test emailTemplateControllerEditByDay
        //instance.emailTemplateControllerEditByDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emailTemplateControllerIndex', function() {
      it('should call emailTemplateControllerIndex successfully', function(done) {
        //uncomment below and update the code to test emailTemplateControllerIndex
        //instance.emailTemplateControllerIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformConnectionControllerCreate', function() {
      it('should call platformConnectionControllerCreate successfully', function(done) {
        //uncomment below and update the code to test platformConnectionControllerCreate
        //instance.platformConnectionControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformConnectionControllerFindAll', function() {
      it('should call platformConnectionControllerFindAll successfully', function(done) {
        //uncomment below and update the code to test platformConnectionControllerFindAll
        //instance.platformConnectionControllerFindAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformConnectionControllerFindOne', function() {
      it('should call platformConnectionControllerFindOne successfully', function(done) {
        //uncomment below and update the code to test platformConnectionControllerFindOne
        //instance.platformConnectionControllerFindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformConnectionControllerRemove', function() {
      it('should call platformConnectionControllerRemove successfully', function(done) {
        //uncomment below and update the code to test platformConnectionControllerRemove
        //instance.platformConnectionControllerRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformConnectionControllerUpdate', function() {
      it('should call platformConnectionControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test platformConnectionControllerUpdate
        //instance.platformConnectionControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pointEventControllerFindAll', function() {
      it('should call pointEventControllerFindAll successfully', function(done) {
        //uncomment below and update the code to test pointEventControllerFindAll
        //instance.pointEventControllerFindAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pointEventControllerFindOne', function() {
      it('should call pointEventControllerFindOne successfully', function(done) {
        //uncomment below and update the code to test pointEventControllerFindOne
        //instance.pointEventControllerFindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pointEventControllerRemove', function() {
      it('should call pointEventControllerRemove successfully', function(done) {
        //uncomment below and update the code to test pointEventControllerRemove
        //instance.pointEventControllerRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pointEventControllerUpdate', function() {
      it('should call pointEventControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test pointEventControllerUpdate
        //instance.pointEventControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerCreate', function() {
      it('should call userControllerCreate successfully', function(done) {
        //uncomment below and update the code to test userControllerCreate
        //instance.userControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerFindOne', function() {
      it('should call userControllerFindOne successfully', function(done) {
        //uncomment below and update the code to test userControllerFindOne
        //instance.userControllerFindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerFindOneByEmail', function() {
      it('should call userControllerFindOneByEmail successfully', function(done) {
        //uncomment below and update the code to test userControllerFindOneByEmail
        //instance.userControllerFindOneByEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerRemove', function() {
      it('should call userControllerRemove successfully', function(done) {
        //uncomment below and update the code to test userControllerRemove
        //instance.userControllerRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerUpdate', function() {
      it('should call userControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test userControllerUpdate
        //instance.userControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userControllerUserFromExternalPlatformData', function() {
      it('should call userControllerUserFromExternalPlatformData successfully', function(done) {
        //uncomment below and update the code to test userControllerUserFromExternalPlatformData
        //instance.userControllerUserFromExternalPlatformData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
