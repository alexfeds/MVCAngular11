(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\source\repos\MVCAngular11\clientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: timeToDecimal, roundTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeToDecimal", function() { return timeToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundTime", function() { return roundTime; });
//set time hh:mm to decimal (0.00)
function timeToDecimal(t) {
    return t.split(':')
        .map(function (val) { return parseInt(val, 10); })
        .reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue / Math.pow(60, index);
    });
}
// rounde up to the nearest 15 minutes
function roundTime(time, minutesToRound) {
    // e.g 05:34 AM to 05:34
    time = time.slice(0, 5);
    //split by column
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    // Convert hours and minutes to time in minutes
    time = (hours * 60) + minutes;
    const rounded = Math.round(time / minutesToRound) * minutesToRound;
    const rHr = '' + Math.floor(rounded / 60);
    return rHr.padStart(2, '0') + ':' + (15 * Math.ceil(minutes / 15));
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "HC5s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ "eO1q");















function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.addNewRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.submitRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.unSubmitRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-inputNumber", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_3_Template_p_inputNumber_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.hourRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.hourRate)("minFractionDigits", 2);
} }
function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Hourly Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_ng_template_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return time_sheet_r8.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", time_sheet_r8.id);
} }
function AppComponent_ng_template_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_ng_template_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return time_sheet_r8.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", time_sheet_r8.title);
} }
function AppComponent_ng_template_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", time_sheet_r8.title, " ");
} }
function AppComponent_ng_template_5_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-calendar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_ng_template_14_Template_p_calendar_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return time_sheet_r8.duration = $event; })("onBlur", function AppComponent_ng_template_5_ng_template_14_Template_p_calendar_onBlur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r36.onClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", time_sheet_r8.duration)("timeOnly", true);
} }
function AppComponent_ng_template_5_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, time_sheet_r8.duration, "hh:mm"), " ");
} }
function AppComponent_ng_template_5_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_ng_template_18_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return time_sheet_r8.hourlyRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", time_sheet_r8.hourlyRate);
} }
function AppComponent_ng_template_5_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, time_sheet_r8.hourlyRate, "1.2-2"), " ");
} }
function AppComponent_ng_template_5_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_ng_template_22_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return time_sheet_r8.total = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", time_sheet_r8.total);
} }
function AppComponent_ng_template_5_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", time_sheet_r8.total, " ");
} }
function AppComponent_ng_template_5_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_5_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r49.onRowEditInit(time_sheet_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_5_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const time_sheet_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.onRowEditSave(time_sheet_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_5_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const time_sheet_r8 = ctx_r56.$implicit; const ri_r10 = ctx_r56.rowIndex;; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r55.onRowEditCancel(time_sheet_r8, ri_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_5_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r60); const ri_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r58.confirmDelete(ri_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function AppComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_ng_template_5_ng_template_2_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function AppComponent_ng_template_5_Template_p_dropdown_onChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r61.onStateDropChange($event); })("ngModelChange", function AppComponent_ng_template_5_Template_p_dropdown_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ri_r10 = ctx.rowIndex;; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return (ctx_r63.selectedState[ri_r10] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_ng_template_5_ng_template_8_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_ng_template_5_ng_template_9_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-dropdown", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_5_Template_p_dropdown_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ri_r10 = ctx.rowIndex;; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return (ctx_r64.selectedJobType[ri_r10] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AppComponent_ng_template_5_ng_template_14_Template, 1, 2, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AppComponent_ng_template_5_ng_template_15_Template, 2, 4, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppComponent_ng_template_5_ng_template_18_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AppComponent_ng_template_5_ng_template_19_Template, 2, 4, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AppComponent_ng_template_5_ng_template_22_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AppComponent_ng_template_5_ng_template_23_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AppComponent_ng_template_5_button_25_Template, 1, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AppComponent_ng_template_5_button_26_Template, 1, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AppComponent_ng_template_5_button_27_Template, 1, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AppComponent_ng_template_5_button_28_Template, 1, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_sheet_r8 = ctx.$implicit;
    const editing_r9 = ctx.editing;
    const ri_r10 = ctx.rowIndex;;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c0, time_sheet_r8.state.code == "submitted"))("pEditableRow", time_sheet_r8)("pSelectableRow", time_sheet_r8)("pSelectableRowIndex", ri_r10)("pEditableRowDisabled", ctx_r2.some);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c0, time_sheet_r8.state.code == "submitted"))("pEditableColumn", time_sheet_r8)("pEditableColumnField", "id")("pEditableColumnRowIndex", ri_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", time_sheet_r8.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](44, _c0, time_sheet_r8.state.code == "submitted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "a", ri_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", time_sheet_r8.state.code == "submitted")("options", ctx_r2.states)("ngModel", ctx_r2.selectedState[ri_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](46, _c0, time_sheet_r8.state.code == "submitted"))("pEditableColumn", time_sheet_r8)("pEditableColumnField", "title")("pEditableColumnRowIndex", ri_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c0, time_sheet_r8.state.code == "submitted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "a", ri_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", time_sheet_r8.state.code == "submitted")("options", ctx_r2.jobTypes)("ngModel", ctx_r2.selectedJobType[ri_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c0, time_sheet_r8.state.code == "submitted"))("pEditableColumn", time_sheet_r8)("pEditableColumnField", "duration")("pEditableColumnRowIndex", ri_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c0, time_sheet_r8.state.code == "submitted"))("pEditableColumn", time_sheet_r8)("pEditableColumnField", "hourlyRate")("pEditableColumnRowIndex", ri_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c0, time_sheet_r8.state.code == "submitted"))("pEditableColumn", time_sheet_r8)("pEditableColumnField", "total")("pEditableColumnRowIndex", ri_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r9);
} }
class AppComponent {
    constructor(confirmationService, notificationService) {
        this.confirmationService = confirmationService;
        this.notificationService = notificationService;
        this.title = 'time sheet';
        this.selectedState = [];
        this.selectedJobType = [];
        this.clonedTimeSheets = {};
        this.states = [
            { name: 'Active', code: 'active' },
            { name: 'Submitted', code: 'submitted' },
        ];
        this.jobTypes = [
            { name: 'Telephone Call', code: 'call' },
            { name: 'Research', code: 'research' },
            { name: 'Research and Drafting Document', code: 'document' },
        ];
    }
    ngOnInit() {
        //fill in default values for timesheet
        this.timesheets = [
            {
                id: Math.floor(Math.random() * (100 + 1)),
                state: this.states[0],
                title: "",
                type: this.jobTypes,
                duration: null,
                hourlyRate: this.hourRate,
                total: 0
            }
        ];
        this.selectedState = [this.states[0]];
    }
    //called to add new row to top
    addNewRow() {
        //this sheet is added to top
        const timesheetSecond = [
            {
                id: Math.floor(Math.random() * (100 + 1)),
                state: this.states[0],
                title: "",
                type: this.jobTypes,
                duration: null,
                hourlyRate: this.hourRate,
                total: 0
            }
        ];
        this.selectedState = [this.states[0]];
        //remove last item
        this.timesheets.splice(this.timesheets.length, 1);
        //check if hour rate been filled in on the form
        if (this.hourRate) {
            timesheetSecond[0].hourlyRate = this.hourRate;
        }
        // add it to the index with 
        this.timesheets.splice(0, 0, timesheetSecond[0]);
    }
    //colls when row start editted
    rowEdited(event) {
        //sets date from cell
        this.cellEvent = event;
        //check if cell has hourly rate filled in in cell by user
        if (this.cellEvent.data.hourlyRate != null) {
            console.log("well");
            this.calculateRate(event);
        }
    }
    calculateRate(event) {
        if (event) {
            //sets data from cell object
            const cellDuration = this.cellEvent.data.duration;
            const cellHourlyRate = this.cellEvent.data.hourlyRate;
            const rowIndex = this.cellEvent.index;
            //check if either hour filled in in the form on in the cell
            //checks if duration has been provided
            if ((this.hourRate != null && cellDuration) || (cellHourlyRate != null && cellDuration)) {
                console.log("well from cacl");
                //formate date to hh:mm a
                const format = 'h:mm a';
                const locale = 'en-US';
                const formattedDateToTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(cellDuration, format, locale); //return time in hh:mm format
                //round to closest 5 minutes
                const roundedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["roundTime"])(formattedDateToTime, 15);
                //set time hh:mm to decimal (0.00)
                const timeInDecimal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["timeToDecimal"])(roundedTime);
                let hourByDurationResult;
                //called if hour rate has been filled in the form input
                if (this.hourRate != null && cellHourlyRate == null) {
                    hourByDurationResult = timeInDecimal * this.hourRate;
                    //called if hour rate has been filled in the cell row input
                }
                else if (cellHourlyRate != null) {
                    hourByDurationResult = timeInDecimal * cellHourlyRate;
                }
                //set the calculated result back to total property of the row
                this.timesheets[rowIndex].total = hourByDurationResult;
            }
        }
    }
    deleteRow(index) {
        this.timesheets = this.timesheets.slice(0, index).concat(this.timesheets.slice(index + 1));
    }
    confirmDelete(index) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete row?',
            accept: () => {
                this.deleteRow(index);
            }
        });
    }
    //called when calendar has been closed event
    onClose(event) {
        this.calculateRate(event);
    }
    // sets row index on row select
    onRowSelect(event) {
        this.rowIdex = event.index;
    }
    trackByIndex(index, obj) {
        return index;
    }
    //on state dropdown change sets the state to the current data sheet
    onStateDropChange(event) {
        this.timesheets[this.rowIdex].state = event.value;
    }
    submitRow() {
        this.timesheets[this.rowIdex].state = this.states[1];
        this.selectedState[this.rowIdex] = this.states[1];
        this.notificationService.add({ severity: 'success', summary: `Row  ${this.timesheets[this.rowIdex].id} submitted` });
        setTimeout(() => {
            this.notificationService.clear();
        }, 6000);
    }
    unSubmitRow() {
        this.timesheets[this.rowIdex].state = this.states[0];
        this.selectedState[this.rowIdex] = this.states[0];
        this.notificationService.add({ severity: 'success', summary: `Row  ${this.timesheets[this.rowIdex].id} unsubmitted` });
        setTimeout(() => {
            this.notificationService.clear();
        }, 6000);
    }
    //used for changing states of row edit/not edit
    onRowEditInit(timesheet) {
        this.clonedTimeSheets[timesheet.id] = Object.assign({}, timesheet);
    }
    onRowDisable(timesheet) {
        this.clonedTimeSheets[timesheet.id] = Object.assign({}, timesheet);
    }
    onRowEditCancel(timesheet, index) {
        if (this.timesheetSecond)
            this.timesheetSecond[index] = this.clonedTimeSheets[timesheet.id];
        delete this.timesheetSecond[timesheet.id];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["time-sheet"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 6, vars: 4, consts: [["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [3, "closable"], ["dataKey", "id", "editMode", "row", "selectionMode", "single", 3, "value", "rowTrackBy", "selection", "onRowSelect", "onEditComplete", "onEditInit", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "p-d-flex"], [1, "button-wrapper"], ["pButton", "", "pRipple", "", "type", "button", "label", "New", "styleClass", "p-button-sm", 1, "p-button-rounded", "p-button-help", 3, "click"], ["icon", "pi pi-check", "pButton", "", "pRipple", "", "type", "button", "label", "Submit", "styleClass", "p-button-sm", 1, "p-button-rounded", 3, "click"], ["icon", "pi pi-refresh", "pButton", "", "pRipple", "", "type", "button", "label", "Unsubmit", "styleClass", "p-button-sm", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "p-input-icon-left", "p-ml-auto"], ["ngDefaultControl", "", "placeholder", "Hourly Rate", "mode", "decimal", 3, "ngModel", "minFractionDigits", "ngModelChange"], [2, "width", "5rem"], [2, "width", "10rem"], [3, "ngClass", "pEditableRow", "pSelectableRow", "pSelectableRowIndex", "pEditableRowDisabled"], [2, "width", "10rem", 3, "ngClass", "pEditableColumn", "pEditableColumnField", "pEditableColumnRowIndex"], ["pTemplate", "input"], [2, "width", "10rem", 3, "ngClass"], ["styleClass", "drop-full-width", "optionLabel", "name", 3, "readonly", "name", "options", "ngModel", "onChange", "ngModelChange"], ["pTemplate", "output"], ["styleClass", "drop-full-width", "optionLabel", "name", 3, "readonly", "name", "options", "ngModel", "ngModelChange"], [2, "text-align", "center"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "class", "p-button-rounded p-button-text p-button-success p-mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pInputText", "", "type", "text", 1, "p-inputtext-sm", "width-full", 3, "ngModel", "ngModelChange"], ["inputId", "timeonly", 3, "ngModel", "timeOnly", "ngModelChange", "onBlur"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", "p-button-success", "p-mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-confirmDialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-messages", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function AppComponent_Template_p_table_onRowSelect_2_listener($event) { return ctx.onRowSelect($event); })("onEditComplete", function AppComponent_Template_p_table_onEditComplete_2_listener($event) { return ctx.rowEdited($event); })("onEditInit", function AppComponent_Template_p_table_onEditInit_2_listener($event) { return ctx.rowEdited($event); })("selectionChange", function AppComponent_Template_p_table_selectionChange_2_listener($event) { return ctx.selectedTimeSheet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 9, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 15, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 29, 56, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.timesheets)("rowTrackBy", ctx.trackByIndex)("selection", ctx.selectedTimeSheet);
    } }, directives: [primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["Messages"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["EditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["EditableColumn"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["CellEditor"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], primeng_calendar__WEBPACK_IMPORTED_MODULE_12__["Calendar"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["InitEditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SaveEditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["CancelEditableRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n}\r\ninput.p-inputtext-sm.width-full[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]  .drop-full-width.p-dropdown.p-component {\r\n    width: 100%;\r\n}\r\ntr.p-selectable-row.ng-star-inserted.disabled[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n    opacity: 0.3;\r\n}\r\n.button-wrapper[_ngcontent-%COMP%] {\r\n    padding-right: 1em;\r\n}\r\ntd.p-editable-column.disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    background-color: #f5f5f5;\r\n    opacity: 0.3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcbmlucHV0LnAtaW5wdXR0ZXh0LXNtLndpZHRoLWZ1bGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdD4+PiAuZHJvcC1mdWxsLXdpZHRoLnAtZHJvcGRvd24ucC1jb21wb25lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLnAtc2VsZWN0YWJsZS1yb3cubmctc3Rhci1pbnNlcnRlZC5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbnRkLnAtZWRpdGFibGUtY29sdW1uLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");





//primeng










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            //primeng
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__["InputNumberModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        //primeng
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__["InputNumberModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map