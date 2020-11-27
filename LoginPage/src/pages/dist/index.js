"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_mobile_1 = require("antd-mobile");
var antd_plus_1 = require("@alitajs/antd-plus");
var index_less_1 = require("./index.less");
var water_png_1 = require("../../assets/water.png");
var LoginPage = function () {
    var _a = react_1.useState(false), start = _a[0], setStart = _a[1];
    var handleClick = function () {
        setStart(true);
    };
    return (react_1["default"].createElement("div", { className: index_less_1["default"].container },
        react_1["default"].createElement("div", { className: index_less_1["default"].header },
            react_1["default"].createElement("img", { src: water_png_1["default"], alt: "" }),
            react_1["default"].createElement("span", null, "\u5C0F\u7A0B\u5E8F\u540D\u79F0")),
        react_1["default"].createElement(antd_mobile_1.List, { className: index_less_1["default"].content },
            react_1["default"].createElement(antd_mobile_1.InputItem, { clear: true, placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7" }, "\u624B\u673A\u53F7"),
            react_1["default"].createElement(antd_mobile_1.InputItem, { clear: true, extra: react_1["default"].createElement(antd_plus_1.SendCode, { type: "link", start: start, onClick: handleClick, second: 5, storageKey: "plus-send-code", initText: "\u53D1\u9001\u9A8C\u8BC1\u7801", runText: "{%s}\u79D2\u540E\u91CD\u65B0\u83B7\u53D6", resetText: "\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801", onEnd: function () {
                        setStart(false);
                    } }), placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801" }, "\u9A8C\u8BC1\u7801")),
        react_1["default"].createElement(antd_mobile_1.WingBlank, { size: "md", className: index_less_1["default"].btnStyle },
            react_1["default"].createElement(antd_mobile_1.Button, { style: { marginTop: '.4rem' } }, "\u767B\u5F55")),
        react_1["default"].createElement("span", { className: index_less_1["default"].contentBottom }, "\u7528\u6237\u6CE8\u518C")));
};
exports["default"] = LoginPage;
