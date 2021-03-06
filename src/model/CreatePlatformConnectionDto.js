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

import ApiClient from '../ApiClient';

/**
 * The CreatePlatformConnectionDto model module.
 * @module model/CreatePlatformConnectionDto
 * @version 0.1
 */
class CreatePlatformConnectionDto {
    /**
     * Constructs a new <code>CreatePlatformConnectionDto</code>.
     * @alias module:model/CreatePlatformConnectionDto
     * @param profileId {String} 
     * @param platform {String} 
     */
    constructor(profileId, platform) { 
        
        CreatePlatformConnectionDto.initialize(this, profileId, platform);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, profileId, platform) { 
        obj['profile_id'] = profileId;
        obj['platform'] = platform;
    }

    /**
     * Constructs a <code>CreatePlatformConnectionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePlatformConnectionDto} obj Optional instance to populate.
     * @return {module:model/CreatePlatformConnectionDto} The populated <code>CreatePlatformConnectionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePlatformConnectionDto();

            if (data.hasOwnProperty('userid')) {
                obj['userid'] = ApiClient.convertToType(data['userid'], 'String');
            }
            if (data.hasOwnProperty('profile_id')) {
                obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
            }
            if (data.hasOwnProperty('auth_token')) {
                obj['auth_token'] = ApiClient.convertToType(data['auth_token'], 'String');
            }
            if (data.hasOwnProperty('token_secret')) {
                obj['token_secret'] = ApiClient.convertToType(data['token_secret'], 'String');
            }
            if (data.hasOwnProperty('auth_expiration')) {
                obj['auth_expiration'] = ApiClient.convertToType(data['auth_expiration'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userid
 */
CreatePlatformConnectionDto.prototype['userid'] = undefined;

/**
 * @member {String} profile_id
 */
CreatePlatformConnectionDto.prototype['profile_id'] = undefined;

/**
 * @member {String} platform
 */
CreatePlatformConnectionDto.prototype['platform'] = undefined;

/**
 * @member {Array.<String>} emails
 */
CreatePlatformConnectionDto.prototype['emails'] = undefined;

/**
 * @member {String} name
 */
CreatePlatformConnectionDto.prototype['name'] = undefined;

/**
 * @member {Number} phone
 */
CreatePlatformConnectionDto.prototype['phone'] = undefined;

/**
 * @member {String} auth_token
 */
CreatePlatformConnectionDto.prototype['auth_token'] = undefined;

/**
 * @member {String} token_secret
 */
CreatePlatformConnectionDto.prototype['token_secret'] = undefined;

/**
 * @member {Date} auth_expiration
 */
CreatePlatformConnectionDto.prototype['auth_expiration'] = undefined;






export default CreatePlatformConnectionDto;

