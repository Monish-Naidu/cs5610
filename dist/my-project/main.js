(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(id, name, websiteId, description) {
        this._id = id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(id, name, devloperId, description) {
        this._id = id;
        this.name = name;
        this.developerId = devloperId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: WidgetHeading, WidgetImage, WidgetHtml, WidgetYoutube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeading", function() { return WidgetHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImage", function() { return WidgetImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtml", function() { return WidgetHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutube", function() { return WidgetYoutube; });
var WidgetHeading = /** @class */ (function () {
    function WidgetHeading(name, _id, widgetType, pageId, size, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
    }
    return WidgetHeading;
}());

var WidgetImage = /** @class */ (function () {
    function WidgetImage(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetImage;
}());

var WidgetHtml = /** @class */ (function () {
    function WidgetHtml(name, _id, widgetType, pageId, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
    }
    return WidgetHtml;
}());

var WidgetYoutube = /** @class */ (function () {
    function WidgetYoutube(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetYoutube;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('321', 'Post 1', '678', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('432', 'Post 2', '678', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('543', 'Post 3', '678', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('111', 'Post 1', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('222', 'Post 2', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('333', 'Post 3', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('444', 'Post 1', '234', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('555', 'Post 2', '234', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('666', 'Post 3', '234', 'Lorem'),
        ];
    }
    PageService.prototype.createPage = function (pageId, page) {
        var new_page = {
            _id: (new Date()).getTime() + '',
            name: page.name,
            websiteId: page.websiteId,
            description: page.description
        };
        this.pages.push(new_page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var resultSet = [];
        for (var i in this.pages) {
            if (this.pages[i].websiteId === websiteId) {
                resultSet.push(this.pages[i]);
            }
        }
        return resultSet;
    };
    PageService.prototype.findPageByWebsiteId2 = function (websiteId) {
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].description = page.description;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");



var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('123', 'alice', 'qq', 'alice', 'alice'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('234', 'bob', 'qq', 'bob', 'bob'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('345', 'charlie', 'qq', 'charlie', 'charlie'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('456', 'john', 'good4u', 'john', 'smith')
        ];
    }
    UserService.prototype.createUser = function (user) {
        return this.users.push(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName));
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user._id === userId;
        });
    };
    UserService.prototype.updateUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === user._id) {
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
                return this.users[i];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.deleteUserById = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('123', 'Facebook', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('234', 'Tweeter', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('456', 'Gizmodo', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('890', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('789', 'Chess', '234', 'Lorem')
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var new_website = {
            _id: (new Date()).getTime() + '',
            name: website.name,
            developerId: userId,
            description: website.description
        };
        this.websites.push(new_website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgetUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.widgetChosen = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('DEFAULT');
        // constructor(_id:String, type:String, pid:String, size= '1', text = 'text', url = 'url', width = '100%')
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]('', '123', 'HEADING', '321', 2, 'GIZMODO'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]('', '234', 'HEADING', '432', 4, 'Lorem ipsum'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"]('', '345', 'IMAGE', '543', '100', 'http://lorempixel.com/400/200'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"]('', '456', 'IMAGE', '654', '100%', 'http://lorempixel.com/400/200'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]('', '567', 'HEADING', '765', 4, 'Lorem ipsum'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"]('', '678', 'YOUTUBE', '876', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"]('', '789', 'YOUTUBE', '987', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]('', '111', 'HEADING', '111', 2, 'GIZMODO'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"]('', '222', 'IMAGE', '111', '100%', 'http://lorempixel.com/400/200'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"]('', '333', 'YOUTUBE', '111', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = String(Math.random());
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var widgetsFound = [];
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.pageId === pageId) {
                widgetsFound.push(widget);
            }
        }
        return widgetsFound;
    };
    WidgetService.prototype.findWidgetsByID = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                if (widget.widgetType === 'HEADING') {
                    // @ts-ignore
                    widget.size = newWidget.size;
                    // @ts-ignore
                    widget.text = newWidget.text;
                }
                else if (widget.widgetType === 'IMAGE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                }
                else if (widget.widgetType === 'YOUTUBE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                }
                else if (widget.widgetType === 'HTML') {
                    // @ts-ignore
                    widget.text = newWidget.text;
                }
            }
        }
        this.widgetUpdate.next(this.widgets.slice());
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgets.forEach(function (widget, index) {
            if (widget._id === widgetId) {
                _this.widgets.splice(index, 1);
            }
        });
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!---- top navbar --->\n\n<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"\">\n        Edit Page\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click) = \"updatePage()\" class=\"icon-padding text-black\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"row row-div\">\n    <div class=\"d-none d-sm-block col-sm-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n            <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8 right-content\">\n      <div class=\"text-padding-top\">\n        <label for=\"page-name\" class=\"text-bold\">Name</label>\n        <input [(ngModel)]=\"name\" id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\"/>\n      </div>\n      <div class=\"text-padding-top\">\n        <label for=\"page-title\" class=\"text-bold\">Title</label>\n        <input [(ngModel)]=\"description\" id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\">\n      </div>\n      <a (click)=\"deletePage()\" class=\"btn btn-danger btn-block margin-top\">Delete</a>\n    </div>\n  </div>\n</div>\n\n\n<!----Bottom navbar (grey)------>\n<nav class=\"navbar fixed-bottom float-right col-12  bg-light\">\n  <div class=\"container col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageEditComponent.prototype.updatePage = function () {
        var newPage = new src_app_models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"](this.pid, this.name, this.wid, this.description);
        this.pageService.updatePage(this.pid, newPage);
        this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"\">\n        Pages\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n        <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n    </li>\n  </ul>\n</div>\n\n<!----Bottom navbar (grey)------>\n<nav class=\"navbar fixed-bottom float-right col-12  bg-light\">\n  <div class=\"container col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right col-12\"></i>\n      </a>\n    </div>\n  </div>\n\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\">\n        New Page\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"createPage()\" class=\"icon-padding text-black\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row row-div\">\n    <div class=\"d-none d-sm-block col-sm-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n            <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8 right-content\">\n      <div class=\"text-padding-top\">\n        <label for=\"page-name\" class=\"text-bold\">Name</label>\n        <input id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\" [(ngModel)]=\"name\"/>\n      </div>\n      <div class=\"text-padding-top\">\n        <label for=\"page-title\" class=\"text-bold\">Title</label>\n        <input id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\" [(ngModel)]=\"description\">\n      </div>\n    </div>\n  </div>\n\n\n<!----Bottom navbar (grey)------>\n<nav class=\"navbar fixed-bottom float-right col-12  bg-light\">\n  <div class=\"container col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageservice, route, activatedRoute) {
        this.pageservice = pageservice;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageNewComponent.prototype.createPage = function () {
        this.pageservice.createPage(this.uid, new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](undefined, this.name, this.wid, this.description));
        this.route.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pages = _this.pageservice.findPageByWebsiteId(_this.wid);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container\">\n  <h1>Login</h1>\n  <input [(ngModel)]=\"username\" type=\"text\"\n         class=\"form-control\"\n         placeholder=\"username\"/>\n  <input [(ngModel)]=\"password\" type=\"password\"\n         class=\"form-control\"\n         placeholder=\"password\"/>\n  <a class=\"btn btn-primary btn-block\"\n     (click)=\"login()\">Login</a>\n  <a class=\"btn btn-success btn-block\"\n     routerLink=\"/register\">Register</a>\n</div>-->\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <h1 class = \"cl-padding-top\">Login</h1>\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control cl-margin-bottom\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control cl-margin-bottom\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group cl-margin-bottom\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group cl-margin-bottom\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredential(this.username, this.password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!------Top navbar------>\n\n\n\n<nav class=\"navbar navbar-fixed-top cl-blue-navbar \">\n  <div class=\"container-fluid\">\n    <a class=\" navbar-brand font-weight-bold text-white float-left\" routerLink=\"\">\n      Profile\n    </a>\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link float-left text-white\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<!------Title------>\n\n<div class=\"container above-below-space\">\n  <header>\n  </header>\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"first\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"last\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{uid}}/website\">Websites</a>\n  <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\">Logout</a>\n  <h1></h1>\n\n  <!------Bottom navbar------>\n</div>\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            console.log('user id:' + _this.uid);
        });
        this.user = this.userService.findUserById(this.uid);
        this.username = this.user['username'];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-nav-top\">\n\n  <h1>Register</h1>\n\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <!---- username--->\n\n\n    <div class=\"form-group\">\n      <input id=\"username\" name=\"username\" placeholder=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\"/>\n    </div>\n\n\n\n    <!----password--->\n\n    <div class=\"form-group\">\n      <input id=\"password\" name=\"password\" placeholder=\"password\" type=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\"/>\n    </div>\n\n    <!---- verify password--->\n    <div class=\"form-group\">\n      <input id=\"v_password\" name=\"v_password\" placeholder=\"verify password\" type=\"password\" class=\"form-control\" ngModel required #v_password=\"ngModel\"/>\n    </div>\n\n    <div *ngIf=\"pwErrorFlag\" class=\"alert alert-danger\">\n      {{pwErrorMsg}}\n    </div>\n\n    <!---- Register button--->\n\n\n    <a class=\"btn btn-primary btn-block\" type=\"submit\">Register</a>\n\n\n    <!---- Cancel button--->\n\n    <a class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Cancel</a>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Registration failed!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.user.username = this.registerForm.value.username;
        this.user.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.errorFlag = false;
        if (this.userService.findUserByUsername(this.user.username) || this.v_password !== this.user.password) {
            this.errorFlag = true;
        }
        else {
            this.userService.createUser(this.user);
            this.router.navigate(['/user', this.user._id]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"col-md-4 d-none d-md-block d-none d-sm-block container-fluid\">\n    <a routerLink=\"/user/{{uid}}/website\" class=\"navbar-link text-white\">\n      <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n    </a>\n    <a class=\"text-white navbar-brand font-weight-bold\" routerLink=\"/user/{{uid}}/website\">\n      Websites\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/new\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-plus fontawsome_icon\"></i>\n    </a>\n  </div>\n  <div class=\"col-md-8 container-fluid\">\n    <a class=\"text-white navbar-brand font-weight-bold\" routerLink=\"/user/{{uid}}/website/{{wid}}\">\n      Edit Websites\n    </a>\n    <button (click)=\"update()\" routerLink=\"/user/{{uid}}/website\"\n            class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </button>\n  </div>\n</nav>\n\n\n<div class=\"row contain-fluid pt-2 px-4\">\n  <div class=\"col-md-4 d-none d-md-block border-right\">\n    <ul *ngFor=\"let website of websites\" class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n          <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-8\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder= \"name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"description\"></textarea>\n      </div>\n      <a (click)=\"delete()\" class=\"btn btn-danger  btn-block\" routerLink=\"/user/{{uid}}/website\">Delete</a>\n    </form>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        var website = this.websiteService.findWebsiteById(this.wid);
        if (website) {
            this.name = website.name;
            this.description = website.description;
        }
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
    };
    WebsiteEditComponent.prototype.update = function () {
        this.websiteService.updateWebsite(this.wid, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](this.wid, this.name, this.uid, this.description));
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.wid);
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!------Top Navbar------>\n\n<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-link float-left text-white\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n\n      <a class=\"text-white navbar-brand cl-text-bold pull left col-11\" routerLink=\"/user/{{uid}}/website\">\n        Websites\n      </a>\n\n    <a routerLink=\"/user/{{uid}}/website/new\" class=\"navbar-link float-left text-white\">\n      <i class=\"fas fa-plus fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<main>\n  <div class=\"container above-below-space\">\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n    </ul>\n  </div>\n</main>\n\n<!------Bottom Navbar------>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"col-md-4 d-none d-md-block container-fluid\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link text-white\">\n      <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n    </a>\n    <a class=\"text-white navbar-brand font-weight-bold\" routerLink=\"/user/{{uid}}/website\">\n      Websites\n    </a>\n\n\n    <a routerLink=\"./\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-plus fontawsome_icon\"></i>\n    </a>\n\n\n  </div>\n  <div class=\"col-md-8 container-fluid\">\n    <a class=\"text-white navbar-brand font-weight-bold\" routerLink=\"\">\n      New Website\n    </a>\n    <a (click)=\"create()\" routerLink=\"/user/{{uid}}/website\"\n       class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"row container-fluid pt-2\">\n  <div class=\"col-md-4 d-none d-md-block border-right\">\n    <ul class=\"list-group cl-list-group-borderless\">\n     <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n       <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n       <a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i> </a>\n     </li>\n    </ul>\n  </div>\n\n\n  <div class=\"col-sm-8 right-content\">\n    <div class=\"text-padding-top\">\n      <label for=\"website-name\" class=\"text-bold\">Name</label>\n      <input id=\"website-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\"/>\n    </div>\n    <div class=\"text-padding-top\">\n      <label for=\"web-description\" class=\"text-bold\">Description</label>\n      <textarea id=\"web-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" [(ngModel)]=\"description\"></textarea>\n    </div>\n  </div>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
    };
    WebsiteNewComponent.prototype.create = function () {
        var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](undefined, this.name, undefined, this.description);
        this.websiteService.createWebsite(this.uid, website);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{uid}}/website{{wid}}/page/{{pid}}/widget\" class=\"text-black icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" href=\"#\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n      <a (click)=\"toHeader()\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n      <a (click)=\"toImage()\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\">\n      <a (click)=\"toYoutube()\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/user/{{uid}}\" icon-padding>\n    <i class=\"fas fa-user fontawsome_icon float-right \"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activateRoute, widgetService, router) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widgets = [];
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget edit params:" ');
            console.log(params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
    };
    WidgetChooserComponent.prototype.goToWidgetEdit = function (widget) {
        this.widgetService.createWidget(this.pid, widget);
        this.router.navigate(['../' + widget._id], { relativeTo: this.activateRoute });
    };
    WidgetChooserComponent.prototype.toHeader = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetHeading"](undefined, undefined, 'HEADING', this.pid, undefined, undefined);
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toImage = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetImage"](undefined, undefined, 'IMAGE', this.pid, undefined, undefined);
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.toYoutube = function () {
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetYoutube"](undefined, undefined, 'YOUTUBE', this.pid, undefined, undefined);
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget !== undefined\" [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n</div>\n\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activateRoute, widgetService) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.widgets = [];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget edit params:" ');
            console.log(params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetsByID(_this.wgid);
            console.log(_this.widget);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widget Edit\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"updateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetName\" placeholder=\"Name\" [(ngModel)]=\"widgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetText\" placeholder=\"Text\" [(ngModel)]=\"widgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input type=\"number\" class=\"form-control\" name=\"widgetSize\" placeholder=\"Size\" [(ngModel)]=\"widgetSize\">\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"delete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wgid = params['wgid'];
            _this.pid = params['pid'];
            _this.wid = params['wid'];
            _this.widget = _this.widgetService.findWidgetsByID(_this.wgid);
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["WidgetHeading"](this.widgetName, undefined, 'HEADING', this.pid, this.widgetSize, this.widgetText);
        this.widgetService.createWidget(this.pid, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/{{uid}}/website{{wid}}/page/{{pid}}/widget\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" href=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widgetName\" [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-name\"\n             placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widgetText\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\"\n             id=\"image-text\"\n             placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widgetUrl\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widgetWidth\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" >Upload Image</a>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"delete()\">Delete</a>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user fontawsome_icon float-right\"></i></a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
        if (this.wgid !== 'undefined') {
            this.widget = this.widgetService.findWidgetsByID(this.wgid);
        }
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetImage"](this.widgetName, undefined, 'IMAGE', this.pid, this.widgetWidth, this.widgetUrl);
        this.widgetService.updateWidget(this.wgid, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetImageComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetImageComponent.prototype.handleUpload = function (e) {
        this.localPath = e.target.value;
        console.log('local: ' + this.localPath);
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----Top navbar--->\n<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uId/website/:wId/page/:pId/widget\" class=\"text-black icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" href=\"./\">\n        Widgets Edit\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"Widget Name\"\n        [(ngModel)]=\"widgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"Widget Text\"\n        [(ngModel)]=\"widgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"Widget URL\"\n        [(ngModel)]=\"widgetUrl\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"Widget Width\"\n        [(ngModel)]=\"widgetWidth\">\n    </div>\n    <div class=\"form-group\">\n      <label>Upload</label>\n      <div class=\"file-upload\">\n        <div class=\"file-upload\">\n          <input type=\"file\"\n                 id=\"avatar\" name=\"avatar\"\n                 accept=\"image/png, image/jpeg\"\n                 (change)=\"handleUpload($event)\">\n        </div>\n      </div>\n      <button class=\"btn btn-primary btn-block\" >Upload Image</button>\n      <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n    </div>\n  </form>\n</div>\n\n\n\n\n<!---- Bottom Navbar ----->\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user fontawsome_icon float-right\"></i></a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.wgid = params['wgid'];
            _this.pid = params['pid'];
        });
        if (this.wgid !== 'undefined') {
            this.widget = this.widgetService.findWidgetsByID(this.wgid);
        }
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.newWidget = new src_app_models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetYoutube"](this.widgetName, undefined, this.wgid, this.pid, this.widgetWidth, this.widgetUrl);
        this.widgetService.updateWidget(this.wgid, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetYoutubeComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widgets\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div class=\"float-right\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n          <i class=\"fas fa-cog fontawsome_icon\"></i>\n        </a>\n      </div>\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"1\">\n            <h1>{{widget.text}}</h1>\n          </div>\n          <div *ngSwitchCase=\"2\">\n            <h2>{{widget.text}}</h2>\n          </div>\n          <div *ngSwitchCase=\"3\">\n            <h3>{{widget.text}}</h3>\n          </div>\n          <div *ngSwitchCase=\"4\">\n            <h4>{{widget.text}}</h4>\n          </div>\n          <div *ngSwitchCase=\"5\">\n            <h5>{{widget.text}}</h5>\n          </div>\n          <div *ngSwitchCase=\"6\">\n            <h6>{{widget.text}}</h6>\n          </div>\n        </div>\n      </div>\n      <img *ngSwitchCase=\"'IMAGE'\" src=\"{{widget.url}}\">\n      <div *ngSwitchCase=\"'YOUTUBE'\" >\n        <iframe width=\"640\" height=\"360\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen></iframe>\n      </div>\n      <p *ngSwitchDefault><br></p>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n    <a routerLink=\"./\" class=\"cl-icon-padding\">\n      <span class=\"fas fa-play\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"cl-icon-padding pl-2\">\n      <span class=\"fas fa-eye\"></span>\n    </a>\n\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(sanitizer, widgetService, route, activatedRoute) {
        this.sanitizer = sanitizer;
        this.widgetService = widgetService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_app_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/monish/Documents/cs5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map