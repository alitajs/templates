"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_mobile_1 = require("antd-mobile");
var index_less_1 = require("./index.less");
var Item = antd_mobile_1.List.Item;
var AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
var DoctorListPage = function () {
    return (react_1["default"].createElement("div", { className: index_less_1["default"].ListStyle },
        react_1["default"].createElement(antd_mobile_1.List, null,
            react_1["default"].createElement(Item, { thumb: AvatarImg },
                react_1["default"].createElement(antd_mobile_1.Flex, { direction: "column", align: "start" },
                    react_1["default"].createElement(antd_mobile_1.Flex, { style: { marginBottom: '0.08rem' } },
                        react_1["default"].createElement("span", { className: index_less_1["default"].doctorName }, "\u5F20\u8C46\u8C46"),
                        react_1["default"].createElement("span", { className: index_less_1["default"].doctorIdentity }, "\u4E3B\u4EFB\u533B\u751F")),
                    react_1["default"].createElement("span", { className: index_less_1["default"].place }, "\u5317\u4EAC\u534F\u548C\u533B\u9662 \u9AA8\u79D1"),
                    react_1["default"].createElement("span", { className: index_less_1["default"].treatmentContent }, "\u64C5\u957F: \u513F\u7AE5\u53CA\u6210\u4EBA\u5185\u5206\u6CCC\u75BE\u75C5, \u7532\u72B6\u817A\u75BE\u75C5"))))));
};
exports["default"] = DoctorListPage;
