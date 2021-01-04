/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _edit = __webpack_require__(3);

var _edit2 = _interopRequireDefault(_edit);

var _icons = __webpack_require__(4);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var registerBlockType = wp.blocks.registerBlockType;

var SAB_Gutenberg = function () {
	function SAB_Gutenberg() {
		_classCallCheck(this, SAB_Gutenberg);

		this.registerBlock();
	}

	_createClass(SAB_Gutenberg, [{
		key: 'registerBlock',
		value: function registerBlock() {

			/**
    * Block attributes
    */
			var blockAttributes = {
				authorID: {
					type: 'integer',
					default: 0
				},
				display_name: {
					type: 'string',
					default: ''
				},
				avatar: {
					type: 'string',
					default: ''
				},
				profile_image: {
					type: 'string',
					default: ''
				},
				description: {
					type: 'string',
					default: ''
				},
				user_url: {
					type: 'string',
					default: ''
				},
				social_links: {
					type: 'array',
					default: ''
				},
				status: {
					type: 'string',
					default: 'loading'
				}
			};

			registerBlockType('simple-author-box/sab', {
				title: 'Simple Author Box',
				icon: _icons2.default.author,
				category: 'common',
				supports: {
					customClassName: false
				},
				attributes: blockAttributes,
				edit: _edit2.default,
				save: function save() {
					// Rendering in PHP
					return null;
				}
			});
		}
	}]);

	return SAB_Gutenberg;
}();

window.sab = new SAB_Gutenberg();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inspector = __webpack_require__(5);

var _inspector2 = _interopRequireDefault(_inspector);

var _socialIcon = __webpack_require__(6);

var _socialIcon2 = _interopRequireDefault(_socialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Internal dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var Spinner = wp.components.Spinner;

/**
 * Block edit function
 */

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit(props) {
		_classCallCheck(this, Edit);

		return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
	}

	_createClass(Edit, [{
		key: 'renderSocialIcon',
		value: function renderSocialIcon(url, iconName) {

			var sabColor = void 0;

			if ('1' == sabVars.sab_colored) {
				sabColor = 'saboxplugin-icon-color';
			} else {
				sabColor = 'saboxplugin-icon-grey';
			}

			var type = 'simple';
			if ('1' == sabVars.sab_colored) {
				if ('1' == sabVars.sab_icons_style) {
					type = 'circle';
				} else {
					type = 'square';
				}
			}

			var social_icon = new _socialIcon2.default();

			return [React.createElement(
				'a',
				{ href: url, target: '_blank', 'class': sabColor },
				social_icon.icon_to_svg(iconName, type)
			)];
		}
	}, {
		key: 'changeAuthor',
		value: function changeAuthor(authorID) {
			var _this2 = this;

			jQuery.ajax({
				type: "POST",
				data: { action: "sab_get_author", author_ID: authorID, nonce: sabVars.nonce },
				url: sabVars.ajaxURL,
				success: function success(result) {

					if (result.success == false) {
						_this2.props.setAttributes({
							status: 'error'
						});
						return;
					}

					var author = JSON.parse(result);

					_this2.props.setAttributes({
						authorID: author.ID,
						avatar: author.avatar,
						profile_image: author['sabox-profile-image'],
						display_name: author.data.display_name,
						description: author.description,
						user_url: author.data.user_url,
						social_links: author.sabox_social_links,
						status: 'ready'
					});
				}
			});
		}
	}, {
		key: 'generateInlineCSS',
		value: function generateInlineCSS() {
			var css = '';

			// Border color of Simple Author Box
			if ('' != sabVars.sab_box_border) {
				css += '.saboxplugin-wrap {border-color:' + sabVars.sab_box_border + ';}';
				css += '.saboxplugin-wrap .saboxplugin-socials {border-color:' + sabVars.sab_box_border + ';}';
			}
			// Border width of Simple Author Box
			if ('1' != sabVars.sab_box_border_width) {
				css += '.saboxplugin-wrap, .saboxplugin-wrap .saboxplugin-socials{ border-width: ' + sabVars.sab_box_border_width + 'px; }';
			}

			// Avatar image style
			if ('0' != sabVars.sab_avatar_style) {
				css += '.saboxplugin-wrap .saboxplugin-gravatar img {-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border-radius:50%;}';
			}

			// Social icons style
			if ('0' != sabVars.sab_colored && '0' != sabVars.sab_icons_style) {
				css += '.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-color {-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border-radius:50%;}';
			}

			// Long Shadow
			if ('1' == sabVars.sab_colored && '1' != sabVars.sab_box_long_shadow) {
				css += '.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-color .st1 {display: none;}';
			}

			// Thin border
			if ('1' == sabVars.sab_colored && '1' == sabVars.sab_box_thin_border) {
				var style = 'border-width: 1px;border-style:solid;';
				if ('1' == sabVars.sab_icons_style) {
					style += 'border-radius:50%';
				}
				css += '.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-color svg {' + style + '}';
			}

			// Background color of social icons bar
			if ('' != sabVars.sab_box_icons_back) {
				css += '.saboxplugin-wrap .saboxplugin-socials{background-color:' + sabVars.sab_box_icons_back + ';}';
			}

			// Background color of author box
			if ('' != sabVars.sab_box_author_back) {
				css += '.saboxplugin-wrap {background-color:' + sabVars.sab_box_author_back + ';}';
			}

			// Color of author box paragraphs
			if ('' != sabVars.sab_box_author_p_color) {
				css += '.saboxplugin-wrap .saboxplugin-desc  {color:' + sabVars.sab_box_author_p_color + ';}';
			}

			// Color of author box links
			if ('' != sabVars.sab_box_author_a_color) {
				css += '.saboxplugin-wrap .saboxplugin-desc a  {color:' + sabVars.sab_box_author_a_color + ';}';
			}

			// Author name color
			if ('' != sabVars.sab_box_author_color) {
				css += '.saboxplugin-wrap .saboxplugin-authorname a {color:' + sabVars.sab_box_author_color + ';}';
			}

			// Author web color
			if ('1' == sabVars.sab_web && '' != sabVars.sab_box_web_color) {
				css += '.saboxplugin-wrap .saboxplugin-web a {color:' + sabVars.sab_box_web_color + ';}';
			}

			// Author name font family
			if ('None' != sabVars.sab_box_name_font) {
				css += '.saboxplugin-wrap .saboxplugin-authorname {font-family:"' + sabVars.sab_box_name_font + '";}';
			}

			// Author description font family
			if ('None' != sabVars.sab_box_desc_font) {
				css += '.saboxplugin-wrap .saboxplugin-desc {font-family:' + sabVars.sab_box_desc_font + ';}';
			}

			// Author web font family
			if ('1' == sabVars.sab_web && 'None' != sabVars.sab_box_web_font) {
				css += '.saboxplugin-wrap .saboxplugin-web {font-family:"' + sabVars.sab_box_web_font + '";}';
			}

			// Author description font style
			if ('1' == sabVars.sab_desc_style) {
				css += '.saboxplugin-wrap .saboxplugin-desc {font-style:italic;}';
			}

			// Margin top & bottom, Padding
			if ('' != sabVars.padding_top_bottom) {
				css += '.saboxplugin-wrap {padding-top: ' + sabVars.padding_top_bottom + 'px; padding-bottom:' + sabVars.padding_top_bottom + 'px; }';
			}
			if ('' != sabVars.padding_left_right) {
				css += '.saboxplugin-wrap {padding-left: ' + sabVars.padding_left_right + 'px; padding-right:' + sabVars.padding_left_right + 'px; }';
			}
			if ('' != sabVars.top_margin) {
				css += '.saboxplugin-wrap {margin-top: ' + sabVars.top_margin + 'px; }';
			}
			if ('' != sabVars.bottom_margin) {
				css += '.saboxplugin-wrap {margin-bottom: ' + sabVars.bottom_margin + 'px; }';
			}

			// Author name text size
			css += '.saboxplugin-wrap .saboxplugin-authorname {font-size:' + sabVars.sabox_name_size + 'px; line-height:' + (parseInt(sabVars.sabox_name_size) + 7) + 'px;}';

			// Author description font size
			css += '.saboxplugin-wrap .saboxplugin-desc p, .saboxplugin-wrap .saboxplugin-desc {font-size:' + sabVars.sabox_desc_size + 'px !important; line-height:' + (parseInt(sabVars.sabox_desc_size) + 7) + 'px !important;}';

			// Author website text size
			css += '.saboxplugin-wrap .saboxplugin-web {font-size:' + sabVars.sabox_web_size + 'px;}';

			// Icons size
			var icon_size = parseInt(sabVars.sabox_icon_size);
			if ('1' == sabVars.sab_colored) {
				icon_size *= 2;
			}
			css += '.saboxplugin-wrap .saboxplugin-socials a svg {width:' + icon_size + 'px;height:' + icon_size + 'px;}';

			return css;
		}
	}, {
		key: 'loadCustomFonts',
		value: function loadCustomFonts() {

			var sab_subset = void 0;
			if ('none' != sabVars.sab_box_subset) {
				sab_subset = '&amp;subset=' + sabVars.sab_box_subset;
			} else {
				sab_subset = '&amp;subset=latin';
			}

			var google_fonts = [];

			if ('None' != sabVars.sab_box_name_font) {
				google_fonts.push(sabVars.sab_box_name_font.replace(' ', '+'));
			}

			if ('None' != sabVars.sab_box_desc_font) {
				google_fonts.push(sabVars.sab_box_desc_font.replace(' ', '+'));
			}

			if ('None' != sabVars.sab_box_web_font) {
				google_fonts.push(sabVars.sab_box_web_font.replace(' ', '+'));
			}

			function onlyUnique(value, index, self) {
				return self.indexOf(value) === index;
			}
			google_fonts = google_fonts.filter(onlyUnique);

			if (google_fonts.length > 0) {

				google_fonts.forEach(function (entry, index) {
					google_fonts[index] = entry + ':400,700,400italic,700italic';
				});

				return React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=' + google_fonts.join('|') + sab_subset, rel: 'stylesheet' });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.changeAuthor(this.props.attributes.authorID == 0 ? sabVars.currentUserID : this.props.attributes.authorID);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    attributes = _props.attributes,
			    isSelected = _props.isSelected;
			var authorID = attributes.authorID,
			    display_name = attributes.display_name,
			    avatar = attributes.avatar,
			    profile_image = attributes.profile_image,
			    description = attributes.description,
			    user_url = attributes.user_url,
			    social_links = attributes.social_links,
			    status = attributes.status;


			if (status == 'loading') {
				return React.createElement(
					'div',
					{ 'class': 'saboxplugin-wrap saboxplugin-wrap--loading' },
					React.createElement(Spinner, null)
				);
			}

			if (status == 'error') {
				return [React.createElement(
					Fragment,
					null,
					isSelected && React.createElement(_inspector2.default, _extends({
						changeAuthor: function changeAuthor(authorID) {
							return _this3.changeAuthor(authorID);
						}
					}, this.props)),
					React.createElement(
						'div',
						{ 'class': 'saboxplugin-wrap saboxplugin-wrap--error' },
						__('Author not found')
					)
				)];
			}

			return [React.createElement(
				Fragment,
				null,
				isSelected && React.createElement(_inspector2.default, _extends({
					changeAuthor: function changeAuthor(authorID) {
						return _this3.changeAuthor(authorID);
					}
				}, this.props)),
				React.createElement(
					'div',
					{ 'class': 'saboxplugin-wrap' },
					React.createElement(
						'div',
						{ 'class': 'saboxplugin-gravatar' },
						React.createElement('img', { src: !profile_image ? avatar : profile_image, height: '100', width: '100' })
					),
					React.createElement(
						'div',
						{ 'class': 'saboxplugin-authorname' },
						React.createElement(
							'a',
							{ href: '#', 'class': 'vcard author', rel: 'author', itemprop: 'url' },
							React.createElement(
								'span',
								{ 'class': 'fn', itemprop: 'name' },
								display_name
							)
						)
					),
					React.createElement('div', { 'class': 'saboxplugin-desc', dangerouslySetInnerHTML: { __html: description } }),
					sabVars.sab_web == '1' && user_url != '' && React.createElement(
						'div',
						{ 'class': 'saboxplugin-web' },
						React.createElement(
							'a',
							{ href: '#' },
							user_url
						)
					),
					React.createElement('div', { 'class': 'clearfix' }),
					social_links.length == 0 && sabVars.currentUserID == authorID && React.createElement(
						'a',
						{ target: '_blank', href: sabVars.adminURL + 'profile.php?#sabox-social-table' },
						__('Add Social Links')
					),
					sabVars.sab_hide_socials == 0 && !jQuery.isEmptyObject(social_links) && React.createElement(
						'div',
						{ 'class': 'saboxplugin-socials' },
						Object.keys(social_links).map(function (key) {
							return _this3.renderSocialIcon(social_links[key], key);
						})
					)
				),
				React.createElement('style', { dangerouslySetInnerHTML: { __html: this.generateInlineCSS() } }),
				this.loadCustomFonts()
			)];
		}
	}]);

	return Edit;
}(Component);

exports.default = Edit;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var icons = {};

icons.author = React.createElement(
	"svg",
	{ height: "24", width: "24", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "-281 403.6 32 32" },
	React.createElement("path", { d: "M-279.9,403.6c-0.6,0-1.1,0.5-1.1,1.1l0,0v29.7c0,0.6,0.5,1.1,1.1,1.1h29.7c0.6,0,1.1-0.5,1.1-1.1l0,0v-29.7 c0-0.6-0.5-1.1-1.1-1.1H-279.9z M-278.7,405.9h27.4v27.4h-27.4V405.9z" }),
	React.createElement(
		"g",
		null,
		React.createElement(
			"g",
			{ transform: "translate(-6.000000, -4.000000)" },
			React.createElement(
				"g",
				{ transform: "translate(6.000000, 4.000000)" },
				React.createElement("path", { d: "M-265,421.9c3.9,0,7-3.1,7-7c0-3.9-3.1-7-7-7s-7,3.1-7,7C-272,418.7-268.9,421.9-265,421.9 L-265,421.9z M-265,419.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8C-260.2,417.5-262.4,419.6-265,419.6 L-265,419.6z" }),
				React.createElement("path", { d: "M-273.7,427.5L-273.7,427.5v0.6c0,0.6,0.5,1.1,1.1,1.1h4.8h3.4h3.4h3.6 c0.6,0,1.1-0.5,1.1-1.1v-0.6c0-0.8-0.7-1.5-1.4-1.7l-4.3-0.7c-1.6-0.2-4.4-0.2-6,0l-4.3,0.7C-273,425.9-273.7,426.7-273.7,427.5 L-273.7,427.5z M-275.9,427.5c0-1.9,1.5-3.6,3.3-3.9l4.3-0.7c1.8-0.3,4.8-0.3,6.6,0l4.3,0.7c1.8,0.3,3.3,2,3.3,3.9v0.6 c0,1.9-1.5,3.4-3.4,3.4h-3.6h-6.7h-4.8c-1.9,0-3.4-1.5-3.4-3.4V427.5L-275.9,427.5z" })
			)
		)
	)
);

exports.default = icons;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;

/**
 * Inspector controls
 */

var Inspector = function (_Component) {
	_inherits(Inspector, _Component);

	function Inspector(props) {
		_classCallCheck(this, Inspector);

		return _possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).apply(this, arguments));
	}

	_createClass(Inspector, [{
		key: "onAuthorSelect",
		value: function onAuthorSelect(authorID) {

			this.props.setAttributes({
				status: 'loading'
			});

			this.props.changeAuthor(authorID);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var authorID = attributes.authorID;


			var authors = sabVars.authors;
			authors.forEach(function (author) {
				author.value = author.ID;
				author.label = author.display_name;
			});

			var isEditor = false;
			if (sabVars.currentUserRoles.indexOf("administrator") != -1 || sabVars.currentUserRoles.indexOf("editor") != -1) {
				isEditor = true;
			}

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					null,
					isEditor && React.createElement(
						PanelBody,
						{ title: __('Author Settings'), initialOpen: true },
						React.createElement(SelectControl, {
							label: __('Select author'),
							value: authorID,
							options: authors,
							onChange: function onChange(value) {
								return _this2.onAuthorSelect(value);
							}
						})
					)
				)
			);
		}
	}]);

	return Inspector;
}(Component);

exports.default = Inspector;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAB_Social_Icon = function () {
	function SAB_Social_Icon() {
		_classCallCheck(this, SAB_Social_Icon);
	}

	_createClass(SAB_Social_Icon, [{
		key: 'icon_to_svg',
		value: function icon_to_svg(icon) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'simple';


			var icon_svg = '';
			if ('simple' == type) {
				icon_svg = this.simple_icon(icon);
			} else if ('square' == type) {
				icon_svg = this.square_long_shadow_icon(icon);
			} else if ('circle' == type) {
				icon_svg = this.circle_long_shadow_icon(icon);
			}

			return icon_svg;
		}
	}, {
		key: 'simple_icon',
		value: function simple_icon(icon) {

			switch (icon) {
				case 'addthis':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z' })
					);
					break;
				case 'behance':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 576 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z' })
					);
					break;
				case 'delicious':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M446.5 68c-.4-1.5-.9-3-1.4-4.5-.9-2.5-2-4.8-3.3-7.1-1.4-2.4-3-4.8-4.7-6.9-2.1-2.5-4.4-4.8-6.9-6.8-1.1-.9-2.2-1.7-3.3-2.5-1.3-.9-2.6-1.7-4-2.4-1.8-1-3.6-1.8-5.5-2.5-1.7-.7-3.5-1.3-5.4-1.7-3.8-1-7.9-1.5-12-1.5H48C21.5 32 0 53.5 0 80v352c0 4.1.5 8.2 1.5 12 2 7.7 5.8 14.6 11 20.3 1 1.1 2.1 2.2 3.3 3.3 5.7 5.2 12.6 9 20.3 11 3.8 1 7.9 1.5 12 1.5h352c26.5 0 48-21.5 48-48V80c-.1-4.1-.6-8.2-1.6-12zM416 432c0 8.8-7.2 16-16 16H224V256H32V80c0-8.8 7.2-16 16-16h176v192h192v176z' })
					);
					break;
				case 'deviantart':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 320 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z' })
					);
					break;
				case 'digg':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z' })
					);
					break;
				case 'dribbble':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z' })
					);
					break;
				case 'facebook':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 264 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229' })
					);
					break;
				case 'whatsapp':
					return React.createElement(
						'svg',
						_defineProperty({ 'aria-hidden': 'true', 'class': 'sab-' + icon, 'data-prefix': 'fab', 'data-icon': 'whatsapp', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' }, 'class', 'svg-inline--fa fa-whatsapp fa-w-14'),
						React.createElement('path', { fill: 'currentColor', d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z', 'class': '' })
					);
					break;
				case 'flickr':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z' })
					);
					break;
				case 'github':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 496 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' })
					);
					break;
				case 'google':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 488 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' })
					);
					break;
				case 'googleplus':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 640 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z' })
					);
					break;
				case 'html5':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 384 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' })
					);
					break;
				case 'instagram':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' })
					);
					break;
				case 'linkedin':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z' })
					);
					break;
				case 'pinterest':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 496 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z' })
					);
					break;
				case 'reddit':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z' })
					);
					break;
				case 'rss':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z' })
					);
					break;
				case 'sharethis':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z' })
					);
					break;
				case 'skype':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z' })
					);
					break;
				case 'soundcloud':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 640 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z' })
					);
					break;
				case 'spotify':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 496 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z' })
					);
					break;
				case 'stackoverflow':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 384 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M293.7 300l-181.2-84.5 16.7-36.5 181.3 84.7-16.8 36.3zm48-76L188.2 95.7l-25.5 30.8 153.5 128.3 25.5-30.8zm39.6-31.7L262 32l-32 24 119.3 160.3 32-24zM290.7 311L95 269.7 86.8 309l195.7 41 8.2-39zm31.6 129H42.7V320h-40v160h359.5V320h-40v120zm-39.8-80h-200v39.7h200V360z' })
					);
					break;
				case 'steam':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z' })
					);
					break;
				case 'stumbleUpon':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z' })
					);
					break;
				case 'telegram':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 417 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M 471.230469 156.445312 C 483.554688 185.835938 490.191406 216.179688 490.191406 248.414062 C 490.191406 280.652344 483.554688 310.992188 471.230469 340.386719 C 458.902344 369.777344 441.835938 394.429688 420.976562 416.238281 C 400.117188 437.097656 374.519531 454.164062 345.125 466.488281 C 315.734375 478.816406 285.394531 485.453125 253.15625 485.453125 C 220.917969 485.453125 190.578125 478.816406 161.183594 466.488281 C 131.792969 454.164062 107.140625 437.097656 85.332031 416.238281 C 64.472656 395.378906 47.40625 369.777344 35.082031 340.386719 C 22.753906 310.992188 16.117188 280.652344 16.117188 248.414062 C 16.117188 216.179688 22.753906 185.835938 35.082031 156.445312 C 47.40625 127.050781 64.472656 102.398438 85.332031 80.59375 C 106.191406 59.734375 131.792969 42.667969 161.183594 30.339844 C 190.578125 18.015625 220.917969 11.378906 253.15625 11.378906 C 285.394531 11.378906 315.734375 18.015625 345.125 30.339844 C 374.519531 42.667969 399.171875 59.734375 420.976562 80.59375 C 441.835938 102.398438 457.957031 128 471.230469 156.445312 Z M 329.957031 357.453125 L 368.828125 174.460938 C 370.726562 166.875 369.777344 161.183594 365.984375 157.394531 C 362.191406 153.601562 358.398438 153.601562 352.710938 155.496094 L 124.207031 243.675781 C 119.464844 245.570312 115.675781 247.464844 113.777344 250.3125 C 111.882812 253.15625 111.882812 255.050781 112.828125 256.949219 C 113.777344 258.84375 116.621094 260.742188 121.363281 261.6875 L 180.148438 279.703125 L 315.734375 194.371094 C 319.527344 191.527344 322.371094 191.527344 324.265625 192.472656 C 325.214844 193.421875 325.214844 194.371094 323.320312 196.265625 L 213.332031 296.769531 L 208.59375 357.453125 C 212.386719 357.453125 216.179688 355.554688 220.917969 351.761719 L 249.363281 324.265625 L 308.148438 367.882812 C 320.472656 374.519531 327.109375 370.726562 329.957031 357.453125 Z M 329.957031 357.453125' })
					);
					break;
                case 'tumblr':
                    return React.createElement(
                        'svg',
                        { 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 320 512' },
                        React.createElement('path', { fill: 'currentColor', d: 'M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z' })
                    );
                    break;
				case 'twitter':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' })
					);
					break;
				case 'vimeo':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z' })
					);
					break;
				case 'windows':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z' })
					);
					break;
				case 'wordpress':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z' })
					);
					break;
				case 'yahoo':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M252 292l4 220c-12.7-2.2-23.5-3.9-32.3-3.9-8.4 0-19.2 1.7-32.3 3.9l4-220C140.4 197.2 85 95.2 21.4 0c11.9 3.1 23 3.9 33.2 3.9 9 0 20.4-.8 34.1-3.9 40.9 72.2 82.1 138.7 135 225.5C261 163.9 314.8 81.4 358.6 0c11.1 2.9 22 3.9 32.9 3.9 11.5 0 23.2-1 35-3.9C392.1 47.9 294.9 216.9 252 292z' })
					);
					break;
				case 'youtube':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 576 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' })
					);
					break;
				case 'xing':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 384 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z' })
					);
					break;
				case 'mixcloud':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 640 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M424.43 219.729C416.124 134.727 344.135 68 256.919 68c-72.266 0-136.224 46.516-159.205 114.074-54.545 8.029-96.63 54.822-96.63 111.582 0 62.298 50.668 112.966 113.243 112.966h289.614c52.329 0 94.969-42.362 94.969-94.693 0-45.131-32.118-83.063-74.48-92.2zm-20.489 144.53H114.327c-39.04 0-70.881-31.564-70.881-70.604s31.841-70.604 70.881-70.604c18.827 0 36.548 7.475 49.838 20.766 19.963 19.963 50.133-10.227 30.18-30.18-14.675-14.398-32.672-24.365-52.053-29.349 19.935-44.3 64.79-73.926 114.628-73.926 69.496 0 125.979 56.483 125.979 125.702 0 13.568-2.215 26.857-6.369 39.594-8.943 27.517 32.133 38.939 40.147 13.29 2.769-8.306 4.984-16.889 6.369-25.472 19.381 7.476 33.502 26.303 33.502 48.453 0 28.795-23.535 52.33-52.607 52.33zm235.069-52.33c0 44.024-12.737 86.386-37.102 122.657-4.153 6.092-10.798 9.414-17.72 9.414-16.317 0-27.127-18.826-17.443-32.949 19.381-29.349 29.903-63.682 29.903-99.122s-10.521-69.773-29.903-98.845c-15.655-22.831 19.361-47.24 35.163-23.534 24.366 35.993 37.102 78.356 37.102 122.379zm-70.88 0c0 31.565-9.137 62.021-26.857 88.325-4.153 6.091-10.798 9.136-17.72 9.136-17.201 0-27.022-18.979-17.443-32.948 13.013-19.104 19.658-41.255 19.658-64.513 0-22.981-6.645-45.408-19.658-64.512-15.761-22.986 19.008-47.095 35.163-23.535 17.719 26.026 26.857 56.483 26.857 88.047z' })
					);
					break;
				case 'goodreads':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9.4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2.5-1 1.1-1.9 1.7-2.9.2.1.4.1.6.2.3 3.8.2 30.7.1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z' })
					);
					break;
				case 'twitch':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M40.1 32L10 108.9v314.3h107V480h60.2l56.8-56.8h87l117-117V32H40.1zm357.8 254.1L331 353H224l-56.8 56.8V353H76.9V72.1h321v214zM331 149v116.9h-40.1V149H331zm-107 0v116.9h-40.1V149H224z' })
					);
					break;
				case 'vk':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 576 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z' })
					);
					break;
				case 'medium':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z' })
					);
					break;
				case 'quora':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z' })
					);
					break;
				case 'meetup':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z' })
					);
					break;
				case 'user_email':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z' })
					);
					break;
				case 'snapchat':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 496 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z' })
					);
					break;
				case '500px':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M103.3 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2h.3v-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5s-68.8 13.8-93.5 38.5c-.3.3-16 16.5-21.2 23.9l-.5.6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8V20c0-5 3.9-10.5 10.5-10.5h241.3c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1H130.3v132.9h.3c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zm63.3-260.8c-.5 4.2 4.6 24.5 14.6 20.6C306 56.6 384 144.5 390.6 144.5c4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM393 414.7C283 524.6 94 475.5 61 310.5c0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM213.6 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6.2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2L265.6 284l18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L249.7 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L234 284c-18.1 17.9-20.4 19.2-20.4 22.6z' })
					);
					break;
				case 'mastodont':
					return React.createElement(
						'svg',
						{ 'aria-hidden': 'true', 'class': 'sab-' + icon, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 417 512' },
						React.createElement('path', { fill: 'currentColor', d: 'M417.8 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.5-28.4-290.4 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.4-.9-9-.9-13.9 85.6 20.9 158.6 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6V190.1c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H75.1c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z' })
					);
					break;
			}
		}
	}, {
		key: 'square_long_shadow_icon',
		value: function square_long_shadow_icon(icon) {

			switch (icon) {
				case 'addthis':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.2', y: '0.3', 'class': 'st0', fill: '#ff6550', width: '500', height: '500' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2,335.1 500.2,500.3 331.7,500.3 106.3,276.1 110.2,243 246.9,239 247.2,159 275.7,106 497.6,327' }),
						React.createElement('path', { 'class': 'st2', d: 'M379,218.1h-96.5v-96.5c0-11.8-9.6-21.5-21.5-21.5h-21.5c-11.8,0-21.5,9.6-21.5,21.5v96.5h-96.5\tc-11.8,0-21.5,9.6-21.5,21.5V261c0,11.8,9.6,21.5,21.5,21.5h96.5V379c0,11.8,9.6,21.5,21.5,21.5H261c11.8,0,21.5-9.6,21.5-21.5v-96.5H379c11.8,0,21.5-9.6,21.5-21.5v-21.5C400.4,227.7,390.8,218.1,379,218.1z' })
					);
					break;
				case 'behance':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.2', y: '.3', width: '500', height: '500', fill: '#1769ff' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 297.6 500.2 500.3 280.8 500.3 108.6 327.8 135.7 171.3 233 164.4 285 215.9 303.7 219.9 335 224 293.5 179.9 364.1 162.7' }),
						React.createElement('path', { 'class': 'st2', d: 'm222.7 233.1c15.6-7.5 23.8-18.8 23.8-36.4 0-34.7-25.9-43.2-55.7-43.2h-82.2v174.2h84.5c31.7 0 61.4-15.2 61.4-50.6 0-21.8-10.4-37.9-31.8-44zm-75.8-49.8h35.9c13.8 0 26.3 3.9 26.3 19.9 0 14.8-9.7 20.7-23.4 20.7h-38.8v-40.6zm41 114.9h-41v-48h41.7c16.9 0 27.5 7 27.5 24.9 0.1 17.6-12.7 23.1-28.2 23.1zm176.2-118.3h-70.7v-17.2h70.7v17.2zm27.7 86.6c0-37.3-21.8-68.4-61.4-68.4-38.4 0-64.6 28.9-64.6 66.8 0 39.3 24.7 66.2 64.6 66.2 30.1 0 49.7-13.6 59-42.4h-30.6c-3.3 10.8-16.9 16.5-27.4 16.5-20.3 0-31-11.9-31-32.1h91c0.3-2.1 0.4-4.3 0.4-6.6zm-91.3-15.3c1.1-16.6 12.1-26.9 28.8-26.9 17.4 0 26.2 10.2 27.6 26.9h-56.4z' })
					);
					break;
				case 'delicious':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.5', y: '-.2', width: '500', height: '500', fill: '#3399ff' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.5 249.6 499.5 499.8 249.7 499.8 123.6 373.7 125.3 137.6 138.5 127.3 370.1 121.4' }),
						React.createElement('path', { 'class': 'st2', d: 'm381.8 137.9c-0.2-0.9-0.5-1.8-0.8-2.7-0.5-1.5-1.2-2.9-2-4.2-0.8-1.4-1.8-2.9-2.8-4.1-1.2-1.5-2.6-2.9-4.1-4-0.7-0.5-1.3-1-2-1.5-0.8-0.5-1.5-1-2.4-1.4-1.1-0.6-2.1-1.1-3.3-1.5-1-0.4-2.1-0.8-3.2-1-2.3-0.6-4.7-0.9-7.1-0.9h-209.4c-15.8-0.1-28.6 12.7-28.6 28.5v209.4c0 2.4 0.3 4.9 0.9 7.1 1.2 4.6 3.5 8.7 6.5 12.1 0.6 0.7 1.2 1.3 2 2 3.4 3.1 7.5 5.4 12.1 6.5 2.3 0.6 4.7 0.9 7.1 0.9h209.4c15.8 0 28.6-12.8 28.6-28.6v-209.5c0-2.4-0.3-4.8-0.9-7.1zm-18.2 216.5c0 5.2-4.3 9.5-9.5 9.5h-104.7v-114.2h-114.2v-104.7c0-5.2 4.3-9.5 9.5-9.5h104.7v114.2h114.2v104.7z' })
					);
					break;
				case 'deviantart':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.5', y: '-.2', width: '500', height: '500', fill: '#05cc47' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.5 302.6 499.5 499.8 288.9 499.8 171.6 382.3 214 284.3 171.6 244.1 328.4 131.4' }),
						React.createElement('path', { 'class': 'st2', d: 'm328.4 177l-48.1 87.8 3.6 4.7h44.5v62.6h-78.9l-6.6 4.5-21.4 41.2c-0.1 0-4.2 4.2-4.5 4.5h-45.4v-45.7l45.7-87.9-3.6-4.5h-42.1v-62.5h76.4l6.6-4.5 21.4-41.2c0.1 0 4.2-4.2 4.5-4.5h47.8c0.1-0.1 0.1 45.5 0.1 45.5z' })
					);
					break;
				case 'digg':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.5', width: '500', height: '500', fill: '#005be2' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.5 317.3 500.5 500 312.7 500 112.3 299 121 218.6 160.3 212.6 184 163.7 195.1 173.9 222.8 163.7 261.5 204.8 305.8 204.8 316.8 217.3 388.6 204.8' }),
						React.createElement('path', { 'class': 'st2', d: 'm156.4 204.8h-44.1v94.2h71.7v-135.3h-27.5v41.1zm0 72h-16.6v-49.8h16.6v49.8zm160.4-72v94.2h44.2v15.4h-44.1v22h71.8v-131.6h-71.9zm44.2 72h-16.6v-49.8h16.6v49.8zm-127.2 22.2h44.3v15.4h-44.3v22h71.9v-131.6h-71.9v94.2zm27.6-72h16.6v49.8h-16.6v-49.8zm-66.3-63.3h27.7v27.5h-27.7v-27.5zm0 41.1h27.7v94.2h-27.7v-94.2z' })
					);
					break;
				case 'dribbble':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.5', y: '.2', width: '500', height: '500', fill: '#ea4c89' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.5 301.2 500.5 500.2 301.5 500.2 136.4 334.1 123 297.3 120.3 243.9 129.5 197.9 159 152.6 207.7 124.6 263.7 119.3 346 145.6' }),
						React.createElement('path', { 'class': 'st2', d: 'm250.5 108.5c-78.1 0-141.7 63.6-141.7 141.7s63.6 141.7 141.7 141.7 141.7-63.6 141.7-141.7-63.6-141.7-141.7-141.7zm93.7 65.3c16.9 20.6 27.1 46.8 27.3 75.4-4-0.8-44-9-84.3-3.9-3.3-8-6.4-15.1-10.6-23.8 44.7-18.2 65-44.2 67.6-47.7zm-13.5-14c-2.2 3.1-20.4 27.6-63.4 43.7-19.8-36.4-41.8-66.4-45.2-70.8 38.4-9.3 78.9 0.7 108.6 27.1zm-131.7-19c3.2 4.4 24.8 34.3 44.9 70-56.6 15-106.5 14.8-111.9 14.7 7.9-37.5 33.2-68.7 67-84.7zm-69.5 109.6c0-1.2 0-2.5 0.1-3.7 5.3 0.1 63.9 0.9 124.4-17.2 3.5 6.8 6.8 13.7 9.8 20.5-43.8 12.3-83.5 47.7-103.1 81.3-19.4-21.5-31.2-49.9-31.2-80.9zm46.7 95.4c12.6-25.8 47-59.2 95.7-75.8 17 44.2 24 81.2 25.8 91.8-38.8 16.5-85.6 12-121.5-16zm141.9 4.9c-1.2-7.4-7.7-42.8-23.5-86.3 37.9-6.1 71.2 3.9 75.4 5.2-5.4 33.6-24.7 62.7-51.9 81.1z' })
					);
					break;
				case 'facebook':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.3', y: '.3', width: '500', height: '500', fill: '#3b5998' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.7 292.6 499.7 500.3 331.4 500.3 219.8 388.7 221.6 385.3 223.7 308.6 178.3 264.9 219.7 233.9 249.7 138.6 321.1 113.9' }),
						React.createElement('path', { 'class': 'st2', d: 'M219.8,388.7V264.9h-41.5v-49.2h41.5V177c0-42.1,25.7-65,63.3-65c18,0,33.5,1.4,38,1.9v44H295  c-20.4,0-24.4,9.7-24.4,24v33.9h46.1l-6.3,49.2h-39.8v123.8' })
					);
					break;
				case 'whatsapp':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '-0.9', y: '0.2', 'class': 'st0', width: '500', height: '500', fill: '#25d366' }),
						React.createElement('path', { 'class': 'st1', d: 'M499.1,304.9v195.3H225.9L118.6,393.4l0.1-0.2l13-35.5l11.2-27.7l9.4-2L138,308.2l-5-15l-4-30l-3-18l7-28  l13-26.1l18-25.9l23-20l37-15h76l41.9,17.1l22.6,22.7c0,0,0,0,0,0L499.1,304.9z' }),
						React.createElement('path', { fill: '#25d366', 'class': 'st2', d: 'M325.3,286.7c-0.8-1.5-3.1-2.4-6.5-4.1c-3.4-1.7-20.2-10-23.3-11.1c-3.1-1.2-5.4-1.7-7.7,1.7   c-2.3,3.5-8.8,11.1-10.8,13.4c-2,2.3-4,2.6-7.4,0.9c-20.1-10-33.3-17.9-46.5-40.7c-3.5-6,3.5-5.6,10-18.7c1.1-2.3,0.6-4.3-0.3-6   c-0.9-1.7-7.7-18.5-10.5-25.4c-2.8-6.7-5.6-5.7-7.7-5.9c-2-0.1-4.2-0.1-6.5-0.1c-2.3,0-6,0.9-9.1,4.2c-3.1,3.5-12,11.7-12,28.5   c0,16.8,12.3,33.1,13.9,35.4c1.7,2.3,24.1,36.8,58.4,51.6c21.7,9.4,30.2,10.2,41,8.6c6.6-1,20.2-8.3,23-16.3   C326.2,294.9,326.2,288.1,325.3,286.7z M325.3,286.7c-0.8-1.5-3.1-2.4-6.5-4.1c-3.4-1.7-20.2-10-23.3-11.1   c-3.1-1.2-5.4-1.7-7.7,1.7c-2.3,3.5-8.8,11.1-10.8,13.4c-2,2.3-4,2.6-7.4,0.9c-20.1-10-33.3-17.9-46.5-40.7c-3.5-6,3.5-5.6,10-18.7   c1.1-2.3,0.6-4.3-0.3-6c-0.9-1.7-7.7-18.5-10.5-25.4c-2.8-6.7-5.6-5.7-7.7-5.9c-2-0.1-4.2-0.1-6.5-0.1c-2.3,0-6,0.9-9.1,4.2   c-3.1,3.5-12,11.7-12,28.5c0,16.8,12.3,33.1,13.9,35.4c1.7,2.3,24.1,36.8,58.4,51.6c21.7,9.4,30.2,10.2,41,8.6   c6.6-1,20.2-8.3,23-16.3C326.2,294.9,326.2,288.1,325.3,286.7z M364.6,170C364.6,170,364.6,170,364.6,170   c-3.5-4.5-7.3-8.7-11.3-12.7c-25.8-25.9-60.2-40.1-96.7-40.1c-75.4,0-136.8,61.4-136.8,136.8c0,24.1,6.3,47.6,18.2,68.4l-19.4,70.9   l0.1,0l72.4-19c20,10.9,42.4,16.6,65.4,16.6h0.1c75.3,0,138.1-61.4,138.1-136.8C394.6,223.2,383.5,194,364.6,170z M256.5,367.8   c-20.5,0-40.5-5.5-57.9-15.8l-4.1-2.5l-43,11.3l11.5-41.9l-2.7-4.3c-11.4-18.1-17.4-39-17.4-60.5c0-62.7,51-113.7,113.7-113.7   c30.4,0,58.9,11.8,80.3,33.3s34.6,50,34.6,80.4C371.5,316.7,319.2,367.8,256.5,367.8z M318.9,282.6c-3.4-1.7-20.2-10-23.3-11.1   c-3.1-1.2-5.4-1.7-7.7,1.7c-2.3,3.5-8.8,11.1-10.8,13.4c-2,2.3-4,2.6-7.4,0.9c-20.1-10-33.3-17.9-46.5-40.7c-3.5-6,3.5-5.6,10-18.7   c1.1-2.3,0.6-4.3-0.3-6c-0.9-1.7-7.7-18.5-10.5-25.4c-2.8-6.7-5.6-5.7-7.7-5.9c-2-0.1-4.2-0.1-6.5-0.1c-2.3,0-6,0.9-9.1,4.2   c-3.1,3.5-12,11.7-12,28.5c0,16.8,12.3,33.1,13.9,35.4c1.7,2.3,24.1,36.8,58.4,51.6c21.7,9.4,30.2,10.2,41,8.6   c6.6-1,20.2-8.3,23-16.3c2.8-8,2.8-14.8,2-16.3C324.5,285.1,322.3,284.3,318.9,282.6z' })
					);
					break;
				case 'flickr':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.3', width: '500', height: '500', fill: '#0063dc' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 298.3 500.3 500.3 297.2 500.3 151.4 353.6 185.7 193.3 350.4 148' }),
						React.createElement('path', { 'class': 'st2', d: 'm335.2 142.3h-169.7c-12.8 0-23.1 10.4-23.1 23.1v169.7c0 12.8 10.4 23.1 23.1 23.1h169.7c12.8 0 23.1-10.4 23.1-23.1v-169.6c0.1-12.8-10.3-23.2-23.1-23.2zm-123.2 138.4c-16.9 0-30.6-13.7-30.6-30.6s13.7-30.6 30.6-30.6 30.6 13.7 30.6 30.6-13.7 30.6-30.6 30.6zm76.7 0c-16.9 0-30.6-13.7-30.6-30.6s13.7-30.6 30.6-30.6 30.6 13.7 30.6 30.6-13.7 30.6-30.6 30.6z' })
					);
					break;
				case 'github':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.3', width: '500', height: '500', fill: '#4078c0' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 311.2 500.3 500.3 304.6 500.3 152.3 347.3 138.3 313.5 131 246.6 161.7 162.6 237 145.9 342.1 152.8' }),
						React.createElement('path', { 'class': 'st2', d: 'm205.4 331.2c0 1.1-1.3 2-2.8 2-1.8 0.2-3.1-0.7-3.1-2 0-1.1 1.3-2 2.8-2 1.6-0.2 3.1 0.7 3.1 2zm-17.1-2.5c-0.4 1.1 0.7 2.4 2.4 2.7 1.4 0.5 3.1 0 3.4-1.1s-0.7-2.4-2.4-2.8c-1.4-0.5-3 0.1-3.4 1.2zm24.2-0.9c-1.6 0.4-2.7 1.4-2.5 2.7 0.2 1.1 1.6 1.8 3.2 1.4s2.7-1.4 2.5-2.5c-0.1-1.1-1.6-1.8-3.2-1.6zm36.1-209.9c-76 0-134.1 57.7-134.1 133.6 0 60.7 38.2 112.7 92.8 131 7 1.3 9.5-3.1 9.5-6.6 0-3.4-0.2-22.1-0.2-33.6 0 0-38.3 8.2-46.4-16.3 0 0-6.2-15.9-15.2-20 0 0-12.5-8.6 0.9-8.4 0 0 13.6 1.1 21.1 14.1 12 21.1 32.1 15.1 39.9 11.4 1.3-8.8 4.8-14.8 8.8-18.5-30.6-3.4-61.5-7.8-61.5-60.5 0-15.1 4.2-22.6 12.9-32.3-1.4-3.6-6.1-18.2 1.4-37.2 11.4-3.6 37.8 14.8 37.8 14.8 11-3.1 22.7-4.7 34.4-4.7s23.4 1.6 34.4 4.7c0 0 26.3-18.4 37.8-14.8 7.5 19 2.8 33.6 1.4 37.2 8.8 9.7 14.1 17.3 14.1 32.3 0 52.8-32.3 57.1-62.9 60.5 5 4.3 9.3 12.5 9.3 25.4 0 18.5-0.2 41.3-0.2 45.8 0 3.6 2.5 7.9 9.5 6.6 54.8-18.2 91.9-70.2 91.9-130.9 0.1-75.9-61.5-133.6-137.4-133.6zm-80.9 188.9c-0.7 0.5-0.5 1.8 0.4 2.8 0.9 0.9 2.1 1.3 2.8 0.5 0.7-0.5 0.5-1.8-0.4-2.8-0.8-0.8-2-1.2-2.8-0.5zm-5.9-4.5c-0.4 0.7 0.2 1.6 1.3 2.1 0.9 0.5 2 0.4 2.4-0.4 0.4-0.7-0.2-1.6-1.3-2.1-1.1-0.3-2-0.1-2.4 0.4zm17.8 19.5c-0.9 0.7-0.5 2.4 0.7 3.4 1.3 1.3 2.8 1.4 3.6 0.5 0.7-0.7 0.4-2.4-0.7-3.4-1.3-1.2-2.9-1.3-3.6-0.5zm-6.3-8c-0.9 0.5-0.9 2 0 3.2 0.9 1.3 2.4 1.8 3.1 1.3 0.9-0.7 0.9-2.1 0-3.4-0.8-1.3-2.2-1.8-3.1-1.1z' })
					);
					break;
				case 'google':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.3', width: '500', height: '500', fill: '#4285f4' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 303.7 500.3 500.3 306.6 500.3 142 335.3 136 304.3 136 221.3 172 172.3 257 137.3 344.8 148.5' }),
						React.createElement('path', { 'class': 'st2', d: 'm385.8 253.6c0 78.7-53.9 134.7-133.5 134.7-76.3 0-138-61.6-138-138s61.6-138 138-138c37.2 0 68.4 13.6 92.5 36.1l-37.6 36.1c-49.1-47.4-140.5-11.8-140.5 65.8 0 48.1 38.4 87.1 85.5 87.1 54.6 0 75.1-39.2 78.3-59.5h-78.3v-47.5h131.4c1.3 7.2 2.2 14 2.2 23.2z' })
					);
					break;
				case 'googleplus':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.3', width: '500', height: '500', fill: '#dd4b39' }),
						React.createElement('path', { 'class': 'st1', d: 'm500.3 330.9v169.4h-189.3l-183.8-185.3s-10.2-54.7-6.2-57.7 0-44 0-44l19-26s31-15 38-15 28 4.2 28 4.2h53l63 60.2 39.1 13.7 16.6-41.5 122.6 122z' }),
						React.createElement('path', { 'class': 'st2', d: 'm285.3 233.4c0.9 4.8 1.6 9.7 1.6 15.9 0 54.7-36.7 93.6-92 93.6-52.9 0-95.8-42.9-95.8-95.8s42.9-95.8 95.8-95.8c25.9 0 47.4 9.4 64.2 25.1l-26 25c-7.1-6.8-19.5-14.8-38.2-14.8-32.7 0-59.3 27-59.3 60.5s26.7 60.5 59.3 60.5c37.9 0 52.1-27.3 54.4-41.3h-54.4v-32.9h90.4zm92.4 3.2v-27.8h-27.9v27.8h-27.8v27.9h27.8v27.8h27.9v-27.8h27.8v-27.9h-27.8z' })
					);
					break;
				case 'html5':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.2', y: '-.2', width: '500', height: '500', fill: '#e34f26' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 260.9 500.2 499.8 310.7 499.8 159.7 348.7 159.7 151.3 360.7 120.8' }),
						React.createElement('path', { 'class': 'st2', d: 'm139.6 120.8l20.1 227.9 90.2 30.1 90.7-30.1 20.1-227.9h-221.1zm177.4 73.7h-105.8l2.4 28.4h101.1l-7.8 85.4-56.4 15.5v0.2h-0.6l-56.9-15.6-3.5-43.6h27.5l2 21.9 30.8 8.3 30.9-8.3 3.5-35.8h-96.1l-7.4-83.8h138.8l-2.5 27.4z' })
					);
					break;
				case 'instagram':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.7', y: '-.2', width: '500', height: '500', fill: '#405de6' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.7 300.6 500.7 499.8 302.3 499.8 143 339.3 143 192.3 152.2 165.3 167 151.2 200 143.3 270 138.3 350.5 150' }),
						React.createElement('path', { 'class': 'st2', d: 'm250.7 188.2c-34.1 0-61.6 27.5-61.6 61.6s27.5 61.6 61.6 61.6 61.6-27.5 61.6-61.6-27.5-61.6-61.6-61.6zm0 101.6c-22 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm78.5-104.1c0 8-6.4 14.4-14.4 14.4s-14.4-6.4-14.4-14.4c0-7.9 6.4-14.4 14.4-14.4 7.9 0.1 14.4 6.5 14.4 14.4zm40.7 14.6c-0.9-19.2-5.3-36.3-19.4-50.3-14-14-31.1-18.4-50.3-19.4-19.8-1.1-79.2-1.1-99.1 0-19.2 0.9-36.2 5.3-50.3 19.3s-18.4 31.1-19.4 50.3c-1.1 19.8-1.1 79.2 0 99.1 0.9 19.2 5.3 36.3 19.4 50.3s31.1 18.4 50.3 19.4c19.8 1.1 79.2 1.1 99.1 0 19.2-0.9 36.3-5.3 50.3-19.4 14-14 18.4-31.1 19.4-50.3 1.2-19.8 1.2-79.2 0-99zm-25.6 120.3c-4.2 10.5-12.3 18.6-22.8 22.8-15.8 6.3-53.3 4.8-70.8 4.8s-55 1.4-70.8-4.8c-10.5-4.2-18.6-12.3-22.8-22.8-6.3-15.8-4.8-53.3-4.8-70.8s-1.4-55 4.8-70.8c4.2-10.5 12.3-18.6 22.8-22.8 15.8-6.3 53.3-4.8 70.8-4.8s55-1.4 70.8 4.8c10.5 4.2 18.6 12.3 22.8 22.8 6.3 15.8 4.8 53.3 4.8 70.8s1.5 55-4.8 70.8z' })
					);
					break;
				case 'linkedin':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.6', width: '500', height: '500', fill: '#0077b5' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 374.1 500.3 500.6 278.2 500.6 141.1 363.6 176.3 220.6 144.3 183 182.4 144.4 250.3 212.7 262.2 212.7 271.7 222 342.2 218.1' }),
						React.createElement('path', { 'class': 'st2', d: 'm187.9 363.6h-46.9v-150.9h46.9v150.9zm-23.4-171.5c-15 0-27.1-12.4-27.1-27.4s12.2-27.1 27.1-27.1c15 0 27.1 12.2 27.1 27.1 0 15-12.1 27.4-27.1 27.4zm198.8 171.5h-46.8v-73.4c0-17.5-0.4-39.9-24.4-39.9-24.4 0-28.1 19-28.1 38.7v74.7h-46.8v-151h44.9v20.6h0.7c6.3-11.9 21.5-24.4 44.3-24.4 47.4 0 56.1 31.2 56.1 71.8l0.1 82.9z' })
					);
					break;
				case 'pinterest':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.6', width: '500', height: '500', fill: '#bd081c' }),
						React.createElement('path', { 'class': 'st1', d: 'm500.3 310.4v190.2h-227.8l-87.7-88.2 17.2-85.2-43-45s-9-64-7-70 21-49 21-49 40-30 44-30 115.7 9.1 115.7 9.1l167.6 168.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'm257.5 115.4c-61.4 0-122.1 40.9-122.1 107.2 0 42.1 23.7 66.1 38.1 66.1 5.9 0 9.3-16.5 9.3-21.2 0-5.6-14.2-17.4-14.2-40.6 0-48.1 36.6-82.3 84-82.3 40.8 0 70.9 23.2 70.9 65.7 0 31.8-12.8 91.4-54.1 91.4-14.9 0-27.7-10.8-27.7-26.2 0-22.6 15.8-44.5 15.8-67.9 0-39.6-56.2-32.4-56.2 15.4 0 10.1 1.3 21.2 5.7 30.4-8.3 35.6-25.1 88.5-25.1 125.2 0 11.3 1.6 22.4 2.7 33.8 2 2.3 1 2 4.1 0.9 30.2-41.3 29.1-49.4 42.7-103.4 7.4 14 26.4 21.6 41.5 21.6 63.6 0 92.1-62 92.1-117.8 0.2-59.5-51.1-98.3-107.5-98.3z' })
					);
					break;
				case 'reddit':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.6', width: '500', height: '500', fill: '#ff4500' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 241.3 500.3 500.6 306.5 500.6 144.2 338.1 139.3 255.9 243 207.6 268.7 107.6 339 123.3 371.3 110.8' }),
						React.createElement('path', { 'class': 'st2', d: 'm363.9 206.9c-9.3 0-17.4 3.8-23.4 9.8-22.1-15.3-51.8-25.1-84.7-26.1l17.1-77.1 54.5 12.2c0 13.3 10.9 24.2 24.2 24.2 13.6 0 24.5-11.2 24.5-24.5s-10.9-24.5-24.5-24.5c-9.5 0-17.7 5.7-21.8 13.6l-60.2-13.3c-3-0.8-6 1.4-6.8 4.4l-18.8 85c-32.7 1.4-62.1 11.2-84.2 26.4-6-6.2-14.5-10.1-23.7-10.1-34.4 0-45.6 46.1-14.1 61.8-1.1 4.9-1.6 10.1-1.6 15.3 0 51.8 58.3 93.7 129.9 93.7 71.9 0 130.2-42 130.2-93.7 0-5.2-0.6-10.6-1.9-15.5 30.8-15.8 19.4-61.6-14.7-61.6zm-192.1 65.1c0-13.6 10.9-24.5 24.5-24.5 13.3 0 24.2 10.9 24.2 24.5 0 13.3-10.9 24.2-24.2 24.2-13.6 0.1-24.5-10.8-24.5-24.2zm132.4 57.8c-22.5 22.5-85.9 22.5-108.4 0-2.5-2.2-2.5-6 0-8.5 2.2-2.2 6-2.2 8.2 0 17.2 17.6 74.1 17.9 92.1 0 2.2-2.2 6-2.2 8.2 0 2.4 2.5 2.4 6.3-0.1 8.5zm-0.5-33.5c-13.3 0-24.2-10.9-24.2-24.2 0-13.6 10.9-24.5 24.2-24.5 13.6 0 24.5 10.9 24.5 24.5 0 13.3-10.9 24.2-24.5 24.2z' })
					);
					break;
				case 'rss':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.5', y: '1', width: '500', height: '500', fill: '#f26522' }),
						React.createElement(
							'g',
							null,
							React.createElement('polygon', { 'class': 'st1', points: '384.1 501 291.8 501 143.8 353.2 188 305.9' }),
							React.createElement('polygon', { 'class': 'st1', points: '500.5 404.9 500.5 501 391.1 501 144 251.1 185 228.6 136.4 169.5 288 194.2' })
						),
						React.createElement('path', { 'class': 'st2', d: 'm201.6 332.5c0 18-14.6 32.6-32.6 32.6s-32.6-14.6-32.6-32.6 14.6-32.6 32.6-32.6 32.6 14.6 32.6 32.6zm89.6 24.1c-4.3-78.8-67.4-142-146.2-146.2-4.7-0.3-8.6 3.5-8.6 8.2v24.4c0 4.3 3.3 7.9 7.6 8.2 57 3.7 102.7 49.3 106.4 106.4 0.3 4.3 3.9 7.6 8.2 7.6h24.4c4.7-0.1 8.4-4 8.2-8.6zm73.5 0.1c-4.3-119.2-100.1-215.6-219.9-219.9-4.6-0.2-8.4 3.6-8.4 8.2v24.5c0 4.4 3.5 8 7.9 8.2 97.4 4 175.6 82.2 179.6 179.6 0.2 4.4 3.8 7.9 8.2 7.9h24.5c4.5-0.1 8.2-3.9 8.1-8.5z' })
					);
					break;
				case 'sharethis':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.2', y: '.1', width: '500', height: '500', fill: '#95D03A' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 288.7 500.2 500.1 368.9 500.1 150.9 282.7 345.8 133.8' }),
						React.createElement('path', { 'class': 'st2', d: 'm314.3 282.1c-11.3 0-21.7 3.9-29.9 10.5l-51.3-32.1c1.5-6.9 1.5-14 0-20.9l51.3-32.1c8.2 6.5 18.6 10.5 29.9 10.5 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48c0 3.6 0.4 7.1 1.1 10.4l-51.3 32.1c-8.2-6.5-18.6-10.5-29.9-10.5-26.5 0-48 21.5-48 48s21.5 48 48 48c11.3 0 21.7-3.9 29.9-10.5l51.3 32.1c-0.8 3.4-1.1 6.9-1.1 10.4 0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.4-21.5-47.9-48-47.9z' })
					);
					break;
				case 'skype':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.1', y: '.6', width: '500', height: '500', fill: '#00aff0' }),
						React.createElement('path', { 'class': 'st1', d: 'm500.1 340.1v160.6h-160.4l-170.2-170.9s-11.5-120.5-11.5-123.5 38-43 38-43h125.8l178.3 176.8z' }),
						React.createElement('path', { 'class': 'st2', d: 'm360.5 274.7c1.6-7.7 2.6-15.9 2.6-24.1 0-62.4-50.5-112.9-112.9-112.9-8.2 0-16.3 0.9-24.1 2.6-10.4-8.1-23.4-12.9-37.6-12.9-34 0-61.6 27.6-61.6 61.6 0 14.1 4.8 27.1 12.8 37.5-1.6 7.7-2.6 15.9-2.6 24.1 0 62.4 50.5 112.9 112.9 112.9 8.2 0 16.3-0.9 24.1-2.6 10.4 8 23.4 12.8 37.5 12.8 34 0 61.6-27.6 61.6-61.6 0.1-14-4.7-27-12.7-37.4zm-107 50.4c-36.1 0-66.3-16.1-66.3-35.7 0-8.8 4.9-16.8 16.2-16.8 17.2 0 18.8 24.7 48.5 24.7 14.1 0 23.3-6.3 23.3-14.5 0-10.3-8.8-11.9-23.1-15.4-34.4-8.5-64.8-12.1-64.8-48 0-32.6 32.2-44.6 60-44.6 30.3 0 60.9 12 60.9 30.5 0 9.3-6.3 17.5-16.7 17.5-15.6 0-16.1-18.4-41.2-18.4-14.1 0-23.1 3.8-23.1 12.4 0 10.9 11.4 12 38 18.1 22.8 5.1 49.9 14.7 49.9 42.7 0 32.4-31.4 47.5-61.6 47.5z' })
					);
					break;
				case 'soundcloud':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '1', y: '.6', width: '500', height: '500', fill: '#ff8800' }),
						React.createElement('polygon', { 'class': 'st1', points: '501 350 501 500.6 285.6 500.6 90 303.4 90 264.5 99.2 273.4 103.6 254.6 112.9 262.8 116.4 248 126.1 257.5 129.2 246.6 140.2 257.8 142.9 249.2 151.5 257.7 156.2 227.9 164.6 237.3 169.2 215.2 178.8 225.4 183.9 210 192 219 198.4 209.4 205 214.8 211.2 208.7 218.5 216.3 225.1 210.9 232.5 219 238.7 197.1 246.5 203.8 252.4 189.2 258.4 195.3 338.7 199.9 379.3 241.2 404.9 254' }),
						React.createElement('path', { 'class': 'st2', d: 'm143.7 250.7l3 33.4-3 35.1c-0.2 1.3-1.1 2.3-2.3 2.3s-2.2-1-2.2-2.3l-2.9-35.1 2.9-33.4c0-1.1 1-2.2 2.2-2.2 1.1 0 2.1 1.1 2.3 2.2zm11-23.5c-1.4 0-2.4 1.1-2.6 2.6l-2.6 54.3 2.6 35.1c0.2 1.4 1.1 2.6 2.6 2.6 1.3 0 2.4-1.1 2.4-2.6l3-35.1-3-54.3c0-1.4-1.1-2.6-2.4-2.6zm13.1-12.4c-1.6 0-2.7 1.1-2.9 2.7l-2.3 66.9 2.3 34.9c0.2 1.6 1.3 2.7 2.9 2.7 1.4 0 2.7-1.1 2.7-2.7l2.7-34.9-2.7-66.9c0-1.5-1.3-2.7-2.7-2.7zm-77.8 49.7c-0.7 0-1.1 0.6-1.3 1.3l-2.4 18.3 2.4 18c0.2 0.7 0.6 1.3 1.3 1.3s1.1-0.6 1.3-1.3l2.9-18-2.9-18.3c-0.1-0.7-0.5-1.3-1.3-1.3zm12.2-11.2c-0.7 0-1.3 0.6-1.3 1.3l-3.3 29.6 3.3 28.9c0 0.9 0.6 1.4 1.3 1.4s1.3-0.6 1.4-1.3l3.7-29-3.7-29.6c-0.1-0.8-0.7-1.3-1.4-1.3zm13-5.9c-0.9 0-1.6 0.7-1.7 1.7l-3 35 3 33.9c0.2 0.9 0.9 1.6 1.7 1.6 0.9 0 1.6-0.7 1.6-1.6l3.6-33.9-3.6-35c0-1-0.7-1.7-1.6-1.7zm13-1.1c-1 0-1.9 0.7-1.9 1.9l-3 36 3 34.9c0 1.1 0.9 1.9 1.9 1.9s1.9-0.7 2-1.9l3.3-34.9-3.3-36c-0.1-1.2-1-1.9-2-1.9zm124.2-57.1c-0.6-0.4-1.4-0.7-2.2-0.7-1.1 0-2.2 0.4-2.9 1-1 0.9-1.6 2.2-1.7 3.4v0.4l-1.7 90.9 0.9 16.7 0.9 16.3c0.2 2.4 2.2 4.4 4.6 4.4s4.4-2 4.4-4.4l2-33-2-91.3c-0.2-1.5-1-3-2.3-3.7zm-13.7 7.9c-0.7-0.4-1.4-0.7-2.3-0.7-0.8 0-1.6 0.3-2.3 0.7-1.1 0.7-1.9 2-1.9 3.4l-0.2 0.9-1.4 82.7s0 0.2 1.6 33.8v0.2c0 0.9 0.3 1.7 0.9 2.4 0.9 1 2 1.6 3.3 1.6 1.1 0 2.2-0.6 2.9-1.3 0.9-0.7 1.3-1.7 1.3-2.9l0.2-3.4 1.6-30.2-1.7-83.8c-0.1-1.4-0.9-2.7-2-3.4zm-57.3 11.6c-1.6 0-3 1.4-3 3.1l-2.3 72.3 2.3 34.6c0.2 1.7 1.4 3 3 3 1.7 0 3-1.3 3.1-3l2.6-34.6-2.6-72.3c-0.1-1.7-1.4-3.1-3.1-3.1zm193.8 32.3c-5.6 0-10.9 1.1-15.7 3.1-3.3-36.4-33.9-65-71.2-65-9.2 0-18 1.7-25.9 4.8-3.1 1.1-4 2.3-4 4.7v128.5c0 2.6 2 4.4 4.4 4.7h112.3c22.3 0 40.4-18 40.4-40.3 0.1-22.4-18-40.5-40.3-40.5zm-152.7-31c-2.2 0-3.9 1.7-4 4l-1.7 70.3 1.7 33.8c0.2 2.2 1.9 3.9 4 3.9s3.9-1.7 3.9-3.9l2-33.8-2-70.3c-0.2-2.3-1.7-4-3.9-4zm-27.5-4.1c-1.7 0-3.3 1.6-3.3 3.4l-2 74.8 2 34.4c0.2 1.9 1.6 3.3 3.3 3.3 1.9 0 3.3-1.4 3.4-3.3l2.3-34.4-2.3-74.8c-0.1-1.8-1.6-3.4-3.4-3.4zm13.7 1.8c-2 0-3.6 1.6-3.6 3.6l-2 72.9 2 34.2c0.2 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6l2.2-34.2-2.2-72.9c0-2.1-1.6-3.6-3.6-3.6z' })
					);
					break;
				case 'spotify':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.1', y: '.1', width: '500', height: '500', fill: '#1db954' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.9 302.3 499.9 500.1 302.2 500.1 147.9 344.4 131 214.3 153.9 174.3 344.6 148.5' }),
						React.createElement('path', { 'class': 'st2', d: 'm249.9 111.2c-76.7 0-138.9 62.2-138.9 138.9s62.3 138.9 138.9 138.9 138.9-62.2 138.9-138.9-62.2-138.9-138.9-138.9zm56.4 204.4c-2.4 0-3.8-0.7-6-2-34.9-21.1-75.6-22-115.8-13.7-2.2 0.6-5 1.5-6.7 1.5-5.4 0-8.8-4.3-8.8-8.8 0-5.8 3.4-8.5 7.6-9.4 45.9-10.1 92.7-9.2 132.7 14.7 3.4 2.2 5.4 4.1 5.4 9.2 0.1 5-3.8 8.5-8.4 8.5zm15.1-36.7c-2.9 0-4.9-1.3-6.9-2.4-35-20.7-87.2-29.1-133.6-16.5-2.7 0.7-4.1 1.5-6.7 1.5-6 0-10.9-4.9-10.9-10.9s2.9-10 8.7-11.6c15.6-4.4 31.5-7.6 54.8-7.6 36.3 0 71.5 9 99.1 25.5 4.5 2.7 6.3 6.2 6.3 11 0 6.1-4.7 11-10.8 11zm17.4-42.7c-2.9 0-4.7-0.7-7.2-2.2-39.9-23.8-111.2-29.5-157.3-16.6-2 0.6-4.5 1.5-7.2 1.5-7.4 0-13-5.8-13-13.2 0-7.6 4.7-11.9 9.7-13.4 19.7-5.8 41.8-8.5 65.8-8.5 40.9 0 83.7 8.5 115 26.8 4.4 2.5 7.2 6 7.2 12.7-0.1 7.4-6.2 12.9-13 12.9z' })
					);
					break;
				case 'stackoverflow':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.8', width: '500', height: '500', fill: '#f48024' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 393.3 500.3 500.8 253.4 500.8 137.2 384.7 148.5 304.3 161.1 289 184.9 313 220 318.3 187.5 282.5 262 283 202.8 226.6 314 255.3 232.8 173.4 339.8 231.7' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.3 324.7 500.3 383.6 344.4 227.1 292.2 116.9' }),
						React.createElement('path', { 'class': 'st2', d: 'm311.1 277.1l-108.3-50.5 10-21.8 108.4 50.6-10.1 21.7zm28.7-45.4l-91.7-76.7-15.2 18.4 91.7 76.7 15.2-18.4zm23.7-19l-71.3-95.8-19.1 14.3 71.3 95.8 19.1-14.3zm-54.2 71l-117-24.7-4.9 23.5 117 24.5 4.9-23.3zm18.9 77.1h-167.1v-71.8h-23.9v95.6h214.9v-95.6h-23.9v71.8zm-23.8-47.8h-119.5v23.7h119.5v-23.7z' })
					);
					break;
				case 'steam':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.2', y: '-.1', width: '500', height: '500', fill: '#00adee' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 266.9 500.2 499.9 283.2 499.9 100.6 318 157.6 283.9 186.3 273.3 210.3 273.9 229 248.5 263 226.6 259 201.9 267 173.9 283.2 146.7 318.3 135.3 371.4 138.6' }),
						React.createElement('path', { 'class': 'st2', d: 'm364.6 197.5c0 22.6-18.4 40.7-40.7 40.7-22.6 0-40.7-18.2-40.7-40.7s18.2-40.7 40.7-40.7c22.4-0.1 40.7 18.1 40.7 40.7zm35.1 0.1c0 42.1-34 76-75.9 76l-73 53.3c-2.7 28.7-27 51.3-56.4 51.3-27 0-49.9-19.2-55.4-44.7l-38.4-15.5v-71.6l64.9 26.2c10.1-6.1 21.5-8.9 34.7-7.7l47.4-67.9c0.3-41.6 34.4-75.3 76.1-75.3 41.9 0 76 34 76 75.9zm-163.6 123.7c0-23.2-18.6-41.7-41.7-41.7-3 0-6 0.3-9 1l17.4 7c17 6.8 25.4 26 18.5 43.1-6.8 17-26.2 25.4-43.2 18.4-6.8-2.7-13.7-5.5-20.5-8.1 7 13.2 20.8 22.2 36.8 22.2 23.2-0.2 41.7-18.7 41.7-41.9zm138.5-123.7c0-28-22.9-50.9-50.9-50.9-28.2 0-51.1 22.8-51.1 50.9 0 28.2 22.9 50.9 51.1 50.9 28 0 50.9-22.7 50.9-50.9z' })
					);
					break;
				case 'stumbleUpon':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.5', y: '.4', width: '500', height: '500', fill: '#eb4924' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.5 355.2 500.5 500.4 272.1 500.4 115 343.3 119.7 284.6 150.4 256.4 189 295.9 208.3 299.9 208.3 183.3 294.5 150.1' }),
						React.createElement('path', { 'class': 'st2', d: 'm402.7 256.4v42.2c0 37.6-30.4 68-68 68-37.4 0-68-30.1-68-67.4v-42.5l20.8 9.7 30.9-9.2v42.8c0 8.9 7.3 16 16.2 16s16.2-7.1 16.2-16v-43.6h51.9zm-136-35.2l20.8 9.7 30.9-9.2v-21.5c0-36.6-30.9-66-67.8-66-36.8 0-67.8 29.2-67.8 65.5v98.3c0 9-7.3 16.2-16.2 16.2s-16.2-7.1-16.2-16.2v-41.5h-52v42.2c0 37.5 30.4 68 68 68 37.3 0 68-30 68-67.1v-97c0-8.9 7.3-16.2 16.2-16.2s16.2 7.3 16.2 16.2v18.6h-0.1z' })
					);
					break;
                case 'telegram':
                    return React.createElement(
                        'svg',
                        { version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('rect', { 'class': 'st0', x: '.5', y: '.2', width: '500', height: '500', fill: '#1da1f2' }),
                        React.createElement('polygon', { 'class': 'st1', points: '499.1,249.6 499.1,500.2 298.1,500.2 106.9,258.9 104,255.2 392.5,146.2 392.5,146.2 ' }),
                        React.createElement('path', { 'class': 'st2', d: 'M393.8,162.6l-43.9,207.1c-3.3,14.6-12,18.3-24.2,11.4l-66.9-49.3l-32.3,31.1c-3.6,3.6-6.6,6.6-13.5,6.6 l4.8-68.2l124-112.1c5.4-4.8-1.2-7.5-8.4-2.7l-153.3,96.6l-66-20.7c-14.4-4.5-14.6-14.4,3-21.2l258.2-99.5 C387.2,137.2,397.7,144.4,393.8,162.6z' })
                    );
                    break;
				case 'tumblr':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.5', y: '.4', width: '500', height: '500', fill: '#35465c' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.5 342.9 500.5 500.4 351.4 500.4 222 369.3 210 272.3 173.4 234.9 272.5 116.9' }),
						React.createElement('path', { 'class': 'st2', d: 'm331.8 372.1c-7.4 7.9-27.1 17.2-52.9 17.2-65.6 0-79.8-48.2-79.8-76.3v-78.2h-25.8c-3 0-5.4-2.4-5.4-5.4v-36.9c0-3.9 2.4-7.4 6.1-8.7 33.7-11.8 44.2-41.3 45.8-63.6 0.4-6 3.5-8.8 8.7-8.8h38.5c3 0 5.4 2.4 5.4 5.4v62.5h45c3 0 5.4 2.4 5.4 5.4v44.3c0 3-2.4 5.4-5.4 5.4h-45.3v72.3c0 18.6 12.9 29.1 36.9 19.4 2.6-1 4.9-1.7 6.9-1.2 1.9 0.5 3.1 1.8 4 4.3l11.9 34.9c1.2 2.9 2 5.9 0 8z' })
					);
					break;
				case 'twitter':
                    return React.createElement(
                        'svg',
                        { version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('rect', { 'class': 'st0', x: '-0.9', y: '0.2', width: '500', height: '500', fill: '#0088cc' }),
                        React.createElement('polygon', { 'class': 'st1', points: '500.5 342.9 500.5 500.4 351.4 500.4 222 369.3 210 272.3 173.4 234.9 272.5 116.9' }),
                        React.createElement('path', { 'class': 'st2', d: 'm331.8 372.1c-7.4 7.9-27.1 17.2-52.9 17.2-65.6 0-79.8-48.2-79.8-76.3v-78.2h-25.8c-3 0-5.4-2.4-5.4-5.4v-36.9c0-3.9 2.4-7.4 6.1-8.7 33.7-11.8 44.2-41.3 45.8-63.6 0.4-6 3.5-8.8 8.7-8.8h38.5c3 0 5.4 2.4 5.4 5.4v62.5h45c3 0 5.4 2.4 5.4 5.4v44.3c0 3-2.4 5.4-5.4 5.4h-45.3v72.3c0 18.6 12.9 29.1 36.9 19.4 2.6-1 4.9-1.7 6.9-1.2 1.9 0.5 3.1 1.8 4 4.3l11.9 34.9c1.2 2.9 2 5.9 0 8z' })
                    );

					break;
				case 'vimeo':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.6', y: '.2', width: '500', height: '500', fill: '#1ab7ea' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.4 270.6 499.4 500.2 356.4 500.2 218.5 361.7 196 283.3 125.7 212.2 214.5 140.8 269.4 196.2 378.8 148.9' }),
						React.createElement('path', { 'class': 'st2', d: 'm385.9 186.7c-1.2 26.6-19.8 63-55.7 109.2-37.1 48.3-68.5 72.4-94.2 72.4-15.9 0-29.4-14.7-40.4-44.1-21.5-78.8-30.6-124.9-48.3-124.9-2.1 0-9.2 4.3-21.5 12.9l-12.8-16.6c31.5-27.6 61.5-58.3 80.3-60 21.3-2.1 34.3 12.5 39.3 43.6 17.5 110.6 25.2 127.4 57.1 77.2 11.4-18 17.6-31.8 18.4-41.2 2.9-28-21.8-26.1-38.6-18.9 13.4-44 39.1-65.3 76.9-64.1 27.8 0.7 41 18.9 39.5 54.5z' })
					);
					break;
				case 'windows':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.6', y: '.6', width: '500', height: '500', fill: '#0078d7' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.6 239.2 500.6 500.6 277.6 500.6 120.5 344.9 141 273.3 120.5 244.6 227.2 141.6 238.9 153.3 380.8 120.4' }),
						React.createElement('path', { 'class': 'st2', d: 'm120.5 156.3l106.7-14.7v103.1h-106.7v-88.4zm0 188.6l106.7 14.7v-101.8h-106.7v87.1zm118.4 16.2l141.9 19.6v-122.9h-141.9v103.3zm0-221.1v104.6h141.9v-124.2l-141.9 19.6z' })
					);
					break;
				case 'wordpress':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.3', y: '.6', width: '500', height: '500', fill: '#21759b' }),
						React.createElement('path', { 'class': 'st1', d: 'm500.3 307.1v193.5h-195c-73.3-74.3-159.6-161.6-161.3-163.3l-0.7-7.3-17.5-29.2-7-28.5-1.2-21.9 2.4-34.7 12.3-27 18.3-27.7 21-19.3 25-13.3 31.5-9 34.8-1.8 42.5 10.5 39.4 24.4 155.5 154.6z' }),
						React.createElement('path', { 'class': 'st2', d: 'm143.3 202.9l55.9 153c-39.1-18.9-66-59-66-105.3 0-17 3.6-33.1 10.1-47.7zm186 41.8c0-14.5-5.2-24.5-9.6-32.3-5.9-9.6-11.5-17.8-11.5-27.5 0-10.8 8.1-20.8 19.6-20.8 0.5 0 1 0.1 1.5 0.1-20.9-19.1-48.6-30.8-79.1-30.8-40.9 0-76.9 21-97.9 52.8 2.8 0.1 5.3 0.2 7.5 0.2 12.2 0 31.2-1.5 31.2-1.5 6.3-0.4 7 8.9 0.8 9.6 0 0-6.3 0.7-13.4 1.1l42.7 126.8 25.6-76.8-18.2-50c-6.3-0.4-12.3-1.1-12.3-1.1-6.3-0.4-5.6-10 0.7-9.6 0 0 19.3 1.5 30.8 1.5 12.2 0 31.2-1.5 31.2-1.5 6.3-0.4 7 8.9 0.8 9.6 0 0-6.3 0.7-13.4 1.1l42.3 125.9 11.7-39c5.2-16.2 9-27.8 9-37.8zm-77 16.1l-35.1 102.1c10.5 3.1 21.6 4.8 33.1 4.8 13.6 0 26.7-2.4 38.9-6.7-0.3-0.5-0.6-1-0.8-1.6l-36.1-98.6zm100.7-66.4c0.5 3.7 0.8 7.7 0.8 12.1 0 11.9-2.2 25.2-8.9 41.9l-35.8 103.4c34.8-20.3 58.2-58 58.2-101.2 0-20.4-5.1-39.5-14.3-56.2zm33.8 56.2c0 75.3-61.3 136.5-136.5 136.5-75.3 0-136.5-61.3-136.5-136.5 0-75.3 61.2-136.5 136.5-136.5 75.2 0 136.5 61.2 136.5 136.5zm-6.3 0c0-71.8-58.4-130.2-130.2-130.2s-130.2 58.4-130.2 130.2 58.4 130.2 130.2 130.2 130.2-58.4 130.2-130.2z' })
					);
					break;
				case 'yahoo':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.2', y: '-.3', width: '500', height: '500', fill: '#410093' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.8 247.8 499.8 499.7 342.1 499.7 231.8 390.5 245 316.3 240 243.3 175.3 139.3 175.3 108.9 269.1 201.3 361.2 108.9' }),
						React.createElement('path', { 'class': 'st2', d: 'm265.2 269.5l2.2 121c-7-1.2-12.9-2.1-17.8-2.1-4.6 0-10.6 0.9-17.8 2.1l2.2-121c-30.3-52.2-60.7-108.3-95.7-160.6 6.5 1.7 12.7 2.1 18.3 2.1 5 0 11.2-0.4 18.8-2.1 22.5 39.7 45.2 76.3 74.3 124.1 20.5-33.9 50.1-79.3 74.2-124.1 6.1 1.6 12.1 2.1 18.1 2.1 6.3 0 12.8-0.6 19.3-2.1-19 26.3-72.5 119.3-96.1 160.6z' })
					);
					break;
				case 'youtube':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.4', y: '-.3', width: '500', height: '500', fill: '#ff0000' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.4 311.3 500.4 499.7 311.8 499.7 139.5 326.7 205 196.6 360.9 172.5' }),
						React.createElement('path', { 'class': 'st2', d: 'm371.3 188.8c-2.9-10.9-11.4-19.5-22.3-22.4-19.7-5.3-98.6-5.3-98.6-5.3s-78.9 0-98.6 5.3c-10.9 2.9-19.4 11.5-22.3 22.4-5.3 19.8-5.3 61.1-5.3 61.1s0 41.3 5.3 61.1c2.9 10.9 11.4 19.2 22.3 22.1 19.7 5.3 98.6 5.3 98.6 5.3s78.9 0 98.6-5.3c10.9-2.9 19.4-11.2 22.3-22.1 5.3-19.8 5.3-61.1 5.3-61.1s0-41.3-5.3-61.1zm-146.7 98.6v-75l65.9 37.5-65.9 37.5z' })
					);
					break;
				case 'xing':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.3', y: '-.1', width: '500', height: '500', fill: '#026466' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.7 220.8 499.7 499.9 311.6 499.9 119.7 307.9 190.3 249.9 181.7 187.3 193.9 159.4 253.1 218.2 287 221.9 374 96.9' }),
						React.createElement('path', { 'class': 'st2', d: 'm229.6 218.4c-1.2 2.3-17.2 30.3-47.9 84.3-3.3 5.7-7.4 8.5-12.1 8.5h-44.5c-5.3 0-8.3-5.1-5.8-9.8l47.1-82.8c0.1 0 0.1-0.1 0-0.2l-30-51.6c-2.9-5.3 0.2-9.6 5.8-9.6h44.5c5 0 9.1 2.8 12.3 8.3l30.6 52.9zm150.2-111.9l-98.3 172.8v0.2l62.5 113.7c2.7 4.8 0.1 9.6-5.8 9.6h-44.5c-5.2 0-9.3-2.7-12.3-8.3l-63.1-115.1c2.3-4 35.2-62 98.9-174.3 3.1-5.5 7.1-8.3 11.9-8.3h44.9c5.4 0.1 8.4 4.7 5.8 9.7z' })
					);
					break;
				case 'mixcloud':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', fill: '#52aad8', x: '-.5', y: '-.1', width: '500', height: '500' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.5 316v183.8h-214l-182.4-183.4-2.1-9.2s-8-46.4-8-47.9 10.1-15 10.1-15l14.4-16.5 22-14.5 8.5-10.5 18-25s16.5-8.5 18-8.5 33.5-9 33.5-9l53.7 9.2 76.8 75.8 18.6-12.5 31.6 31.9 0.5-50.1 100.8 101.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'm304.8 230.7c-4.4-45-42.5-80.3-88.7-80.3-38.3 0-72.1 24.6-84.3 60.4-28.9 4.3-51.2 29-51.2 59.1 0 33 26.8 59.8 59.9 59.8h153.3c27.7 0 50.3-22.4 50.3-50.1 0.1-24-16.9-44.1-39.3-48.9zm-10.9 76.5h-153.3c-20.7 0-37.5-16.7-37.5-37.4s16.9-37.4 37.5-37.4c10 0 19.3 4 26.4 11 10.6 10.6 26.5-5.4 16-16-7.8-7.6-17.3-12.9-27.6-15.5 10.6-23.5 34.3-39.1 60.7-39.1 36.8 0 66.7 29.9 66.7 66.5 0 7.2-1.2 14.2-3.4 21-4.7 14.6 17 20.6 21.3 7 1.5-4.4 2.6-8.9 3.4-13.5 10.3 4 17.7 13.9 17.7 25.6 0 15.3-12.5 27.8-27.9 27.8zm124.5-27.7c0 23.3-6.7 45.7-19.6 64.9-2.2 3.2-5.7 5-9.4 5-8.6 0-14.4-10-9.2-17.4 10.3-15.5 15.8-33.7 15.8-52.5s-5.6-36.9-15.8-52.3c-8.3-12.1 10.2-25 18.6-12.5 12.8 19 19.6 41.5 19.6 64.8zm-37.6 0c0 16.7-4.8 32.8-14.2 46.8-2.2 3.2-5.7 4.8-9.4 4.8-9.1 0-14.3-10-9.2-17.4 6.9-10.1 10.4-21.8 10.4-34.2 0-12.2-3.5-24-10.4-34.2-8.3-12.2 10.1-24.9 18.6-12.5 9.4 13.8 14.2 30 14.2 46.7z' })
					);
					break;
				case 'goodreads':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.2', y: '.4', width: '500', height: '500', fill: '#553b08' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.8 288.4v212h-173.8l-138.2-138.1 38.5 9 53.3 2-84-85.1-7.8-12.9s-3.5-20-4.2-24.9-7.3-15.8-7.3-26.5 2.7-34 2.7-34l8.8-28 16.5-17.3s14-10 16.7-8.8 24.7-8.5 28.7-8.5 35.3 9.3 37.3 8.5 24.6 32.1 24.6 32.1l23-45.7 165.2 166.2z' }),
						React.createElement('path', { 'class': 'st2', d: 'm171.8 327.3h1.5c6.6 0 13.3 0 19.9 0.1 0.8 0 1.6-0.2 1.9 1.1 3.7 18.2 15.7 28.5 32.8 33.4 14 4 28.2 4.1 42.4 0.9 17.6-3.9 29.2-14.8 35.5-31.5 4.2-11.2 5.6-22.9 5.7-34.7 0.1-3 0.2-24.5-0.1-27.6l-0.5-0.2c-0.4 0.8-0.9 1.5-1.3 2.3-11.5 22.5-32 35.2-55 36.1-53.8 2.1-88.4-29.8-89.8-92-0.3-12.4 0.9-24.5 4.3-36.4 10.8-37.1 38.9-61.7 80.3-62 32-0.2 53 20.2 60.7 36.7 0.3 0.6 0.7 1.2 1.3 1v-32.2h23.1c0 146.3 0.1 173.4 0.1 173.4-0.1 41-13.9 75-53.8 84.7-36.3 8.8-83 2.5-102.3-29.9-4.1-7-6.1-14.7-6.7-23.2zm76.3-191.5c-27.4-0.3-56.6 21.2-60 69.9-2.1 30.8 7.7 63.8 37.3 77.6 14.4 6.7 38.8 7.8 56.5-4.5 24.9-17.3 32.7-50.6 28.6-80.4-5-37.2-24.9-62.7-62.4-62.6z' })
					);
					break;
				case 'twitch':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.2', y: '.4', width: '500', height: '500', fill: '#6441a5' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.8 247.3 499.8 500.4 283 500.4 135.5 351.6 162 142.3 324 138.3 380.2 128' }),
						React.createElement('path', { 'class': 'st2', d: 'm152.7 128l-17.2 44v179.7h61.2v32.5h34.4l32.5-32.5h49.7l66.9-66.9v-156.8h-227.5zm204.6 145.3l-38.3 38.2h-61.2l-32.4 32.5v-32.5h-51.6v-160.6h183.5v122.4zm-38.3-78.4v66.8h-22.9v-66.8h22.9zm-61.1 0v66.8h-22.9v-66.8h22.9z' })
					);
					break;
				case 'vk':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '-.9', y: '.2', width: '500', height: '500', fill: '#45668e' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.1 247.4 499.1 500.2 355.4 500.2 157 303.3 126 218.3 140.6 153.6 219 235.3 267 151.3 340 215.3 405.5 153.2' }),
						React.createElement('path', { 'class': 'st2', d: 'm408.1 164.7c2.3-7.7 0-13.4-11-13.4h-36.4c-9.3 0-13.5 4.9-15.8 10.3 0 0-18.5 45.2-44.8 74.5-8.5 8.5-12.4 11.2-17 11.2-2.3 0-5.8-2.7-5.8-10.4v-72.2c0-9.3-2.6-13.4-10.3-13.4h-57.3c-5.8 0-9.3 4.3-9.3 8.3 0 8.8 13.1 10.8 14.5 35.5v53.7c0 11.7-2.1 13.9-6.7 13.9-12.4 0-42.4-45.4-60.2-97.3-3.6-10.1-7.1-14.2-16.4-14.2h-36.5c-10.4 0-12.5 4.9-12.5 10.3 0 9.6 12.4 57.6 57.6 120.9 30.1 43.2 72.5 66.6 111.1 66.6 23.2 0 26-5.2 26-14.2 0-41.3-2.1-45.2 9.5-45.2 5.4 0 14.7 2.7 36.3 23.6 24.7 24.7 28.8 35.8 42.7 35.8h36.4c10.4 0 15.6-5.2 12.6-15.5-6.9-21.6-53.7-66-55.8-68.9-5.4-6.9-3.8-10 0-16.2 0 0.1 44.5-62.4 49.1-83.7z' })
					);
					break;
				case 'medium':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('rect', { 'class': 'st0', x: '.9', y: '.3', width: '500', height: '500', fill: '#00ab6c' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.9 232.2 500.9 500.3 233.7 500.3 101.4 368.4 151 349.3 146 207.3 159 169.3 191.8 131.6 292 229.3 310 186.3 400.4 131.6' }),
						React.createElement('path', { 'class': 'st2', d: 'm136.8 180c0.4-3.6-1.1-7.3-3.8-9.8l-27.9-33.6v-5h86.7l67 147 58.9-147h82.7v5l-23.9 22.9c-2 1.5-3.1 4.1-2.7 6.7v168.2c-0.4 2.5 0.6 5.1 2.7 6.7l23.3 22.9v5h-117.2v-5l24.2-23.4c2.3-2.3 2.3-3.1 2.3-6.7v-136l-67.2 170.6h-9.1l-78.1-170.6v114.3c-0.7 4.8 0.9 9.6 4.3 13.1l31.4 38.1v5h-89v-4.9l31.4-38.1c3.3-3.5 4.9-8.3 4-13.1v-132.3z' })
					);
					break;
				case 'quora':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.5', y: '0.2', 'class': 'st0', width: '500', height: '500', fill: '#a82400' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.5 312 500.5 500.2 324.9 500.2 141.5 316.9 137 185.3 174 142.3 203 129.4 238.5 115.3 315.7 129.4 ' }),
						React.createElement('path', { 'class': 'st2', d: 'M391.8 335.5h-19.1c-1 8.8-6.9 20.1-21.5 20.1 -13.4 0-23-9.3-32.3-23.4 28.9-22.3 48.8-57.1 48.8-99.9 0.1-76.7-63.1-128.4-129.5-128.4 -65.1 0-129 52-129 128.4 0 87.5 85.7 144.6 162.5 123.4 12.9 21.9 29.8 40.7 62.1 40.7C387.1 396.4 393 347.2 391.8 335.5zM298.2 298c-12.7-19.1-28.5-34.1-59.7-34.1 -19.9 0-35.4 6.5-45 14.9l8 15.9c4-2 8.5-2.6 12.9-2.6 23.2 0 35.1 20.1 45.2 40 -6.5 2-13.5 2.7-21.3 2.7 -49 0-70.2-34.6-70.2-102.3 0-68.1 21.2-103.1 70.2-103.1 49.7 0 71 34.9 71 102.9C309.1 259.6 305.5 281.7 298.2 298z' })
					);
					break;
				case 'meetup':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.4', y: '-0.1', 'class': 'st0', width: '500', height: '500', fill: '#e0393e' }),
						React.createElement('polygon', { 'class': 'st1', points: '291.6 499.9 273.5 499.9 133.2 359.2 141.2 348.5 ' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.4 291.4 500.4 499.9 295.5 499.9 174.5 379.8 169 364.8 126.8 324 133.2 302.8 85.8 254.6 101.9 230.7 122.5 251.5 137.2 258.1 137.2 242.7 133.2 212.3 166.5 184.2 139.3 154.8 157 142.3 171.5 156.3 218.3 142.8 173.3 96.8 183.4 85.4 223.5 124.6 292.5 151.3 258.8 115.3 283 100.4 363.8 182.3 385.7 177.3 ' }),
						React.createElement('path', { 'class': 'st2', d: 'M143.7 352.4c0.7 3.7-1.5 7.2-5.2 8 -3.5 0.7-7.1-1.5-7.8-5.2 -0.7-3.5 1.5-7.2 5-8C139.2 346.5 142.9 348.8 143.7 352.4zM236.4 398.7c-4.1 3-5.2 8.7-2.4 13 3 4.3 8.7 5.4 13 2.4 4.1-3 5.2-8.7 2.2-13C246.4 396.9 240.6 395.7 236.4 398.7L236.4 398.7zM180.7 99.3c4.1-0.9 6.7-5 5.8-9.1 -0.7-4.3-4.8-6.9-8.9-5.9 -4.1 0.9-6.7 5-5.9 9.1C172.6 97.7 176.6 100.3 180.7 99.3L180.7 99.3zM101.9 230.7c-6.5-4.5-15.3-2.8-19.8 3.9 -4.5 6.5-2.8 15.5 3.7 20 6.5 4.6 15.3 3 19.8-3.7C110 244.2 108.4 235.3 101.9 230.7zM278 120.1c6.9-4.1 8.9-13 5-19.6 -4.1-6.9-12.8-9.1-19.4-5 -6.7 4.1-8.9 13-4.8 19.8C262.7 121.9 271.3 124.1 278 120.1L278 120.1zM154.3 157.6c5-3.5 6.1-10.4 2.8-15.3 -3.3-5-10.2-6.1-15-2.8 -5 3.5-6.1 10.4-2.8 15.3C142.6 159.9 149.4 161 154.3 157.6zM395.3 258.6c-4.8 1.1-8 5.9-6.9 10.9 0.9 4.8 5.8 8 10.6 6.9 4.8-0.9 8-5.8 6.9-10.7C404.9 260.9 400.1 257.7 395.3 258.6zM421 221.8c-0.7-3.7-4.3-5.9-7.8-5.2 -3.7 0.7-5.9 4.5-5.2 8.2 0.7 3.5 4.3 5.9 8 5.2C419.6 229 421.9 225.5 421 221.8zM369 174.1c-5.6 3.9-6.9 11.5-3.2 17 3.7 5.6 11.3 6.9 16.8 3.2 5.4-3.9 6.7-11.5 3-17C382 171.7 374.4 170.2 369 174.1zM365 264.4c17 27.9 9.8 64.8-17 83.6 -11.3 8-24 11.5-36.8 11.1 -7.8 30.5-44.9 41.8-68.1 21.1 -0.7 0.6-1.7 1.1-2.4 1.9 -25.3 17.5-59.8 11.3-77.3-14.4 -6.3-9.3-9.5-19.8-9.8-30.4 -42.3-7.1-58.3-60.9-26.6-90.5 -18.3-30.4 0.4-69.5 34.6-74.4 16.3-42.9 69.7-63.2 105.9-35.1 43.6-14.4 88.3 19 84.8 65.5C378.8 210.9 386.4 246.1 365 264.4zM319.6 312.5c-2-13.3-26.5-3-27.9-17.5 -2-20.7 28.3-65.5 25.9-82.9 -2.2-15.5-12.6-18.8-21.6-19 -8.7-0.2-10.9 1.3-13.9 3 -1.9 1.1-4.3 3.2-7.6-0.2 -4.1-3.9-7.2-7.6-12.6-8.4 -8-1.3-11.5 1.3-17.2 6.3 -2.2 1.9-7.8 8.4-13 5.9 -2.2-1.1-10-5-15.5-7.4 -10.6-4.6-25.9 3-31.5 13 -8.4 14.8-24.6 73.2-27 81 -5.6 17.2 7.1 31.5 23.9 30.5 7.2-0.4 11.8-3 16.4-11.3 2.6-4.8 27-69.7 28.9-72.9 1.3-2.2 5.8-5.2 9.5-3.3 3.7 2 4.5 6.1 3.9 9.8 -0.7 6.3-18.1 45.9-18.7 50.3 -2.2 14.8 17.4 17.2 25 2.6 2.4-4.6 29.6-60 32-63.7 2.8-4.1 4.8-5.4 7.6-5.2 2 0 5.4 0.6 4.6 7.1 -0.9 6.1-22.7 46.8-25.2 56.8 -3 13.3 4.3 26.8 16.1 32.8C289.1 323.4 322.2 329.8 319.6 312.5L319.6 312.5zM323.3 372.3c-6.7 4.8-8.4 14.2-3.7 21.1 4.6 6.9 13.9 8.5 20.7 3.9 6.9-4.8 8.5-14.2 3.9-21.1C339.5 369.3 330.2 367.4 323.3 372.3z' })
					);
					break;
				case 'user_email':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.2', y: '0.3', 'class': 'st0', width: '500', height: '500', fill: '#F97E2A' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 269.8 500.2 500.3 270.3 500.3 115 344.7 220.3 297.9 115 192.2 380.6 150.9 ' }),
						React.createElement('path', { 'class': 'st2', d: 'M385.1 214.6c2.1-1.7 5.3-0.1 5.3 2.6v112c0 14.5-11.8 26.3-26.3 26.3H136.3c-14.5 0-26.3-11.8-26.3-26.3v-112c0-2.7 3.1-4.3 5.3-2.6 12.3 9.5 28.5 21.6 84.4 62.2 11.6 8.4 31.1 26.2 50.5 26.1 19.6 0.2 39.4-18 50.6-26.1C356.6 236.3 372.9 224.1 385.1 214.6zM250.2 285.4c12.7 0.2 31-16 40.2-22.7 72.7-52.8 78.2-57.4 95-70.5 3.2-2.5 5-6.3 5-10.4v-10.4c0-14.5-11.8-26.3-26.3-26.3H136.3c-14.5 0-26.3 11.8-26.3 26.3v10.4c0 4.1 1.9 7.8 5 10.4 16.8 13.1 22.3 17.7 95 70.5C219.2 269.4 237.5 285.6 250.2 285.4L250.2 285.4z' })
					);
					break;
				case 'snapchat':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.2', y: '0.3', 'class': 'st0', width: '500', height: '500', fill: '#fffc00' }),
						React.createElement('polygon', { 'class': 'st1', points: '500.2 319.7 500.2 500.3 267.7 500.3 98.8 328.3 187.4 294.6 133.8 241.6 149 237.3 196 250.3 306.4 126.9 ' }),
						React.createElement('path', { 'class': 'st2', d: 'M401 331.2c-3.1 7.2-16.1 12.5-39.9 16.2 -1.2 1.6-2.2 8.7-3.8 14.2 -1 3.3-3.3 5.2-7.2 5.2l-0.2 0c-5.6 0-11.4-2.6-23-2.6 -15.7 0-21.1 3.6-33.3 12.2 -12.9 9.1-25.3 17-43.8 16.2 -18.7 1.4-34.3-10-43.1-16.2 -12.3-8.7-17.6-12.2-33.3-12.2 -11.2 0-18.2 2.8-23 2.8 -4.8 0-6.6-2.9-7.3-5.3 -1.6-5.4-2.6-12.6-3.9-14.3 -12.2-1.9-39.8-6.7-40.5-19 -0.2-3.2 2.1-6 5.3-6.5 41.2-6.8 59.7-49 60.5-50.8 0-0.1 0.1-0.2 0.1-0.3 2.2-4.5 2.7-8.2 1.5-11.1 -3-7-15.9-9.6-21.3-11.7 -14-5.5-16-11.9-15.2-16.3 1.4-7.6 12.9-12.3 19.5-9.1 5.3 2.5 10 3.7 13.9 3.7 3 0 4.9-0.7 5.9-1.3 -1.2-21.3-4.2-51.6 3.4-68.6 20-44.8 62.3-48.3 74.8-48.3 0.6 0 5.4-0.1 6-0.1 30.9 0 60.5 15.8 75 48.3 7.6 17 4.6 47.2 3.4 68.6 0.9 0.5 2.6 1.1 5.1 1.3 3.8-0.2 8.2-1.4 13.1-3.7 3.6-1.7 8.5-1.5 12.1 0l0 0c5.6 2 9.1 6 9.2 10.6 0.1 5.8-5 10.7-15.3 14.8 -1.3 0.5-2.8 1-4.4 1.5 -5.8 1.8-14.6 4.6-16.9 10.2 -1.2 2.9-0.7 6.6 1.5 11.1 0.1 0.1 0.1 0.2 0.1 0.3 0.8 1.8 19.3 44.1 60.5 50.8C400.2 322.4 403 326.4 401 331.2L401 331.2z' })
					);
					break;
				case '500px':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '-0.2', y: '0.3', 'class': 'st0', width: '500', height: '500', fill: '#0099e5' }),
						React.createElement('polygon', { 'class': 'st1', points: '499.8 270.1 499.8 500.3 312.4 500.3 174.4 362.6 145.8 296.8 150.1 280.4 180.3 310.9 190.2 289.6 208.7 308.3 215.3 294.6 215.3 260.6 176.1 220.5 180.3 171.9 191 111.3 328.3 101.3 ' }),
						React.createElement('path', { 'class': 'st2', d: 'M177 303.7c-3.9-8.6-4.2-11.1 4.5-14 15.5-4.8 4.8 5.6 26.1 29.7h0.2v-56.8c0.7-30.4 26.6-55.7 59.1-55.7 32.6 0 59.1 26.3 59.1 58.5 0 38.3-36.8 68.4-77.7 56.4 -6.3-2.5-1.3-19.2 5.1-17.3 32 0 54.1-6.1 54.1-38.9 0-36.9-46.6-54.2-70.7-27 -14.2 16-10.6 25.5-10.6 95.3 30.7 18.7 71.5 13.3 97-12.2 15-15 23.3-35.1 23.3-56.2 0-21.3-8.3-41.2-23.5-56.4 -15-15-34.9-23.3-56.4-23.3s-41.6 8.3-56.5 23.3c-0.2 0.2-9.7 10-12.8 14.4l-0.3 0.4c-2 2.8-3.8 5.5-12.2 3.7 -4.2-1-8.6-3.5-8.6-7.1V107.6c0-3 2.4-6.3 6.3-6.3h145.9c5 0 5 7 5 9.1 0 2.4 0 9.1-5 9.1H193.4v80.4h0.2c63-66.4 171-21.8 171 65.8C364.5 373.4 216.5 398.9 177 303.7L177 303.7zM215.3 146c-0.3 2.5 2.8 14.8 8.8 12.5 75.5-28.7 122.6 24.4 126.6 24.4 2.9 0 13.8-9.3 8.6-13.8C303 115.3 217.6 134.6 215.3 146L215.3 146zM352.2 346.2c-66.5 66.4-180.8 36.8-200.7-63 0-7.4-18.4-4.5-17.5 2 14.5 104.8 148.7 155.3 230.7 73.3C368.9 353.9 357.1 341.4 352.2 346.2L352.2 346.2zM243.7 280.9c0 2.4 2.6 4.4 3.3 5.1 1.8 1.8 3.7 2.7 5.1 2.7 2.3 0 1.6 0.1 13.5-11.8 11.9 11.7 11.5 11.8 13.5 11.8 3.3 0 11.2-6.3 6.5-11l-10.5-10.5 11-11c3.8-4.1-6.1-13.2-9.8-9.5l-10.8 10.8c-11.2-11.4-11.1-11.8-13-11.8 -3 0-10.9 7.1-7.5 10.5l11 11C245.1 278 243.7 278.8 243.7 280.9z' })
					);
					break;
				case 'mastodont':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('rect', { x: '0.1', y: '0.1', 'class': 'st0', width: '500', height: '500', fill: '#2b90d9' }),
						React.createElement('path', { 'class': 'st1', d: 'M500.1 296.7v203.4h-195L162 355.3l-13-59c0 0-2-103 0-109s20-38 20-38l100-15 73.1 5.1L500.1 296.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'M370.1 205.9c0-55.8-36.6-72.2-36.6-72.2 -35.9-16.5-131.2-16.3-166.7 0 0 0-36.6 16.4-36.6 72.2 0 66.4-3.8 148.9 60.6 165.9 23.2 6.1 43.2 7.5 59.3 6.5 29.2-1.6 45.5-10.4 45.5-10.4l-1-21.2c0 0-20.8 6.5-44.3 5.8 -23.2-0.8-47.6-2.5-51.4-31 -0.3-2.5-0.5-5.2-0.5-8 49.1 12 91 5.2 102.6 3.8 32.2-3.8 60.3-23.7 63.8-41.8C370.5 247.1 370.1 205.9 370.1 205.9L370.1 205.9zM327 277.8h-26.7v-65.6c0-28.5-36.7-29.6-36.7 4v35.9h-26.6v-35.9c0-33.6-36.7-32.5-36.7-4v65.6h-26.8c0-70.1-3-84.9 10.6-100.5 14.9-16.6 45.8-17.7 59.6 3.5l6.7 11.2 6.7-11.2c13.8-21.3 44.8-20 59.6-3.5C330 193 327 207.8 327 277.8L327 277.8z' })
					);
					break;
			}
		}
	}, {
		key: 'circle_long_shadow_icon',
		value: function circle_long_shadow_icon(icon) {

			switch (icon) {
				case 'addthis':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', fill: '#ff6550', d: 'M500.2,250.5c0,24.1-3.4,47.4-9.8,69.4C466.9,401.5,403,466,321.6,490.3c-22.7,6.8-46.7,10.4-71.6,10.4\tc-138.2,0-250.2-112-250.2-250.2C-0.2,112.3,111.8,0.3,250,0.3S500.2,112.3,500.2,250.5z' }),
						React.createElement('path', { 'class': 'st1', d: 'M490.5,319.9C466.9,401.5,403,466,321.6,490.3L106.3,276.1l3.9-33.1l136.7-4l0.3-80l28.5-53L490.5,319.9z' }),
						React.createElement('path', { 'class': 'st2', d: 'M379,218.1h-96.5v-96.5c0-11.8-9.6-21.5-21.5-21.5h-21.5c-11.8,0-21.5,9.6-21.5,21.5v96.5h-96.5\tc-11.8,0-21.5,9.6-21.5,21.5V261c0,11.8,9.6,21.5,21.5,21.5H218V379c0,11.8,9.6,21.5,21.5,21.5H261c11.8,0,21.5-9.6,21.5-21.5v-96.5H379c11.8,0,21.5-9.6,21.5-21.5v-21.5C400.4,227.7,390.8,218.1,379,218.1z' })
					);
					break;
				case 'behance':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', fill: '#1769ff', d: 'M500.2,250.5c0,10.5-0.7,20.9-1.9,31c-1.6,13.2-4.3,26-7.9,38.4C466.9,401.5,403,466,321.6,490.3c-17.3,5.2-35.3,8.5-53.9,9.8c-5.8,0.4-11.7,0.6-17.7,0.6c-138.2,0-250.2-112-250.2-250.2S111.8,0.3,250,0.3S500.2,112.3,500.2,250.5z' }),
						React.createElement('path', { 'class': 'st1', d: 'M498.3,281.5c-1.6,13.2-4.3,26-7.9,38.4C466.9,401.5,403,466,321.6,490.3c-17.3,5.2-35.3,8.5-53.9,9.8L106,338.2l28.8-166.7l103.7-7.3l55.4,54.9l19.9,4.3l33.4,4.3l-44.2-47l75.2-18.3L498.3,281.5z' }),
						React.createElement('path', { 'class': 'st2', d: 'M227.5,237.3c16.6-8,25.3-20,25.3-38.7c0-37-27.5-46-59.3-46H106v185.6h89.9c33.7,0,65.4-16.2,65.4-53.9C261.3,261,250.3,243.8,227.5,237.3L227.5,237.3z M146.8,184.3h38.3c14.7,0,28,4.1,28,21.2c0,15.8-10.3,22.1-24.9,22.1h-41.4C146.8,227.6,146.8,184.3,146.8,184.3zM190.4,306.6h-43.6v-51.1h44.5c18,0,29.3,7.5,29.3,26.5C220.5,300.8,207,306.6,190.4,306.6L190.4,306.6zM378.1,180.6h-75.2v-18.3h75.2V180.6L378.1,180.6zM407.6,272.9c0-39.7-23.2-72.9-65.4-72.9c-40.9,0-68.7,30.8-68.7,71.1c0,41.8,26.3,70.5,68.7,70.5c32.1,0,52.9-14.5,62.9-45.2h-32.6c-3.5,11.5-18,17.5-29.2,17.5c-21.6,0-33-12.7-33-34.2h96.9C407.4,277.6,407.6,275.3,407.6,272.9zM310.4,256.6c1.2-17.6,12.9-28.7,30.6-28.7\tc18.5,0,27.9,10.9,29.4,28.7H310.4z' })
					);
					break;
				case 'delicious':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-1.6 13.2-4.3 25.9-7.9 38.3-23.4 81.3-87.1 145.6-168.2 169.8-17.2 5.2-35.2 8.5-53.7 9.8-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#3399ff' }),
						React.createElement('path', { 'class': 'st1', d: 'm497.7 280.1c-0.1 0.6-0.1 1.1-0.2 1.7-1.6 13.2-4.3 25.9-7.9 38.3-23.4 81.3-87.1 145.6-168.2 169.8-17.2 5.2-35.2 8.5-53.7 9.8-0.8 0.1-1.6 0.1-2.4 0.1l-122.4-122.5 1.6-213.4 11.9-9.3 209.4-5.3 131.9 130.8z' }),
						React.createElement('path', { 'class': 'st2', d: 'm372.7 158.6c-0.2-0.8-0.5-1.6-0.8-2.4-0.5-1.3-1.1-2.6-1.8-3.8-0.8-1.3-1.6-2.6-2.5-3.7-1.1-1.3-2.4-2.6-3.7-3.7-0.6-0.5-1.2-0.9-1.8-1.3-0.7-0.5-1.4-0.9-2.2-1.3-1-0.5-1.9-1-3-1.3-0.9-0.4-1.9-0.7-2.9-0.9-2-0.5-4.2-0.8-6.5-0.8h-189.1c-14.3-0.1-25.8 11.5-25.8 25.8v189.3c0 2.2 0.3 4.4 0.8 6.5 1.1 4.1 3.1 7.9 5.9 10.9 0.5 0.6 1.1 1.2 1.8 1.8 3.1 2.8 6.8 4.8 10.9 5.9 2 0.5 4.2 0.8 6.5 0.8h189.3c14.3 0 25.8-11.6 25.8-25.8v-189.6c-0.1-2.2-0.4-4.4-0.9-6.4zm-16.4 195.7c0 4.7-3.9 8.6-8.6 8.6h-94.7v-103.2h-103.3v-94.7c0-4.7 3.9-8.6 8.6-8.6h94.7v103.3h103.3v94.6z' })
					);
					break;
				case 'deviantart':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 6.3-1.8 12.4-3 18.5-1.4 6.7-3 13.3-4.9 19.8-23.4 81.3-87.1 145.6-168.2 169.8-12 3.6-24.3 6.3-37 8.1-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#05cc47' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.5 300.3c-1.4 6.7-3 13.3-4.9 19.8-23.4 81.3-87.1 145.6-168.2 169.8-12 3.6-24.3 6.3-37 8.1l-119.1-119.4 42.4-98-42.4-40.1 156.8-112.7 172.4 172.5z' }),
						React.createElement('path', { 'class': 'st2', d: 'm322.2 173.4l-48.2 87.8 3.6 4.7h44.5v62.6h-78.9l-6.6 4.5-21.4 41.2c-0.1 0-4.2 4.2-4.5 4.5h-45.4v-45.7l45.7-88-3.6-4.5h-42.1v-62.5h76.5l6.6-4.5 21.4-41.2c0.1 0 4.2-4.2 4.5-4.5h47.8c0.1 0 0.1 45.6 0.1 45.6z' })
					);
					break;
				case 'digg':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 6.3-1.8 12.4-3 18.5-1.1 5.1-2.3 10.2-3.6 15.3-0.4 1.5-0.8 3-1.3 4.5-23.4 81.3-87.1 145.6-168.2 169.8-7 2.1-14.1 3.9-21.3 5.4-5.2 1.1-10.4 2-15.7 2.7-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#005be2' }),
						React.createElement('path', { 'class': 'st1', d: 'm490.9 315.6c-0.4 1.5-0.8 3-1.3 4.5-23.4 81.3-87.1 145.6-168.2 169.8-7 2.1-14.1 3.9-21.3 5.4l-192.7-193.4 8.7-80.3 39.3-6 23.6-48.9 11.1 10.3 27.7-10.3 38.7 41.2h44.3l11.1 12.4 71.8-12.4 107.2 107.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'm151.5 207.8h-44.1v94.1h71.6v-135.3h-27.5v41.2zm0 72h-16.6v-49.8h16.6v49.8zm160.4-72v94.1h44.1v15.4h-44.1v22h71.8v-131.5h-71.8zm44.1 72h-16.6v-49.8h16.6v49.8zm-127.1 22.1h44.3v15.4h-44.3v22h71.9v-131.5h-71.9v94.1zm27.6-71.9h16.6v49.8h-16.6v-49.8zm-66.4-63.4h27.7v27.5h-27.7v-27.5zm0 41.2h27.7v94.1h-27.7v-94.1z' })
					);
					break;
				case 'dribbble':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 5.9-1.7 11.7-2.8 17.5-0.1 0.3-0.1 0.7-0.2 1-1.1 5.1-2.3 10.2-3.6 15.3-0.4 1.5-0.8 3-1.3 4.5-23.4 81.3-87.1 145.6-168.2 169.8-7 2.1-14.1 3.9-21.3 5.4-2.1 0.4-4.1 0.8-6.2 1.2-3.1 0.6-6.3 1.1-9.5 1.5-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#ea4c89' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.7 299.3c-0.1 0.3-0.1 0.7-0.2 1-1.1 5.1-2.3 10.2-3.6 15.3-0.4 1.5-0.8 3-1.3 4.5-23.4 81.3-87.1 145.6-168.2 169.8-7 2.1-14.1 3.9-21.3 5.4-2.1 0.4-4.1 0.8-6.2 1.2l-158.4-159.4-13.4-36.8-2.7-53.3 9.2-46 29.5-45.3 48.7-28 56.1-5.3 82.3 26.3 149.5 150.6z' }),
						React.createElement('path', { 'class': 'st2', d: 'm249.6 111.5c-78.1 0-141.7 63.6-141.7 141.7s63.6 141.7 141.7 141.7 141.7-63.6 141.7-141.7-63.6-141.7-141.7-141.7zm93.7 65.3c16.9 20.6 27.1 46.8 27.3 75.4-4-0.8-44-9-84.3-3.9-3.3-8-6.4-15.1-10.6-23.8 44.8-18.2 65-44.2 67.6-47.7zm-13.5-13.9c-2.2 3.1-20.4 27.6-63.4 43.7-19.8-36.4-41.8-66.4-45.2-70.8 38.4-9.3 78.9 0.6 108.6 27.1zm-131.6-19c3.2 4.4 24.8 34.3 44.9 70-56.6 15-106.5 14.8-111.9 14.7 7.8-37.6 33.1-68.8 67-84.7zm-69.6 109.5c0-1.2 0-2.5 0.1-3.7 5.3 0.1 63.9 0.9 124.4-17.2 3.5 6.8 6.8 13.7 9.8 20.5-43.8 12.3-83.5 47.7-103.1 81.3-19.4-21.5-31.2-49.8-31.2-80.9zm46.7 95.5c12.6-25.8 47-59.2 95.7-75.8 17 44.2 24 81.2 25.8 91.8-38.8 16.5-85.6 11.9-121.5-16zm141.9 4.8c-1.2-7.4-7.7-42.8-23.5-86.3 37.9-6.1 71.2 3.9 75.4 5.2-5.4 33.7-24.7 62.7-51.9 81.1z' })
					);
					break;
				case 'facebook':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 6.3-1.8 12.4-3 18.5-0.2 1.1-0.5 2.2-0.7 3.3-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-7.6 1.8-15.4 3.3-23.3 4.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#3b5998' }),
						React.createElement('path', { 'class': 'st1', d: 'm493.8 303.6c-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7l-100.9-101 1.8-3.5 2.1-76.7-45.3-43.7 41.3-31 30-95.3 71.4-24.7 185.7 185.9z' }),
						React.createElement('path', { 'class': 'st2', d: 'M206.8,392.6V268.8h-41.5v-49.2h41.5v-38.8c0-42.1,25.7-65,63.3-65c18,0,33.5,1.4,38,1.9v44H282  c-20.4,0-24.4,9.7-24.4,24v33.9h46.1l-6.3,49.2h-39.8v123.8' })
					);
					break;
				case 'whatsapp':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 500 500.7' },
						React.createElement('path', { fill: '#25d366', 'class': 'st0', d: 'M499.4,250.9c0,2.2,0,4.4-0.1,6.6v0.4c-0.1,2.2-0.2,4.4-0.3,6.5c-0.1,1.3-0.1,2.6-0.2,4c-0.1,1.7-0.2,3.3-0.4,5  c-0.2,2.2-0.4,4.5-0.7,6.7c-0.1,0.6-0.1,1.1-0.2,1.7c-0.6,4-1.2,7.9-1.8,11.9c-0.1,0.4-0.1,0.9-0.2,1.3c0,0.4-0.1,0.7-0.2,1v0.3  c-0.2,1-0.4,2-0.5,3c0,0.1,0,0.2-0.1,0.3v0.1c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.5-0.2,1-0.3,1.6c0,0.2-0.1,0.3-0.1,0.5  c-1,4.4-2,8.8-3.1,13.2c-0.2,0.9-0.5,1.9-0.8,2.8c-0.2,0.6-0.3,1.1-0.5,1.7c-0.8,2.7-1.6,5.3-2.5,8c-1.4,4.2-2.8,8.5-4.4,12.5  c-0.1,0.4-0.3,0.7-0.4,1.1c-0.9,2.3-1.8,4.6-2.8,6.8c-28.1,66.2-84.2,117.8-153.5,140c-0.5,0.2-0.9,0.3-1.3,0.4  c-1.1,0.4-2.2,0.7-3.3,1c-2.9,0.9-5.9,1.6-8.8,2.4c-0.1,0-0.2,0.1-0.3,0.1c-1.4,0.4-2.8,0.8-4.2,1.1c-1.1,0.3-2.2,0.5-3.4,0.7  c-1.3,0.3-2.6,0.6-3.9,0.9c-0.2,0.1-0.5,0.1-0.7,0.2c-1.5,0.3-2.9,0.5-4.3,0.8c-0.6,0.1-1.3,0.2-1.9,0.4c-0.2,0-0.3,0.1-0.5,0.1  c-1.1,0.2-2.2,0.4-3.3,0.6c-1.9,0.3-3.8,0.6-5.7,0.8c-0.3,0-0.5,0.1-0.8,0.1c-2.7,0.4-5.5,0.7-8.2,1c-0.4,0-0.8,0.1-1.2,0.1  c-1.1,0.1-2.1,0.2-3.2,0.3c-0.1,0-0.1,0-0.2,0c-1,0.1-2.1,0.2-3.2,0.2c-0.8,0.1-1.6,0.1-2.4,0.1c-1.4,0.1-2.9,0.2-4.4,0.2  c-3.6,0.1-7.2,0.2-10.8,0.2c-11,0-21.9-0.7-32.6-2.1C95.2,482.2,0.7,377.6,0.7,250.9C0.7,113.2,112.3,1.5,250.1,1.5  c133.8,0,242.7,105.2,249,237.2c0.1,1.5,0.1,3,0.2,4.6C499.4,245.8,499.4,248.4,499.4,250.9z' }),
						React.createElement('path', { 'class': 'st1', d: 'M495.7,293.7c-0.1,0.4-0.1,0.9-0.2,1.3c0,0.4-0.1,0.7-0.2,1v0.3c-0.2,1-0.4,2-0.5,3c0,0.1,0,0.2-0.1,0.3v0.1  c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.5-0.2,1-0.3,1.6c0,0.2-0.1,0.3-0.1,0.5c-1,4.4-2,8.8-3.1,13.2c-0.2,0.9-0.5,1.9-0.8,2.8  c-0.2,0.6-0.3,1.1-0.5,1.7c-0.8,2.7-1.6,5.3-2.5,8c-1.4,4.2-2.8,8.5-4.4,12.5c-0.1,0.4-0.3,0.7-0.4,1.1c-0.9,2.3-1.8,4.6-2.8,6.8  c-28.1,66.2-84.2,117.8-153.5,140c-0.5,0.2-0.9,0.3-1.3,0.4c-1.1,0.4-2.2,0.7-3.3,1c-2.9,0.9-5.9,1.6-8.8,2.4  c-0.1,0-0.2,0.1-0.3,0.1c-1.4,0.4-2.8,0.8-4.2,1.1c-1.1,0.3-2.2,0.5-3.4,0.7c-1.3,0.3-2.6,0.6-3.9,0.9c-0.2,0.1-0.5,0.1-0.7,0.2  c-1.5,0.3-2.9,0.5-4.3,0.8c-0.6,0.1-1.3,0.2-1.9,0.4c-0.2,0-0.3,0.1-0.5,0.1c-1.1,0.2-2.2,0.4-3.3,0.6c-1.9,0.3-3.8,0.6-5.7,0.8  c-0.3,0-0.5,0.1-0.8,0.1c-2.7,0.4-5.5,0.7-8.2,1c-0.4,0-0.8,0.1-1.2,0.1c-1.1,0.1-2.1,0.2-3.2,0.3c-0.1,0-0.1,0-0.2,0  c-1,0.1-2.1,0.2-3.2,0.2c-0.8,0.1-1.6,0.1-2.4,0.1c-1.4,0.1-2.9,0.2-4.4,0.2c-3.6,0.1-7.2,0.2-10.8,0.2c-11,0-21.9-0.7-32.6-2.1  l-110.5-110l0.1-0.2l13.4-36.5l11.5-28.5l9.7-2.1l-14.7-20.4l-5.2-15.5l-4.1-30.9l-3.1-18.5l7.2-28.8l13.4-26.9l18.5-26.7l23.7-20.6  l38.1-15.5H294l43.2,17.6l23.3,23.4c0,0,0,0,0,0L495.7,293.7z' }),
						' ',
						React.createElement('path', { 'class': 'st2', d: 'M320.1,278.2c-0.8-1.6-3.2-2.5-6.7-4.2c-3.5-1.8-20.8-10.3-24-11.4c-3.2-1.2-5.6-1.8-7.9,1.8   c-2.3,3.6-9.1,11.4-11.2,13.8c-2,2.3-4.1,2.7-7.6,0.9c-20.7-10.3-34.3-18.5-47.9-41.9c-3.6-6.2,3.6-5.8,10.3-19.2   c1.1-2.3,0.6-4.4-0.3-6.2c-0.9-1.8-7.9-19.1-10.9-26.1c-2.9-6.8-5.8-5.9-7.9-6c-2-0.1-4.4-0.1-6.7-0.1c-2.4,0-6.2,0.9-9.4,4.4   c-3.2,3.6-12.3,12.1-12.3,29.4c0,17.3,12.6,34.1,14.3,36.4c1.8,2.3,24.8,37.9,60.2,53.2c22.3,9.6,31.1,10.5,42.3,8.8   c6.8-1,20.8-8.5,23.7-16.8S321,279.7,320.1,278.2z M320.1,278.2c-0.8-1.6-3.2-2.5-6.7-4.2c-3.5-1.8-20.8-10.3-24-11.4   c-3.2-1.2-5.6-1.8-7.9,1.8c-2.3,3.6-9.1,11.4-11.2,13.8c-2,2.3-4.1,2.7-7.6,0.9c-20.7-10.3-34.3-18.5-47.9-41.9   c-3.6-6.2,3.6-5.8,10.3-19.2c1.1-2.3,0.6-4.4-0.3-6.2c-0.9-1.8-7.9-19.1-10.9-26.1c-2.9-6.8-5.8-5.9-7.9-6c-2-0.1-4.4-0.1-6.7-0.1   c-2.4,0-6.2,0.9-9.4,4.4c-3.2,3.6-12.3,12.1-12.3,29.4c0,17.3,12.6,34.1,14.3,36.4c1.8,2.3,24.8,37.9,60.2,53.2   c22.3,9.6,31.1,10.5,42.3,8.8c6.8-1,20.8-8.5,23.7-16.8S321,279.7,320.1,278.2z M360.5,158.1C360.5,158,360.5,158,360.5,158.1   c-3.6-4.6-7.5-9-11.7-13.1c-26.6-26.7-62-41.3-99.6-41.3c-77.7,0-140.9,63.2-140.9,140.9c0,24.8,6.5,49,18.8,70.4l-20,73l0.1,0   l74.6-19.6c20.6,11.2,43.7,17.1,67.3,17.1h0.1c77.6,0,142.2-63.2,142.2-140.9C391.4,212.8,380,182.7,360.5,158.1z M249.2,361.7   c-21.1,0-41.7-5.7-59.7-16.3l-4.2-2.5L141,354.5l11.8-43.2l-2.8-4.5c-11.7-18.7-17.9-40.2-17.9-62.3c0-64.5,52.5-117.1,117.1-117.1   c31.3,0,60.7,12.2,82.8,34.3c22.1,22.1,35.7,51.5,35.6,82.8C367.6,309.2,313.7,361.7,249.2,361.7z M313.4,274   c-3.5-1.8-20.8-10.3-24-11.4c-3.2-1.2-5.6-1.8-7.9,1.8c-2.3,3.6-9.1,11.4-11.2,13.8c-2,2.3-4.1,2.7-7.6,0.9   c-20.7-10.3-34.3-18.5-47.9-41.9c-3.6-6.2,3.6-5.8,10.3-19.2c1.1-2.3,0.6-4.4-0.3-6.2c-0.9-1.8-7.9-19.1-10.9-26.1   c-2.9-6.8-5.8-5.9-7.9-6c-2-0.1-4.4-0.1-6.7-0.1c-2.4,0-6.2,0.9-9.4,4.4c-3.2,3.6-12.3,12.1-12.3,29.4c0,17.3,12.6,34.1,14.3,36.4   c1.8,2.3,24.8,37.9,60.2,53.2c22.3,9.6,31.1,10.5,42.3,8.8c6.8-1,20.8-8.5,23.7-16.8s2.9-15.3,2-16.8   C319.2,276.6,316.9,275.7,313.4,274z' })
					);
					break;
				case 'flickr':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.6 3.6-1.2 7.2-1.9 10.8-0.2 1.1-0.5 2.2-0.7 3.3-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-6.7 1.6-13.5 2.9-20.5 4-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#0063dc' }),
						React.createElement('path', { 'class': 'st1', d: 'm496.8 289.3c-0.6 3.6-1.2 7.2-1.9 10.8-0.2 1.1-0.5 2.2-0.7 3.3-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-6.7 1.6-13.5 2.9-20.5 4l-142.6-143.6 35.3-165.1 169.7-46.6 146.8 147.2z' }),
						React.createElement('path', { 'class': 'st2', d: 'm337.9 139.4h-174.8c-13.2 0-23.8 10.7-23.8 23.8v174.8c0 13.2 10.7 23.8 23.8 23.8h174.8c13.2 0 23.8-10.7 23.8-23.8v-174.7c0-13.2-10.6-23.9-23.8-23.9zm-126.9 142.6c-17.4 0-31.5-14.1-31.5-31.5s14.1-31.5 31.5-31.5 31.5 14.1 31.5 31.5-14.1 31.5-31.5 31.5zm79 0c-17.4 0-31.5-14.1-31.5-31.5s14.1-31.5 31.5-31.5 31.5 14.1 31.5 31.5-14.1 31.5-31.5 31.5z' })
					);
					break;
				case 'github':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 1.1-0.5 2.2-0.7 3.3-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-6.5 1.6-13.2 2.8-20 3.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#4078c0' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.6 296.3c-0.2 1.3-0.5 2.5-0.7 3.8-0.2 1.1-0.5 2.2-0.7 3.3-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-6.5 1.6-13.2 2.8-20 3.9l-140.4-141.1-14.9-35.9-7.8-71 32.6-89.2 79.9-17.7 111.5 7.2 146.6 146.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'm204 339c0 1.2-1.3 2.1-3 2.1-1.9 0.2-3.3-0.8-3.3-2.1 0-1.2 1.3-2.1 3-2.1 1.8-0.1 3.3 0.8 3.3 2.1zm-18.1-2.6c-0.4 1.2 0.8 2.5 2.5 2.8 1.5 0.6 3.3 0 3.6-1.2s-0.8-2.5-2.5-3c-1.5-0.3-3.2 0.3-3.6 1.4zm25.7-1c-1.7 0.4-2.8 1.5-2.7 2.8 0.2 1.2 1.7 1.9 3.4 1.5s2.8-1.5 2.7-2.7c-0.2-1-1.7-1.7-3.4-1.6zm38.2-222.8c-80.6 0-142.3 61.2-142.3 141.9 0 64.5 40.6 119.7 98.5 139.1 7.4 1.3 10.1-3.3 10.1-7 0-3.6-0.2-23.5-0.2-35.7 0 0-40.7 8.7-49.2-17.3 0 0-6.6-16.9-16.2-21.3 0 0-13.3-9.1 0.9-9 0 0 14.5 1.2 22.4 15 12.7 22.4 34.1 16 42.4 12.2 1.3-9.3 5.1-15.8 9.3-19.6-32.5-3.6-65.3-8.3-65.3-64.2 0-16 4.4-24 13.7-34.2-1.5-3.8-6.5-19.4 1.5-39.5 12.2-3.8 40.1 15.7 40.1 15.7 11.6-3.3 24.1-4.9 36.5-4.9s24.9 1.7 36.5 4.9c0 0 28-19.5 40.1-15.7 8 20.2 3 35.7 1.5 39.5 9.3 10.3 15 18.3 15 34.2 0 56.1-34.2 60.6-66.7 64.2 5.3 4.6 9.9 13.3 9.9 27 0 19.6-0.2 43.8-0.2 48.6 0 3.8 2.7 8.4 10.1 7 58.1-19.3 97.6-74.5 97.6-139 0.1-80.6-65.3-141.9-146-141.9zm-85.8 200.6c-0.8 0.6-0.6 1.9 0.4 3 0.9 0.9 2.3 1.3 3 0.6 0.8-0.6 0.6-1.9-0.4-3-0.9-1-2.2-1.4-3-0.6zm-6.3-4.7c-0.4 0.8 0.2 1.7 1.3 2.3 0.9 0.6 2.1 0.4 2.5-0.4s-0.2-1.7-1.3-2.3c-1.1-0.4-2-0.2-2.5 0.4zm18.9 20.7c-0.9 0.8-0.6 2.5 0.8 3.6 1.3 1.3 3 1.5 3.8 0.6 0.8-0.8 0.4-2.5-0.8-3.6-1.3-1.4-3.1-1.6-3.8-0.6zm-6.6-8.6c-0.9 0.6-0.9 2.1 0 3.4s2.5 1.9 3.3 1.3c0.9-0.8 0.9-2.3 0-3.6s-2.4-1.8-3.3-1.1z' })
					);
					break;
				case 'google':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-3.6 0.9-7.2 1.6-10.9 2.3-3 0.6-6.1 1.1-9.1 1.6-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#4285f4' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.4 302.6c-0.1 0.3-0.1 0.5-0.2 0.8-1.2 5.6-2.6 11-4.2 16.5-23.4 81.3-87.1 145.6-168.2 169.8-4.5 1.3-9.1 2.6-13.7 3.7-3.6 0.9-7.2 1.6-10.9 2.3l-156-156.4-6-31v-83l36-49 85-35 87.8 11.2 150.4 150.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'm385 257.6c0 78.7-53.9 134.7-133.5 134.7-76.3 0-138-61.6-138-138s61.6-138 138-138c37.2 0 68.4 13.6 92.5 36.1l-37.6 36.1c-49.1-47.3-140.4-11.7-140.4 65.8 0 48.1 38.4 87.1 85.5 87.1 54.6 0 75.1-39.2 78.3-59.5h-78.3v-47.5h131.4c1.2 7.2 2.1 14 2.1 23.2z' })
					);
					break;
				case 'googleplus':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3-3 0.6-6.1 1.1-9.1 1.6-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#dd4b39' }),
						React.createElement('path', { 'class': 'st1', d: 'm491.9 313.1c-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6l-170.4-171.8s-10.2-54.7-6.2-57.7 0-44 0-44l19-26s31-15 38-15 28 4.2 28 4.2h53l63 60.2 39.1 13.7 16.6-41.5 99.2 98.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'm300.3 238.9c0.9 4.8 1.6 9.7 1.6 15.9 0 54.7-36.7 93.6-92 93.6-52.9 0-95.8-42.9-95.8-95.8s42.9-95.8 95.8-95.8c25.9 0 47.4 9.4 64.2 25.1l-26 25c-7.1-6.8-19.5-14.8-38.2-14.8-32.7 0-59.3 27-59.3 60.5s26.7 60.5 59.3 60.5c37.9 0 52.1-27.3 54.4-41.3h-54.4v-32.9h90.4zm92.4 3.2v-27.8h-27.9v27.8h-27.8v27.9h27.8v27.8h27.9v-27.8h27.8v-27.9h-27.8z' })
					);
					break;
				case 'html5':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3-1.2 0.2-2.5 0.5-3.7 0.7-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#e34f26' }),
						React.createElement('path', { 'class': 'st1', d: 'm498.8 273.3c-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3-1.2 0.2-2.5 0.5-3.7 0.7l-134.8-135v-197.4l201-30.4 139.1 139.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'm138.6 133.6l20.1 227.9 90.2 30.1 90.7-30.1 20.1-227.9h-221.1zm177.4 73.6h-105.8l2.4 28.4h101.1l-7.8 85.4-56.4 15.5v0.2h-0.6l-56.9-15.6-3.5-43.6h27.5l2 21.9 30.8 8.3 30.9-8.3 3.5-35.8h-96.1l-7.4-83.8h138.8l-2.5 27.4z' })
					);
					break;
				case 'instagram':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7 0 0.3-0.1 0.6-0.2 0.9-0.2 1-0.4 1.9-0.5 2.9-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3-0.2 0-0.5 0.1-0.7 0.1l-3 0.6c-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#405de6' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.4 297.2c-0.2 1-0.4 1.9-0.5 2.9-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-23.4 81.3-87.1 145.6-168.2 169.8-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3-0.2 0-0.5 0.1-0.7 0.1l-151.5-152.7v-147l9.2-27 14.8-14 33-8 70-5 80.5 11.7 142.9 143.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'm252.7 192.1c-34.1 0-61.6 27.5-61.6 61.6s27.5 61.6 61.6 61.6 61.6-27.5 61.6-61.6-27.5-61.6-61.6-61.6zm0 101.6c-22 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm78.5-104.1c0 8-6.4 14.4-14.4 14.4s-14.4-6.4-14.4-14.4 6.4-14.4 14.4-14.4c7.9 0 14.4 6.4 14.4 14.4zm40.7 14.6c-0.9-19.2-5.3-36.3-19.4-50.3-14-14-31.1-18.4-50.3-19.4-19.8-1.1-79.2-1.1-99.1 0-19.2 0.9-36.2 5.3-50.3 19.3s-18.4 31.1-19.4 50.3c-1.1 19.8-1.1 79.2 0 99.1 0.9 19.2 5.3 36.3 19.4 50.3s31.1 18.4 50.3 19.4c19.8 1.1 79.2 1.1 99.1 0 19.2-0.9 36.3-5.3 50.3-19.4 14-14 18.4-31.1 19.4-50.3 1.2-19.9 1.2-79.2 0-99zm-25.6 120.2c-4.2 10.5-12.3 18.6-22.8 22.8-15.8 6.3-53.3 4.8-70.8 4.8s-55 1.4-70.8-4.8c-10.5-4.2-18.6-12.3-22.8-22.8-6.3-15.8-4.8-53.3-4.8-70.8s-1.4-55 4.8-70.8c4.2-10.5 12.3-18.6 22.8-22.8 15.8-6.3 53.3-4.8 70.8-4.8s55-1.4 70.8 4.8c10.5 4.2 18.6 12.3 22.8 22.8 6.3 15.8 4.8 53.3 4.8 70.8s1.5 55.1-4.8 70.8z' })
					);
					break;
				case 'linkedin':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7 0 0.3-0.1 0.6-0.2 0.9-0.2 1-0.4 1.9-0.5 2.9-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-1.5 5.3-3.2 10.5-5 15.6-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3h-0.2c-0.2 0-0.3 0.1-0.5 0.1l-3 0.6c-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#0077b5' }),
						React.createElement('path', { 'class': 'st1', d: 'm485 335.5c-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3h-0.2l-148.3-148.1 35.3-142.9-32-37.6 38.1-38.7 68 68.4h11.9l9.5 9.3 70.5-3.9 135 133.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm195.6 347.6h-46.9v-150.8h46.9v150.8zm-23.5-171.4c-15 0-27.1-12.4-27.1-27.4s12.2-27.1 27.1-27.1c15 0 27.1 12.2 27.1 27.1s-12.1 27.4-27.1 27.4zm198.9 171.4h-46.8v-73.4c0-17.5-0.4-39.9-24.4-39.9-24.4 0-28.1 19-28.1 38.7v74.7h-46.8v-150.9h44.9v20.6h0.7c6.3-11.9 21.5-24.4 44.3-24.4 47.4 0 56.1 31.2 56.1 71.8l0.1 82.8z' })
					);
					break;
				case 'pinterest':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7 0 0.3-0.1 0.6-0.2 0.9-0.1 0.4-0.2 0.8-0.2 1.2-0.1 0.6-0.2 1.1-0.2 1.7-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-1.5 5.3-3.2 10.5-5 15.6-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3h-0.2c-0.2 0-0.3 0.1-0.5 0.1l-3 0.6c-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-2.5 0.4-4.9 0.6-7.4 0.9-3.1 0.3-6.2 0.6-9.3 0.8-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#bd081c' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.2 298.4c-0.1 0.6-0.2 1.1-0.2 1.7-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-1.5 5.3-3.2 10.5-5 15.6-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-3.6 0.9-7.2 1.6-10.9 2.3h-0.2c-0.2 0-0.3 0.1-0.5 0.1l-3 0.6c-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-2.5 0.4-4.9 0.6-7.4 0.9l-93.8-94.3 17.2-85.1-43-45s-9-64-7-70 21-49 21-49 40-30 44-30 115.7 9.1 115.7 9.1l163.6 164z' }),
						React.createElement('path', { 'class': 'st2', d: 'm256.4 107.4c-61.4 0-122.1 40.9-122.1 107.2 0 42.1 23.7 66.1 38.1 66.1 5.9 0 9.3-16.5 9.3-21.2 0-5.6-14.2-17.4-14.2-40.6 0-48.1 36.6-82.3 84-82.3 40.8 0 70.9 23.2 70.9 65.7 0 31.8-12.8 91.4-54.1 91.4-14.9 0-27.7-10.8-27.7-26.2 0-22.6 15.8-44.5 15.8-67.9 0-39.6-56.2-32.4-56.2 15.4 0 10.1 1.3 21.2 5.7 30.4-8.3 35.6-25.1 88.5-25.1 125.2 0 11.3 1.6 22.4 2.7 33.8 2 2.3 1 2 4.1 0.9 30.2-41.3 29.1-49.4 42.7-103.4 7.4 14 26.4 21.6 41.5 21.6 63.6 0 92.1-62 92.1-117.8 0.2-59.5-51.2-98.3-107.5-98.3z' })
					);
					break;
				case 'reddit':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7 0 0.3-0.1 0.6-0.2 0.9-0.1 0.4-0.2 0.8-0.2 1.2-0.1 0.6-0.2 1.1-0.2 1.7-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-1.5 5.3-3.2 10.5-5 15.6-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-2.2 0.5-4.3 1-6.5 1.4-1.5 0.3-2.9 0.6-4.4 0.9h-0.2c-0.2 0-0.3 0.1-0.5 0.1l-3 0.6c-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-2.5 0.4-4.9 0.6-7.4 0.9-3.1 0.3-6.2 0.6-9.3 0.8-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.3-249.4c134 0 243.2 105.7 249 238.2 0.2 3.7 0.3 7.5 0.3 11.2z', fill: '#ff4500' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7 0 0.3-0.1 0.6-0.2 0.9-0.1 0.4-0.2 0.8-0.2 1.2-0.1 0.6-0.2 1.1-0.2 1.7-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-1.5 5.3-3.2 10.5-5 15.6-26.7 73.9-87.3 131.6-163.2 154.2-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-2.2 0.5-4.3 1-6.5 1.4l-160.5-160.7-4.9-82.2 103.7-48.3 25.7-100 70.3 15.7 32.3-12.4 131.3 132.7c0.1 3.6 0.2 7.4 0.2 11.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'm360.9 202.9c-9.3 0-17.4 3.8-23.4 9.8-22.1-15.3-51.8-25.1-84.7-26.1l17.1-77.1 54.5 12.2c0 13.3 10.9 24.2 24.2 24.2 13.6 0 24.5-11.2 24.5-24.5s-10.9-24.5-24.5-24.5c-9.5 0-17.7 5.7-21.8 13.6l-60.2-13.3c-3-0.8-6 1.4-6.8 4.4l-18.8 85c-32.7 1.4-62.1 11.2-84.2 26.4-6-6.2-14.5-10.1-23.7-10.1-34.4 0-45.6 46.1-14.1 61.8-1.1 4.9-1.6 10.1-1.6 15.3 0 51.8 58.3 93.7 129.9 93.7 71.9 0 130.2-42 130.2-93.7 0-5.2-0.6-10.6-1.9-15.5 30.8-15.8 19.4-61.6-14.7-61.6zm-192.1 65.1c0-13.6 10.9-24.5 24.5-24.5 13.3 0 24.2 10.9 24.2 24.5 0 13.3-10.9 24.2-24.2 24.2-13.6 0.1-24.5-10.8-24.5-24.2zm132.4 57.8c-22.5 22.5-85.9 22.5-108.4 0-2.5-2.2-2.5-6 0-8.5 2.2-2.2 6-2.2 8.2 0 17.2 17.6 74.1 17.9 92.1 0 2.2-2.2 6-2.2 8.2 0 2.4 2.5 2.4 6.3-0.1 8.5zm-0.5-33.5c-13.3 0-24.2-10.9-24.2-24.2 0-13.6 10.9-24.5 24.2-24.5 13.6 0 24.5 10.9 24.5 24.5 0 13.3-10.9 24.2-24.5 24.2z' })
					);
					break;
				case 'rss':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.7 3.3-1.5 6.5-2.3 9.7-0.6 2.3-1.2 4.5-1.9 6.8-3.9 13.5-8.9 26.6-15 39.1-21.5 44.5-55.8 81.7-98.2 106.6-1.6 0.9-3.1 1.8-4.7 2.7-15.8 8.8-32.6 16-50.3 21.3-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-0.8 0.2-1.7 0.4-2.5 0.6-2.8 0.6-5.5 1.2-8.3 1.7-1.2 0.2-2.5 0.5-3.7 0.7-1.8 0.3-3.6 0.6-5.4 0.9-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0.1-249.4-111.5-249.4-249.2s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#f26522' }),
						React.createElement('path', { 'class': 'st1', d: 'm372.1 468.4c-15.8 8.8-32.6 16-50.3 21.3-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-0.8 0.2-1.7 0.4-2.5 0.6l-148.7-148.4 44.2-47.3 171 170.1z' }),
						React.createElement('path', { 'class': 'st1', d: 'M475,359c-21.5,44.5-55.8,81.7-98.2,106.6h0L157.1,243.5l41-22.5l-48.6-59.1l151.6,24.8L475,359z' }),
						React.createElement('path', { 'class': 'st2', d: 'm214.8 324.9c0 18-14.6 32.6-32.6 32.6s-32.6-14.6-32.6-32.6 14.6-32.6 32.6-32.6 32.6 14.6 32.6 32.6zm89.5 24.1c-4.3-78.8-67.4-142-146.2-146.2-4.7-0.3-8.6 3.5-8.6 8.2v24.5c0 4.3 3.3 7.9 7.6 8.2 57 3.7 102.7 49.3 106.4 106.4 0.3 4.3 3.9 7.6 8.2 7.6h24.5c4.6-0.2 8.3-4.1 8.1-8.7zm73.5 0.1c-4.3-119.1-100.1-215.6-219.9-219.9-4.6-0.2-8.4 3.6-8.4 8.2v24.5c0 4.4 3.5 8 7.9 8.2 97.4 4 175.6 82.2 179.6 179.6 0.2 4.4 3.8 7.9 8.2 7.9h24.5c4.6-0.1 8.3-3.9 8.1-8.5z' })
					);
					break;
				case 'sharethis':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.3 1.6-0.7 3.2-1.1 4.8s-0.8 3.3-1.2 4.9c-0.6 2.3-1.2 4.5-1.9 6.8-3.9 13.5-8.9 26.6-15 39.1-21.5 44.5-55.8 81.7-98.2 106.6-1.6 0.9-3.1 1.8-4.7 2.7-13.5 7.5-27.8 13.9-42.8 18.9l-7.5 2.4c-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-0.8 0.2-1.7 0.4-2.5 0.6-2.8 0.6-5.5 1.2-8.3 1.7-1.2 0.2-2.5 0.5-3.7 0.7l-5.4 0.9c-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0.1-249.4-111.5-249.4-249.2s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#95D03A' }),
						React.createElement('path', { 'class': 'st1', d: 'm493.1 308.2c-0.4 1.6-0.8 3.3-1.2 4.9-0.6 2.3-1.2 4.5-1.9 6.8-3.9 13.5-8.9 26.6-15 39.1-21.5 44.5-55.8 81.7-98.2 106.6-1.6 0.9-3.1 1.8-4.7 2.7-13.5 7.5-27.8 13.9-42.8 18.9l-193.9-193.4 194.9-148.9 162.8 163.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm298.8 293.2c-11.3 0-21.7 3.9-29.9 10.5l-51.3-32.1c1.5-6.9 1.5-14 0-20.9l51.3-32.1c8.2 6.5 18.6 10.5 29.9 10.5 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48c0 3.6 0.4 7.1 1.1 10.4l-51.3 32.1c-8.2-6.5-18.6-10.5-29.9-10.5-26.5 0-48 21.5-48 48s21.5 48 48 48c11.3 0 21.7-3.9 29.9-10.5l51.3 32.1c-0.8 3.4-1.1 6.9-1.1 10.4 0 26.5 21.5 48 48 48s48-21.5 48-48c0.1-26.4-21.4-47.9-48-47.9z' })
					);
					break;
				case 'skype':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, version: '1.1', viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.8 250.7c0 7.6-0.4 15.2-1 22.6-0.2 2.2-0.4 4.4-0.7 6.6-0.1 0.6-0.1 1.1-0.2 1.7-0.3 2.6-0.7 5.2-1.1 7.7-0.4 2.3-0.8 4.7-1.2 7-0.2 1.3-0.5 2.5-0.7 3.8-0.2 0.8-0.4 1.6-0.5 2.5-0.1 0.3-0.1 0.5-0.2 0.8-0.3 1.6-0.7 3.2-1.1 4.8s-0.8 3.3-1.2 4.9c-0.6 2.3-1.2 4.5-1.9 6.8-0.6 2.1-1.3 4.3-1.9 6.4-3.6 11.2-7.9 22.2-13.1 32.7-21.5 44.5-55.8 81.7-98.2 106.6-1.6 0.9-3.1 1.8-4.7 2.7-13.5 7.5-27.8 13.9-42.8 18.9-0.3 0.1-0.6 0.2-0.8 0.3-2.2 0.7-4.4 1.4-6.7 2.1-3 0.9-6.1 1.8-9.2 2.6-1.5 0.4-3 0.8-4.5 1.1-0.8 0.2-1.7 0.4-2.5 0.6-2.8 0.6-5.5 1.2-8.3 1.7-1.2 0.2-2.5 0.5-3.7 0.7l-5.4 0.9c-0.2 0-0.3 0.1-0.5 0.1-0.9 0.1-1.9 0.3-2.8 0.4-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0.1-249.4-111.5-249.4-249.2s111.6-249.4 249.3-249.4 249.3 111.7 249.3 249.4z', fill: '#00aff0' }),
						React.createElement('path', { 'class': 'st1', d: 'm488.1 326.3c-3.6 11.2-7.9 22.2-13.1 32.7-21.5 44.5-55.8 81.7-98.2 106.6-1.6 0.9-3.1 1.8-4.7 2.7-13.5 7.5-27.8 13.9-42.8 18.9-0.3 0.1-0.6 0.2-0.8 0.3l-158.5-159.1s-11.5-120.5-11.5-123.5 38-43 38-43h125.8l165.8 164.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'm361 273.4c1.6-7.7 2.6-15.9 2.6-24.1 0-62.4-50.5-112.9-112.9-112.9-8.2 0-16.3 0.9-24.1 2.6-10.4-8.1-23.4-12.9-37.6-12.9-34 0-61.6 27.6-61.6 61.6 0 14.1 4.8 27.1 12.8 37.5-1.6 7.7-2.6 15.9-2.6 24.1 0 62.4 50.5 112.9 112.9 112.9 8.2 0 16.3-0.9 24.1-2.6 10.4 8 23.4 12.8 37.5 12.8 34 0 61.6-27.6 61.6-61.6 0.1-14-4.7-27-12.7-37.4zm-107.1 50.3c-36.1 0-66.3-16.1-66.3-35.7 0-8.8 4.9-16.8 16.2-16.8 17.2 0 18.8 24.7 48.5 24.7 14.1 0 23.3-6.3 23.3-14.5 0-10.3-8.8-11.9-23.1-15.4-34.4-8.5-64.8-12.1-64.8-48 0-32.6 32.2-44.6 60-44.6 30.3 0 60.9 12 60.9 30.5 0 9.3-6.3 17.5-16.7 17.5-15.6 0-16.1-18.4-41.2-18.4-14.1 0-23.1 3.8-23.1 12.4 0 10.9 11.4 12 38 18.1 22.8 5.1 49.9 14.7 49.9 42.7 0 32.4-31.4 47.5-61.6 47.5z' })
					);
					break;
				case 'soundcloud':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 5.9-1.7 11.7-2.8 17.5-0.1 0.3-0.1 0.7-0.2 1-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-23.4 81.3-87.1 145.6-168.2 169.8-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-2.1 0.4-4.1 0.8-6.2 1.2-3.1 0.6-6.3 1.1-9.5 1.5-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#ff8800' }),
						React.createElement('path', { 'class': 'st1', d: 'm490.1 318.4c-0.2 0.6-0.3 1.1-0.5 1.7-23.4 81.3-87.1 145.6-168.2 169.8-6.8 2-13.6 3.8-20.6 5.2l-211.8-213.4v-38.9l9.2 8.9 4.4-18.8 9.2 8.2 3.5-14.8 9.8 9.6 3.1-11 11 11.2 2.7-8.5 8.6 8.4 4.8-29.8 8.4 9.4 4.5-22.1 9.6 10.2 5.1-15.4 8.1 9.1 6.4-9.6 6.6 5.5 6.1-6.2 7.3 7.6 6.6-5.3 7.4 8.1 6.2-21.9 7.8 6.7 5.9-14.6 6 6.1 80.3 4.6 40.6 41.3 25.6 12.9 86.3 85.8z' }),
						React.createElement('path', { 'class': 'st2', d: 'm142.7 228.9l3 33.4-3 35.1c-0.2 1.3-1.1 2.3-2.3 2.3s-2.2-1-2.2-2.3l-2.9-35.1 2.9-33.4c0-1.1 1-2.2 2.2-2.2 1.1 0.1 2.1 1.1 2.3 2.2zm11-23.4c-1.4 0-2.4 1.1-2.6 2.6l-2.6 54.3 2.6 35.1c0.2 1.4 1.1 2.6 2.6 2.6 1.3 0 2.4-1.1 2.4-2.6l3-35.1-3-54.3c0-1.5-1.1-2.6-2.4-2.6zm13.1-12.4c-1.6 0-2.7 1.1-2.9 2.7l-2.3 66.9 2.3 34.9c0.2 1.6 1.3 2.7 2.9 2.7 1.4 0 2.7-1.1 2.7-2.7l2.7-34.9-2.7-66.9c0-1.6-1.3-2.7-2.7-2.7zm-77.8 49.7c-0.7 0-1.1 0.6-1.3 1.3l-2.4 18.3 2.4 18c0.2 0.7 0.6 1.3 1.3 1.3s1.1-0.6 1.3-1.3l2.9-18-2.9-18.4c-0.1-0.7-0.5-1.2-1.3-1.2zm12.2-11.3c-0.7 0-1.3 0.6-1.3 1.3l-3.3 29.6 3.3 28.9c0 0.9 0.6 1.4 1.3 1.4s1.3-0.6 1.4-1.3l3.7-29-3.7-29.6c-0.1-0.7-0.7-1.3-1.4-1.3zm13-5.9c-0.9 0-1.6 0.7-1.7 1.7l-3 35 3 33.9c0.2 0.9 0.9 1.6 1.7 1.6 0.9 0 1.6-0.7 1.6-1.6l3.6-33.9-3.6-35c0-1-0.7-1.7-1.6-1.7zm13-1.1c-1 0-1.9 0.7-1.9 1.9l-3 36 3 34.9c0 1.1 0.9 1.9 1.9 1.9s1.9-0.7 2-1.9l3.3-34.9-3.3-36c-0.1-1.2-1-1.9-2-1.9zm124.2-57.1c-0.6-0.4-1.4-0.7-2.2-0.7-1.1 0-2.2 0.4-2.9 1-1 0.9-1.6 2.2-1.7 3.4v0.4l-1.7 90.9 0.9 16.7 0.9 16.3c0.2 2.4 2.2 4.4 4.6 4.4s4.4-2 4.4-4.4l2-33-2-91.3c-0.2-1.5-1-3-2.3-3.7zm-13.7 7.9c-0.7-0.4-1.4-0.7-2.3-0.7-0.8 0-1.6 0.3-2.3 0.7-1.1 0.7-1.9 2-1.9 3.4l-0.2 0.9-1.4 82.7s0 0.2 1.6 33.8v0.2c0 0.9 0.3 1.7 0.9 2.4 0.9 1 2 1.6 3.3 1.6 1.1 0 2.2-0.6 2.9-1.3 0.9-0.7 1.3-1.7 1.3-2.9l0.2-3.4 1.6-30.2-1.7-83.8c-0.2-1.4-0.9-2.7-2-3.4zm-57.3 11.6c-1.6 0-3 1.4-3 3.1l-2.3 72.3 2.3 34.6c0.2 1.7 1.4 3 3 3 1.7 0 3-1.3 3.1-3l2.6-34.6-2.6-72.3c-0.1-1.7-1.4-3.1-3.1-3.1zm193.8 32.3c-5.6 0-10.9 1.1-15.7 3.1-3.3-36.4-33.9-65-71.2-65-9.2 0-18 1.7-25.9 4.8-3.1 1.1-4 2.3-4 4.7v128.5c0 2.6 2 4.4 4.4 4.7h112.3c22.3 0 40.4-18 40.4-40.3 0.1-22.3-18-40.5-40.3-40.5zm-152.7-31c-2.2 0-3.9 1.7-4 4l-1.7 70.3 1.7 33.8c0.2 2.2 1.9 3.9 4 3.9s3.9-1.7 3.9-3.9l2-33.8-2-70.3c-0.2-2.3-1.7-4-3.9-4zm-27.5-4.1c-1.7 0-3.3 1.6-3.3 3.4l-2 74.8 2 34.4c0.2 1.9 1.6 3.3 3.3 3.3 1.9 0 3.3-1.4 3.4-3.3l2.3-34.4-2.3-74.8c-0.2-1.8-1.6-3.4-3.4-3.4zm13.7 1.8c-2 0-3.6 1.6-3.6 3.6l-2 72.9 2 34.2c0.2 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6l2.2-34.2-2.2-72.9c-0.1-2.1-1.6-3.6-3.6-3.6z' })
					);
					break;
				case 'spotify':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.8 5.9-1.7 11.7-2.8 17.5 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-23.4 81.3-87.1 145.6-168.2 169.8-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-5.5 0.8-11.1 1.3-16.7 1.7-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#3DD466' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.6 299.6c0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-23.4 81.3-87.1 145.6-168.2 169.8-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8l-144.7-146.1-16.9-130.1 22.9-40 190.7-25.7 146.8 145.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'm253.1 116.9c-76.7 0-138.9 62.2-138.9 138.9s62.2 138.9 138.9 138.9 138.9-62.2 138.9-138.9-62.2-138.9-138.9-138.9zm56.4 204.4c-2.4 0-3.8-0.7-6-2-34.9-21.1-75.6-22-115.8-13.7-2.2 0.6-5 1.5-6.7 1.5-5.4 0-8.8-4.3-8.8-8.8 0-5.8 3.4-8.5 7.6-9.4 45.9-10.1 92.7-9.2 132.7 14.7 3.4 2.2 5.4 4.1 5.4 9.2s-3.9 8.5-8.4 8.5zm15-36.8c-2.9 0-4.9-1.3-6.9-2.4-35-20.7-87.2-29.1-133.6-16.5-2.7 0.7-4.1 1.5-6.7 1.5-6 0-10.9-4.9-10.9-10.9s2.9-10 8.7-11.6c15.6-4.4 31.5-7.6 54.8-7.6 36.3 0 71.5 9 99.1 25.5 4.5 2.7 6.3 6.2 6.3 11 0.1 6.1-4.7 11-10.8 11zm17.4-42.7c-2.9 0-4.7-0.7-7.2-2.2-39.9-23.8-111.2-29.5-157.3-16.6-2 0.6-4.5 1.5-7.2 1.5-7.4 0-13-5.8-13-13.2 0-7.6 4.7-11.9 9.7-13.4 19.7-5.8 41.8-8.5 65.8-8.5 40.9 0 83.7 8.5 115 26.8 4.4 2.5 7.2 6 7.2 12.7 0 7.5-6.2 12.9-13 12.9z' })
					);
					break;
				case 'stackoverflow':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', fill: '#f48024', d: 'm499.4 250.9c0 9.9-0.6 19.7-1.7 29.2-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-2.1 7.3-4.6 14.6-7.3 21.6-0.9 2.3-1.8 4.6-2.8 6.8-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-3 0.4-6 0.8-9 1.1-2.6 0.2-5.2 0.5-7.8 0.6-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z' }),
						React.createElement('path', { 'class': 'st1', d: 'm479.5 348.5c-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-3 0.4-6 0.8-9 1.1l-136.4-136.4 11.3-80.4 12.6-15.2 23.8 23.9 35.1 5.3-32.5-35.8 74.5 0.5-59.2-56.4 111.2 28.7-81.2-81.9 107 58.3 137.9 138.8z' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.3 296l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-2.1 7.3-4.6 14.6-7.3 21.6l-136.1-136.6-52.2-110.1 201.3 201z' }),
						React.createElement('path', { 'class': 'st2', d: 'm312.9 255.1l-108.3-50.5 10-21.8 108.4 50.6-10.1 21.7zm28.7-45.4l-91.7-76.7-15.2 18.4 91.7 76.7 15.2-18.4zm23.7-18.9l-71.3-95.8-19.1 14.3 71.3 95.8 19.1-14.3zm-54.2 70.9l-117-24.7-4.9 23.5 117 24.5 4.9-23.3zm18.9 77.1h-167.1v-71.7h-23.9v95.6h214.9v-95.6h-23.9v71.7zm-23.8-47.8h-119.5v23.7h119.5v-23.7z' })
					);
					break;
				case 'steam':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 7.6-0.4 15.2-1 22.5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-2.1 7.3-4.6 14.6-7.3 21.6-0.9 2.3-1.8 4.6-2.8 6.8-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-3 0.4-6 0.8-9 1.1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#00adee' }),
						React.createElement('path', { 'class': 'st1', d: 'm498.4 273.4c-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-2.1 7.3-4.6 14.6-7.3 21.6-0.9 2.3-1.8 4.6-2.8 6.8-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-3 0.4-6 0.8-9 1.1-0.4 0-0.8 0.1-1.2 0.1l-176.4-175.7 56.9-34 28.8-10.7 24 0.7 18.7-25.5 34-21.9-4-24.7 8-28 16.2-27.2 35.2-11.5 53.1 3.3 129.7 129.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'm361.9 203c0 22.6-18.4 40.7-40.7 40.7-22.6 0-40.7-18.2-40.7-40.7s18.2-40.7 40.7-40.7c22.3 0 40.7 18.2 40.7 40.7zm35 0.2c0 42.1-34 76-75.9 76l-73 53.3c-2.7 28.7-27 51.3-56.4 51.3-27 0-49.9-19.2-55.4-44.7l-38.4-15.4v-71.6l64.9 26.2c10.1-6.1 21.5-8.9 34.7-7.7l47.4-67.9c0.3-41.6 34.4-75.3 76.1-75.3 42-0.1 76 33.9 76 75.8zm-163.5 123.6c0-23.2-18.6-41.7-41.7-41.7-3 0-6 0.3-9 1l17.4 7c17 6.8 25.4 26 18.5 43.1-6.8 17-26.2 25.4-43.2 18.4-6.8-2.7-13.7-5.5-20.5-8.1 7 13.2 20.8 22.2 36.8 22.2 23.1-0.1 41.7-18.7 41.7-41.9zm138.5-123.6c0-28-22.9-50.9-50.9-50.9-28.2 0-51.1 22.8-51.1 50.9 0 28.2 22.9 50.9 51.1 50.9 28 0 50.9-22.7 50.9-50.9z' })
					);
					break;
				case 'stumbleUpon':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 7.6-0.4 15.2-1 22.5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.5 4.6-3.1 9.2-4.8 13.6-0.9 2.3-1.8 4.6-2.8 6.8-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#eb4924' }),
						React.createElement('path', { 'class': 'st1', d: 'm487.1 328.1c-1.5 4.6-3.1 9.2-4.8 13.6-0.9 2.3-1.8 4.6-2.8 6.8-28.8 67.7-86.7 120.1-158.1 141.4-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1l-166.1-166.1 4.7-58.7 30.7-28.2 38.6 39.5 19.3 4v-116.6l86.2-33.2 190.1 189.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm405.2 245.1v42.2c0 37.6-30.4 68-68 68-37.4 0-68-30.1-68-67.4v-42.5l20.8 9.7 30.9-9.2v42.7c0 8.9 7.3 16 16.2 16s16.2-7.1 16.2-16v-43.6h51.9zm-136-35.2l20.8 9.7 30.9-9.2v-21.5c0-36.6-30.9-66-67.8-66-36.8 0-67.8 29.2-67.8 65.5v98.3c0 9-7.3 16.2-16.2 16.2s-16.2-7.1-16.2-16.2v-41.5h-52v42.2c0 37.5 30.4 68 68 68 37.3 0 68-30 68-67.1v-97c0-8.9 7.3-16.2 16.2-16.2s16.2 7.3 16.2 16.2v18.6h-0.1z' })
					);
					break;
                case 'telegram':
                    return React.createElement(
                        'svg',
                        { version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('path', { 'class': 'st0', d: 'M499.4,250.9c0,2.2,0,4.4-0.1,6.6v0.4c-0.1,2.2-0.2,4.4-0.3,6.5c-0.1,1.3-0.1,2.6-0.2,4\n\tc-0.1,1.5-0.2,2.9-0.3,4.3c0,0.2,0,0.5-0.1,0.7c-0.2,2.2-0.4,4.5-0.7,6.7c-0.1,0.6-0.1,1.1-0.2,1.7c-0.6,4-1.2,7.9-1.8,11.9\n\tc-0.1,0.4-0.1,0.9-0.2,1.3c0,0.4-0.1,0.7-0.2,1v0.3c-0.2,1-0.4,2-0.5,3c0,0.1,0,0.2-0.1,0.3v0.1c0,0.2-0.1,0.4-0.1,0.6\n\tc-0.1,0.5-0.2,1-0.3,1.6c0,0.2-0.1,0.3-0.1,0.5c-1,4.4-2,8.8-3.1,13.2c-0.2,0.9-0.5,1.9-0.8,2.8c-0.2,0.6-0.3,1.1-0.5,1.7\n\tc-0.8,2.7-1.6,5.3-2.5,8c-1.4,4.2-2.8,8.5-4.4,12.5c-0.1,0.4-0.3,0.7-0.4,1.1c-0.9,2.3-1.8,4.6-2.8,6.8\n\tc-28.1,66.2-84.2,117.8-153.5,140c-0.5,0.2-0.9,0.3-1.3,0.4c-1.1,0.4-2.2,0.7-3.3,1c-2.9,0.9-5.9,1.6-8.8,2.4\n\tc-0.1,0-0.2,0.1-0.3,0.1c-1.4,0.4-2.8,0.8-4.2,1.1c-1.1,0.3-2.2,0.5-3.4,0.7c-1.3,0.3-2.6,0.6-3.9,0.9c-0.2,0.1-0.5,0.1-0.7,0.2\n\tc-1.5,0.3-2.9,0.5-4.3,0.8c-0.6,0.1-1.3,0.2-1.9,0.4c-0.2,0-0.3,0.1-0.5,0.1c-1.1,0.2-2.2,0.4-3.3,0.6c-1.9,0.3-3.8,0.6-5.7,0.8\n\tc-0.3,0-0.5,0.1-0.8,0.1c-2.7,0.4-5.5,0.7-8.2,1c-0.4,0-0.8,0.1-1.2,0.1c-0.3,0-0.6,0-0.9,0.1c-0.8,0.1-1.5,0.1-2.3,0.2\n\tc-0.1,0-0.1,0-0.2,0c-1,0.1-2.1,0.2-3.2,0.2c-0.8,0.1-1.6,0.1-2.4,0.1c-1.4,0.1-2.9,0.2-4.4,0.2c-3.6,0.1-7.2,0.2-10.8,0.2\n\tc-11,0-21.9-0.7-32.6-2.1C95.2,482.2,0.7,377.6,0.7,250.9C0.7,113.2,112.3,1.5,250.1,1.5c133.8,0,242.7,105.2,249,237.2\n\tc0.1,1.5,0.1,3,0.2,4.6C499.4,245.8,499.4,248.4,499.4,250.9z', fill: '#0088cc' }),
                        React.createElement('path', { 'class': 'st1', d: 'M498.5,272.7c0,0.2,0,0.5-0.1,0.7c-0.2,2.2-0.4,4.5-0.7,6.7c-0.1,0.6-0.1,1.1-0.2,1.7c-0.6,4-1.2,7.9-1.8,11.9\n\tc-0.1,0.4-0.1,0.9-0.2,1.3c0,0.4-0.1,0.7-0.2,1v0.3c-0.2,1-0.4,2-0.5,3c0,0.1,0,0.2-0.1,0.3v0.1c0,0.2-0.1,0.4-0.1,0.6\n\tc-0.1,0.5-0.2,1-0.3,1.6c0,0.2-0.1,0.3-0.1,0.5c-1,4.4-2,8.8-3.1,13.2c-0.2,0.9-0.5,1.9-0.8,2.8c-0.2,0.6-0.3,1.1-0.5,1.7\n\tc-0.8,2.7-1.6,5.3-2.5,8c-1.4,4.2-2.8,8.5-4.4,12.5c-0.1,0.4-0.3,0.7-0.4,1.1c-0.9,2.3-1.8,4.6-2.8,6.8\n\tc-28.1,66.2-84.2,117.8-153.5,140c-0.5,0.2-0.9,0.3-1.3,0.4c-1.1,0.4-2.2,0.7-3.3,1c-2.9,0.9-5.9,1.6-8.8,2.4\n\tc-0.1,0-0.2,0.1-0.3,0.1c-1.4,0.4-2.8,0.8-4.2,1.1c-1.1,0.3-2.2,0.5-3.4,0.7c-1.3,0.3-2.6,0.6-3.9,0.9c-0.2,0.1-0.5,0.1-0.7,0.2\n\tc-1.5,0.3-2.9,0.5-4.3,0.8c-0.6,0.1-1.3,0.2-1.9,0.4c-0.2,0-0.3,0.1-0.5,0.1c-1.1,0.2-2.2,0.4-3.3,0.6c-1.9,0.3-3.8,0.6-5.7,0.8\n\tc-0.3,0-0.5,0.1-0.8,0.1c-2.7,0.4-5.5,0.7-8.2,1c-0.4,0-0.8,0.1-1.2,0.1c-0.3,0-0.6,0-0.9,0.1L85.5,261.9l-2.9-3.7l288.5-109l0,0\n\tL498.5,272.7z' }),
                        React.createElement('path', { 'class': 'st2', d: 'M372.4,165.6l-43.9,207.1c-3.3,14.6-12,18.3-24.2,11.4l-66.9-49.3L205,365.9c-3.6,3.6-6.6,6.6-13.5,6.6\n\tl4.8-68.2l124-112.1c5.4-4.8-1.2-7.5-8.4-2.7l-153.3,96.6l-66-20.7c-14.4-4.5-14.6-14.4,3-21.2l258.2-99.5\n\tC365.8,140.2,376.3,147.4,372.4,165.6z' })
                    );
                    break;
				case 'tumblr':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 7.6-0.4 15.2-1 22.5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-5 0.3-10.1 0.4-15.2 0.4-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#35465c' }),
						React.createElement('path', { 'class': 'st1', d: 'm482.7 340.6c-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4l-106.7-108.2-12-97-36.6-37.4 99.1-118 214.2 212.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm327.8 383.6c-7.4 7.9-27.1 17.2-52.9 17.2-65.6 0-79.8-48.2-79.8-76.3v-78.2h-25.8c-3 0-5.4-2.4-5.4-5.4v-36.9c0-3.9 2.4-7.4 6.1-8.7 33.7-11.8 44.2-41.3 45.8-63.6 0.4-6 3.5-8.8 8.7-8.8h38.5c3 0 5.4 2.4 5.4 5.4v62.5h45c3 0 5.4 2.4 5.4 5.4v44.3c0 3-2.4 5.4-5.4 5.4h-45.3v72.3c0 18.6 12.9 29.1 36.9 19.4 2.6-1 4.9-1.7 6.9-1.2 1.9 0.5 3.1 1.8 4 4.3l11.9 34.9c1.2 2.8 2 5.9 0 8z' })
					);
					break;
				case 'twitter':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.7 0-249.3-111.6-249.3-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#1da1f2' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.3 257.5c-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-1.1 5.1-2.3 10.2-3.6 15.3-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-6.8 2-13.6 3.8-20.6 5.2-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2l-151.8-151.8 18 4.3 23.7-2 36-1-26.8-39.1 19.5 1.1-20-7.7 3.3-12.7-22.8-23.5 93.2-25.5 155-96.3 111.2 111.7z' }),
						React.createElement('path', { 'class': 'st2', d: 'm366.5 199.6c0.2 2.5 0.2 5.1 0.2 7.6 0 77.8-59.2 167.4-167.4 167.4-33.3 0-64.3-9.7-90.3-26.4 4.7 0.5 9.3 0.7 14.2 0.7 27.5 0 52.8-9.3 73-25.1-25.9-0.5-47.5-17.5-55-40.8 3.6 0.5 7.3 0.9 11.1 0.9 5.3 0 10.6-0.7 15.5-2-27-5.5-47.2-29.1-47.2-57.7v-0.7c7.8 4.4 16.9 7.1 26.6 7.5-15.8-10.6-26.2-28.6-26.2-49 0-10.9 2.9-20.9 8-29.7 29 35.7 72.5 59 121.3 61.6-0.9-4.4-1.5-8.9-1.5-13.5 0-32.4 26.2-58.8 58.8-58.8 16.9 0 32.2 7.1 43 18.6 13.3-2.5 26-7.5 37.3-14.2-4.4 13.7-13.7 25.1-25.9 32.4 11.8-1.3 23.3-4.6 33.9-9.1-7.9 11.5-17.9 21.9-29.4 30.3z' })
					);
					break;
				case 'vimeo':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5-3.8 1-7.6 1.9-11.5 2.7-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-2.2 0.2-4.4 0.4-6.6 0.5-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4 249.3 111.7 249.3 249.4z', fill: '#1ab7ea' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.2 301.9c-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5l-112.3-112.7-22.5-78.4-70.3-71.1 88.9-71.3 54.8 55.4 109.4-47.3 133.8 134.9z' }),
						React.createElement('path', { 'class': 'st2', d: 'm367.4 204.7c-1.2 26.6-19.8 63-55.7 109.2-37.1 48.3-68.5 72.4-94.2 72.4-15.9 0-29.4-14.7-40.4-44.1-21.5-78.8-30.6-124.9-48.3-124.9-2.1 0-9.2 4.3-21.5 12.9l-12.8-16.6c31.5-27.6 61.5-58.3 80.3-60 21.3-2.1 34.3 12.5 39.3 43.6 17.5 110.6 25.2 127.4 57.1 77.2 11.4-18 17.6-31.8 18.4-41.2 2.9-28-21.8-26.1-38.6-18.9 13.4-44 39.1-65.3 76.9-64.1 27.9 0.7 41.1 19 39.5 54.5z' })
					);
					break;
				case 'windows':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5-3.8 1-7.6 1.9-11.5 2.7-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.8 0-249.4-111.6-249.4-249.3s111.6-249.4 249.4-249.4c135.3 0 245.2 107.6 249.2 241.8 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#0078d7' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2l-0.6 3.3c0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5-3.8 1-7.6 1.9-11.5 2.7-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3l-157.8-156.3 20.5-71.6-20.5-28.6 106.7-103.1 11.7 11.7 141.9-32.8 125.7 124.6c0.1 2.4 0.1 5 0.1 7.5z' }),
						React.createElement('path', { 'class': 'st2', d: 'm113.3 154.6l106.7-14.7v103.1h-106.7v-88.4zm0 188.6l106.7 14.7v-101.8h-106.7v87.1zm118.4 16.2l141.9 19.6v-122.9h-141.9v103.3zm0-221.1v104.6h141.9v-124.2l-141.9 19.6z' })
					);
					break;
				case 'wordpress':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 5.4-0.5 10.7-0.9 15.9-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5-2.5 0.7-5 1.3-7.6 1.8-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c135.3 0 245.2 107.6 249.2 241.8 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#21759b' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.2 296.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-3 0.9-6.1 1.7-9.1 2.5-2.5 0.7-5 1.3-7.6 1.8-72.7-73.6-156.6-158.5-158.3-160.2l-0.7-7.3-17.5-29.2-7-28.5-1.2-21.9 2.4-34.7 12.3-27 18.3-27.7 21-19.3 25-13.3 31.5-9 34.8-1.8 42.5 10.5 39.4 24.4 147.9 147.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'm145.9 199.6l55.9 153c-39.1-18.9-66-59-66-105.3-0.1-17 3.6-33.1 10.1-47.7zm185.9 41.8c0-14.5-5.2-24.5-9.6-32.3-5.9-9.6-11.5-17.8-11.5-27.5 0-10.8 8.1-20.8 19.6-20.8 0.5 0 1 0.1 1.5 0.1-20.9-19.1-48.6-30.8-79.1-30.8-40.9 0-76.9 21-97.9 52.8 2.8 0.1 5.3 0.2 7.5 0.2 12.2 0 31.2-1.5 31.2-1.5 6.3-0.4 7 8.9 0.8 9.6 0 0-6.3 0.7-13.4 1.1l42.7 126.8 25.6-76.8-18.2-50c-6.3-0.4-12.3-1.1-12.3-1.1-6.3-0.4-5.6-10 0.7-9.6 0 0 19.3 1.5 30.8 1.5 12.2 0 31.2-1.5 31.2-1.5 6.3-0.4 7 8.9 0.8 9.6 0 0-6.3 0.7-13.4 1.1l42.3 125.9 11.7-39c5.2-16.2 9-27.8 9-37.8zm-77 16.1l-35.1 102.1c10.5 3.1 21.6 4.8 33.1 4.8 13.6 0 26.7-2.4 38.9-6.7-0.3-0.5-0.6-1-0.8-1.6l-36.1-98.6zm100.7-66.4c0.5 3.7 0.8 7.7 0.8 12.1 0 11.9-2.2 25.2-8.9 41.9l-35.8 103.4c34.8-20.3 58.2-58 58.2-101.2 0.1-20.4-5.1-39.5-14.3-56.2zm33.8 56.2c0 75.3-61.3 136.5-136.5 136.5-75.3 0-136.5-61.3-136.5-136.5 0-75.3 61.2-136.5 136.5-136.5 75.2 0 136.5 61.2 136.5 136.5zm-6.3 0c0-71.8-58.4-130.2-130.2-130.2s-130.2 58.4-130.2 130.2 58.4 130.2 130.2 130.2 130.2-58.4 130.2-130.2z' })
					);
					break;
				case 'yahoo':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-2.5 0.7-5 1.3-7.6 1.8-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c135.3 0 245.2 107.6 249.2 241.8 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#410093' }),
						React.createElement('path', { 'class': 'st1', d: 'm498.8 268.4c-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6-1 4.6-2.1 9.2-3.2 13.7-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4l-83.4-82.6 13.2-74.2-5-73-64.7-104v-30.4l93.7 92.5 92.1-92.5 140.1 140.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm262.8 288.7l2.2 121c-7-1.2-12.9-2.1-17.8-2.1-4.6 0-10.6 0.9-17.8 2.1l2.2-121c-30.2-52.1-60.6-108.2-95.6-160.6 6.5 1.7 12.7 2.1 18.3 2.1 5 0 11.2-0.4 18.8-2.1 22.5 39.7 45.2 76.3 74.3 124.1 20.5-33.9 50.1-79.3 74.2-124.1 6.1 1.6 12.1 2.1 18.1 2.1 6.3 0 12.8-0.6 19.3-2.1-19.1 26.4-72.6 119.3-96.2 160.6z' })
					);
					break;
				case 'youtube':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-3.1 0.6-6.3 1.1-9.5 1.5-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c135.3 0 245.2 107.6 249.2 241.8 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#ff0000' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.2 302.4c-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1l-166.1-166.8 65.5-130 155.9-24.1 130.6 129.8z' }),
						React.createElement('path', { 'class': 'st2', d: 'm374 188.8c-2.9-10.9-11.4-19.5-22.3-22.4-19.7-5.3-98.6-5.3-98.6-5.3s-78.9 0-98.6 5.3c-10.9 2.9-19.4 11.5-22.3 22.4-5.3 19.8-5.3 61.1-5.3 61.1s0 41.3 5.3 61.1c2.9 10.9 11.4 19.2 22.3 22.1 19.7 5.3 98.6 5.3 98.6 5.3s78.9 0 98.6-5.3c10.9-2.9 19.4-11.2 22.3-22.1 5.3-19.8 5.3-61.1 5.3-61.1s0-41.3-5.3-61.1zm-146.7 98.6v-75l65.9 37.5-65.9 37.5z' })
					);
					break;
				case 'xing':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-1.2 0.2-2.5 0.5-3.8 0.7-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c133.8 0 242.7 105.2 249 237.2 0.1 1.5 0.1 3 0.2 4.6 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#026466' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3 0 0.2-0.1 0.5-0.1 0.7-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-1.2 0.2-2.5 0.5-3.8 0.7l-180.6-180.6 70.7-58.1-8.7-62.6 12.2-27.8 59.2 58.8 33.9 3.8 87-125.1 135.1 133.2c0.1 1.5 0.1 3 0.2 4.6 0.1 2.4 0.1 5 0.1 7.5z' }),
						React.createElement('path', { 'class': 'st2', d: 'm219.7 227.1c-1.2 2.3-17.2 30.3-47.9 84.3-3.3 5.7-7.4 8.5-12.1 8.5h-44.5c-5.3 0-8.3-5.1-5.8-9.8l47.1-82.8c0.1 0 0.1-0.1 0-0.2l-30-51.6c-2.9-5.3 0.2-9.6 5.8-9.6h44.5c5 0 9.1 2.8 12.3 8.3l30.6 52.9zm150.2-111.9l-98.3 172.8v0.2l62.5 113.8c2.7 4.8 0.1 9.6-5.8 9.6h-44.5c-5.2 0-9.3-2.7-12.3-8.3l-63.1-115.1c2.3-4 35.2-62 98.9-174.3 3.1-5.5 7.1-8.3 11.9-8.3h44.9c5.4-0.1 8.4 4.5 5.8 9.6z' })
					);
					break;
				case 'mixcloud':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.8-1.4 9.5-2.2 14.2v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-3.3 0.6c-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c133.8 0 242.7 105.2 249 237.2 0.1 1.5 0.1 3 0.2 4.6 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#52aad8' }),
						React.createElement('path', { 'class': 'st1', d: 'm494.7 299.7c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-185.3-186.4-2.1-9.2s-8-46.4-8-47.9 10.1-15 10.1-15l14.4-16.5 22-14.5 8.5-10.5 18-25s16.5-8.5 18-8.5 33.5-9 33.5-9l53.7 9.2 76.8 75.8 18.6-12.5 31.6 31.9 0.5-50.1 90.8 91.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm310 224.5c-4.4-45-42.5-80.3-88.7-80.3-38.3 0-72.1 24.6-84.3 60.4-28.9 4.3-51.2 29-51.2 59.1 0 33 26.8 59.8 59.9 59.8h153.3c27.7 0 50.3-22.4 50.3-50.1 0.1-24-16.9-44.1-39.3-48.9zm-10.8 76.5h-153.4c-20.7 0-37.5-16.7-37.5-37.4s16.9-37.4 37.5-37.4c10 0 19.3 4 26.4 11 10.6 10.6 26.5-5.4 16-16-7.8-7.6-17.3-12.9-27.6-15.5 10.6-23.5 34.3-39.1 60.7-39.1 36.8 0 66.7 29.9 66.7 66.5 0 7.2-1.2 14.2-3.4 21-4.7 14.6 17 20.6 21.3 7 1.5-4.4 2.6-8.9 3.4-13.5 10.3 4 17.7 13.9 17.7 25.6 0 15.3-12.5 27.8-27.8 27.8zm124.4-27.7c0 23.3-6.7 45.7-19.6 64.9-2.2 3.2-5.7 5-9.4 5-8.6 0-14.4-10-9.2-17.4 10.3-15.5 15.8-33.7 15.8-52.5s-5.6-36.9-15.8-52.3c-8.3-12.1 10.2-25 18.6-12.5 12.8 19 19.6 41.5 19.6 64.8zm-37.5 0c0 16.7-4.8 32.8-14.2 46.8-2.2 3.2-5.7 4.8-9.4 4.8-9.1 0-14.3-10-9.2-17.4 6.9-10.1 10.4-21.8 10.4-34.2 0-12.2-3.5-24-10.4-34.2-8.3-12.2 10.1-24.9 18.6-12.5 9.3 13.8 14.2 30 14.2 46.7z' })
					);
					break;
				case 'goodreads':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6-0.1 3.7-0.3 7.3-0.5 10.9-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-3.3 0.6c-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3s-2.2 0.2-3.4 0.2c-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c133.8 0 242.7 105.2 249 237.2 0.1 1.5 0.1 3 0.2 4.6 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#553b08' }),
						React.createElement('path', { 'class': 'st1', d: 'm495.5 295c0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1l-128.3-128.1 38.5 9 53.3 2-84-85.1-7.8-12.9s-3.5-20-4.2-24.9-7.3-15.8-7.3-26.5 2.7-34 2.7-34l8.8-28 16.5-17.3s14-10 16.7-8.8 24.7-8.5 28.7-8.5 35.3 9.3 37.3 8.5 24.6 32.1 24.6 32.1l23-45.6 168.7 169.6z' }),
						React.createElement('path', { 'class': 'st2', d: 'm164 330.4h1.5c6.6 0 13.3 0 19.9 0.1 0.8 0 1.6-0.2 1.9 1.1 3.7 18.2 15.7 28.5 32.8 33.4 14 4 28.2 4.1 42.4 0.9 17.6-3.9 29.2-14.8 35.5-31.5 4.2-11.2 5.6-22.9 5.7-34.7 0.1-3 0.2-24.5-0.1-27.6l-0.5-0.2c-0.4 0.8-0.9 1.5-1.3 2.3-11.5 22.5-32 35.2-55 36.1-53.8 2.1-88.4-29.8-89.8-92-0.3-12.4 0.9-24.5 4.3-36.4 10.8-37.1 38.9-61.7 80.3-62 32-0.2 53 20.2 60.7 36.7 0.3 0.6 0.7 1.2 1.3 1v-32.2h23.1c0 146.3 0.1 173.4 0.1 173.4-0.1 41-13.9 75-53.8 84.7-36.3 8.8-83 2.5-102.3-29.9-4.1-7-6.1-14.8-6.7-23.2zm76.4-191.5c-27.4-0.3-56.6 21.2-60 69.9-2.1 30.8 7.7 63.8 37.3 77.6 14.4 6.7 38.8 7.8 56.5-4.5 24.9-17.3 32.7-50.6 28.6-80.4-5.1-37.3-25-62.8-62.4-62.6z' })
					);
					break;
				case 'twitch':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 3.6-0.3 7-0.5 10.5-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-3.3 0.6c-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3h-0.2c-1 0.1-2.1 0.2-3.2 0.2-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c133.8 0 242.7 105.2 249 237.2 0.1 1.5 0.1 3 0.2 4.6 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#6441a5' }),
						React.createElement('path', { 'class': 'st1', d: 'm499.3 257.9c-0.1 3.6-0.3 7-0.5 10.5-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.3 66.6-84.9 118.5-154.8 140.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-3.3 0.6c-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3h-0.2l-141.5-142.9 26.5-209.4 162-4 56.2-10.2 125.1 124.9z' }),
						React.createElement('path', { 'class': 'st2', d: 'm146.7 133l-17.2 44v179.7h61.2v32.5h34.3l32.5-32.5h49.7l66.9-66.9v-156.8h-227.4zm204.5 145.3l-38.2 38.2h-61.2l-32.5 32.5v-32.5h-51.6v-160.6h183.5v122.4zm-38.3-78.4v66.8h-22.9v-66.8h22.9zm-61.1 0v66.8h-22.9v-66.8h22.9z' })
					);
					break;
				case 'vk':
					return React.createElement(
						'svg',
						{ version: '1.1', 'class': 'sab-' + icon, viewBox: '0 0 500 500.7', xmlns: 'http://www.w3.org/2000/svg' },
						React.createElement('path', { 'class': 'st0', d: 'm499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 2.2-0.2 4.4-0.3 6.5-0.1 1.3-0.1 2.6-0.2 4-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.1 66.2-84.2 117.8-153.5 140-0.5 0.2-0.9 0.3-1.3 0.4-1.1 0.4-2.2 0.7-3.3 1-2.9 0.9-5.9 1.6-8.8 2.4-0.1 0-0.2 0.1-0.3 0.1-1.4 0.4-2.8 0.8-4.2 1.1-1.1 0.3-2.2 0.5-3.4 0.7-1.3 0.3-2.6 0.6-3.9 0.9-0.2 0.1-0.5 0.1-0.7 0.2-1.5 0.3-2.9 0.5-4.3 0.8-0.6 0.1-1.3 0.2-1.9 0.4-0.2 0-0.3 0.1-0.5 0.1l-3.3 0.6c-1.9 0.3-3.8 0.6-5.7 0.8-0.3 0-0.5 0.1-0.8 0.1-2.7 0.4-5.5 0.7-8.2 1-0.4 0-0.8 0.1-1.2 0.1-1.1 0.1-2.1 0.2-3.2 0.3h-0.2c-1 0.1-2.1 0.2-3.2 0.2-0.8 0.1-1.6 0.1-2.4 0.1-1.4 0.1-2.9 0.2-4.4 0.2-3.6 0.1-7.2 0.2-10.8 0.2-137.9 0-249.5-111.6-249.5-249.3s111.6-249.4 249.4-249.4c133.8 0 242.7 105.2 249 237.2 0.1 1.5 0.1 3 0.2 4.6 0.1 2.5 0.1 5.1 0.1 7.6z', fill: '#45668e' }),
						React.createElement('path', { 'class': 'st1', d: 'm499 264.4c-0.1 1.3-0.1 2.6-0.2 4-0.1 1.7-0.2 3.3-0.4 5-0.2 2.2-0.4 4.5-0.7 6.7-0.1 0.6-0.1 1.1-0.2 1.7-0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6-0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5-1 4.4-2 8.8-3.1 13.2-0.2 0.9-0.5 1.9-0.8 2.8-0.2 0.6-0.3 1.1-0.5 1.7-0.8 2.7-1.6 5.3-2.5 8-1.4 4.2-2.8 8.5-4.4 12.5-0.1 0.4-0.3 0.7-0.4 1.1-0.9 2.3-1.8 4.6-2.8 6.8-28.1 66.2-84.2 117.8-153.5 140l-168.4-167.3-31-85 14.6-64.7 78.4 81.7 48-84 73 64 65.5-62.1 92.7 93.3z' }),
						React.createElement('path', { 'class': 'st2', d: 'm408.9 182.6c2.3-7.7 0-13.4-11-13.4h-36.4c-9.3 0-13.5 4.9-15.8 10.3 0 0-18.5 45.2-44.8 74.5-8.5 8.5-12.4 11.2-17 11.2-2.3 0-5.8-2.7-5.8-10.4v-72.2c0-9.3-2.6-13.4-10.3-13.4h-57.3c-5.8 0-9.3 4.3-9.3 8.3 0 8.8 13.1 10.8 14.5 35.5v53.7c0 11.7-2.1 13.9-6.7 13.9-12.4 0-42.4-45.4-60.2-97.3-3.6-10.1-7.1-14.2-16.4-14.2h-36.5c-10.4 0-12.5 4.9-12.5 10.3 0 9.6 12.4 57.6 57.6 120.9 30.1 43.2 72.5 66.6 111.1 66.6 23.2 0 26-5.2 26-14.2 0-41.3-2.1-45.2 9.5-45.2 5.4 0 14.7 2.7 36.3 23.6 24.7 24.7 28.8 35.8 42.7 35.8h36.4c10.4 0 15.6-5.2 12.6-15.5-6.9-21.6-53.7-66-55.8-68.9-5.4-6.9-3.8-10 0-16.2 0 0.1 44.5-62.5 49.1-83.7z' })
					);
					break;
				case 'medium':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 2.2-0.2 4.4-0.3 6.5 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 -0.2 2.2-0.4 4.5-0.7 6.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -1 4.4-2 8.8-3.1 13.2 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -1.4 0.4-2.8 0.8-4.2 1.1 -1.1 0.3-2.2 0.5-3.4 0.7 -1.3 0.3-2.6 0.6-3.9 0.9 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.9 0.3-3.8 0.6-5.7 0.8 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.4 0-0.8 0.1-1.2 0.1 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#00ab6c' }),
						React.createElement('path', { 'class': 'st1', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 2.2-0.2 4.4-0.3 6.5 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 -0.2 2.2-0.4 4.5-0.7 6.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -1 4.4-2 8.8-3.1 13.2 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -1.4 0.4-2.8 0.8-4.2 1.1 -1.1 0.3-2.2 0.5-3.4 0.7 -1.3 0.3-2.6 0.6-3.9 0.9 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.9 0.3-3.8 0.6-5.7 0.8 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.4 0-0.8 0.1-1.2 0.1 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3L103.4 366.4l49.6-19.1 -5-142 13-38 32.8-37.6L294 227.3l18-43 90.4-54.6 95.7 95.7c0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z' }),
						React.createElement('path', { 'class': 'st2', d: 'M138.8 178c0.4-3.6-1.1-7.3-3.8-9.8l-27.9-33.6v-5h86.7l67 147 58.9-147h82.7v5l-23.9 22.9c-2 1.5-3.1 4.1-2.7 6.7v168.2c-0.4 2.5 0.6 5.1 2.7 6.7l23.3 22.9v5H284.6v-5l24.2-23.4c2.3-2.3 2.3-3.1 2.3-6.7V195.9l-67.2 170.6h-9.1l-78.1-170.6v114.3c-0.7 4.8 0.9 9.6 4.3 13.1l31.4 38.1v5h-89v-4.9l31.4-38.1c3.3-3.5 4.9-8.3 4-13.1V178z' })
					);
					break;
				case 'quora':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 2.2-0.2 4.4-0.3 6.5 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 -0.2 2.2-0.4 4.5-0.7 6.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1.1 0.3-2.2 0.5-3.4 0.7 -1.3 0.3-2.6 0.6-3.9 0.9 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.9 0.3-3.8 0.6-5.7 0.8 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.4 0-0.8 0.1-1.2 0.1 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#a82400' }),
						React.createElement('path', { 'class': 'st1', d: 'M492.4 310.1c-0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3l-159-158.9L148 202.2l37-43 29-12.9 35.5-14.1 77.2 14.1L492.4 310.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'M402.8 352.4h-19.1c-1 8.8-6.9 20.1-21.5 20.1 -13.4 0-23-9.3-32.3-23.4 28.9-22.3 48.8-57.1 48.8-99.9 0.1-76.7-63.1-128.4-129.5-128.4 -65.1 0-129 52-129 128.4 0 87.5 85.7 144.6 162.5 123.4 12.9 21.9 29.8 40.7 62.1 40.7C398.1 413.3 403.9 364.2 402.8 352.4zM309.1 314.9c-12.7-19.1-28.5-34.1-59.7-34.1 -19.9 0-35.4 6.5-45 14.9l8 15.9c4-2 8.5-2.6 12.9-2.6 23.2 0 35.1 20.1 45.2 40 -6.5 2-13.5 2.7-21.3 2.7 -49 0-70.2-34.6-70.2-102.3 0-68.1 21.2-103.1 70.2-103.1 49.7 0 71 34.9 71 102.9C320.1 276.6 316.5 298.6 309.1 314.9z' })
					);
					break;
				case 'meetup':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 2.2-0.2 4.4-0.3 6.5 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.2 2-0.4 4.1-0.6 6.1 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5h0c-0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.4 0-0.8 0.1-1.2 0.1 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#e0393e' }),
						React.createElement('path', { 'class': 'st1', d: 'M302 495c-0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5h0l-140.6-141 8-10.7L302 495z' }),
						React.createElement('path', { 'class': 'st1', d: 'M498.3 274c-0.2 2-0.4 4.1-0.6 6.1 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6L187.5 377.4l-5.5-15 -42.2-40.8 6.4-21.2 -47.4-48.2 16.1-23.9 20.6 20.8 14.8 6.7v-15.4l-4-30.4 33.3-28.1 -27.2-29.3 17.7-12.6 14.5 14 46.8-13.5 -45-46 10-11.3 40.1 39.2 69 26.7 -33.7-36L296 98l80.8 81.8 21.9-5L498.3 274z' }),
						React.createElement('path', { 'class': 'st2', d: 'M156.7 350.1c0.7 3.7-1.5 7.2-5.2 8 -3.5 0.7-7.1-1.5-7.8-5.2 -0.7-3.5 1.5-7.2 5-8S155.9 346.4 156.7 350.1zM249.3 396.3c-4.1 3-5.2 8.7-2.4 13 3 4.3 8.7 5.4 13 2.4 4.1-3 5.2-8.7 2.2-13C259.4 394.5 253.6 393.3 249.3 396.3L249.3 396.3zM193.7 96.9c4.1-0.9 6.7-5 5.8-9.1 -0.7-4.3-4.8-6.9-8.9-5.9 -4.1 0.9-6.7 5-5.9 9.1C185.6 95.3 189.6 97.9 193.7 96.9L193.7 96.9zM114.8 228.3c-6.5-4.5-15.3-2.8-19.8 3.9 -4.5 6.5-2.8 15.5 3.7 20 6.5 4.6 15.3 3 19.8-3.7C123 241.8 121.3 232.9 114.8 228.3zM291 117.7c6.9-4.1 8.9-13 5-19.6 -4.1-6.9-12.8-9.1-19.4-5 -6.7 4.1-8.9 13-4.8 19.8C275.6 119.5 284.3 121.7 291 117.7L291 117.7zM167.2 155.2c5-3.5 6.1-10.4 2.8-15.3 -3.3-5-10.2-6.1-15-2.8 -5 3.5-6.1 10.4-2.8 15.3C155.6 157.5 162.4 158.6 167.2 155.2zM408.3 256.2c-4.8 1.1-8 5.9-6.9 10.9 0.9 4.8 5.8 8 10.6 6.9 4.8-0.9 8-5.8 6.9-10.7C417.9 258.5 413.1 255.3 408.3 256.2zM434 219.5c-0.7-3.7-4.3-5.9-7.8-5.2 -3.7 0.7-5.9 4.5-5.2 8.2 0.7 3.5 4.3 5.9 8 5.2C432.5 226.6 434.9 223.2 434 219.5zM382 171.7c-5.6 3.9-6.9 11.5-3.2 17 3.7 5.6 11.3 6.9 16.8 3.2 5.4-3.9 6.7-11.5 3-17C395 169.3 387.4 167.9 382 171.7zM377.9 262c17 27.9 9.8 64.8-17 83.6 -11.3 8-24 11.5-36.8 11.1 -7.8 30.5-44.9 41.8-68.1 21.1 -0.7 0.6-1.7 1.1-2.4 1.9 -25.3 17.5-59.8 11.3-77.3-14.4 -6.3-9.3-9.5-19.8-9.8-30.4 -42.3-7.1-58.3-60.9-26.6-90.5 -18.3-30.4 0.4-69.5 34.6-74.4 16.3-42.9 69.7-63.2 105.9-35.1 43.6-14.4 88.3 19 84.8 65.5C391.8 208.5 399.4 243.7 377.9 262zM332.6 310.1c-2-13.3-26.5-3-27.9-17.5 -2-20.7 28.3-65.5 25.9-82.9 -2.2-15.5-12.6-18.8-21.6-19 -8.7-0.2-10.9 1.3-13.9 3 -1.9 1.1-4.3 3.2-7.6-0.2 -4.1-3.9-7.2-7.6-12.6-8.4 -8-1.3-11.5 1.3-17.2 6.3 -2.2 1.9-7.8 8.4-13 5.9 -2.2-1.1-10-5-15.5-7.4 -10.6-4.6-25.9 3-31.5 13 -8.4 14.8-24.6 73.2-27 81 -5.6 17.2 7.1 31.5 23.9 30.5 7.2-0.4 11.8-3 16.4-11.3 2.6-4.8 27-69.7 28.9-72.9 1.3-2.2 5.8-5.2 9.5-3.3 3.7 2 4.5 6.1 3.9 9.8 -0.7 6.3-18.1 45.9-18.7 50.3 -2.2 14.8 17.4 17.2 25 2.6 2.4-4.6 29.6-60 32-63.7 2.8-4.1 4.8-5.4 7.6-5.2 2 0 5.4 0.6 4.6 7.1 -0.9 6.1-22.7 46.8-25.2 56.8 -3 13.3 4.3 26.8 16.1 32.8C302.1 321 335.2 327.5 332.6 310.1L332.6 310.1zM336.3 369.9c-6.7 4.8-8.4 14.2-3.7 21.1 4.6 6.9 13.9 8.5 20.7 3.9 6.9-4.8 8.5-14.2 3.9-21.1C352.4 366.9 343.2 365 336.3 369.9z' })
					);
					break;
				case 'user_email':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 1.8-0.2 3.6-0.2 5.3 0 0.4 0 0.8-0.1 1.2 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.2 2-0.4 4.1-0.6 6.1 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1 -0.1 0-0.1 0-0.2 0 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#F97E2A' }),
						React.createElement('path', { 'class': 'st1', d: 'M499.1 263.2c0 0.4 0 0.8-0.1 1.2 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.2 2-0.4 4.1-0.6 6.1 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1L119.9 344.1l105.3-46.7L119.9 191.6l265.6-41.2L499.1 263.2z' }),
						React.createElement('path', { 'class': 'st2', d: 'M390.1 214.1c2.1-1.7 5.3-0.1 5.3 2.6v112c0 14.5-11.8 26.3-26.3 26.3H141.2c-14.5 0-26.3-11.8-26.3-26.3v-112c0-2.7 3.1-4.3 5.3-2.6 12.3 9.5 28.5 21.6 84.4 62.2 11.6 8.4 31.1 26.2 50.5 26.1 19.6 0.2 39.4-18 50.6-26.1C361.6 235.7 377.8 223.6 390.1 214.1zM255.1 284.8c12.7 0.2 31-16 40.2-22.7 72.7-52.8 78.2-57.4 95-70.5 3.2-2.5 5-6.3 5-10.4v-10.4c0-14.5-11.8-26.3-26.3-26.3H141.2c-14.5 0-26.3 11.8-26.3 26.3v10.4c0 4.1 1.9 7.8 5 10.4 16.8 13.1 22.3 17.7 95 70.5C224.1 268.8 242.4 285 255.1 284.8L255.1 284.8z' })
					);
					break;
				case 'snapchat':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 1.8-0.2 3.6-0.2 5.3 0 0.4 0 0.8-0.1 1.2 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.2 2-0.4 4.1-0.6 6.1 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.2 0.9-0.4 1.8-0.6 2.7 -0.4 1.7-0.8 3.4-1.2 5.1 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1h-0.2c-1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#fffc00' }),
						React.createElement('path', { 'class': 'st1', d: 'M493.6 305.1c-0.4 1.7-0.8 3.4-1.2 5.1 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1.5 0.3-2.9 0.5-4.3 0.8 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1h0L100.8 322.2l88.7-33.7 -53.7-53 15.2-4.3 47 13 110.4-123.4L493.6 305.1z' }),
						React.createElement('path', { 'class': 'st2', d: 'M403 325.1c-3.1 7.2-16.1 12.5-39.9 16.2 -1.2 1.6-2.2 8.7-3.8 14.2 -1 3.3-3.3 5.2-7.2 5.2l-0.2 0c-5.6 0-11.4-2.6-23-2.6 -15.7 0-21.1 3.6-33.3 12.2 -12.9 9.1-25.3 17-43.8 16.2 -18.7 1.4-34.3-10-43.1-16.2 -12.3-8.7-17.6-12.2-33.3-12.2 -11.2 0-18.2 2.8-23 2.8 -4.8 0-6.6-2.9-7.3-5.3 -1.6-5.4-2.6-12.6-3.9-14.3 -12.2-1.9-39.8-6.7-40.5-19 -0.2-3.2 2.1-6 5.3-6.5 41.2-6.8 59.7-49 60.5-50.8 0-0.1 0.1-0.2 0.1-0.3 2.2-4.5 2.7-8.2 1.5-11.1 -3-7-15.9-9.6-21.3-11.7 -14-5.5-16-11.9-15.2-16.3 1.4-7.6 12.9-12.3 19.5-9.1 5.3 2.5 10 3.7 13.9 3.7 3 0 4.9-0.7 5.9-1.3 -1.2-21.3-4.2-51.6 3.4-68.6 20-44.8 62.3-48.3 74.8-48.3 0.6 0 5.4-0.1 6-0.1 30.9 0 60.5 15.8 75 48.3 7.6 17 4.6 47.2 3.4 68.6 0.9 0.5 2.6 1.1 5.1 1.3 3.8-0.2 8.2-1.4 13.1-3.7 3.6-1.7 8.5-1.5 12.1 0l0 0c5.6 2 9.1 6 9.2 10.6 0.1 5.8-5 10.7-15.3 14.8 -1.3 0.5-2.8 1-4.4 1.5 -5.8 1.8-14.6 4.6-16.9 10.2 -1.2 2.9-0.7 6.6 1.5 11.1 0.1 0.1 0.1 0.2 0.1 0.3 0.8 1.8 19.3 44.1 60.5 50.8C402.2 316.3 405 320.3 403 325.1L403 325.1z' })
					);
					break;
				case '500px':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 1.8-0.2 3.6-0.2 5.3 0 0.4 0 0.8-0.1 1.2 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.1 1.5-0.3 3-0.4 4.5 0 0.6-0.1 1.1-0.2 1.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1 0.2-1.9 0.3-2.8 0.5 -0.5 0.1-1 0.2-1.5 0.3 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1 -0.1 0-0.1 0-0.2 0 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#0099e5' }),
						React.createElement('path', { 'class': 'st1', d: 'M497.9 278.4c0 0.6-0.1 1.1-0.2 1.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.7 4.4-1.3 8.8-2 13.2 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.9 0.4-2.9 0.7 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1 0.2-1.9 0.3-2.8 0.5L161.4 360l-28.6-65.8 4.3-16.4 30.2 30.5 9.8-21.2 18.5 18.7 6.6-13.7v-34L163 217.9l4.3-48.6 10.7-60.7 137.3-10L497.9 278.4z' }),
						React.createElement('path', { 'class': 'st2', d: 'M164 301.1c-3.9-8.6-4.2-11.1 4.5-14 15.5-4.8 4.8 5.6 26.1 29.7h0.2v-56.8c0.7-30.4 26.6-55.7 59.1-55.7 32.6 0 59.1 26.3 59.1 58.5 0 38.3-36.8 68.4-77.7 56.4 -6.3-2.5-1.3-19.2 5.1-17.3 32 0 54.1-6.1 54.1-38.9 0-36.9-46.6-54.2-70.7-27 -14.2 16-10.6 25.5-10.6 95.3 30.7 18.7 71.5 13.3 97-12.2 15-15 23.3-35.1 23.3-56.2 0-21.3-8.3-41.2-23.5-56.4 -15-15-34.9-23.3-56.4-23.3s-41.6 8.3-56.5 23.3c-0.2 0.2-9.7 10-12.8 14.4l-0.3 0.4c-2 2.8-3.8 5.5-12.2 3.7 -4.2-1-8.6-3.5-8.6-7.1V105c0-3 2.4-6.3 6.3-6.3h145.9c5 0 5 7 5 9.1 0 2.4 0 9.1-5 9.1H180.3v80.4h0.2c63-66.4 171-21.8 171 65.8C351.5 370.8 203.5 396.3 164 301.1L164 301.1zM202.3 143.4c-0.3 2.5 2.8 14.8 8.8 12.5 75.5-28.7 122.6 24.4 126.6 24.4 2.9 0 13.8-9.3 8.6-13.8C290 112.7 204.5 132 202.3 143.4L202.3 143.4zM339.1 343.6c-66.5 66.4-180.8 36.8-200.7-63 0-7.4-18.4-4.5-17.5 2C135.4 387.5 269.7 438 351.6 356 355.8 351.3 344 338.8 339.1 343.6L339.1 343.6zM230.7 278.3c0 2.4 2.6 4.4 3.3 5.1 1.8 1.8 3.7 2.7 5.1 2.7 2.3 0 1.6 0.1 13.5-11.8 11.9 11.7 11.5 11.8 13.5 11.8 3.3 0 11.2-6.3 6.5-11l-10.5-10.5 11-11c3.8-4.1-6.1-13.2-9.8-9.5l-10.8 10.8c-11.2-11.4-11.1-11.8-13-11.8 -3 0-10.9 7.1-7.5 10.5l11 11C232.1 275.4 230.7 276.2 230.7 278.3z' })
					);
					break;
				case 'mastodont':
					return React.createElement(
						'svg',
						{ 'class': 'sab-' + icon, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500.7' },
						React.createElement('path', { 'class': 'st0', d: 'M499.4 250.9c0 2.2 0 4.4-0.1 6.6v0.4c-0.1 1.8-0.2 3.6-0.2 5.3 0 0.4 0 0.8-0.1 1.2 -0.1 1.3-0.1 2.6-0.2 4 -0.1 1.7-0.2 3.3-0.4 5 0 0.2 0 0.4-0.1 0.6 -0.1 1.5-0.3 3-0.4 4.5 0 0.6-0.1 1.1-0.2 1.7 -0.1 0.6-0.1 1.1-0.2 1.7 -0.5 3-0.9 6-1.3 8.9 -0.2 1.4-0.4 2.9-0.7 4.3 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.8 0.4-2.8 0.7 0 0-0.1 0-0.1 0 -0.3 0.1-0.7 0.2-1 0.2 -0.2 0.1-0.5 0.1-0.7 0.2 -1 0.2-1.9 0.3-2.8 0.5 -0.5 0.1-1 0.2-1.5 0.3 -0.6 0.1-1.3 0.2-1.9 0.4 -0.2 0-0.3 0.1-0.5 0.1 -1.1 0.2-2.2 0.4-3.3 0.6 -1.2 0.2-2.4 0.4-3.5 0.5 -0.7 0.1-1.4 0.2-2.1 0.3 -0.3 0-0.5 0.1-0.8 0.1 -2.7 0.4-5.5 0.7-8.2 1 -0.3 0-0.7 0.1-1 0.1 -0.1 0-0.1 0-0.2 0 -1.1 0.1-2.1 0.2-3.2 0.3 -0.1 0-0.1 0-0.2 0 -1 0.1-2.1 0.2-3.2 0.2 -0.8 0.1-1.6 0.1-2.4 0.1 -1.4 0.1-2.9 0.2-4.4 0.2 -3.6 0.1-7.2 0.2-10.8 0.2 -4.3 0-8.7-0.1-13-0.3C105.4 493.1 0.7 384.3 0.7 250.9 0.7 113.2 112.3 1.5 250.1 1.5c129.3 0 235.3 98.2 248 223.9 0.5 4.4 0.8 8.9 1 13.3 0.1 1.5 0.1 3 0.2 4.6C499.4 245.8 499.4 248.4 499.4 250.9z', fill: '#2b90d9' }),
						React.createElement('path', { 'class': 'st1', d: 'M496.2 290.8c-0.2 1.4-0.4 2.9-0.7 4.3 0 0.4-0.1 0.7-0.2 1v0.3c-0.2 1-0.4 2-0.5 3 0 0.1 0 0.2-0.1 0.3v0.1c0 0.2-0.1 0.4-0.1 0.6 -0.1 0.5-0.2 1-0.3 1.6 0 0.2-0.1 0.3-0.1 0.5 -0.6 2.6-1.2 5.2-1.8 7.8 -0.4 1.8-0.9 3.6-1.3 5.5 -0.2 0.9-0.5 1.9-0.8 2.8 -0.2 0.6-0.3 1.1-0.5 1.7 -0.8 2.7-1.6 5.3-2.5 8 -1.4 4.2-2.8 8.5-4.4 12.5 -0.1 0.4-0.3 0.7-0.4 1.1 -0.9 2.3-1.8 4.6-2.8 6.8 -28.1 66.2-84.2 117.8-153.5 140 -0.5 0.2-0.9 0.3-1.3 0.4 -1.1 0.4-2.2 0.7-3.3 1 -2.9 0.9-5.9 1.6-8.8 2.4 -0.1 0-0.2 0.1-0.3 0.1 -0.4 0.1-0.7 0.2-1.1 0.3 -1 0.3-2.1 0.6-3.1 0.8 -1 0.3-2 0.5-3.1 0.6 -0.1 0-0.2 0-0.3 0.1 -1 0.2-1.8 0.4-2.8 0.7L166.6 357.9l-13-59c0 0-2-103 0-109s20-38 20-38l100-15 73.1 5.1L496.2 290.8z' }),
						React.createElement('path', { 'class': 'st2', d: 'M374.6 208.5c0-55.8-36.6-72.2-36.6-72.2 -35.9-16.5-131.2-16.3-166.7 0 0 0-36.6 16.4-36.6 72.2 0 66.4-3.8 148.9 60.6 165.9 23.2 6.1 43.2 7.5 59.3 6.5 29.2-1.6 45.5-10.4 45.5-10.4l-1-21.2c0 0-20.8 6.5-44.3 5.8 -23.2-0.8-47.6-2.5-51.4-31 -0.3-2.5-0.5-5.2-0.5-8 49.1 12 91 5.2 102.6 3.8 32.2-3.8 60.3-23.7 63.8-41.8C375.1 249.7 374.6 208.5 374.6 208.5L374.6 208.5zM331.5 280.4h-26.7v-65.6c0-28.5-36.7-29.6-36.7 4v35.9h-26.6v-35.9c0-33.6-36.7-32.5-36.7-4v65.6h-26.8c0-70.1-3-84.9 10.6-100.5 14.9-16.6 45.8-17.7 59.6 3.5l6.7 11.2 6.7-11.2c13.8-21.3 44.8-20 59.6-3.5C334.6 195.6 331.5 210.4 331.5 280.4L331.5 280.4z' })
					);
					break;
			}
		}
	}]);

	return SAB_Social_Icon;
}();

exports.default = SAB_Social_Icon;

/***/ })
/******/ ]);