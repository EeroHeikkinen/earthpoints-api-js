# EarthpointsApi.CreatePointEventDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hashString** | **String** | The hash string is used to make sure each event will only result in points awarded once. It should be unique for each event and user, in such a way the same hashString will predictably get generated if the same event was sent again. For example, it could be the string \&quot;created-pledge-page\&quot; followed by the user&#39;s id in another system. | 
**userid** | **String** | Already existing User UUID in the system. One of this or an email is required. | [optional] 
**externalPlatformUserData** | [**[UserFromExternalPlatformDataDto]**](UserFromExternalPlatformDataDto.md) | External platform user data. This is used to identify the correct user. If no user is found, a new user will be created and tagged with the provided external credentials. | [optional] 
**email** | **String** | Email to associate the points with. If an user with this email is not found, a new user will be created. One of this or an User UUID is required. | [optional] 
**icon** | **String** | Icon to display in web interface (Font Awesome version 6.0.0) | [optional] 
**verb** | **String** | The verb to display along with the point event in user interfaces. For example: \&quot;You connected Facebook\&quot; | 
**platform** | **String** | Social platform (twitter, instagram, facebook) or other external platform where the event was awarded from | 
**message** | **String** | Message to display to the user. | 
**isBurn** | **Boolean** | For awarding points, set this to false. Set to true if you want to consume points instead of awarding them | 
**points** | **Number** | Number of points to award for this event. | 
**timestamp** | **Date** | For displaying to the user, the related time when the points were awarded. | 
**metadata** | **Object** | Any custom metadata | 


