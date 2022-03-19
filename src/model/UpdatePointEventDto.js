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
import UserFromExternalPlatformDataDto from './UserFromExternalPlatformDataDto';

/**
 * The UpdatePointEventDto model module.
 * @module model/UpdatePointEventDto
 * @version 0.1
 */
class UpdatePointEventDto {
    /**
     * Constructs a new <code>UpdatePointEventDto</code>.
     * @alias module:model/UpdatePointEventDto
     */
    constructor() { 
        
        UpdatePointEventDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePointEventDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePointEventDto} obj Optional instance to populate.
     * @return {module:model/UpdatePointEventDto} The populated <code>UpdatePointEventDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePointEventDto();

            if (data.hasOwnProperty('hashString')) {
                obj['hashString'] = ApiClient.convertToType(data['hashString'], 'String');
            }
            if (data.hasOwnProperty('userid')) {
                obj['userid'] = ApiClient.convertToType(data['userid'], 'String');
            }
            if (data.hasOwnProperty('externalPlatformUserData')) {
                obj['externalPlatformUserData'] = ApiClient.convertToType(data['externalPlatformUserData'], [UserFromExternalPlatformDataDto]);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('isBurn')) {
                obj['isBurn'] = ApiClient.convertToType(data['isBurn'], 'Boolean');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * The hash string is used to make sure each event will only result in points awarded once. It should be unique for each event and user, in such a way the same hashString will predictably get generated if the same event was sent again. For example, it could be the string \"created-pledge-page\" followed by the user's id in another system.
 * @member {String} hashString
 */
UpdatePointEventDto.prototype['hashString'] = undefined;

/**
 * Already existing User UUID in the system. One of this or an email is required.
 * @member {String} userid
 */
UpdatePointEventDto.prototype['userid'] = undefined;

/**
 * External platform user data. This is used to identify the correct user. If no user is found, a new user will be created and tagged with the provided external credentials.
 * @member {Array.<module:model/UserFromExternalPlatformDataDto>} externalPlatformUserData
 */
UpdatePointEventDto.prototype['externalPlatformUserData'] = undefined;

/**
 * Email to associate the points with. If an user with this email is not found, a new user will be created. One of this or an User UUID is required.
 * @member {String} email
 */
UpdatePointEventDto.prototype['email'] = undefined;

/**
 * Icon to display in web interface (Font Awesome version 6.0.0)
 * @member {String} icon
 */
UpdatePointEventDto.prototype['icon'] = undefined;

/**
 * The verb to display along with the point event in user interfaces. For example: \"You connected Facebook\"
 * @member {String} verb
 */
UpdatePointEventDto.prototype['verb'] = undefined;

/**
 * Social platform (twitter, instagram, facebook) or other external platform where the event was awarded from
 * @member {String} platform
 */
UpdatePointEventDto.prototype['platform'] = undefined;

/**
 * Message to display to the user.
 * @member {String} message
 */
UpdatePointEventDto.prototype['message'] = undefined;

/**
 * For awarding points, set this to false. Set to true if you want to consume points instead of awarding them
 * @member {Boolean} isBurn
 */
UpdatePointEventDto.prototype['isBurn'] = undefined;

/**
 * Number of points to award for this event.
 * @member {Number} points
 */
UpdatePointEventDto.prototype['points'] = undefined;

/**
 * For displaying to the user, the related time when the points were awarded.
 * @member {Date} timestamp
 */
UpdatePointEventDto.prototype['timestamp'] = undefined;

/**
 * Any custom metadata
 * @member {Object} metadata
 */
UpdatePointEventDto.prototype['metadata'] = undefined;






export default UpdatePointEventDto;

