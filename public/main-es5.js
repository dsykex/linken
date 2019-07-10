(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header text-center\">\n  <a routerLink=\"/home\"><img src=\"../../assets/img/logo.png\" alt=\"\" width=\"60\" height=\"30\" /></a>\n</div>\n<!--The content below is only a placeholder and can be replaced.-->\n<!---<div class=\"container\">\n  \n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-10 col-sm-12\" style=\"margin-top:70px;\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" aria-describedby=\"qrcodeData\" placeholder=\"Data:\" [(ngModel)]=\"qrdata\">\n          <small class=\"form-text text-muted\">We'll never share your data with anyone else.. Your secret is safe with us. :)</small>\n        </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12\" style=\"margin-top:70px;\">\n        <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"generateQRData()\" >Generate</button>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n      <div #elem>\n        <ngx-qrcode [qrc-value]=\"createdCode\" class=\"img-responsive\"></ngx-qrcode>\n      </div>\n      <ng2-qrcode-reader (result)=\"render($event)\" [qrr-show]=\"showQRCode\" [qrr-value]=\"qrImageData\"></ng2-qrcode-reader>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3 col-sm-12\">\n      <a (click)=\"submitCode()\" class=\"btn btn-block btn-primary\">Submit Code</a>\n    </div>\n  </div>\n</div>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/code-details/code-details.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/code-details/code-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  code-details works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-code/create-code.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-code/create-code.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8 col-sm-12\">\n      <form>\n        <div class=\"row m-5\">\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-small btn-primary btn-block\" (click)=\"setType('msg')\">Message</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-small btn-primary btn-block\" (click)=\"setType('file')\">File</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-small btn-primary btn-block\" (click)=\"setType('link')\">Link</button>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"type=='msg'\">\n          <textarea [(ngModel)]=\"code.content\" class=\"form-control\" id=\"codeContent\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"code.content\">\n          </textarea>\n          <small class=\"form-text text-muted\">Please be curse-sensitive with messages and clean :)</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"type=='file'\">\n            <input type=\"file\" class=\"form-control-file\" id=\"codeContent\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"code.content\">\n            <small class=\"form-text text-muted\">Choose a file</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"type=='link'\">\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\">http://</div>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"link.com\"  [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"code.content\">\n            </div>\n            <small class=\"form-text text-muted\">Links are welcome aswell.</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"code.content\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"code.recv\" [ngModelOptions]=\"{standalone:true}\" /> \n          <small class=\"form-text text-muted\">Seperate receiver emails with a comma or specify this as 'public' for anyone to scan.</small>\n        </div>\n        <div class=\"m-4\" *ngIf=\"code.recv\">\n          <div class=\"row\">\n            <div class=\"col\">\n                <button class=\"btn btn-small btn-primary btn-block\" (click)=\"hasTime = !hasTime\">Time Limiter</button>\n            </div>\n            <div class=\"col\" *ngIf=\"type=='file'\">\n                <button class=\"btn btn-small btn-primary btn-block\" (click)=\"toggleDL()\">{{dlTxt}}</button>\n            </div>\n          </div>\n        </div> \n        <div class=\"row\" *ngIf=\"hasTime\">\n          <div class=\"col-md-9\">\n            <div class=\"form-group\" >\n              <label for=\"formControlRange\">Time</label>\n              <input type=\"range\" value=\"1\" min=\"1\" max=\"60\" class=\"form-control-range\" [ngModelOptions]=\"{standalone:true}\" id=\"formControlRange\" value=\"8\" [(ngModel)]=\"code.time\" (change)=\"showValue()\">\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <select value=\"minutes\" [(ngModel)]=\"code.timescale\" [ngModelOptions]=\"{standalone:true}\" class=\"custom-select custom-select-lg mb-3\">\n                <option selected value=\"minutes\">Minutes</option>\n                <option value=\"hours\">Hours</option>\n                <option value=\"days\">Days</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-5\">\n            <div #qr>\n              <ngx-qrcode [qrc-value]=\"encodedQR\" class=\"img-responsive\"></ngx-qrcode>\n              <ng2-qrcode-reader (result)=\"render($event)\" [qrr-show]=\"false\" [qrr-value]=\"qrImgData\"></ng2-qrcode-reader>\n            </div>\n          </div>\n        </div>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-3 col-sm-12\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createCode()\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row justify-content-center\" *ngIf=\"user.email\">\n    <div class=\"col-md-3 col-sm-12 text-center\">\n      <p class=\"userName\">Hello, {{user.first_name}}</p>\n      <a (click)=\"logout()\" class=\"btn btn-link btn-sm logoutBtn\">Logout</a>\n      <button class=\"btn btn-primary btn-block\" routerLink=\"/create-code\">Create a code</button>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          My Codes\n          <span *ngIf=\"codes\" class=\"badge badge-primary badge-pill\">{{codes.length}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          Shared Codes\n          <span class=\"badge badge-primary badge-pill\">1</span>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-9 col-sm-12\" *ngIf=\"codes\">\n      <div class=\"row\">\n        <ng2-qrcode-reader (result)=\"render($event)\" [qrr-show]=\"false\" [qrr-value]=\"qrImageData\"></ng2-qrcode-reader>\n            \n        <div class=\"col-4 m-3\" *ngFor=\"let code of codes\">\n          <div class=\"card\">\n            <img src=\"{{code.data}}\" class=\"card-img-top\">\n            <div class=\"card-body\">\n              <a (click)=\"renderCode(code)\" class=\"btn btn-primary\">Details</a>\n            </div>\n          </div>\n        </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"padding-top:20%;\">\n  <div class=\"row justify-content-center\">\n    <img src=\"../../assets/img/logo.png\" width=\"90\" height=\"60\" class=\"logo animated fadeInDown\" />\n  </div>\n  <div class=\"row justify-content-center\">\n    \n      <div class=\"col-md-6 col-sm-12\">\n          <div *ngIf=\"!hasUser\">\n              <div *ngIf=\"signUpActive\" class=\"animated fadeIn\">\n                <div style=\"margin-top: 10px;\" *ngIf=\"!hasUser\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" aria-describedby=\"firstname\" placeholder=\"First Name\" [(ngModel)]=\"user.first_name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"lastname\" placeholder=\"Last Name\" [(ngModel)]=\"user.last_name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" aria-describedby=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" aria-describedby=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" aria-describedby=\"confirmpassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"user.confirm_password\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"join()\">Join</button>\n                </div>\n              </div>\n              <div *ngIf=\"loginActive\" class=\"animated fadeIn\">\n                  <div style=\"margin-top: 10px;\" *ngIf=\"!hasUser\">\n                      <div class=\"form-group\">\n                          <input type=\"email\" class=\"form-control\" aria-describedby=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" aria-describedby=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\n                      </div>\n                      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"login()\">Login</button>\n                  </div>\n              </div><br><br>\n              <div class=\"row justify-content-md-center animated bounceInUp\">\n                <div class=\"col-md-6 col-sm-12\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block\" (click)=\"showLogin()\">Have an account?</button>\n                </div>\n                <div class=\"col-md-6 col-sm-12\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block\" (click)=\"showSignup()\">Need an account?</button>\n                </div>\n              </div>\n              <h5 class=\"text-center errorMsg animated fadeIn\">{{errorMsg}}</h5>\n          </div>\n \n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_code_create_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-code/create-code.component */ "./src/app/create-code/create-code.component.ts");






var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'create-code', component: _create_code_create_code_component__WEBPACK_IMPORTED_MODULE_5__["CreateCodeComponent"] }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px solid #000;\n}\n\n.card {\n  transition: 0.3s all ease-in-out;\n  opacity: 0.3;\n}\n\n.card:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYXJob2xBbmRXYWxsU3QvRG9jdW1lbnRzL1NDL2xua25TaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBRUksZ0NBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFFSSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVye1xuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcbn1cblxuLmNhcmRcbntcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OjAuMztcbn1cblxuLmNhcmQ6aG92ZXJcbntcbiAgICBvcGFjaXR5OjE7XG59XG4iLCIuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmNhcmQge1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

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
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fb */ "./src/app/fb.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
        this.title = 'linken';
        this.codes = [];
        this.showQRCode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.generateQRData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imgInt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.createdCode = this.qrdata;
                        return [4 /*yield*/, setInterval(function () {
                                var q = _this.qr.nativeElement.children[0].children[0].children[0].src;
                                if (q) {
                                    _this.qrImageData = q;
                                    console.log(_this.qrImageData);
                                    clearInterval(imgInt);
                                }
                            }, 100)];
                    case 1:
                        imgInt = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.render = function (e) {
        console.log(e.result);
    };
    AppComponent.prototype.submitCode = function () {
        var _this = this;
        var db = _fb__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
        var codes = db.collection('codes');
        var newCode = {
            data: this.qrImageData
        };
        codes.add(newCode).then(function (data) {
            console.log(data);
            _this.qr.nativeElement.children[0].children[0].children[0].src = '';
            _fb__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref('/newCode/code.jpg').putString(_this.qrImageData).then(function (code) {
                var ref = code.ref;
                ref.getDownloadURL().then(function (url) {
                    console.log(url);
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "resultElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "qr", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: fbConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbConfig", function() { return fbConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var ng2_qrcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-qrcode-reader */ "./node_modules/ng2-qrcode-reader/index.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_code_create_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-code/create-code.component */ "./src/app/create-code/create-code.component.ts");
/* harmony import */ var _code_details_code_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code-details/code-details.component */ "./src/app/code-details/code-details.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");













var fbConfig = {
    apiKey: "AIzaSyAIcvfYspNPfT0pnSZR3qV8WcBrH3S3hyY",
    authDomain: "linken-25010.firebaseapp.com",
    databaseURL: "https://linken-25010.firebaseio.com",
    projectId: "linken-25010",
    storageBucket: "linken-25010.appspot.com",
    messagingSenderId: "928580850321",
    appId: "1:928580850321:web:36dcc200d4193237"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _create_code_create_code_component__WEBPACK_IMPORTED_MODULE_10__["CreateCodeComponent"],
                _code_details_code_details_component__WEBPACK_IMPORTED_MODULE_11__["CodeDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(fbConfig),
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__["NgxQRCodeModule"],
                ng2_qrcode_reader__WEBPACK_IMPORTED_MODULE_7__["NgQRCodeReaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fb */ "./src/app/fb.ts");



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getUserInfo = function () {
        var userObs = new Promise(function (resolve) {
            _fb__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (authData) {
                if (!authData)
                    resolve({});
                else {
                    var db = _fb__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('users');
                    db.doc(authData.email).get().then(function (user) {
                        if (user.exists)
                            resolve(user.data());
                    });
                }
            });
        });
        return userObs;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/code-details/code-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/code-details/code-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtZGV0YWlscy9jb2RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/code-details/code-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/code-details/code-details.component.ts ***!
  \********************************************************/
/*! exports provided: CodeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDetailsComponent", function() { return CodeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeDetailsComponent = /** @class */ (function () {
    function CodeDetailsComponent() {
    }
    CodeDetailsComponent.prototype.ngOnInit = function () {
    };
    CodeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-details',
            template: __webpack_require__(/*! raw-loader!./code-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/code-details/code-details.component.html"),
            styles: [__webpack_require__(/*! ./code-details.component.scss */ "./src/app/code-details/code-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeDetailsComponent);
    return CodeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/code.service.ts":
/*!*********************************!*\
  !*** ./src/app/code.service.ts ***!
  \*********************************/
/*! exports provided: CodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fb */ "./src/app/fb.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CodeService = /** @class */ (function () {
    function CodeService() {
    }
    CodeService.prototype.getUserCodes = function (email) {
        var codeObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (watcher) {
            var db = _fb__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var codes = db.collection('code_data');
            var codeArray = [];
            codes.where('owner', '==', email).onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (c) {
                    if (c.type == 'added') {
                        var codeData = c.doc.data();
                        codeArray.push(codeData);
                    }
                });
                watcher.next(codeArray);
                watcher.complete();
            });
        });
        return codeObserver;
    };
    CodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeService);
    return CodeService;
}());



/***/ }),

/***/ "./src/app/create-code/create-code.component.scss":
/*!********************************************************!*\
  !*** ./src/app/create-code/create-code.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jb2RlL2NyZWF0ZS1jb2RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-code/create-code.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-code/create-code.component.ts ***!
  \******************************************************/
/*! exports provided: CreateCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCodeComponent", function() { return CreateCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fb */ "./src/app/fb.ts");





var CreateCodeComponent = /** @class */ (function () {
    function CreateCodeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = {};
        this.code = {};
    }
    CreateCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserInfo().then(function (user) {
            if (!user.email)
                _this.router.navigateByUrl('/landing');
            else
                _this.user = user;
        });
    };
    CreateCodeComponent.prototype.toggleDL = function () {
        this.canDL = !this.canDL;
        if (this.canDL)
            this.dlTxt = "Download Enabled";
        else
            this.dlTxt = "Download Disabled";
    };
    CreateCodeComponent.prototype.setType = function (type) {
        this.reset();
        switch (type) {
            case 'msg':
                {
                    this.type = 'msg';
                }
                break;
            case 'file':
                {
                    this.type = 'file';
                }
                break;
            case 'link':
                {
                    this.type = 'link';
                }
                break;
        }
    };
    CreateCodeComponent.prototype.reset = function () {
        this.code.content = '';
        this.code.recv = '';
        this.hasTime = false;
        this.canDL = false;
        this.hasLocation = false;
    };
    CreateCodeComponent.prototype.showValue = function () {
        console.log(this.code.time);
    };
    CreateCodeComponent.prototype.multiplier = function (timescale) {
        var timeMult = 0;
        switch (timescale) {
            case 'seconds':
                timeMult = 1000;
                break;
            case 'minutes':
                timeMult = 60000;
                break;
            case 'hours':
                timeMult = 3600000;
                break;
            case 'days':
                timeMult = 86400000;
                break;
        }
        return timeMult;
    };
    CreateCodeComponent.prototype.generateQRData = function (dataArr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imgInt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.encodedQR = dataArr;
                        console.log(this.encodedQR);
                        return [4 /*yield*/, setInterval(function () {
                                var q = _this.qr.nativeElement.children[0].children[0].children[0].src;
                                if (q) {
                                    var imgData_1 = q;
                                    console.log(imgData_1);
                                    var db = _fb__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
                                    var code_data = db.collection('code_data');
                                    var _id = code_data.doc().id;
                                    code_data.doc(_id).set({ id: _id, data: imgData_1, owner: _this.user.email, createdAt: Date.now() }).then(function (docRef) {
                                        console.log('code data added!');
                                        _this.qrImgData = imgData_1;
                                    });
                                    clearInterval(imgInt);
                                }
                            }, 100)];
                    case 1:
                        imgInt = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCodeComponent.prototype.render = function (e) {
        console.log(e.result);
    };
    CreateCodeComponent.prototype.createCode = function () {
        var _this = this;
        var _codeData = {};
        if (this.user.email) {
            if (this.code.content) {
                _codeData['o'] = this.user.email;
                var db = _fb__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
                var code_content = db.collection('code_content');
                var _content_id_1 = code_content.doc().id;
                var _newContent = { id: _content_id_1, content: this.code.content };
                //Process our qrobject filters for encoding after content is saved
                code_content.doc(_content_id_1).set(_newContent).then(function () {
                    console.log('code added');
                    _codeData['cid'] = _content_id_1;
                    _codeData['rcv'] = _this.code.recv.split(',');
                    if (_this.hasTime) {
                        var seconds = _this.code.time * _this.multiplier(_this.code.timescale);
                        _codeData['t'] = Date.now() + seconds;
                    }
                    if (_this.canDL)
                        _codeData['dl'] = true;
                    else
                        _codeData['dl'] = false;
                    _this.generateQRData(JSON.stringify(_codeData));
                });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('qr', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateCodeComponent.prototype, "qr", void 0);
    CreateCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-code',
            template: __webpack_require__(/*! raw-loader!./create-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-code/create-code.component.html"),
            styles: [__webpack_require__(/*! ./create-code.component.scss */ "./src/app/create-code/create-code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CreateCodeComponent);
    return CreateCodeComponent;
}());



/***/ }),

/***/ "./src/app/fb.ts":
/*!***********************!*\
  !*** ./src/app/fb.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var config = {
    apiKey: "AIzaSyAIcvfYspNPfT0pnSZR3qV8WcBrH3S3hyY",
    authDomain: "linken-25010.firebaseapp.com",
    databaseURL: "https://linken-25010.firebaseio.com",
    projectId: "linken-25010",
    storageBucket: "linken-25010.appspot.com",
    messagingSenderId: "928580850321",
    appId: "1:928580850321:web:36dcc200d4193237"
};
/* harmony default export */ __webpack_exports__["default"] = (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config) : firebase__WEBPACK_IMPORTED_MODULE_0__["app"]());


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userName {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYXJob2xBbmRXYWxsU3QvRG9jdW1lbnRzL1NDL2xua25TaXRlL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlck5hbWV7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG4iLCIudXNlck5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ "./src/app/fb.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../code.service */ "./src/app/code.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, codeService, zone, router) {
        this.authService = authService;
        this.codeService = codeService;
        this.zone = zone;
        this.router = router;
        this.user = {};
        this.codes = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserInfo().then(function (user) {
            if (!user.email)
                _this.router.navigateByUrl('/landing');
            else
                _this.user = user;
            _this.codeService.getUserCodes(_this.user.email).subscribe(function (data) {
                _this.codes = data;
            });
        });
    };
    HomeComponent.prototype.renderCode = function (code) {
        this.qrImageData = code.data;
    };
    HomeComponent.prototype.render = function (e) {
        console.log(e.result);
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        _fb__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(function () {
            _this.router.navigateByUrl('landing');
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _code_service__WEBPACK_IMPORTED_MODULE_5__["CodeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  -webkit-transform: translate(-50%, -20%);\n          transform: translate(-50%, -20%);\n}\n\n.btn-primary {\n  background-color: #C42021;\n}\n\n.landing-msg {\n  font-size: 1em;\n  color: #fff;\n  text-shadow: 2px 1px 5px #000001;\n}\n\n.logo {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.errorMsg {\n  font-size: 1em;\n  color: #880000;\n  margin-top: 10px;\n}\n\n.btn {\n  margin-bottom: 5px;\n}\n\ninput {\n  transition: all 0.3s ease-in-out;\n  opacity: 0.5;\n  border-radius: 20px;\n  padding: 10px;\n  height: 50px;\n}\n\n.reg-wrapper {\n  padding: 5px;\n  border-radius: 7px;\n  margin-top: 80px;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.reg-wrapper a {\n  color: #f9f100;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\ninput:hover {\n  opacity: 0.9;\n}\n\ninput:focus {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYXJob2xBbmRXYWxsU3QvRG9jdW1lbnRzL1NDL2xua25TaXRlL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNGSjs7QURLQTtFQUVJLHlCQUFBO0FDSEo7O0FETUE7RUFFSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDSko7O0FET0E7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFFSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0E7RUFFSSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ1JKOztBRFdBO0VBQ0ksY0E1RFk7RUE2RFosMkNBQUE7QUNSSjs7QURXQTtFQUNJLFlBQUE7QUNSSjs7QURXQTtFQUNJLFlBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5X2NvbG9yOiAjZjlmMTAwO1xuXG4ubWlkZGxlXG57XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwJTtcbiAgICBsZWZ0OjUwJTtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTIwJSk7XG59XG5cbi5idG4tcHJpbWFyeVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6I0M0MjAyMTtcbn1cblxuLmxhbmRpbmctbXNnXG57XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtc2hhZG93OiAycHggMXB4IDVweCByZ2JhKDAsMCwwLjgpO1xufVxuXG4ubG9nb1xue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZXJyb3JNc2dcbntcbiAgICBmb250LXNpemU6MWVtO1xuICAgIGNvbG9yOiM4ODAwMDA7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uYnRuXG57XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbmlucHV0e1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6MC41O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmVnLXdyYXBwZXJcbntcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOjdweDtcbiAgICBtYXJnaW4tdG9wOjgwcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNyk7XG59XG5cbi5yZWctd3JhcHBlciBhIHtcbiAgICBjb2xvcjokcHJpbWFyeV9jb2xvcjsgXG4gICAgdGV4dC1zaGFkb3c6MnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjYpO1xufVxuXG5pbnB1dDpob3ZlcntcbiAgICBvcGFjaXR5OjAuOTtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gICAgb3BhY2l0eTowLjk7XG59IiwiLm1pZGRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMCUpO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzQyMDIxO1xufVxuXG4ubGFuZGluZy1tc2cge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAycHggMXB4IDVweCAjMDAwMDAxO1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmVycm9yTXNnIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjODgwMDAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pbnB1dCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnJlZy13cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLnJlZy13cmFwcGVyIGEge1xuICBjb2xvcjogI2Y5ZjEwMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuaW5wdXQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ "./src/app/fb.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        this.user = {};
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginActive = true;
        _fb__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (authData) {
            console.log(authData);
            if (authData) {
                _this.hasUser = true;
                _this.router.navigateByUrl('/home');
            }
            else {
                _this.hasUser = false;
                /*this.formdata = new FormGroup({
                  email: new FormControl("", Validators.compose([ Validators.required, Validators.pattern("[^ @]*@[^ @]*") ])),
                  password: new FormControl("", Validators.compose([ Validators.required ])),
                  name: new FormControl("", Validators.compose([ Validators.required ])),
                  conf_password: new FormControl("", Validators.compose([ Validators.required ])),
                });*/
            }
        });
    };
    LandingComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
    };
    LandingComponent.prototype.showSignup = function () {
        this.signUpActive = true;
        this.loginActive = false;
    };
    LandingComponent.prototype.showLogin = function () {
        this.loginActive = true;
        this.signUpActive = false;
    };
    LandingComponent.prototype.login = function () {
        var _this = this;
        _fb__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(function () {
            _this.router.navigateByUrl('/home');
        }).catch(function () {
            _this.errorMsg = 'An error occured. Please check your login credentials and network and try again.';
            setTimeout(function () {
                _this.errorMsg = '';
            }, 3000);
        });
    };
    LandingComponent.prototype.join = function () {
        var _this = this;
        if (this.user.email && this.user.first_name && this.user.last_name && this.user.password && this.user.confirm_password) {
            if (this.user.password == this.user.confirm_password) {
                var db = _fb__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
                var users_1 = db.collection('users');
                _fb__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
                    var newUser = {
                        first_name: _this.user.first_name,
                        last_name: _this.user.last_name,
                        email: _this.user.email,
                        password: _this.user.password,
                        createdAt: Date.now(),
                        rank: 'm'
                    };
                    users_1.doc(_this.user.email).set(newUser).then(function () {
                        _fb__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(_this.user.email, _this.user.password).then(function () {
                            _this.router.navigateByUrl('/login');
                        });
                    }).catch(function () { });
                }).catch(function () {
                    _this.errorMsg = 'An error occured processing your request. Either an an account exists under that email, a network related problem, or something internal. Please try again.';
                    setTimeout(function () {
                        _this.errorMsg = '';
                    }, 3000);
                });
            }
            else {
                this.errorMsg = 'Passwords must match.';
                setTimeout(function () {
                    _this.errorMsg = '';
                }, 3000);
            }
        }
        else {
            this.errorMsg = 'All fields are required.';
            setTimeout(function () {
                _this.errorMsg = '';
            }, 3000);
        }
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
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

module.exports = __webpack_require__(/*! /Users/WarholAndWallSt/Documents/SC/lnknSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map