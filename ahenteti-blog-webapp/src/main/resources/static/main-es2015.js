(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/post/post-pages/post-pages.module": "./src/app/modules/post/post-pages/post-pages.module.ts",
	"./modules/user/user.module": "./src/app/modules/user/user.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/simplemde/dist/simplemde.min.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/simplemde/dist/simplemde.min.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/**\n * simplemde v1.11.2\n * Copyright Next Step Webs, Inc.\n * @link https://github.com/NextStepWebs/simplemde-markdown-editor\n * @license MIT\n */\n.CodeMirror{color:#000}\n.CodeMirror-lines{padding:4px 0}\n.CodeMirror pre{padding:0 4px}\n.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}\n.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}\n.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}\n.CodeMirror-guttermarker{color:#000}\n.CodeMirror-guttermarker-subtle{color:#999}\n.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}\n.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}\n.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}\n.cm-fat-cursor div.CodeMirror-cursors{z-index:1}\n.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}\n@-webkit-keyframes blink{50%{background-color:transparent}}\n@keyframes blink{50%{background-color:transparent}}\n.cm-tab{display:inline-block;text-decoration:inherit}\n.CodeMirror-ruler{border-left:1px solid #ccc;position:absolute}\n.cm-s-default .cm-header{color:#00f}\n.cm-s-default .cm-quote{color:#090}\n.cm-negative{color:#d44}\n.cm-positive{color:#292}\n.cm-header,.cm-strong{font-weight:700}\n.cm-em{font-style:italic}\n.cm-link{text-decoration:underline}\n.cm-strikethrough{text-decoration:line-through}\n.cm-s-default .cm-keyword{color:#708}\n.cm-s-default .cm-atom{color:#219}\n.cm-s-default .cm-number{color:#164}\n.cm-s-default .cm-def{color:#00f}\n.cm-s-default .cm-variable-2{color:#05a}\n.cm-s-default .cm-variable-3{color:#085}\n.cm-s-default .cm-comment{color:#a50}\n.cm-s-default .cm-string{color:#a11}\n.cm-s-default .cm-string-2{color:#f50}\n.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}\n.cm-s-default .cm-builtin{color:#30a}\n.cm-s-default .cm-bracket{color:#997}\n.cm-s-default .cm-tag{color:#170}\n.cm-s-default .cm-attribute{color:#00c}\n.cm-s-default .cm-hr{color:#999}\n.cm-s-default .cm-link{color:#00c}\n.cm-invalidchar,.cm-s-default .cm-error{color:red}\n.CodeMirror-composing{border-bottom:2px solid}\ndiv.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}\n.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}\n.CodeMirror-activeline-background{background:#e8f2ff}\n.CodeMirror{position:relative;overflow:hidden;background:#fff}\n.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}\n.CodeMirror-sizer{position:relative;border-right:30px solid transparent}\n.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}\n.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}\n.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}\n.CodeMirror-scrollbar-filler{right:0;bottom:0}\n.CodeMirror-gutter-filler{left:0;bottom:0}\n.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}\n.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}\n.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}\n.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}\n.CodeMirror-lines{cursor:text;min-height:1px}\n.CodeMirror pre{border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:none}\n.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}\n.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}\n.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}\n.CodeMirror-code{outline:0}\n.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}\n.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}\n.CodeMirror-cursor{position:absolute}\n.CodeMirror-measure pre{position:static}\ndiv.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}\n.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}\n.CodeMirror-selected{background:#d9d9d9}\n.CodeMirror-focused .CodeMirror-selected,.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}\n.CodeMirror-focused .CodeMirror-selected,.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}\n.CodeMirror-crosshair{cursor:crosshair}\n.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}\n.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}\n.cm-force-border{padding-right:.1px}\n@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}\n.cm-tab-wrap-hack:after{content:''}\nspan.CodeMirror-selectedtext{background:0 0}\n.CodeMirror{height:auto;min-height:300px;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1}\n.CodeMirror-scroll{min-height:300px}\n.CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9}\n.CodeMirror-sided{width:50%!important}\n.editor-toolbar{position:relative;opacity:.6;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}\n.editor-toolbar:after,.editor-toolbar:before{display:block;content:' ';height:1px}\n.editor-toolbar:before{margin-bottom:8px}\n.editor-toolbar:after{margin-top:8px}\n.editor-toolbar:hover,.editor-wrapper input.title:focus,.editor-wrapper input.title:hover{opacity:.8}\n.editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}\n.editor-toolbar.fullscreen::before{width:20px;height:50px;background:linear-gradient(to right,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}\n.editor-toolbar.fullscreen::after{width:20px;height:50px;background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);position:fixed;top:0;right:0;margin:0;padding:0}\n.editor-toolbar a{display:inline-block;text-align:center;text-decoration:none!important;color:#2c3e50!important;width:30px;height:30px;margin:0;border:1px solid transparent;border-radius:3px;cursor:pointer}\n.editor-toolbar a.active,.editor-toolbar a:hover{background:#fcfcfc;border-color:#95a5a6}\n.editor-toolbar a:before{line-height:30px}\n.editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}\n.editor-toolbar a.fa-header-x:after{font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}\n.editor-toolbar a.fa-header-1:after{content:\"1\"}\n.editor-toolbar a.fa-header-2:after{content:\"2\"}\n.editor-toolbar a.fa-header-3:after{content:\"3\"}\n.editor-toolbar a.fa-header-bigger:after{content:\"▲\"}\n.editor-toolbar a.fa-header-smaller:after{content:\"▼\"}\n.editor-toolbar.disabled-for-preview a:not(.no-disable){pointer-events:none;background:#fff;border-color:transparent;text-shadow:inherit}\n@media only screen and (max-width:700px){.editor-toolbar a.no-mobile{display:none}}\n.editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}\n.editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}\n.editor-preview,.editor-preview-side{padding:10px;background:#fafafa;overflow:auto;display:none;box-sizing:border-box}\n.editor-statusbar .lines:before{content:'lines: '}\n.editor-statusbar .words:before{content:'words: '}\n.editor-statusbar .characters:before{content:'characters: '}\n.editor-preview{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7}\n.editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;border:1px solid #ddd}\n.editor-preview-active,.editor-preview-active-side{display:block}\n.editor-preview-side>p,.editor-preview>p{margin-top:0}\n.editor-preview pre,.editor-preview-side pre{background:#eee;margin-bottom:10px}\n.editor-preview table td,.editor-preview table th,.editor-preview-side table td,.editor-preview-side table th{border:1px solid #ddd;padding:5px}\n.CodeMirror .CodeMirror-code .cm-tag{color:#63a35c}\n.CodeMirror .CodeMirror-code .cm-attribute{color:#795da3}\n.CodeMirror .CodeMirror-code .cm-string{color:#183691}\n.CodeMirror .CodeMirror-selected{background:#d9d9d9}\n.CodeMirror .CodeMirror-code .cm-header-1{font-size:200%;line-height:200%}\n.CodeMirror .CodeMirror-code .cm-header-2{font-size:160%;line-height:160%}\n.CodeMirror .CodeMirror-code .cm-header-3{font-size:125%;line-height:125%}\n.CodeMirror .CodeMirror-code .cm-header-4{font-size:110%;line-height:110%}\n.CodeMirror .CodeMirror-code .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}\n.CodeMirror .CodeMirror-code .cm-link{color:#7f8c8d}\n.CodeMirror .CodeMirror-code .cm-url{color:#aab2b3}\n.CodeMirror .CodeMirror-code .cm-strikethrough{text-decoration:line-through}\n.CodeMirror .CodeMirror-placeholder{opacity:.5}\n.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zaW1wbGVtZGUvZGlzdC9zaW1wbGVtZGUubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTtBQUNGLFlBQVksVUFBVTtBQUFDLGtCQUFrQixhQUFhO0FBQUMsZ0JBQWdCLGFBQWE7QUFBQyx1REFBdUQscUJBQXFCO0FBQUMsb0JBQW9CLDJCQUEyQixDQUFDLHdCQUF3QixDQUFDLGtCQUFrQjtBQUFDLHVCQUF1QixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGtCQUFrQjtBQUFDLHlCQUF5QixVQUFVO0FBQUMsZ0NBQWdDLFVBQVU7QUFBQyxtQkFBbUIsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsT0FBTztBQUFDLDJDQUEyQyw0QkFBNEI7QUFBQyxrQ0FBa0MsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGVBQWU7QUFBQyxzQ0FBc0MsU0FBUztBQUFDLHVCQUF1QixVQUFVLENBQUMsUUFBUSxDQUFDLCtDQUErQyxDQUE4Qyx1Q0FBdUMsQ0FBQyxxQkFBcUI7QUFBeUQseUJBQXlCLElBQUksNEJBQTRCLENBQUM7QUFBQyxpQkFBaUIsSUFBSSw0QkFBNEIsQ0FBQztBQUFDLFFBQVEsb0JBQW9CLENBQUMsdUJBQXVCO0FBQUMsa0JBQWtCLDBCQUEwQixDQUFDLGlCQUFpQjtBQUFDLHlCQUF5QixVQUFVO0FBQUMsd0JBQXdCLFVBQVU7QUFBQyxhQUFhLFVBQVU7QUFBQyxhQUFhLFVBQVU7QUFBQyxzQkFBc0IsZUFBZTtBQUFDLE9BQU8saUJBQWlCO0FBQUMsU0FBUyx5QkFBeUI7QUFBQyxrQkFBa0IsNEJBQTRCO0FBQUMsMEJBQTBCLFVBQVU7QUFBQyx1QkFBdUIsVUFBVTtBQUFDLHlCQUF5QixVQUFVO0FBQUMsc0JBQXNCLFVBQVU7QUFBQyw2QkFBNkIsVUFBVTtBQUFDLDZCQUE2QixVQUFVO0FBQUMsMEJBQTBCLFVBQVU7QUFBQyx5QkFBeUIsVUFBVTtBQUFDLDJCQUEyQixVQUFVO0FBQUMsbURBQW1ELFVBQVU7QUFBQywwQkFBMEIsVUFBVTtBQUFDLDBCQUEwQixVQUFVO0FBQUMsc0JBQXNCLFVBQVU7QUFBQyw0QkFBNEIsVUFBVTtBQUFDLHFCQUFxQixVQUFVO0FBQUMsdUJBQXVCLFVBQVU7QUFBQyx3Q0FBd0MsU0FBUztBQUFDLHNCQUFzQix1QkFBdUI7QUFBQywrQ0FBK0MsVUFBVTtBQUFDLGtEQUFrRCxVQUFVO0FBQUMsd0JBQXdCLDZCQUE2QjtBQUFDLGtDQUFrQyxrQkFBa0I7QUFBQyxZQUFZLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxlQUFlO0FBQUMsbUJBQW1CLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCO0FBQUMsa0JBQWtCLGlCQUFpQixDQUFDLG1DQUFtQztBQUFDLHFHQUFxRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsWUFBWTtBQUFDLHVCQUF1QixPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjtBQUFDLHVCQUF1QixRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjtBQUFDLDZCQUE2QixPQUFPLENBQUMsUUFBUTtBQUFDLDBCQUEwQixNQUFNLENBQUMsUUFBUTtBQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTO0FBQUMsbUJBQW1CLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUI7QUFBQywyQkFBMkIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFlLENBQWYsZ0JBQWdCO0FBQUMsOEJBQThCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUztBQUFDLHVCQUF1QixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsU0FBUztBQUFDLGtCQUFrQixXQUFXLENBQUMsY0FBYztBQUFDLGdCQUE2RCxlQUFlLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsdUNBQXVDLENBQXFDLDJCQUEyQjtBQUFDLHFCQUFxQixvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUI7QUFBQywyQkFBMkIsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVM7QUFBQyx1QkFBdUIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWE7QUFBQyxpQkFBaUIsU0FBUztBQUFDLG1HQUErSCxzQkFBc0I7QUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO0FBQUMsbUJBQW1CLGlCQUFpQjtBQUFDLHdCQUF3QixlQUFlO0FBQUMsdUJBQXVCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVM7QUFBQyxzRUFBc0Usa0JBQWtCO0FBQUMscUJBQXFCLGtCQUFrQjtBQUFDLDJKQUE0SSxrQkFBa0I7QUFBOUosNElBQTRJLGtCQUFrQjtBQUFDLHNCQUFzQixnQkFBZ0I7QUFBQyxrSEFBa0gsa0JBQWtCO0FBQUMsY0FBYyxlQUFlLENBQUMsNkJBQTZCO0FBQUMsaUJBQWlCLGtCQUFrQjtBQUFDLGFBQWEsbUNBQW1DLGlCQUFpQixDQUFDO0FBQUMsd0JBQXdCLFVBQVU7QUFBQyw2QkFBNkIsY0FBYztBQUFDLFlBQVksV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUFDLDhCQUE4QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUztBQUFDLG1CQUFtQixnQkFBZ0I7QUFBQyx1QkFBdUIsZUFBZSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUztBQUFDLGtCQUFrQixtQkFBbUI7QUFBQyxnQkFBZ0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkI7QUFBQyw2Q0FBNkMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBQUMsdUJBQXVCLGlCQUFpQjtBQUFDLHNCQUFzQixjQUFjO0FBQUMsMEZBQTBGLFVBQVU7QUFBQywyQkFBMkIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUztBQUFDLG1DQUFtQyxVQUFVLENBQUMsV0FBVyxDQUFtZCxtRkFBbUYsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUztBQUFDLGtDQUFrQyxVQUFVLENBQUMsV0FBVyxDQUFtZCxtRkFBbUYsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUztBQUFDLGtCQUFrQixvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjO0FBQUMsaURBQWlELGtCQUFrQixDQUFDLG9CQUFvQjtBQUFDLHlCQUF5QixnQkFBZ0I7QUFBQyw0QkFBNEIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFlBQVk7QUFBQyxvQ0FBb0MsdURBQXVELENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLE9BQU87QUFBQyxvQ0FBb0MsV0FBVztBQUFDLG9DQUFvQyxXQUFXO0FBQUMsb0NBQW9DLFdBQVc7QUFBQyx5Q0FBeUMsV0FBVztBQUFDLDBDQUEwQyxXQUFXO0FBQUMsd0RBQXdELG1CQUFtQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUI7QUFBQyx5Q0FBeUMsNEJBQTRCLFlBQVksQ0FBQztBQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtBQUFDLHVCQUF1QixvQkFBb0IsQ0FBQyxhQUFhLENBQUMsZUFBZTtBQUFDLHFDQUFxQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBcUI7QUFBQyxnQ0FBZ0MsaUJBQWlCO0FBQUMsZ0NBQWdDLGlCQUFpQjtBQUFDLHFDQUFxQyxzQkFBc0I7QUFBQyxnQkFBZ0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVM7QUFBQyxxQkFBcUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMscUJBQXFCO0FBQUMsbURBQW1ELGFBQWE7QUFBQyx5Q0FBeUMsWUFBWTtBQUFDLDZDQUE2QyxlQUFlLENBQUMsa0JBQWtCO0FBQUMsOEdBQThHLHFCQUFxQixDQUFDLFdBQVc7QUFBQyxxQ0FBcUMsYUFBYTtBQUFDLDJDQUEyQyxhQUFhO0FBQUMsd0NBQXdDLGFBQWE7QUFBQyxpQ0FBaUMsa0JBQWtCO0FBQUMsMENBQTBDLGNBQWMsQ0FBQyxnQkFBZ0I7QUFBQywwQ0FBMEMsY0FBYyxDQUFDLGdCQUFnQjtBQUFDLDBDQUEwQyxjQUFjLENBQUMsZ0JBQWdCO0FBQUMsMENBQTBDLGNBQWMsQ0FBQyxnQkFBZ0I7QUFBQyx5Q0FBeUMsMEJBQTBCLENBQUMsaUJBQWlCO0FBQUMsc0NBQXNDLGFBQWE7QUFBQyxxQ0FBcUMsYUFBYTtBQUFDLCtDQUErQyw0QkFBNEI7QUFBQyxvQ0FBb0MsVUFBVTtBQUFDLHFGQUFxRiw0QkFBNEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL3NpbXBsZW1kZS9kaXN0L3NpbXBsZW1kZS5taW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzaW1wbGVtZGUgdjEuMTEuMlxuICogQ29weXJpZ2h0IE5leHQgU3RlcCBXZWJzLCBJbmMuXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vTmV4dFN0ZXBXZWJzL3NpbXBsZW1kZS1tYXJrZG93bi1lZGl0b3JcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4uQ29kZU1pcnJvcntjb2xvcjojMDAwfS5Db2RlTWlycm9yLWxpbmVze3BhZGRpbmc6NHB4IDB9LkNvZGVNaXJyb3IgcHJle3BhZGRpbmc6MCA0cHh9LkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciwuQ29kZU1pcnJvci1zY3JvbGxiYXItZmlsbGVye2JhY2tncm91bmQtY29sb3I6I2ZmZn0uQ29kZU1pcnJvci1ndXR0ZXJze2JvcmRlci1yaWdodDoxcHggc29saWQgI2RkZDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7d2hpdGUtc3BhY2U6bm93cmFwfS5Db2RlTWlycm9yLWxpbmVudW1iZXJ7cGFkZGluZzowIDNweCAwIDVweDttaW4td2lkdGg6MjBweDt0ZXh0LWFsaWduOnJpZ2h0O2NvbG9yOiM5OTk7d2hpdGUtc3BhY2U6bm93cmFwfS5Db2RlTWlycm9yLWd1dHRlcm1hcmtlcntjb2xvcjojMDAwfS5Db2RlTWlycm9yLWd1dHRlcm1hcmtlci1zdWJ0bGV7Y29sb3I6Izk5OX0uQ29kZU1pcnJvci1jdXJzb3J7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICMwMDA7Ym9yZGVyLXJpZ2h0Om5vbmU7d2lkdGg6MH0uQ29kZU1pcnJvciBkaXYuQ29kZU1pcnJvci1zZWNvbmRhcnljdXJzb3J7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHNpbHZlcn0uY20tZmF0LWN1cnNvciAuQ29kZU1pcnJvci1jdXJzb3J7d2lkdGg6YXV0bztib3JkZXI6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDojN2U3fS5jbS1mYXQtY3Vyc29yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnN7ei1pbmRleDoxfS5jbS1hbmltYXRlLWZhdC1jdXJzb3J7d2lkdGg6YXV0bztib3JkZXI6MDstd2Via2l0LWFuaW1hdGlvbjpibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTstbW96LWFuaW1hdGlvbjpibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTthbmltYXRpb246YmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7YmFja2dyb3VuZC1jb2xvcjojN2U3fUAtbW96LWtleWZyYW1lcyBibGlua3s1MCV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH19QC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rezUwJXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX1Aa2V5ZnJhbWVzIGJsaW5rezUwJXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX0uY20tdGFie2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjppbmhlcml0fS5Db2RlTWlycm9yLXJ1bGVye2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2NjO3Bvc2l0aW9uOmFic29sdXRlfS5jbS1zLWRlZmF1bHQgLmNtLWhlYWRlcntjb2xvcjojMDBmfS5jbS1zLWRlZmF1bHQgLmNtLXF1b3Rle2NvbG9yOiMwOTB9LmNtLW5lZ2F0aXZle2NvbG9yOiNkNDR9LmNtLXBvc2l0aXZle2NvbG9yOiMyOTJ9LmNtLWhlYWRlciwuY20tc3Ryb25ne2ZvbnQtd2VpZ2h0OjcwMH0uY20tZW17Zm9udC1zdHlsZTppdGFsaWN9LmNtLWxpbmt7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uY20tc3RyaWtldGhyb3VnaHt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdofS5jbS1zLWRlZmF1bHQgLmNtLWtleXdvcmR7Y29sb3I6IzcwOH0uY20tcy1kZWZhdWx0IC5jbS1hdG9te2NvbG9yOiMyMTl9LmNtLXMtZGVmYXVsdCAuY20tbnVtYmVye2NvbG9yOiMxNjR9LmNtLXMtZGVmYXVsdCAuY20tZGVme2NvbG9yOiMwMGZ9LmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUtMntjb2xvcjojMDVhfS5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTN7Y29sb3I6IzA4NX0uY20tcy1kZWZhdWx0IC5jbS1jb21tZW50e2NvbG9yOiNhNTB9LmNtLXMtZGVmYXVsdCAuY20tc3RyaW5ne2NvbG9yOiNhMTF9LmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nLTJ7Y29sb3I6I2Y1MH0uY20tcy1kZWZhdWx0IC5jbS1tZXRhLC5jbS1zLWRlZmF1bHQgLmNtLXF1YWxpZmllcntjb2xvcjojNTU1fS5jbS1zLWRlZmF1bHQgLmNtLWJ1aWx0aW57Y29sb3I6IzMwYX0uY20tcy1kZWZhdWx0IC5jbS1icmFja2V0e2NvbG9yOiM5OTd9LmNtLXMtZGVmYXVsdCAuY20tdGFne2NvbG9yOiMxNzB9LmNtLXMtZGVmYXVsdCAuY20tYXR0cmlidXRle2NvbG9yOiMwMGN9LmNtLXMtZGVmYXVsdCAuY20taHJ7Y29sb3I6Izk5OX0uY20tcy1kZWZhdWx0IC5jbS1saW5re2NvbG9yOiMwMGN9LmNtLWludmFsaWRjaGFyLC5jbS1zLWRlZmF1bHQgLmNtLWVycm9ye2NvbG9yOnJlZH0uQ29kZU1pcnJvci1jb21wb3Npbmd7Ym9yZGVyLWJvdHRvbToycHggc29saWR9ZGl2LkNvZGVNaXJyb3Igc3Bhbi5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldHtjb2xvcjojMGYwfWRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1ub25tYXRjaGluZ2JyYWNrZXR7Y29sb3I6I2YyMn0uQ29kZU1pcnJvci1tYXRjaGluZ3RhZ3tiYWNrZ3JvdW5kOnJnYmEoMjU1LDE1MCwwLC4zKX0uQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmR7YmFja2dyb3VuZDojZThmMmZmfS5Db2RlTWlycm9ye3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmZ9LkNvZGVNaXJyb3Itc2Nyb2xse292ZXJmbG93OnNjcm9sbCFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTotMzBweDttYXJnaW4tcmlnaHQ6LTMwcHg7cGFkZGluZy1ib3R0b206MzBweDtoZWlnaHQ6MTAwJTtvdXRsaW5lOjA7cG9zaXRpb246cmVsYXRpdmV9LkNvZGVNaXJyb3Itc2l6ZXJ7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJpZ2h0OjMwcHggc29saWQgdHJhbnNwYXJlbnR9LkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciwuQ29kZU1pcnJvci1oc2Nyb2xsYmFyLC5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsLkNvZGVNaXJyb3ItdnNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjY7ZGlzcGxheTpub25lfS5Db2RlTWlycm9yLXZzY3JvbGxiYXJ7cmlnaHQ6MDt0b3A6MDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OnNjcm9sbH0uQ29kZU1pcnJvci1oc2Nyb2xsYmFye2JvdHRvbTowO2xlZnQ6MDtvdmVyZmxvdy15OmhpZGRlbjtvdmVyZmxvdy14OnNjcm9sbH0uQ29kZU1pcnJvci1zY3JvbGxiYXItZmlsbGVye3JpZ2h0OjA7Ym90dG9tOjB9LkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlcntsZWZ0OjA7Ym90dG9tOjB9LkNvZGVNaXJyb3ItZ3V0dGVyc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7bWluLWhlaWdodDoxMDAlO3otaW5kZXg6M30uQ29kZU1pcnJvci1ndXR0ZXJ7d2hpdGUtc3BhY2U6bm9ybWFsO2hlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDttYXJnaW4tYm90dG9tOi0zMHB4fS5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NDtiYWNrZ3JvdW5kOjAgMCFpbXBvcnRhbnQ7Ym9yZGVyOm5vbmUhaW1wb3J0YW50Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uQ29kZU1pcnJvci1ndXR0ZXItYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDt6LWluZGV4OjR9LkNvZGVNaXJyb3ItZ3V0dGVyLWVsdHtwb3NpdGlvbjphYnNvbHV0ZTtjdXJzb3I6ZGVmYXVsdDt6LWluZGV4OjR9LkNvZGVNaXJyb3ItbGluZXN7Y3Vyc29yOnRleHQ7bWluLWhlaWdodDoxcHh9LkNvZGVNaXJyb3IgcHJley1tb3otYm9yZGVyLXJhZGl1czowOy13ZWJraXQtYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDtib3JkZXItd2lkdGg6MDtiYWNrZ3JvdW5kOjAgMDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O21hcmdpbjowO3doaXRlLXNwYWNlOnByZTt3b3JkLXdyYXA6bm9ybWFsO2xpbmUtaGVpZ2h0OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDt6LWluZGV4OjI7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6dmlzaWJsZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vbmU7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub25lfS5Db2RlTWlycm9yLXdyYXAgcHJle3dvcmQtd3JhcDpicmVhay13b3JkO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtYnJlYWs6bm9ybWFsfS5Db2RlTWlycm9yLWxpbmViYWNrZ3JvdW5ke3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3otaW5kZXg6MH0uQ29kZU1pcnJvci1saW5ld2lkZ2V0e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjtvdmVyZmxvdzphdXRvfS5Db2RlTWlycm9yLWNvZGV7b3V0bGluZTowfS5Db2RlTWlycm9yLWd1dHRlciwuQ29kZU1pcnJvci1ndXR0ZXJzLC5Db2RlTWlycm9yLWxpbmVudW1iZXIsLkNvZGVNaXJyb3Itc2Nyb2xsLC5Db2RlTWlycm9yLXNpemVyey1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5Db2RlTWlycm9yLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47dmlzaWJpbGl0eTpoaWRkZW59LkNvZGVNaXJyb3ItY3Vyc29ye3Bvc2l0aW9uOmFic29sdXRlfS5Db2RlTWlycm9yLW1lYXN1cmUgcHJle3Bvc2l0aW9uOnN0YXRpY31kaXYuQ29kZU1pcnJvci1jdXJzb3Jze3Zpc2liaWxpdHk6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6M30uQ29kZU1pcnJvci1mb2N1c2VkIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMsZGl2LkNvZGVNaXJyb3ItZHJhZ2N1cnNvcnN7dmlzaWJpbGl0eTp2aXNpYmxlfS5Db2RlTWlycm9yLXNlbGVjdGVke2JhY2tncm91bmQ6I2Q5ZDlkOX0uQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLXNlbGVjdGVkLC5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwuQ29kZU1pcnJvci1saW5lPnNwYW46OnNlbGVjdGlvbiwuQ29kZU1pcnJvci1saW5lPnNwYW4+c3Bhbjo6c2VsZWN0aW9ue2JhY2tncm91bmQ6I2Q3ZDRmMH0uQ29kZU1pcnJvci1jcm9zc2hhaXJ7Y3Vyc29yOmNyb3NzaGFpcn0uQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwuQ29kZU1pcnJvci1saW5lPnNwYW46Oi1tb3otc2VsZWN0aW9uLC5Db2RlTWlycm9yLWxpbmU+c3Bhbj5zcGFuOjotbW96LXNlbGVjdGlvbntiYWNrZ3JvdW5kOiNkN2Q0ZjB9LmNtLXNlYXJjaGluZ3tiYWNrZ3JvdW5kOiNmZmE7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMCwuNCl9LmNtLWZvcmNlLWJvcmRlcntwYWRkaW5nLXJpZ2h0Oi4xcHh9QG1lZGlhIHByaW50ey5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnN7dmlzaWJpbGl0eTpoaWRkZW59fS5jbS10YWItd3JhcC1oYWNrOmFmdGVye2NvbnRlbnQ6Jyd9c3Bhbi5Db2RlTWlycm9yLXNlbGVjdGVkdGV4dHtiYWNrZ3JvdW5kOjAgMH0uQ29kZU1pcnJvcntoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjMwMHB4O2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7cGFkZGluZzoxMHB4O2ZvbnQ6aW5oZXJpdDt6LWluZGV4OjF9LkNvZGVNaXJyb3Itc2Nyb2xse21pbi1oZWlnaHQ6MzAwcHh9LkNvZGVNaXJyb3ItZnVsbHNjcmVlbntiYWNrZ3JvdW5kOiNmZmY7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O3RvcDo1MHB4O2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDphdXRvO3otaW5kZXg6OX0uQ29kZU1pcnJvci1zaWRlZHt3aWR0aDo1MCUhaW1wb3J0YW50fS5lZGl0b3ItdG9vbGJhcntwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5Oi42Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7LW8tdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BhZGRpbmc6MCAxMHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICNiYmI7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiYmI7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYmJiO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0uZWRpdG9yLXRvb2xiYXI6YWZ0ZXIsLmVkaXRvci10b29sYmFyOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6JyAnO2hlaWdodDoxcHh9LmVkaXRvci10b29sYmFyOmJlZm9yZXttYXJnaW4tYm90dG9tOjhweH0uZWRpdG9yLXRvb2xiYXI6YWZ0ZXJ7bWFyZ2luLXRvcDo4cHh9LmVkaXRvci10b29sYmFyOmhvdmVyLC5lZGl0b3Itd3JhcHBlciBpbnB1dC50aXRsZTpmb2N1cywuZWRpdG9yLXdyYXBwZXIgaW5wdXQudGl0bGU6aG92ZXJ7b3BhY2l0eTouOH0uZWRpdG9yLXRvb2xiYXIuZnVsbHNjcmVlbnt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O292ZXJmbG93LXg6YXV0bztvdmVyZmxvdy15OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO29wYWNpdHk6MTt6LWluZGV4Ojl9LmVkaXRvci10b29sYmFyLmZ1bGxzY3JlZW46OmJlZm9yZXt3aWR0aDoyMHB4O2hlaWdodDo1MHB4O2JhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDEpIDAscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAscmdiYSgyNTUsMjU1LDI1NSwxKSksY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgyNTUsMjU1LDI1NSwxKSAwLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDEpIDAscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDEpIDAscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDI1NSwyNTUsMjU1LDEpIDAscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7bWFyZ2luOjA7cGFkZGluZzowfS5lZGl0b3ItdG9vbGJhci5mdWxsc2NyZWVuOjphZnRlcnt3aWR0aDoyMHB4O2hlaWdodDo1MHB4O2JhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAscmdiYSgyNTUsMjU1LDI1NSwwKSksY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpKTtiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgyNTUsMjU1LDI1NSwwKSAwLHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO21hcmdpbjowO3BhZGRpbmc6MH0uZWRpdG9yLXRvb2xiYXIgYXtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnQ7Y29sb3I6IzJjM2U1MCFpbXBvcnRhbnQ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46MDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6M3B4O2N1cnNvcjpwb2ludGVyfS5lZGl0b3ItdG9vbGJhciBhLmFjdGl2ZSwuZWRpdG9yLXRvb2xiYXIgYTpob3ZlcntiYWNrZ3JvdW5kOiNmY2ZjZmM7Ym9yZGVyLWNvbG9yOiM5NWE1YTZ9LmVkaXRvci10b29sYmFyIGE6YmVmb3Jle2xpbmUtaGVpZ2h0OjMwcHh9LmVkaXRvci10b29sYmFyIGkuc2VwYXJhdG9ye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjA7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZmZmO2NvbG9yOnRyYW5zcGFyZW50O3RleHQtaW5kZW50Oi0xMHB4O21hcmdpbjowIDZweH0uZWRpdG9yLXRvb2xiYXIgYS5mYS1oZWFkZXIteDphZnRlcntmb250LWZhbWlseTpBcmlhbCxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjY1JTt2ZXJ0aWNhbC1hbGlnbjp0ZXh0LWJvdHRvbTtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MnB4fS5lZGl0b3ItdG9vbGJhciBhLmZhLWhlYWRlci0xOmFmdGVye2NvbnRlbnQ6XCIxXCJ9LmVkaXRvci10b29sYmFyIGEuZmEtaGVhZGVyLTI6YWZ0ZXJ7Y29udGVudDpcIjJcIn0uZWRpdG9yLXRvb2xiYXIgYS5mYS1oZWFkZXItMzphZnRlcntjb250ZW50OlwiM1wifS5lZGl0b3ItdG9vbGJhciBhLmZhLWhlYWRlci1iaWdnZXI6YWZ0ZXJ7Y29udGVudDpcIuKWslwifS5lZGl0b3ItdG9vbGJhciBhLmZhLWhlYWRlci1zbWFsbGVyOmFmdGVye2NvbnRlbnQ6XCLilrxcIn0uZWRpdG9yLXRvb2xiYXIuZGlzYWJsZWQtZm9yLXByZXZpZXcgYTpub3QoLm5vLWRpc2FibGUpe3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDt0ZXh0LXNoYWRvdzppbmhlcml0fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7LmVkaXRvci10b29sYmFyIGEubm8tbW9iaWxle2Rpc3BsYXk6bm9uZX19LmVkaXRvci1zdGF0dXNiYXJ7cGFkZGluZzo4cHggMTBweDtmb250LXNpemU6MTJweDtjb2xvcjojOTU5Njk0O3RleHQtYWxpZ246cmlnaHR9LmVkaXRvci1zdGF0dXNiYXIgc3BhbntkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6NGVtO21hcmdpbi1sZWZ0OjFlbX0uZWRpdG9yLXByZXZpZXcsLmVkaXRvci1wcmV2aWV3LXNpZGV7cGFkZGluZzoxMHB4O2JhY2tncm91bmQ6I2ZhZmFmYTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmVkaXRvci1zdGF0dXNiYXIgLmxpbmVzOmJlZm9yZXtjb250ZW50OidsaW5lczogJ30uZWRpdG9yLXN0YXR1c2JhciAud29yZHM6YmVmb3Jle2NvbnRlbnQ6J3dvcmRzOiAnfS5lZGl0b3Itc3RhdHVzYmFyIC5jaGFyYWN0ZXJzOmJlZm9yZXtjb250ZW50OidjaGFyYWN0ZXJzOiAnfS5lZGl0b3ItcHJldmlld3twb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDt6LWluZGV4Ojd9LmVkaXRvci1wcmV2aWV3LXNpZGV7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7d2lkdGg6NTAlO3RvcDo1MHB4O3JpZ2h0OjA7ei1pbmRleDo5O2JvcmRlcjoxcHggc29saWQgI2RkZH0uZWRpdG9yLXByZXZpZXctYWN0aXZlLC5lZGl0b3ItcHJldmlldy1hY3RpdmUtc2lkZXtkaXNwbGF5OmJsb2NrfS5lZGl0b3ItcHJldmlldy1zaWRlPnAsLmVkaXRvci1wcmV2aWV3PnB7bWFyZ2luLXRvcDowfS5lZGl0b3ItcHJldmlldyBwcmUsLmVkaXRvci1wcmV2aWV3LXNpZGUgcHJle2JhY2tncm91bmQ6I2VlZTttYXJnaW4tYm90dG9tOjEwcHh9LmVkaXRvci1wcmV2aWV3IHRhYmxlIHRkLC5lZGl0b3ItcHJldmlldyB0YWJsZSB0aCwuZWRpdG9yLXByZXZpZXctc2lkZSB0YWJsZSB0ZCwuZWRpdG9yLXByZXZpZXctc2lkZSB0YWJsZSB0aHtib3JkZXI6MXB4IHNvbGlkICNkZGQ7cGFkZGluZzo1cHh9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tdGFne2NvbG9yOiM2M2EzNWN9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tYXR0cmlidXRle2NvbG9yOiM3OTVkYTN9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tc3RyaW5ne2NvbG9yOiMxODM2OTF9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3Itc2VsZWN0ZWR7YmFja2dyb3VuZDojZDlkOWQ5fS5Db2RlTWlycm9yIC5Db2RlTWlycm9yLWNvZGUgLmNtLWhlYWRlci0xe2ZvbnQtc2l6ZToyMDAlO2xpbmUtaGVpZ2h0OjIwMCV9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20taGVhZGVyLTJ7Zm9udC1zaXplOjE2MCU7bGluZS1oZWlnaHQ6MTYwJX0uQ29kZU1pcnJvciAuQ29kZU1pcnJvci1jb2RlIC5jbS1oZWFkZXItM3tmb250LXNpemU6MTI1JTtsaW5lLWhlaWdodDoxMjUlfS5Db2RlTWlycm9yIC5Db2RlTWlycm9yLWNvZGUgLmNtLWhlYWRlci00e2ZvbnQtc2l6ZToxMTAlO2xpbmUtaGVpZ2h0OjExMCV9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tY29tbWVudHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA1KTtib3JkZXItcmFkaXVzOjJweH0uQ29kZU1pcnJvciAuQ29kZU1pcnJvci1jb2RlIC5jbS1saW5re2NvbG9yOiM3ZjhjOGR9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tdXJse2NvbG9yOiNhYWIyYjN9LkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItY29kZSAuY20tc3RyaWtldGhyb3VnaHt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdofS5Db2RlTWlycm9yIC5Db2RlTWlycm9yLXBsYWNlaG9sZGVye29wYWNpdHk6LjV9LkNvZGVNaXJyb3IgLmNtLXNwZWxsLWVycm9yOm5vdCguY20tdXJsKTpub3QoLmNtLWNvbW1lbnQpOm5vdCguY20tdGFnKTpub3QoLmNtLXdvcmQpe2JhY2tncm91bmQ6cmdiYSgyNTUsMCwwLC4xNSl9Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alert/alert.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alert/alert.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{ cssClasses(alert) }}\">\r\n    <img class=\"alert-icon\" [src]=\"alert.icon\"/>\r\n    <div class=\"message-container\">\r\n        <span class=\"message\" [innerHTML]=\"alert.message\"></span>\r\n        <span (click)=\"removeAlert(alert, $event)\">\r\n      <span class=\"close-icon iconify\" data-icon=\"ic:round-close\"></span>\r\n    </span>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/components/feedback.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/components/feedback.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user.isAuthenticated\">\r\n    <div class=\"icon-container\">\r\n    <span\r\n            (click)=\"handleFeedbackIconClick($event)\"\r\n            class=\"tooltip-left\"\r\n            data-tooltip=\"Give us your feedback :)\"\r\n    >\r\n      <span class=\"iconify\" data-icon=\"topcoat:feedback\"></span>\r\n    </span>\r\n    </div>\r\n    <div class=\"feedback-container\">\r\n        <div class=\"feedback-input\">\r\n            <h2 class=\"feedback-title\">Feedback</h2>\r\n            <textarea\r\n                    name=\"feedback\"\r\n                    [(ngModel)]=\"feedback.value\"\r\n                    placeholder=\"Give us your feedback to improve...\"\r\n            ></textarea>\r\n        </div>\r\n\r\n        <div class=\"feedback-actions\">\r\n            <button (click)=\"cancel()\">Cancel</button>\r\n            <button (click)=\"submit()\">Submit</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"feedback-background\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/pages/manage-feedbacks.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/pages/manage-feedbacks.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-manage-resources-page-layout\r\n        pageTitle=\"Feedbacks\"\r\n        [previousButtonCssClasses]=\"previousButtonCssClasses\"\r\n        [nextButtonCssClasses]=\"nextButtonCssClasses\"\r\n        (previousButtonClick)=\"handlePreviousButtonClickEvent()\"\r\n        (nextButtonClick)=\"handleNextButtonClickEvent()\"\r\n        (filter)=\"onFilter($event)\"\r\n>\r\n    <ng-container class=\"table\">\r\n        <table mat-table matSort [dataSource]=\"dataSource\">\r\n            <ng-container matColumnDef=\"author\">\r\n                <th mat-header-cell mat-sort-header *matHeaderCellDef>Author</th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                    <app-user [user]=\"element.author\"></app-user>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"createdAt\">\r\n                <th mat-header-cell mat-sort-header *matHeaderCellDef>Created At</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.createdAt | date}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"feedback\">\r\n                <th mat-header-cell mat-sort-header *matHeaderCellDef>Feedback</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.value}}</td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n        </table>\r\n    </ng-container>\r\n</app-manage-resources-page-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/loader/loader.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/loader/loader.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"isLoading | async\" [@enterAnimation]>\r\n    <div class=\"loader\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-container/navbar.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-container/navbar.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n    <div class=\"left\">\r\n        <app-logo-link></app-logo-link>\r\n    </div>\r\n    <div class=\"right\">\r\n        <div class=\"not-authenticated-user-links\" *ngIf=\"!user.isAuthenticated\">\r\n            <a (click)=\"handleChangeThemeColorClickEvent($event)\">Toggle theme</a>\r\n            <app-navbar-login></app-navbar-login>\r\n        </div>\r\n        <div *ngIf=\"user.isAuthenticated\">\r\n            <app-navbar-user-link></app-navbar-user-link>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-login/navbar-login.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-login/navbar-login.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\" [matMenuTriggerFor]=\"menu\" #dropdownTrigger=\"matMenuTrigger\">\r\n  <span>Login</span>\r\n  <app-dropdown-icon class=\"dropdown-icon\"></app-dropdown-icon>\r\n  <div *ngIf=\"!loginFeatureAlreadyHighlighted\" class=\"login-message\">\r\n    <p>\r\n      Logged in users can add feedbacks, comments and much more on our\r\n      website...\r\n    </p>\r\n    <p class=\"give-it-a-try\">\r\n      Give it a try <span class=\"iconify\" data-icon=\"vaadin:smiley-o\"></span>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n  <a mat-menu-item href=\"/oauth2/authorization/github\" (click)=\"preLogin()\"\r\n    >Login with <span class=\"login-icon iconify\" data-icon=\"fe:github\"></span\r\n  ></a>\r\n  <a mat-menu-item href=\"/oauth2/authorization/google\" (click)=\"preLogin()\"\r\n    >Login with <span class=\"login-icon iconify\" data-icon=\"fe:google\"></span\r\n  ></a>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"welcome\">Welcome {{ user.username }}</span>\r\n<div\r\n        class=\"user-avatar\"\r\n        [matMenuTriggerFor]=\"menu\"\r\n        #dropdownTrigger=\"matMenuTrigger\"\r\n>\r\n    <app-user-avatar [user]=\"user\"></app-user-avatar>\r\n    <app-dropdown-icon class=\"dropdown-icon\"></app-dropdown-icon>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n  <span mat-menu-item (click)=\"handleChangeThemeColorClickEvent($event)\"\r\n  >Toggle theme</span\r\n  >\r\n    <a mat-menu-item [routerLink]=\"['/posts']\">Manage your posts</a>\r\n    <a mat-menu-item [routerLink]=\"['/posts/new']\">Create new post</a>\r\n    <hr/>\r\n    <a *ngIf=\"user.isAdmin\" mat-menu-item [routerLink]=\"['/users']\"\r\n    >Manage users</a\r\n    >\r\n    <a *ngIf=\"user.isAdmin\" mat-menu-item [routerLink]=\"['/feedbacks']\"\r\n    >Manage feedbacks</a\r\n    >\r\n    <hr/>\r\n    <a mat-menu-item href=\"/logout\">Logout</a>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\r\n        *ngIf=\"user.isAuthenticated\"\r\n        (ngSubmit)=\"onSubmit(commentForm)\"\r\n        #commentForm=\"ngForm\"\r\n>\r\n    <div class=\"comment-input\">\r\n        <input type=\"text\" hidden name=\"postId\" [ngModel]=\"postId\"/>\r\n        <app-user-avatar [user]=\"user\"></app-user-avatar>\r\n        <div class=\"textarea\">\r\n      <textarea\r\n              #commentTextarea\r\n              placeholder=\"Leave a comment...\"\r\n              name=\"value\"\r\n              rows=\"2\"\r\n              ngModel\r\n      ></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"comment-submit\">\r\n        <button type=\"submit\">Add Comment</button>\r\n    </div>\r\n</form>\r\n<div *ngIf=\"!user.isAuthenticated\" class=\"not-authenticated\">\r\n    <app-login-with-github suffix=\"to add new comment...\"></app-login-with-github>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comment/post-comment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comment/post-comment.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-user-avatar [user]=\"comment.author\"></app-user-avatar>\r\n<div class=\"container\">\r\n    <div class=\"metadata\">\r\n        <span class=\"author\">{{ comment.author.username | titlecase }}</span>\r\n        <span class=\"created-at\">{{ comment.createdAt.toString() | timeAgo }}</span>\r\n    </div>\r\n    <p class=\"body\">{{ comment.value }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comments/post-comments.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comments/post-comments.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title value=\"Comments\"></app-section-title>\r\n<app-add-post-comment\r\n        (newPostComment)=\"onNewPostComment($event)\"\r\n></app-add-post-comment>\r\n<app-post-comment\r\n        *ngFor=\"let comment of postComments\"\r\n        [comment]=\"comment\"\r\n></app-post-comment>\r\n<app-load-more-button\r\n        *ngIf=\"stillMoreComments\"\r\n        class=\"more-comments-button\"\r\n        text=\"Load more comments\"\r\n        (click)=\"loadMorePostComments()\"\r\n></app-load-more-button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/consult-post-page/consult-post.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/consult-post-page/consult-post.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-post-layout>\r\n    <app-post-title [post]=\"post\"></app-post-title>\r\n    <app-markdown [text]=\"post.bodyMarkdown\"></app-markdown>\r\n    <app-post-comments></app-post-comments>\r\n</app-post-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/create-post-page/create-post.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/create-post-page/create-post.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-create-update-post-form\r\n        pageTitle=\"Create new post\"\r\n        [post]=\"post\"\r\n        submitButtonLabel=\"Create\"\r\n        (formSubmit)=\"onSubmit($event)\"\r\n></app-create-update-post-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-manage-resources-page-layout\r\n  pageTitle=\"My Posts\"\r\n  [previousButtonCssClasses]=\"previousButtonCssClasses\"\r\n  [nextButtonCssClasses]=\"nextButtonCssClasses\"\r\n  (previousButtonClick)=\"handlePreviousButtonClickEvent()\"\r\n  (nextButtonClick)=\"handleNextButtonClickEvent()\"\r\n  (filter)=\"onFilter($event)\"\r\n>\r\n  <ng-container class=\"top-table-actions\">\r\n    <app-page-title-delete-button\r\n      tooltip=\"delete all your posts\"\r\n      (click)=\"deleteAllUserPosts()\"\r\n    >\r\n    </app-page-title-delete-button>\r\n    <app-page-title-download-button\r\n      tooltip=\"download all your posts\"\r\n      (click)=\"downloadAllUserPosts()\"\r\n    >\r\n    </app-page-title-download-button>\r\n    <app-page-title-upload-button\r\n      (fileUpload)=\"onFileUpload($event)\"\r\n      tooltip=\"upload posts\"\r\n    >\r\n    </app-page-title-upload-button>\r\n    <app-page-title-new-button\r\n      routerLink=\"/posts/new\"\r\n      tooltip=\"create new post\"\r\n    ></app-page-title-new-button>\r\n  </ng-container>\r\n\r\n  <ng-container class=\"table\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>#</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.id}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Title</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.title}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"category\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Category</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.category}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"createdAt\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Created At</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.createdAt | date}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"lastUpdatedAt\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n          Last Updated At\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.lastUpdatedAt ? (element.lastUpdatedAt | date) : 'N/A'}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div class=\"row-actions\">\r\n            <app-consult-button-link\r\n              [routerLink]=\"['/posts', element.id, 'consult']\"\r\n            ></app-consult-button-link>\r\n            <app-edit-button-link\r\n              [routerLink]=\"['/posts', element.id, 'edit']\"\r\n            ></app-edit-button-link>\r\n            <app-delete-button\r\n              (click)=\"deletePost(element.id)\"\r\n            ></app-delete-button>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n      <tr mat-row class=\"row\" *matRowDef=\"let row; columns: columns;\"></tr>\r\n    </table>\r\n  </ng-container>\r\n</app-manage-resources-page-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-posts-welcome-message></app-posts-welcome-message>\r\n<app-search-posts\r\n        [selectedTag]=\"postsState.selectedTag$ | async\"\r\n        [tags]=\"postsState.allTags$ | async\"\r\n        (inputChange)=\"handleSearchTextChange($event)\"\r\n></app-search-posts>\r\n\r\n<app-posts-group\r\n        *ngFor=\"let postsGroup of (postsState.displayedPostsGroups$ | async)\"\r\n        [postsGroup]=\"postsGroup\"\r\n></app-posts-group>\r\n\r\n<app-load-more-button\r\n        appSlideIn\r\n        *ngIf=\"!noMorePosts\"\r\n        text=\"Load more posts\"\r\n        (click)=\"loadMorePosts()\"\r\n></app-load-more-button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/update-post-page/update-post.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/update-post-page/update-post.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-create-update-post-form\r\n        pageTitle=\"Update post\"\r\n        [post]=\"post\"\r\n        submitButtonLabel=\"Update\"\r\n        (formSubmit)=\"onSubmit($event)\"\r\n></app-create-update-post-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-post-layout>\r\n    <div class=\"page-header\">\r\n        <app-page-title [value]=\"pageTitle\"></app-page-title>\r\n        <div class=\"page-header-actions\">\r\n            <app-page-title-consult-button\r\n                    (click)=\"togglePreviewMode()\"\r\n                    *ngIf=\"!previewMode\"\r\n                    tooltip=\"preview post\"\r\n            ></app-page-title-consult-button>\r\n            <app-page-title-edit-button\r\n                    tooltip=\"continue post creation / update\"\r\n                    (click)=\"togglePreviewMode()\"\r\n                    *ngIf=\"previewMode\"\r\n            ></app-page-title-edit-button>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"previewMode\">\r\n        <app-post-title [post]=\"post\"></app-post-title>\r\n        <app-markdown [text]=\"post.bodyMarkdown\"></app-markdown>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!previewMode\">\r\n        <form (submit)=\"onSubmit($event)\">\r\n            <mat-form-field appearance=\"fill\">\r\n                <mat-label>Title</mat-label>\r\n                <input name=\"title\" matInput [(ngModel)]=\"post.title\"/>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"fill\">\r\n                <mat-label>Category</mat-label>\r\n                <input name=\"category\" matInput [(ngModel)]=\"post.category\"/>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-chip-list #tagsRef>\r\n                    <mat-chip\r\n                            *ngFor=\"let tag of post.tags\"\r\n                            removable=\"true\"\r\n                            (removed)=\"removeTag(tag)\"\r\n                    >\r\n                        {{ tag }}\r\n                        <mat-icon matChipRemove *ngIf=\"true\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input\r\n                            placeholder=\"Tags\"\r\n                            [matChipInputFor]=\"tagsRef\"\r\n                            [matChipInputAddOnBlur]=\"true\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separators\"\r\n                            (matChipInputTokenEnd)=\"addTag($event)\"\r\n                    />\r\n                </mat-chip-list>\r\n            </mat-form-field>\r\n\r\n            <simplemde\r\n                    name=\"body\"\r\n                    [(ngModel)]=\"post.bodyMarkdown\"\r\n                    [options]=\"simpleMdeOptions\"\r\n            ></simplemde>\r\n\r\n            <div class=\"page-footer-actions\">\r\n                <button type=\"reset\">Reset</button>\r\n                <button type=\"submit\">{{ submitButtonLabel }}</button>\r\n            </div>\r\n        </form>\r\n    </ng-container>\r\n</app-post-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-layout/post-layout.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-layout/post-layout.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-summary/post-summary.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-summary/post-summary.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appSlideIn>\r\n    <a [routerLink]=\"['/posts', post.id, 'consult']\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">{{ post.title }}</h2>\r\n            <div class=\"tags\">\r\n                <span class=\"iconify\" data-icon=\"gridicons:tag\"></span>\r\n                <app-tag-list [tags]=\"post.tags\"></app-tag-list>\r\n            </div>\r\n            <div class=\"publish-date\">\r\n                <span class=\"iconify\" data-icon=\"mdi:calendar-today\"></span>\r\n                {{ post.createdAt | date }}\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-title/post-title.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-title/post-title.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ post.title }}</h1>\r\n<div class=\"metadata\">\r\n    <app-tag-list [tags]=\"post.tags\"></app-tag-list>\r\n    <p class=\"publish-date tooltip-bottom\" data-tooltip=\"publication date\">\r\n        {{ post.createdAt | date }}\r\n    </p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-group/posts-group.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-group/posts-group.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appSlideIn>\r\n    <app-section-title [value]=\"postsGroup.name\"></app-section-title>\r\n</div>\r\n<div class=\"posts\">\r\n    <app-post-summary\r\n            *ngFor=\"let post of postsGroup.posts\"\r\n            [post]=\"post\"\r\n    ></app-post-summary>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Welcome to ahenteti blog</h1>\r\n    <p>\r\n        In this website, I'm going to centralize what I have learned from the\r\n        Internet. <span class=\"big-thanks\">Big thanks</span> to you guys that helped\r\n        me improve my skills\r\n    </p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/search-posts/search-posts.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/search-posts/search-posts.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"tags\">\r\n        <mat-select\r\n                [(value)]=\"selectedTag\"\r\n                (selectionChange)=\"onTagSelection($event)\"\r\n                panelClass=\"tags-overlay-panel\"\r\n        >\r\n            <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\r\n        </mat-select>\r\n    </div>\r\n    <input\r\n            class=\"search-input\"\r\n            (focus)=\"onInputFocus()\"\r\n            (blur)=\"onInputBlur()\"\r\n            (keyup)=\"onInputKeyup($event)\"\r\n            placeholder=\"Search posts...\"\r\n            type=\"text\"\r\n    />\r\n    <div class=\"ion ion-ios-search icon\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-tag *ngFor=\"let tag of tags\" [tag]=\"tag\"></app-tag>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span (click)=\"handleClickEvent($event)\">{{ tag }}</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"routerLink\">\r\n    <app-consult-button></app-consult-button>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"ls:view\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/delete-button/delete-button.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/delete-button/delete-button.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"iwwa:delete\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"routerLink\">\r\n    <app-edit-button></app-edit-button>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"eva:edit-fill\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button>\r\n    <span class=\"iconify\" data-icon=\"subway:cloud-download\"></span>\r\n    <span class=\"text\">{{ text }}</span>\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/next-button/next-button.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/next-button/next-button.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"ic:round-skip-next\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/previous-button/previous-button.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/previous-button/previous-button.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"ic:round-skip-previous\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\r\n    {{ message }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"close()\">No</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"iconify\" data-icon=\"ic:baseline-arrow-drop-down\"></span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/login-with-github/login-with-github.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/login-with-github/login-with-github.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"/oauth2/authorization/github\" (click)=\"preLogin()\"\r\n>Login with <span class=\"iconify\" data-icon=\"fe:github\"></span>\r\n    {{ suffix }}</a\r\n>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/logo/logo-link.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/logo/logo-link.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/']\" class=\"container\">\r\n    <div class=\"logo\">\r\n        <div class=\"backslash\"></div>\r\n        <div class=\"slash\"></div>\r\n        <div class=\"underscore\"></div>\r\n    </div>\r\n    <span class=\"logo-text\">ahenteti blog</span>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"button\">\r\n    <span class=\"iconify\" [attr.data-icon]=\"icon\"></span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\r\n        #input\r\n        type=\"text\"\r\n        name=\"\"\r\n        class=\"search-input\"\r\n        (blur)=\"onBlur()\"\r\n        (focus)=\"onFocus()\"\r\n        placeholder=\"Search...\"\r\n        [(ngModel)]=\"filter\"\r\n        (keyup.enter)=\"onSubmit()\"\r\n/>\r\n<a class=\"search-button\" (click)=\"onSubmit()\">\r\n    <span class=\"iconify\" data-icon=\"gridicons:search\"></span>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/router-link/router-link.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/router-link/router-link.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"routerLink\">\r\n    <ng-content></ng-content>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template cdkPortal>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div\r\n            class=\"selected-option\"\r\n            #selectedOption\r\n            (click)=\"onSelectedOptionClick()\"\r\n    >\r\n        <span class=\"selected\">{{ selectedLabel }}</span>\r\n        <span class=\"ion ion-ios-arrow-down\"></span>\r\n    </div>\r\n    <app-select-dropdown [reference]=\"selectedOption\">\r\n        <div class=\"options\">\r\n            <ng-content select=\"app-select-option\"></ng-content>\r\n        </div>\r\n    </app-select-dropdown>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/quote.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/quote.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-text-with-icon icon=\"quote\">\r\n    <div>\r\n        <div>\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <p class=\"author\">— {{ author }}</p>\r\n    </div>\r\n</app-text-with-icon>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"icon\" src=\"/assets/icon/{{ icon }}.svg\"/>\r\n<div>\r\n    <ng-content></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/layouts/manage-resources-page.layout.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/layouts/manage-resources-page.layout.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n    <app-page-title [value]=\"pageTitle\"></app-page-title>\r\n    <div class=\"top-table-actions-container\">\r\n        <app-page-title-filter-button\r\n                (onFilter)=\"onFilter($event)\"\r\n        ></app-page-title-filter-button>\r\n        <ng-content select=\".top-table-actions\"></ng-content>\r\n    </div>\r\n</div>\r\n\r\n<ng-content select=\".table\"></ng-content>\r\n\r\n<div class=\"bottom-table-actions\">\r\n    <app-previous-button\r\n            class=\"{{ previousButtonCssClasses }}\"\r\n            (click)=\"handlePreviousButtonClickEvent()\"\r\n    ></app-previous-button>\r\n    <app-next-button\r\n            class=\"{{ nextButtonCssClasses }}\"\r\n            (click)=\"handleNextButtonClickEvent()\"\r\n    ></app-next-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/manage-users/manage-users.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/manage-users/manage-users.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-manage-resources-page-layout\r\n  pageTitle=\"Users\"\r\n  [previousButtonCssClasses]=\"previousButtonCssClasses\"\r\n  [nextButtonCssClasses]=\"nextButtonCssClasses\"\r\n  (previousButtonClick)=\"handlePreviousButtonClickEvent()\"\r\n  (nextButtonClick)=\"handleNextButtonClickEvent()\"\r\n  (filter)=\"onFilter($event)\"\r\n>\r\n  <ng-container class=\"table\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>#</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.id}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"username\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Username</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <app-user [user]=\"element\"></app-user>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"provider\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Provider</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.provider}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"joinAt\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef>Join At</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{element.joinAt | date}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div class=\"row-actions\">\r\n            <app-delete-button\r\n              (click)=\"deleteUser(element)\"\r\n            ></app-delete-button>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n    </table>\r\n  </ng-container>\r\n</app-manage-resources-page-layout>\r\n");

/***/ }),

/***/ "./node_modules/simplemde/dist/simplemde.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/simplemde/dist/simplemde.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./simplemde.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/simplemde/dist/simplemde.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    }
    return __assign.apply(this, arguments);
}

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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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
};

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
};

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


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main::before {\n  content: \"\";\n  height: var(--navbar-height);\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwibWFpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            once: true,
            duration: 1200,
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: /*html*/ `
    <app-navbar></app-navbar>
    <app-alert></app-alert>
    <app-loader></app-loader>
    <app-feedback></app-feedback>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/alert/alert.module */ "./src/app/modules/alert/alert.module.ts");
/* harmony import */ var _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navbar/navbar.module */ "./src/app/modules/navbar/navbar.module.ts");
/* harmony import */ var _modules_post_post_pages_post_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/post/post-pages/post-pages.module */ "./src/app/modules/post/post-pages/post-pages.module.ts");
/* harmony import */ var _modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/navbar/services/theme.local-storage */ "./src/app/modules/navbar/services/theme.local-storage.ts");
/* harmony import */ var _modules_user_services_user_http_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/user/services/user.http-client */ "./src/app/modules/user/services/user.http-client.ts");
/* harmony import */ var _modules_user_services_user_login_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/user/services/user.login.services */ "./src/app/modules/user/services/user.login.services.ts");
/* harmony import */ var _modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");
/* harmony import */ var _modules_user_services_user_converter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/user/services/user.converter */ "./src/app/modules/user/services/user.converter.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _modules_user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/user/services/logged-in.guard */ "./src/app/modules/user/services/logged-in.guard.ts");
/* harmony import */ var _modules_post_post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/post/post-shared/services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");
/* harmony import */ var _modules_post_post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/post/post-shared/services/post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _modules_post_post_comments_converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/post/post-comments/converter/post-comment.converter */ "./src/app/modules/post/post-comments/converter/post-comment.converter.ts");
/* harmony import */ var _modules_post_post_comments_services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/post/post-comments/services/post-comment.http-client */ "./src/app/modules/post/post-comments/services/post-comment.http-client.ts");
/* harmony import */ var _modules_post_post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/post/post-shared/services/post.validator */ "./src/app/modules/post/post-shared/services/post.validator.ts");
/* harmony import */ var _modules_shared_services_window_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/shared/services/window.service */ "./src/app/modules/shared/services/window.service.ts");
/* harmony import */ var _modules_loader_loader_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/loader/loader.module */ "./src/app/modules/loader/loader.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modules_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/loader/loader.interceptor */ "./src/app/modules/loader/loader.interceptor.ts");
/* harmony import */ var _modules_loader_loader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/loader/loader.service */ "./src/app/modules/loader/loader.service.ts");
/* harmony import */ var _modules_user_services_admin_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/user/services/admin.guard */ "./src/app/modules/user/services/admin.guard.ts");
/* harmony import */ var _modules_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/feedback/feedback.module */ "./src/app/modules/feedback/feedback.module.ts");
/* harmony import */ var _modules_feedback_services_feedback_converter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/feedback/services/feedback.converter */ "./src/app/modules/feedback/services/feedback.converter.ts");
/* harmony import */ var _modules_feedback_services_feedback_validator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/feedback/services/feedback.validator */ "./src/app/modules/feedback/services/feedback.validator.ts");
/* harmony import */ var _modules_feedback_services_feedback_http_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/feedback/services/feedback.http-client */ "./src/app/modules/feedback/services/feedback.http-client.ts");
/* harmony import */ var _modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _modules_navbar_services_login_local_storage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/navbar/services/login.local-storage */ "./src/app/modules/navbar/services/login.local-storage.ts");

































const routes = [
    {
        path: "",
        loadChildren: "./modules/post/post-pages/post-pages.module#PostPageModule",
    },
    {
        path: "",
        loadChildren: "./modules/user/user.module#UserModule",
    },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _modules_loader_loader_module__WEBPACK_IMPORTED_MODULE_22__["LoaderModule"],
            _modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
            _modules_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
            _modules_post_post_pages_post_pages_module__WEBPACK_IMPORTED_MODULE_7__["PostPageModule"],
            _modules_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_27__["FeedbackModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        providers: [
            _modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_31__["AlertService"],
            _modules_post_post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_16__["PostHttpClient"],
            _modules_post_post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_17__["PostConverter"],
            _modules_post_post_comments_converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_18__["PostCommentConverter"],
            _modules_post_post_comments_services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_19__["PostCommentHttpClient"],
            _modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_8__["ThemeLocalStorage"],
            _modules_navbar_services_login_local_storage__WEBPACK_IMPORTED_MODULE_32__["LoginLocalStorage"],
            _modules_user_services_user_http_client__WEBPACK_IMPORTED_MODULE_9__["UserHttpClient"],
            _modules_user_services_user_login_services__WEBPACK_IMPORTED_MODULE_10__["UserLoginServices"],
            _modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_11__["UserObservable"],
            _modules_user_services_user_converter__WEBPACK_IMPORTED_MODULE_12__["UserConverter"],
            _modules_user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_15__["LoggedInGuard"],
            _modules_post_post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_20__["PostValidator"],
            _modules_shared_services_window_service__WEBPACK_IMPORTED_MODULE_21__["WindowService"],
            _modules_loader_loader_service__WEBPACK_IMPORTED_MODULE_25__["LoaderService"],
            _modules_user_services_admin_guard__WEBPACK_IMPORTED_MODULE_26__["AdminGuard"],
            _modules_feedback_services_feedback_converter__WEBPACK_IMPORTED_MODULE_28__["FeedbackConverter"],
            _modules_feedback_services_feedback_validator__WEBPACK_IMPORTED_MODULE_29__["FeedbackValidator"],
            _modules_feedback_services_feedback_http_client__WEBPACK_IMPORTED_MODULE_30__["FeedbackHttpClient"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], useClass: _modules_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoaderInterceptor"], multi: true },
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/alert/alert.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/alert/alert.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: fixed;\n  top: calc(var(--navbar-height) + 2rem);\n  right: 2rem;\n  z-index: 10000;\n  width: 35rem;\n}\n\n.alert {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: flex-start;\n  padding: 2rem;\n  border-radius: 0.3rem;\n  margin-bottom: 1.5rem;\n  -webkit-animation: alertFadeIn 0.25s ease-in;\n          animation: alertFadeIn 0.25s ease-in;\n  box-shadow: var(--box-shadow);\n}\n\n.alert.fadeout {\n  -webkit-animation: alertFadeOut 0.2s;\n          animation: alertFadeOut 0.2s;\n}\n\n.alert-icon {\n  flex: 0 0 5rem;\n  padding-right: 2rem;\n  width: 2rem;\n}\n\n.message-container {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.message {\n  font-size: 1.6rem;\n  line-height: 2.5rem;\n}\n\n.close-icon {\n  flex: 0 0 2rem;\n  margin-left: 1rem;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.alert-error {\n  background-color: var(--error-background-color);\n}\n\n.alert-error .message, .alert-error .close-icon {\n  color: var(--error-text-color);\n}\n\n.alert-warn {\n  background-color: var(--warn-background-color);\n}\n\n.alert-warn .message, .alert-warn .close-icon {\n  color: var(--warn-text-color);\n}\n\n.alert-info {\n  background-color: var(--info-background-color);\n}\n\n.alert-info .message, .alert-info .close-icon {\n  color: var(--info-text-color);\n}\n\n@-webkit-keyframes alertFadeIn {\n  from {\n    transform: translateX(40rem);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes alertFadeIn {\n  from {\n    transform: translateX(40rem);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes alertFadeOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(40rem);\n    opacity: 0;\n  }\n}\n\n@keyframes alertFadeOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(40rem);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGVydC9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSw2QkFBQTtBQ0NGOztBRENFO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBQ0NKOztBREdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsK0NBQUE7QUNBRjs7QURDRTtFQUVFLDhCQUFBO0FDQUo7O0FESUE7RUFDRSw4Q0FBQTtBQ0RGOztBREVFO0VBRUUsNkJBQUE7QUNESjs7QURLQTtFQUNFLDhDQUFBO0FDRkY7O0FER0U7RUFFRSw2QkFBQTtBQ0ZKOztBRE1BO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNIRjtFREtBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRjs7QURMQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDSEY7RURLQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ0pGO0VETUE7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNKRjtBQUNGOztBREpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNKRjtFRE1BO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogY2FsYyh2YXIoLS1uYXZiYXItaGVpZ2h0KSArIDJyZW0pO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHdpZHRoOiAzNXJlbTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBhbmltYXRpb246IGFsZXJ0RmFkZUluIDAuMjVzIGVhc2UtaW47XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcblxyXG4gICYuZmFkZW91dCB7XHJcbiAgICBhbmltYXRpb246IGFsZXJ0RmFkZU91dCAwLjJzO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LWljb24ge1xyXG4gIGZsZXg6IDAgMCA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgZmxleDogMCAwIDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFsZXJ0LWVycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAmIC5tZXNzYWdlLFxyXG4gICYgLmNsb3NlLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWVycm9yLXRleHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LXdhcm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm4tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgJiAubWVzc2FnZSxcclxuICAmIC5jbG9zZS1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS13YXJuLXRleHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgJiAubWVzc2FnZSxcclxuICAmIC5jbG9zZS1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmZvLXRleHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbGVydEZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDByZW0pO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYWxlcnRGYWRlT3V0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHJlbSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBjYWxjKHZhcigtLW5hdmJhci1oZWlnaHQpICsgMnJlbSk7XG4gIHJpZ2h0OiAycmVtO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgd2lkdGg6IDM1cmVtO1xufVxuXG4uYWxlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBhbmltYXRpb246IGFsZXJ0RmFkZUluIDAuMjVzIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuLmFsZXJ0LmZhZGVvdXQge1xuICBhbmltYXRpb246IGFsZXJ0RmFkZU91dCAwLjJzO1xufVxuXG4uYWxlcnQtaWNvbiB7XG4gIGZsZXg6IDAgMCA1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgZmxleDogMCAwIDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFsZXJ0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItYmFja2dyb3VuZC1jb2xvcik7XG59XG4uYWxlcnQtZXJyb3IgLm1lc3NhZ2UsIC5hbGVydC1lcnJvciAuY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvci10ZXh0LWNvbG9yKTtcbn1cblxuLmFsZXJ0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuLWJhY2tncm91bmQtY29sb3IpO1xufVxuLmFsZXJ0LXdhcm4gLm1lc3NhZ2UsIC5hbGVydC13YXJuIC5jbG9zZS1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdhcm4tdGV4dC1jb2xvcik7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbi5hbGVydC1pbmZvIC5tZXNzYWdlLCAuYWxlcnQtaW5mbyAuY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pbmZvLXRleHQtY29sb3IpO1xufVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0RmFkZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbGVydEZhZGVPdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/alert/alert.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/alert/alert.component.ts ***!
  \**************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/modules/alert/alert.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/modules/alert/alert.service.ts");





let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.alerts = new _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alerts"]();
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert().subscribe((alert) => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach((a) => delete a.keepAfterRouteChange);
                return;
            }
            this.alerts.push(alert);
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), alert.autoCloseDuration);
            }
        });
        this.routeSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.alertService.clear();
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert, event) {
        if (event)
            event.stopPropagation();
        this.alerts.find((x) => x === alert).fadeout = true;
        setTimeout(() => {
            this.alerts = this.alerts.filter((x) => x !== alert);
        }, 200);
    }
    cssClasses(alert) {
        if (!alert)
            return;
        const classes = ["alert"];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].ERROR]: "alert-error",
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARN]: "alert-warn",
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO]: "alert-info",
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fadeout) {
            classes.push("fadeout");
        }
        return classes.join(" ");
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-alert",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/modules/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/modules/alert/alert.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/alert/alert.model.ts ***!
  \**********************************************/
/*! exports provided: Alert, Alerts, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alerts", function() { return Alerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        this.autoCloseDuration = 3000;
        this.fadeout = false;
        Object.assign(this, init);
    }
}
class Alerts extends Array {
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["ERROR"] = 0] = "ERROR";
    AlertType[AlertType["WARN"] = 1] = "WARN";
    AlertType[AlertType["INFO"] = 2] = "INFO";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/modules/alert/alert.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/alert/alert.module.ts ***!
  \***********************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "./src/app/modules/alert/alert.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AlertModule = class AlertModule {
};
AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
        providers: [],
    })
], AlertModule);



/***/ }),

/***/ "./src/app/modules/alert/alert.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/alert/alert.service.ts ***!
  \************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/modules/alert/alert.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    onAlert() {
        return this.subject.asObservable();
    }
    alert(alert) {
        this.subject.next(alert);
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign({}, options, { autoClose: true, type: _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO, icon: "/assets/icon/info.svg", message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARN, icon: "/assets/icon/warn.svg", message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].ERROR, icon: "/assets/icon/error.svg", message })));
    }
    clear() {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"]());
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], AlertService);



/***/ }),

/***/ "./src/app/modules/alert/common.http-client.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/alert/common.http-client.ts ***!
  \*****************************************************/
/*! exports provided: CommonHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHttpClient", function() { return CommonHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CommonHttpClient {
    constructor(alertService) {
        this.alertService = alertService;
    }
    // prettier-ignore
    handleError(error, defaultErrorMessage = "Error while executing your request :(") {
        console.error(error);
        if (error.status >= 400 || error.status <= 500) {
            this.alertService.error(error.error.error.message);
        }
        else {
            this.alertService.error(defaultErrorMessage);
        }
    }
}


/***/ }),

/***/ "./src/app/modules/feedback/components/feedback.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/feedback/components/feedback.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --feedback-form-width: 30rem;\n}\n\n.icon-container {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n}\n\n.icon-container .iconify {\n  font-size: 2.8rem;\n  cursor: pointer;\n  transition: var(--transition);\n  transition-property: color;\n}\n\n.icon-container .iconify:hover {\n  color: var(--primary-color);\n}\n\n.feedback-container {\n  position: fixed;\n  z-index: calc(var(--navbar-z-index) + 10);\n  top: var(--navbar-height);\n  right: calc(var(--feedback-form-width) * -1);\n  bottom: 0;\n  padding: 2rem;\n  background: var(--feedback-form-background-color);\n  width: var(--feedback-form-width);\n  transition: var(--transition);\n  transition-property: color, background-color, right, display;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.feedback-container .feedback-title {\n  font-size: 1.8rem;\n  margin-bottom: 2rem;\n}\n\n.feedback-container textarea {\n  height: 15rem;\n}\n\n.feedback-container .feedback-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.feedback-container .feedback-actions button {\n  margin-left: 1rem;\n}\n\n:host.active .feedback-container {\n  right: 0;\n}\n\n:host.active .feedback-background {\n  position: fixed;\n  top: var(--navbar-height);\n  bottom: 0;\n  left: 0;\n  right: var(--feedback-form-width);\n  z-index: 999999;\n  content: \"\";\n  background-color: var(--semi-transparent-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZmVlZGJhY2tcXGNvbXBvbmVudHNcXGZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2ZlZWRiYWNrL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FEQ0k7RUFDRSwyQkFBQTtBQ0NOOztBRElBO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0RGOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDSEo7O0FES0k7RUFDRSxpQkFBQTtBQ0hOOztBRFNFO0VBQ0UsUUFBQTtBQ05KOztBRFNFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZlZWRiYWNrL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1mZWVkYmFjay1mb3JtLXdpZHRoOiAzMHJlbTtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAycmVtO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG5cclxuICAmIC5pY29uaWZ5IHtcclxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZlZWRiYWNrLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IGNhbGModmFyKC0tbmF2YmFyLXotaW5kZXgpICsgMTApO1xyXG4gIHRvcDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XHJcbiAgcmlnaHQ6IGNhbGModmFyKC0tZmVlZGJhY2stZm9ybS13aWR0aCkgKiAtMSk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZmVlZGJhY2stZm9ybS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICB3aWR0aDogdmFyKC0tZmVlZGJhY2stZm9ybS13aWR0aCk7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHJpZ2h0LCBkaXNwbGF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICYgLmZlZWRiYWNrLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gICYgdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICB9XHJcblxyXG4gICYgLmZlZWRiYWNrLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0LmFjdGl2ZSB7XHJcbiAgJiAuZmVlZGJhY2stY29udGFpbmVyIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJiAuZmVlZGJhY2stYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiB2YXIoLS1mZWVkYmFjay1mb3JtLXdpZHRoKTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZW1pLXRyYW5zcGFyZW50LWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1mZWVkYmFjay1mb3JtLXdpZHRoOiAzMHJlbTtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDJyZW07XG4gIHJpZ2h0OiAycmVtO1xufVxuLmljb24tY29udGFpbmVyIC5pY29uaWZ5IHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xufVxuLmljb24tY29udGFpbmVyIC5pY29uaWZ5OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uZmVlZGJhY2stY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiBjYWxjKHZhcigtLW5hdmJhci16LWluZGV4KSArIDEwKTtcbiAgdG9wOiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcbiAgcmlnaHQ6IGNhbGModmFyKC0tZmVlZGJhY2stZm9ybS13aWR0aCkgKiAtMSk7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmVlZGJhY2stZm9ybS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IHZhcigtLWZlZWRiYWNrLWZvcm0td2lkdGgpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHJpZ2h0LCBkaXNwbGF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZlZWRiYWNrLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTVyZW07XG59XG4uZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mZWVkYmFjay1jb250YWluZXIgLmZlZWRiYWNrLWFjdGlvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbjpob3N0LmFjdGl2ZSAuZmVlZGJhY2stY29udGFpbmVyIHtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdC5hY3RpdmUgLmZlZWRiYWNrLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IHZhcigtLWZlZWRiYWNrLWZvcm0td2lkdGgpO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktdHJhbnNwYXJlbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/feedback/components/feedback.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/feedback/components/feedback.component.ts ***!
  \*******************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/components/user-aware.component */ "./src/app/modules/user/components/user-aware.component.ts");
/* harmony import */ var _user_services_user_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");
/* harmony import */ var _services_feedback_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback.converter */ "./src/app/modules/feedback/services/feedback.converter.ts");
/* harmony import */ var _services_feedback_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/feedback.http-client */ "./src/app/modules/feedback/services/feedback.http-client.ts");
/* harmony import */ var _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/feedback.internal.model */ "./src/app/modules/feedback/models/feedback.internal.model.ts");
/* harmony import */ var _services_feedback_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/feedback.validator */ "./src/app/modules/feedback/services/feedback.validator.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");









let FeedbackComponent = class FeedbackComponent extends _user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_2__["UserAwareComponent"] {
    constructor(userObservable, feedbackValidator, feedbackConverter, feedbackHttpClient, alertService) {
        super(userObservable);
        this.feedbackValidator = feedbackValidator;
        this.feedbackConverter = feedbackConverter;
        this.feedbackHttpClient = feedbackHttpClient;
        this.alertService = alertService;
        this.active = false;
        this.feedback = new _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_6__["Feedback"]();
    }
    ngAfterViewInit() {
        document.addEventListener("click", (event) => {
            if (event.target.closest(".feedback-container"))
                return;
            this.active = false;
        });
    }
    handleFeedbackIconClick(event) {
        event.stopPropagation();
        this.active = true;
    }
    cancel() {
        this.active = false;
    }
    // prettier-ignore
    submit() {
        if (this.feedbackValidator.validateFeedback(this.feedback)) {
            const request = this.feedbackConverter.toCreateFeedbackApiRequest(this.feedback);
            this.feedbackHttpClient.createFeedback(request)
                .then(() => this.handleCreateFeedbackSuccessEvent())
                .catch(error => this.handleCreateFeedbackErrorEvent());
        }
    }
    handleCreateFeedbackErrorEvent() {
        this.alertService.error("Error while sending your feedback :(");
    }
    handleCreateFeedbackSuccessEvent() {
        this.active = false;
        this.feedback.value = "";
        this.alertService.info("Thank your for your feedback :)");
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _user_services_user_observable__WEBPACK_IMPORTED_MODULE_3__["UserObservable"] },
    { type: _services_feedback_validator__WEBPACK_IMPORTED_MODULE_7__["FeedbackValidator"] },
    { type: _services_feedback_converter__WEBPACK_IMPORTED_MODULE_4__["FeedbackConverter"] },
    { type: _services_feedback_http_client__WEBPACK_IMPORTED_MODULE_5__["FeedbackHttpClient"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active")
], FeedbackComponent.prototype, "active", void 0);
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-feedback",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/components/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/modules/feedback/components/feedback.component.scss")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/modules/feedback/feedback.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/feedback/feedback.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feedback.component */ "./src/app/modules/feedback/components/feedback.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _pages_manage_feedbacks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/manage-feedbacks.page */ "./src/app/modules/feedback/pages/manage-feedbacks.page.ts");
/* harmony import */ var _user_services_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/services/admin.guard */ "./src/app/modules/user/services/admin.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/user.module */ "./src/app/modules/user/user.module.ts");









const routes = [
    {
        path: "feedbacks",
        component: _pages_manage_feedbacks_page__WEBPACK_IMPORTED_MODULE_5__["ManageFeedbacksPage"],
        canActivate: [_user_services_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]],
    },
];
let FeedbackModule = class FeedbackModule {
};
FeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
        ],
        exports: [_components_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]],
        declarations: [_components_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"], _pages_manage_feedbacks_page__WEBPACK_IMPORTED_MODULE_5__["ManageFeedbacksPage"]],
        providers: [],
    })
], FeedbackModule);



/***/ }),

/***/ "./src/app/modules/feedback/models/feedback.internal.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/feedback/models/feedback.internal.model.ts ***!
  \********************************************************************/
/*! exports provided: Feedback, FeedbacksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksPage", function() { return FeedbacksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/page.model */ "./src/app/modules/shared/models/page.model.ts");


class Feedback {
    constructor() {
        this.value = "";
    }
}
class FeedbacksPage extends _shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__["Page"] {
}


/***/ }),

/***/ "./src/app/modules/feedback/pages/manage-feedbacks.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/feedback/pages/manage-feedbacks.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmVlZGJhY2svcGFnZXMvbWFuYWdlLWZlZWRiYWNrcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/feedback/pages/manage-feedbacks.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/feedback/pages/manage-feedbacks.page.ts ***!
  \*****************************************************************/
/*! exports provided: ManageFeedbacksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFeedbacksPage", function() { return ManageFeedbacksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pages/manage-resources.page */ "./src/app/modules/shared/pages/manage-resources.page.ts");
/* harmony import */ var _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/feedback.internal.model */ "./src/app/modules/feedback/models/feedback.internal.model.ts");
/* harmony import */ var _services_feedback_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback.converter */ "./src/app/modules/feedback/services/feedback.converter.ts");
/* harmony import */ var _services_feedback_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/feedback.http-client */ "./src/app/modules/feedback/services/feedback.http-client.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");








let ManageFeedbacksPage = class ManageFeedbacksPage extends _shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_2__["AbstractManageResourcesPage"] {
    constructor(feedbackConverter, feedbackHttpClient, alertService) {
        super();
        this.feedbackConverter = feedbackConverter;
        this.feedbackHttpClient = feedbackHttpClient;
        this.alertService = alertService;
        this.currentPage = new _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_3__["FeedbacksPage"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"]([]);
        this.columns = ["author", "createdAt", "feedback"];
    }
    // prettier-ignore
    fetchPage(filter, page) {
        const request = this.feedbackConverter.toGetFeedbacksPageApiRequest(filter, page);
        this.feedbackHttpClient.getFeedbacksPage(request)
            .then(usersPage => this.handleFetchPageSuccessEvent(usersPage))
            .catch(error => this.handleGetFeedbacksPageErrorEvent(error));
    }
    handleGetFeedbacksPageErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while fetching feedbacks :(");
    }
};
ManageFeedbacksPage.ctorParameters = () => [
    { type: _services_feedback_converter__WEBPACK_IMPORTED_MODULE_4__["FeedbackConverter"] },
    { type: _services_feedback_http_client__WEBPACK_IMPORTED_MODULE_5__["FeedbackHttpClient"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
ManageFeedbacksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-feedbacks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/feedback/pages/manage-feedbacks.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-feedbacks.page.scss */ "./src/app/modules/feedback/pages/manage-feedbacks.page.scss")).default]
    })
], ManageFeedbacksPage);



/***/ }),

/***/ "./src/app/modules/feedback/services/feedback.converter.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/feedback/services/feedback.converter.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbackConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackConverter", function() { return FeedbackConverter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/feedback.internal.model */ "./src/app/modules/feedback/models/feedback.internal.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_user_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/services/user.converter */ "./src/app/modules/user/services/user.converter.ts");




let FeedbackConverter = class FeedbackConverter {
    constructor(userConverter) {
        this.userConverter = userConverter;
    }
    toGetFeedbacksPageApiRequest(filter, page, size = 5, sortBy = "CREATED_AT", sortDirection = "desc") {
        return {
            url: `/secure-api/feedbacks?filter=${filter}&page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
        };
    }
    toCreateFeedbackApiRequest(feedback) {
        return {
            url: "/secure-api/feedbacks",
            body: {
                value: feedback.value,
            },
        };
    }
    toFeedback(feedback) {
        const res = new _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_1__["Feedback"]();
        res.value = feedback.value;
        res.createdAt = new Date(feedback.createdAtIso8601);
        res.author = this.userConverter.toAuthor(feedback.author);
        return res;
    }
    toFeedbacksPage(page) {
        const res = new _models_feedback_internal_model__WEBPACK_IMPORTED_MODULE_1__["FeedbacksPage"]();
        res.totalItems = page.totalItems;
        res.firstPage = page.page == 0;
        res.lastPage = page.lastPage;
        res.page = page.page;
        page.items.forEach((feedback) => res.items.push(this.toFeedback(feedback)));
        return res;
    }
};
FeedbackConverter.ctorParameters = () => [
    { type: _user_services_user_converter__WEBPACK_IMPORTED_MODULE_3__["UserConverter"] }
];
FeedbackConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], FeedbackConverter);



/***/ }),

/***/ "./src/app/modules/feedback/services/feedback.http-client.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/feedback/services/feedback.http-client.ts ***!
  \*******************************************************************/
/*! exports provided: FeedbackHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackHttpClient", function() { return FeedbackHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _feedback_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.converter */ "./src/app/modules/feedback/services/feedback.converter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FeedbackHttpClient = class FeedbackHttpClient {
    constructor(http, feedbackConverter) {
        this.http = http;
        this.feedbackConverter = feedbackConverter;
    }
    // prettier-ignore
    createFeedback(request) {
        return this.http
            .post(request.url, request.body)
            .toPromise();
    }
    // prettier-ignore
    getFeedbacksPage(request) {
        return this.http
            .get(request.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((feedbacks) => this.feedbackConverter.toFeedbacksPage(feedbacks)))
            .toPromise();
    }
};
FeedbackHttpClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _feedback_converter__WEBPACK_IMPORTED_MODULE_3__["FeedbackConverter"] }
];
FeedbackHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], FeedbackHttpClient);



/***/ }),

/***/ "./src/app/modules/feedback/services/feedback.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/feedback/services/feedback.validator.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbackValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackValidator", function() { return FeedbackValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/string.utils */ "./src/app/modules/shared/services/string.utils.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let FeedbackValidator = class FeedbackValidator {
    constructor(alertService) {
        this.alertService = alertService;
    }
    validateFeedback(feedback) {
        const errors = [];
        if (_shared_services_string_utils__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].isBlank(feedback.value)) {
            errors.push("Feedback title is mandatory");
        }
        if (errors.length > 0)
            this.alertService.error(errors.join("\n"));
        return errors.length === 0;
    }
};
FeedbackValidator.ctorParameters = () => [
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
FeedbackValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], FeedbackValidator);



/***/ }),

/***/ "./src/app/modules/loader/loader.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/loader/loader.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background: var(--body-background-color);\n}\n\n.loader {\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 80px;\n}\n\n.loader div {\n  -webkit-animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.loader div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--primary-color);\n  margin: -4px 0 0 -4px;\n}\n\n.loader div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.loader div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.loader div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.loader div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.loader div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.loader div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.loader div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.loader div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.loader div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.loader div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.loader div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.loader div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.loader div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.loader div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.loader div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.loader div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@-webkit-keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2FkZXIvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLG9FQUFBO1VBQUEsNERBQUE7RUFDQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDSUY7O0FERkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREhBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ01GOztBREpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNPRjs7QURMQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNRRjs7QUROQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDVUY7O0FEUkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFRBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQ1lGOztBRFZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNhRjs7QURYQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNjRjs7QURaQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDZUY7O0FEYkE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNpQkY7O0FEZkE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDa0JGOztBRGhCQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDbUJGOztBRGpCQTtFQUNFO0lBQ0UsdUJBQUE7RUNvQkY7RURsQkE7SUFDRSx5QkFBQTtFQ29CRjtBQUNGOztBRDFCQTtFQUNFO0lBQ0UsdUJBQUE7RUNvQkY7RURsQkE7SUFDRSx5QkFBQTtFQ29CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubG9hZGVyIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxufVxyXG4ubG9hZGVyIGRpdjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xyXG4gIHRvcDogNjNweDtcclxuICBsZWZ0OiA2M3B4O1xyXG59XHJcbi5sb2FkZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG59XHJcbi5sb2FkZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgdG9wOiA2OHB4O1xyXG4gIGxlZnQ6IDU2cHg7XHJcbn1cclxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XHJcbn1cclxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICB0b3A6IDcxcHg7XHJcbiAgbGVmdDogNDhweDtcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiA0MHB4O1xyXG59XHJcbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbn1cclxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuICB0b3A6IDcxcHg7XHJcbiAgbGVmdDogMzJweDtcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcclxufVxyXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gIHRvcDogNjhweDtcclxuICBsZWZ0OiAyNHB4O1xyXG59XHJcbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xyXG59XHJcbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XHJcbiAgdG9wOiA2M3B4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbn1cclxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbn1cclxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcclxuICB0b3A6IDU2cHg7XHJcbiAgbGVmdDogMTJweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ubG9hZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubG9hZGVyIGRpdiB7XG4gIGFuaW1hdGlvbjogbG9hZGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuXG4ubG9hZGVyIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogNjNweDtcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIHRvcDogNzJweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiAxN3B4O1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG5cbi5sb2FkZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/loader/loader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/loader/loader.component.ts ***!
  \****************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/modules/loader/loader.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-loader",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/loader/loader.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("800ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                ]),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/modules/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/modules/loader/loader.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/loader/loader.interceptor.ts ***!
  \******************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/modules/loader/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_services_user_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/services/user.http-client */ "./src/app/modules/user/services/user.http-client.ts");





const HTTP_REQUEST_WITHOUT_LOADER = [_user_services_user_http_client__WEBPACK_IMPORTED_MODULE_4__["GET_CURRENT_IDENTITY_URL"]];
let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    // prettier-ignore
    intercept(req, next) {
        if (HTTP_REQUEST_WITHOUT_LOADER.includes(req.url)) {
            return next.handle(req);
        }
        else {
            this.loaderService.show();
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loaderService.hide()));
        }
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/modules/loader/loader.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/loader/loader.module.ts ***!
  \*************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/app/modules/loader/loader.component.ts");




let LoaderModule = class LoaderModule {
};
LoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
        declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
        providers: [],
    })
], LoaderModule);



/***/ }),

/***/ "./src/app/modules/loader/loader.service.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/loader/loader.service.ts ***!
  \**************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        setTimeout(() => {
            this.isLoading.next(false);
        }, 300);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderService);



/***/ }),

/***/ "./src/app/modules/markdown/code.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/markdown/code.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-markdown ::ng-deep .single-code-container {\n  --code-border-top-left-radius: 0.3rem;\n  --code-border-top-right-radius: 0.3rem;\n  --code-border-bottom-left-radius: 0.3rem;\n  --code-border-bottom-right-radius: 0.3rem;\n}\n.app-markdown ::ng-deep .multiple-code-container {\n  --code-border-top-left-radius: 0;\n  --code-border-top-right-radius: 0;\n  --code-border-bottom-left-radius: 0.3rem;\n  --code-border-bottom-right-radius: 0.3rem;\n}\n.app-markdown ::ng-deep .single-code-container, .app-markdown ::ng-deep .multiple-code-container .code-inside-multiple-code-container {\n  max-height: var(--code-height);\n  scrollbar-width: none;\n  overflow-y: auto;\n}\n.app-markdown ::ng-deep .single-code-container::-webkit-scrollbar, .app-markdown ::ng-deep .multiple-code-container .code-inside-multiple-code-container::-webkit-scrollbar {\n  display: none;\n}\n.app-markdown ::ng-deep .code-container {\n  display: flex;\n  font-size: 1.6rem;\n  line-height: 1.3;\n  font-family: \"Anonymous Pro\", monospace;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.app-markdown ::ng-deep .code-container .line-numbers {\n  display: flex;\n  flex-direction: column;\n  width: 5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  color: var(--code-line-numbers-color);\n  background-color: var(--code-line-numbers-background-color);\n  text-align: right;\n  border-top-left-radius: var(--code-border-top-left-radius);\n  border-bottom-left-radius: var(--code-border-bottom-left-radius);\n  padding: 1.6rem 0.8rem 1.6rem 0;\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n.app-markdown ::ng-deep .code-container .code {\n  flex: 1;\n  border-top-right-radius: var(--code-border-top-right-radius);\n  border-bottom-right-radius: var(--code-border-bottom-right-radius);\n  overflow-x: auto;\n  overflow-x: overlay;\n}\n.app-markdown ::ng-deep .code-container .code code {\n  padding: 1.6rem !important;\n  color: var(--code-color) !important;\n  background-color: var(--code-background-color) !important;\n  transition: var(--transition);\n  transition-property: color, background-color;\n  scrollbar-width: none;\n}\n.app-markdown ::ng-deep .code-container .code code::-webkit-scrollbar {\n  display: none;\n}\n.app-markdown ::ng-deep .code-container .copy-code-container {\n  position: absolute;\n  top: 1.6rem;\n  right: 1.6rem;\n}\n.app-markdown ::ng-deep .code-container .copy-code-container .copy-icon {\n  font-size: 2rem;\n  color: var(--code-copy-icon-color);\n  transition: var(--transition);\n  transition-property: color;\n}\n.app-markdown ::ng-deep .code-container .copy-code-container .copy-icon:hover {\n  color: var(--primary-color);\n}\n.app-markdown ::ng-deep .code-tabs {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-x: overlay;\n  scrollbar-width: none;\n  background-color: var(--code-background-color);\n  border-bottom: 1px solid var(--code-line-numbers-background-color);\n  transition: var(--transition);\n  transition-property: color, border-color, background-color;\n  border-radius: 0.3rem 0.3rem 0 0;\n}\n.app-markdown ::ng-deep .code-tabs span {\n  padding: 1.4rem 1.8rem;\n  color: var(--code-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n  font-size: 1.6rem;\n  cursor: pointer;\n}\n.app-markdown ::ng-deep .code-tabs span.active {\n  color: var(--primary-color);\n  border-bottom: 2px solid var(--primary-color);\n}\n.app-markdown ::ng-deep .code-tabs span:hover {\n  background-color: var(--code-tab-background-color-on-hover);\n}\n.app-markdown ::ng-deep .code-inside-multiple-code-container {\n  display: none;\n}\n.app-markdown ::ng-deep .code-inside-multiple-code-container.active {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG1hcmtkb3duXFxjb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21hcmtkb3duL2NvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtBQ0FKO0FER0U7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtBQ0RKO0FESUU7RUFFRSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1FO0VBSUUsYUFBQTtBQ1BKO0FEVUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJEQUFBO0VBQ0EsaUJBQUE7RUFDQSwwREFBQTtFQUNBLGdFQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0FDUk47QURXSTtFQUNFLE9BQUE7RUFDQSw0REFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ROO0FEV007RUFDRSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EseURBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUNUUjtBRGFJO0VBQ0UsYUFBQTtBQ1hOO0FEY0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDWk47QURjTTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNaUjtBRGNRO0VBQ0UsMkJBQUE7QUNaVjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0VBQUE7RUFDQSw2QkFBQTtFQUNBLDBEQUFBO0VBQ0EsZ0NBQUE7QUNoQko7QURrQkk7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2hCTjtBRGtCTTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUNoQlI7QURtQk07RUFDRSwyREFBQTtBQ2pCUjtBRHNCRTtFQUNFLGFBQUE7QUNwQko7QURxQkk7RUFDRSxjQUFBO0FDbkJOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi9jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1tYXJrZG93biA6Om5nLWRlZXAge1xyXG4gICYgLnNpbmdsZS1jb2RlLWNvbnRhaW5lciB7XHJcbiAgICAtLWNvZGUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xyXG4gICAgLS1jb2RlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XHJcbiAgICAtLWNvZGUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xyXG4gICAgLS1jb2RlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XHJcbiAgfVxyXG5cclxuICAmIC5tdWx0aXBsZS1jb2RlLWNvbnRhaW5lciB7XHJcbiAgICAtLWNvZGUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIC0tY29kZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIC0tY29kZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XHJcbiAgICAtLWNvZGUtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gICYgLnNpbmdsZS1jb2RlLWNvbnRhaW5lcixcclxuICAmIC5tdWx0aXBsZS1jb2RlLWNvbnRhaW5lciAuY29kZS1pbnNpZGUtbXVsdGlwbGUtY29kZS1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1oZWlnaHQpO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcblxyXG4gICYgLnNpbmdsZS1jb2RlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbiAgJlxyXG4gICAgLm11bHRpcGxlLWNvZGUtY29udGFpbmVyXHJcbiAgICAuY29kZS1pbnNpZGUtbXVsdGlwbGUtY29kZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmIC5jb2RlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW5vbnltb3VzIFByb1wiLCBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJiAubGluZS1udW1iZXJzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2RlLWxpbmUtbnVtYmVycy1jb2xvcik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZGUtbGluZS1udW1iZXJzLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKTtcclxuICAgICAgcGFkZGluZzogMS42cmVtIDAuOHJlbSAxLjZyZW0gMDtcclxuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYgLmNvZGUge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyk7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1jb2RlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKTtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgb3ZlcmZsb3cteDogb3ZlcmxheTtcclxuXHJcbiAgICAgICYgY29kZSB7XHJcbiAgICAgICAgcGFkZGluZzogMS42cmVtICFpbXBvcnRhbnQ7IC8vIG92ZXJyaWRlIGhsanMgc3R5bGVzXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvZGUtY29sb3IpICFpbXBvcnRhbnQ7IC8vIG92ZXJyaWRlIGhsanMgc3R5bGVzXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29kZS1iYWNrZ3JvdW5kLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgLmNvZGUgY29kZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYgLmNvcHktY29kZS1jb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMS42cmVtO1xyXG4gICAgICByaWdodDogMS42cmVtO1xyXG5cclxuICAgICAgJiAuY29weS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvZGUtY29weS1pY29uLWNvbG9yKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5jb2RlLXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IG92ZXJsYXk7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2RlLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvZGUtbGluZS1udW1iZXJzLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYm9yZGVyLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbSAwIDA7XHJcblxyXG4gICAgJiBzcGFuIHtcclxuICAgICAgcGFkZGluZzogMS40cmVtIDEuOHJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvZGUtY29sb3IpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29kZS10YWItYmFja2dyb3VuZC1jb2xvci1vbi1ob3Zlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmNvZGUtaW5zaWRlLW11bHRpcGxlLWNvZGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuc2luZ2xlLWNvZGUtY29udGFpbmVyIHtcbiAgLS1jb2RlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgLS1jb2RlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XG4gIC0tY29kZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XG4gIC0tY29kZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLm11bHRpcGxlLWNvZGUtY29udGFpbmVyIHtcbiAgLS1jb2RlLWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIC0tY29kZS1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgLS1jb2RlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgLS1jb2RlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuc2luZ2xlLWNvZGUtY29udGFpbmVyLCAuYXBwLW1hcmtkb3duIDo6bmctZGVlcCAubXVsdGlwbGUtY29kZS1jb250YWluZXIgLmNvZGUtaW5zaWRlLW11bHRpcGxlLWNvZGUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1oZWlnaHQpO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuc2luZ2xlLWNvZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciwgLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLm11bHRpcGxlLWNvZGUtY29udGFpbmVyIC5jb2RlLWluc2lkZS1tdWx0aXBsZS1jb2RlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLmNvZGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtZmFtaWx5OiBcIkFub255bW91cyBQcm9cIiwgbW9ub3NwYWNlO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC5jb2RlLWNvbnRhaW5lciAubGluZS1udW1iZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDVyZW07XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2RlLWxpbmUtbnVtYmVycy1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZGUtbGluZS1udW1iZXJzLWJhY2tncm91bmQtY29sb3IpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKTtcbiAgcGFkZGluZzogMS42cmVtIDAuOHJlbSAxLjZyZW0gMDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLmNvZGUtY29udGFpbmVyIC5jb2RlIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWNvZGUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tY29kZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyk7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXg6IG92ZXJsYXk7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuY29kZS1jb250YWluZXIgLmNvZGUgY29kZSB7XG4gIHBhZGRpbmc6IDEuNnJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY29kZS1jb2xvcikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29kZS1iYWNrZ3JvdW5kLWNvbG9yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC5jb2RlLWNvbnRhaW5lciAuY29kZSBjb2RlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuY29kZS1jb250YWluZXIgLmNvcHktY29kZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS42cmVtO1xuICByaWdodDogMS42cmVtO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLmNvZGUtY29udGFpbmVyIC5jb3B5LWNvZGUtY29udGFpbmVyIC5jb3B5LWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2RlLWNvcHktaWNvbi1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC5jb2RlLWNvbnRhaW5lciAuY29weS1jb2RlLWNvbnRhaW5lciAuY29weS1pY29uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLmNvZGUtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy14OiBvdmVybGF5O1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZGUtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2RlLWxpbmUtbnVtYmVycy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBib3JkZXItY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW0gMCAwO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLmNvZGUtdGFicyBzcGFuIHtcbiAgcGFkZGluZzogMS40cmVtIDEuOHJlbTtcbiAgY29sb3I6IHZhcigtLWNvZGUtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuY29kZS10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuY29kZS10YWJzIHNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2RlLXRhYi1iYWNrZ3JvdW5kLWNvbG9yLW9uLWhvdmVyKTtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC5jb2RlLWluc2lkZS1tdWx0aXBsZS1jb2RlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAuY29kZS1pbnNpZGUtbXVsdGlwbGUtY29kZS1jb250YWluZXIuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/markdown/code.renderer.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/markdown/code.renderer.ts ***!
  \***************************************************/
/*! exports provided: codeRenderer, handleCodeTabClick, handleCopyCode, handleCopyCodeMouseLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRenderer", function() { return codeRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCodeTabClick", function() { return handleCodeTabClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCopyCode", function() { return handleCopyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCopyCodeMouseLeave", function() { return handleCopyCodeMouseLeave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);


const MULTIPLE_CODE = "multiple";
const MULTI_CODE_SEPARATOR = "\n---\n";
function codeRenderer(code, language) {
    if (language == MULTIPLE_CODE) {
        return /*html*/ `
      <div class="multiple-code-container">
        ${renderMultiTabCode(code)}
      </div>
    `;
    }
    else {
        return /*html*/ `
      <div class="single-code-container">
        ${renderSingleCode(code, language)}
      </div>
    `;
    }
}
function handleCodeTabClick(event) {
    deactivateCodes(event);
    activateCurrentCode(event);
}
function handleCopyCode(event) {
    const codeContainer = event.target.closest(".code-container");
    const code = codeContainer.querySelector("code");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeRange(range);
    const tooltipContainer = event.target.closest("[data-tooltip]");
    tooltipContainer.setAttribute("data-tooltip", "Copied");
}
function handleCopyCodeMouseLeave(event) {
    const tooltipContainer = event.target.querySelector("[data-tooltip]");
    tooltipContainer.setAttribute("data-tooltip", "copy code");
}
function activateCurrentCode(event) {
    event.target.classList.add("active");
    document
        .getElementById(event.target.dataset.associatedCodeId)
        .classList.add("active");
}
function deactivateCodes(event) {
    const currentMultipleCodeContainer = event.target.parentElement.parentElement;
    currentMultipleCodeContainer
        .querySelectorAll(".code-inside-multiple-code-container")
        .forEach((code) => code.classList.remove("active"));
    currentMultipleCodeContainer
        .querySelectorAll(".code-tabs span")
        .forEach((tab) => tab.classList.remove("active"));
}
function renderMultiTabCode(multipleCode) {
    const map = new Map();
    multipleCode.split(MULTI_CODE_SEPARATOR).forEach((code) => {
        const name = getCodeName(code);
        const language = getCodeLanguage(code);
        const body = getCodeBody(code);
        map.set(name, renderSingleCode(body, language));
    });
    const associatedCodeIdPrefix = getAssociatedCodeIdPrefix();
    return /* html */ `
    <div class="code-tabs">
      ${codeTabsMarkup(map, associatedCodeIdPrefix)}
    </div>
    ${codeMarkup(map, associatedCodeIdPrefix)}
  `;
}
function codeMarkup(map, associatedCodeIdPrefix) {
    let res = "";
    let first = true;
    map.forEach((value, key) => {
        let associatedCodeId = getAssociatedCodeId(key, associatedCodeIdPrefix);
        if (first) {
            res += `<div id="${associatedCodeId}" class="code-inside-multiple-code-container active">${value}</div>`;
            first = false;
        }
        else {
            res += `<div id="${associatedCodeId}" class="code-inside-multiple-code-container">${value}</div>`;
        }
    });
    return res;
}
function codeTabsMarkup(map, associatedCodeIdPrefix) {
    let res = "";
    let first = true;
    map.forEach((value, key) => {
        let associatedCodeId = getAssociatedCodeId(key, associatedCodeIdPrefix);
        if (first) {
            res += `<span data-associated-code-id="${associatedCodeId}" class="active">${key}</span>`;
            first = false;
        }
        else {
            res += `<span data-associated-code-id="${associatedCodeId}">${key}</span>`;
        }
    });
    return res;
}
function getAssociatedCodeIdPrefix() {
    return "" + Math.round(Math.random() * 100000);
}
function getAssociatedCodeId(tabName, associatedCodeIdPrefix) {
    return associatedCodeIdPrefix + "-" + tabName;
}
function getCodeBody(code) {
    const body = code.split(/\r?\n/);
    body.shift();
    return body.join("\n");
}
function getCodeLanguage(code) {
    return code.split(/\r?\n/)[0].split("|")[1];
}
function getCodeName(code) {
    return code.split(/\r?\n/)[0].split("|")[0];
}
function renderSingleCode(code, language) {
    if (!(language && highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.getLanguage(language))) {
        language = "markdown"; // use 'markdown' as default language
    }
    const result = highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(language, code).value;
    const codeLineNumbers = codeLineNumbersMarkup(result.split("\n").length);
    return /* html */ `
    <div class="code-container">
      ${codeLineNumbers}
      <pre class="code"><code class="hljs ${language}">${result}</code></pre>
      <div class="copy-code-container">
        <div class="tooltip-container tooltip-left" data-tooltip="copy code">
          <span class="copy-icon iconify" data-icon="ic:round-content-copy"></span>
        </div>
      </div>
    </div>
  `;
}
function codeLineNumbersMarkup(nb) {
    let markup = "";
    for (let i = 0; i < nb; i++) {
        markup += `<span>${i + 1}</span>`;
    }
    return `<div class="line-numbers">${markup}</div>`;
}


/***/ }),

/***/ "./src/app/modules/markdown/markdown.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/markdown/markdown.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-markdown ::ng-deep h1 {\n  font-size: 3rem;\n  margin: 1rem 0;\n}\n.app-markdown ::ng-deep h2 {\n  font-size: 2.5rem;\n  margin: 1rem 0;\n}\n.app-markdown ::ng-deep h3 {\n  font-size: 2rem;\n  margin: 0.7rem 0;\n}\n.app-markdown ::ng-deep p {\n  margin: 0.7rem 0;\n}\n.app-markdown ::ng-deep a {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.app-markdown ::ng-deep a:hover {\n  text-decoration: underline;\n}\n.app-markdown ::ng-deep ul, .app-markdown ::ng-deep ol {\n  margin: 0.7rem 0;\n}\n.app-markdown ::ng-deep ul li, .app-markdown ::ng-deep ol li {\n  list-style-position: inside;\n  padding-left: 1.5rem;\n  margin: 0.8rem 0;\n}\n.app-markdown ::ng-deep ul li {\n  list-style-type: square;\n}\n.app-markdown ::ng-deep ol li {\n  list-style-type: none;\n}\n.app-markdown ::ng-deep ol {\n  counter-reset: ordered-list;\n}\n.app-markdown ::ng-deep ol li::before {\n  counter-increment: ordered-list;\n  content: counter(ordered-list);\n  color: var(--primary-color);\n  font-weight: bold;\n  padding-right: 1.5rem;\n}\n.app-markdown ::ng-deep hr {\n  margin: 1rem 0;\n  height: 0.4rem;\n  background-color: var(--border-color);\n  color: var(--border-color);\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG1hcmtkb3duXFxtYXJrZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi9tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBRE1FO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQ0pKO0FETUk7RUFDRSwwQkFBQTtBQ0pOO0FEUUU7RUFFRSxnQkFBQTtBQ1BKO0FEVUU7RUFFRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UsdUJBQUE7QUNWSjtBRGFFO0VBQ0UscUJBQUE7QUNYSjtBRGNFO0VBQ0UsMkJBQUE7QUNaSjtBRGVFO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1hcmtkb3duIDo6bmctZGVlcCB7XHJcbiAgJiBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICB9XHJcblxyXG4gICYgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICB9XHJcblxyXG4gICYgaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwLjdyZW0gMDtcclxuICB9XHJcblxyXG4gICYgcCB7XHJcbiAgICBtYXJnaW46IDAuN3JlbSAwO1xyXG4gIH1cclxuXHJcbiAgJiBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIHVsLFxyXG4gICYgb2wge1xyXG4gICAgbWFyZ2luOiAwLjdyZW0gMDtcclxuICB9XHJcblxyXG4gICYgdWwgbGksXHJcbiAgJiBvbCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogMC44cmVtIDA7XHJcbiAgfVxyXG5cclxuICAmIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gIH1cclxuXHJcbiAgJiBvbCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmIG9sIHtcclxuICAgIGNvdW50ZXItcmVzZXQ6IG9yZGVyZWQtbGlzdDtcclxuICB9XHJcblxyXG4gICYgb2wgbGk6OmJlZm9yZSB7XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogb3JkZXJlZC1saXN0O1xyXG4gICAgY29udGVudDogY291bnRlcihvcmRlcmVkLWxpc3QpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmIGhyIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgaGVpZ2h0OiAwLjRyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIuYXBwLW1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDAuN3JlbSAwO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgcCB7XG4gIG1hcmdpbjogMC43cmVtIDA7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCBhIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCB1bCwgLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgb2wge1xuICBtYXJnaW46IDAuN3JlbSAwO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgdWwgbGksIC5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIG9sIGxpIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgbWFyZ2luOiAwLjhyZW0gMDtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCBvbCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIG9sIHtcbiAgY291bnRlci1yZXNldDogb3JkZXJlZC1saXN0O1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgb2wgbGk6OmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBvcmRlcmVkLWxpc3Q7XG4gIGNvbnRlbnQ6IGNvdW50ZXIob3JkZXJlZC1saXN0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgaHIge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgaGVpZ2h0OiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/markdown/markdown.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/markdown/markdown.component.ts ***!
  \********************************************************/
/*! exports provided: MarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownComponent", function() { return MarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _marked_renderer_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marked-renderer.factory */ "./src/app/modules/markdown/marked-renderer.factory.ts");
/* harmony import */ var _code_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.renderer */ "./src/app/modules/markdown/code.renderer.ts");







let MarkdownComponent = class MarkdownComponent {
    constructor(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        const renderer = Object(_marked_renderer_factory__WEBPACK_IMPORTED_MODULE_5__["createRenderer"])();
        this.md = marked__WEBPACK_IMPORTED_MODULE_3___default.a.setOptions({ renderer });
    }
    ngOnChanges(changes) {
        this.handleMarkdownChanges(changes);
        this.handleCodeCopyClick();
    }
    handleCodeCopyClick() {
        setTimeout(() => {
            document
                .querySelectorAll(".code-tabs span")
                .forEach((tab) => tab.addEventListener("click", _code_renderer__WEBPACK_IMPORTED_MODULE_6__["handleCodeTabClick"]));
            document.querySelectorAll(".copy-code-container").forEach((tab) => {
                tab.addEventListener("click", _code_renderer__WEBPACK_IMPORTED_MODULE_6__["handleCopyCode"]);
                tab.addEventListener("mouseleave", _code_renderer__WEBPACK_IMPORTED_MODULE_6__["handleCopyCodeMouseLeave"]);
            });
        }, 0);
    }
    handleMarkdownChanges(changes) {
        for (const propName in changes) {
            if (propName === "text") {
                const value = changes[propName].currentValue;
                if (value) {
                    this.data = this.markdownToSafeHtml(value);
                }
            }
        }
    }
    markdownToSafeHtml(value) {
        const html = this.md(value);
        const safeHtml = dompurify__WEBPACK_IMPORTED_MODULE_4___default.a.sanitize(html);
        return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
    }
};
MarkdownComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkdownComponent.prototype, "text", void 0);
MarkdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-markdown",
        template: '<div class="app-markdown" [innerHTML]="data"></div>',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./markdown.component.scss */ "./src/app/modules/markdown/markdown.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.scss */ "./src/app/modules/markdown/code.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-with-icon.component.scss */ "./src/app/modules/markdown/text-with-icon.component.scss")).default]
    })
], MarkdownComponent);



/***/ }),

/***/ "./src/app/modules/markdown/markdown.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/markdown/markdown.module.ts ***!
  \*****************************************************/
/*! exports provided: MarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return MarkdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _markdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown.component */ "./src/app/modules/markdown/markdown.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");





let MarkdownModule = class MarkdownModule {
};
MarkdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_markdown_component__WEBPACK_IMPORTED_MODULE_2__["MarkdownComponent"]],
        declarations: [_markdown_component__WEBPACK_IMPORTED_MODULE_2__["MarkdownComponent"]],
        providers: [],
    })
], MarkdownModule);



/***/ }),

/***/ "./src/app/modules/markdown/marked-renderer.factory.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/markdown/marked-renderer.factory.ts ***!
  \*************************************************************/
/*! exports provided: createRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _code_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.renderer */ "./src/app/modules/markdown/code.renderer.ts");
/* harmony import */ var _quote_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote.renderer */ "./src/app/modules/markdown/quote.renderer.ts");
/* harmony import */ var _paragraph_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paragraph.renderer */ "./src/app/modules/markdown/paragraph.renderer.ts");





function createRenderer() {
    const renderer = new marked__WEBPACK_IMPORTED_MODULE_1__["Renderer"]();
    renderer.code = _code_renderer__WEBPACK_IMPORTED_MODULE_2__["codeRenderer"];
    renderer.blockquote = _quote_renderer__WEBPACK_IMPORTED_MODULE_3__["quoteRenderer"];
    renderer.paragraph = _paragraph_renderer__WEBPACK_IMPORTED_MODULE_4__["paragraphRenderer"];
    return renderer;
}


/***/ }),

/***/ "./src/app/modules/markdown/paragraph.renderer.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/markdown/paragraph.renderer.ts ***!
  \********************************************************/
/*! exports provided: paragraphRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paragraphRenderer", function() { return paragraphRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function paragraphRenderer(text) {
    const infoRegex = /^\[INFO\]\s*/;
    if (infoRegex.test(text)) {
        text = text.replace(infoRegex, "");
        return /* html */ `
      <div class="text-with-icon info">
        <img class="icon" src="/assets/icon/info.svg" />
        <p>${text}</p>
      </div>
    `;
    }
    const warnRegex = /^\[WARN\]\s*/;
    if (warnRegex.test(text)) {
        text = text.replace(warnRegex, "");
        return /* html */ `
      <div class="text-with-icon warn">
        <img class="icon" src="/assets/icon/warn.svg" />
        <p>${text}</p>
      </div>
    `;
    }
    const errorRegex = /^\[ERROR\]\s*/;
    if (errorRegex.test(text)) {
        text = text.replace(errorRegex, "");
        return /* html */ `
      <div class="text-with-icon error">
        <img class="icon" src="/assets/icon/error.svg" />
        <p>${text}</p>
      </div>
    `;
    }
    return `<p>${text}</p>`;
}


/***/ }),

/***/ "./src/app/modules/markdown/quote.renderer.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/markdown/quote.renderer.ts ***!
  \****************************************************/
/*! exports provided: quoteRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteRenderer", function() { return quoteRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function quoteRenderer(quote) {
    const regex = /\[(.+?)\]<\/p>/;
    if (!regex.test(quote)) {
        return /* html */ `
    <div class="text-with-icon quote">
      <img class="icon" src="/assets/icon/quote.svg" />
      ${quote}
    </div>
    `;
    }
    const author = regex.exec(quote)[1];
    quote = quote.replace(regex, "</p>");
    return /* html */ `
    <div class="text-with-icon quote">
      <img class="icon" src="/assets/icon/quote.svg" />
      <div>
        ${quote}
        <p class="author">— ${author}</p>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/app/modules/markdown/simplemde.options.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/markdown/simplemde.options.ts ***!
  \*******************************************************/
/*! exports provided: SIMPLEMDE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMPLEMDE_OPTIONS", function() { return SIMPLEMDE_OPTIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SIMPLEMDE_OPTIONS = {
    spellChecker: false,
    toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "code",
        "table",
        "|",
        {
            name: "references",
            action: toggleReference,
            className: "fa fa-lightbulb-o",
            title: "references",
        },
        {
            name: "info",
            action: toggleInfo,
            className: "fa fa-info",
            title: "Info message",
        },
        {
            name: "warn",
            action: toggleWarn,
            className: "fa fa-exclamation",
            title: "Warn message",
        },
        {
            name: "error",
            action: toggleError,
            className: "fa fa-exclamation-triangle",
            title: "Error message",
        },
        "|",
        "fullscreen",
        "guide",
    ],
};
function toggleReference(editor) {
    _toggleLine(editor, "reference");
}
function toggleInfo(editor) {
    _toggleLine(editor, "info");
}
function toggleWarn(editor) {
    _toggleLine(editor, "warn");
}
function toggleError(editor) {
    _toggleLine(editor, "error");
}
function _toggleLine(editor, name) {
    // code inspiration: https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L895
    const cm = editor.codemirror;
    var startPoint = cm.getCursor("start");
    var endPoint = cm.getCursor("end");
    var regex = {
        info: /^(\s*)\[INFO\]\s+/,
        warn: /^(\s*)\[WARN\]\s+/,
        error: /^(\s*)\[ERROR\]\s+/,
        reference: /^(\s*)## References\s+/,
    };
    var regexReplace = {
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] ",
        reference: "## References\n* [](http://)\n* [](http://)",
    };
    for (var i = startPoint.line; i <= endPoint.line; i++) {
        var text = cm.getLine(i);
        if (regex[name].test(text)) {
            text = text.replace(regex[name], "");
        }
        else {
            text = regexReplace[name] + text;
        }
        cm.replaceRange(text, {
            line: i,
            ch: 0,
        }, {
            line: i,
            ch: 99999999999999,
        });
    }
    cm.focus();
}


/***/ }),

/***/ "./src/app/modules/markdown/text-with-icon.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/markdown/text-with-icon.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-markdown ::ng-deep .text-with-icon {\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.3rem;\n  font-size: 1.6rem;\n  line-height: 2.5rem;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: flex-start;\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n.app-markdown ::ng-deep .text-with-icon img {\n  width: 4.5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding-right: 1.6rem;\n}\n.app-markdown ::ng-deep .text-with-icon p:first-of-type {\n  margin: 0;\n}\n.app-markdown ::ng-deep .text-with-icon.quote {\n  font-style: italic;\n  background-color: var(--quote-background-color);\n  color: var(--quote-text-color);\n}\n.app-markdown ::ng-deep .text-with-icon.quote .author {\n  float: right;\n  margin: 0.5rem 0 0;\n  color: var(--primary-color);\n  font-size: 1.35rem;\n  font-weight: bold;\n}\n.app-markdown ::ng-deep .text-with-icon.info {\n  background-color: var(--info-background-color);\n  color: var(--info-text-color);\n}\n.app-markdown ::ng-deep .text-with-icon.warn {\n  background-color: var(--warn-background-color);\n  color: var(--warn-text-color);\n}\n.app-markdown ::ng-deep .text-with-icon.error {\n  background-color: var(--error-background-color);\n  color: var(--error-text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG1hcmtkb3duXFx0ZXh0LXdpdGgtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYXJrZG93bi90ZXh0LXdpdGgtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FOO0FER0k7RUFDRSxTQUFBO0FDRE47QURJSTtFQUNFLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtBQ0ZOO0FESU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRE1JO0VBQ0UsOENBQUE7RUFDQSw2QkFBQTtBQ0pOO0FET0k7RUFDRSw4Q0FBQTtFQUNBLDZCQUFBO0FDTE47QURRSTtFQUNFLCtDQUFBO0VBQ0EsOEJBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2Rvd24vdGV4dC13aXRoLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1hcmtkb3duIDo6bmctZGVlcCB7XHJcbiAgJiAudGV4dC13aXRoLWljb24ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0LjVyZW07XHJcbiAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmIHA6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnF1b3RlIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgY29sb3I6IHZhcigtLXF1b3RlLXRleHQtY29sb3IpO1xyXG5cclxuICAgICAgJiAuYXV0aG9yIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5mby10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAmLndhcm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2Fybi10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLnRleHQtd2l0aC1pY29uIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC50ZXh0LXdpdGgtaWNvbiBpbWcge1xuICB3aWR0aDogNC41cmVtO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjZyZW07XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAudGV4dC13aXRoLWljb24gcDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLnRleHQtd2l0aC1pY29uLnF1b3RlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXF1b3RlLXRleHQtY29sb3IpO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLnRleHQtd2l0aC1pY29uLnF1b3RlIC5hdXRob3Ige1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMC41cmVtIDAgMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFwcC1tYXJrZG93biA6Om5nLWRlZXAgLnRleHQtd2l0aC1pY29uLmluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW5mby10ZXh0LWNvbG9yKTtcbn1cbi5hcHAtbWFya2Rvd24gOjpuZy1kZWVwIC50ZXh0LXdpdGgtaWNvbi53YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2Fybi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXdhcm4tdGV4dC1jb2xvcik7XG59XG4uYXBwLW1hcmtkb3duIDo6bmctZGVlcCAudGV4dC13aXRoLWljb24uZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWVycm9yLXRleHQtY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-container/navbar.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-container/navbar.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --navbar-padding: 0;\n  position: fixed;\n  top: 0;\n  z-index: var(--navbar-z-index);\n  width: 100%;\n  background-color: var(--body-background-color);\n  transition: box-shadow 0.2s ease-in;\n  padding: var(--navbar-padding);\n}\n@media screen and (max-width: 480px) {\n  :host {\n    --navbar-padding: 0 3rem;\n  }\n}\n:host.shadow {\n  box-shadow: var(--box-shadow);\n}\nnav {\n  margin: 0 auto;\n  width: var(--main-page-width);\n  height: var(--navbar-height);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.not-authenticated-user-links {\n  display: flex;\n  align-items: center;\n  height: var(--navbar-height);\n}\n.not-authenticated-user-links > * {\n  padding: 0 2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  height: var(--navbar-height);\n  line-height: var(--navbar-height);\n  cursor: pointer;\n  color: var(--navbar-link-color);\n}\n.not-authenticated-user-links > *:hover {\n  background-color: var(--navbar-link-background-color-on-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItY29udGFpbmVyL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcbmF2YmFyXFxjb21wb25lbnRzXFxuYXZiYXItY29udGFpbmVyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmF2YmFyL2NvbXBvbmVudHMvbmF2YmFyLWNvbnRhaW5lci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUtBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FDSEY7QURQRTtFQUZGO0lBR0ksd0JBQUE7RUNVRjtBQUNGO0FEQ0E7RUFDRSw2QkFBQTtBQ0VGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDRUY7QURDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0VGO0FEQUU7RUFDRSw4REFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItY29udGFpbmVyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLW5hdmJhci1wYWRkaW5nOiAwO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAtLW5hdmJhci1wYWRkaW5nOiAwIDNyZW07XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IHZhcigtLW5hdmJhci16LWluZGV4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluO1xyXG4gIHBhZGRpbmc6IHZhcigtLW5hdmJhci1wYWRkaW5nKTtcclxufVxyXG5cclxuOmhvc3Quc2hhZG93IHtcclxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogdmFyKC0tbWFpbi1wYWdlLXdpZHRoKTtcclxuICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ub3QtYXV0aGVudGljYXRlZC11c2VyLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcclxufVxyXG5cclxuLm5vdC1hdXRoZW50aWNhdGVkLXVzZXItbGlua3MgPiAqIHtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcclxuICBsaW5lLWhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1uYXZiYXItbGluay1jb2xvcik7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWxpbmstYmFja2dyb3VuZC1jb2xvci1vbi1ob3Zlcik7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1uYXZiYXItcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IHZhcigtLW5hdmJhci16LWluZGV4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluO1xuICBwYWRkaW5nOiB2YXIoLS1uYXZiYXItcGFkZGluZyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6aG9zdCB7XG4gICAgLS1uYXZiYXItcGFkZGluZzogMCAzcmVtO1xuICB9XG59XG5cbjpob3N0LnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5uYXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IHZhcigtLW1haW4tcGFnZS13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5vdC1hdXRoZW50aWNhdGVkLXVzZXItbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xufVxuXG4ubm90LWF1dGhlbnRpY2F0ZWQtdXNlci1saW5rcyA+ICoge1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1uYXZiYXItbGluay1jb2xvcik7XG59XG4ubm90LWF1dGhlbnRpY2F0ZWQtdXNlci1saW5rcyA+ICo6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItbGluay1iYWNrZ3JvdW5kLWNvbG9yLW9uLWhvdmVyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-container/navbar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-container/navbar.component.ts ***!
  \********************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");
/* harmony import */ var src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/user/components/user-aware.component */ "./src/app/modules/user/components/user-aware.component.ts");
/* harmony import */ var src_app_modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/navbar/services/theme.local-storage */ "./src/app/modules/navbar/services/theme.local-storage.ts");





let NavbarComponent = class NavbarComponent extends src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__["UserAwareComponent"] {
    constructor(themeLocalStorage, userObservable) {
        super(userObservable);
        this.themeLocalStorage = themeLocalStorage;
        this.shadow = false;
    }
    ngOnInit() {
        super.ngOnInit();
        window.addEventListener("scroll", () => this.handleWindowScrollEvent());
    }
    handleChangeThemeColorClickEvent(event) {
        // event.stopPropagation();
        this.themeLocalStorage.toggleTheme();
    }
    handleWindowScrollEvent() {
        this.shadow = window.scrollY > 0;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_4__["ThemeLocalStorage"] },
    { type: src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_2__["UserObservable"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.shadow")
], NavbarComponent.prototype, "shadow", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-container/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/modules/navbar/components/navbar-container/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-login/navbar-login.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-login/navbar-login.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n}\n\n.login {\n  display: flex;\n  align-items: center;\n  color: var(--navbar-link-color);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.login-message {\n  all: initial;\n  cursor: pointer;\n  position: absolute;\n  top: 100%;\n  width: 30rem;\n  right: 0;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  background: var(--primary-color);\n  padding: 2rem;\n  border-radius: 0.3rem;\n  -webkit-animation: bounce 0.8s ease infinite alternate;\n          animation: bounce 0.8s ease infinite alternate;\n}\n\n.login-message p {\n  font-size: 1.4rem;\n  line-height: 1.3;\n}\n\n.give-it-a-try {\n  margin-top: 1rem;\n}\n\n.give-it-a-try .iconify {\n  margin-left: 0.8rem;\n}\n\n.login-message::after {\n  content: \"\";\n  position: absolute;\n  top: -1rem;\n  right: 5rem;\n  border-top: none;\n  border-right: 1rem solid transparent;\n  border-bottom: 1rem solid var(--primary-color);\n  border-left: 1rem solid transparent;\n}\n\n@-webkit-keyframes bounce {\n  from {\n    top: 100%;\n  }\n  to {\n    top: calc(100% + 1.5rem);\n  }\n}\n\n@keyframes bounce {\n  from {\n    top: 100%;\n  }\n  to {\n    top: calc(100% + 1.5rem);\n  }\n}\n\na {\n  display: flex;\n  align-items: center;\n}\n\n.login-icon {\n  margin-left: 1rem;\n  font-size: 2.3rem;\n}\n\napp-dropdown-icon {\n  line-height: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItbG9naW4vQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxuYXZiYXJcXGNvbXBvbmVudHNcXG5hdmJhci1sb2dpblxcbmF2YmFyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmJhci9jb21wb25lbnRzL25hdmJhci1sb2dpbi9uYXZiYXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxTQUFBO0VDQUY7RURFQTtJQUNFLHdCQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsU0FBQTtFQ0FGO0VERUE7SUFDRSx3QkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25hdmJhci9jb21wb25lbnRzL25hdmJhci1sb2dpbi9uYXZiYXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbmF2YmFyLWxpbmstY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tZXNzYWdlIHtcclxuICBhbGw6IGluaXRpYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBhbmltYXRpb246IGJvdW5jZSAwLjhzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4ubG9naW4tbWVzc2FnZSBwIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcblxyXG4uZ2l2ZS1pdC1hLXRyeSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgJiAuaWNvbmlmeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLW1lc3NhZ2U6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xcmVtO1xyXG4gIHJpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogMTAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAxLjVyZW0pO1xyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4taWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAyLjNyZW07XHJcbn1cclxuXHJcbmFwcC1kcm9wZG93bi1pY29uIHtcclxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLW5hdmJhci1saW5rLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dpbi1tZXNzYWdlIHtcbiAgYWxsOiBpbml0aWFsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICB3aWR0aDogMzByZW07XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBhbmltYXRpb246IGJvdW5jZSAwLjhzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ubG9naW4tbWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5naXZlLWl0LWEtdHJ5IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5naXZlLWl0LWEtdHJ5IC5pY29uaWZ5IHtcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcbn1cblxuLmxvZ2luLW1lc3NhZ2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcmVtO1xuICByaWdodDogNXJlbTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICBmcm9tIHtcbiAgICB0b3A6IDEwMCU7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogY2FsYygxMDAlICsgMS41cmVtKTtcbiAgfVxufVxuYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xufVxuXG5hcHAtZHJvcGRvd24taWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-login/navbar-login.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-login/navbar-login.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavbarLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLoginComponent", function() { return NavbarLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_user_services_user_login_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/user/services/user.login.services */ "./src/app/modules/user/services/user.login.services.ts");
/* harmony import */ var _services_login_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.local-storage */ "./src/app/modules/navbar/services/login.local-storage.ts");




let NavbarLoginComponent = class NavbarLoginComponent {
    constructor(userLoginService, loginLocalStorage) {
        this.userLoginService = userLoginService;
        this.loginLocalStorage = loginLocalStorage;
        this.loginFeatureAlreadyHighlighted = false;
    }
    ngOnInit() {
        this.loginFeatureAlreadyHighlighted = this.loginLocalStorage.isLoginFeatureAlreadyHighlighted();
        document.addEventListener("click", () => {
            this.loginFeatureAlreadyHighlighted = true;
        });
    }
    preLogin() {
        this.userLoginService.preLogin();
    }
};
NavbarLoginComponent.ctorParameters = () => [
    { type: src_app_modules_user_services_user_login_services__WEBPACK_IMPORTED_MODULE_2__["UserLoginServices"] },
    { type: _services_login_local_storage__WEBPACK_IMPORTED_MODULE_3__["LoginLocalStorage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdownTrigger", { static: false })
], NavbarLoginComponent.prototype, "dropdownTrigger", void 0);
NavbarLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-login/navbar-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-login.component.scss */ "./src/app/modules/navbar/components/navbar-login/navbar-login.component.scss")).default]
    })
], NavbarLoginComponent);



/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n}\n\n.user-avatar {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.welcome {\n  font-weight: bold;\n  margin-right: 1.5rem;\n  font-size: 1.85rem;\n}\n\n.dropdown-icon {\n  margin-left: -0.3rem;\n  margin-right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItdXNlci1saW5rL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcbmF2YmFyXFxjb21wb25lbnRzXFxuYXZiYXItdXNlci1saW5rXFxuYXZiYXItdXNlci1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmJhci9jb21wb25lbnRzL25hdmJhci11c2VyLWxpbmsvbmF2YmFyLXVzZXItbGluay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25hdmJhci9jb21wb25lbnRzL25hdmJhci11c2VyLWxpbmsvbmF2YmFyLXVzZXItbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS44NXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC4zcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogLTFyZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlci1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDEuODVyZW07XG59XG5cbi5kcm9wZG93bi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjNyZW07XG4gIG1hcmdpbi1yaWdodDogLTFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavbarUserLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarUserLinkComponent", function() { return NavbarUserLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/user/components/user-aware.component */ "./src/app/modules/user/components/user-aware.component.ts");
/* harmony import */ var src_app_modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/navbar/services/theme.local-storage */ "./src/app/modules/navbar/services/theme.local-storage.ts");
/* harmony import */ var src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");





let NavbarUserLinkComponent = class NavbarUserLinkComponent extends src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_2__["UserAwareComponent"] {
    constructor(themeService, userObservable) {
        super(userObservable);
        this.themeService = themeService;
    }
    handleChangeThemeColorClickEvent(event) {
        // event.stopPropagation();
        this.themeService.toggleTheme();
    }
};
NavbarUserLinkComponent.ctorParameters = () => [
    { type: src_app_modules_navbar_services_theme_local_storage__WEBPACK_IMPORTED_MODULE_3__["ThemeLocalStorage"] },
    { type: src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__["UserObservable"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdownTrigger", { static: false })
], NavbarUserLinkComponent.prototype, "dropdownTrigger", void 0);
NavbarUserLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar-user-link",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-user-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-user-link.component.scss */ "./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.scss")).default]
    })
], NavbarUserLinkComponent);



/***/ }),

/***/ "./src/app/modules/navbar/navbar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/navbar/navbar.module.ts ***!
  \*************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_navbar_container_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar-container/navbar.component */ "./src/app/modules/navbar/components/navbar-container/navbar.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.module */ "./src/app/modules/user/user.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_navbar_user_link_navbar_user_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar-user-link/navbar-user-link.component */ "./src/app/modules/navbar/components/navbar-user-link/navbar-user-link.component.ts");
/* harmony import */ var _components_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar-login/navbar-login.component */ "./src/app/modules/navbar/components/navbar-login/navbar-login.component.ts");








let NavbarModule = class NavbarModule {
};
NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"]],
        exports: [_components_navbar_container_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
        declarations: [
            _components_navbar_container_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
            _components_navbar_user_link_navbar_user_link_component__WEBPACK_IMPORTED_MODULE_6__["NavbarUserLinkComponent"],
            _components_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLoginComponent"],
        ],
        providers: [],
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/modules/navbar/services/login.local-storage.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/navbar/services/login.local-storage.ts ***!
  \****************************************************************/
/*! exports provided: LoginLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLocalStorage", function() { return LoginLocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY = "login-feature-already-highlighted";
let LoginLocalStorage = class LoginLocalStorage {
    // prettier-ignore
    isLoginFeatureAlreadyHighlighted() {
        if (localStorage.getItem(LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY) === null) {
            localStorage.setItem(LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY, 'true');
            return false;
        }
        return true;
    }
};
LoginLocalStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginLocalStorage);



/***/ }),

/***/ "./src/app/modules/navbar/services/theme.local-storage.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/navbar/services/theme.local-storage.ts ***!
  \****************************************************************/
/*! exports provided: ThemeLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLocalStorage", function() { return ThemeLocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const LOCAL_STORAGE_WEBSITE_THEME_KEY = "website-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
let ThemeLocalStorage = class ThemeLocalStorage {
    toggleTheme() {
        const currentTheme = localStorage.getItem(LOCAL_STORAGE_WEBSITE_THEME_KEY);
        let newWebsiteTheme = LIGHT_THEME;
        if (currentTheme == LIGHT_THEME) {
            newWebsiteTheme = DARK_THEME;
        }
        localStorage.setItem(LOCAL_STORAGE_WEBSITE_THEME_KEY, newWebsiteTheme);
        document.body.classList.remove(LIGHT_THEME, DARK_THEME);
        document.body.classList.add(newWebsiteTheme);
    }
};
ThemeLocalStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ThemeLocalStorage);



/***/ }),

/***/ "./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  margin-bottom: 2rem;\n}\n\n.comment-input {\n  display: flex;\n}\n\n.comment-input app-user-avatar {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-right: var(--comment-user-avatar-margin-right);\n}\n\n.comment-input .textarea {\n  width: 100%;\n  position: relative;\n}\n\n.comment-input textarea {\n  position: relative;\n  height: 5.5rem;\n}\n\n.comment-input .textarea::before {\n  content: \"\";\n  position: absolute;\n  top: 1rem;\n  left: -1rem;\n  width: 0;\n  height: 0;\n  border-top: 1rem solid transparent;\n  border-right: 1rem solid var(--comment-background-color);\n  border-bottom: 1rem solid transparent;\n  border-left: none;\n  transition: var(--transition);\n  transition-property: color, background-color border-color;\n}\n\n.comment-submit {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.not-authenticated {\n  display: flex;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9hZGQtcG9zdC1jb21tZW50L0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1jb21tZW50c1xcY29tcG9uZW50c1xcYWRkLXBvc3QtY29tbWVudFxcYWRkLXBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9hZGQtcG9zdC1jb21tZW50L2FkZC1wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LWNvbW1lbnRzL2NvbXBvbmVudHMvYWRkLXBvc3QtY29tbWVudC9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREdFO0VFUkEsWUFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBRFFGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHdEQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseURBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1jb21tZW50cy9jb21wb25lbnRzL2FkZC1wb3N0LWNvbW1lbnQvYWRkLXBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5cIjtcclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmIGFwcC11c2VyLWF2YXRhciB7XHJcbiAgICBAaW5jbHVkZSBhdmF0YXI7XHJcbiAgfVxyXG5cclxuICAmIC50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICYgdGV4dGFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1LjVyZW07XHJcbiAgfVxyXG5cclxuICAmIC50ZXh0YXJlYTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICBsZWZ0OiAtMXJlbTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCB2YXIoLS1jb21tZW50LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciBib3JkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWVudC1zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm5vdC1hdXRoZW50aWNhdGVkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbW1lbnQtaW5wdXQgYXBwLXVzZXItYXZhdGFyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1jb21tZW50LXVzZXItYXZhdGFyLW1hcmdpbi1yaWdodCk7XG59XG4uY29tbWVudC1pbnB1dCAudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbW1lbnQtaW5wdXQgdGV4dGFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNS41cmVtO1xufVxuLmNvbW1lbnQtaW5wdXQgLnRleHRhcmVhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogLTFyZW07XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCB2YXIoLS1jb21tZW50LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIGJvcmRlci1jb2xvcjtcbn1cblxuLmNvbW1lbnQtc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm5vdC1hdXRoZW50aWNhdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufSIsIkBtaXhpbiBhdmF0YXIge1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWNvbW1lbnQtdXNlci1hdmF0YXItbWFyZ2luLXJpZ2h0KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddPostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostCommentComponent", function() { return AddPostCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/user/components/user-aware.component */ "./src/app/modules/user/components/user-aware.component.ts");
/* harmony import */ var src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");
/* harmony import */ var _services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post-comment.http-client */ "./src/app/modules/post/post-comments/services/post-comment.http-client.ts");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/post-comment.internal.models */ "./src/app/modules/post/post-comments/models/post-comment.internal.models.ts");








let AddPostCommentComponent = class AddPostCommentComponent extends src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__["UserAwareComponent"] {
    constructor(route, userObservable, commentHttpClient, alertService) {
        super(userObservable);
        this.commentHttpClient = commentHttpClient;
        this.alertService = alertService;
        this.newPostComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.postId = route.snapshot.params["id"];
    }
    onSubmit(form) {
        this.commentTextarea.nativeElement.value = "";
        const comment = this.toComment(form.value);
        this.newPostComment.emit(comment);
        this.commentHttpClient
            .createPostComment(form.value)
            .then(() => this.alertSavingCommentSuccess())
            .catch((error) => {
            console.error(error);
            this.alertSavingCommentError();
            this.newPostComment.emit(new _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__["EmptyPostComment"]());
        });
    }
    toComment(createCommentApiRequest) {
        return {
            author: this.user,
            createdAt: new Date(),
            value: createCommentApiRequest.value,
        };
    }
    alertSavingCommentSuccess() {
        this.alertService.info("comment saved with success");
    }
    alertSavingCommentError() {
        this.alertService.error("error while saving your comment, please try again");
    }
};
AddPostCommentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__["UserObservable"] },
    { type: _services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_5__["PostCommentHttpClient"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddPostCommentComponent.prototype, "newPostComment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("commentTextarea", { static: false })
], AddPostCommentComponent.prototype, "commentTextarea", void 0);
AddPostCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-post-comment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-post-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-post-comment.component.scss */ "./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.scss")).default]
    })
], AddPostCommentComponent);



/***/ }),

/***/ "./src/app/modules/post/post-comments/components/post-comment/post-comment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/post-comment/post-comment.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  border-radius: 0.3rem;\n  transition: var(--transition);\n  transition-property: background-color;\n}\n\n.container {\n  width: 100%;\n  padding: 0 1.5rem;\n  background-color: var(--comment-background-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n  border-radius: 0.3rem;\n}\n\napp-user-avatar {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-right: var(--comment-user-avatar-margin-right);\n}\n\n.author {\n  font-weight: bold;\n  color: var(--comment-author-color);\n}\n\n.created-at {\n  font-size: 1.3rem;\n  color: var(--comment-created-at-color);\n}\n\n.metadata {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem 0;\n  color: var(--comment-metadata-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n  border-bottom: 0.2rem solid var(--comment-metadata-border-color);\n}\n\n.metadata::before {\n  content: \"\";\n  position: absolute;\n  top: 1.5rem;\n  left: -2.5rem;\n  width: 0;\n  height: 0;\n  border-top: 1rem solid transparent;\n  border-right: 1rem solid var(--comment-background-color);\n  border-bottom: 1rem solid transparent;\n  border-left: none;\n}\n\n.body {\n  white-space: pre-line;\n  text-align: justify;\n  font-size: 1.4rem;\n  padding: 1.5rem 0;\n  color: var(--comment-body-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9wb3N0LWNvbW1lbnQvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LWNvbW1lbnRzXFxjb21wb25lbnRzXFxwb3N0LWNvbW1lbnRcXHBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1jb21tZW50cy9jb21wb25lbnRzL3Bvc3QtY29tbWVudC9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VFakJFLFlBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QURpQkY7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0VBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHdEQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LWNvbW1lbnRzL2NvbXBvbmVudHMvcG9zdC1jb21tZW50L3Bvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5cIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tZW50LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxufVxyXG5cclxuYXBwLXVzZXItYXZhdGFyIHtcclxuICBAaW5jbHVkZSBhdmF0YXI7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tZW50LWF1dGhvci1jb2xvcik7XHJcbn1cclxuXHJcbi5jcmVhdGVkLWF0IHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogdmFyKC0tY29tbWVudC1jcmVhdGVkLWF0LWNvbG9yKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgY29sb3I6IHZhcigtLWNvbW1lbnQtbWV0YWRhdGEtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCB2YXIoLS1jb21tZW50LW1ldGFkYXRhLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5tZXRhZGF0YTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEuNXJlbTtcclxuICBsZWZ0OiAtMi41cmVtO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCB2YXIoLS1jb21tZW50LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICBjb2xvcjogdmFyKC0tY29tbWVudC1ib2R5LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG5hcHAtdXNlci1hdmF0YXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWNvbW1lbnQtdXNlci1hdmF0YXItbWFyZ2luLXJpZ2h0KTtcbn1cblxuLmF1dGhvciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tY29tbWVudC1hdXRob3ItY29sb3IpO1xufVxuXG4uY3JlYXRlZC1hdCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogdmFyKC0tY29tbWVudC1jcmVhdGVkLWF0LWNvbG9yKTtcbn1cblxuLm1ldGFkYXRhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICBjb2xvcjogdmFyKC0tY29tbWVudC1tZXRhZGF0YS1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkIHZhcigtLWNvbW1lbnQtbWV0YWRhdGEtYm9yZGVyLWNvbG9yKTtcbn1cblxuLm1ldGFkYXRhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS41cmVtO1xuICBsZWZ0OiAtMi41cmVtO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDFyZW0gc29saWQgdmFyKC0tY29tbWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIGNvbG9yOiB2YXIoLS1jb21tZW50LWJvZHktY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG59IiwiQG1peGluIGF2YXRhciB7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tY29tbWVudC11c2VyLWF2YXRhci1tYXJnaW4tcmlnaHQpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/post/post-comments/components/post-comment/post-comment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/post-comment/post-comment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function() { return PostCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostCommentComponent = class PostCommentComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCommentComponent.prototype, "comment", void 0);
PostCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-comment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comment/post-comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comment.component.scss */ "./src/app/modules/post/post-comments/components/post-comment/post-comment.component.scss")).default]
    })
], PostCommentComponent);



/***/ }),

/***/ "./src/app/modules/post/post-comments/components/post-comments/post-comments.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/post-comments/post-comments.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --fancy-title-background-color: var(--post-background-color);\n}\n\napp-section-title {\n  display: block;\n  margin: 6rem 0 4rem;\n}\n\napp-post-comment {\n  margin-bottom: 1.5rem;\n}\n\napp-post-comment:last-of-type {\n  margin-bottom: 0;\n}\n\n.more-comments-button {\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9wb3N0LWNvbW1lbnRzL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1jb21tZW50c1xcY29tcG9uZW50c1xccG9zdC1jb21tZW50c1xccG9zdC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtY29tbWVudHMvY29tcG9uZW50cy9wb3N0LWNvbW1lbnRzL3Bvc3QtY29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1jb21tZW50cy9jb21wb25lbnRzL3Bvc3QtY29tbWVudHMvcG9zdC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLWZhbmN5LXRpdGxlLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbmFwcC1zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDZyZW0gMCA0cmVtO1xyXG59XHJcblxyXG5hcHAtcG9zdC1jb21tZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmFwcC1wb3N0LWNvbW1lbnQ6bGFzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubW9yZS1jb21tZW50cy1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tZmFuY3ktdGl0bGUtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYXBwLXNlY3Rpb24tdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2cmVtIDAgNHJlbTtcbn1cblxuYXBwLXBvc3QtY29tbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuYXBwLXBvc3QtY29tbWVudDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubW9yZS1jb21tZW50cy1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-comments/components/post-comments/post-comments.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/components/post-comments/post-comments.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PostCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentsComponent", function() { return PostCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/user/components/user-aware.component */ "./src/app/modules/user/components/user-aware.component.ts");
/* harmony import */ var src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/user/services/user.observable */ "./src/app/modules/user/services/user.observable.ts");
/* harmony import */ var _services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post-comment.http-client */ "./src/app/modules/post/post-comments/services/post-comment.http-client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/post-comment.internal.models */ "./src/app/modules/post/post-comments/models/post-comment.internal.models.ts");
/* harmony import */ var _converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../converter/post-comment.converter */ "./src/app/modules/post/post-comments/converter/post-comment.converter.ts");









let PostCommentsComponent = class PostCommentsComponent extends src_app_modules_user_components_user_aware_component__WEBPACK_IMPORTED_MODULE_3__["UserAwareComponent"] {
    constructor(route, userObservable, commentHttpClient, commentConverter, alertService) {
        super(userObservable);
        this.commentHttpClient = commentHttpClient;
        this.commentConverter = commentConverter;
        this.alertService = alertService;
        this.currentCommentsPage = -1;
        this.postComments = new _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__["PostComments"]();
        this.stillMoreComments = false;
        this.postId = route.snapshot.params["id"];
    }
    ngOnInit() {
        super.ngOnInit();
        this.loadComments(true);
    }
    onNewPostComment(postComment) {
        if (postComment instanceof _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__["EmptyPostComment"]) {
            this.postComments.shift();
        }
        else {
            this.postComments = [postComment, ...this.postComments];
        }
    }
    loadMorePostComments() {
        this.loadComments();
    }
    loadComments(onNgInit = false) {
        const request = this.commentConverter.toGetPostCommentsApiRequest(this.postId, ++this.currentCommentsPage);
        this.commentHttpClient
            .getPostComments(request)
            .then((comments) => {
            this.postComments = new _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_7__["PostComments"](...this.postComments, ...comments);
            this.stillMoreComments = comments.length !== 0;
            if (!this.stillMoreComments && !onNgInit) {
                this.alertService.info("No more comments on this post");
            }
        })
            .catch((error) => {
            console.error(error);
            this.alertService.error("Error while fetching post comments :(");
        });
    }
};
PostCommentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_modules_user_services_user_observable__WEBPACK_IMPORTED_MODULE_4__["UserObservable"] },
    { type: _services_post_comment_http_client__WEBPACK_IMPORTED_MODULE_5__["PostCommentHttpClient"] },
    { type: _converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_8__["PostCommentConverter"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
PostCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-comments",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-comments/components/post-comments/post-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comments.component.scss */ "./src/app/modules/post/post-comments/components/post-comments/post-comments.component.scss")).default]
    })
], PostCommentsComponent);



/***/ }),

/***/ "./src/app/modules/post/post-comments/converter/post-comment.converter.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/converter/post-comment.converter.ts ***!
  \********************************************************************************/
/*! exports provided: PostCommentConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentConverter", function() { return PostCommentConverter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_user_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/services/user.converter */ "./src/app/modules/user/services/user.converter.ts");



let PostCommentConverter = class PostCommentConverter {
    constructor(userConverter) {
        this.userConverter = userConverter;
    }
    toPostComment(postComment) {
        return {
            author: this.userConverter.toAuthor(postComment.author),
            createdAt: new Date(postComment.createdAtIso8601),
            value: postComment.value,
        };
    }
    toGetPostCommentsApiRequest(postId, page, size = 5) {
        return {
            postId,
            page,
            size,
        };
    }
    toGetPostCommentsApiRequestUrl(request) {
        return `/api/posts/${request.postId}/comments?page=${request.page}&size=${request.size}`;
    }
    toCreatePostCommentApiUrl(request) {
        return `/secure-api/posts/${request.postId}/comments`;
    }
    toCreatePostCommentApiBody(request) {
        return {
            value: request.value,
        };
    }
};
PostCommentConverter.ctorParameters = () => [
    { type: _user_services_user_converter__WEBPACK_IMPORTED_MODULE_2__["UserConverter"] }
];
PostCommentConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostCommentConverter);



/***/ }),

/***/ "./src/app/modules/post/post-comments/models/post-comment.internal.models.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/models/post-comment.internal.models.ts ***!
  \***********************************************************************************/
/*! exports provided: EmptyPostComment, PostComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPostComment", function() { return EmptyPostComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComments", function() { return PostComments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_models_user_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/models/user.internal.models */ "./src/app/modules/user/models/user.internal.models.ts");


class EmptyPostComment {
    constructor() {
        this.author = new _user_models_user_internal_models__WEBPACK_IMPORTED_MODULE_1__["AnonymousUser"]();
        this.createdAt = new Date();
    }
}
class PostComments extends Array {
}


/***/ }),

/***/ "./src/app/modules/post/post-comments/post-comment.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/post/post-comments/post-comment.module.ts ***!
  \*******************************************************************/
/*! exports provided: PostCommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentModule", function() { return PostCommentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_post_comments_post_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post-comments/post-comments.component */ "./src/app/modules/post/post-comments/components/post-comments/post-comments.component.ts");
/* harmony import */ var _components_add_post_comment_add_post_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-post-comment/add-post-comment.component */ "./src/app/modules/post/post-comments/components/add-post-comment/add-post-comment.component.ts");
/* harmony import */ var _components_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post-comment/post-comment.component */ "./src/app/modules/post/post-comments/components/post-comment/post-comment.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user/user.module */ "./src/app/modules/user/user.module.ts");








let PostCommentModule = class PostCommentModule {
};
PostCommentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"]],
        exports: [_components_post_comments_post_comments_component__WEBPACK_IMPORTED_MODULE_4__["PostCommentsComponent"]],
        declarations: [
            _components_post_comments_post_comments_component__WEBPACK_IMPORTED_MODULE_4__["PostCommentsComponent"],
            _components_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_6__["PostCommentComponent"],
            _components_add_post_comment_add_post_comment_component__WEBPACK_IMPORTED_MODULE_5__["AddPostCommentComponent"],
        ],
    })
], PostCommentModule);



/***/ }),

/***/ "./src/app/modules/post/post-comments/services/post-comment.http-client.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/post/post-comments/services/post-comment.http-client.ts ***!
  \*********************************************************************************/
/*! exports provided: PostCommentHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentHttpClient", function() { return PostCommentHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _alert_common_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../alert/common.http-client */ "./src/app/modules/alert/common.http-client.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../converter/post-comment.converter */ "./src/app/modules/post/post-comments/converter/post-comment.converter.ts");
/* harmony import */ var _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/post-comment.internal.models */ "./src/app/modules/post/post-comments/models/post-comment.internal.models.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");








let PostCommentHttpClient = class PostCommentHttpClient extends _alert_common_http_client__WEBPACK_IMPORTED_MODULE_3__["CommonHttpClient"] {
    constructor(alertService, commentConverter, http) {
        super(alertService);
        this.commentConverter = commentConverter;
        this.http = http;
    }
    getPostComments(request) {
        const url = this.commentConverter.toGetPostCommentsApiRequestUrl(request);
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((postComments) => {
            let data = new _models_post_comment_internal_models__WEBPACK_IMPORTED_MODULE_6__["PostComments"]();
            postComments.forEach((post) => data.push(this.commentConverter.toPostComment(post)));
            return data;
        }))
            .toPromise();
    }
    createPostComment(request) {
        const url = this.commentConverter.toCreatePostCommentApiUrl(request);
        const body = this.commentConverter.toCreatePostCommentApiBody(request);
        return this.http.post(url, body).toPromise();
    }
};
PostCommentHttpClient.ctorParameters = () => [
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _converter_post_comment_converter__WEBPACK_IMPORTED_MODULE_5__["PostCommentConverter"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostCommentHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostCommentHttpClient);



/***/ }),

/***/ "./src/app/modules/post/post-pages/consult-post-page/consult-post.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/consult-post-page/consult-post.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --fancy-title-border-background-color: var(--post-background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvY29uc3VsdC1wb3N0LXBhZ2UvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LXBhZ2VzXFxjb25zdWx0LXBvc3QtcGFnZVxcY29uc3VsdC1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvY29uc3VsdC1wb3N0LXBhZ2UvY29uc3VsdC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1FQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1wYWdlcy9jb25zdWx0LXBvc3QtcGFnZS9jb25zdWx0LXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tZmFuY3ktdGl0bGUtYm9yZGVyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLWZhbmN5LXRpdGxlLWJvcmRlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3N0LWJhY2tncm91bmQtY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/post/post-pages/consult-post-page/consult-post.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/consult-post-page/consult-post.page.ts ***!
  \********************************************************************************/
/*! exports provided: ConsultPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultPostPage", function() { return ConsultPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-shared/models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post-shared/services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");





let ConsultPostPage = class ConsultPostPage {
    constructor(route, postHttpClient) {
        this.postHttpClient = postHttpClient;
        this.post = new _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["OfflinePost"]();
        this.postId = route.snapshot.params["id"];
    }
    ngOnInit() {
        this.postHttpClient.getPostById(this.postId).then((post) => {
            this.post = post;
        });
    }
};
ConsultPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_4__["PostHttpClient"] }
];
ConsultPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consult-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/consult-post-page/consult-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consult-post.page.scss */ "./src/app/modules/post/post-pages/consult-post-page/consult-post.page.scss")).default]
    })
], ConsultPostPage);



/***/ }),

/***/ "./src/app/modules/post/post-pages/create-post-page/create-post.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/create-post-page/create-post.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXBhZ2VzL2NyZWF0ZS1wb3N0LXBhZ2UvY3JlYXRlLXBvc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/post/post-pages/create-post-page/create-post.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/create-post-page/create-post.page.ts ***!
  \******************************************************************************/
/*! exports provided: CreatePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPage", function() { return CreatePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-shared/models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var _post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-shared/services/post.validator */ "./src/app/modules/post/post-shared/services/post.validator.ts");
/* harmony import */ var _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post-shared/services/post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post-shared/services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");
/* harmony import */ var _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../post-shared/state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let CreatePostPage = class CreatePostPage {
    constructor(postValidator, postConverter, postHttpClient, postsState, alertService, router) {
        this.postValidator = postValidator;
        this.postConverter = postConverter;
        this.postHttpClient = postHttpClient;
        this.postsState = postsState;
        this.alertService = alertService;
        this.router = router;
        this.post = new _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["DefaultPost"]();
    }
    onSubmit(post) {
        try {
            this.postValidator.validateCreatePost(post);
            const request = this.postConverter.toCreatePostApiRequest(post);
            this.postHttpClient
                .createPost(request)
                .then((post) => this.handleCreatePostSuccessEvent(post))
                .catch((error) => this.handleCreatePostErrorEvent(error));
        }
        catch (error) {
            this.alertService.error(error.message);
        }
    }
    handleCreatePostErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while creating your post :(");
    }
    handleCreatePostSuccessEvent(post) {
        this.postsState.addPost(post);
        this.alertService.info("Post added with success", {
            keepAfterRouteChange: true,
        });
        this.router.navigate(["/posts"]);
    }
};
CreatePostPage.ctorParameters = () => [
    { type: _post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_3__["PostValidator"] },
    { type: _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_4__["PostConverter"] },
    { type: _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_5__["PostHttpClient"] },
    { type: _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_6__["PostsState"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
CreatePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/create-post-page/create-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-post.page.scss */ "./src/app/modules/post/post-pages/create-post-page/create-post.page.scss")).default]
    })
], CreatePostPage);



/***/ }),

/***/ "./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n@media screen and (max-width: 480px) {\n  :host {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 720px) {\n  .mat-column-category,\n.mat-column-createdAt {\n    display: none;\n  }\n}\napp-page-title-delete-button {\n  --page-title-button-color-on-hover: var(--danger-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvbWFuYWdlLXBvc3RzLXBhZ2UvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LXBhZ2VzXFxtYW5hZ2UtcG9zdHMtcGFnZVxcbWFuYWdlLXBvc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvbWFuYWdlLXBvc3RzLXBhZ2UvbWFuYWdlLXBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBREFFO0VBRkY7SUFHSSxlQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7O0lBRUUsYUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLHVEQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1wYWdlcy9tYW5hZ2UtcG9zdHMtcGFnZS9tYW5hZ2UtcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5tYXQtY29sdW1uLWNhdGVnb3J5LFxyXG4gIC5tYXQtY29sdW1uLWNyZWF0ZWRBdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLXBhZ2UtdGl0bGUtZGVsZXRlLWJ1dHRvbiB7XHJcbiAgLS1wYWdlLXRpdGxlLWJ1dHRvbi1jb2xvci1vbi1ob3ZlcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubWF0LWNvbHVtbi1jYXRlZ29yeSxcbi5tYXQtY29sdW1uLWNyZWF0ZWRBdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuYXBwLXBhZ2UtdGl0bGUtZGVsZXRlLWJ1dHRvbiB7XG4gIC0tcGFnZS10aXRsZS1idXR0b24tY29sb3Itb24taG92ZXI6IHZhcigtLWRhbmdlci1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.ts ***!
  \********************************************************************************/
/*! exports provided: ManagePostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePostsPage", function() { return ManagePostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-shared/services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");
/* harmony import */ var _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-shared/models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../post-shared/services/post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../post-shared/state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var src_app_modules_shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/shared/pages/manage-resources.page */ "./src/app/modules/shared/pages/manage-resources.page.ts");











let ManagePostsPage = class ManagePostsPage extends src_app_modules_shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_10__["AbstractManageResourcesPage"] {
    constructor(postHttpClient, postConverter, alertService, postsState, dialog) {
        super();
        this.postHttpClient = postHttpClient;
        this.postConverter = postConverter;
        this.alertService = alertService;
        this.postsState = postsState;
        this.dialog = dialog;
        this.currentPage = new _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.columns = [
            "id",
            "title",
            "category",
            "createdAt",
            "lastUpdatedAt",
            "actions",
        ];
    }
    // prettier-ignore
    fetchPage(filter, page) {
        const request = this.postConverter.toGetUserPostsApiRequest(filter, page);
        this.postHttpClient
            .getUserPosts(request)
            .then((posts) => this.handleGetUserPostsSuccessEvent(posts))
            .catch((error) => this.handleGetUserPostsErrorEvent(error));
    }
    deletePost(postId) {
        const dialogRef = this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], {
            data: "Do you confirm the deletion of this post ?",
            width: "340px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const request = this.postConverter.toDeletePostApiRequest(postId);
                this.postHttpClient
                    .deletePost(request)
                    .then(() => this.handleDeletePostSuccessEvent(postId))
                    .catch((error) => this.handleDeletePostErrorEvent(error));
            }
        });
    }
    deleteAllUserPosts() {
        const dialogRef = this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], {
            data: "Do you confirm the deletion of all your posts ?",
            width: "375px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const request = this.postConverter.toDeleteUserPostsApiRequest();
                this.postHttpClient
                    .deleteUserPosts(request)
                    .then(() => this.handleDeleteUserPostsSuccessEvent())
                    .catch((error) => this.handleDeleteUserPostsErrorEvent(error));
            }
        });
    }
    downloadAllUserPosts() {
        const request = this.postConverter.toGetAllUserPostsApiRequest();
        this.postHttpClient
            .getUserPostsBlob(request)
            .then((posts) => this.handleGetAllUserPostsSuccessEvent(posts))
            .catch((error) => this.handleGetAllUserPostsErrorEvent(error));
    }
    // prettier-ignore
    onFileUpload(file) {
        const request = this.postConverter.toUploadPostsApiRequest(file);
        this.postHttpClient.uploadPosts(request)
            .then(() => this.handleUploadPostsApiRequestSuccessEvent())
            .catch((error) => this.handleUploadPostsApiRequestErrorEvent(error));
    }
    // prettier-ignore
    handleUploadPostsApiRequestErrorEvent(error) {
        this.postHttpClient.handleError(error, "Error while uploading your posts :(");
    }
    handleUploadPostsApiRequestSuccessEvent() {
        this.fetchPage(this.filter, 0);
        this.postsState.init();
    }
    handleDeletePostErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while deleting your post :(");
    }
    handleGetUserPostsErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while fetching user posts :(");
    }
    // prettier-ignore
    handleDeletePostSuccessEvent(postId) {
        this.alertService.info("Post deleted with success");
        this.dataSource.data = this.dataSource.data.filter((post) => post.id !== postId);
        this.dataSource._updateChangeSubscription(); // <-- Refresh the data source, reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
        this.postsState.deletePost(postId);
    }
    handleGetUserPostsSuccessEvent(postsPage) {
        this.currentPage = postsPage;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](postsPage.items);
        this.dataSource.sort = this.sort;
        this.recalculatePreviousNextButtonCssClasses();
    }
    handleGetAllUserPostsSuccessEvent(blob) {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = url;
        a.download = this.calculateUserPostsFilenameToDownload();
        a.click();
        window.URL.revokeObjectURL(url);
    }
    handleGetAllUserPostsErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while fetching your posts :(");
    }
    // prettier-ignore
    handleDeleteUserPostsErrorEvent(error) {
        this.postHttpClient.handleError(error, "Error while deleting user posts :(");
    }
    handleDeleteUserPostsSuccessEvent() {
        this.currentPage = new _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.recalculatePreviousNextButtonCssClasses();
    }
    calculateUserPostsFilenameToDownload() {
        // I didn't find e method like this Date.toString(formatter) in javascript, so I have used
        // this @sebastian.i solution that I have found on this stackoverflow thread: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        // Feel free to improve this code if you find a more elegant implementation, and please let me know about :)
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = ("" + (currentDate.getMonth() + 1)).padStart(2, "0");
        const date = ("" + currentDate.getDate()).padStart(2, "0");
        const hour = ("" + currentDate.getHours()).padStart(2, "0");
        const minutes = ("" + currentDate.getMinutes()).padStart(2, "0");
        const seconds = ("" + currentDate.getSeconds()).padStart(2, "0");
        const filename = "posts_" + year + month + date + hour + minutes + seconds + ".json";
        return filename;
    }
};
ManagePostsPage.ctorParameters = () => [
    { type: _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_2__["PostHttpClient"] },
    { type: _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_6__["PostConverter"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_7__["PostsState"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
ManagePostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-posts.page.scss */ "./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.scss")).default]
    })
], ManagePostsPage);



/***/ }),

/***/ "./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n@media screen and (max-width: 480px) {\n  :host {\n    padding: 0 3rem;\n  }\n}\napp-posts-welcome-message {\n  display: block;\n  margin-top: 8rem;\n}\napp-search-posts {\n  display: block;\n  margin-top: 6rem;\n  margin-bottom: 8rem;\n}\napp-posts-by-category {\n  display: block;\n  margin-top: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvcG9zdC1kYXNoYm9hcmQtcGFnZS9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RcXHBvc3QtcGFnZXNcXHBvc3QtZGFzaGJvYXJkLXBhZ2VcXHBvc3QtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvcG9zdC1kYXNoYm9hcmQtcGFnZS9wb3N0LWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURBRTtFQUZGO0lBR0ksZUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0dGO0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXBhZ2VzL3Bvc3QtZGFzaGJvYXJkLXBhZ2UvcG9zdC1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtcG9zdHMtd2VsY29tZS1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA4cmVtO1xyXG59XHJcblxyXG5hcHAtc2VhcmNoLXBvc3RzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XHJcbn1cclxuXHJcbmFwcC1wb3N0cy1ieS1jYXRlZ29yeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbiAgfVxufVxuXG5hcHAtcG9zdHMtd2VsY29tZS1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhyZW07XG59XG5cbmFwcC1zZWFyY2gtcG9zdHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbn1cblxuYXBwLXBvc3RzLWJ5LWNhdGVnb3J5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.ts ***!
  \************************************************************************************/
/*! exports provided: PostDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDashboardPage", function() { return PostDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-shared/state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");



let PostDashboardPage = class PostDashboardPage {
    constructor(postsState) {
        this.postsState = postsState;
        this.noMorePosts = false;
    }
    ngOnInit() {
        this.postsState.resetFilters();
        this.postsState.noMorePosts$.subscribe((value) => (this.noMorePosts = value));
    }
    ngOnDestroy() {
        this.postsState.resetFilters();
    }
    handleSearchTextChange(searchText) {
        this.postsState.setSearchText(searchText);
    }
    loadMorePosts() {
        this.postsState.loadMorePosts();
    }
};
PostDashboardPage.ctorParameters = () => [
    { type: _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_2__["PostsState"] }
];
PostDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-dashboard.page.scss */ "./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.scss")).default]
    })
], PostDashboardPage);



/***/ }),

/***/ "./src/app/modules/post/post-pages/post-pages.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/post/post-pages/post-pages.module.ts ***!
  \**************************************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _consult_post_page_consult_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consult-post-page/consult-post.page */ "./src/app/modules/post/post-pages/consult-post-page/consult-post.page.ts");
/* harmony import */ var _post_dashboard_page_post_dashboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-dashboard-page/post-dashboard.page */ "./src/app/modules/post/post-pages/post-dashboard-page/post-dashboard.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_posts_page_manage_posts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-posts-page/manage-posts.page */ "./src/app/modules/post/post-pages/manage-posts-page/manage-posts.page.ts");
/* harmony import */ var _user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user/services/logged-in.guard */ "./src/app/modules/user/services/logged-in.guard.ts");
/* harmony import */ var _post_shared_post_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-shared/post-shared.module */ "./src/app/modules/post/post-shared/post-shared.module.ts");
/* harmony import */ var _post_comments_post_comment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-comments/post-comment.module */ "./src/app/modules/post/post-comments/post-comment.module.ts");
/* harmony import */ var _create_post_page_create_post_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-post-page/create-post.page */ "./src/app/modules/post/post-pages/create-post-page/create-post.page.ts");
/* harmony import */ var _update_post_page_update_post_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-post-page/update-post.page */ "./src/app/modules/post/post-pages/update-post-page/update-post.page.ts");













const routes = [
    { path: "", component: _post_dashboard_page_post_dashboard_page__WEBPACK_IMPORTED_MODULE_4__["PostDashboardPage"] },
    { path: "posts/:id/consult", component: _consult_post_page_consult_post_page__WEBPACK_IMPORTED_MODULE_3__["ConsultPostPage"] },
    {
        path: "posts/:id/edit",
        component: _update_post_page_update_post_page__WEBPACK_IMPORTED_MODULE_12__["UpdatePostPage"],
        canActivate: [_user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]],
    },
    {
        path: "posts/new",
        component: _create_post_page_create_post_page__WEBPACK_IMPORTED_MODULE_11__["CreatePostPage"],
        canActivate: [_user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]],
    },
    {
        path: "posts",
        component: _manage_posts_page_manage_posts_page__WEBPACK_IMPORTED_MODULE_7__["ManagePostsPage"],
        canActivate: [_user_services_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]],
    },
];
let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _post_shared_post_shared_module__WEBPACK_IMPORTED_MODULE_9__["PostSharedModule"],
            _post_comments_post_comment_module__WEBPACK_IMPORTED_MODULE_10__["PostCommentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        exports: [],
        declarations: [
            _post_dashboard_page_post_dashboard_page__WEBPACK_IMPORTED_MODULE_4__["PostDashboardPage"],
            _consult_post_page_consult_post_page__WEBPACK_IMPORTED_MODULE_3__["ConsultPostPage"],
            _manage_posts_page_manage_posts_page__WEBPACK_IMPORTED_MODULE_7__["ManagePostsPage"],
            _create_post_page_create_post_page__WEBPACK_IMPORTED_MODULE_11__["CreatePostPage"],
            _update_post_page_update_post_page__WEBPACK_IMPORTED_MODULE_12__["UpdatePostPage"],
        ],
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/modules/post/post-pages/update-post-page/update-post.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/update-post-page/update-post.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --fancy-title-border-background-color: var(--post-background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvdXBkYXRlLXBvc3QtcGFnZS9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RcXHBvc3QtcGFnZXNcXHVwZGF0ZS1wb3N0LXBhZ2VcXHVwZGF0ZS1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvdXBkYXRlLXBvc3QtcGFnZS91cGRhdGUtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtRUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3QtcGFnZXMvdXBkYXRlLXBvc3QtcGFnZS91cGRhdGUtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1mYW5jeS10aXRsZS1ib3JkZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zdC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tZmFuY3ktdGl0bGUtYm9yZGVyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtYmFja2dyb3VuZC1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-pages/update-post-page/update-post.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/post/post-pages/update-post-page/update-post.page.ts ***!
  \******************************************************************************/
/*! exports provided: UpdatePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostPage", function() { return UpdatePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-shared/models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post-shared/services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");
/* harmony import */ var _post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post-shared/services/post.validator */ "./src/app/modules/post/post-shared/services/post.validator.ts");
/* harmony import */ var _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../post-shared/services/post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../post-shared/state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");









let UpdatePostPage = class UpdatePostPage {
    constructor(postValidator, postConverter, postHttpClient, postsState, alertService, router, route) {
        this.postValidator = postValidator;
        this.postConverter = postConverter;
        this.postHttpClient = postHttpClient;
        this.postsState = postsState;
        this.alertService = alertService;
        this.router = router;
        this.post = new _post_shared_models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["OfflinePost"]();
        this.postId = route.snapshot.params["id"];
    }
    ngOnInit() {
        this.postHttpClient.getPostById(this.postId).then((post) => {
            this.post = post;
        });
    }
    onSubmit(post) {
        try {
            this.postValidator.validateUpdatePost(post);
            const request = this.postConverter.toUpdatePostApiRequest(post);
            this.postHttpClient
                .updatePost(request)
                .then((post) => this.handleUpdatePostSuccessEvent(post))
                .catch((error) => this.handleUpdatePostErrorEvent(error));
        }
        catch (error) {
            this.alertService.error(error.message);
        }
    }
    handleUpdatePostErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while updating your post :(");
    }
    handleUpdatePostSuccessEvent(post) {
        this.postsState.updatePost(post);
        this.alertService.info("Post updated with success", {
            keepAfterRouteChange: true,
        });
        this.router.navigate(["/posts"]);
    }
};
UpdatePostPage.ctorParameters = () => [
    { type: _post_shared_services_post_validator__WEBPACK_IMPORTED_MODULE_5__["PostValidator"] },
    { type: _post_shared_services_post_converter__WEBPACK_IMPORTED_MODULE_6__["PostConverter"] },
    { type: _post_shared_services_post_http_client__WEBPACK_IMPORTED_MODULE_4__["PostHttpClient"] },
    { type: _post_shared_state_posts_state__WEBPACK_IMPORTED_MODULE_7__["PostsState"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UpdatePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-pages/update-post-page/update-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-post.page.scss */ "./src/app/modules/post/post-pages/update-post-page/update-post.page.scss")).default]
    })
], UpdatePostPage);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --post-title-margin-top: 0rem;\n  --post-title-margin-bottom: 0rem;\n}\n\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3.5rem;\n}\n\n.page-footer-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.page-footer-actions button {\n  margin-left: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvY3JlYXRlLXVwZGF0ZS1wb3N0LWZvcm0vQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LXNoYXJlZFxcY29tcG9uZW50c1xcY3JlYXRlLXVwZGF0ZS1wb3N0LWZvcm1cXGNyZWF0ZS11cGRhdGUtcG9zdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9jcmVhdGUtdXBkYXRlLXBvc3QtZm9ybS9jcmVhdGUtdXBkYXRlLXBvc3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXNoYXJlZC9jb21wb25lbnRzL2NyZWF0ZS11cGRhdGUtcG9zdC1mb3JtL2NyZWF0ZS11cGRhdGUtcG9zdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcG9zdC10aXRsZS1tYXJnaW4tdG9wOiAwcmVtO1xyXG4gIC0tcG9zdC10aXRsZS1tYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xyXG59XHJcblxyXG4ucGFnZS1mb290ZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucGFnZS1mb290ZXItYWN0aW9ucyBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBvc3QtdGl0bGUtbWFyZ2luLXRvcDogMHJlbTtcbiAgLS1wb3N0LXRpdGxlLW1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xufVxuXG4ucGFnZS1mb290ZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wYWdlLWZvb3Rlci1hY3Rpb25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CreateUpdatePostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUpdatePostFormComponent", function() { return CreateUpdatePostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_modules_markdown_simplemde_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/markdown/simplemde.options */ "./src/app/modules/markdown/simplemde.options.ts");
/* harmony import */ var src_app_modules_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/constants.utils */ "./src/app/modules/shared/services/constants.utils.ts");





let CreateUpdatePostFormComponent = class CreateUpdatePostFormComponent {
    constructor() {
        this.simpleMdeOptions = src_app_modules_markdown_simplemde_options__WEBPACK_IMPORTED_MODULE_3__["SIMPLEMDE_OPTIONS"];
        this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewMode = false;
    }
    ngAfterViewInit() {
        this.editor = document.querySelector("simplemde");
        this.editorOffsetTop = this.editor.offsetTop - src_app_modules_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_4__["NAVBAR_HEIGHT"];
    }
    togglePreviewMode() {
        this.previewMode = !this.previewMode;
    }
    onSubmit() {
        this.formSubmit.emit(this.post);
    }
    addTag(event) {
        const value = event.value;
        if ((value || "").trim()) {
            this.post.tags.push(value.trim());
        }
        const input = event.input;
        if (input) {
            input.value = "";
        }
    }
    removeTag(tag) {
        const index = this.post.tags.indexOf(tag);
        if (index >= 0) {
            this.post.tags.splice(index, 1);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateUpdatePostFormComponent.prototype, "pageTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateUpdatePostFormComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateUpdatePostFormComponent.prototype, "submitButtonLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateUpdatePostFormComponent.prototype, "formSubmit", void 0);
CreateUpdatePostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-update-post-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-update-post-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-update-post-form.component.scss */ "./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.scss")).default]
    })
], CreateUpdatePostFormComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-layout/post-layout.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-layout/post-layout.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  background: var(--post-background-color);\n  padding: var(--post-padding);\n  border-radius: var(--post-border-radius, 0.4rem);\n  width: var(--post-width);\n  margin-top: var(--post-margin-top);\n  margin-right: auto;\n  margin-bottom: var(--post-margin-bottom);\n  margin-left: auto;\n  box-shadow: var(--post-box-shadow);\n  transition: var(--transition);\n  transition-property: color, background-color, box-shadow;\n}\n@media screen and (max-width: 720px) {\n  :host {\n    --post-width: 100%;\n    --post-padding: 3rem;\n    --post-margin-top: 2rem;\n    --post-margin-bottom: 2rem;\n  }\n}\n@media screen and (min-width: 721px) and (max-width: 1024px) {\n  :host {\n    --post-width: 93%;\n    --post-padding: 5rem;\n    --post-margin-top: 3rem;\n    --post-margin-bottom: 3rem;\n  }\n}\n@media screen and (min-width: 1025px) {\n  :host {\n    --post-width: 85%;\n    --post-padding: 8rem;\n    --post-margin-top: 4rem;\n    --post-margin-bottom: 4rem;\n  }\n}\n:host ::ng-deep h2 {\n  margin: 3rem 0 1.6rem;\n  font-size: 3rem;\n  font-weight: bold;\n  line-height: 1.235;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1sYXlvdXQvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LXNoYXJlZFxcY29tcG9uZW50c1xccG9zdC1sYXlvdXRcXHBvc3QtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0LWxheW91dC9wb3N0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXNCRSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3REFBQTtBQ3BCRjtBRFpFO0VBREY7SUFFSSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQkFBQTtFQ2VGO0FBQ0Y7QURiRTtFQVJGO0lBU0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMEJBQUE7RUNnQkY7QUFDRjtBRGRFO0VBZkY7SUFnQkksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMEJBQUE7RUNpQkY7QUFDRjtBRERBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1sYXlvdXQvcG9zdC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIC0tcG9zdC13aWR0aDogMTAwJTtcclxuICAgIC0tcG9zdC1wYWRkaW5nOiAzcmVtO1xyXG4gICAgLS1wb3N0LW1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAtLXBvc3QtbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAtLXBvc3Qtd2lkdGg6IDkzJTtcclxuICAgIC0tcG9zdC1wYWRkaW5nOiA1cmVtO1xyXG4gICAgLS1wb3N0LW1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAtLXBvc3QtbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLS1wb3N0LXdpZHRoOiA4NSU7XHJcbiAgICAtLXBvc3QtcGFkZGluZzogOHJlbTtcclxuICAgIC0tcG9zdC1tYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgLS1wb3N0LW1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wb3N0LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXBvc3QtcGFkZGluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcG9zdC1ib3JkZXItcmFkaXVzLCAwLjRyZW0pO1xyXG4gIHdpZHRoOiB2YXIoLS1wb3N0LXdpZHRoKTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1wb3N0LW1hcmdpbi10b3ApO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wb3N0LW1hcmdpbi1ib3R0b20pO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXBvc3QtYm94LXNoYWRvdyk7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBoMiB7XHJcbiAgbWFyZ2luOiAzcmVtIDAgMS42cmVtO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMS4yMzU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tcG9zdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcG9zdC1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcG9zdC1ib3JkZXItcmFkaXVzLCAwLjRyZW0pO1xuICB3aWR0aDogdmFyKC0tcG9zdC13aWR0aCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBvc3QtbWFyZ2luLXRvcCk7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcG9zdC1tYXJnaW4tYm90dG9tKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IHZhcigtLXBvc3QtYm94LXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIDpob3N0IHtcbiAgICAtLXBvc3Qtd2lkdGg6IDEwMCU7XG4gICAgLS1wb3N0LXBhZGRpbmc6IDNyZW07XG4gICAgLS1wb3N0LW1hcmdpbi10b3A6IDJyZW07XG4gICAgLS1wb3N0LW1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDpob3N0IHtcbiAgICAtLXBvc3Qtd2lkdGg6IDkzJTtcbiAgICAtLXBvc3QtcGFkZGluZzogNXJlbTtcbiAgICAtLXBvc3QtbWFyZ2luLXRvcDogM3JlbTtcbiAgICAtLXBvc3QtbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIDpob3N0IHtcbiAgICAtLXBvc3Qtd2lkdGg6IDg1JTtcbiAgICAtLXBvc3QtcGFkZGluZzogOHJlbTtcbiAgICAtLXBvc3QtbWFyZ2luLXRvcDogNHJlbTtcbiAgICAtLXBvc3QtbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgaDIge1xuICBtYXJnaW46IDNyZW0gMCAxLjZyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjIzNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-layout/post-layout.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-layout/post-layout.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLayoutComponent", function() { return PostLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostLayoutComponent = class PostLayoutComponent {
};
PostLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-layout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-layout/post-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-layout.component.scss */ "./src/app/modules/post/post-shared/components/post-layout/post-layout.component.scss")).default]
    })
], PostLayoutComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-summary/post-summary.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-summary/post-summary.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-width: 0;\n}\n\n:host a {\n  text-decoration: none;\n}\n\n.container {\n  background-color: var(--post-summary-background-color);\n  padding: var(--post-summary-padding, 3.2rem);\n  border-bottom: 2px solid var(--post-summary-border-color);\n  transition: var(--transition);\n  transition-property: background-color, border-color, box-shadow;\n  cursor: pointer;\n}\n\n:host:hover .container {\n  border-color: var(--post-summary-border-color-on-hover);\n  box-shadow: var(--post-summary-box-shadow);\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: bold;\n  color: var(--post-summary-title-color);\n  transition: var(--transition);\n  transition-property: color;\n  margin-bottom: 2rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n:host:hover .title {\n  color: var(--post-summary-title-color-on-hover);\n}\n\n.tags {\n  margin-bottom: 1.6rem;\n}\n\n.publish-date {\n  font-size: 1.4rem;\n  color: var(--post-summary-icons-color);\n}\n\n.iconify {\n  font-size: 1.5rem;\n  margin-right: 1.5rem;\n  color: var(--post-summary-icons-color);\n  transition: var(--transition);\n  transition-property: color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1zdW1tYXJ5L0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1zaGFyZWRcXGNvbXBvbmVudHNcXHBvc3Qtc3VtbWFyeVxccG9zdC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0LXN1bW1hcnkvcG9zdC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHNEQUFBO0VBQ0EsNENBQUE7RUFDQSx5REFBQTtFQUNBLDZCQUFBO0VBQ0EsK0RBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx1REFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0LXN1bW1hcnkvcG9zdC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuOmhvc3QgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3N0LXN1bW1hcnktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgcGFkZGluZzogdmFyKC0tcG9zdC1zdW1tYXJ5LXBhZGRpbmcsIDMuMnJlbSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBvc3Qtc3VtbWFyeS1ib3JkZXItY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgYm94LXNoYWRvdztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjpob3N0OmhvdmVyIC5jb250YWluZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcG9zdC1zdW1tYXJ5LWJvcmRlci1jb2xvci1vbi1ob3Zlcik7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tcG9zdC1zdW1tYXJ5LWJveC1zaGFkb3cpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tcG9zdC1zdW1tYXJ5LXRpdGxlLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3Q6aG92ZXIgLnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tcG9zdC1zdW1tYXJ5LXRpdGxlLWNvbG9yLW9uLWhvdmVyKTtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcclxufVxyXG5cclxuLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6IHZhcigtLXBvc3Qtc3VtbWFyeS1pY29ucy1jb2xvcik7XHJcbn1cclxuXHJcbi5pY29uaWZ5IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tcG9zdC1zdW1tYXJ5LWljb25zLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuOmhvc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3Qtc3VtbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcG9zdC1zdW1tYXJ5LXBhZGRpbmcsIDMuMnJlbSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wb3N0LXN1bW1hcnktYm9yZGVyLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgYm94LXNoYWRvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdDpob3ZlciAuY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wb3N0LXN1bW1hcnktYm9yZGVyLWNvbG9yLW9uLWhvdmVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tcG9zdC1zdW1tYXJ5LWJveC1zaGFkb3cpO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tcG9zdC1zdW1tYXJ5LXRpdGxlLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3Q6aG92ZXIgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBvc3Qtc3VtbWFyeS10aXRsZS1jb2xvci1vbi1ob3Zlcik7XG59XG5cbi50YWdzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xufVxuXG4ucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1wb3N0LXN1bW1hcnktaWNvbnMtY29sb3IpO1xufVxuXG4uaWNvbmlmeSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXBvc3Qtc3VtbWFyeS1pY29ucy1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-summary/post-summary.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-summary/post-summary.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PostSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSummaryComponent", function() { return PostSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostSummaryComponent = class PostSummaryComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostSummaryComponent.prototype, "post", void 0);
PostSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-summary",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-summary/post-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-summary.component.scss */ "./src/app/modules/post/post-shared/components/post-summary/post-summary.component.scss")).default]
    })
], PostSummaryComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-title/post-title.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-title/post-title.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding-bottom: 3rem;\n  margin-bottom: 3rem;\n  border-bottom: 0.3rem solid var(--border-color);\n}\n\nh1 {\n  color: var(--post-title-color);\n  line-height: 1;\n  font-weight: 100;\n  font-size: 8.5rem;\n}\n\nh1::first-line {\n  font-weight: 400;\n}\n\n.metadata {\n  margin-top: 5rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.publish-date {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdC10aXRsZS9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHBvc3RcXHBvc3Qtc2hhcmVkXFxjb21wb25lbnRzXFxwb3N0LXRpdGxlXFxwb3N0LXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0LXRpdGxlL3Bvc3QtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXNoYXJlZC9jb21wb25lbnRzL3Bvc3QtdGl0bGUvcG9zdC10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHZhcigtLXBvc3QtdGl0bGUtY29sb3IpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiA4LjVyZW07XHJcbn1cclxuXHJcbmgxOjpmaXJzdC1saW5lIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubWV0YWRhdGEge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wdWJsaXNoLWRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS1wb3N0LXRpdGxlLWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogOC41cmVtO1xufVxuXG5oMTo6Zmlyc3QtbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tZXRhZGF0YSB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/post-title/post-title.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/post-title/post-title.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PostTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTitleComponent", function() { return PostTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostTitleComponent = class PostTitleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostTitleComponent.prototype, "post", void 0);
PostTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-title",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/post-title/post-title.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-title.component.scss */ "./src/app/modules/post/post-shared/components/post-title/post-title.component.scss")).default]
    })
], PostTitleComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/posts-group/posts-group.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/posts-group/posts-group.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".posts {\n  margin-top: 4rem;\n  margin-bottom: 6rem;\n  display: grid;\n  grid-gap: 2rem;\n}\n@media screen and (max-width: 720px) {\n  .posts {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (min-width: 720px) {\n  .posts {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdHMtZ3JvdXAvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxwb3N0XFxwb3N0LXNoYXJlZFxcY29tcG9uZW50c1xccG9zdHMtZ3JvdXBcXHBvc3RzLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0cy1ncm91cC9wb3N0cy1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFORjtJQU9JLDBCQUFBO0VDRUY7QUFDRjtBREFFO0VBVkY7SUFXSSw4QkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0cy1ncm91cC9wb3N0cy1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0cyB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcbiIsIi5wb3N0cyB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDZyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAycmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnBvc3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLnBvc3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/posts-group/posts-group.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/posts-group/posts-group.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostsGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsGroupComponent", function() { return PostsGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsGroupComponent = class PostsGroupComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostsGroupComponent.prototype, "postsGroup", void 0);
PostsGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-posts-group",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-group/posts-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-group.component.scss */ "./src/app/modules/post/post-shared/components/posts-group/posts-group.component.scss")).default]
    })
], PostsGroupComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: var(--welcome-message-width);\n  margin: 0 auto;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    --welcome-message-width: 100%;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 720px) {\n  .container {\n    --welcome-message-width: 90%;\n  }\n}\n@media screen and (min-width: 720px) and (max-width: 1024px) {\n  .container {\n    --welcome-message-width: 80%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .container {\n    --welcome-message-width: 70%;\n  }\n}\nh1 {\n  color: var(--welcome-message-title-color);\n  font-weight: 300;\n  font-size: 3.8rem;\n  text-align: center;\n  margin-bottom: 4rem;\n}\np {\n  color: var(--welcome-message-color);\n  font-size: 1.8rem;\n  text-align: center;\n  line-height: 3.2rem;\n}\n.big-thanks {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdHMtd2VsY29tZS1tZXNzYWdlL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1zaGFyZWRcXGNvbXBvbmVudHNcXHBvc3RzLXdlbGNvbWUtbWVzc2FnZVxccG9zdHMtd2VsY29tZS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9wb3N0cy13ZWxjb21lLW1lc3NhZ2UvcG9zdHMtd2VsY29tZS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBZ0JFLG1DQUFBO0VBQ0EsY0FBQTtBQ2RGO0FERkU7RUFERjtJQUVJLDZCQUFBO0VDS0Y7QUFDRjtBREhFO0VBTEY7SUFNSSw0QkFBQTtFQ01GO0FBQ0Y7QURKRTtFQVRGO0lBVUksNEJBQUE7RUNPRjtBQUNGO0FETEU7RUFiRjtJQWNJLDRCQUFBO0VDUUY7QUFDRjtBREhBO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ01GO0FESEE7RUFDRSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ01GO0FESEE7RUFDRSxpQkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvcG9zdHMtd2VsY29tZS1tZXNzYWdlL3Bvc3RzLXdlbGNvbWUtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAtLXdlbGNvbWUtbWVzc2FnZS13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIC0td2VsY29tZS1tZXNzYWdlLXdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLS13ZWxjb21lLW1lc3NhZ2Utd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLS13ZWxjb21lLW1lc3NhZ2Utd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgd2lkdGg6IHZhcigtLXdlbGNvbWUtbWVzc2FnZS13aWR0aCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogdmFyKC0td2VsY29tZS1tZXNzYWdlLXRpdGxlLWNvbG9yKTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMy44cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogdmFyKC0td2VsY29tZS1tZXNzYWdlLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcclxufVxyXG5cclxuLmJpZy10aGFua3Mge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogdmFyKC0td2VsY29tZS1tZXNzYWdlLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAtLXdlbGNvbWUtbWVzc2FnZS13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAtLXdlbGNvbWUtbWVzc2FnZS13aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAtLXdlbGNvbWUtbWVzc2FnZS13aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLS13ZWxjb21lLW1lc3NhZ2Utd2lkdGg6IDcwJTtcbiAgfVxufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS13ZWxjb21lLW1lc3NhZ2UtdGl0bGUtY29sb3IpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDMuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG5wIHtcbiAgY29sb3I6IHZhcigtLXdlbGNvbWUtbWVzc2FnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG59XG5cbi5iaWctdGhhbmtzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PostsWelcomeMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsWelcomeMessageComponent", function() { return PostsWelcomeMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsWelcomeMessageComponent = class PostsWelcomeMessageComponent {
};
PostsWelcomeMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-posts-welcome-message",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-welcome-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-welcome-message.component.scss */ "./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.scss")).default]
    })
], PostsWelcomeMessageComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/search-posts/search-posts.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/search-posts/search-posts.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: var(--search-posts-width);\n  margin: 0 auto;\n}\n@media screen and (max-width: 480px) {\n  :host {\n    --search-posts-width: 100%;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 720px) {\n  :host {\n    --search-posts-width: 90%;\n  }\n}\n@media screen and (min-width: 720px) and (max-width: 1024px) {\n  :host {\n    --search-posts-width: 80%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  :host {\n    --search-posts-width: 70%;\n  }\n}\n:host.active .container {\n  border-color: var(--search-posts-border-color-on-active);\n}\n.container {\n  display: flex;\n  align-items: center;\n  font-size: 1.6rem;\n  border-radius: 100rem;\n  transition: var(--transition);\n  transition-property: color, background-color, border-color;\n  overflow: hidden;\n  border: 1px solid var(--search-posts-border-color);\n}\n.container > * {\n  padding: var(--search-posts-padding, 1rem);\n  height: var(--search-posts-height, 4rem);\n  transition: var(--transition);\n  transition-property: color, background-color, border-color;\n}\n.container .tags {\n  flex-grow: 0;\n  padding: 0;\n  --select-padding-left: 2.6rem;\n}\n.container .search-input {\n  flex-grow: 1;\n  font-size: 1.6rem;\n  border: none;\n  outline: none;\n  color: var(--search-posts-input-color);\n  background: var(--search-posts-input-background-color);\n  padding-left: 1.5rem;\n}\n.container .search-input::-webkit-input-placeholder {\n  color: var(--search-posts-input-placeholder-color);\n  opacity: 1;\n  /* Firefox */\n}\n.container .search-input::-moz-placeholder {\n  color: var(--search-posts-input-placeholder-color);\n  opacity: 1;\n  /* Firefox */\n}\n.container .search-input::-ms-input-placeholder {\n  color: var(--search-posts-input-placeholder-color);\n  opacity: 1;\n  /* Firefox */\n}\n.container .search-input::placeholder {\n  color: var(--search-posts-input-placeholder-color);\n  opacity: 1;\n  /* Firefox */\n}\n.container .icon {\n  font-size: 2.5rem;\n  color: var(--search-posts-icon-color);\n  background-color: var(--search-posts-icon-background-color);\n  padding-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLXBvc3RzL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1zaGFyZWRcXGNvbXBvbmVudHNcXHNlYXJjaC1wb3N0c1xcc2VhcmNoLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gtcG9zdHMvc2VhcmNoLXBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBZ0JFLGdDQUFBO0VBQ0EsY0FBQTtBQ2RGO0FERkU7RUFERjtJQUVJLDBCQUFBO0VDS0Y7QUFDRjtBREhFO0VBTEY7SUFNSSx5QkFBQTtFQ01GO0FBQ0Y7QURKRTtFQVRGO0lBVUkseUJBQUE7RUNPRjtBQUNGO0FETEU7RUFiRjtJQWNJLHlCQUFBO0VDUUY7QUFDRjtBREhJO0VBQ0Usd0RBQUE7QUNLTjtBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMERBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0FDR0Y7QURERTtFQUNFLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBEQUFBO0FDR0o7QURDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHNEQUFBO0VBQ0Esb0JBQUE7QUNFRjtBREFFO0VBQ0Usa0RBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0doQjtBRExFO0VBQ0Usa0RBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0doQjtBRExFO0VBQ0Usa0RBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0doQjtBRExFO0VBQ0Usa0RBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0doQjtBRENBO0VBQ0UsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXNoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1wb3N0cy9zZWFyY2gtcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC0tc2VhcmNoLXBvc3RzLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgLS1zZWFyY2gtcG9zdHMtd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAtLXNlYXJjaC1wb3N0cy13aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAtLXNlYXJjaC1wb3N0cy13aWR0aDogNzAlO1xyXG4gIH1cclxuICB3aWR0aDogdmFyKC0tc2VhcmNoLXBvc3RzLXdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJiAuY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtYm9yZGVyLWNvbG9yLW9uLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3I7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFyY2gtcG9zdHMtYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgJiA+ICoge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc2VhcmNoLXBvc3RzLXBhZGRpbmcsIDFyZW0pO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1zZWFyY2gtcG9zdHMtaGVpZ2h0LCA0cmVtKTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRhZ3Mge1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC0tc2VsZWN0LXBhZGRpbmctbGVmdDogMi42cmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5zZWFyY2gtaW5wdXQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tc2VhcmNoLXBvc3RzLWlucHV0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWFyY2gtcG9zdHMtaW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtaW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xyXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciAuaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXNlYXJjaC1wb3N0cy1pY29uLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogdmFyKC0tc2VhcmNoLXBvc3RzLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6aG9zdCB7XG4gICAgLS1zZWFyY2gtcG9zdHMtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIC0tc2VhcmNoLXBvc3RzLXdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDpob3N0IHtcbiAgICAtLXNlYXJjaC1wb3N0cy13aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgOmhvc3Qge1xuICAgIC0tc2VhcmNoLXBvc3RzLXdpZHRoOiA3MCU7XG4gIH1cbn1cbjpob3N0LmFjdGl2ZSAuY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtYm9yZGVyLWNvbG9yLW9uLWFjdGl2ZSk7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VhcmNoLXBvc3RzLWJvcmRlci1jb2xvcik7XG59XG4uY29udGFpbmVyID4gKiB7XG4gIHBhZGRpbmc6IHZhcigtLXNlYXJjaC1wb3N0cy1wYWRkaW5nLCAxcmVtKTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWFyY2gtcG9zdHMtaGVpZ2h0LCA0cmVtKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3I7XG59XG5cbi5jb250YWluZXIgLnRhZ3Mge1xuICBmbGV4LWdyb3c6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC0tc2VsZWN0LXBhZGRpbmctbGVmdDogMi42cmVtO1xufVxuXG4uY29udGFpbmVyIC5zZWFyY2gtaW5wdXQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtaW5wdXQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWFyY2gtcG9zdHMtaW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuLmNvbnRhaW5lciAuc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWFyY2gtcG9zdHMtaW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbi5jb250YWluZXIgLmljb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLXNlYXJjaC1wb3N0cy1pY29uLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLXBvc3RzLWljb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/search-posts/search-posts.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/search-posts/search-posts.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SearchPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsComponent", function() { return SearchPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _state_posts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");



let SearchPostsComponent = class SearchPostsComponent {
    constructor(postState) {
        this.postState = postState;
        this.inputChangeDelay = 500;
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timer = 0;
    }
    onMouseHover() {
        this.mouseHover = true;
        this.updateActiveState();
    }
    onMouseLeave() {
        this.mouseHover = false;
        this.updateActiveState();
    }
    onInputFocus() {
        this.inputFocus = true;
        this.updateActiveState();
    }
    onInputBlur() {
        this.inputFocus = false;
        this.updateActiveState();
    }
    onInputKeyup(event) {
        clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.inputChange.emit(event.target.value), this.inputChangeDelay);
    }
    onTagSelection(event) {
        this.postState.selectTag(event.value);
    }
    updateActiveState() {
        this.active = this.mouseHover || this.inputFocus;
    }
};
SearchPostsComponent.ctorParameters = () => [
    { type: _state_posts_state__WEBPACK_IMPORTED_MODULE_2__["PostsState"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchPostsComponent.prototype, "selectedTag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchPostsComponent.prototype, "tags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchPostsComponent.prototype, "inputChangeDelay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchPostsComponent.prototype, "inputChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active")
], SearchPostsComponent.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseover")
], SearchPostsComponent.prototype, "onMouseHover", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
], SearchPostsComponent.prototype, "onMouseLeave", null);
SearchPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-posts",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/search-posts/search-posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-posts.component.scss */ "./src/app/modules/post/post-shared/components/search-posts/search-posts.component.scss")).default]
    })
], SearchPostsComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/tag/tag-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/tag/tag-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-tag {\n  margin-left: 1rem;\n}\napp-tag:first-child {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvdGFnL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1zaGFyZWRcXGNvbXBvbmVudHNcXHRhZ1xcdGFnLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXNoYXJlZC9jb21wb25lbnRzL3RhZy90YWctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LXNoYXJlZC9jb21wb25lbnRzL3RhZy90YWctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcbiIsImFwcC10YWcge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbmFwcC10YWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/tag/tag-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/tag/tag-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TagListComponent = class TagListComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagListComponent.prototype, "tags", void 0);
TagListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tag-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag-list.component.scss */ "./src/app/modules/post/post-shared/components/tag/tag-list.component.scss")).default]
    })
], TagListComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/components/tag/tag.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/tag/tag.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  color: var(--tag-color);\n  background-color: var(--tag-background-color);\n  font-size: var(--tag-font-size, 1.5rem);\n  border-radius: 0.3rem;\n  padding: 0.5rem 1rem;\n  transition: var(--transition);\n  transition-property: color, background-color;\n  cursor: pointer;\n}\n\n:host:hover span,\n:host.selected span {\n  background-color: var(--primary-color);\n  color: var(--tag-selected-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvdGFnL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xccG9zdFxccG9zdC1zaGFyZWRcXGNvbXBvbmVudHNcXHRhZ1xcdGFnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bvc3QvcG9zdC1zaGFyZWQvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7O0VBRUUsc0NBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0L3Bvc3Qtc2hhcmVkL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS10YWctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhZy1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBmb250LXNpemU6IHZhcigtLXRhZy1mb250LXNpemUsIDEuNXJlbSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOmhvc3Q6aG92ZXIgc3BhbixcclxuOmhvc3Quc2VsZWN0ZWQgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRhZy1zZWxlY3RlZC1jb2xvcik7XHJcbn1cclxuIiwic3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10YWctY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWctYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGFnLWZvbnQtc2l6ZSwgMS41cmVtKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0OmhvdmVyIHNwYW4sXG46aG9zdC5zZWxlY3RlZCBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWctc2VsZWN0ZWQtY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/post/post-shared/components/tag/tag.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/components/tag/tag.component.ts ***!
  \**************************************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _state_posts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/posts.state */ "./src/app/modules/post/post-shared/state/posts.state.ts");



let TagComponent = class TagComponent {
    constructor(state) {
        this.state = state;
    }
    // prettier-ignore
    ngOnInit() {
        this.state.selectedTag$.subscribe(selectedTag => {
            this.selected = this.tag == selectedTag;
        });
    }
    handleClickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.selectTag(this.tag);
    }
};
TagComponent.ctorParameters = () => [
    { type: _state_posts_state__WEBPACK_IMPORTED_MODULE_2__["PostsState"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "tag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.selected")
], TagComponent.prototype, "selected", void 0);
TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tag",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post-shared/components/tag/tag.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag.component.scss */ "./src/app/modules/post/post-shared/components/tag/tag.component.scss")).default]
    })
], TagComponent);



/***/ }),

/***/ "./src/app/modules/post/post-shared/models/post.internal.models.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/post/post-shared/models/post.internal.models.ts ***!
  \*************************************************************************/
/*! exports provided: PostSummary, Post, PostsGroup, PostGroupByStrategy, DefaultPost, OfflinePost, PostsByCategory, PostsSummaries, PostsPage, PostsGroups, PostGroupByStrategies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSummary", function() { return PostSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsGroup", function() { return PostsGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostGroupByStrategy", function() { return PostGroupByStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPost", function() { return DefaultPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinePost", function() { return OfflinePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsByCategory", function() { return PostsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsSummaries", function() { return PostsSummaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsGroups", function() { return PostsGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostGroupByStrategies", function() { return PostGroupByStrategies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_modules_shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/models/page.model */ "./src/app/modules/shared/models/page.model.ts");


class PostSummary {
}
class Post extends PostSummary {
}
class PostsGroup {
    constructor() {
        this.posts = [];
    }
}
class PostGroupByStrategy {
    constructor() {
        this.values = [];
    }
}
class DefaultPost {
    constructor() {
        this.id = undefined;
        this.title = "";
        this.category = "";
        this.tags = [];
        this.createdAt = new Date();
        this.lastUpdatedAt = new Date();
        this.searchKey = "";
        this.author = undefined;
        this.bodyMarkdown = "";
    }
}
class OfflinePost {
    constructor() {
        this.id = undefined;
        this.title = "post title";
        this.category = "post category";
        this.tags = ["port-tag"];
        this.createdAt = new Date();
        this.lastUpdatedAt = new Date();
        this.searchKey = "";
        this.author = undefined;
        this.bodyMarkdown = "lorem content: Do amet eu tempor dolor cillum ullamco mollit nulla consectetur anim ut eiusmod aliquip occaecat. Ut sint adipisicing irure ex. Laboris magna excepteur ipsum et proident excepteur ipsum amet. Aliqua cupidatat cupidatat velit velit adipisicing nostrud sit aliqua nisi enim aliqua laboris.";
    }
}
class PostsByCategory extends Map {
}
class PostsSummaries extends Array {
}
class PostsPage extends src_app_modules_shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__["Page"] {
}
class PostsGroups extends Array {
}
class PostGroupByStrategies extends Array {
}


/***/ }),

/***/ "./src/app/modules/post/post-shared/post-shared.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/post/post-shared/post-shared.module.ts ***!
  \****************************************************************/
/*! exports provided: PostSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSharedModule", function() { return PostSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-posts/search-posts.component */ "./src/app/modules/post/post-shared/components/search-posts/search-posts.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/modules/post/post-shared/components/tag/tag.component.ts");
/* harmony import */ var _components_tag_tag_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tag/tag-list.component */ "./src/app/modules/post/post-shared/components/tag/tag-list.component.ts");
/* harmony import */ var _components_post_layout_post_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-layout/post-layout.component */ "./src/app/modules/post/post-shared/components/post-layout/post-layout.component.ts");
/* harmony import */ var _components_post_title_post_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-title/post-title.component */ "./src/app/modules/post/post-shared/components/post-title/post-title.component.ts");
/* harmony import */ var _components_post_summary_post_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-summary/post-summary.component */ "./src/app/modules/post/post-shared/components/post-summary/post-summary.component.ts");
/* harmony import */ var _components_posts_welcome_message_posts_welcome_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/posts-welcome-message/posts-welcome-message.component */ "./src/app/modules/post/post-shared/components/posts-welcome-message/posts-welcome-message.component.ts");
/* harmony import */ var _components_posts_group_posts_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/posts-group/posts-group.component */ "./src/app/modules/post/post-shared/components/posts-group/posts-group.component.ts");
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../alert/alert.module */ "./src/app/modules/alert/alert.module.ts");
/* harmony import */ var _post_comments_post_comment_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post-comments/post-comment.module */ "./src/app/modules/post/post-comments/post-comment.module.ts");
/* harmony import */ var _components_create_update_post_form_create_update_post_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create-update-post-form/create-update-post-form.component */ "./src/app/modules/post/post-shared/components/create-update-post-form/create-update-post-form.component.ts");
/* harmony import */ var _markdown_markdown_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../markdown/markdown.module */ "./src/app/modules/markdown/markdown.module.ts");
















let PostSharedModule = class PostSharedModule {
};
PostSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _markdown_markdown_module__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"],
            _alert_alert_module__WEBPACK_IMPORTED_MODULE_12__["AlertModule"],
            _post_comments_post_comment_module__WEBPACK_IMPORTED_MODULE_13__["PostCommentModule"],
        ],
        declarations: [
            _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_5__["TagComponent"],
            _components_tag_tag_list_component__WEBPACK_IMPORTED_MODULE_6__["TagListComponent"],
            _components_post_summary_post_summary_component__WEBPACK_IMPORTED_MODULE_9__["PostSummaryComponent"],
            _components_posts_group_posts_group_component__WEBPACK_IMPORTED_MODULE_11__["PostsGroupComponent"],
            _components_search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_4__["SearchPostsComponent"],
            _components_posts_welcome_message_posts_welcome_message_component__WEBPACK_IMPORTED_MODULE_10__["PostsWelcomeMessageComponent"],
            _components_post_layout_post_layout_component__WEBPACK_IMPORTED_MODULE_7__["PostLayoutComponent"],
            _components_post_title_post_title_component__WEBPACK_IMPORTED_MODULE_8__["PostTitleComponent"],
            _components_create_update_post_form_create_update_post_form_component__WEBPACK_IMPORTED_MODULE_14__["CreateUpdatePostFormComponent"],
        ],
        exports: [
            _markdown_markdown_module__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"],
            _components_post_layout_post_layout_component__WEBPACK_IMPORTED_MODULE_7__["PostLayoutComponent"],
            _components_post_title_post_title_component__WEBPACK_IMPORTED_MODULE_8__["PostTitleComponent"],
            _components_posts_welcome_message_posts_welcome_message_component__WEBPACK_IMPORTED_MODULE_10__["PostsWelcomeMessageComponent"],
            _components_search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_4__["SearchPostsComponent"],
            _components_posts_group_posts_group_component__WEBPACK_IMPORTED_MODULE_11__["PostsGroupComponent"],
            _components_create_update_post_form_create_update_post_form_component__WEBPACK_IMPORTED_MODULE_14__["CreateUpdatePostFormComponent"],
        ],
    })
], PostSharedModule);



/***/ }),

/***/ "./src/app/modules/post/post-shared/services/post.converter.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/post/post-shared/services/post.converter.ts ***!
  \*********************************************************************/
/*! exports provided: PostConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostConverter", function() { return PostConverter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var _user_services_user_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/services/user.converter */ "./src/app/modules/user/services/user.converter.ts");




let PostConverter = class PostConverter {
    constructor(userConverter) {
        this.userConverter = userConverter;
    }
    toPostSummary(post) {
        return {
            id: post.id,
            title: post.title,
            category: post.category,
            tags: post.tags,
            createdAt: new Date(post.createdAtIso8601),
            lastUpdatedAt: post.lastUpdatedAtIso8601
                ? new Date(post.lastUpdatedAtIso8601)
                : null,
            author: this.userConverter.toAuthor(post.author),
            searchKey: this.calculateSearchKey(post.title, post.tags),
        };
    }
    toPost(post) {
        return {
            id: post.id,
            title: post.title,
            category: post.category,
            tags: post.tags,
            createdAt: new Date(post.createdAtIso8601),
            lastUpdatedAt: post.lastUpdatedAtIso8601
                ? new Date(post.lastUpdatedAtIso8601)
                : null,
            searchKey: this.calculateSearchKey(post.title, post.tags),
            author: this.userConverter.toAuthor(post.author),
            bodyMarkdown: atob(post.bodyMarkdownBase64),
        };
    }
    // prettier-ignore
    toPostGroupByStrategies(strategies) {
        const res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostGroupByStrategies"]();
        strategies.forEach(strategy => res.push(this.toPostGroupByStrategy(strategy)));
        return res;
    }
    // prettier-ignore
    toPostGroupByStrategy(strategy) {
        const res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostGroupByStrategy"]();
        res.name = strategy.name;
        res.values = strategy.values;
        return res;
    }
    toPostsSummaries(posts) {
        let res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostsGroups"]();
        posts.forEach((postsGroupApiResponse) => {
            let postsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostsGroup"]();
            postsGroup.name = postsGroupApiResponse.groupName;
            postsGroup.posts = [];
            postsGroupApiResponse.posts.forEach((post) => postsGroup.posts.push(this.toPostSummary(post)));
            res.push(postsGroup);
        });
        return res;
    }
    // prettier-ignore
    toPostsGroups(postsGroups) {
        const res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostsGroups"]();
        postsGroups.forEach(postsGroup => res.push(this.toPostsGroup(postsGroup)));
        return res;
    }
    // prettier-ignore
    toPostsGroup(postsGroupApiResponse) {
        const res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostsGroup"]();
        res.name = postsGroupApiResponse.name;
        postsGroupApiResponse.posts.forEach(post => res.posts.push(this.toPostSummary(post)));
        return res;
    }
    toPostsSummariesPage(posts) {
        const res = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_2__["PostsPage"]();
        res.totalItems = posts.totalItems;
        res.firstPage = posts.page == 0;
        res.lastPage = posts.lastPage;
        res.page = posts.page;
        const items = new Array();
        posts.items.forEach((post) => items.push(this.toPostSummary(post)));
        res.items = items;
        return res;
    }
    toGetUserPostsApiRequest(filter, page, size = 5) {
        return {
            url: `/secure-api/user/posts-summaries-page?filter=${filter}&page=${page}&size=${size}`,
        };
    }
    toGetAllUserPostsApiRequest() {
        return {
            url: `/secure-api/user/posts-summaries`,
        };
    }
    toCreatePostApiRequest(post) {
        return {
            url: "/secure-api/posts",
            body: {
                title: post.title,
                category: post.category,
                tags: post.tags,
                bodyMarkdownBase64: btoa(post.bodyMarkdown),
            },
        };
    }
    toUpdatePostApiRequest(post) {
        return {
            url: `/secure-api/posts/${post.id}`,
            body: {
                title: post.title,
                category: post.category,
                tags: post.tags,
                bodyMarkdownBase64: btoa(post.bodyMarkdown),
            },
        };
    }
    toDeletePostApiRequest(postId) {
        return {
            url: `/secure-api/posts/${postId}`,
        };
    }
    toDeleteUserPostsApiRequest() {
        return {
            url: `/secure-api/user/posts/all`,
        };
    }
    toGetPostGroupByStrategiesApiRequest() {
        return {
            url: "/api/post-group-by-strategies",
        };
    }
    // prettier-ignore
    toGetPostsGroupsApiRequest(groupBy, groups) {
        return {
            url: `/api/posts-groups?groupBy=${groupBy}&groups=${groups.join(',')}`,
        };
    }
    toUploadPostsApiRequest(file) {
        return {
            url: "/secure-api/posts/bulk_create_and_update_operations.json",
            file: file,
        };
    }
    calculateSearchKey(postTitle, postTags) {
        return [...postTitle.split(" "), ...postTags].join(" ");
    }
};
PostConverter.ctorParameters = () => [
    { type: _user_services_user_converter__WEBPACK_IMPORTED_MODULE_3__["UserConverter"] }
];
PostConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostConverter);



/***/ }),

/***/ "./src/app/modules/post/post-shared/services/post.http-client.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/post/post-shared/services/post.http-client.ts ***!
  \***********************************************************************/
/*! exports provided: PostHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostHttpClient", function() { return PostHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _post_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _alert_common_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../alert/common.http-client */ "./src/app/modules/alert/common.http-client.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");







let PostHttpClient = class PostHttpClient extends _alert_common_http_client__WEBPACK_IMPORTED_MODULE_5__["CommonHttpClient"] {
    constructor(postConverter, http, alertService) {
        super(alertService);
        this.postConverter = postConverter;
        this.http = http;
    }
    // prettier-ignore
    getPostGroupByStrategies(request) {
        return this.http
            .get(request.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((strategies) => this.postConverter.toPostGroupByStrategies(strategies)))
            .toPromise();
    }
    // prettier-ignore
    getPostsGroups(request) {
        return this.http
            .get(request.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((postsGroups) => this.postConverter.toPostsGroups(postsGroups)))
            .toPromise();
    }
    getUserPosts(request) {
        // prettier-ignore
        return this.http
            .get(request.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((posts) => this.postConverter.toPostsSummariesPage(posts)))
            .toPromise();
    }
    getUserPostsBlob(request) {
        // prettier-ignore
        return fetch(request.url)
            .then(response => response.blob());
    }
    getPostById(postId) {
        return this.http
            .get(`/api/posts/${postId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((post) => this.postConverter.toPost(post)))
            .toPromise();
    }
    createPost(request) {
        // prettier-ignore
        return this.http
            .post(request.url, request.body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((post) => this.postConverter.toPostSummary(post)))
            .toPromise();
        // prettier-ignore
    }
    updatePost(request) {
        // prettier-ignore
        return this.http
            .put(request.url, request.body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((post) => this.postConverter.toPostSummary(post)))
            .toPromise();
        // prettier-ignore
    }
    uploadPosts(request) {
        // prettier-ignore
        const formData = new FormData();
        formData.append("file", request.file, request.file.name);
        return this.http
            .post(request.url, formData)
            .toPromise();
        // prettier-ignore
    }
    deletePost(request) {
        // prettier-ignore
        return this.http
            .delete(request.url)
            .toPromise();
        // prettier-ignore
    }
    deleteUserPosts(request) {
        // prettier-ignore
        return this.http
            .delete(request.url)
            .toPromise();
        // prettier-ignore
    }
};
PostHttpClient.ctorParameters = () => [
    { type: _post_converter__WEBPACK_IMPORTED_MODULE_3__["PostConverter"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
PostHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostHttpClient);



/***/ }),

/***/ "./src/app/modules/post/post-shared/services/post.validator.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/post/post-shared/services/post.validator.ts ***!
  \*********************************************************************/
/*! exports provided: PostValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostValidator", function() { return PostValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var src_app_modules_shared_services_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/string.utils */ "./src/app/modules/shared/services/string.utils.ts");
/* harmony import */ var src_app_modules_shared_models_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/models/validation.error */ "./src/app/modules/shared/models/validation.error.ts");





let PostValidator = class PostValidator {
    constructor(alertService) {
        this.alertService = alertService;
    }
    validateCreatePost(post) {
        const errors = this.createPostErrors(post);
        this.throwValidationErrorIfNotEmpty(errors);
    }
    validateUpdatePost(post) {
        const errors = this.createPostErrors(post);
        if (!post.createdAt) {
            errors.push("Post createAt is mandatory");
        }
        this.throwValidationErrorIfNotEmpty(errors);
    }
    createPostErrors(post) {
        const errors = [];
        if (src_app_modules_shared_services_string_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isBlank(post.title)) {
            errors.push("Post title is mandatory");
        }
        if (src_app_modules_shared_services_string_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isBlank(post.category)) {
            errors.push("Post category is mandatory");
        }
        if (!post.tags || post.tags.length === 0) {
            errors.push("Post tags are mandatory");
        }
        if (src_app_modules_shared_services_string_utils__WEBPACK_IMPORTED_MODULE_3__["StringUtils"].isBlank(post.bodyMarkdown)) {
            errors.push("Post body is mandatory");
        }
        return errors;
    }
    throwValidationErrorIfNotEmpty(errors) {
        if (errors.length > 0) {
            throw new src_app_modules_shared_models_validation_error__WEBPACK_IMPORTED_MODULE_4__["ValidationError"](errors.join("<br />"));
        }
    }
};
PostValidator.ctorParameters = () => [
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
PostValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], PostValidator);



/***/ }),

/***/ "./src/app/modules/post/post-shared/state/posts.state.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/post/post-shared/state/posts.state.ts ***!
  \***************************************************************/
/*! exports provided: PostsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsState", function() { return PostsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/constants.utils */ "./src/app/modules/shared/services/constants.utils.ts");
/* harmony import */ var _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post.internal.models */ "./src/app/modules/post/post-shared/models/post.internal.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_post_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post.converter */ "./src/app/modules/post/post-shared/services/post.converter.ts");
/* harmony import */ var _services_post_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/post.http-client */ "./src/app/modules/post/post-shared/services/post.http-client.ts");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var src_app_modules_shared_services_set_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/services/set.utils */ "./src/app/modules/shared/services/set.utils.ts");
/* harmony import */ var src_app_modules_shared_services_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/services/window.service */ "./src/app/modules/shared/services/window.service.ts");
/* harmony import */ var src_app_modules_shared_models_no_posts_groups_to_load_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/shared/models/no-posts-groups-to-load.error */ "./src/app/modules/shared/models/no-posts-groups-to-load.error.ts");











const GROUP_BY_POST_CATEGORY = "category";
const GROUP_BY_POST_AUTHOR = "author";
let PostsState = class PostsState {
    constructor(postConverter, postHttpClient, alertService, windowService) {
        this.postConverter = postConverter;
        this.postHttpClient = postHttpClient;
        this.alertService = alertService;
        this.windowService = windowService;
        this.loadPostsInProgress = false;
        this.searchText = "";
        this.supportedGroupByStrategiesName = ["category", "author"];
        this.initialPostsLoad = true;
        this.postGroupsToLoadNumber = 4;
        // prettier-ignore
        this.userPostsPage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]());
        this.init();
    }
    // prettier-ignore
    init() {
        this.allTags = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new Set([_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__["ALL_TAGS"]]));
        this.selectedTag = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__["ALL_TAGS"]);
        this.loadedPostsGroups = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]());
        this.noMorePosts = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.displayedPostsGroups = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]());
        this.postGroupByStrategies = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostGroupByStrategies"]());
        this.allTags$ = this.allTags.asObservable();
        this.selectedTag$ = this.selectedTag.asObservable();
        this.loadedPostsGroups$ = this.loadedPostsGroups.asObservable();
        this.noMorePosts$ = this.noMorePosts.asObservable();
        this.displayedPostsGroups$ = this.displayedPostsGroups.asObservable();
        this.postGroupByStrategies$ = this.postGroupByStrategies.asObservable();
        const request = this.postConverter.toGetPostGroupByStrategiesApiRequest();
        this.postHttpClient
            .getPostGroupByStrategies(request)
            .then((strategies) => this.handleGetPostGroupByStrategiesSuccessEvent(strategies))
            .catch((error) => this.handleGetPostGroupByStrategiesErrorEvent(error));
    }
    setSearchText(searchText) {
        this.searchText = searchText;
        this.calculateDisplayedPostsGroups();
    }
    resetFilters() {
        this.selectedTag.next(_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__["ALL_TAGS"]);
        this.searchText = "";
        this.calculateDisplayedPostsGroups();
    }
    selectTag(tag) {
        this.selectedTag.next(tag);
        this.calculateDisplayedPostsGroups();
    }
    // prettier-ignore
    loadMorePosts() {
        if (this.noMorePosts.getValue() || this.loadPostsInProgress)
            return;
        try {
            this.loadPostsInProgress = true;
            const getPostsGroupsApiRequest = this.calculateGetPostsGroupsApiRequest();
            this.postHttpClient
                .getPostsGroups(getPostsGroupsApiRequest)
                .then((postsGroups) => this.handleGetPostsGroupsSuccessEvent(postsGroups))
                .catch((error) => this.handleGetPostsGroupsErrorEvent(error));
        }
        catch (e) {
            if (e instanceof src_app_modules_shared_models_no_posts_groups_to_load_error__WEBPACK_IMPORTED_MODULE_10__["NoPostsGroupsToLoadError"]) {
                console.log('no posts groups to load');
            }
            else {
                throw e;
            }
        }
        finally {
            this.loadPostsInProgress = false;
        }
    }
    addPost(post) {
        const postGroup = this.calculatePostGroup(post);
        const postsGroups = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]();
        let alreadyExistingGroup = false;
        this.loadedPostsGroups.getValue().forEach((group) => {
            if (group.name === postGroup) {
                const updatedPostsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroup"]();
                updatedPostsGroup.name = group.name;
                updatedPostsGroup.posts = group.posts;
                updatedPostsGroup.posts.push(post);
                postsGroups.push(updatedPostsGroup);
                alreadyExistingGroup = true;
            }
            else {
                postsGroups.push(group);
            }
        });
        if (!alreadyExistingGroup) {
            const newPostsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroup"]();
            newPostsGroup.name = postGroup;
            newPostsGroup.posts.push(post);
            postsGroups.unshift(newPostsGroup);
        }
        this.loadedPostsGroups.next(postsGroups);
        this.displayedPostsGroups.next(postsGroups);
        this.calculateAllTags();
    }
    updatePost(post) {
        const postsGroups = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]();
        this.loadedPostsGroups.getValue().forEach((group) => {
            const postsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroup"]();
            postsGroup.name = group.name;
            group.posts.forEach((originalPost) => {
                if (originalPost.id === post.id) {
                    postsGroup.posts.push(post);
                }
                else {
                    postsGroup.posts.push(originalPost);
                }
            });
            postsGroups.push(postsGroup);
        });
        this.loadedPostsGroups.next(postsGroups);
        this.displayedPostsGroups.next(postsGroups);
        this.calculateAllTags();
    }
    deletePost(postId) {
        const postsGroupsToKeep = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]();
        this.loadedPostsGroups.getValue().forEach((group) => {
            let posts = group.posts.filter((post) => post.id !== postId);
            if (posts.length > 0) {
                let postsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroup"]();
                postsGroup.name = group.name;
                postsGroup.posts = posts;
                postsGroupsToKeep.push(postsGroup);
            }
        });
        this.loadedPostsGroups.next(postsGroupsToKeep);
        this.displayedPostsGroups.next(postsGroupsToKeep);
        this.calculateAllTags();
    }
    calculateDisplayedPostsGroups() {
        const displayedPostsGroups = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroups"]();
        this.loadedPostsGroups.getValue().forEach((group) => {
            let posts = group.posts.filter((post) => this.keepPost(post));
            if (posts.length > 0) {
                let postsGroup = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsGroup"]();
                postsGroup.name = group.name;
                postsGroup.posts = posts;
                displayedPostsGroups.push(postsGroup);
            }
        });
        this.displayedPostsGroups.next(displayedPostsGroups);
    }
    // prettier-ignore
    keepPost(post) {
        const selectedTag = this.selectedTag.getValue();
        if (selectedTag == _shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__["ALL_TAGS"]) {
            if (!this.searchText) {
                return true;
            }
            else {
                for (let searchWord of this.searchText.split(" ")) {
                    if (post.searchKey.toLowerCase().indexOf(searchWord.toLowerCase()) > -1)
                        return true;
                }
                return false;
            }
        }
        else {
            if (!this.searchText) {
                return post.tags.includes(selectedTag);
            }
            else {
                for (let searchWord of this.searchText.split(" ")) {
                    if (post.searchKey.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 &&
                        post.tags.includes(selectedTag))
                        return true;
                }
                return false;
            }
        }
    }
    handleGetPostGroupByStrategiesErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while fetching posts :(");
    }
    // prettier-ignore
    handleGetPostGroupByStrategiesSuccessEvent(strategies) {
        this.postGroupByStrategies.next(strategies);
        this.selectedGroupByStrategy = this.calculateSelectedGroupByStrategy();
        this.loadMorePosts();
    }
    // prettier-ignore
    calculateSelectedGroupByStrategy() {
        let groupByStrategy = this.postGroupByStrategies.getValue().find(s => s.name == GROUP_BY_POST_CATEGORY);
        if (groupByStrategy)
            return groupByStrategy;
        groupByStrategy = this.postGroupByStrategies.getValue().find(s => this.supportedGroupByStrategiesName.includes(s.name));
        if (groupByStrategy)
            return groupByStrategy;
        throw new Error("No groupBy strategy is supported by the current Angular frontend app");
    }
    handleGetPostsGroupsErrorEvent(error) {
        console.error(error);
        this.alertService.error("Error while fetching posts :(");
    }
    // prettier-ignore
    handleGetPostsGroupsSuccessEvent(postsGroups) {
        this.loadedPostsGroups.next([...this.loadedPostsGroups.getValue(), ...postsGroups]);
        this.displayedPostsGroups.next(this.loadedPostsGroups.getValue());
        if (this.initialPostsLoad) {
            this.initialPostsLoad = false;
        }
        else {
            this.windowService.scrollToBottom();
        }
        this.calculateAllTags();
    }
    // prettier-ignore
    calculateAllTags() {
        const tags = new Set();
        let loadedPosts = new _models_post_internal_models__WEBPACK_IMPORTED_MODULE_3__["PostsSummaries"]();
        this.loadedPostsGroups.getValue().forEach(group => loadedPosts = loadedPosts.concat(group.posts));
        loadedPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
        this.allTags.next(new Set([_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_2__["ALL_TAGS"], ...src_app_modules_shared_services_set_utils__WEBPACK_IMPORTED_MODULE_8__["SetUtils"].sort(tags)]));
    }
    // prettier-ignore
    calculateGetPostsGroupsApiRequest() {
        const groups = this.calculateNextGroupsToLoad(this.selectedGroupByStrategy.values);
        return this.postConverter.toGetPostsGroupsApiRequest(this.selectedGroupByStrategy.name, groups);
    }
    // prettier-ignore
    calculateNextGroupsToLoad(groupByStrategyValues) {
        const loadedGroups = this.loadedPostsGroups.getValue().map(p => p.name);
        let notYetLoadedGroups = groupByStrategyValues.filter(group => loadedGroups.indexOf(group) == -1);
        notYetLoadedGroups = notYetLoadedGroups.sort();
        if (notYetLoadedGroups.length <= this.postGroupsToLoadNumber)
            this.handleNoMorePostsToLoadEvent(notYetLoadedGroups.length);
        return notYetLoadedGroups.slice(0, this.postGroupsToLoadNumber);
    }
    // prettier-ignore
    handleNoMorePostsToLoadEvent(notYetLoadedGroupsLength) {
        this.noMorePosts.next(true);
        if (this.initialPostsLoad) {
            if (notYetLoadedGroupsLength == 0) {
                this.alertService.info("No posts has been created yet. <br/>Be the first to create the first blog on this website :)");
            }
        }
        else {
            this.alertService.info("No more posts to load");
        }
        if (notYetLoadedGroupsLength == 0) {
            throw new src_app_modules_shared_models_no_posts_groups_to_load_error__WEBPACK_IMPORTED_MODULE_10__["NoPostsGroupsToLoadError"]();
        }
    }
    calculatePostGroup(post) {
        if (this.selectedGroupByStrategy.name == GROUP_BY_POST_CATEGORY) {
            return post.category;
        }
        else {
            return post.author.username;
        }
    }
};
PostsState.ctorParameters = () => [
    { type: _services_post_converter__WEBPACK_IMPORTED_MODULE_5__["PostConverter"] },
    { type: _services_post_http_client__WEBPACK_IMPORTED_MODULE_6__["PostHttpClient"] },
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_modules_shared_services_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"] }
];
PostsState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PostsState);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/button.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/button.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconify {\n  font-size: var(--button-size, 4.5rem);\n  color: var(--icon-color);\n  transition: var(--transition);\n  transition-property: color;\n  cursor: pointer;\n}\n.iconify:hover {\n  color: var(--primary-color);\n}\n:host(.disabled) .iconify {\n  color: var(--disabled-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25zXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UsMkJBQUE7QUNDSjtBREVBO0VBQ0UsdUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmlmeSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tc2l6ZSwgNC41cmVtKTtcclxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuOmhvc3QoLmRpc2FibGVkKSAuaWNvbmlmeSB7XHJcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5pY29uaWZ5IHtcbiAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tc2l6ZSwgNC41cmVtKTtcbiAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pY29uaWZ5OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG46aG9zdCguZGlzYWJsZWQpIC5pY29uaWZ5IHtcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkLWNvbG9yKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2NvbnN1bHQtYnV0dG9uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25zXFxjb25zdWx0LWJ1dHRvblxcY29uc3VsdC1idXR0b24tbGluay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2NvbnN1bHQtYnV0dG9uL2NvbnN1bHQtYnV0dG9uLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvY29uc3VsdC1idXR0b24vY29uc3VsdC1idXR0b24tbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConsultButtonLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultButtonLinkComponent", function() { return ConsultButtonLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConsultButtonLinkComponent = class ConsultButtonLinkComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConsultButtonLinkComponent.prototype, "routerLink", void 0);
ConsultButtonLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-consult-button-link",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consult-button-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consult-button-link.component.scss */ "./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.scss")).default]
    })
], ConsultButtonLinkComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/consult-button/consult-button.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/consult-button/consult-button.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConsultButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultButtonComponent", function() { return ConsultButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConsultButtonComponent = class ConsultButtonComponent {
};
ConsultButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-consult-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consult-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/consult-button/consult-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../button.component.scss */ "./src/app/modules/shared/components/buttons/button.component.scss")).default]
    })
], ConsultButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/delete-button/delete-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/delete-button/delete-button.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconify:hover {\n  color: var(--danger-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2RlbGV0ZS1idXR0b24vQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXGJ1dHRvbnNcXGRlbGV0ZS1idXR0b25cXGRlbGV0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9kZWxldGUtYnV0dG9uL2RlbGV0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2RlbGV0ZS1idXR0b24vZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uaWZ5OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG4iLCIuaWNvbmlmeTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/delete-button/delete-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/delete-button/delete-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButtonComponent", function() { return DeleteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeleteButtonComponent = class DeleteButtonComponent {
};
DeleteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-delete-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/delete-button/delete-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../button.component.scss */ "./src/app/modules/shared/components/buttons/button.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-button.component.scss */ "./src/app/modules/shared/components/buttons/delete-button/delete-button.component.scss")).default]
    })
], DeleteButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2VkaXQtYnV0dG9uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25zXFxlZGl0LWJ1dHRvblxcZWRpdC1idXR0b24tbGluay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2VkaXQtYnV0dG9uL2VkaXQtYnV0dG9uLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvZWRpdC1idXR0b24vZWRpdC1idXR0b24tbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditButtonLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButtonLinkComponent", function() { return EditButtonLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditButtonLinkComponent = class EditButtonLinkComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditButtonLinkComponent.prototype, "routerLink", void 0);
EditButtonLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-button-link",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-button-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-button-link.component.scss */ "./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.scss")).default]
    })
], EditButtonLinkComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/edit-button/edit-button.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/edit-button/edit-button.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButtonComponent", function() { return EditButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditButtonComponent = class EditButtonComponent {
};
EditButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/edit-button/edit-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../button.component.scss */ "./src/app/modules/shared/components/buttons/button.component.scss")).default]
    })
], EditButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  margin-bottom: 3.5rem;\n}\n\n.text {\n  font-size: 1.6rem;\n}\n\n.iconify {\n  margin-right: 1rem;\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25zL2xvYWQtbW9yZS1idXR0b24vQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXGJ1dHRvbnNcXGxvYWQtbW9yZS1idXR0b25cXGxvYWQtbW9yZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9sb2FkLW1vcmUtYnV0dG9uL2xvYWQtbW9yZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvbG9hZC1tb3JlLWJ1dHRvbi9sb2FkLW1vcmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5pY29uaWZ5IHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmljb25pZnkge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoadMoreButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreButtonComponent", function() { return LoadMoreButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadMoreButtonComponent = class LoadMoreButtonComponent {
    constructor() {
        this.text = "Load more...";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoadMoreButtonComponent.prototype, "text", void 0);
LoadMoreButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-load-more-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./load-more-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./load-more-button.component.scss */ "./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.scss")).default]
    })
], LoadMoreButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/next-button/next-button.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/next-button/next-button.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NextButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButtonComponent", function() { return NextButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NextButtonComponent = class NextButtonComponent {
};
NextButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-next-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./next-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/next-button/next-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../button.component.scss */ "./src/app/modules/shared/components/buttons/button.component.scss")).default]
    })
], NextButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/previous-button/previous-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/previous-button/previous-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PreviousButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousButtonComponent", function() { return PreviousButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreviousButtonComponent = class PreviousButtonComponent {
};
PreviousButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-previous-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./previous-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/buttons/previous-button/previous-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../button.component.scss */ "./src/app/modules/shared/components/buttons/button.component.scss")).default]
    })
], PreviousButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    close() {
        this.dialogRef.close();
    }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirmation-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationDialogComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconify {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9pY29ucy9kcm9wZG93bi1pY29uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxpY29uc1xcZHJvcGRvd24taWNvblxcZHJvcGRvd24taWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9pY29ucy9kcm9wZG93bi1pY29uL2Ryb3Bkb3duLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9pY29ucy9kcm9wZG93bi1pY29uL2Ryb3Bkb3duLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmlmeSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuIiwiLmljb25pZnkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DropdownIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownIconComponent", function() { return DropdownIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownIconComponent = class DropdownIconComponent {
};
DropdownIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dropdown-icon",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown-icon.component.scss */ "./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.scss")).default]
    })
], DropdownIconComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/login-with-github/login-with-github.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/login-with-github/login-with-github.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  padding: 1rem 2rem;\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  transition: var(--transition);\n  transition-property: color, border-color background-color;\n}\na:hover {\n  background-color: var(--primary-color);\n  color: #eee;\n}\n.iconify {\n  margin: 0 0.8rem;\n  font-size: 2.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi13aXRoLWdpdGh1Yi9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9naW4td2l0aC1naXRodWJcXGxvZ2luLXdpdGgtZ2l0aHViLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luLXdpdGgtZ2l0aHViL2xvZ2luLXdpdGgtZ2l0aHViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseURBQUE7QUNDRjtBRENFO0VBQ0Usc0NBQUE7RUFDQSxXQUFBO0FDQ0o7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4td2l0aC1naXRodWIvbG9naW4td2l0aC1naXRodWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBib3JkZXItY29sb3IgYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gIH1cclxufVxyXG5cclxuLmljb25pZnkge1xyXG4gIG1hcmdpbjogMCAwLjhyZW07XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYm9yZGVyLWNvbG9yIGJhY2tncm91bmQtY29sb3I7XG59XG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4uaWNvbmlmeSB7XG4gIG1hcmdpbjogMCAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/login-with-github/login-with-github.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/login-with-github/login-with-github.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoginWithGithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWithGithubComponent", function() { return LoginWithGithubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_user_login_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/services/user.login.services */ "./src/app/modules/user/services/user.login.services.ts");



let LoginWithGithubComponent = class LoginWithGithubComponent {
    constructor(userLoginServices) {
        this.userLoginServices = userLoginServices;
    }
    preLogin() {
        this.userLoginServices.preLogin();
    }
};
LoginWithGithubComponent.ctorParameters = () => [
    { type: _user_services_user_login_services__WEBPACK_IMPORTED_MODULE_2__["UserLoginServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginWithGithubComponent.prototype, "suffix", void 0);
LoginWithGithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login-with-github",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-with-github.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/login-with-github/login-with-github.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-with-github.component.scss */ "./src/app/modules/shared/components/login-with-github/login-with-github.component.scss")).default]
    })
], LoginWithGithubComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/logo/logo-link.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/components/logo/logo-link.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  --logo-size: 2.5rem;\n  display: flex;\n  align-items: center;\n}\n.container:hover .logo-text {\n  color: var(--primary-color);\n}\na {\n  text-decoration: none;\n}\n.logo-text {\n  font-weight: bold;\n  margin-left: 1.3rem;\n  font-size: 1.8rem;\n  color: var(--logo-text-color);\n  transition: var(--transition);\n  transition-property: color;\n}\n.logo {\n  position: relative;\n  width: var(--logo-size);\n  height: var(--logo-size);\n  border-radius: calc(var(--logo-size) / 10);\n  background: var(--primary-color);\n}\n.backslash,\n.slash,\n.underscore {\n  position: absolute;\n  background: white;\n  height: calc(var(--logo-size) / 7);\n}\n.backslash,\n.slash {\n  left: calc(var(--logo-size) / 8);\n  width: 55.3%;\n}\n.backslash {\n  top: calc(var(--logo-size) / 15);\n  transform-origin: bottom left;\n  transform: rotate(45deg);\n  border-bottom-left-radius: calc(var(--logo-size) / 20);\n  border-top-left-radius: calc(var(--logo-size) / 20);\n}\n.slash {\n  bottom: calc(var(--logo-size) / 15);\n  transform-origin: top left;\n  transform: rotate(-45deg);\n  border-bottom-left-radius: calc(var(--logo-size) / 20);\n  border-top-left-radius: calc(var(--logo-size) / 20);\n}\n.underscore {\n  bottom: calc(var(--logo-size) / 8);\n  right: calc(var(--logo-size) / 8);\n  height: calc(var(--logo-size) / 10);\n  width: 40%;\n  border-radius: calc(var(--logo-size) / 20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sb2dvL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxsb2dvXFxsb2dvLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbG9nby9sb2dvLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSwyQkFBQTtBQ0NKO0FER0E7RUFDRSxxQkFBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FER0E7OztFQUdFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0FGO0FER0E7O0VBRUUsZ0NBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNEQUFBO0VBQ0EsbURBQUE7QUNBRjtBREdBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxtREFBQTtBQ0FGO0FER0E7RUFDRSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbG9nby9sb2dvLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAtLWxvZ28tc2l6ZTogMi41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjpob3ZlciAubG9nby10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuM3JlbTtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjb2xvcjogdmFyKC0tbG9nby10ZXh0LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogdmFyKC0tbG9nby1zaXplKTtcclxuICBoZWlnaHQ6IHZhcigtLWxvZ28tc2l6ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uYmFja3NsYXNoLFxyXG4uc2xhc2gsXHJcbi51bmRlcnNjb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyA3KTtcclxufVxyXG5cclxuLmJhY2tzbGFzaCxcclxuLnNsYXNoIHtcclxuICBsZWZ0OiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyA4KTtcclxuICB3aWR0aDogNTUuMyU7XHJcbn1cclxuXHJcbi5iYWNrc2xhc2gge1xyXG4gIHRvcDogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTUpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyAyMCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xyXG59XHJcblxyXG4uc2xhc2gge1xyXG4gIGJvdHRvbTogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTUpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDIwKTtcclxufVxyXG5cclxuLnVuZGVyc2NvcmUge1xyXG4gIGJvdHRvbTogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gOCk7XHJcbiAgcmlnaHQ6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDgpO1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTApO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICAtLWxvZ28tc2l6ZTogMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lcjpob3ZlciAubG9nby10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogdmFyKC0tbG9nby10ZXh0LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWxvZ28tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tbG9nby1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTApO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmJhY2tzbGFzaCxcbi5zbGFzaCxcbi51bmRlcnNjb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyA3KTtcbn1cblxuLmJhY2tzbGFzaCxcbi5zbGFzaCB7XG4gIGxlZnQ6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDgpO1xuICB3aWR0aDogNTUuMyU7XG59XG5cbi5iYWNrc2xhc2gge1xuICB0b3A6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDE1KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyAyMCk7XG59XG5cbi5zbGFzaCB7XG4gIGJvdHRvbTogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMTUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyAyMCk7XG59XG5cbi51bmRlcnNjb3JlIHtcbiAgYm90dG9tOiBjYWxjKHZhcigtLWxvZ28tc2l6ZSkgLyA4KTtcbiAgcmlnaHQ6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tbG9nby1zaXplKSAvIDEwKTtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1sb2dvLXNpemUpIC8gMjApO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/logo/logo-link.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/components/logo/logo-link.component.ts ***!
  \***********************************************************************/
/*! exports provided: LogoLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoLinkComponent", function() { return LogoLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoLinkComponent = class LogoLinkComponent {
};
LogoLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-logo-link",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/logo/logo-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo-link.component.scss */ "./src/app/modules/shared/components/logo/logo-link.component.scss")).default]
    })
], LogoLinkComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\n  border-radius: 100rem;\n  padding: 0.5rem;\n  height: var(--page-title-button-size);\n  width: var(--page-title-button-size);\n  background-color: var(--page-title-button-background-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.iconify {\n  font-size: var(--page-title-button-icon-font-size);\n  border-radius: 100rem;\n  color: var(--page-title-button-color);\n  background-color: var(--page-title-button-background-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n\n.iconify:hover {\n  color: var(--page-title-button-color-on-hover, var(--primary-color));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wYWdlLXRpdGxlLWJ1dHRvbnMvcGFnZS10aXRsZS1idXR0b24vQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhZ2UtdGl0bGUtYnV0dG9uc1xccGFnZS10aXRsZS1idXR0b25cXHBhZ2UtdGl0bGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtdGl0bGUtYnV0dG9ucy9wYWdlLXRpdGxlLWJ1dHRvbi9wYWdlLXRpdGxlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkRBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvRUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wYWdlLXRpdGxlLWJ1dHRvbnMvcGFnZS10aXRsZS1idXR0b24vcGFnZS10aXRsZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGhlaWdodDogdmFyKC0tcGFnZS10aXRsZS1idXR0b24tc2l6ZSk7XHJcbiAgd2lkdGg6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLXNpemUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uaWZ5IHtcclxuICBmb250LXNpemU6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWljb24tZm9udC1zaXplKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1idXR0b24tY29sb3Itb24taG92ZXIsIHZhcigtLXByaW1hcnktY29sb3IpKTtcclxuICB9XHJcbn1cclxuIiwiLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLXNpemUpO1xuICB3aWR0aDogdmFyKC0tcGFnZS10aXRsZS1idXR0b24tc2l6ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbmlmeSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcGFnZS10aXRsZS1idXR0b24taWNvbi1mb250LXNpemUpO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG59XG4uaWNvbmlmeTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1jb2xvci1vbi1ob3ZlciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PageTitleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleButtonComponent", function() { return PageTitleButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleButtonComponent = class PageTitleButtonComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageTitleButtonComponent.prototype, "icon", void 0);
PageTitleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-title-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-title-button.component.scss */ "./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.scss")).default]
    })
], PageTitleButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-consult-button/page-title-consult-button.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-consult-button/page-title-consult-button.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PageTitleConsultButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleConsultButtonComponent", function() { return PageTitleConsultButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleConsultButtonComponent = class PageTitleConsultButtonComponent {
};
PageTitleConsultButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-consult-button",
        template: '<app-page-title-button icon="ls:view"></app-page-title-button>',
    })
], PageTitleConsultButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-delete-button/page-title-delete-button.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-delete-button/page-title-delete-button.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PageTitleDeleteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleDeleteButtonComponent", function() { return PageTitleDeleteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleDeleteButtonComponent = class PageTitleDeleteButtonComponent {
};
PageTitleDeleteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-delete-button",
        template: '<app-page-title-button icon="iwwa:delete"></app-page-title-button>',
    })
], PageTitleDeleteButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-download-button/page-title-download-button.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-download-button/page-title-download-button.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PageTitleDownloadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleDownloadButtonComponent", function() { return PageTitleDownloadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleDownloadButtonComponent = class PageTitleDownloadButtonComponent {
};
PageTitleDownloadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-download-button",
        template: '<app-page-title-button icon="heroicons-solid:download"></app-page-title-button>',
    })
], PageTitleDownloadButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-edit-button/page-title-edit-button.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-edit-button/page-title-edit-button.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PageTitleEditButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleEditButtonComponent", function() { return PageTitleEditButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleEditButtonComponent = class PageTitleEditButtonComponent {
};
PageTitleEditButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-edit-button",
        template: '<app-page-title-button icon="eva:edit-fill"></app-page-title-button>',
    })
], PageTitleEditButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  border-radius: 100rem;\n  padding: 0.5rem;\n  background-color: var(--page-title-button-background-color);\n}\n\n.search-button {\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: calc(var(--button-size) - 1rem);\n  width: calc(var(--button-size) - 1rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.search-button .iconify {\n  font-size: var(--page-title-button-icon-font-size);\n  padding: 0.5rem;\n  border-radius: 100rem;\n  color: var(--page-title-button-color);\n  background-color: var(--page-title-button-background-color);\n  transition: var(--transition);\n  transition-property: color, background-color;\n}\n\n.search-button .iconify:hover {\n  color: var(--primary-color);\n}\n\n.search-input {\n  border: none;\n  outline: none;\n  width: 0;\n  padding: 0;\n  transition: var(--transition);\n  transition-property: color, background-color, width;\n}\n\n:host.active .search-button .iconify {\n  background-color: var(--filter-icon-background-color-on-active-state);\n  color: var(--primary-color);\n}\n\n:host.active .search-input {\n  width: 20rem;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wYWdlLXRpdGxlLWJ1dHRvbnMvcGFnZS10aXRsZS1maWx0ZXItYnV0dG9uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxwYWdlLXRpdGxlLWJ1dHRvbnNcXHBhZ2UtdGl0bGUtZmlsdGVyLWJ1dHRvblxccGFnZS10aXRsZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtdGl0bGUtYnV0dG9ucy9wYWdlLXRpdGxlLWZpbHRlci1idXR0b24vcGFnZS10aXRsZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrREFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkRBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSwyQkFBQTtBQ0NKOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbURBQUE7QUNBRjs7QURJRTtFQUNFLHFFQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wYWdlLXRpdGxlLWJ1dHRvbnMvcGFnZS10aXRsZS1maWx0ZXItYnV0dG9uL3BhZ2UtdGl0bGUtZmlsdGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tYnV0dG9uLXNpemUpIC0gMXJlbSk7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tYnV0dG9uLXNpemUpIC0gMXJlbSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiAuaWNvbmlmeSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1pY29uLWZvbnQtc2l6ZSk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1idXR0b24tY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHdpZHRoO1xyXG59XHJcblxyXG46aG9zdC5hY3RpdmUge1xyXG4gICYgLnNlYXJjaC1idXR0b24gLmljb25pZnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsdGVyLWljb24tYmFja2dyb3VuZC1jb2xvci1vbi1hY3RpdmUtc3RhdGUpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgJiAuc2VhcmNoLWlucHV0IHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tYnV0dG9uLXNpemUpIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWJ1dHRvbi1zaXplKSAtIDFyZW0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1idXR0b24gLmljb25pZnkge1xuICBmb250LXNpemU6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWljb24tZm9udC1zaXplKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWJ1dHRvbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XG59XG4uc2VhcmNoLWJ1dHRvbiAuaWNvbmlmeTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgd2lkdGg7XG59XG5cbjpob3N0LmFjdGl2ZSAuc2VhcmNoLWJ1dHRvbiAuaWNvbmlmeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbHRlci1pY29uLWJhY2tncm91bmQtY29sb3Itb24tYWN0aXZlLXN0YXRlKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuOmhvc3QuYWN0aXZlIC5zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMjByZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PageTitleFilterButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleFilterButtonComponent", function() { return PageTitleFilterButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleFilterButtonComponent = class PageTitleFilterButtonComponent {
    constructor() {
        this.hover = false;
        this.focus = false;
        this.filter = "";
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.active = false;
    }
    onSubmit() {
        this.onFilter.emit(this.filter);
        this.input.nativeElement.focus();
    }
    onMouseHover() {
        this.hover = true;
        this.updateActiveStatus();
    }
    onMouseOut() {
        this.hover = false;
        this.updateActiveStatus();
    }
    onBlur() {
        this.focus = false;
        this.updateActiveStatus();
    }
    onFocus() {
        this.focus = true;
        this.updateActiveStatus();
    }
    updateActiveStatus() {
        this.active = this.hover || this.focus;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageTitleFilterButtonComponent.prototype, "onFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input", { static: true })
], PageTitleFilterButtonComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active")
], PageTitleFilterButtonComponent.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseover")
], PageTitleFilterButtonComponent.prototype, "onMouseHover", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseout")
], PageTitleFilterButtonComponent.prototype, "onMouseOut", null);
PageTitleFilterButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-filter-button",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-title-filter-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-title-filter-button.component.scss */ "./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.scss")).default]
    })
], PageTitleFilterButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-new-button/page-title-new-button.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-new-button/page-title-new-button.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PageTitleNewButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleNewButtonComponent", function() { return PageTitleNewButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleNewButtonComponent = class PageTitleNewButtonComponent {
};
PageTitleNewButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-new-button",
        template: '<app-page-title-button icon="ic:round-add"></app-page-title-button>',
    })
], PageTitleNewButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/page-title-buttons/page-title-upload-button/page-title-upload-button.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-title-buttons/page-title-upload-button/page-title-upload-button.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PageTitleUploadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleUploadButtonComponent", function() { return PageTitleUploadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleUploadButtonComponent = class PageTitleUploadButtonComponent {
    constructor() {
        this.fileUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onChange(event) {
        this.fileUpload.emit(event.target.files[0]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageTitleUploadButtonComponent.prototype, "fileUpload", void 0);
PageTitleUploadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title-upload-button",
        template: `
    <label for="file-upload">
      <app-page-title-button
        icon="heroicons-solid:upload"
      ></app-page-title-button>
    </label>
    <input id="file-upload" (change)="onChange($event)" type="file" />
  `,
        styles: ["\n      input[type=\"file\"] {\n        display: none;\n      }\n    "]
    })
], PageTitleUploadButtonComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/router-link/router-link.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/router-link/router-link.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  padding: 0.8rem 1.6rem;\n  border-radius: 0.3rem;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  background-color: inherit;\n  transition: var(--transition);\n  transition-property: color, background-color, border-color;\n}\n\na:hover {\n  color: #fff;\n  border: 1px solid var(--primary-color);\n  background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9yb3V0ZXItbGluay9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xccm91dGVyLWxpbmtcXHJvdXRlci1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3JvdXRlci1saW5rL3JvdXRlci1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwREFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvcm91dGVyLWxpbmsvcm91dGVyLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMC44cmVtIDEuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC44cmVtIDEuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/components/router-link/router-link.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/router-link/router-link.component.ts ***!
  \********************************************************************************/
/*! exports provided: RouterLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkComponent", function() { return RouterLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RouterLinkComponent = class RouterLinkComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RouterLinkComponent.prototype, "routerLink", void 0);
RouterLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-router-link",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./router-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/router-link/router-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./router-link.component.scss */ "./src/app/modules/shared/components/router-link/router-link.component.scss")).default]
    })
], RouterLinkComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC1kcm9wZG93bi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SelectDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropdownComponent", function() { return SelectDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var src_app_modules_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/constants.utils */ "./src/app/modules/shared/services/constants.utils.ts");





let SelectDropdownComponent = class SelectDropdownComponent {
    constructor(overlayPositionBuilder, overlay) {
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.overlay = overlay;
        this.showing = false;
    }
    show() {
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.syncWidth();
        this.overlayRef.backdropClick().subscribe(() => this.hide());
        this.showing = true;
    }
    hide() {
        this.overlayRef.detach();
        this.showing = false;
    }
    onWinResize() {
        this.syncWidth();
    }
    syncWidth() {
        if (!this.overlayRef) {
            return;
        }
        const referenceRect = this.reference.getBoundingClientRect();
        this.overlayRef.updateSize({ width: referenceRect.width });
    }
    getOverlayConfig() {
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.reference)
            .withPositions([src_app_modules_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_POSITION_BOTTOM"], src_app_modules_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_POSITION_TOP"]]);
        return {
            positionStrategy,
            hasBackdrop: true,
            backdropClass: "cdk-overlay-transparent-backdrop",
        };
    }
};
SelectDropdownComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectDropdownComponent.prototype, "reference", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"], { static: true })
], SelectDropdownComponent.prototype, "portal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize")
], SelectDropdownComponent.prototype, "onWinResize", null);
SelectDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select-dropdown",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-dropdown.component.scss */ "./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.scss")).default]
    })
], SelectDropdownComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/select/select-option/select-option.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select-option/select-option.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 0.8rem 1.4rem;\n  font-size: 1.4rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n:host:hover {\n  color: var(--select-on-hover-option-color);\n  background-color: var(--select-on-hover-option-background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LW9wdGlvbi9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcc2VsZWN0XFxzZWxlY3Qtb3B0aW9uXFxzZWxlY3Qtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3Qtb3B0aW9uL3NlbGVjdC1vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSwwQ0FBQTtFQUNBLGdFQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3Qtb3B0aW9uL3NlbGVjdC1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMC44cmVtIDEuNHJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3Qtb24taG92ZXItb3B0aW9uLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1vbi1ob3Zlci1vcHRpb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjRyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1vbi1ob3Zlci1vcHRpb24tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Qtb24taG92ZXItb3B0aW9uLWJhY2tncm91bmQtY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/select/select-option/select-option.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select-option/select-option.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SelectOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionComponent", function() { return SelectOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select.service */ "./src/app/modules/shared/components/select/select.service.ts");



let SelectOptionComponent = class SelectOptionComponent {
    constructor(selectService) {
        this.selectService = selectService;
        this.select = this.selectService.getSelect();
    }
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.select.selectOption(this);
    }
};
SelectOptionComponent.ctorParameters = () => [
    { type: _select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectOptionComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectOptionComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"])
], SelectOptionComponent.prototype, "onClick", null);
SelectOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select-option",
        template: "{{ label }}",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-option.component.scss */ "./src/app/modules/shared/components/select/select-option/select-option.component.scss")).default]
    })
], SelectOptionComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/select/select.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  transition: var(--transition);\n  transition-property: color, background-color, border-color;\n}\n\n.selected-option {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--select-selected-option-font-size, 1.4rem);\n  padding: var(--select-selected-option-padding, 0.8rem 1.4rem);\n  border-radius: var(--select-selected-option-border-radius, 2px);\n  border: var(--select-selected-option-border-width, 1px) solid;\n  color: var(--select-selected-option-color);\n  background-color: var(--select-selected-option-background-color);\n  border-color: var(--select-selected-option-border-color);\n}\n\n.selected-option:hover {\n  color: var(--select-on-hover-selected-option-color);\n  background-color: var(--select-on-hover-selected-option-background-color);\n  border-color: var(--select-on-hover-selected-option-border-color);\n}\n\n.options {\n  width: 100%;\n  border-radius: var(--select-options-border-radius, 0.3rem);\n  border: var(--select-options-border-width, 1px) solid;\n  color: var(--select-options-color);\n  background-color: var(--select-options-background-color);\n  border-color: var(--select-options-border-color);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n}\n\n.ion {\n  padding-left: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNlbGVjdFxcc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLDBEQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0RBQUE7RUFDQSw2REFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3REFBQTtBQ0NGOztBRENFO0VBQ0UsbURBQUE7RUFDQSx5RUFBQTtFQUNBLGlFQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMERBQUE7RUFDQSxxREFBQTtFQUNBLGtDQUFBO0VBQ0Esd0RBQUE7RUFDQSxnREFBQTtFQUNBLDJDQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1vcHRpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VsZWN0LXNlbGVjdGVkLW9wdGlvbi1mb250LXNpemUsIDEuNHJlbSk7XHJcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LXNlbGVjdGVkLW9wdGlvbi1wYWRkaW5nLCAwLjhyZW0gMS40cmVtKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3Qtc2VsZWN0ZWQtb3B0aW9uLWJvcmRlci1yYWRpdXMsIDJweCk7XHJcbiAgYm9yZGVyOiB2YXIoLS1zZWxlY3Qtc2VsZWN0ZWQtb3B0aW9uLWJvcmRlci13aWR0aCwgMXB4KSBzb2xpZDtcclxuICBjb2xvcjogdmFyKC0tc2VsZWN0LXNlbGVjdGVkLW9wdGlvbi1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LXNlbGVjdGVkLW9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXNlbGVjdC1zZWxlY3RlZC1vcHRpb24tYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LW9uLWhvdmVyLXNlbGVjdGVkLW9wdGlvbi1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Qtb24taG92ZXItc2VsZWN0ZWQtb3B0aW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWxlY3Qtb24taG92ZXItc2VsZWN0ZWQtb3B0aW9uLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0LW9wdGlvbnMtYm9yZGVyLXJhZGl1cywgMC4zcmVtKTtcclxuICBib3JkZXI6IHZhcigtLXNlbGVjdC1vcHRpb25zLWJvcmRlci13aWR0aCwgMXB4KSBzb2xpZDtcclxuICBjb2xvcjogdmFyKC0tc2VsZWN0LW9wdGlvbnMtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1vcHRpb25zLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2VsZWN0LW9wdGlvbnMtYm9yZGVyLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG4uaW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yO1xufVxuXG4uc2VsZWN0ZWQtb3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VsZWN0LXNlbGVjdGVkLW9wdGlvbi1mb250LXNpemUsIDEuNHJlbSk7XG4gIHBhZGRpbmc6IHZhcigtLXNlbGVjdC1zZWxlY3RlZC1vcHRpb24tcGFkZGluZywgMC44cmVtIDEuNHJlbSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlbGVjdC1zZWxlY3RlZC1vcHRpb24tYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgYm9yZGVyOiB2YXIoLS1zZWxlY3Qtc2VsZWN0ZWQtb3B0aW9uLWJvcmRlci13aWR0aCwgMXB4KSBzb2xpZDtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1zZWxlY3RlZC1vcHRpb24tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Qtc2VsZWN0ZWQtb3B0aW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlbGVjdC1zZWxlY3RlZC1vcHRpb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5zZWxlY3RlZC1vcHRpb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2VsZWN0LW9uLWhvdmVyLXNlbGVjdGVkLW9wdGlvbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1vbi1ob3Zlci1zZWxlY3RlZC1vcHRpb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2VsZWN0LW9uLWhvdmVyLXNlbGVjdGVkLW9wdGlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4ub3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3Qtb3B0aW9ucy1ib3JkZXItcmFkaXVzLCAwLjNyZW0pO1xuICBib3JkZXI6IHZhcigtLXNlbGVjdC1vcHRpb25zLWJvcmRlci13aWR0aCwgMXB4KSBzb2xpZDtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1vcHRpb25zLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LW9wdGlvbnMtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2VsZWN0LW9wdGlvbnMtYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmlvbiB7XG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/select/select.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _select_dropdown_select_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-dropdown/select-dropdown.component */ "./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.ts");
/* harmony import */ var _select_option_select_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-option/select-option.component */ "./src/app/modules/shared/components/select/select-option/select-option.component.ts");
/* harmony import */ var _select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.service */ "./src/app/modules/shared/components/select/select.service.ts");





let SelectComponent = class SelectComponent {
    constructor(selectService) {
        this.selectService = selectService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectService.register(this);
    }
    onSelectedOptionClick() {
        this.showDropdown();
    }
    selectOption(option) {
        this.selected = option.value;
        this.selectedOption = option;
        this.selectedLabel = this.selectedOption ? this.selectedOption.label : "";
        this.hideDropdown();
        this.change.emit(this.createChangeEventValue(option));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.selectedOption = this.options
                .toArray()
                .find((option) => option.value === this.selected);
            this.selectedLabel = this.selectedOption ? this.selectedOption.label : "";
        });
    }
    createChangeEventValue(option) {
        return {
            value: option.value,
            label: option.label ? option.label : option.value,
        };
    }
    showDropdown() {
        this.dropdown.show();
    }
    hideDropdown() {
        this.dropdown.hide();
    }
};
SelectComponent.ctorParameters = () => [
    { type: _select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_select_dropdown_select_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["SelectDropdownComponent"], { static: true })
], SelectComponent.prototype, "dropdown", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_3__["SelectOptionComponent"])
], SelectComponent.prototype, "options", void 0);
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/select/select.component.html")).default,
        providers: [_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.scss */ "./src/app/modules/shared/components/select/select.component.scss")).default]
    })
], SelectComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/select/select.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/components/select/select.service.ts ***!
  \********************************************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectService = class SelectService {
    register(select) {
        this.select = select;
    }
    getSelect() {
        return this.select;
    }
};
SelectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SelectService);



/***/ }),

/***/ "./src/app/modules/shared/components/text/page-title/page-title.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/page-title/page-title.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host h1 {\n  color: var(--title-color);\n  position: relative;\n  font-size: 5rem;\n  font-weight: 100;\n  color: var(--primary-color);\n  transition: vat(--transition);\n  transition-property: color;\n  margin-top: var(--post-title-margin-top, 2rem);\n  margin-bottom: var(--post-title-margin-bottom, 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3BhZ2UtdGl0bGUvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRleHRcXHBhZ2UtdGl0bGVcXHBhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOENBQUE7RUFDQSxvREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGgxIHtcclxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tcG9zdC10aXRsZS1tYXJnaW4tdG9wLCAycmVtKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wb3N0LXRpdGxlLW1hcmdpbi1ib3R0b20sIDRyZW0pO1xyXG59XHJcbiIsIjpob3N0IGgxIHtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wb3N0LXRpdGxlLW1hcmdpbi10b3AsIDJyZW0pO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wb3N0LXRpdGxlLW1hcmdpbi1ib3R0b20sIDRyZW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/text/page-title/page-title.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/page-title/page-title.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleComponent = class PageTitleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageTitleComponent.prototype, "value", void 0);
PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page-title",
        template: "<div><h1>{{ value }}</h1></div>",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-title.component.scss */ "./src/app/modules/shared/components/text/page-title/page-title.component.scss")).default]
    })
], PageTitleComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/section-title/section-title.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/section-title/section-title.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host h2 {\n  color: var(--title-color);\n  text-transform: uppercase;\n  position: relative;\n  line-height: 2rem;\n  font-size: 2rem;\n  font-weight: bold;\n  background: linear-gradient(to right, var(--primary-color), var(--fancy-title-background-color));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  transition: vat(--transition);\n  transition-property: color, background-color;\n}\n\nh2::before {\n  content: \"\";\n  display: inline-block;\n  height: 1.6rem;\n  width: 1.6rem;\n  margin-right: 1rem;\n  background: var(--primary-color);\n  transition: vat(--transition);\n  transition-property: color, background-color, opacity;\n}\n\nh2::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 0.3rem;\n  width: var(--fancy-title-underline-width, 75%);\n  bottom: -1rem;\n  background: linear-gradient(to right, var(--primary-color), var(--fancy-title-border-background-color));\n  transition: vat(--transition);\n  transition-property: color, background-color, opacity;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3NlY3Rpb24tdGl0bGUvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRleHRcXHNlY3Rpb24tdGl0bGVcXHNlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdHQUFBO0VBS0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxREFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSx1R0FBQTtFQUtBLDZCQUFBO0VBQ0EscURBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCBoMiB7XHJcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcclxuICAgIHZhcigtLWZhbmN5LXRpdGxlLWJhY2tncm91bmQtY29sb3IpXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IHZhdCgtLXRyYW5zaXRpb24pO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG5oMjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDEuNnJlbTtcclxuICB3aWR0aDogMS42cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB2YXQoLS10cmFuc2l0aW9uKTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgb3BhY2l0eTtcclxufVxyXG5cclxuaDI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICB3aWR0aDogdmFyKC0tZmFuY3ktdGl0bGUtdW5kZXJsaW5lLXdpZHRoLCA3NSUpO1xyXG4gIGJvdHRvbTogLTFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcclxuICAgIHZhcigtLWZhbmN5LXRpdGxlLWJvcmRlci1iYWNrZ3JvdW5kLWNvbG9yKVxyXG4gICk7XHJcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHk7XHJcbn1cclxuIiwiOmhvc3QgaDIge1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1mYW5jeS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG5oMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEuNnJlbTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5O1xufVxuXG5oMjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDAuM3JlbTtcbiAgd2lkdGg6IHZhcigtLWZhbmN5LXRpdGxlLXVuZGVybGluZS13aWR0aCwgNzUlKTtcbiAgYm90dG9tOiAtMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tZmFuY3ktdGl0bGUtYm9yZGVyLWJhY2tncm91bmQtY29sb3IpKTtcbiAgdHJhbnNpdGlvbjogdmF0KC0tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/text/section-title/section-title.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/section-title/section-title.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SectionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function() { return SectionTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionTitleComponent = class SectionTitleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionTitleComponent.prototype, "value", void 0);
SectionTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-section-title",
        template: "<div><h2>{{ value | uppercase }}</h2></div>",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-title.component.scss */ "./src/app/modules/shared/components/text/section-title/section-title.component.scss")).default]
    })
], SectionTitleComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/error.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/error.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-error",
        template: /* html */ `
    <app-text-with-icon icon="error">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
        styles: ["\n      :host {\n        --text-with-icon-text-color: var(--error-text-color);\n        --text-with-icon-background-color: var(--error-background-color);\n      }\n    "]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/info.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-info",
        template: /* html */ `
    <app-text-with-icon icon="info">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
        styles: ["\n      :host {\n        --text-with-icon-text-color: var(--info-text-color);\n        --text-with-icon-background-color: var(--info-background-color);\n      }\n    "]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/quote.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/quote.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --text-with-icon-text-font-style: italic;\n  --text-with-icon-text-color: var(--quote-text-color);\n  --text-with-icon-background-color: var(--quote-background-color);\n}\n\n.author {\n  font-style: italic;\n  color: var(--primary-color);\n  padding-top: 1rem;\n  font-size: 1.3rem;\n  font-weight: bold;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3RleHQtd2l0aC1pY29uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFx0ZXh0XFx0ZXh0LXdpdGgtaWNvblxccXVvdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC90ZXh0LXdpdGgtaWNvbi9xdW90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0Esb0RBQUE7RUFDQSxnRUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC90ZXh0LXdpdGgtaWNvbi9xdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXRleHQtd2l0aC1pY29uLXRleHQtZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIC0tdGV4dC13aXRoLWljb24tdGV4dC1jb2xvcjogdmFyKC0tcXVvdGUtdGV4dC1jb2xvcik7XHJcbiAgLS10ZXh0LXdpdGgtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXRleHQtd2l0aC1pY29uLXRleHQtZm9udC1zdHlsZTogaXRhbGljO1xuICAtLXRleHQtd2l0aC1pY29uLXRleHQtY29sb3I6IHZhcigtLXF1b3RlLXRleHQtY29sb3IpO1xuICAtLXRleHQtd2l0aC1pY29uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1b3RlLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uYXV0aG9yIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/quote.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/quote.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuoteComponent = class QuoteComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteComponent.prototype, "author", void 0);
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-quote",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/quote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote.component.scss */ "./src/app/modules/shared/components/text/text-with-icon/quote.component.scss")).default]
    })
], QuoteComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: flex-start;\n  padding: 2rem;\n  border-radius: 0.3rem;\n  background-color: var(--text-with-icon-background-color);\n}\n\n.icon {\n  flex: 0 0 5rem;\n  padding-right: 2rem;\n  width: 2rem;\n}\n\n:host ::ng-deep {\n  color: var(--text-with-icon-text-color);\n  font-style: var(--text-with-icon-text-font-style, normal);\n  font-size: var(--text-with-icon-text-font-size, 1.6rem);\n  line-height: var(--text-with-icon-text-line-height, 2.5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0L3RleHQtd2l0aC1pY29uL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFx0ZXh0XFx0ZXh0LXdpdGgtaWNvblxcdGV4dC13aXRoLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC90ZXh0LXdpdGgtaWNvbi90ZXh0LXdpdGgtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0RBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0VBQ0EseURBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3RleHQvdGV4dC13aXRoLWljb24vdGV4dC13aXRoLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXdpdGgtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZsZXg6IDAgMCA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtd2l0aC1pY29uLXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc3R5bGU6IHZhcigtLXRleHQtd2l0aC1pY29uLXRleHQtZm9udC1zdHlsZSwgbm9ybWFsKTtcclxuICBmb250LXNpemU6IHZhcigtLXRleHQtd2l0aC1pY29uLXRleHQtZm9udC1zaXplLCAxLjZyZW0pO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXdpdGgtaWNvbi10ZXh0LWxpbmUtaGVpZ2h0LCAyLjVyZW0pO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtd2l0aC1pY29uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uaWNvbiB7XG4gIGZsZXg6IDAgMCA1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2l0aC1pY29uLXRleHQtY29sb3IpO1xuICBmb250LXN0eWxlOiB2YXIoLS10ZXh0LXdpdGgtaWNvbi10ZXh0LWZvbnQtc3R5bGUsIG5vcm1hbCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC13aXRoLWljb24tdGV4dC1mb250LXNpemUsIDEuNnJlbSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXdpdGgtaWNvbi10ZXh0LWxpbmUtaGVpZ2h0LCAyLjVyZW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TextWithIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWithIconComponent", function() { return TextWithIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextWithIconComponent = class TextWithIconComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextWithIconComponent.prototype, "icon", void 0);
TextWithIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-text-with-icon",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-with-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-with-icon.component.scss */ "./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.scss")).default]
    })
], TextWithIconComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/text/text-with-icon/warn.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/components/text/text-with-icon/warn.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WarnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarnComponent", function() { return WarnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarnComponent = class WarnComponent {
};
WarnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-warn",
        template: /* html */ `
    <app-text-with-icon icon="warn">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
        styles: ["\n      :host {\n        --text-with-icon-text-color: var(--warn-text-color);\n        --text-with-icon-background-color: var(--warn-background-color);\n      }\n    "]
    })
], WarnComponent);



/***/ }),

/***/ "./src/app/modules/shared/directives/input-disable-autocomplete.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/directives/input-disable-autocomplete.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: InputDisableAutoCompleteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDisableAutoCompleteDirective", function() { return InputDisableAutoCompleteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputDisableAutoCompleteDirective = class InputDisableAutoCompleteDirective {
    constructor(el) {
        el.nativeElement.setAttribute("autocomplete", "off");
    }
};
InputDisableAutoCompleteDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
InputDisableAutoCompleteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "input",
    })
], InputDisableAutoCompleteDirective);



/***/ }),

/***/ "./src/app/modules/shared/directives/slidein/slidein.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/directives/slidein/slidein.directive.ts ***!
  \************************************************************************/
/*! exports provided: SlideInDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInDirective", function() { return SlideInDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideInDirective = class SlideInDirective {
    constructor(el) {
        el.nativeElement.setAttribute("data-aos", "zoom-in-up");
        el.nativeElement.setAttribute("data-aos-anchor-placement", "bottom-bottom");
        el.nativeElement.setAttribute("data-aos-duration", "1200");
        el.nativeElement.setAttribute("data-aos-offset", "-300");
    }
};
SlideInDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
SlideInDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appSlideIn]",
    })
], SlideInDirective);



/***/ }),

/***/ "./src/app/modules/shared/directives/textarea-auto-grow.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/directives/textarea-auto-grow.directive.ts ***!
  \***************************************************************************/
/*! exports provided: TextareaAutoGrowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaAutoGrowDirective", function() { return TextareaAutoGrowDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextareaAutoGrowDirective = class TextareaAutoGrowDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const element = this.elementRef.nativeElement;
        element.addEventListener("input", () => {
            const currentHeight = element.clientHeight;
            const scrollHeight = element.scrollHeight;
            if (currentHeight < scrollHeight) {
                element.style.height = scrollHeight + 10 + "px";
            }
        });
    }
};
TextareaAutoGrowDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
TextareaAutoGrowDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "textarea",
    })
], TextareaAutoGrowDirective);



/***/ }),

/***/ "./src/app/modules/shared/directives/textarea-disable-spellcheck.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/directives/textarea-disable-spellcheck.directive.ts ***!
  \************************************************************************************/
/*! exports provided: TextareaDisableSpellCheckDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaDisableSpellCheckDirective", function() { return TextareaDisableSpellCheckDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextareaDisableSpellCheckDirective = class TextareaDisableSpellCheckDirective {
    constructor(element) {
        element.nativeElement.setAttribute("spellcheck", "false");
    }
};
TextareaDisableSpellCheckDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
TextareaDisableSpellCheckDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "textarea",
    })
], TextareaDisableSpellCheckDirective);



/***/ }),

/***/ "./src/app/modules/shared/directives/tooltip/tooltip.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/directives/tooltip/tooltip.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  color: var(--tooltip-color);\n  background-color: var(--tooltip-background-color);\n  font-size: var(--tooltip-font-size, 1.3rem);\n  padding: 0.8rem 1.2rem;\n  margin-top: 1rem;\n  border-radius: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZGlyZWN0aXZlcy90b29sdGlwL0M6XFxkZXZcXHByb2plY3RzXFxhaGVudGV0aS1ibG9nXFxhaGVudGV0aS1ibG9nLXdlYmFwcFxcc3JjXFxtYWluXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxkaXJlY3RpdmVzXFx0b29sdGlwXFx0b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgY29sb3I6IHZhcigtLXRvb2x0aXAtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiB2YXIoLS10b29sdGlwLWZvbnQtc2l6ZSwgMS4zcmVtKTtcclxuICBwYWRkaW5nOiAwLjhyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgY29sb3I6IHZhcigtLXRvb2x0aXAtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sdGlwLWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLXRvb2x0aXAtZm9udC1zaXplLCAxLjNyZW0pO1xuICBwYWRkaW5nOiAwLjhyZW0gMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/directives/tooltip/tooltip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/directives/tooltip/tooltip.component.ts ***!
  \************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TooltipComponent = class TooltipComponent {
    constructor() {
        this.text = "";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TooltipComponent.prototype, "text", void 0);
TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "tooltip",
        template: "{{ text }}",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/modules/shared/directives/tooltip/tooltip.component.scss")).default]
    })
], TooltipComponent);



/***/ }),

/***/ "./src/app/modules/shared/directives/tooltip/tooltip.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/directives/tooltip/tooltip.directive.ts ***!
  \************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/modules/shared/directives/tooltip/tooltip.component.ts");





let TooltipDirective = class TooltipDirective {
    constructor(elementRef, overlayPositionBuilder, overlay) {
        this.elementRef = elementRef;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.overlay = overlay;
        this.text = "";
    }
    ngOnInit() {
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions([
            {
                originX: "center",
                originY: "bottom",
                overlayX: "center",
                overlayY: "top",
            },
        ]);
        this.overlayRef = this.overlay.create({ positionStrategy });
    }
    ngOnDestroy() {
        this.hide();
    }
    show() {
        // Create tooltip portal
        const tooltipPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["TooltipComponent"]);
        // Attach tooltip portal to overlay
        const tooltipRef = this.overlayRef.attach(tooltipPortal);
        // Pass content to tooltip component instance
        tooltipRef.instance.text = this.text;
    }
    hide() {
        this.overlayRef.detach();
    }
};
TooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("tooltip")
], TooltipDirective.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter")
], TooltipDirective.prototype, "show", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
], TooltipDirective.prototype, "hide", null);
TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[tooltip]",
    })
], TooltipDirective);



/***/ }),

/***/ "./src/app/modules/shared/layouts/manage-resources-page.layout.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/layouts/manage-resources-page.layout.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  --post-title-margin-bottom: 2rem;\n  --button-color: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.top-table-actions-container {\n  display: flex;\n  align-items: center;\n}\n\n:host ::ng-deep .top-table-actions-container > * {\n  margin-left: 1rem;\n}\n\n.bottom-table-actions {\n  --button-size: 3rem;\n  margin-top: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.bottom-table-actions > * {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbGF5b3V0cy9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcbGF5b3V0c1xcbWFuYWdlLXJlc291cmNlcy1wYWdlLmxheW91dC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9sYXlvdXRzL21hbmFnZS1yZXNvdXJjZXMtcGFnZS5sYXlvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbGF5b3V0cy9tYW5hZ2UtcmVzb3VyY2VzLXBhZ2UubGF5b3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAtLXBvc3QtdGl0bGUtbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRvcC10YWJsZS1hY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRvcC10YWJsZS1hY3Rpb25zLWNvbnRhaW5lciA+ICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYm90dG9tLXRhYmxlLWFjdGlvbnMge1xyXG4gIC0tYnV0dG9uLXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIC0tcG9zdC10aXRsZS1tYXJnaW4tYm90dG9tOiAycmVtO1xuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRvcC10YWJsZS1hY3Rpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9wLXRhYmxlLWFjdGlvbnMtY29udGFpbmVyID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uYm90dG9tLXRhYmxlLWFjdGlvbnMge1xuICAtLWJ1dHRvbi1zaXplOiAzcmVtO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYm90dG9tLXRhYmxlLWFjdGlvbnMgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/layouts/manage-resources-page.layout.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/layouts/manage-resources-page.layout.ts ***!
  \************************************************************************/
/*! exports provided: ManageResourcesPageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageResourcesPageLayout", function() { return ManageResourcesPageLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageResourcesPageLayout = class ManageResourcesPageLayout {
    constructor() {
        this.previousButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    handlePreviousButtonClickEvent() {
        this.previousButtonClick.next();
    }
    handleNextButtonClickEvent() {
        this.nextButtonClick.next();
    }
    onFilter(filter) {
        this.filter.emit(filter);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ManageResourcesPageLayout.prototype, "pageTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ManageResourcesPageLayout.prototype, "previousButtonCssClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ManageResourcesPageLayout.prototype, "nextButtonCssClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ManageResourcesPageLayout.prototype, "previousButtonClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ManageResourcesPageLayout.prototype, "nextButtonClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ManageResourcesPageLayout.prototype, "filter", void 0);
ManageResourcesPageLayout = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-manage-resources-page-layout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-resources-page.layout.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/layouts/manage-resources-page.layout.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-resources-page.layout.scss */ "./src/app/modules/shared/layouts/manage-resources-page.layout.scss")).default]
    })
], ManageResourcesPageLayout);



/***/ }),

/***/ "./src/app/modules/shared/models/no-posts-groups-to-load.error.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/models/no-posts-groups-to-load.error.ts ***!
  \************************************************************************/
/*! exports provided: NoPostsGroupsToLoadError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPostsGroupsToLoadError", function() { return NoPostsGroupsToLoadError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NoPostsGroupsToLoadError extends Error {
}


/***/ }),

/***/ "./src/app/modules/shared/models/page.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/models/page.model.ts ***!
  \*****************************************************/
/*! exports provided: Page, PageApiResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageApiResponse", function() { return PageApiResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Page {
    constructor() {
        this.firstPage = true;
        this.lastPage = true;
        this.totalItems = 0;
        this.items = [];
    }
}
class PageApiResponse {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/modules/shared/models/validation.error.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/models/validation.error.ts ***!
  \***********************************************************/
/*! exports provided: ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return ValidationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        // Set the prototype explicitly.
        // reference: https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}


/***/ }),

/***/ "./src/app/modules/shared/pages/manage-resources.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/pages/manage-resources.page.ts ***!
  \***************************************************************/
/*! exports provided: AbstractManageResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractManageResourcesPage", function() { return AbstractManageResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");




class AbstractManageResourcesPage {
    constructor() {
        this.previousButtonCssClasses = "";
        this.nextButtonCssClasses = "";
        this.filter = "";
    }
    ngOnInit() {
        this.fetchPage(this.filter, 0);
    }
    onFilter(filter) {
        this.filter = filter;
        this.fetchPage(this.filter, 0);
    }
    handleNextButtonClickEvent() {
        if (this.currentPage.lastPage)
            return;
        this.fetchPage(this.filter, this.currentPage.page + 1);
    }
    handlePreviousButtonClickEvent() {
        if (this.currentPage.firstPage)
            return;
        this.fetchPage(this.filter, this.currentPage.page - 1);
    }
    recalculatePreviousNextButtonCssClasses() {
        let classes = [];
        if (this.currentPage.firstPage) {
            classes.push("disabled");
        }
        this.previousButtonCssClasses = classes.join(" ");
        classes = [];
        if (this.currentPage.lastPage) {
            classes.push("disabled");
        }
        this.nextButtonCssClasses = classes.join(" ");
    }
    handleFetchPageSuccessEvent(page) {
        this.currentPage = page;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](page.items);
        this.dataSource.sort = this.sort;
        this.recalculatePreviousNextButtonCssClasses();
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AbstractManageResourcesPage.prototype, "sort", void 0);


/***/ }),

/***/ "./src/app/modules/shared/pipes/first-letter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/pipes/first-letter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: FirstLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstLetterPipe", function() { return FirstLetterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirstLetterPipe = class FirstLetterPipe {
    transform(value) {
        return value ? value.charAt(0) : "A";
    }
};
FirstLetterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "firstletter",
    })
], FirstLetterPipe);



/***/ }),

/***/ "./src/app/modules/shared/services/constants.utils.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/services/constants.utils.ts ***!
  \************************************************************/
/*! exports provided: OVERLAY_POSITION_TOP, OVERLAY_POSITION_BOTTOM, PAGE_CONTENT_READY_EVENT, ALL_TAGS, URL_BEFORE_LOGIN_COOKIE_NAME, NAVBAR_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_POSITION_TOP", function() { return OVERLAY_POSITION_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_POSITION_BOTTOM", function() { return OVERLAY_POSITION_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CONTENT_READY_EVENT", function() { return PAGE_CONTENT_READY_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_TAGS", function() { return ALL_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_BEFORE_LOGIN_COOKIE_NAME", function() { return URL_BEFORE_LOGIN_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_HEIGHT", function() { return NAVBAR_HEIGHT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const OVERLAY_POSITION_TOP = {
    originX: "center",
    originY: "top",
    overlayX: "center",
    overlayY: "bottom",
};
const OVERLAY_POSITION_BOTTOM = {
    originX: "center",
    originY: "bottom",
    overlayX: "center",
    overlayY: "top",
};
const PAGE_CONTENT_READY_EVENT = "page-content-ready-event";
const ALL_TAGS = "all";
const URL_BEFORE_LOGIN_COOKIE_NAME = "url_before_login";
const NAVBAR_HEIGHT = 65;


/***/ }),

/***/ "./src/app/modules/shared/services/cookie.utils.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/services/cookie.utils.ts ***!
  \*********************************************************/
/*! exports provided: CookieUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieUtils", function() { return CookieUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CookieUtils {
    static createCookie(name, value, days = 1) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            var expires = "; expires=" + date.toUTCString();
        }
        else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    static readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
    static eraseCookie(name) {
        CookieUtils.createCookie(name, "", -1);
    }
}


/***/ }),

/***/ "./src/app/modules/shared/services/set.utils.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/shared/services/set.utils.ts ***!
  \******************************************************/
/*! exports provided: SetUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUtils", function() { return SetUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SetUtils {
    static sort(set, compareFn) {
        return new Set(Array.from(set).sort(compareFn));
    }
}


/***/ }),

/***/ "./src/app/modules/shared/services/string.utils.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/services/string.utils.ts ***!
  \*********************************************************/
/*! exports provided: StringUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class StringUtils {
    static isEmpty(str) {
        return !str || 0 === str.length;
    }
    static isBlank(str) {
        return !str || /^\s*$/.test(str);
    }
}


/***/ }),

/***/ "./src/app/modules/shared/services/window.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/services/window.service.ts ***!
  \***********************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WindowService = class WindowService {
    scrollToBottom() {
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 0);
    }
};
WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WindowService);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_text_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/text/section-title/section-title.component */ "./src/app/modules/shared/components/text/section-title/section-title.component.ts");
/* harmony import */ var _components_logo_logo_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logo/logo-link.component */ "./src/app/modules/shared/components/logo/logo-link.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/modules/shared/components/select/select.component.ts");
/* harmony import */ var _components_select_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/select/select-option/select-option.component */ "./src/app/modules/shared/components/select/select-option/select-option.component.ts");
/* harmony import */ var _components_select_select_dropdown_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/select/select-dropdown/select-dropdown.component */ "./src/app/modules/shared/components/select/select-dropdown/select-dropdown.component.ts");
/* harmony import */ var _directives_slidein_slidein_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/slidein/slidein.directive */ "./src/app/modules/shared/directives/slidein/slidein.directive.ts");
/* harmony import */ var _directives_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/tooltip/tooltip.component */ "./src/app/modules/shared/directives/tooltip/tooltip.component.ts");
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/tooltip/tooltip.directive */ "./src/app/modules/shared/directives/tooltip/tooltip.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_text_text_with_icon_text_with_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/text/text-with-icon/text-with-icon.component */ "./src/app/modules/shared/components/text/text-with-icon/text-with-icon.component.ts");
/* harmony import */ var _components_text_text_with_icon_quote_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/text/text-with-icon/quote.component */ "./src/app/modules/shared/components/text/text-with-icon/quote.component.ts");
/* harmony import */ var _components_text_text_with_icon_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/text/text-with-icon/error.component */ "./src/app/modules/shared/components/text/text-with-icon/error.component.ts");
/* harmony import */ var _components_text_text_with_icon_warn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/text/text-with-icon/warn.component */ "./src/app/modules/shared/components/text/text-with-icon/warn.component.ts");
/* harmony import */ var _components_text_text_with_icon_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/text/text-with-icon/info.component */ "./src/app/modules/shared/components/text/text-with-icon/info.component.ts");
/* harmony import */ var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/first-letter.pipe */ "./src/app/modules/shared/pipes/first-letter.pipe.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _directives_textarea_auto_grow_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/textarea-auto-grow.directive */ "./src/app/modules/shared/directives/textarea-auto-grow.directive.ts");
/* harmony import */ var _directives_textarea_disable_spellcheck_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/textarea-disable-spellcheck.directive */ "./src/app/modules/shared/directives/textarea-disable-spellcheck.directive.ts");
/* harmony import */ var _components_login_with_github_login_with_github_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login-with-github/login-with-github.component */ "./src/app/modules/shared/components/login-with-github/login-with-github.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _components_router_link_router_link_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/router-link/router-link.component */ "./src/app/modules/shared/components/router-link/router-link.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _components_text_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/text/page-title/page-title.component */ "./src/app/modules/shared/components/text/page-title/page-title.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _components_buttons_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/buttons/edit-button/edit-button.component */ "./src/app/modules/shared/components/buttons/edit-button/edit-button.component.ts");
/* harmony import */ var _components_buttons_consult_button_consult_button_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/buttons/consult-button/consult-button.component */ "./src/app/modules/shared/components/buttons/consult-button/consult-button.component.ts");
/* harmony import */ var ng2_simplemde__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-simplemde */ "./node_modules/ng2-simplemde/lib/index.js");
/* harmony import */ var _components_buttons_edit_button_edit_button_link_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/buttons/edit-button/edit-button-link.component */ "./src/app/modules/shared/components/buttons/edit-button/edit-button-link.component.ts");
/* harmony import */ var _components_buttons_consult_button_consult_button_link_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/buttons/consult-button/consult-button-link.component */ "./src/app/modules/shared/components/buttons/consult-button/consult-button-link.component.ts");
/* harmony import */ var _components_buttons_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/buttons/delete-button/delete-button.component */ "./src/app/modules/shared/components/buttons/delete-button/delete-button.component.ts");
/* harmony import */ var _directives_input_disable_autocomplete_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./directives/input-disable-autocomplete.directive */ "./src/app/modules/shared/directives/input-disable-autocomplete.directive.ts");
/* harmony import */ var _components_buttons_previous_button_previous_button_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/buttons/previous-button/previous-button.component */ "./src/app/modules/shared/components/buttons/previous-button/previous-button.component.ts");
/* harmony import */ var _components_buttons_next_button_next_button_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/buttons/next-button/next-button.component */ "./src/app/modules/shared/components/buttons/next-button/next-button.component.ts");
/* harmony import */ var _components_buttons_load_more_button_load_more_button_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/buttons/load-more-button/load-more-button.component */ "./src/app/modules/shared/components/buttons/load-more-button/load-more-button.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _components_icons_dropdown_icon_dropdown_icon_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/icons/dropdown-icon/dropdown-icon.component */ "./src/app/modules/shared/components/icons/dropdown-icon/dropdown-icon.component.ts");
/* harmony import */ var _layouts_manage_resources_page_layout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./layouts/manage-resources-page.layout */ "./src/app/modules/shared/layouts/manage-resources-page.layout.ts");
/* harmony import */ var _components_page_title_buttons_page_title_button_page_title_button_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-button/page-title-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-button/page-title-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_filter_button_page_title_filter_button_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-filter-button/page-title-filter-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-filter-button/page-title-filter-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_new_button_page_title_new_button_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-new-button/page-title-new-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-new-button/page-title-new-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_consult_button_page_title_consult_button_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-consult-button/page-title-consult-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-consult-button/page-title-consult-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_edit_button_page_title_edit_button_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-edit-button/page-title-edit-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-edit-button/page-title-edit-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_download_button_page_title_download_button_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-download-button/page-title-download-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-download-button/page-title-download-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_upload_button_page_title_upload_button_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-upload-button/page-title-upload-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-upload-button/page-title-upload-button.component.ts");
/* harmony import */ var _components_page_title_buttons_page_title_delete_button_page_title_delete_button_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/page-title-buttons/page-title-delete-button/page-title-delete-button.component */ "./src/app/modules/shared/components/page-title-buttons/page-title-delete-button/page-title-delete-button.component.ts");



























































let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _directives_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"],
            _components_text_text_with_icon_quote_component__WEBPACK_IMPORTED_MODULE_16__["QuoteComponent"],
            _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_48__["ConfirmationDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__["PortalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            ng2_simplemde__WEBPACK_IMPORTED_MODULE_39__["SimplemdeModule"].forRoot(),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__["MatDialogModule"],
        ],
        declarations: [
            _components_text_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_3__["SectionTitleComponent"],
            _components_logo_logo_link_component__WEBPACK_IMPORTED_MODULE_4__["LogoLinkComponent"],
            _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
            _components_select_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectOptionComponent"],
            _components_select_select_dropdown_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["SelectDropdownComponent"],
            _directives_slidein_slidein_directive__WEBPACK_IMPORTED_MODULE_8__["SlideInDirective"],
            _directives_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"],
            _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"],
            _components_text_text_with_icon_text_with_icon_component__WEBPACK_IMPORTED_MODULE_15__["TextWithIconComponent"],
            _components_text_text_with_icon_quote_component__WEBPACK_IMPORTED_MODULE_16__["QuoteComponent"],
            _components_text_text_with_icon_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
            _components_text_text_with_icon_warn_component__WEBPACK_IMPORTED_MODULE_18__["WarnComponent"],
            _components_text_text_with_icon_info_component__WEBPACK_IMPORTED_MODULE_19__["InfoComponent"],
            _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_20__["FirstLetterPipe"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_21__["TimeAgoPipe"],
            _directives_textarea_auto_grow_directive__WEBPACK_IMPORTED_MODULE_23__["TextareaAutoGrowDirective"],
            _directives_textarea_disable_spellcheck_directive__WEBPACK_IMPORTED_MODULE_24__["TextareaDisableSpellCheckDirective"],
            _components_login_with_github_login_with_github_component__WEBPACK_IMPORTED_MODULE_25__["LoginWithGithubComponent"],
            _components_router_link_router_link_component__WEBPACK_IMPORTED_MODULE_30__["RouterLinkComponent"],
            _components_page_title_buttons_page_title_new_button_page_title_new_button_component__WEBPACK_IMPORTED_MODULE_53__["PageTitleNewButtonComponent"],
            _components_text_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_33__["PageTitleComponent"],
            _components_buttons_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_37__["EditButtonComponent"],
            _components_buttons_consult_button_consult_button_component__WEBPACK_IMPORTED_MODULE_38__["ConsultButtonComponent"],
            _components_buttons_edit_button_edit_button_link_component__WEBPACK_IMPORTED_MODULE_40__["EditButtonLinkComponent"],
            _components_buttons_consult_button_consult_button_link_component__WEBPACK_IMPORTED_MODULE_41__["ConsultButtonLinkComponent"],
            _components_buttons_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_42__["DeleteButtonComponent"],
            _directives_input_disable_autocomplete_directive__WEBPACK_IMPORTED_MODULE_43__["InputDisableAutoCompleteDirective"],
            _components_buttons_previous_button_previous_button_component__WEBPACK_IMPORTED_MODULE_44__["PreviousButtonComponent"],
            _components_buttons_next_button_next_button_component__WEBPACK_IMPORTED_MODULE_45__["NextButtonComponent"],
            _components_buttons_load_more_button_load_more_button_component__WEBPACK_IMPORTED_MODULE_46__["LoadMoreButtonComponent"],
            _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_48__["ConfirmationDialogComponent"],
            _components_icons_dropdown_icon_dropdown_icon_component__WEBPACK_IMPORTED_MODULE_49__["DropdownIconComponent"],
            _layouts_manage_resources_page_layout__WEBPACK_IMPORTED_MODULE_50__["ManageResourcesPageLayout"],
            _components_page_title_buttons_page_title_filter_button_page_title_filter_button_component__WEBPACK_IMPORTED_MODULE_52__["PageTitleFilterButtonComponent"],
            _components_page_title_buttons_page_title_button_page_title_button_component__WEBPACK_IMPORTED_MODULE_51__["PageTitleButtonComponent"],
            _components_page_title_buttons_page_title_consult_button_page_title_consult_button_component__WEBPACK_IMPORTED_MODULE_54__["PageTitleConsultButtonComponent"],
            _components_page_title_buttons_page_title_edit_button_page_title_edit_button_component__WEBPACK_IMPORTED_MODULE_55__["PageTitleEditButtonComponent"],
            _components_page_title_buttons_page_title_download_button_page_title_download_button_component__WEBPACK_IMPORTED_MODULE_56__["PageTitleDownloadButtonComponent"],
            _components_page_title_buttons_page_title_upload_button_page_title_upload_button_component__WEBPACK_IMPORTED_MODULE_57__["PageTitleUploadButtonComponent"],
            _components_page_title_buttons_page_title_delete_button_page_title_delete_button_component__WEBPACK_IMPORTED_MODULE_58__["PageTitleDeleteButtonComponent"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__["PortalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            ng2_simplemde__WEBPACK_IMPORTED_MODULE_39__["SimplemdeModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__["MatDialogModule"],
            _components_text_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_3__["SectionTitleComponent"],
            _components_logo_logo_link_component__WEBPACK_IMPORTED_MODULE_4__["LogoLinkComponent"],
            _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
            _components_select_select_option_select_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectOptionComponent"],
            _directives_slidein_slidein_directive__WEBPACK_IMPORTED_MODULE_8__["SlideInDirective"],
            _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"],
            _components_text_text_with_icon_quote_component__WEBPACK_IMPORTED_MODULE_16__["QuoteComponent"],
            _components_text_text_with_icon_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
            _components_text_text_with_icon_warn_component__WEBPACK_IMPORTED_MODULE_18__["WarnComponent"],
            _components_text_text_with_icon_info_component__WEBPACK_IMPORTED_MODULE_19__["InfoComponent"],
            _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_20__["FirstLetterPipe"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_21__["TimeAgoPipe"],
            _directives_textarea_auto_grow_directive__WEBPACK_IMPORTED_MODULE_23__["TextareaAutoGrowDirective"],
            _directives_textarea_disable_spellcheck_directive__WEBPACK_IMPORTED_MODULE_24__["TextareaDisableSpellCheckDirective"],
            _components_login_with_github_login_with_github_component__WEBPACK_IMPORTED_MODULE_25__["LoginWithGithubComponent"],
            _components_router_link_router_link_component__WEBPACK_IMPORTED_MODULE_30__["RouterLinkComponent"],
            _components_page_title_buttons_page_title_new_button_page_title_new_button_component__WEBPACK_IMPORTED_MODULE_53__["PageTitleNewButtonComponent"],
            _components_text_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_33__["PageTitleComponent"],
            _components_buttons_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_37__["EditButtonComponent"],
            _components_buttons_consult_button_consult_button_component__WEBPACK_IMPORTED_MODULE_38__["ConsultButtonComponent"],
            _components_buttons_edit_button_edit_button_link_component__WEBPACK_IMPORTED_MODULE_40__["EditButtonLinkComponent"],
            _components_buttons_consult_button_consult_button_link_component__WEBPACK_IMPORTED_MODULE_41__["ConsultButtonLinkComponent"],
            _components_buttons_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_42__["DeleteButtonComponent"],
            _directives_input_disable_autocomplete_directive__WEBPACK_IMPORTED_MODULE_43__["InputDisableAutoCompleteDirective"],
            _components_buttons_previous_button_previous_button_component__WEBPACK_IMPORTED_MODULE_44__["PreviousButtonComponent"],
            _components_buttons_next_button_next_button_component__WEBPACK_IMPORTED_MODULE_45__["NextButtonComponent"],
            _components_buttons_load_more_button_load_more_button_component__WEBPACK_IMPORTED_MODULE_46__["LoadMoreButtonComponent"],
            _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_48__["ConfirmationDialogComponent"],
            _components_icons_dropdown_icon_dropdown_icon_component__WEBPACK_IMPORTED_MODULE_49__["DropdownIconComponent"],
            _layouts_manage_resources_page_layout__WEBPACK_IMPORTED_MODULE_50__["ManageResourcesPageLayout"],
            _components_page_title_buttons_page_title_filter_button_page_title_filter_button_component__WEBPACK_IMPORTED_MODULE_52__["PageTitleFilterButtonComponent"],
            _components_page_title_buttons_page_title_consult_button_page_title_consult_button_component__WEBPACK_IMPORTED_MODULE_54__["PageTitleConsultButtonComponent"],
            _components_page_title_buttons_page_title_edit_button_page_title_edit_button_component__WEBPACK_IMPORTED_MODULE_55__["PageTitleEditButtonComponent"],
            _components_page_title_buttons_page_title_download_button_page_title_download_button_component__WEBPACK_IMPORTED_MODULE_56__["PageTitleDownloadButtonComponent"],
            _components_page_title_buttons_page_title_upload_button_page_title_upload_button_component__WEBPACK_IMPORTED_MODULE_57__["PageTitleUploadButtonComponent"],
            _components_page_title_buttons_page_title_delete_button_page_title_delete_button_component__WEBPACK_IMPORTED_MODULE_58__["PageTitleDeleteButtonComponent"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/modules/user/components/user-avatar/user-avatar.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/components/user-avatar/user-avatar.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: var(--avatar-size, 4rem);\n  height: var(--avatar-size, 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci1hdmF0YXIvQzpcXGRldlxccHJvamVjdHNcXGFoZW50ZXRpLWJsb2dcXGFoZW50ZXRpLWJsb2ctd2ViYXBwXFxzcmNcXG1haW5cXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFxjb21wb25lbnRzXFx1c2VyLWF2YXRhclxcdXNlci1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3VzZXItYXZhdGFyL3VzZXItYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci1hdmF0YXIvdXNlci1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XHJcbn1cclxuIiwiaW1nIHtcbiAgd2lkdGg6IHZhcigtLWF2YXRhci1zaXplLCA0cmVtKTtcbiAgaGVpZ2h0OiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/user/components/user-avatar/user-avatar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/user/components/user-avatar/user-avatar.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return UserAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserAvatarComponent = class UserAvatarComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAvatarComponent.prototype, "user", void 0);
UserAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-avatar",
        template: `
    <div>
      <img [src]="user.avatarUrl" />
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-avatar.component.scss */ "./src/app/modules/user/components/user-avatar/user-avatar.component.scss")).default]
    })
], UserAvatarComponent);



/***/ }),

/***/ "./src/app/modules/user/components/user-aware.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user/components/user-aware.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserAwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAwareComponent", function() { return UserAwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserAwareComponent {
    constructor(userObservable) {
        this.userObservable = userObservable;
    }
    ngOnInit() {
        this.user = this.userObservable.currentUser();
        this.userSubscription = this.userObservable
            .onUser()
            .subscribe((user) => (this.user = user));
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}


/***/ }),

/***/ "./src/app/modules/user/components/user/user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/user/components/user/user.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n}\n\nimg {\n  width: var(--avatar-size, 4rem);\n  height: var(--avatar-size, 4rem);\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXJcXGNvbXBvbmVudHNcXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IHZhcigtLWF2YXRhci1zaXplLCA0cmVtKTtcbiAgaGVpZ2h0OiB2YXIoLS1hdmF0YXItc2l6ZSwgNHJlbSk7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/user/components/user/user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/components/user/user.component.ts ***!
  \****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserComponent.prototype, "user", void 0);
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: `
    <img [src]="user.avatarUrl" />
    <span>{{ user.username }}</span>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/modules/user/components/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/modules/user/models/user.internal.models.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/models/user.internal.models.ts ***!
  \*************************************************************/
/*! exports provided: Author, CurrentUser, User, AnonymousUser, UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUser", function() { return CurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousUser", function() { return AnonymousUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/page.model */ "./src/app/modules/shared/models/page.model.ts");


class Author {
}
class CurrentUser {
    constructor() {
        this.isAuthenticated = false;
        this.isAdmin = false;
    }
}
class User {
}
class AnonymousUser extends CurrentUser {
    constructor() {
        super();
        this.username = "Anonymous";
    }
}
class UsersPage extends _shared_models_page_model__WEBPACK_IMPORTED_MODULE_1__["Page"] {
}


/***/ }),

/***/ "./src/app/modules/user/pages/manage-users/manage-users.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/user/pages/manage-users/manage-users.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n@media screen and (max-width: 480px) {\n  :host {\n    padding: 0 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL21hbmFnZS11c2Vycy9DOlxcZGV2XFxwcm9qZWN0c1xcYWhlbnRldGktYmxvZ1xcYWhlbnRldGktYmxvZy13ZWJhcHBcXHNyY1xcbWFpblxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXJcXHBhZ2VzXFxtYW5hZ2UtdXNlcnNcXG1hbmFnZS11c2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9tYW5hZ2UtdXNlcnMvbWFuYWdlLXVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBREFFO0VBRkY7SUFHSSxlQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9tYW5hZ2UtdXNlcnMvbWFuYWdlLXVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/user/pages/manage-users/manage-users.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/pages/manage-users/manage-users.page.ts ***!
  \**********************************************************************/
/*! exports provided: ManageUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPage", function() { return ManageUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _models_user_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.internal.models */ "./src/app/modules/user/models/user.internal.models.ts");
/* harmony import */ var src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _services_user_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.http-client */ "./src/app/modules/user/services/user.http-client.ts");
/* harmony import */ var _services_user_converter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.converter */ "./src/app/modules/user/services/user.converter.ts");
/* harmony import */ var src_app_modules_shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/pages/manage-resources.page */ "./src/app/modules/shared/pages/manage-resources.page.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");










let ManageUsersPage = class ManageUsersPage extends src_app_modules_shared_pages_manage_resources_page__WEBPACK_IMPORTED_MODULE_7__["AbstractManageResourcesPage"] {
    constructor(alertService, userHttpClient, userConverter, dialog) {
        super();
        this.alertService = alertService;
        this.userHttpClient = userHttpClient;
        this.userConverter = userConverter;
        this.dialog = dialog;
        this.currentPage = new _models_user_internal_models__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.columns = ["id", "username", "provider", "joinAt", "actions"];
    }
    // prettier-ignore
    fetchPage(filter, page) {
        const request = this.userConverter.toGetUsersPageApiRequest(filter, page);
        this.userHttpClient.getUsersPage(request)
            .then(usersPage => this.handleGetUsersPageSuccessEvent(usersPage))
            .catch(error => this.handleGetUsersPageErrorEvent(error));
    }
    // prettier-ignore
    deleteUser(user) {
        const dialogRef = this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], {
            data: "Do you confirm the deletion of this user ?",
            width: "340px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const request = this.userConverter.toDeleteUserApiRequest(user.id);
                this.userHttpClient.deleteUser(request)
                    .then(() => this.handleDeleteUserSuccessEvent(user))
                    .catch(error => this.handleDeleteUserErrorEvent(error));
            }
        });
    }
    handleGetUsersPageErrorEvent(error) {
        this.userHttpClient.handleError(error, "Error while fetching users :(");
    }
    handleDeleteUserErrorEvent(error) {
        this.userHttpClient.handleError(error, "Error while deleting user :(");
    }
    handleGetUsersPageSuccessEvent(usersPage) {
        this.currentPage = usersPage;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](usersPage.items);
        this.dataSource.sort = this.sort;
        this.recalculatePreviousNextButtonCssClasses();
    }
    // prettier-ignore
    handleDeleteUserSuccessEvent(user) {
        this.alertService.info(`The user ${user.username} has been deleted with success`);
        this.dataSource.data = this.dataSource.data.filter((u) => u.id !== user.id);
        this.dataSource._updateChangeSubscription(); // <-- Refresh the data source, reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
    }
};
ManageUsersPage.ctorParameters = () => [
    { type: src_app_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _services_user_http_client__WEBPACK_IMPORTED_MODULE_5__["UserHttpClient"] },
    { type: _services_user_converter__WEBPACK_IMPORTED_MODULE_6__["UserConverter"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
ManageUsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/manage-users/manage-users.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-users.page.scss */ "./src/app/modules/user/pages/manage-users/manage-users.page.scss")).default]
    })
], ManageUsersPage);



/***/ }),

/***/ "./src/app/modules/user/services/admin.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/user/services/admin.guard.ts ***!
  \******************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _user_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.http-client */ "./src/app/modules/user/services/user.http-client.ts");





let AdminGuard = class AdminGuard {
    constructor(userHttpClient, alertService, router) {
        this.userHttpClient = userHttpClient;
        this.alertService = alertService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userHttpClient
            .getCurrentUser()
            .then((user) => {
            if (user.isAdmin)
                return true;
            this.alertService.error("Only Admin user can access this page", {
                keepAfterRouteChange: true,
            });
            this.router.navigate(["/"]);
            return false;
        })
            .catch((error) => {
            console.error("user not yet authenticated. error: " + error);
            this.alertService.error("Please login to access this page", {
                keepAfterRouteChange: true,
            });
            this.router.navigate(["/"]);
            return false;
        });
    }
};
AdminGuard.ctorParameters = () => [
    { type: _user_http_client__WEBPACK_IMPORTED_MODULE_4__["UserHttpClient"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], AdminGuard);



/***/ }),

/***/ "./src/app/modules/user/services/logged-in.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user/services/logged-in.guard.ts ***!
  \**********************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");
/* harmony import */ var _user_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.http-client */ "./src/app/modules/user/services/user.http-client.ts");





let LoggedInGuard = class LoggedInGuard {
    constructor(userHttpClient, alertService, router) {
        this.userHttpClient = userHttpClient;
        this.alertService = alertService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userHttpClient
            .getCurrentUser()
            .then(() => true)
            .catch((error) => {
            console.error("user not yet authenticated. error: " + error);
            this.alertService.error("Please login to access this page", {
                keepAfterRouteChange: true,
            });
            this.router.navigate(["/"]);
            return false;
        });
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _user_http_client__WEBPACK_IMPORTED_MODULE_4__["UserHttpClient"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], LoggedInGuard);



/***/ }),

/***/ "./src/app/modules/user/services/user.converter.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/user/services/user.converter.ts ***!
  \*********************************************************/
/*! exports provided: UserConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConverter", function() { return UserConverter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.internal.models */ "./src/app/modules/user/models/user.internal.models.ts");



let UserConverter = class UserConverter {
    toAuthor(author) {
        return {
            username: author.username,
            avatarUrl: author.avatarUrl,
        };
    }
    toCurrentUser(user) {
        return {
            username: user.username,
            avatarUrl: user.avatarUrl,
            isAuthenticated: user.username !== undefined && user.username !== null,
            isAdmin: user.roles.includes("ADMIN"),
        };
    }
    toUser(user) {
        console.log(user);
        return {
            id: user.id,
            username: user.username,
            avatarUrl: user.avatarUrl,
            provider: user.provider,
            joinAt: new Date(user.joinAtIso8601),
        };
    }
    toGetUsersPageApiRequest(filter, page, size = 5, sortBy = "USERNAME", sortDirection = "asc") {
        return {
            url: `/secure-api/users?filter=${filter}&page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
        };
    }
    toUsersPage(page) {
        const res = new _models_user_internal_models__WEBPACK_IMPORTED_MODULE_2__["UsersPage"]();
        res.totalItems = page.totalItems;
        res.firstPage = page.page == 0;
        res.lastPage = page.lastPage;
        res.page = page.page;
        page.items.forEach((user) => res.items.push(this.toUser(user)));
        return res;
    }
    toDeleteUserApiRequest(id) {
        return {
            url: `/secure-api/users/${id}`,
        };
    }
};
UserConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserConverter);



/***/ }),

/***/ "./src/app/modules/user/services/user.http-client.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/user/services/user.http-client.ts ***!
  \***********************************************************/
/*! exports provided: GET_CURRENT_IDENTITY_URL, UserHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_IDENTITY_URL", function() { return GET_CURRENT_IDENTITY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHttpClient", function() { return UserHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.converter */ "./src/app/modules/user/services/user.converter.ts");
/* harmony import */ var _alert_common_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alert/common.http-client */ "./src/app/modules/alert/common.http-client.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../alert/alert.service */ "./src/app/modules/alert/alert.service.ts");







const GET_CURRENT_IDENTITY_URL = "/api/currentIdentity";
let UserHttpClient = class UserHttpClient extends _alert_common_http_client__WEBPACK_IMPORTED_MODULE_5__["CommonHttpClient"] {
    constructor(http, userConverter, alertService) {
        super(alertService);
        this.http = http;
        this.userConverter = userConverter;
    }
    getCurrentUser() {
        return this.http
            .get(GET_CURRENT_IDENTITY_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.userConverter.toCurrentUser))
            .toPromise();
    }
    getUsersPage(request) {
        return this.http
            .get(request.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((users) => this.userConverter.toUsersPage(users)))
            .toPromise();
    }
    // prettier-ignore
    deleteUser(request) {
        return this.http
            .delete(request.url)
            .toPromise();
    }
};
UserHttpClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_converter__WEBPACK_IMPORTED_MODULE_4__["UserConverter"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
UserHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserHttpClient);



/***/ }),

/***/ "./src/app/modules/user/services/user.login.services.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/user/services/user.login.services.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginServices", function() { return UserLoginServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/cookie.utils */ "./src/app/modules/shared/services/cookie.utils.ts");
/* harmony import */ var _shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/constants.utils */ "./src/app/modules/shared/services/constants.utils.ts");




let UserLoginServices = class UserLoginServices {
    preLogin() {
        _shared_services_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieUtils"].eraseCookie(_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_3__["URL_BEFORE_LOGIN_COOKIE_NAME"]);
        _shared_services_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieUtils"].createCookie(_shared_services_constants_utils__WEBPACK_IMPORTED_MODULE_3__["URL_BEFORE_LOGIN_COOKIE_NAME"], window.location.href);
    }
};
UserLoginServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserLoginServices);



/***/ }),

/***/ "./src/app/modules/user/services/user.observable.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user/services/user.observable.ts ***!
  \**********************************************************/
/*! exports provided: UserObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserObservable", function() { return UserObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.internal.models */ "./src/app/modules/user/models/user.internal.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.http-client */ "./src/app/modules/user/services/user.http-client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
let UserObservable = class UserObservable {
    constructor(router, userHttpClient) {
        this.router = router;
        this.userHttpClient = userHttpClient;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_user_internal_models__WEBPACK_IMPORTED_MODULE_2__["AnonymousUser"]());
        this.checkUser();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.checkUser();
            }
        });
    }
    checkUser() {
        this.userHttpClient
            .getCurrentUser()
            .then((user) => this.newUser(user))
            .catch(() => this.handleGetCurrentUserErrorEvent());
    }
    handleGetCurrentUserErrorEvent() {
        console.log("user not yet authenticated");
        this.newUser(new _models_user_internal_models__WEBPACK_IMPORTED_MODULE_2__["AnonymousUser"]());
    }
    currentUser() {
        return this.subject.getValue();
    }
    onUser() {
        return this.subject.asObservable();
    }
    newUser(user) {
        this.subject.next(user);
    }
};
UserObservable.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _user_http_client__WEBPACK_IMPORTED_MODULE_4__["UserHttpClient"] }
];
UserObservable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], UserObservable);



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-avatar/user-avatar.component */ "./src/app/modules/user/components/user-avatar/user-avatar.component.ts");
/* harmony import */ var _pages_manage_users_manage_users_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/manage-users/manage-users.page */ "./src/app/modules/user/pages/manage-users/manage-users.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/admin.guard */ "./src/app/modules/user/services/admin.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/modules/user/components/user/user.component.ts");









const routes = [
    {
        path: "users",
        component: _pages_manage_users_manage_users_page__WEBPACK_IMPORTED_MODULE_4__["ManageUsersPage"],
        canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]],
    },
];
let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__["UserAvatarComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"]],
        declarations: [_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__["UserAvatarComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _pages_manage_users_manage_users_page__WEBPACK_IMPORTED_MODULE_4__["ManageUsersPage"]],
    })
], UserModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\projects\ahenteti-blog\ahenteti-blog-webapp\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map