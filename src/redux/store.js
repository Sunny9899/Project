"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var Slice_1 = require("./Slice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        filters: Slice_1["default"]
    }
});
