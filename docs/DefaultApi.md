# EarthpointsApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appControllerCreate**](DefaultApi.md#appControllerCreate) | **POST** /point-event | 
[**appControllerDashboard**](DefaultApi.md#appControllerDashboard) | **GET** / | 
[**appControllerFacebookConnect**](DefaultApi.md#appControllerFacebookConnect) | **GET** /connect/facebook | 
[**appControllerFacebookConnectRedirect**](DefaultApi.md#appControllerFacebookConnectRedirect) | **GET** /callback/facebook/connect | 
[**appControllerFacebookLogin**](DefaultApi.md#appControllerFacebookLogin) | **GET** /login/facebook | 
[**appControllerFacebookLoginRedirect**](DefaultApi.md#appControllerFacebookLoginRedirect) | **GET** /callback/facebook/login | 
[**appControllerInstagramConnect**](DefaultApi.md#appControllerInstagramConnect) | **GET** /connect/instagram | 
[**appControllerInstagramConnectRedirect**](DefaultApi.md#appControllerInstagramConnectRedirect) | **GET** /callback/instagram/connect | 
[**appControllerInstagramLogin**](DefaultApi.md#appControllerInstagramLogin) | **GET** /login/instagram | 
[**appControllerInstagramLoginRedirect**](DefaultApi.md#appControllerInstagramLoginRedirect) | **GET** /callback/instagram/login | 
[**appControllerLanding**](DefaultApi.md#appControllerLanding) | **GET** /landing | 
[**appControllerLoginWithClientCredentials**](DefaultApi.md#appControllerLoginWithClientCredentials) | **POST** /oauth/token | 
[**appControllerLogout**](DefaultApi.md#appControllerLogout) | **GET** /logout | 
[**appControllerPointBadge**](DefaultApi.md#appControllerPointBadge) | **GET** /point-badge | 
[**appControllerSse**](DefaultApi.md#appControllerSse) | **GET** /sse | 
[**appControllerTwitterConnect**](DefaultApi.md#appControllerTwitterConnect) | **GET** /connect/twitter | 
[**appControllerTwitterConnectRedirect**](DefaultApi.md#appControllerTwitterConnectRedirect) | **GET** /callback/twitter/connect | 
[**appControllerTwitterLogin**](DefaultApi.md#appControllerTwitterLogin) | **GET** /login/twitter | 
[**appControllerTwitterLoginRedirect**](DefaultApi.md#appControllerTwitterLoginRedirect) | **GET** /callback/twitter/login | 
[**emailTemplateControllerCreate**](DefaultApi.md#emailTemplateControllerCreate) | **POST** /email-template/{day} | 
[**emailTemplateControllerEditByDay**](DefaultApi.md#emailTemplateControllerEditByDay) | **GET** /email-template/{day} | 
[**emailTemplateControllerIndex**](DefaultApi.md#emailTemplateControllerIndex) | **GET** /email-template | 
[**platformConnectionControllerCreate**](DefaultApi.md#platformConnectionControllerCreate) | **POST** /platform-connection | 
[**platformConnectionControllerFindAll**](DefaultApi.md#platformConnectionControllerFindAll) | **GET** /platform-connection | 
[**platformConnectionControllerFindOne**](DefaultApi.md#platformConnectionControllerFindOne) | **GET** /platform-connection/{id} | 
[**platformConnectionControllerRemove**](DefaultApi.md#platformConnectionControllerRemove) | **DELETE** /platform-connection/{id} | 
[**platformConnectionControllerUpdate**](DefaultApi.md#platformConnectionControllerUpdate) | **PATCH** /platform-connection/{id} | 
[**pointEventControllerFindAll**](DefaultApi.md#pointEventControllerFindAll) | **GET** /point-event | 
[**pointEventControllerFindOne**](DefaultApi.md#pointEventControllerFindOne) | **GET** /point-event/{id} | 
[**pointEventControllerRemove**](DefaultApi.md#pointEventControllerRemove) | **DELETE** /point-event/{id} | 
[**pointEventControllerUpdate**](DefaultApi.md#pointEventControllerUpdate) | **PATCH** /point-event/{id} | 
[**userControllerCreate**](DefaultApi.md#userControllerCreate) | **POST** /user | 
[**userControllerFindOne**](DefaultApi.md#userControllerFindOne) | **GET** /user/{id} | 
[**userControllerFindOneByEmail**](DefaultApi.md#userControllerFindOneByEmail) | **GET** /user/byEmail/{email} | 
[**userControllerRemove**](DefaultApi.md#userControllerRemove) | **DELETE** /user/{id} | 
[**userControllerUpdate**](DefaultApi.md#userControllerUpdate) | **PATCH** /user/{id} | 
[**userControllerUserFromExternalPlatformData**](DefaultApi.md#userControllerUserFromExternalPlatformData) | **POST** /user/fromExternalPlatformData | 



## appControllerCreate

> CreatePointEventResponseDto appControllerCreate(createPointEventDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let createPointEventDto = new EarthpointsApi.CreatePointEventDto(); // CreatePointEventDto | 
apiInstance.appControllerCreate(createPointEventDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPointEventDto** | [**CreatePointEventDto**](CreatePointEventDto.md)|  | 

### Return type

[**CreatePointEventResponseDto**](CreatePointEventResponseDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appControllerDashboard

> appControllerDashboard()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerDashboard((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerFacebookConnect

> appControllerFacebookConnect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerFacebookConnect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerFacebookConnectRedirect

> appControllerFacebookConnectRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerFacebookConnectRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerFacebookLogin

> appControllerFacebookLogin()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerFacebookLogin((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerFacebookLoginRedirect

> appControllerFacebookLoginRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerFacebookLoginRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerInstagramConnect

> appControllerInstagramConnect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerInstagramConnect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerInstagramConnectRedirect

> appControllerInstagramConnectRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerInstagramConnectRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerInstagramLogin

> appControllerInstagramLogin()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerInstagramLogin((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerInstagramLoginRedirect

> appControllerInstagramLoginRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerInstagramLoginRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerLanding

> appControllerLanding()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerLanding((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerLoginWithClientCredentials

> ClientCredentialsResponseDto appControllerLoginWithClientCredentials(clientCredentialsDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
let clientCredentialsDto = new EarthpointsApi.ClientCredentialsDto(); // ClientCredentialsDto | 
apiInstance.appControllerLoginWithClientCredentials(clientCredentialsDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientCredentialsDto** | [**ClientCredentialsDto**](ClientCredentialsDto.md)|  | 

### Return type

[**ClientCredentialsResponseDto**](ClientCredentialsResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appControllerLogout

> appControllerLogout()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerLogout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerPointBadge

> appControllerPointBadge()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerPointBadge((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerSse

> appControllerSse()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerSse((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerTwitterConnect

> appControllerTwitterConnect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerTwitterConnect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerTwitterConnectRedirect

> appControllerTwitterConnectRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerTwitterConnectRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerTwitterLogin

> appControllerTwitterLogin()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerTwitterLogin((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## appControllerTwitterLoginRedirect

> appControllerTwitterLoginRedirect()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.appControllerTwitterLoginRedirect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## emailTemplateControllerCreate

> emailTemplateControllerCreate(day, type, body)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
let day = "day_example"; // String | 
let type = "type_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.emailTemplateControllerCreate(day, type, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **day** | **String**|  | 
 **type** | **String**|  | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## emailTemplateControllerEditByDay

> emailTemplateControllerEditByDay(day, type)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
let day = "day_example"; // String | 
let type = "type_example"; // String | 
apiInstance.emailTemplateControllerEditByDay(day, type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **day** | **String**|  | 
 **type** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## emailTemplateControllerIndex

> emailTemplateControllerIndex()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.emailTemplateControllerIndex((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## platformConnectionControllerCreate

> platformConnectionControllerCreate(createPlatformConnectionDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let createPlatformConnectionDto = new EarthpointsApi.CreatePlatformConnectionDto(); // CreatePlatformConnectionDto | 
apiInstance.platformConnectionControllerCreate(createPlatformConnectionDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPlatformConnectionDto** | [**CreatePlatformConnectionDto**](CreatePlatformConnectionDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## platformConnectionControllerFindAll

> platformConnectionControllerFindAll()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.platformConnectionControllerFindAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## platformConnectionControllerFindOne

> platformConnectionControllerFindOne(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.platformConnectionControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## platformConnectionControllerRemove

> platformConnectionControllerRemove(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.platformConnectionControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## platformConnectionControllerUpdate

> platformConnectionControllerUpdate(id, body)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.platformConnectionControllerUpdate(id, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## pointEventControllerFindAll

> pointEventControllerFindAll()



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
apiInstance.pointEventControllerFindAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## pointEventControllerFindOne

> pointEventControllerFindOne(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.pointEventControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## pointEventControllerRemove

> pointEventControllerRemove(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.pointEventControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## pointEventControllerUpdate

> pointEventControllerUpdate(id, updatePointEventDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
let updatePointEventDto = new EarthpointsApi.UpdatePointEventDto(); // UpdatePointEventDto | 
apiInstance.pointEventControllerUpdate(id, updatePointEventDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updatePointEventDto** | [**UpdatePointEventDto**](UpdatePointEventDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userControllerCreate

> userControllerCreate(createUserDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let createUserDto = new EarthpointsApi.CreateUserDto(); // CreateUserDto | 
apiInstance.userControllerCreate(createUserDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserDto** | [**CreateUserDto**](CreateUserDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userControllerFindOne

> userControllerFindOne(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.userControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userControllerFindOneByEmail

> userControllerFindOneByEmail(email)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let email = "email_example"; // String | 
apiInstance.userControllerFindOneByEmail(email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userControllerRemove

> userControllerRemove(id)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.userControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userControllerUpdate

> userControllerUpdate(id, body)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let id = "id_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.userControllerUpdate(id, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userControllerUserFromExternalPlatformData

> User userControllerUserFromExternalPlatformData(userFromExternalPlatformDataDto)



### Example

```javascript
import EarthpointsApi from 'earthpoints_api';
let defaultClient = EarthpointsApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new EarthpointsApi.DefaultApi();
let userFromExternalPlatformDataDto = new EarthpointsApi.UserFromExternalPlatformDataDto(); // UserFromExternalPlatformDataDto | 
apiInstance.userControllerUserFromExternalPlatformData(userFromExternalPlatformDataDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFromExternalPlatformDataDto** | [**UserFromExternalPlatformDataDto**](UserFromExternalPlatformDataDto.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

