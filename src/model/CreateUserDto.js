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
 * The CreateUserDto model module.
 * @module model/CreateUserDto
 * @version 0.1
 */
class CreateUserDto {
    /**
     * Constructs a new <code>CreateUserDto</code>.
     * @alias module:model/CreateUserDto
     */
    constructor() { 
        
        CreateUserDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateUserDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserDto} obj Optional instance to populate.
     * @return {module:model/CreateUserDto} The populated <code>CreateUserDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserDto();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
CreateUserDto.prototype['firstName'] = undefined;

/**
 * @member {String} email
 */
CreateUserDto.prototype['email'] = undefined;

/**
 * @member {Array.<String>} emails
 */
CreateUserDto.prototype['emails'] = undefined;

/**
 * @member {String} timezone
 */
CreateUserDto.prototype['timezone'] = undefined;

/**
 * @member {Date} createdAt
 */
CreateUserDto.prototype['createdAt'] = undefined;






export default CreateUserDto;

