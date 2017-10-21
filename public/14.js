webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-runtime\",\"transform-vue-jsx\"],\"comments\":false,\"env\":{\"test\":{\"plugins\":[\"istanbul\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/page/system/role/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("./resources/assets/js/api/api.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tableConfig: {
                apiUrl: __WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* List */].role
            }
        };
    },

    methods: {
        buttons: function buttons(type, row, Context) {
            var _this = this;

            if (type === 'show') {
                Context.$router.push({ name: 'system.role.show', params: { id: row.id } });
            } else if (type === 'edit') {
                Context.$router.push({ name: 'system.role.edit', params: { id: row.id } });
            } else if (type === 'destroy') {
                swal({
                    title: '删除',
                    text: '确认删除该角色?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* destroySystemRole */])(row).then(function () {
                            _this.$refs.datatables.removeDetailRow('id', row.id);
                            swal("已删除!", "角色已经删除", "success");
                        }).catch(function () {
                            swal("失败", "角色删除失败", "error");
                        });
                    } else {
                        swal("取消", "取消操作", "error");
                    }
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2acb686a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/page/system/role/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("vuestic-widget", { attrs: { "header-text": "操作" } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info",
                on: {
                  click: function($event) {
                    _vm.$router.push({ name: "system.role.create" })
                  }
                }
              },
              [_vm._v("\n                    添加\n                ")]
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            { attrs: { headerText: "Search & Pagination" } },
            [
              _c("vuestic-data-table", {
                ref: "datatables",
                attrs: { tableConfig: _vm.tableConfig },
                on: { buttons: _vm.buttons }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2acb686a", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/page/system/role/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-runtime\",\"transform-vue-jsx\"],\"comments\":false,\"env\":{\"test\":{\"plugins\":[\"istanbul\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/page/system/role/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2acb686a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/page/system/role/Index.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/page/system/role/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2acb686a", Component.options)
  } else {
    hotAPI.reload("data-v-2acb686a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});