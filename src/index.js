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


import ApiClient from './ApiClient';
import ClientCredentialsDto from './model/ClientCredentialsDto';
import ClientCredentialsResponseDto from './model/ClientCredentialsResponseDto';
import CreatePlatformConnectionDto from './model/CreatePlatformConnectionDto';
import CreatePointEventDto from './model/CreatePointEventDto';
import CreatePointEventResponseDto from './model/CreatePointEventResponseDto';
import CreateUserDto from './model/CreateUserDto';
import PointEvent from './model/PointEvent';
import UpdatePointEventDto from './model/UpdatePointEventDto';
import User from './model/User';
import UserFromExternalPlatformDataDto from './model/UserFromExternalPlatformDataDto';
import DefaultApi from './api/DefaultApi';


/**
* Earthpoints_API_description.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EarthpointsApi = require('index'); // See note below*.
* var xxxSvc = new EarthpointsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EarthpointsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EarthpointsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EarthpointsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ClientCredentialsDto model constructor.
     * @property {module:model/ClientCredentialsDto}
     */
    ClientCredentialsDto,

    /**
     * The ClientCredentialsResponseDto model constructor.
     * @property {module:model/ClientCredentialsResponseDto}
     */
    ClientCredentialsResponseDto,

    /**
     * The CreatePlatformConnectionDto model constructor.
     * @property {module:model/CreatePlatformConnectionDto}
     */
    CreatePlatformConnectionDto,

    /**
     * The CreatePointEventDto model constructor.
     * @property {module:model/CreatePointEventDto}
     */
    CreatePointEventDto,

    /**
     * The CreatePointEventResponseDto model constructor.
     * @property {module:model/CreatePointEventResponseDto}
     */
    CreatePointEventResponseDto,

    /**
     * The CreateUserDto model constructor.
     * @property {module:model/CreateUserDto}
     */
    CreateUserDto,

    /**
     * The PointEvent model constructor.
     * @property {module:model/PointEvent}
     */
    PointEvent,

    /**
     * The UpdatePointEventDto model constructor.
     * @property {module:model/UpdatePointEventDto}
     */
    UpdatePointEventDto,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserFromExternalPlatformDataDto model constructor.
     * @property {module:model/UserFromExternalPlatformDataDto}
     */
    UserFromExternalPlatformDataDto,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
