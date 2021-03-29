'use strict';

var prop_types_1 = require('prop-types');
var react_native_1 = require('react-native');
require('@expo/react-native-action-sheet');
var uuid_1 = require('uuid');
var react_native_iphone_x_helper_1 = require('react-native-iphone-x-helper');
var dayjs_1 = require('dayjs');
require('react-native-parsed-text');
var react_native_communications_1 = require('react-native-communications');
require('react-native-lightbox');
require('react-native-typing-animation');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var prop_types_1__default = /*#__PURE__*/_interopDefaultLegacy(prop_types_1);
var react_native_1__default = /*#__PURE__*/_interopDefaultLegacy(react_native_1);
var uuid_1__default = /*#__PURE__*/_interopDefaultLegacy(uuid_1);
var react_native_iphone_x_helper_1__default = /*#__PURE__*/_interopDefaultLegacy(react_native_iphone_x_helper_1);
var dayjs_1__default = /*#__PURE__*/_interopDefaultLegacy(dayjs_1);
var react_native_communications_1__default = /*#__PURE__*/_interopDefaultLegacy(react_native_communications_1);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends,
	get __assign () { return __assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__createBinding: __createBinding,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet
});

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

var react = /*#__PURE__*/Object.freeze({
	__proto__: null
});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.dayjs_plugin_localizedFormat=t();}(undefined,function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,o){var r=n.prototype,M=r.format;o.en.formats=e,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,o=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,o,r){var M=r&&r.toUpperCase();return o||n[r]||e[r]||n[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})})}(t,void 0===n?{}:n);return M.call(this,o)};}});

var localizedFormat = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var tslib_1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var utils = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.error = exports.warning = exports.isSameUser = exports.isSameDay = exports.StylePropType = void 0;



exports.StylePropType = prop_types_1__default['default']["default"].oneOfType([
    prop_types_1__default['default']["default"].array,
    prop_types_1__default['default']["default"].object,
    prop_types_1__default['default']["default"].number,
    prop_types_1__default['default']["default"].bool,
]);
function isSameDay(currentMessage, diffMessage) {
    if (!diffMessage || !diffMessage.createdAt) {
        return false;
    }
    var currentCreatedAt = dayjs_1__default['default']["default"](currentMessage.createdAt);
    var diffCreatedAt = dayjs_1__default['default']["default"](diffMessage.createdAt);
    if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
        return false;
    }
    return currentCreatedAt.isSame(diffCreatedAt, 'day');
}
exports.isSameDay = isSameDay;
function isSameUser(currentMessage, diffMessage) {
    return !!(diffMessage &&
        diffMessage.user &&
        currentMessage.user &&
        diffMessage.user._id === currentMessage.user._id);
}
exports.isSameUser = isSameUser;
var styleString = function (color) { return "color: " + color + "; font-weight: bold"; };
var headerLog = '%c[react-native-gifted-chat]';
exports.warning = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, tslib_1.__spreadArrays([headerLog, styleString('orange')], args));
};
exports.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, tslib_1.__spreadArrays([headerLog, styleString('red')], args));
};
//# sourceMappingURL=utils.js.map
});

var Color = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports["default"] = {
    defaultColor: '#b2b2b2',
    backgroundTransparent: 'transparent',
    defaultBlue: '#0084ff',
    leftBubbleBackground: '#f0f0f0',
    black: '#000',
    white: '#fff',
    carrot: '#e67e22',
    emerald: '#2ecc71',
    peterRiver: '#3498db',
    wisteria: '#8e44ad',
    alizarin: '#e74c3c',
    turquoise: '#1abc9c',
    midnightBlue: '#2c3e50',
    optionTintColor: '#007AFF',
    timeTextColor: '#aaa'
};
//# sourceMappingURL=Color.js.map
});

var react_1 = /*@__PURE__*/getAugmentedNamespace(react);

var Actions_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var Actions = /** @class */ (function (_super) {
    tslib_1.__extends(Actions, _super);
    function Actions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onActionsPress = function () {
            var options = _this.props.options;
            var optionKeys = Object.keys(options);
            var cancelButtonIndex = optionKeys.indexOf('Cancel');
            _this.context.actionSheet().showActionSheetWithOptions({
                options: optionKeys,
                cancelButtonIndex: cancelButtonIndex,
                tintColor: _this.props.optionTintColor
            }, function (buttonIndex) {
                var key = optionKeys[buttonIndex];
                if (key) {
                    options[key](_this.props);
                }
            });
        };
        return _this;
    }
    Actions.prototype.renderIcon = function () {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (<react_native_1.View style={[styles.wrapper, this.props.wrapperStyle]}>
        <react_native_1.Text style={[styles.iconText, this.props.iconTextStyle]}>+</react_native_1.Text>
      </react_native_1.View>);
    };
    Actions.prototype.render = function () {
        return (<react_native_1.TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={this.props.onPressActionButton || this.onActionsPress}>
        {this.renderIcon()}
      </react_native_1.TouchableOpacity>);
    };
    Actions.defaultProps = {
        options: {},
        optionTintColor: Color["default"].optionTintColor,
        icon: undefined,
        containerStyle: {},
        iconTextStyle: {},
        wrapperStyle: {}
    };
    Actions.propTypes = {
        onSend: prop_types_1__default['default']["default"].func,
        options: prop_types_1__default['default']["default"].object,
        optionTintColor: prop_types_1__default['default']["default"].string,
        icon: prop_types_1__default['default']["default"].func,
        onPressActionButton: prop_types_1__default['default']["default"].func,
        wrapperStyle: utils.StylePropType,
        containerStyle: utils.StylePropType
    };
    Actions.contextTypes = {
        actionSheet: prop_types_1__default['default']["default"].func
    };
    return Actions;
}(react_1["default"].Component));
exports["default"] = Actions;
var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10
    },
    wrapper: {
        borderRadius: 13,
        borderColor: Color["default"].defaultColor,
        borderWidth: 2,
        flex: 1
    },
    iconText: {
        color: Color["default"].defaultColor,
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: Color["default"].backgroundTransparent,
        textAlign: 'center'
    }
});
//# sourceMappingURL=Actions.jsx.map
});

var GiftedAvatar_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var carrot = Color["default"].carrot, emerald = Color["default"].emerald, peterRiver = Color["default"].peterRiver, wisteria = Color["default"].wisteria, alizarin = Color["default"].alizarin, turquoise = Color["default"].turquoise, midnightBlue = Color["default"].midnightBlue;
var styles = react_native_1__default['default'].StyleSheet.create({
    avatarStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20
    },
    avatarTransparent: {
        backgroundColor: Color["default"].backgroundTransparent
    },
    textStyle: {
        color: Color["default"].white,
        fontSize: 16,
        backgroundColor: Color["default"].backgroundTransparent,
        fontWeight: '100'
    }
});
var GiftedAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(GiftedAvatar, _super);
    function GiftedAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatarName = undefined;
        _this.avatarColor = undefined;
        _this.handleOnPress = function () {
            var _a = _this.props; _a.onPress; var other = tslib_1.__rest(_a, ["onPress"]);
            if (_this.props.onPress) {
                _this.props.onPress(other);
            }
        };
        _this.handleOnLongPress = function () { };
        return _this;
    }
    GiftedAvatar.prototype.setAvatarColor = function () {
        var userName = (this.props.user && this.props.user.name) || '';
        var name = userName.toUpperCase().split(' ');
        if (name.length === 1) {
            this.avatarName = "" + name[0].charAt(0);
        }
        else if (name.length > 1) {
            this.avatarName = "" + name[0].charAt(0) + name[1].charAt(0);
        }
        else {
            this.avatarName = '';
        }
        var sumChars = 0;
        for (var i = 0; i < userName.length; i += 1) {
            sumChars += userName.charCodeAt(i);
        }
        // inspired by https://github.com/wbinnssmith/react-user-avatar
        // colors from https://flatuicolors.com/
        var colors = [
            carrot,
            emerald,
            peterRiver,
            wisteria,
            alizarin,
            turquoise,
            midnightBlue,
        ];
        this.avatarColor = colors[sumChars % colors.length];
    };
    GiftedAvatar.prototype.renderAvatar = function () {
        var user = this.props.user;
        if (user) {
            if (typeof user.avatar === 'function') {
                return user.avatar([styles.avatarStyle, this.props.avatarStyle]);
            }
            else if (typeof user.avatar === 'string') {
                return (<react_native_1.Image source={{ uri: user.avatar }} style={[styles.avatarStyle, this.props.avatarStyle]}/>);
            }
            else if (typeof user.avatar === 'number') {
                return (<react_native_1.Image source={user.avatar} style={[styles.avatarStyle, this.props.avatarStyle]}/>);
            }
        }
        return null;
    };
    GiftedAvatar.prototype.renderInitials = function () {
        return (<react_native_1.Text style={[styles.textStyle, this.props.textStyle]}>
        {this.avatarName}
      </react_native_1.Text>);
    };
    GiftedAvatar.prototype.render = function () {
        if (!this.props.user ||
            (!this.props.user.name && !this.props.user.avatar)) {
            // render placeholder
            return (<react_native_1.View style={[
                styles.avatarStyle,
                styles.avatarTransparent,
                this.props.avatarStyle,
            ]} accessibilityTraits='image'/>);
        }
        if (this.props.user.avatar) {
            return (<react_native_1.TouchableOpacity disabled={!this.props.onPress} onPress={this.props.onPress} onLongPress={this.props.onLongPress} accessibilityTraits='image'>
          {this.renderAvatar()}
        </react_native_1.TouchableOpacity>);
        }
        this.setAvatarColor();
        return (<react_native_1.TouchableOpacity disabled={!this.props.onPress} onPress={this.props.onPress} onLongPress={this.props.onLongPress} style={[
            styles.avatarStyle,
            { backgroundColor: this.avatarColor },
            this.props.avatarStyle,
        ]} accessibilityTraits='image'>
        {this.renderInitials()}
      </react_native_1.TouchableOpacity>);
    };
    GiftedAvatar.defaultProps = {
        user: {
            name: null,
            avatar: null
        },
        onPress: undefined,
        onLongPress: undefined,
        avatarStyle: {},
        textStyle: {}
    };
    GiftedAvatar.propTypes = {
        user: prop_types_1__default['default']["default"].object,
        onPress: prop_types_1__default['default']["default"].func,
        onLongPress: prop_types_1__default['default']["default"].func,
        avatarStyle: utils.StylePropType,
        textStyle: utils.StylePropType
    };
    return GiftedAvatar;
}(react_1["default"].Component));
exports["default"] = GiftedAvatar;
//# sourceMappingURL=GiftedAvatar.jsx.map
});

var Avatar_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var styles = {
    left: react_native_1__default['default'].StyleSheet.create({
        container: {
            marginRight: 8
        },
        onTop: {
            alignSelf: 'flex-start'
        },
        onBottom: {},
        image: {
            height: 36,
            width: 36,
            borderRadius: 18
        }
    }),
    right: react_native_1__default['default'].StyleSheet.create({
        container: {
            marginLeft: 8
        },
        onTop: {
            alignSelf: 'flex-start'
        },
        onBottom: {},
        image: {
            height: 36,
            width: 36,
            borderRadius: 18
        }
    })
};
var Avatar = /** @class */ (function (_super) {
    tslib_1.__extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.renderAvatar = function () {
        var _this = this;
        if (this.props.renderAvatar) {
            var _a = this.props; _a.renderAvatar; var avatarProps = tslib_1.__rest(_a, ["renderAvatar"]);
            return this.props.renderAvatar(avatarProps);
        }
        if (this.props.currentMessage) {
            return (<GiftedAvatar_1.default avatarStyle={[
                styles[this.props.position].image,
                this.props.imageStyle &&
                    this.props.imageStyle[this.props.position],
            ]} textStyle={this.props.textStyle ? this.props.textStyle : {}} user={this.props.currentMessage.user} onPress={function () {
                return _this.props.onPressAvatar &&
                    _this.props.onPressAvatar(_this.props.currentMessage.user);
            }} onLongPress={function () {
                return _this.props.onLongPressAvatar &&
                    _this.props.onLongPressAvatar(_this.props.currentMessage.user);
            }}/>);
        }
        return null;
    };
    Avatar.prototype.render = function () {
        var _a = this.props, renderAvatarOnTop = _a.renderAvatarOnTop, showAvatarForEveryMessage = _a.showAvatarForEveryMessage, containerStyle = _a.containerStyle, position = _a.position, currentMessage = _a.currentMessage, renderAvatar = _a.renderAvatar, previousMessage = _a.previousMessage, nextMessage = _a.nextMessage, imageStyle = _a.imageStyle;
        var messageToCompare = renderAvatarOnTop ? previousMessage : nextMessage;
        var computedStyle = renderAvatarOnTop ? 'onTop' : 'onBottom';
        if (renderAvatar === null) {
            return null;
        }
        if (!showAvatarForEveryMessage &&
            currentMessage &&
            messageToCompare &&
            utils.isSameUser(currentMessage, messageToCompare) &&
            utils.isSameDay(currentMessage, messageToCompare)) {
            return (<react_native_1.View style={[
                styles[position].container,
                containerStyle && containerStyle[position],
            ]}>
          <GiftedAvatar_1.default avatarStyle={[
                styles[position].image,
                imageStyle && imageStyle[position],
            ]}/>
        </react_native_1.View>);
        }
        return (<react_native_1.View style={[
            styles[position].container,
            styles[position][computedStyle],
            containerStyle && containerStyle[position],
        ]}>
        {this.renderAvatar()}
      </react_native_1.View>);
    };
    Avatar.defaultProps = {
        renderAvatarOnTop: false,
        showAvatarForEveryMessage: false,
        position: 'left',
        currentMessage: {
            user: null
        },
        previousMessage: {},
        nextMessage: {},
        containerStyle: {},
        imageStyle: {},
        onPressAvatar: function () { },
        onLongPressAvatar: function () { }
    };
    Avatar.propTypes = {
        renderAvatarOnTop: prop_types_1__default['default']["default"].bool,
        showAvatarForEveryMessage: prop_types_1__default['default']["default"].bool,
        position: prop_types_1__default['default']["default"].oneOf(['left', 'right']),
        currentMessage: prop_types_1__default['default']["default"].object,
        previousMessage: prop_types_1__default['default']["default"].object,
        nextMessage: prop_types_1__default['default']["default"].object,
        onPressAvatar: prop_types_1__default['default']["default"].func,
        onLongPressAvatar: prop_types_1__default['default']["default"].func,
        renderAvatar: prop_types_1__default['default']["default"].func,
        containerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        imageStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        })
    };
    return Avatar;
}(react_1["default"].Component));
exports["default"] = Avatar;
//# sourceMappingURL=Avatar.jsx.map
});

createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 300
    },
    quickReply: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        maxWidth: 200,
        paddingVertical: 7,
        paddingHorizontal: 12,
        minHeight: 50,
        borderRadius: 13,
        margin: 3
    },
    quickReplyText: {
        overflow: 'visible'
    },
    sendLink: {
        borderWidth: 0
    },
    sendLinkText: {
        color: Color["default"].defaultBlue,
        fontWeight: '600',
        fontSize: 17
    }
});
var sameReply = function (currentReply) { return function (reply) {
    return currentReply.value === reply.value;
}; };
var diffReply = function (currentReply) { return function (reply) {
    return currentReply.value !== reply.value;
}; };
var QuickReplies = /** @class */ (function (_super) {
    tslib_1.__extends(QuickReplies, _super);
    function QuickReplies() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            replies: []
        };
        _this.handlePress = function (reply) { return function () {
            var currentMessage = _this.props.currentMessage;
            var replies = _this.state.replies;
            if (currentMessage) {
                var type = currentMessage.quickReplies.type;
                switch (type) {
                    case 'radio': {
                        _this.handleSend([reply])();
                        return;
                    }
                    case 'checkbox': {
                        if (replies.find(sameReply(reply))) {
                            _this.setState({
                                replies: _this.state.replies.filter(diffReply(reply))
                            });
                        }
                        else {
                            _this.setState({ replies: tslib_1.__spreadArrays(_this.state.replies, [reply]) });
                        }
                        return;
                    }
                    default: {
                        utils.warning("onQuickReply unknown type: " + type);
                        return;
                    }
                }
            }
        }; };
        _this.handleSend = function (replies) { return function () {
            var currentMessage = _this.props.currentMessage;
            if (_this.props.onQuickReply) {
                _this.props.onQuickReply(replies.map(function (reply) { return (tslib_1.__assign(tslib_1.__assign({}, reply), { messageId: currentMessage._id })); }));
            }
        }; };
        _this.shouldComponentDisplay = function () {
            var _a = _this.props, currentMessage = _a.currentMessage, nextMessage = _a.nextMessage;
            var hasReplies = !!currentMessage && !!currentMessage.quickReplies;
            var hasNext = !!nextMessage && !!nextMessage._id;
            var keepIt = currentMessage.quickReplies.keepIt;
            if (hasReplies && !hasNext) {
                return true;
            }
            if (hasReplies && hasNext && keepIt) {
                return true;
            }
            return false;
        };
        _this.renderQuickReplySend = function () {
            var replies = _this.state.replies;
            var _a = _this.props, sendText = _a.sendText, customSend = _a.renderQuickReplySend;
            return (<react_native_1.TouchableOpacity style={[styles.quickReply, styles.sendLink]} onPress={_this.handleSend(replies)}>
        {customSend ? (customSend()) : (<react_native_1.Text style={styles.sendLinkText}>{sendText}</react_native_1.Text>)}
      </react_native_1.TouchableOpacity>);
        };
        return _this;
    }
    QuickReplies.prototype.render = function () {
        var _this = this;
        var _a = this.props, currentMessage = _a.currentMessage, color = _a.color, quickReplyStyle = _a.quickReplyStyle;
        var replies = this.state.replies;
        if (!this.shouldComponentDisplay()) {
            return null;
        }
        var type = currentMessage.quickReplies.type;
        return (<react_native_1.View style={styles.container}>
        {currentMessage.quickReplies.values.map(function (reply, index) {
            var selected = type === 'checkbox' && replies.find(sameReply(reply));
            return (<react_native_1.TouchableOpacity onPress={_this.handlePress(reply)} style={[
                styles.quickReply,
                quickReplyStyle,
                { borderColor: color },
                selected && { backgroundColor: color },
            ]} key={reply.value + "-" + index}>
                <react_native_1.Text numberOfLines={10} ellipsizeMode={'tail'} style={[
                styles.quickReplyText,
                { color: selected ? Color["default"].white : color },
            ]}>
                  {reply.title}
                </react_native_1.Text>
              </react_native_1.TouchableOpacity>);
        })}
        {replies.length > 0 && this.renderQuickReplySend()}
      </react_native_1.View>);
    };
    QuickReplies.defaultProps = {
        currentMessage: {
            quickReplies: []
        },
        onQuickReply: function () { },
        color: Color["default"].peterRiver,
        sendText: 'Send',
        keepReplies: false,
        renderQuickReplySend: undefined,
        quickReplyStyle: undefined
    };
    QuickReplies.propTypes = {
        currentMessage: prop_types_1__default['default']["default"].object.isRequired,
        onQuickReply: prop_types_1__default['default']["default"].func,
        color: prop_types_1__default['default']["default"].string,
        sendText: prop_types_1__default['default']["default"].string,
        keepReplies: prop_types_1__default['default']["default"].bool,
        renderQuickReplySend: prop_types_1__default['default']["default"].func,
        quickReplyStyle: utils.StylePropType
    };
    return QuickReplies;
}(react_1.Component));
exports["default"] = QuickReplies;
//# sourceMappingURL=QuickReplies.jsx.map
});

var MessageText_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;




// @ts-ignore



var WWW_URL_PATTERN = /^www\./i;
var textStyle = {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
};
var styles = {
    left: react_native_1__default['default'].StyleSheet.create({
        container: {},
        text: tslib_1.__assign({ color: 'black' }, textStyle),
        link: {
            color: 'black',
            textDecorationLine: 'underline'
        }
    }),
    right: react_native_1__default['default'].StyleSheet.create({
        container: {},
        text: tslib_1.__assign({ color: 'white' }, textStyle),
        link: {
            color: 'white',
            textDecorationLine: 'underline'
        }
    })
};
var DEFAULT_OPTION_TITLES = ['Call', 'Text', 'Cancel'];
var MessageText = /** @class */ (function (_super) {
    tslib_1.__extends(MessageText, _super);
    function MessageText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUrlPress = function (url) {
            // When someone sends a message that includes a website address beginning with "www." (omitting the scheme),
            // react-native-parsed-text recognizes it as a valid url, but Linking fails to open due to the missing scheme.
            if (WWW_URL_PATTERN.test(url)) {
                _this.onUrlPress("http://" + url);
            }
            else {
                react_native_1__default['default'].Linking.canOpenURL(url).then(function (supported) {
                    if (!supported) {
                        console.error('No handler for URL:', url);
                    }
                    else {
                        react_native_1__default['default'].Linking.openURL(url);
                    }
                });
            }
        };
        _this.onPhonePress = function (phone) {
            var optionTitles = _this.props.optionTitles;
            var options = optionTitles && optionTitles.length > 0
                ? optionTitles.slice(0, 3)
                : DEFAULT_OPTION_TITLES;
            var cancelButtonIndex = options.length - 1;
            _this.context.actionSheet().showActionSheetWithOptions({
                options: options,
                cancelButtonIndex: cancelButtonIndex
            }, function (buttonIndex) {
                switch (buttonIndex) {
                    case 0:
                        react_native_communications_1__default['default']["default"].phonecall(phone, true);
                        break;
                    case 1:
                        react_native_communications_1__default['default']["default"].text(phone);
                        break;
                }
            });
        };
        _this.onEmailPress = function (email) {
            return react_native_communications_1__default['default']["default"].email([email], null, null, null, null);
        };
        return _this;
    }
    MessageText.prototype.shouldComponentUpdate = function (nextProps) {
        return (!!this.props.currentMessage &&
            !!nextProps.currentMessage &&
            this.props.currentMessage.text !== nextProps.currentMessage.text);
    };
    MessageText.prototype.render = function () {
        var linkStyle = [
            styles[this.props.position].link,
            this.props.linkStyle && this.props.linkStyle[this.props.position],
        ];
        return (<react_native_1.View style={[
            styles[this.props.position].container,
            this.props.containerStyle &&
                this.props.containerStyle[this.props.position],
        ]}>
        <react_native_parsed_text_1.default style={[
            styles[this.props.position].text,
            this.props.textStyle && this.props.textStyle[this.props.position],
            this.props.customTextStyle,
        ]} parse={tslib_1.__spreadArrays(this.props.parsePatterns(linkStyle), [
            { type: 'url', style: linkStyle, onPress: this.onUrlPress },
            { type: 'phone', style: linkStyle, onPress: this.onPhonePress },
            { type: 'email', style: linkStyle, onPress: this.onEmailPress },
        ])} childrenProps={tslib_1.__assign({}, this.props.textProps)}>
          {this.props.currentMessage.text}
        </react_native_parsed_text_1.default>
      </react_native_1.View>);
    };
    MessageText.contextTypes = {
        actionSheet: prop_types_1__default['default']["default"].func
    };
    MessageText.defaultProps = {
        position: 'left',
        optionTitles: DEFAULT_OPTION_TITLES,
        currentMessage: {
            text: ''
        },
        containerStyle: {},
        textStyle: {},
        linkStyle: {},
        customTextStyle: {},
        textProps: {},
        parsePatterns: function () { return []; }
    };
    MessageText.propTypes = {
        position: prop_types_1__default['default']["default"].oneOf(['left', 'right']),
        optionTitles: prop_types_1__default['default']["default"].arrayOf(prop_types_1__default['default']["default"].string),
        currentMessage: prop_types_1__default['default']["default"].object,
        containerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        textStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        linkStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        parsePatterns: prop_types_1__default['default']["default"].func,
        textProps: prop_types_1__default['default']["default"].object,
        customTextStyle: utils.StylePropType
    };
    return MessageText;
}(react_1["default"].Component));
exports["default"] = MessageText;
//# sourceMappingURL=MessageText.jsx.map
});

var MessageImage_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;




// TODO: support web
// @ts-ignore


var styles = react_native_1__default['default'].StyleSheet.create({
    container: {},
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover'
    },
    imageActive: {
        flex: 1,
        resizeMode: 'contain'
    }
});
var MessageImage = /** @class */ (function (_super) {
    tslib_1.__extends(MessageImage, _super);
    function MessageImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageImage.prototype.render = function () {
        var _a = this.props, containerStyle = _a.containerStyle, lightboxProps = _a.lightboxProps, imageProps = _a.imageProps, imageStyle = _a.imageStyle, currentMessage = _a.currentMessage;
        if (!!currentMessage) {
            return (<react_native_1.View style={[styles.container, containerStyle]}>
          <react_native_lightbox_1.default activeProps={{
                style: styles.imageActive
            }} {...lightboxProps}>
            <react_native_1.Image {...imageProps} style={[styles.image, imageStyle]} source={{ uri: currentMessage.image }}/>
          </react_native_lightbox_1.default>
        </react_native_1.View>);
        }
        return null;
    };
    MessageImage.defaultProps = {
        currentMessage: {
            image: null
        },
        containerStyle: {},
        imageStyle: {},
        imageProps: {},
        lightboxProps: {}
    };
    MessageImage.propTypes = {
        currentMessage: prop_types_1__default['default']["default"].object,
        containerStyle: utils.StylePropType,
        imageStyle: utils.StylePropType,
        imageProps: prop_types_1__default['default']["default"].object,
        lightboxProps: prop_types_1__default['default']["default"].object
    };
    return MessageImage;
}(react_1.Component));
exports["default"] = MessageImage;
//# sourceMappingURL=MessageImage.jsx.map
});

createCommonjsModule(function (module, exports) {
exports.__esModule = true;



exports["default"] = (function (_props) { return (<react_native_1.View style={{ padding: 20 }}>
    <react_native_1.Text style={{ color: Color["default"].alizarin, fontWeight: '600' }}>
      Video is not implemented by GiftedChat.
    </react_native_1.Text>
    <react_native_1.Text style={{ color: Color["default"].alizarin, fontWeight: '600' }}>
      You need to provide your own implementation by using renderMessageVideo
      prop.
    </react_native_1.Text>
  </react_native_1.View>); });
//# sourceMappingURL=MessageVideo.jsx.map
});

createCommonjsModule(function (module, exports) {
exports.__esModule = true;



exports["default"] = (function (_props) { return (<react_native_1.View style={{ padding: 20 }}>
    <react_native_1.Text style={{ color: Color["default"].alizarin, fontWeight: '600' }}>
      Audio is not implemented by GiftedChat.
    </react_native_1.Text>
    <react_native_1.Text style={{ color: Color["default"].alizarin, fontWeight: '600' }}>
      You need to provide your own implementation by using renderMessageAudio
      prop.
    </react_native_1.Text>
  </react_native_1.View>); });
//# sourceMappingURL=MessageAudio.jsx.map
});

var Constant = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.TIME_FORMAT = exports.DATE_FORMAT = exports.DEFAULT_PLACEHOLDER = exports.MAX_COMPOSER_HEIGHT = exports.MIN_COMPOSER_HEIGHT = void 0;

exports.MIN_COMPOSER_HEIGHT = react_native_1__default['default'].Platform.select({
    ios: 33,
    android: 41,
    web: 34
});
exports.MAX_COMPOSER_HEIGHT = 200;
exports.DEFAULT_PLACEHOLDER = 'Type a message...';
exports.DATE_FORMAT = 'll';
exports.TIME_FORMAT = 'LT';
//# sourceMappingURL=Constant.js.map
});

var Time_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;








var containerStyle = {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
};
var textStyle = {
    fontSize: 10,
    backgroundColor: 'transparent',
    textAlign: 'right'
};
var styles = {
    left: react_native_1__default['default'].StyleSheet.create({
        container: tslib_1.__assign({}, containerStyle),
        text: tslib_1.__assign({ color: Color["default"].timeTextColor }, textStyle)
    }),
    right: react_native_1__default['default'].StyleSheet.create({
        container: tslib_1.__assign({}, containerStyle),
        text: tslib_1.__assign({ color: Color["default"].white }, textStyle)
    })
};
var Time = /** @class */ (function (_super) {
    tslib_1.__extends(Time, _super);
    function Time() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Time.prototype.render = function () {
        var _a = this.props, position = _a.position, containerStyle = _a.containerStyle, currentMessage = _a.currentMessage, timeFormat = _a.timeFormat, timeTextStyle = _a.timeTextStyle;
        if (!!currentMessage) {
            return (<react_native_1.View style={[
                styles[position].container,
                containerStyle && containerStyle[position],
            ]}>
          <react_native_1.Text style={[
                styles[position].text,
                timeTextStyle && timeTextStyle[position],
            ]}>
            {dayjs_1__default['default']["default"](currentMessage.createdAt)
                .locale(this.context.getLocale())
                .format(timeFormat)}
          </react_native_1.Text>
        </react_native_1.View>);
        }
        return null;
    };
    Time.contextTypes = {
        getLocale: prop_types_1__default['default']["default"].func
    };
    Time.defaultProps = {
        position: 'left',
        currentMessage: {
            createdAt: null
        },
        containerStyle: {},
        timeFormat: Constant.TIME_FORMAT,
        timeTextStyle: {}
    };
    Time.propTypes = {
        position: prop_types_1__default['default']["default"].oneOf(['left', 'right']),
        currentMessage: prop_types_1__default['default']["default"].object,
        containerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        timeFormat: prop_types_1__default['default']["default"].string,
        timeTextStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        })
    };
    return Time;
}(react_1.Component));
exports["default"] = Time;
//# sourceMappingURL=Time.jsx.map
});

var Bubble_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;












var styles = {
    left: react_native_1__default['default'].StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-start'
        },
        wrapper: {
            borderRadius: 15,
            backgroundColor: Color["default"].leftBubbleBackground,
            marginRight: 60,
            minHeight: 20,
            justifyContent: 'flex-end'
        },
        containerToNext: {
            borderBottomLeftRadius: 3
        },
        containerToPrevious: {
            borderTopLeftRadius: 3
        },
        bottom: {
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }
    }),
    right: react_native_1__default['default'].StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-end'
        },
        wrapper: {
            borderRadius: 15,
            backgroundColor: Color["default"].defaultBlue,
            marginLeft: 60,
            minHeight: 20,
            justifyContent: 'flex-end'
        },
        containerToNext: {
            borderBottomRightRadius: 3
        },
        containerToPrevious: {
            borderTopRightRadius: 3
        },
        bottom: {
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }
    }),
    content: react_native_1__default['default'].StyleSheet.create({
        tick: {
            fontSize: 10,
            backgroundColor: Color["default"].backgroundTransparent,
            color: Color["default"].white
        },
        tickView: {
            flexDirection: 'row',
            marginRight: 10
        },
        username: {
            top: -3,
            left: 0,
            fontSize: 12,
            backgroundColor: 'transparent',
            color: '#aaa'
        },
        usernameView: {
            flexDirection: 'row',
            marginHorizontal: 10
        }
    })
};
var DEFAULT_OPTION_TITLES = ['Copy Text', 'Cancel'];
var Bubble = /** @class */ (function (_super) {
    tslib_1.__extends(Bubble, _super);
    function Bubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPress = function () {
            if (_this.props.onPress) {
                _this.props.onPress(_this.context, _this.props.currentMessage);
            }
        };
        _this.onLongPress = function () {
            var currentMessage = _this.props.currentMessage;
            if (_this.props.onLongPress) {
                _this.props.onLongPress(_this.context, _this.props.currentMessage);
            }
            else if (currentMessage && currentMessage.text) {
                var optionTitles = _this.props.optionTitles;
                var options = optionTitles && optionTitles.length > 0
                    ? optionTitles.slice(0, 2)
                    : DEFAULT_OPTION_TITLES;
                var cancelButtonIndex = options.length - 1;
                _this.context.actionSheet().showActionSheetWithOptions({
                    options: options,
                    cancelButtonIndex: cancelButtonIndex
                }, function (buttonIndex) {
                    switch (buttonIndex) {
                        case 0:
                            react_native_1__default['default'].Clipboard.setString(currentMessage.text);
                            break;
                    }
                });
            }
        };
        return _this;
    }
    Bubble.prototype.styledBubbleToNext = function () {
        var _a = this.props, currentMessage = _a.currentMessage, nextMessage = _a.nextMessage, position = _a.position, containerToNextStyle = _a.containerToNextStyle;
        if (currentMessage &&
            nextMessage &&
            position &&
            utils.isSameUser(currentMessage, nextMessage) &&
            utils.isSameDay(currentMessage, nextMessage)) {
            return [
                styles[position].containerToNext,
                containerToNextStyle && containerToNextStyle[position],
            ];
        }
        return null;
    };
    Bubble.prototype.styledBubbleToPrevious = function () {
        var _a = this.props, currentMessage = _a.currentMessage, previousMessage = _a.previousMessage, position = _a.position, containerToPreviousStyle = _a.containerToPreviousStyle;
        if (currentMessage &&
            previousMessage &&
            position &&
            utils.isSameUser(currentMessage, previousMessage) &&
            utils.isSameDay(currentMessage, previousMessage)) {
            return [
                styles[position].containerToPrevious,
                containerToPreviousStyle && containerToPreviousStyle[position],
            ];
        }
        return null;
    };
    Bubble.prototype.renderQuickReplies = function () {
        var _a = this.props, currentMessage = _a.currentMessage, onQuickReply = _a.onQuickReply, nextMessage = _a.nextMessage, renderQuickReplySend = _a.renderQuickReplySend, quickReplyStyle = _a.quickReplyStyle;
        if (currentMessage && currentMessage.quickReplies) {
            var _b = this.props; _b.containerStyle; _b.wrapperStyle; var quickReplyProps = tslib_1.__rest(_b, ["containerStyle", "wrapperStyle"]);
            if (this.props.renderQuickReplies) {
                return this.props.renderQuickReplies(quickReplyProps);
            }
            return (<QuickReplies_1.default {...{
                currentMessage: currentMessage,
                onQuickReply: onQuickReply,
                nextMessage: nextMessage,
                renderQuickReplySend: renderQuickReplySend,
                quickReplyStyle: quickReplyStyle
            }}/>);
        }
        return null;
    };
    Bubble.prototype.renderMessageText = function () {
        if (this.props.currentMessage && this.props.currentMessage.text) {
            var _a = this.props; _a.containerStyle; _a.wrapperStyle; _a.optionTitles; var messageTextProps = tslib_1.__rest(_a, ["containerStyle", "wrapperStyle", "optionTitles"]);
            if (this.props.renderMessageText) {
                return this.props.renderMessageText(messageTextProps);
            }
            return <MessageText_1.default {...messageTextProps}/>;
        }
        return null;
    };
    Bubble.prototype.renderMessageImage = function () {
        if (this.props.currentMessage && this.props.currentMessage.image) {
            var _a = this.props; _a.containerStyle; _a.wrapperStyle; var messageImageProps = tslib_1.__rest(_a, ["containerStyle", "wrapperStyle"]);
            if (this.props.renderMessageImage) {
                return this.props.renderMessageImage(messageImageProps);
            }
            return <MessageImage_1.default {...messageImageProps}/>;
        }
        return null;
    };
    Bubble.prototype.renderMessageVideo = function () {
        if (this.props.currentMessage && this.props.currentMessage.video) {
            var _a = this.props; _a.containerStyle; _a.wrapperStyle; var messageVideoProps = tslib_1.__rest(_a, ["containerStyle", "wrapperStyle"]);
            if (this.props.renderMessageVideo) {
                return this.props.renderMessageVideo(messageVideoProps);
            }
            return <MessageVideo_1.default {...messageVideoProps}/>;
        }
        return null;
    };
    Bubble.prototype.renderMessageAudio = function () {
        if (this.props.currentMessage && this.props.currentMessage.audio) {
            var _a = this.props; _a.containerStyle; _a.wrapperStyle; var messageAudioProps = tslib_1.__rest(_a, ["containerStyle", "wrapperStyle"]);
            if (this.props.renderMessageAudio) {
                return this.props.renderMessageAudio(messageAudioProps);
            }
            return <MessageAudio_1.default {...messageAudioProps}/>;
        }
        return null;
    };
    Bubble.prototype.renderTicks = function () {
        var _a = this.props, currentMessage = _a.currentMessage, renderTicks = _a.renderTicks, user = _a.user;
        if (renderTicks && currentMessage) {
            return renderTicks(currentMessage);
        }
        if (currentMessage &&
            user &&
            currentMessage.user &&
            currentMessage.user._id !== user._id) {
            return null;
        }
        if (currentMessage &&
            (currentMessage.sent || currentMessage.received || currentMessage.pending)) {
            return (<react_native_1.View style={styles.content.tickView}>
          {!!currentMessage.sent && (<react_native_1.Text style={[styles.content.tick, this.props.tickStyle]}>✓</react_native_1.Text>)}
          {!!currentMessage.received && (<react_native_1.Text style={[styles.content.tick, this.props.tickStyle]}>✓</react_native_1.Text>)}
          {!!currentMessage.pending && (<react_native_1.Text style={[styles.content.tick, this.props.tickStyle]}>🕓</react_native_1.Text>)}
        </react_native_1.View>);
        }
        return null;
    };
    Bubble.prototype.renderTime = function () {
        if (this.props.currentMessage && this.props.currentMessage.createdAt) {
            var _a = this.props; _a.containerStyle; _a.wrapperStyle; _a.textStyle; var timeProps = tslib_1.__rest(_a, ["containerStyle", "wrapperStyle", "textStyle"]);
            if (this.props.renderTime) {
                return this.props.renderTime(timeProps);
            }
            return <Time_1.default {...timeProps}/>;
        }
        return null;
    };
    Bubble.prototype.renderUsername = function () {
        var _a = this.props, currentMessage = _a.currentMessage, user = _a.user;
        if (this.props.renderUsernameOnMessage && currentMessage) {
            if (user && currentMessage.user._id === user._id) {
                return null;
            }
            return (<react_native_1.View style={styles.content.usernameView}>
          <react_native_1.Text style={[styles.content.username, this.props.usernameStyle]}>
            ~ {currentMessage.user.name}
          </react_native_1.Text>
        </react_native_1.View>);
        }
        return null;
    };
    Bubble.prototype.renderCustomView = function () {
        if (this.props.renderCustomView) {
            return this.props.renderCustomView(this.props);
        }
        return null;
    };
    Bubble.prototype.renderBubbleContent = function () {
        return this.props.isCustomViewBottom ? (<react_native_1.View>
        {this.renderMessageImage()}
        {this.renderMessageVideo()}
        {this.renderMessageAudio()}
        {this.renderMessageText()}
        {this.renderCustomView()}
      </react_native_1.View>) : (<react_native_1.View>
        {this.renderCustomView()}
        {this.renderMessageImage()}
        {this.renderMessageVideo()}
        {this.renderMessageAudio()}
        {this.renderMessageText()}
      </react_native_1.View>);
    };
    Bubble.prototype.render = function () {
        var _a = this.props, position = _a.position, containerStyle = _a.containerStyle, wrapperStyle = _a.wrapperStyle, bottomContainerStyle = _a.bottomContainerStyle;
        return (<react_native_1.View style={[
            styles[position].container,
            containerStyle && containerStyle[position],
        ]}>
        <react_native_1.View style={[
            styles[position].wrapper,
            this.styledBubbleToNext(),
            this.styledBubbleToPrevious(),
            wrapperStyle && wrapperStyle[position],
        ]}>
          <react_native_1.TouchableWithoutFeedback onPress={this.onPress} onLongPress={this.onLongPress} accessibilityTraits='text' {...this.props.touchableProps}>
            <react_native_1.View>
              {this.renderBubbleContent()}
              <react_native_1.View style={[
            styles[position].bottom,
            bottomContainerStyle && bottomContainerStyle[position],
        ]}>
                {this.renderUsername()}
                {this.renderTime()}
                {this.renderTicks()}
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.TouchableWithoutFeedback>
        </react_native_1.View>
        {this.renderQuickReplies()}
      </react_native_1.View>);
    };
    Bubble.contextTypes = {
        actionSheet: prop_types_1__default['default']["default"].func
    };
    Bubble.defaultProps = {
        touchableProps: {},
        onPress: null,
        onLongPress: null,
        renderMessageImage: null,
        renderMessageVideo: null,
        renderMessageAudio: null,
        renderMessageText: null,
        renderCustomView: null,
        renderUsername: null,
        renderTicks: null,
        renderTime: null,
        renderQuickReplies: null,
        onQuickReply: null,
        position: 'left',
        optionTitles: DEFAULT_OPTION_TITLES,
        currentMessage: {
            text: null,
            createdAt: null,
            image: null
        },
        nextMessage: {},
        previousMessage: {},
        containerStyle: {},
        wrapperStyle: {},
        bottomContainerStyle: {},
        tickStyle: {},
        usernameStyle: {},
        containerToNextStyle: {},
        containerToPreviousStyle: {}
    };
    Bubble.propTypes = {
        user: prop_types_1__default['default']["default"].object.isRequired,
        touchableProps: prop_types_1__default['default']["default"].object,
        onLongPress: prop_types_1__default['default']["default"].func,
        renderMessageImage: prop_types_1__default['default']["default"].func,
        renderMessageVideo: prop_types_1__default['default']["default"].func,
        renderMessageAudio: prop_types_1__default['default']["default"].func,
        renderMessageText: prop_types_1__default['default']["default"].func,
        renderCustomView: prop_types_1__default['default']["default"].func,
        isCustomViewBottom: prop_types_1__default['default']["default"].bool,
        renderUsernameOnMessage: prop_types_1__default['default']["default"].bool,
        renderUsername: prop_types_1__default['default']["default"].func,
        renderTime: prop_types_1__default['default']["default"].func,
        renderTicks: prop_types_1__default['default']["default"].func,
        renderQuickReplies: prop_types_1__default['default']["default"].func,
        onQuickReply: prop_types_1__default['default']["default"].func,
        position: prop_types_1__default['default']["default"].oneOf(['left', 'right']),
        optionTitles: prop_types_1__default['default']["default"].arrayOf(prop_types_1__default['default']["default"].string),
        currentMessage: prop_types_1__default['default']["default"].object,
        nextMessage: prop_types_1__default['default']["default"].object,
        previousMessage: prop_types_1__default['default']["default"].object,
        containerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        wrapperStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        bottomContainerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        tickStyle: utils.StylePropType,
        usernameStyle: utils.StylePropType,
        containerToNextStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        containerToPreviousStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        })
    };
    return Bubble;
}(react_1["default"].Component));
exports["default"] = Bubble;
//# sourceMappingURL=Bubble.jsx.map
});

var SystemMessage_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
        marginBottom: 10
    },
    text: {
        backgroundColor: Color["default"].backgroundTransparent,
        color: Color["default"].defaultColor,
        fontSize: 12,
        fontWeight: '300'
    }
});
var SystemMessage = /** @class */ (function (_super) {
    tslib_1.__extends(SystemMessage, _super);
    function SystemMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemMessage.prototype.render = function () {
        var _a = this.props, currentMessage = _a.currentMessage, containerStyle = _a.containerStyle, wrapperStyle = _a.wrapperStyle, textStyle = _a.textStyle;
        if (currentMessage) {
            return (<react_native_1.View style={[styles.container, containerStyle]}>
          <react_native_1.View style={wrapperStyle}>
            <react_native_1.Text style={[styles.text, textStyle]}>{currentMessage.text}</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>);
        }
        return null;
    };
    SystemMessage.defaultProps = {
        currentMessage: {
            system: false
        },
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {}
    };
    SystemMessage.propTypes = {
        currentMessage: prop_types_1__default['default']["default"].object,
        containerStyle: utils.StylePropType,
        wrapperStyle: utils.StylePropType,
        textStyle: utils.StylePropType
    };
    return SystemMessage;
}(react_1.Component));
exports["default"] = SystemMessage;
//# sourceMappingURL=SystemMessage.jsx.map
});

var Composer_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;







var styles = react_native_1__default['default'].StyleSheet.create({
    textInput: tslib_1.__assign(tslib_1.__assign({ flex: 1, marginLeft: 10, fontSize: 16, lineHeight: 16 }, react_native_1__default['default'].Platform.select({
        web: {
            paddingTop: 6,
            paddingLeft: 4
        }
    })), { marginTop: react_native_1__default['default'].Platform.select({
            ios: 6,
            android: 0,
            web: 6
        }), marginBottom: react_native_1__default['default'].Platform.select({
            ios: 5,
            android: 3,
            web: 4
        }) })
});
var Composer = /** @class */ (function (_super) {
    tslib_1.__extends(Composer, _super);
    function Composer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = undefined;
        _this.onLayout = function (e) {
            var layout = e.nativeEvent.layout;
            // Support earlier versions of React Native on Android.
            if (!layout) {
                return;
            }
            if (!_this.layout ||
                (_this.layout &&
                    (_this.layout.width !== layout.width ||
                        _this.layout.height !== layout.height))) {
                _this.layout = layout;
                _this.props.onInputSizeChanged(_this.layout);
            }
        };
        _this.onChangeText = function (text) {
            _this.props.onTextChanged(text);
        };
        return _this;
    }
    Composer.prototype.render = function () {
        return (<react_native_1.TextInput testID={this.props.placeholder} accessible accessibilityLabel={this.props.placeholder} placeholder={this.props.placeholder} placeholderTextColor={this.props.placeholderTextColor} multiline={this.props.multiline} editable={!this.props.disableComposer} onLayout={this.onLayout} onChangeText={this.onChangeText} style={[
            styles.textInput,
            this.props.textInputStyle,
            tslib_1.__assign({ height: this.props.composerHeight }, react_native_1__default['default'].Platform.select({
                web: {
                    outlineWidth: 0,
                    outlineColor: 'transparent',
                    outlineOffset: 0
                }
            })),
        ]} autoFocus={this.props.textInputAutoFocus} value={this.props.text} enablesReturnKeyAutomatically underlineColorAndroid='transparent' keyboardAppearance={this.props.keyboardAppearance} {...this.props.textInputProps}/>);
    };
    Composer.defaultProps = {
        composerHeight: Constant.MIN_COMPOSER_HEIGHT,
        text: '',
        placeholderTextColor: Color["default"].defaultColor,
        placeholder: Constant.DEFAULT_PLACEHOLDER,
        textInputProps: null,
        multiline: true,
        disableComposer: false,
        textInputStyle: {},
        textInputAutoFocus: false,
        keyboardAppearance: 'default',
        onTextChanged: function () { },
        onInputSizeChanged: function () { }
    };
    Composer.propTypes = {
        composerHeight: prop_types_1__default['default']["default"].number,
        text: prop_types_1__default['default']["default"].string,
        placeholder: prop_types_1__default['default']["default"].string,
        placeholderTextColor: prop_types_1__default['default']["default"].string,
        textInputProps: prop_types_1__default['default']["default"].object,
        onTextChanged: prop_types_1__default['default']["default"].func,
        onInputSizeChanged: prop_types_1__default['default']["default"].func,
        multiline: prop_types_1__default['default']["default"].bool,
        disableComposer: prop_types_1__default['default']["default"].bool,
        textInputStyle: utils.StylePropType,
        textInputAutoFocus: prop_types_1__default['default']["default"].bool,
        keyboardAppearance: prop_types_1__default['default']["default"].string
    };
    return Composer;
}(react_1["default"].Component));
exports["default"] = Composer;
//# sourceMappingURL=Composer.jsx.map
});

var Day_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;








var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    text: {
        backgroundColor: Color["default"].backgroundTransparent,
        color: Color["default"].defaultColor,
        fontSize: 12,
        fontWeight: '600'
    }
});
var Day = /** @class */ (function (_super) {
    tslib_1.__extends(Day, _super);
    function Day() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Day.prototype.render = function () {
        var _a = this.props, dateFormat = _a.dateFormat, currentMessage = _a.currentMessage, previousMessage = _a.previousMessage, containerStyle = _a.containerStyle, wrapperStyle = _a.wrapperStyle, textStyle = _a.textStyle, textProps = _a.textProps;
        if (currentMessage && !utils.isSameDay(currentMessage, previousMessage)) {
            return (<react_native_1.View style={[styles.container, containerStyle]}>
          <react_native_1.View style={wrapperStyle}>
            <react_native_1.Text style={[styles.text, textStyle]} {...textProps}>
              {dayjs_1__default['default']["default"](currentMessage.createdAt)
                .locale(this.context.getLocale())
                .format(dateFormat)}
            </react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>);
        }
        return null;
    };
    Day.contextTypes = {
        getLocale: prop_types_1__default['default']["default"].func
    };
    Day.defaultProps = {
        currentMessage: {
            createdAt: null
        },
        previousMessage: {},
        nextMessage: {},
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {},
        textProps: {},
        dateFormat: Constant.DATE_FORMAT
    };
    Day.propTypes = {
        currentMessage: prop_types_1__default['default']["default"].object,
        previousMessage: prop_types_1__default['default']["default"].object,
        nextMessage: prop_types_1__default['default']["default"].object,
        inverted: prop_types_1__default['default']["default"].bool,
        containerStyle: utils.StylePropType,
        wrapperStyle: utils.StylePropType,
        textStyle: utils.StylePropType,
        textProps: prop_types_1__default['default']["default"].object,
        dateFormat: prop_types_1__default['default']["default"].string
    };
    return Day;
}(react_1.PureComponent));
exports["default"] = Day;
//# sourceMappingURL=Day.jsx.map
});

var Send_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        height: 44,
        justifyContent: 'flex-end'
    },
    text: {
        color: Color["default"].defaultBlue,
        fontWeight: '600',
        fontSize: 17,
        backgroundColor: Color["default"].backgroundTransparent,
        marginBottom: 12,
        marginLeft: 10,
        marginRight: 10
    }
});
var Send = /** @class */ (function (_super) {
    tslib_1.__extends(Send, _super);
    function Send() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnPress = function () {
            var _a = _this.props, text = _a.text, onSend = _a.onSend;
            if (text && onSend) {
                onSend({ text: text.trim() }, true);
            }
        };
        return _this;
    }
    Send.prototype.render = function () {
        var _a = this.props, text = _a.text, containerStyle = _a.containerStyle, children = _a.children, textStyle = _a.textStyle, label = _a.label, alwaysShowSend = _a.alwaysShowSend, disabled = _a.disabled, sendButtonProps = _a.sendButtonProps;
        if (alwaysShowSend || (text && text.trim().length > 0)) {
            return (<react_native_1.TouchableOpacity testID='send' accessible accessibilityLabel='send' style={[styles.container, containerStyle]} onPress={this.handleOnPress} accessibilityTraits='button' disabled={disabled} {...sendButtonProps}>
          <react_native_1.View>
            {children || <react_native_1.Text style={[styles.text, textStyle]}>{label}</react_native_1.Text>}
          </react_native_1.View>
        </react_native_1.TouchableOpacity>);
        }
        return <react_native_1.View />;
    };
    Send.defaultProps = {
        text: '',
        onSend: function () { },
        label: 'Send',
        containerStyle: {},
        textStyle: {},
        children: null,
        alwaysShowSend: false,
        disabled: false,
        sendButtonProps: null
    };
    Send.propTypes = {
        text: prop_types_1__default['default']["default"].string,
        onSend: prop_types_1__default['default']["default"].func,
        label: prop_types_1__default['default']["default"].string,
        containerStyle: utils.StylePropType,
        textStyle: utils.StylePropType,
        children: prop_types_1__default['default']["default"].element,
        alwaysShowSend: prop_types_1__default['default']["default"].bool,
        disabled: prop_types_1__default['default']["default"].bool,
        sendButtonProps: prop_types_1__default['default']["default"].object
    };
    return Send;
}(react_1.Component));
exports["default"] = Send;
//# sourceMappingURL=Send.jsx.map
});

var InputToolbar_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;









var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        borderTopWidth: react_native_1__default['default'].StyleSheet.hairlineWidth,
        borderTopColor: Color["default"].defaultColor,
        backgroundColor: Color["default"].white,
        bottom: 0,
        left: 0,
        right: 0
    },
    primary: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    accessory: {
        height: 44
    }
});
var InputToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(InputToolbar, _super);
    function InputToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            position: 'absolute'
        };
        _this.keyboardWillShowListener = undefined;
        _this.keyboardWillHideListener = undefined;
        _this.keyboardWillShow = function () {
            if (_this.state.position !== 'relative') {
                _this.setState({
                    position: 'relative'
                });
            }
        };
        _this.keyboardWillHide = function () {
            if (_this.state.position !== 'absolute') {
                _this.setState({
                    position: 'absolute'
                });
            }
        };
        return _this;
    }
    InputToolbar.prototype.componentDidMount = function () {
        this.keyboardWillShowListener = react_native_1__default['default'].Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideListener = react_native_1__default['default'].Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    };
    InputToolbar.prototype.componentWillUnmount = function () {
        if (this.keyboardWillShowListener) {
            this.keyboardWillShowListener.remove();
        }
        if (this.keyboardWillHideListener) {
            this.keyboardWillHideListener.remove();
        }
    };
    InputToolbar.prototype.renderActions = function () {
        var _a = this.props; _a.containerStyle; var props = tslib_1.__rest(_a, ["containerStyle"]);
        if (this.props.renderActions) {
            return this.props.renderActions(props);
        }
        else if (this.props.onPressActionButton) {
            return <Actions_1.default {...props}/>;
        }
        return null;
    };
    InputToolbar.prototype.renderSend = function () {
        if (this.props.renderSend) {
            return this.props.renderSend(this.props);
        }
        return <Send_1.default {...this.props}/>;
    };
    InputToolbar.prototype.renderComposer = function () {
        if (this.props.renderComposer) {
            return this.props.renderComposer(this.props);
        }
        return <Composer_1.default {...this.props}/>;
    };
    InputToolbar.prototype.renderAccessory = function () {
        if (this.props.renderAccessory) {
            return (<react_native_1.View style={[styles.accessory, this.props.accessoryStyle]}>
          {this.props.renderAccessory(this.props)}
        </react_native_1.View>);
        }
        return null;
    };
    InputToolbar.prototype.render = function () {
        return (<react_native_1.View style={[
            styles.container,
            { position: this.state.position },
            this.props.containerStyle,
        ]}>
        <react_native_1.View style={[styles.primary, this.props.primaryStyle]}>
          {this.renderActions()}
          {this.renderComposer()}
          {this.renderSend()}
        </react_native_1.View>
        {this.renderAccessory()}
      </react_native_1.View>);
    };
    InputToolbar.defaultProps = {
        renderAccessory: null,
        renderActions: null,
        renderSend: null,
        renderComposer: null,
        containerStyle: {},
        primaryStyle: {},
        accessoryStyle: {},
        onPressActionButton: function () { }
    };
    InputToolbar.propTypes = {
        renderAccessory: prop_types_1__default['default']["default"].func,
        renderActions: prop_types_1__default['default']["default"].func,
        renderSend: prop_types_1__default['default']["default"].func,
        renderComposer: prop_types_1__default['default']["default"].func,
        onPressActionButton: prop_types_1__default['default']["default"].func,
        containerStyle: utils.StylePropType,
        primaryStyle: utils.StylePropType,
        accessoryStyle: utils.StylePropType
    };
    return InputToolbar;
}(react_1["default"].Component));
exports["default"] = InputToolbar;
//# sourceMappingURL=InputToolbar.jsx.map
});

var LoadEarlier_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;






var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color["default"].defaultColor,
        borderRadius: 15,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        backgroundColor: Color["default"].backgroundTransparent,
        color: Color["default"].white,
        fontSize: 12
    },
    activityIndicator: {
        marginTop: react_native_1__default['default'].Platform.select({
            ios: -14,
            android: -16,
            "default": -15
        })
    }
});
var LoadEarlier = /** @class */ (function (_super) {
    tslib_1.__extends(LoadEarlier, _super);
    function LoadEarlier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadEarlier.prototype.renderLoading = function () {
        if (this.props.isLoadingEarlier === false) {
            return (<react_native_1.Text style={[styles.text, this.props.textStyle]}>
          {this.props.label}
        </react_native_1.Text>);
        }
        return (<react_native_1.View>
        <react_native_1.Text style={[styles.text, this.props.textStyle, { opacity: 0 }]}>
          {this.props.label}
        </react_native_1.Text>
        <react_native_1.ActivityIndicator color={this.props.activityIndicatorColor} size={this.props.activityIndicatorSize} style={[styles.activityIndicator, this.props.activityIndicatorStyle]}/>
      </react_native_1.View>);
    };
    LoadEarlier.prototype.render = function () {
        var _this = this;
        return (<react_native_1.TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={function () {
            if (_this.props.onLoadEarlier) {
                _this.props.onLoadEarlier();
            }
        }} disabled={this.props.isLoadingEarlier === true} accessibilityTraits='button'>
        <react_native_1.View style={[styles.wrapper, this.props.wrapperStyle]}>
          {this.renderLoading()}
        </react_native_1.View>
      </react_native_1.TouchableOpacity>);
    };
    LoadEarlier.defaultProps = {
        onLoadEarlier: function () { },
        isLoadingEarlier: false,
        label: 'Load earlier messages',
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {},
        activityIndicatorStyle: {},
        activityIndicatorColor: 'white',
        activityIndicatorSize: 'small'
    };
    LoadEarlier.propTypes = {
        onLoadEarlier: prop_types_1__default['default']["default"].func,
        isLoadingEarlier: prop_types_1__default['default']["default"].bool,
        label: prop_types_1__default['default']["default"].string,
        containerStyle: utils.StylePropType,
        wrapperStyle: utils.StylePropType,
        textStyle: utils.StylePropType,
        activityIndicatorStyle: utils.StylePropType,
        activityIndicatorColor: prop_types_1__default['default']["default"].string,
        activityIndicatorSize: prop_types_1__default['default']["default"].string
    };
    return LoadEarlier;
}(react_1["default"].Component));
exports["default"] = LoadEarlier;
//# sourceMappingURL=LoadEarlier.jsx.map
});

var Message_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;









var styles = {
    left: react_native_1__default['default'].StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            marginLeft: 8,
            marginRight: 0
        }
    }),
    right: react_native_1__default['default'].StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginLeft: 0,
            marginRight: 8
        }
    })
};
var Message = /** @class */ (function (_super) {
    tslib_1.__extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.shouldComponentUpdate = function (nextProps) {
        var next = nextProps.currentMessage;
        var current = this.props.currentMessage;
        var _a = this.props, previousMessage = _a.previousMessage, nextMessage = _a.nextMessage;
        var nextPropsMessage = nextProps.nextMessage;
        var nextPropsPreviousMessage = nextProps.previousMessage;
        var shouldUpdate = (this.props.shouldUpdateMessage &&
            this.props.shouldUpdateMessage(this.props, nextProps)) ||
            false;
        return (next.sent !== current.sent ||
            next.received !== current.received ||
            next.pending !== current.pending ||
            next.createdAt !== current.createdAt ||
            next.text !== current.text ||
            next.image !== current.image ||
            next.video !== current.video ||
            next.audio !== current.audio ||
            previousMessage !== nextPropsPreviousMessage ||
            nextMessage !== nextPropsMessage ||
            shouldUpdate);
    };
    Message.prototype.renderDay = function () {
        if (this.props.currentMessage && this.props.currentMessage.createdAt) {
            var _a = this.props; _a.containerStyle; _a.onMessageLayout; var props = tslib_1.__rest(_a, ["containerStyle", "onMessageLayout"]);
            if (this.props.renderDay) {
                return this.props.renderDay(props);
            }
            return <Day_1.default {...props}/>;
        }
        return null;
    };
    Message.prototype.renderBubble = function () {
        var _a = this.props; _a.containerStyle; _a.onMessageLayout; var props = tslib_1.__rest(_a, ["containerStyle", "onMessageLayout"]);
        if (this.props.renderBubble) {
            return this.props.renderBubble(props);
        }
        // @ts-ignore
        return <Bubble_1.default {...props}/>;
    };
    Message.prototype.renderSystemMessage = function () {
        var _a = this.props; _a.containerStyle; _a.onMessageLayout; var props = tslib_1.__rest(_a, ["containerStyle", "onMessageLayout"]);
        if (this.props.renderSystemMessage) {
            return this.props.renderSystemMessage(props);
        }
        return <SystemMessage_1.default {...props}/>;
    };
    Message.prototype.renderAvatar = function () {
        var _a = this.props, user = _a.user, currentMessage = _a.currentMessage, showUserAvatar = _a.showUserAvatar;
        if (user &&
            user._id &&
            currentMessage &&
            currentMessage.user &&
            user._id === currentMessage.user._id &&
            !showUserAvatar) {
            return null;
        }
        if (currentMessage &&
            currentMessage.user &&
            currentMessage.user.avatar === null) {
            return null;
        }
        var _b = this.props; _b.containerStyle; _b.onMessageLayout; var props = tslib_1.__rest(_b, ["containerStyle", "onMessageLayout"]);
        return <Avatar_1.default {...props}/>;
    };
    Message.prototype.render = function () {
        var _a = this.props, currentMessage = _a.currentMessage, onMessageLayout = _a.onMessageLayout, nextMessage = _a.nextMessage, position = _a.position, containerStyle = _a.containerStyle;
        if (currentMessage) {
            var sameUser = utils.isSameUser(currentMessage, nextMessage);
            return (<react_native_1.View onLayout={onMessageLayout}>
          {this.renderDay()}
          {currentMessage.system ? (this.renderSystemMessage()) : (<react_native_1.View style={[
                styles[position].container,
                { marginBottom: sameUser ? 2 : 10 },
                !this.props.inverted && { marginBottom: 2 },
                containerStyle && containerStyle[position],
            ]}>
              {this.props.position === 'left' ? this.renderAvatar() : null}
              {this.renderBubble()}
              {this.props.position === 'right' ? this.renderAvatar() : null}
            </react_native_1.View>)}
        </react_native_1.View>);
        }
        return null;
    };
    Message.defaultProps = {
        renderAvatar: undefined,
        renderBubble: null,
        renderDay: null,
        renderSystemMessage: null,
        position: 'left',
        currentMessage: {},
        nextMessage: {},
        previousMessage: {},
        user: {},
        containerStyle: {},
        showUserAvatar: false,
        inverted: true,
        shouldUpdateMessage: undefined,
        onMessageLayout: undefined
    };
    Message.propTypes = {
        renderAvatar: prop_types_1__default['default']["default"].func,
        showUserAvatar: prop_types_1__default['default']["default"].bool,
        renderBubble: prop_types_1__default['default']["default"].func,
        renderDay: prop_types_1__default['default']["default"].func,
        renderSystemMessage: prop_types_1__default['default']["default"].func,
        position: prop_types_1__default['default']["default"].oneOf(['left', 'right']),
        currentMessage: prop_types_1__default['default']["default"].object,
        nextMessage: prop_types_1__default['default']["default"].object,
        previousMessage: prop_types_1__default['default']["default"].object,
        user: prop_types_1__default['default']["default"].object,
        inverted: prop_types_1__default['default']["default"].bool,
        containerStyle: prop_types_1__default['default']["default"].shape({
            left: utils.StylePropType,
            right: utils.StylePropType
        }),
        shouldUpdateMessage: prop_types_1__default['default']["default"].func,
        onMessageLayout: prop_types_1__default['default']["default"].func
    };
    return Message;
}(react_1["default"].Component));
exports["default"] = Message;
//# sourceMappingURL=Message.jsx.map
});

var useUpdateLayoutEffect_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.useUpdateLayoutEffect = void 0;

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * Idea stolen from: https://stackoverflow.com/a/55075818/1526448
 * @param {()=>void} effect the function to call
 * @param {Array<any>} dependencies the state(s) that fires the update
 */
function useUpdateLayoutEffect(effect, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var isInitialMount = react_1.useRef(true);
    react_1.useLayoutEffect(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
//# sourceMappingURL=useUpdateLayoutEffect.js.map
});

createCommonjsModule(function (module, exports) {
exports.__esModule = true;





var TypingIndicator = function (_a) {
    var isTyping = _a.isTyping;
    var _b = react_1.useMemo(function () { return ({
        yCoords: new react_native_1__default['default'].Animated.Value(200),
        heightScale: new react_native_1__default['default'].Animated.Value(0),
        marginScale: new react_native_1__default['default'].Animated.Value(0)
    }); }, []), yCoords = _b.yCoords, heightScale = _b.heightScale, marginScale = _b.marginScale;
    // on isTyping fire side effect
    useUpdateLayoutEffect_1.useUpdateLayoutEffect(function () {
        if (isTyping) {
            slideIn();
        }
        else {
            slideOut();
        }
    }, [isTyping]);
    // side effect
    var slideIn = function () {
        react_native_1__default['default'].Animated.parallel([
            react_native_1__default['default'].Animated.spring(yCoords, {
                toValue: 0,
                useNativeDriver: false
            }),
            react_native_1__default['default'].Animated.timing(heightScale, {
                toValue: 35,
                duration: 250,
                useNativeDriver: false
            }),
            react_native_1__default['default'].Animated.timing(marginScale, {
                toValue: 8,
                duration: 250,
                useNativeDriver: false
            }),
        ]).start();
    };
    // side effect
    var slideOut = function () {
        react_native_1__default['default'].Animated.parallel([
            react_native_1__default['default'].Animated.spring(yCoords, {
                toValue: 200,
                useNativeDriver: false
            }),
            react_native_1__default['default'].Animated.timing(heightScale, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false
            }),
            react_native_1__default['default'].Animated.timing(marginScale, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false
            }),
        ]).start();
    };
    return (<react_native_1.Animated.View style={[
        styles.container,
        {
            transform: [
                {
                    translateY: yCoords
                },
            ],
            height: heightScale,
            marginBottom: marginScale
        },
    ]}>
      {isTyping ? (<react_native_typing_animation_1.TypingAnimation style={{ marginLeft: 6, marginTop: 7.2 }} dotRadius={4} dotMargin={5.5} dotColor={'rgba(0, 0, 0, 0.38)'}/>) : null}
    </react_native_1.Animated.View>);
};
var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        marginLeft: 8,
        width: 45,
        borderRadius: 15,
        backgroundColor: Color["default"].leftBubbleBackground
    }
});
exports["default"] = TypingIndicator;
//# sourceMappingURL=TypingIndicator.jsx.map
});

var MessageContainer_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;









var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        flex: 1
    },
    containerAlignTop: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    emptyChatContainer: {
        flex: 1,
        transform: [{ scaleY: -1 }]
    },
    headerWrapper: {
        flex: 1
    },
    listStyle: {
        flex: 1
    },
    scrollToBottomStyle: {
        opacity: 0.8,
        position: 'absolute',
        right: 10,
        bottom: 30,
        zIndex: 999,
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Color["default"].white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Color["default"].black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1
    }
});
var MessageContainer = /** @class */ (function (_super) {
    tslib_1.__extends(MessageContainer, _super);
    function MessageContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showScrollBottom: false,
            hasScrolled: false
        };
        _this.renderTypingIndicator = function () {
            if (react_native_1__default['default'].Platform.OS === 'web') {
                return null;
            }
            return <TypingIndicator_1.default isTyping={_this.props.isTyping || false}/>;
        };
        _this.renderFooter = function () {
            if (_this.props.renderFooter) {
                return _this.props.renderFooter(_this.props);
            }
            return _this.renderTypingIndicator();
        };
        _this.renderLoadEarlier = function () {
            if (_this.props.loadEarlier === true) {
                var loadEarlierProps = tslib_1.__assign({}, _this.props);
                if (_this.props.renderLoadEarlier) {
                    return _this.props.renderLoadEarlier(loadEarlierProps);
                }
                return <LoadEarlier_1.default {...loadEarlierProps}/>;
            }
            return null;
        };
        _this.scrollToBottom = function (animated) {
            if (animated === void 0) { animated = true; }
            var inverted = _this.props.inverted;
            if (inverted) {
                _this.scrollTo({ offset: 0, animated: animated });
            }
            else if (_this.props.forwardRef && _this.props.forwardRef.current) {
                _this.props.forwardRef.current.scrollToEnd({ animated: animated });
            }
        };
        _this.handleOnScroll = function (event) {
            var _a = event.nativeEvent, contentOffsetY = _a.contentOffset.y, contentSizeHeight = _a.contentSize.height, layoutMeasurementHeight = _a.layoutMeasurement.height;
            var scrollToBottomOffset = _this.props.scrollToBottomOffset;
            if (_this.props.inverted) {
                if (contentOffsetY > scrollToBottomOffset) {
                    _this.setState({ showScrollBottom: true, hasScrolled: true });
                }
                else {
                    _this.setState({ showScrollBottom: false, hasScrolled: true });
                }
            }
            else {
                if (contentOffsetY < scrollToBottomOffset &&
                    contentSizeHeight - layoutMeasurementHeight > scrollToBottomOffset) {
                    _this.setState({ showScrollBottom: true, hasScrolled: true });
                }
                else {
                    _this.setState({ showScrollBottom: false, hasScrolled: true });
                }
            }
        };
        _this.renderRow = function (_a) {
            var item = _a.item, index = _a.index;
            if (!item._id && item._id !== 0) {
                utils.warning('GiftedChat: `_id` is missing for message', JSON.stringify(item));
            }
            if (!item.user) {
                if (!item.system) {
                    utils.warning('GiftedChat: `user` is missing for message', JSON.stringify(item));
                }
                item.user = { _id: 0 };
            }
            var _b = _this.props, messages = _b.messages, user = _b.user, inverted = _b.inverted, restProps = tslib_1.__rest(_b, ["messages", "user", "inverted"]);
            if (messages && user) {
                var previousMessage = (inverted ? messages[index + 1] : messages[index - 1]) || {};
                var nextMessage = (inverted ? messages[index - 1] : messages[index + 1]) || {};
                var messageProps = tslib_1.__assign(tslib_1.__assign({}, restProps), { user: user, key: item._id, currentMessage: item, previousMessage: previousMessage,
                    inverted: inverted,
                    nextMessage: nextMessage, position: item.user._id === user._id ? 'right' : 'left' });
                if (_this.props.renderMessage) {
                    return _this.props.renderMessage(messageProps);
                }
                return <Message_1.default {...messageProps}/>;
            }
            return null;
        };
        _this.renderChatEmpty = function () {
            if (_this.props.renderChatEmpty) {
                return _this.props.inverted ? (_this.props.renderChatEmpty()) : (<react_native_1.View style={styles.emptyChatContainer}>
          {_this.props.renderChatEmpty()}
        </react_native_1.View>);
            }
            return <react_native_1.View style={styles.container}/>;
        };
        _this.renderHeaderWrapper = function () { return (<react_native_1.View style={styles.headerWrapper}>{_this.renderLoadEarlier()}</react_native_1.View>); };
        _this.onLayoutList = function () {
            if (!_this.props.inverted &&
                !!_this.props.messages &&
                _this.props.messages.length) {
                setTimeout(function () { return _this.scrollToBottom && _this.scrollToBottom(false); }, 15 * _this.props.messages.length);
            }
        };
        _this.onEndReached = function (_a) {
            var distanceFromEnd = _a.distanceFromEnd;
            var _b = _this.props, loadEarlier = _b.loadEarlier, onLoadEarlier = _b.onLoadEarlier, infiniteScroll = _b.infiniteScroll, isLoadingEarlier = _b.isLoadingEarlier;
            if (infiniteScroll &&
                (_this.state.hasScrolled || distanceFromEnd > 0) &&
                distanceFromEnd <= 100 &&
                loadEarlier &&
                onLoadEarlier &&
                !isLoadingEarlier &&
                react_native_1__default['default'].Platform.OS !== 'web') {
                onLoadEarlier();
            }
        };
        _this.keyExtractor = function (item) { return "" + item._id; };
        return _this;
    }
    MessageContainer.prototype.scrollTo = function (options) {
        if (this.props.forwardRef && this.props.forwardRef.current && options) {
            this.props.forwardRef.current.scrollToOffset(options);
        }
    };
    MessageContainer.prototype.renderScrollBottomComponent = function () {
        var scrollToBottomComponent = this.props.scrollToBottomComponent;
        if (scrollToBottomComponent) {
            return scrollToBottomComponent();
        }
        return <react_native_1.Text>V</react_native_1.Text>;
    };
    MessageContainer.prototype.renderScrollToBottomWrapper = function () {
        var _this = this;
        var propsStyle = this.props.scrollToBottomStyle || {};
        return (<react_native_1.View style={[styles.scrollToBottomStyle, propsStyle]}>
        <react_native_1.TouchableOpacity onPress={function () { return _this.scrollToBottom(); }} hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}>
          {this.renderScrollBottomComponent()}
        </react_native_1.TouchableOpacity>
      </react_native_1.View>);
    };
    MessageContainer.prototype.render = function () {
        var inverted = this.props.inverted;
        return (<react_native_1.View style={this.props.alignTop ? styles.containerAlignTop : styles.container}>
        {this.state.showScrollBottom && this.props.scrollToBottom
            ? this.renderScrollToBottomWrapper()
            : null}
        <react_native_1.FlatList ref={this.props.forwardRef} extraData={[this.props.extraData, this.props.isTyping]} keyExtractor={this.keyExtractor} enableEmptySections automaticallyAdjustContentInsets={false} inverted={inverted} data={this.props.messages} style={styles.listStyle} contentContainerStyle={styles.contentContainerStyle} renderItem={this.renderRow} {...this.props.invertibleScrollViewProps} ListEmptyComponent={this.renderChatEmpty} ListFooterComponent={inverted ? this.renderHeaderWrapper : this.renderFooter} ListHeaderComponent={inverted ? this.renderFooter : this.renderHeaderWrapper} onScroll={this.handleOnScroll} scrollEventThrottle={100} onLayout={this.onLayoutList} onEndReached={this.onEndReached} onEndReachedThreshold={0.1} {...this.props.listViewProps}/>
      </react_native_1.View>);
    };
    MessageContainer.defaultProps = {
        messages: [],
        user: {},
        isTyping: false,
        renderChatEmpty: null,
        renderFooter: null,
        renderMessage: null,
        onLoadEarlier: function () { },
        onQuickReply: function () { },
        inverted: true,
        loadEarlier: false,
        listViewProps: {},
        invertibleScrollViewProps: {},
        extraData: null,
        scrollToBottom: false,
        scrollToBottomOffset: 200,
        alignTop: false,
        scrollToBottomStyle: {},
        infiniteScroll: false,
        isLoadingEarlier: false
    };
    MessageContainer.propTypes = {
        messages: prop_types_1__default['default']["default"].arrayOf(prop_types_1__default['default']["default"].object),
        isTyping: prop_types_1__default['default']["default"].bool,
        user: prop_types_1__default['default']["default"].object,
        renderChatEmpty: prop_types_1__default['default']["default"].func,
        renderFooter: prop_types_1__default['default']["default"].func,
        renderMessage: prop_types_1__default['default']["default"].func,
        renderLoadEarlier: prop_types_1__default['default']["default"].func,
        onLoadEarlier: prop_types_1__default['default']["default"].func,
        listViewProps: prop_types_1__default['default']["default"].object,
        inverted: prop_types_1__default['default']["default"].bool,
        loadEarlier: prop_types_1__default['default']["default"].bool,
        invertibleScrollViewProps: prop_types_1__default['default']["default"].object,
        extraData: prop_types_1__default['default']["default"].object,
        scrollToBottom: prop_types_1__default['default']["default"].bool,
        scrollToBottomOffset: prop_types_1__default['default']["default"].number,
        scrollToBottomComponent: prop_types_1__default['default']["default"].func,
        alignTop: prop_types_1__default['default']["default"].bool,
        scrollToBottomStyle: utils.StylePropType,
        infiniteScroll: prop_types_1__default['default']["default"].bool
    };
    return MessageContainer;
}(react_1["default"].PureComponent));
exports["default"] = MessageContainer;
//# sourceMappingURL=MessageContainer.jsx.map
});

var Models = /*#__PURE__*/Object.defineProperty({

}, '__esModule', {value: true});

var localizedFormat_1 = /*@__PURE__*/getAugmentedNamespace(localizedFormat);

var GiftedChat_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.utils = exports.GiftedAvatar = exports.Time = exports.Send = exports.MessageContainer = exports.Message = exports.LoadEarlier = exports.InputToolbar = exports.Day = exports.Composer = exports.MessageText = exports.MessageImage = exports.SystemMessage = exports.Bubble = exports.Avatar = exports.Actions = exports.GiftedChat = void 0;










exports.utils = utils;

exports.Actions = Actions_1["default"];

exports.Avatar = Avatar_1["default"];

exports.Bubble = Bubble_1["default"];

exports.SystemMessage = SystemMessage_1["default"];

exports.MessageImage = MessageImage_1["default"];

exports.MessageText = MessageText_1["default"];

exports.Composer = Composer_1["default"];

exports.Day = Day_1["default"];

exports.InputToolbar = InputToolbar_1["default"];

exports.LoadEarlier = LoadEarlier_1["default"];

exports.Message = Message_1["default"];

exports.MessageContainer = MessageContainer_1["default"];

exports.Send = Send_1["default"];

exports.Time = Time_1["default"];

exports.GiftedAvatar = GiftedAvatar_1["default"];

dayjs_1__default['default']["default"].extend(localizedFormat_1["default"]);
var GiftedChat = /** @class */ (function (_super) {
    tslib_1.__extends(GiftedChat, _super);
    function GiftedChat(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this._keyboardHeight = 0;
        _this._bottomOffset = 0;
        _this._maxHeight = undefined;
        _this._isFirstLayout = true;
        _this._locale = 'en';
        _this.invertibleScrollViewProps = undefined;
        _this._actionSheetRef = undefined;
        _this._messageContainerRef = react_1["default"].createRef();
        _this._isTextInputWasFocused = false;
        _this.state = {
            isInitialized: false,
            composerHeight: _this.props.minComposerHeight,
            messagesContainerHeight: undefined,
            typingDisabled: false,
            text: undefined,
            messages: undefined
        };
        _this.getLocale = function () { return _this._locale; };
        _this.safeAreaSupport = function (bottomOffset) {
            return bottomOffset != null ? bottomOffset : react_native_iphone_x_helper_1__default['default'].getBottomSpace();
        };
        _this.onKeyboardWillShow = function (e) {
            _this.handleTextInputFocusWhenKeyboardShow();
            if (_this.props.isKeyboardInternallyHandled) {
                _this.setIsTypingDisabled(true);
                _this.setKeyboardHeight(e.endCoordinates ? e.endCoordinates.height : e.end.height);
                _this.setBottomOffset(_this.safeAreaSupport(_this.props.bottomOffset));
                var newMessagesContainerHeight = _this.getMessagesContainerHeightWithKeyboard();
                _this.setState({
                    messagesContainerHeight: newMessagesContainerHeight
                });
            }
        };
        _this.onKeyboardWillHide = function (_e) {
            _this.handleTextInputFocusWhenKeyboardHide();
            if (_this.props.isKeyboardInternallyHandled) {
                _this.setIsTypingDisabled(true);
                _this.setKeyboardHeight(0);
                _this.setBottomOffset(0);
                var newMessagesContainerHeight = _this.getBasicMessagesContainerHeight();
                _this.setState({
                    messagesContainerHeight: newMessagesContainerHeight
                });
            }
        };
        _this.onKeyboardDidShow = function (e) {
            if (react_native_1__default['default'].Platform.OS === 'android') {
                _this.onKeyboardWillShow(e);
            }
            _this.setIsTypingDisabled(false);
        };
        _this.onKeyboardDidHide = function (e) {
            if (react_native_1__default['default'].Platform.OS === 'android') {
                _this.onKeyboardWillHide(e);
            }
            _this.setIsTypingDisabled(false);
        };
        _this.onSend = function (messages, shouldResetInputToolbar) {
            if (messages === void 0) { messages = []; }
            if (shouldResetInputToolbar === void 0) { shouldResetInputToolbar = false; }
            if (!Array.isArray(messages)) {
                messages = [messages];
            }
            var newMessages = messages.map(function (message) {
                return tslib_1.__assign(tslib_1.__assign({}, message), { user: _this.props.user, createdAt: new Date(), _id: _this.props.messageIdGenerator && _this.props.messageIdGenerator() });
            });
            if (shouldResetInputToolbar === true) {
                _this.setIsTypingDisabled(true);
                _this.resetInputToolbar();
            }
            if (_this.props.onSend) {
                _this.props.onSend(newMessages);
            }
            if (shouldResetInputToolbar === true) {
                setTimeout(function () {
                    if (_this.getIsMounted() === true) {
                        _this.setIsTypingDisabled(false);
                    }
                }, 100);
            }
        };
        _this.onInputSizeChanged = function (size) {
            var newComposerHeight = Math.max(_this.props.minComposerHeight, Math.min(_this.props.maxComposerHeight, size.height));
            var newMessagesContainerHeight = _this.getMessagesContainerHeightWithKeyboard(newComposerHeight);
            _this.setState({
                composerHeight: newComposerHeight,
                messagesContainerHeight: newMessagesContainerHeight
            });
        };
        _this.onInputTextChanged = function (text) {
            if (_this.getIsTypingDisabled()) {
                return;
            }
            if (_this.props.onInputTextChanged) {
                _this.props.onInputTextChanged(text);
            }
            // Only set state if it's not being overridden by a prop.
            if (_this.props.text === undefined) {
                _this.setState({ text: text });
            }
        };
        _this.onInitialLayoutViewLayout = function (e) {
            var layout = e.nativeEvent.layout;
            if (layout.height <= 0) {
                return;
            }
            _this.notifyInputTextReset();
            _this.setMaxHeight(layout.height);
            var newComposerHeight = _this.props.minComposerHeight;
            var newMessagesContainerHeight = _this.getMessagesContainerHeightWithKeyboard(newComposerHeight);
            var initialText = _this.props.initialText || '';
            _this.setState({
                isInitialized: true,
                text: _this.getTextFromProp(initialText),
                composerHeight: newComposerHeight,
                messagesContainerHeight: newMessagesContainerHeight
            });
        };
        _this.onMainViewLayout = function (e) {
            // fix an issue when keyboard is dismissing during the initialization
            var layout = e.nativeEvent.layout;
            if (_this.getMaxHeight() !== layout.height ||
                _this.getIsFirstLayout() === true) {
                _this.setMaxHeight(layout.height);
                _this.setState({
                    messagesContainerHeight: _this._keyboardHeight > 0
                        ? _this.getMessagesContainerHeightWithKeyboard()
                        : _this.getBasicMessagesContainerHeight()
                });
            }
            if (_this.getIsFirstLayout() === true) {
                _this.setIsFirstLayout(false);
            }
        };
        _this.invertibleScrollViewProps = {
            inverted: _this.props.inverted,
            keyboardShouldPersistTaps: _this.props.keyboardShouldPersistTaps,
            onKeyboardWillShow: _this.onKeyboardWillShow,
            onKeyboardWillHide: _this.onKeyboardWillHide,
            onKeyboardDidShow: _this.onKeyboardDidShow,
            onKeyboardDidHide: _this.onKeyboardDidHide
        };
        return _this;
    }
    GiftedChat.append = function (currentMessages, messages, inverted) {
        if (currentMessages === void 0) { currentMessages = []; }
        if (inverted === void 0) { inverted = true; }
        if (!Array.isArray(messages)) {
            messages = [messages];
        }
        return inverted
            ? messages.concat(currentMessages)
            : currentMessages.concat(messages);
    };
    GiftedChat.prepend = function (currentMessages, messages, inverted) {
        if (currentMessages === void 0) { currentMessages = []; }
        if (inverted === void 0) { inverted = true; }
        if (!Array.isArray(messages)) {
            messages = [messages];
        }
        return inverted
            ? currentMessages.concat(messages)
            : messages.concat(currentMessages);
    };
    GiftedChat.prototype.getChildContext = function () {
        var _this = this;
        return {
            actionSheet: this.props.actionSheet || (function () { return _this._actionSheetRef.getContext(); }),
            getLocale: this.getLocale
        };
    };
    GiftedChat.prototype.componentDidMount = function () {
        var _a = this.props, messages = _a.messages, text = _a.text;
        this.setIsMounted(true);
        this.initLocale();
        this.setMessages(messages || []);
        this.setTextFromProp(text);
    };
    GiftedChat.prototype.componentWillUnmount = function () {
        this.setIsMounted(false);
    };
    GiftedChat.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps === void 0) { prevProps = {}; }
        var _a = this.props, messages = _a.messages, text = _a.text, inverted = _a.inverted;
        if (this.props !== prevProps) {
            this.setMessages(messages || []);
        }
        if (inverted === false &&
            messages &&
            prevProps.messages &&
            messages.length !== prevProps.messages.length) {
            setTimeout(function () { return _this.scrollToBottom(false); }, 200);
        }
        if (text !== prevProps.text) {
            this.setTextFromProp(text);
        }
    };
    GiftedChat.prototype.initLocale = function () {
        if (this.props.locale === null) {
            this.setLocale('en');
        }
        else {
            this.setLocale(this.props.locale || 'en');
        }
    };
    GiftedChat.prototype.setLocale = function (locale) {
        this._locale = locale;
    };
    GiftedChat.prototype.setTextFromProp = function (textProp) {
        // Text prop takes precedence over state.
        if (textProp !== undefined && textProp !== this.state.text) {
            this.setState({ text: textProp });
        }
    };
    GiftedChat.prototype.getTextFromProp = function (fallback) {
        if (this.props.text === undefined) {
            return fallback;
        }
        return this.props.text;
    };
    GiftedChat.prototype.setMessages = function (messages) {
        this.setState({ messages: messages });
    };
    GiftedChat.prototype.getMessages = function () {
        return this.state.messages;
    };
    GiftedChat.prototype.setMaxHeight = function (height) {
        this._maxHeight = height;
    };
    GiftedChat.prototype.getMaxHeight = function () {
        return this._maxHeight;
    };
    GiftedChat.prototype.setKeyboardHeight = function (height) {
        this._keyboardHeight = height;
    };
    GiftedChat.prototype.getKeyboardHeight = function () {
        if (react_native_1__default['default'].Platform.OS === 'android' && !this.props.forceGetKeyboardHeight) {
            // For android: on-screen keyboard resized main container and has own height.
            // @see https://developer.android.com/training/keyboard-input/visibility.html
            // So for calculate the messages container height ignore keyboard height.
            return 0;
        }
        return this._keyboardHeight;
    };
    GiftedChat.prototype.setBottomOffset = function (value) {
        this._bottomOffset = value;
    };
    GiftedChat.prototype.getBottomOffset = function () {
        return this._bottomOffset;
    };
    GiftedChat.prototype.setIsFirstLayout = function (value) {
        this._isFirstLayout = value;
    };
    GiftedChat.prototype.getIsFirstLayout = function () {
        return this._isFirstLayout;
    };
    GiftedChat.prototype.setIsTypingDisabled = function (value) {
        this.setState({
            typingDisabled: value
        });
    };
    GiftedChat.prototype.getIsTypingDisabled = function () {
        return this.state.typingDisabled;
    };
    GiftedChat.prototype.setIsMounted = function (value) {
        this._isMounted = value;
    };
    GiftedChat.prototype.getIsMounted = function () {
        return this._isMounted;
    };
    GiftedChat.prototype.getMinInputToolbarHeight = function () {
        return this.props.renderAccessory
            ? this.props.minInputToolbarHeight * 2
            : this.props.minInputToolbarHeight;
    };
    GiftedChat.prototype.calculateInputToolbarHeight = function (composerHeight) {
        return (composerHeight +
            (this.getMinInputToolbarHeight() - this.props.minComposerHeight));
    };
    /**
     * Returns the height, based on current window size, without taking the keyboard into account.
     */
    GiftedChat.prototype.getBasicMessagesContainerHeight = function (composerHeight) {
        if (composerHeight === void 0) { composerHeight = this.state.composerHeight; }
        return (this.getMaxHeight() - this.calculateInputToolbarHeight(composerHeight));
    };
    /**
     * Returns the height, based on current window size, taking the keyboard into account.
     */
    GiftedChat.prototype.getMessagesContainerHeightWithKeyboard = function (composerHeight) {
        if (composerHeight === void 0) { composerHeight = this.state.composerHeight; }
        return (this.getBasicMessagesContainerHeight(composerHeight) -
            this.getKeyboardHeight() +
            this.getBottomOffset());
    };
    /**
     * Store text input focus status when keyboard hide to retrieve
     * it after wards if needed.
     * `onKeyboardWillHide` may be called twice in sequence so we
     * make a guard condition (eg. showing image picker)
     */
    GiftedChat.prototype.handleTextInputFocusWhenKeyboardHide = function () {
        var _a;
        if (!this._isTextInputWasFocused) {
            this._isTextInputWasFocused = ((_a = this.textInput) === null || _a === void 0 ? void 0 : _a.isFocused()) || false;
        }
    };
    /**
     * Refocus the text input only if it was focused before showing keyboard.
     * This is needed in some cases (eg. showing image picker).
     */
    GiftedChat.prototype.handleTextInputFocusWhenKeyboardShow = function () {
        if (this.textInput &&
            this._isTextInputWasFocused &&
            !this.textInput.isFocused()) {
            this.textInput.focus();
        }
        // Reset the indicator since the keyboard is shown
        this._isTextInputWasFocused = false;
    };
    GiftedChat.prototype.scrollToBottom = function (animated) {
        if (animated === void 0) { animated = true; }
        if (this._messageContainerRef && this._messageContainerRef.current) {
            var inverted = this.props.inverted;
            if (!inverted) {
                this._messageContainerRef.current.scrollToEnd({ animated: animated });
            }
            else {
                this._messageContainerRef.current.scrollToOffset({
                    offset: 0,
                    animated: animated
                });
            }
        }
    };
    GiftedChat.prototype.renderMessages = function () {
        var _a = this.props, messagesContainerStyle = _a.messagesContainerStyle, messagesContainerProps = tslib_1.__rest(_a, ["messagesContainerStyle"]);
        var fragment = (<react_native_1.View style={[
            {
                height: this.state.messagesContainerHeight
            },
            messagesContainerStyle,
        ]}>
        <MessageContainer_1.default {...messagesContainerProps} invertibleScrollViewProps={this.invertibleScrollViewProps} messages={this.getMessages()} forwardRef={this._messageContainerRef} isTyping={this.props.isTyping}/>
        {this.renderChatFooter()}
      </react_native_1.View>);
        return this.props.isKeyboardInternallyHandled ? (<react_native_1.KeyboardAvoidingView enabled>{fragment}</react_native_1.KeyboardAvoidingView>) : (fragment);
    };
    GiftedChat.prototype.resetInputToolbar = function () {
        if (this.textInput) {
            this.textInput.clear();
        }
        this.notifyInputTextReset();
        var newComposerHeight = this.props.minComposerHeight;
        var newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard(newComposerHeight);
        this.setState({
            text: this.getTextFromProp(''),
            composerHeight: newComposerHeight,
            messagesContainerHeight: newMessagesContainerHeight
        });
    };
    GiftedChat.prototype.focusTextInput = function () {
        if (this.textInput) {
            this.textInput.focus();
        }
    };
    GiftedChat.prototype.notifyInputTextReset = function () {
        if (this.props.onInputTextChanged) {
            this.props.onInputTextChanged('');
        }
    };
    GiftedChat.prototype.renderInputToolbar = function () {
        var _this = this;
        var inputToolbarProps = tslib_1.__assign(tslib_1.__assign({}, this.props), { text: this.getTextFromProp(this.state.text), composerHeight: Math.max(this.props.minComposerHeight, this.state.composerHeight), onSend: this.onSend, onInputSizeChanged: this.onInputSizeChanged, onTextChanged: this.onInputTextChanged, textInputProps: tslib_1.__assign(tslib_1.__assign({}, this.props.textInputProps), { ref: function (textInput) { return (_this.textInput = textInput); }, maxLength: this.getIsTypingDisabled() ? 0 : this.props.maxInputLength }) });
        if (this.props.renderInputToolbar) {
            return this.props.renderInputToolbar(inputToolbarProps);
        }
        return <InputToolbar_1.default {...inputToolbarProps}/>;
    };
    GiftedChat.prototype.renderChatFooter = function () {
        if (this.props.renderChatFooter) {
            return this.props.renderChatFooter();
        }
        return null;
    };
    GiftedChat.prototype.renderLoading = function () {
        if (this.props.renderLoading) {
            return this.props.renderLoading();
        }
        return null;
    };
    GiftedChat.prototype.render = function () {
        var _this = this;
        if (this.state.isInitialized === true) {
            var wrapInSafeArea = this.props.wrapInSafeArea;
            wrapInSafeArea ? react_native_1__default['default'].SafeAreaView : react_native_1__default['default'].View;
            return (<Wrapper style={styles.safeArea}>
          <react_native_action_sheet_1.ActionSheetProvider ref={function (component) { return (_this._actionSheetRef = component); }}>
            <react_native_1.View style={styles.container} onLayout={this.onMainViewLayout}>
              {this.renderMessages()}
              {this.renderInputToolbar()}
            </react_native_1.View>
          </react_native_action_sheet_1.ActionSheetProvider>
        </Wrapper>);
        }
        return (<react_native_1.View style={styles.container} onLayout={this.onInitialLayoutViewLayout}>
        {this.renderLoading()}
      </react_native_1.View>);
    };
    GiftedChat.childContextTypes = {
        actionSheet: prop_types_1__default['default']["default"].func,
        getLocale: prop_types_1__default['default']["default"].func
    };
    GiftedChat.defaultProps = {
        messages: [],
        messagesContainerStyle: undefined,
        text: undefined,
        placeholder: Constant.DEFAULT_PLACEHOLDER,
        disableComposer: false,
        messageIdGenerator: function () { return uuid_1__default['default']["default"].v4(); },
        user: {},
        onSend: function () { },
        locale: null,
        timeFormat: Constant.TIME_FORMAT,
        dateFormat: Constant.DATE_FORMAT,
        loadEarlier: false,
        onLoadEarlier: function () { },
        isLoadingEarlier: false,
        renderLoading: null,
        renderLoadEarlier: null,
        renderAvatar: undefined,
        showUserAvatar: false,
        actionSheet: null,
        onPressAvatar: null,
        onLongPressAvatar: null,
        renderUsernameOnMessage: false,
        renderAvatarOnTop: false,
        renderBubble: null,
        renderSystemMessage: null,
        onLongPress: null,
        renderMessage: null,
        renderMessageText: null,
        renderMessageImage: null,
        renderMessageVideo: null,
        renderMessageAudio: null,
        imageProps: {},
        videoProps: {},
        audioProps: {},
        lightboxProps: {},
        textInputProps: {},
        listViewProps: {},
        renderCustomView: null,
        isCustomViewBottom: false,
        renderDay: null,
        renderTime: null,
        renderFooter: null,
        renderChatEmpty: null,
        renderChatFooter: null,
        renderInputToolbar: null,
        renderComposer: null,
        renderActions: null,
        renderSend: null,
        renderAccessory: null,
        isKeyboardInternallyHandled: true,
        onPressActionButton: null,
        bottomOffset: null,
        minInputToolbarHeight: 44,
        keyboardShouldPersistTaps: react_native_1__default['default'].Platform.select({
            ios: 'never',
            android: 'always',
            "default": 'never'
        }),
        onInputTextChanged: null,
        maxInputLength: null,
        forceGetKeyboardHeight: false,
        inverted: true,
        extraData: null,
        minComposerHeight: Constant.MIN_COMPOSER_HEIGHT,
        maxComposerHeight: Constant.MAX_COMPOSER_HEIGHT,
        wrapInSafeArea: true
    };
    GiftedChat.propTypes = {
        messages: prop_types_1__default['default']["default"].arrayOf(prop_types_1__default['default']["default"].object),
        messagesContainerStyle: utils.StylePropType,
        text: prop_types_1__default['default']["default"].string,
        initialText: prop_types_1__default['default']["default"].string,
        placeholder: prop_types_1__default['default']["default"].string,
        disableComposer: prop_types_1__default['default']["default"].bool,
        messageIdGenerator: prop_types_1__default['default']["default"].func,
        user: prop_types_1__default['default']["default"].object,
        onSend: prop_types_1__default['default']["default"].func,
        locale: prop_types_1__default['default']["default"].string,
        timeFormat: prop_types_1__default['default']["default"].string,
        dateFormat: prop_types_1__default['default']["default"].string,
        isKeyboardInternallyHandled: prop_types_1__default['default']["default"].bool,
        loadEarlier: prop_types_1__default['default']["default"].bool,
        onLoadEarlier: prop_types_1__default['default']["default"].func,
        isLoadingEarlier: prop_types_1__default['default']["default"].bool,
        renderLoading: prop_types_1__default['default']["default"].func,
        renderLoadEarlier: prop_types_1__default['default']["default"].func,
        renderAvatar: prop_types_1__default['default']["default"].func,
        showUserAvatar: prop_types_1__default['default']["default"].bool,
        actionSheet: prop_types_1__default['default']["default"].func,
        onPressAvatar: prop_types_1__default['default']["default"].func,
        onLongPressAvatar: prop_types_1__default['default']["default"].func,
        renderUsernameOnMessage: prop_types_1__default['default']["default"].bool,
        renderAvatarOnTop: prop_types_1__default['default']["default"].bool,
        isCustomViewBottom: prop_types_1__default['default']["default"].bool,
        renderBubble: prop_types_1__default['default']["default"].func,
        renderSystemMessage: prop_types_1__default['default']["default"].func,
        onLongPress: prop_types_1__default['default']["default"].func,
        renderMessage: prop_types_1__default['default']["default"].func,
        renderMessageText: prop_types_1__default['default']["default"].func,
        renderMessageImage: prop_types_1__default['default']["default"].func,
        imageProps: prop_types_1__default['default']["default"].object,
        videoProps: prop_types_1__default['default']["default"].object,
        audioProps: prop_types_1__default['default']["default"].object,
        lightboxProps: prop_types_1__default['default']["default"].object,
        renderCustomView: prop_types_1__default['default']["default"].func,
        renderDay: prop_types_1__default['default']["default"].func,
        renderTime: prop_types_1__default['default']["default"].func,
        renderFooter: prop_types_1__default['default']["default"].func,
        renderChatEmpty: prop_types_1__default['default']["default"].func,
        renderChatFooter: prop_types_1__default['default']["default"].func,
        renderInputToolbar: prop_types_1__default['default']["default"].func,
        renderComposer: prop_types_1__default['default']["default"].func,
        renderActions: prop_types_1__default['default']["default"].func,
        renderSend: prop_types_1__default['default']["default"].func,
        renderAccessory: prop_types_1__default['default']["default"].func,
        onPressActionButton: prop_types_1__default['default']["default"].func,
        bottomOffset: prop_types_1__default['default']["default"].number,
        minInputToolbarHeight: prop_types_1__default['default']["default"].number,
        listViewProps: prop_types_1__default['default']["default"].object,
        keyboardShouldPersistTaps: prop_types_1__default['default']["default"].oneOf(['always', 'never', 'handled']),
        onInputTextChanged: prop_types_1__default['default']["default"].func,
        maxInputLength: prop_types_1__default['default']["default"].number,
        forceGetKeyboardHeight: prop_types_1__default['default']["default"].bool,
        inverted: prop_types_1__default['default']["default"].bool,
        textInputProps: prop_types_1__default['default']["default"].object,
        extraData: prop_types_1__default['default']["default"].object,
        minComposerHeight: prop_types_1__default['default']["default"].number,
        maxComposerHeight: prop_types_1__default['default']["default"].number,
        alignTop: prop_types_1__default['default']["default"].bool,
        wrapInSafeArea: prop_types_1__default['default']["default"].bool
    };
    return GiftedChat;
}(react_1["default"].Component));
exports.GiftedChat = GiftedChat;
var styles = react_native_1__default['default'].StyleSheet.create({
    container: {
        flex: 1
    },
    safeArea: {
        flex: 1
    }
});
tslib_1.__exportStar(Models, exports);
//# sourceMappingURL=GiftedChat.jsx.map
});

var src = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

tslib_1.__exportStar(GiftedChat_1, exports);
//# sourceMappingURL=index.js.map
});

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

module.exports = index;
//# sourceMappingURL=index.js.map
