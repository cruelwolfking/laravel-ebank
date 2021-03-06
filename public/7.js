webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/transfer/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			Vue: Vue,
			list: [],
			purse_type: '',
			user_type: '',
			reason: '',
			keyword: {
				page: 1,
				export: 0,
				user_id: '',
				purse_type_id: [],
				user_type_id: [],
				date: []
			},
			status: ['无效状态0', '有效', '<span class="mdui-text-color-deep-orange">已冲正</span>']
		};
	},

	methods: {
		search: function search(page) {
			this.keyword.page = page;
			this.keyword.export = 0;
			this.init();
		},
		exports: function exports() {
			this.keyword.export = 1;
			this.init();
		},
		untransfer: function untransfer(id, amount) {
			var t = this;
			mdui.prompt('冲正此记录后可能造成业务匹配问题，对应的转账金额也会原路返还，知悉后请在下方输入【冲正原因】', '冲正金额(分)：' + amount, function (value) {
				if (value) {
					post('/transfer/untransfer', { id: id, remarks: value }, function (data) {
						mdui.alert('已成功冲正并返还金额', function () {}, { history: false });
						t.init();
					});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		init: function init() {
			var t = this;
			get('/transfer', t.keyword, function (data) {
				t.list = data.list;
				t.purse_type = data.purse_type;
				t.user_type = data.user_type;
				t.reason = data.reason;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
		var tableFluidLeft = $('.table-data-fluid')[0];
		var table_width = $('.table-data').width(),
		    $scrollBar = $('.scrollbar');
		$('.scrollbar-bar').width(table_width);
		$scrollBar[0].addEventListener('scroll', function () {
			tableFluidLeft.scrollLeft = $scrollBar[0].scrollLeft;
		});
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ba2ec38\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/transfer/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "transfer_index" }, [
    _c("div", { staticClass: "typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t用户ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.user_id,
                expression: "keyword.user_id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.user_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "user_id", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t日期筛选："),
            _c("vue-datepicker-local", {
              attrs: { clearable: "" },
              model: {
                value: _vm.keyword.date,
                callback: function($$v) {
                  _vm.$set(_vm.keyword, "date", $$v)
                },
                expression: "keyword.date"
              }
            })
          ],
          1
        ),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t钱包类型：\n\t\t\t\t"),
            _vm._l(_vm.purse_type, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.purse_type_id,
                        expression: "keyword.purse_type_id"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.purse_type_id)
                        ? _vm._i(_vm.keyword.purse_type_id, id) > -1
                        : _vm.keyword.purse_type_id
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.purse_type_id,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "purse_type_id",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "purse_type_id",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "purse_type_id", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t用户类型：\n\t\t\t\t"),
            _vm._l(_vm.user_type, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.user_type_id,
                        expression: "keyword.user_type_id"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.user_type_id)
                        ? _vm._i(_vm.keyword.user_type_id, id) > -1
                        : _vm.keyword.user_type_id
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.user_type_id,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "user_type_id",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "user_type_id",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "user_type_id", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-theme",
            on: {
              click: function($event) {
                _vm.search(1)
              }
            }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("search")]
            ),
            _vm._v("搜索")
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-pink",
            on: { click: _vm.exports }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("file_upload")]
            ),
            _vm._v("导出")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid table-data-fluid" }, [
      _c(
        "table",
        { staticClass: "mdui-table mdui-table-hoverable table-data" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.list.data, function(val, key, index) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "mdui-color-grey-200",
                      on: {
                        click: function($event) {
                          val.more = !val.more
                        }
                      }
                    },
                    [
                      _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
                      _vm._v(" "),
                      _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.reason) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: {
                          textContent: _vm._s(_vm.reason[val.reason])
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-red-500",
                        domProps: { textContent: _vm._s(val.amount) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { innerHTML: _vm._s(_vm.status[val.status]) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.created_at) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.remarks) }
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "mdui-btn-group" }, [
                          val.status == 1
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "mdui-btn mdui-ripple mdui-color-theme",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      _vm.untransfer(val.id, val.amount)
                                    }
                                  }
                                },
                                [_vm._v("单笔冲正")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          val.status == 2
                            ? _c(
                                "a",
                                {
                                  staticClass: "mdui-btn",
                                  attrs: { disabled: "" }
                                },
                                [_vm._v("已冲正")]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: val.more,
                          expression: "val.more"
                        }
                      ]
                    },
                    [
                      _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-deep-orange" }, [
                        _vm._v("出账信息：")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("用户ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.out_user_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-deep-orange",
                        domProps: {
                          textContent: _vm._s(
                            _vm.user_type[val.out_user_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-deep-orange",
                        domProps: {
                          textContent: _vm._s(
                            _vm.purse_type[val.out_purse_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("钱包ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.out_purse_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "3" } }, [
                        _vm._v("出账后余额(原)："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.out_balance) }
                        }),
                        _vm._v("("),
                        _c("span", {
                          domProps: { textContent: _vm._s("+" + val.amount) }
                        }),
                        _vm._v(")")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: val.more,
                          expression: "val.more"
                        }
                      ]
                    },
                    [
                      _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-teal" }, [
                        _vm._v("进账信息：")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("用户ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.into_user_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-teal",
                        domProps: {
                          textContent: _vm._s(
                            _vm.user_type[val.into_user_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-teal",
                        domProps: {
                          textContent: _vm._s(
                            _vm.purse_type[val.into_purse_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("钱包ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.into_purse_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { colspan: "3" } }, [
                        _vm._v("进账后余额(原)："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.into_balance) }
                        }),
                        _vm._v("("),
                        _c("span", {
                          domProps: { textContent: _vm._s("-" + val.amount) }
                        }),
                        _vm._v(")")
                      ])
                    ]
                  )
                ]
              })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mdui-color-white footer" },
      [
        _c("pagination", {
          attrs: {
            pageInfo: {
              total: _vm.list.total,
              current: _vm.list.current_page,
              pagenum: _vm.list.per_page,
              page: _vm.list.last_page,
              pagegroup: 9,
              skin: "#2196F3"
            }
          },
          on: { change: _vm.search }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账reason")]),
        _vm._v(" "),
        _c("th", [_vm._v("reason说明")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账金额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("操作")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ba2ec38", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/transfer/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/transfer/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ba2ec38\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/transfer/index.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\transfer\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ba2ec38", Component.options)
  } else {
    hotAPI.reload("data-v-5ba2ec38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});