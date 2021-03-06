(() => {
	var A = {
			303: function (A, t) {
				var e, o, i;
				!(function (n, s) {
					'use strict';
					(o = []),
						void 0 ===
							(i =
								'function' ==
								typeof (e = function () {
									return function (A) {
										function t(A) {
											(A.icon = Object.prototype.hasOwnProperty.call(A, 'icon')
												? A.icon
												: ''),
												(A.visible = Object.prototype.hasOwnProperty.call(
													A,
													'visible'
												)
													? A.visible
													: 'hover'),
												(A.placement = Object.prototype.hasOwnProperty.call(
													A,
													'placement'
												)
													? A.placement
													: 'right'),
												(A.ariaLabel = Object.prototype.hasOwnProperty.call(
													A,
													'ariaLabel'
												)
													? A.ariaLabel
													: 'Anchor'),
												(A.class = Object.prototype.hasOwnProperty.call(
													A,
													'class'
												)
													? A.class
													: ''),
												(A.base = Object.prototype.hasOwnProperty.call(
													A,
													'base'
												)
													? A.base
													: ''),
												(A.truncate = Object.prototype.hasOwnProperty.call(
													A,
													'truncate'
												)
													? Math.floor(A.truncate)
													: 64),
												(A.titleText = Object.prototype.hasOwnProperty.call(
													A,
													'titleText'
												)
													? A.titleText
													: '');
										}
										function e(A) {
											var t;
											if ('string' == typeof A || A instanceof String)
												t = [].slice.call(document.querySelectorAll(A));
											else {
												if (!(Array.isArray(A) || A instanceof NodeList))
													throw new TypeError(
														'The selector provided to AnchorJS was invalid.'
													);
												t = [].slice.call(A);
											}
											return t;
										}
										(this.options = A || {}),
											(this.elements = []),
											t(this.options),
											(this.isTouchDevice = function () {
												return Boolean(
													'ontouchstart' in window ||
														window.TouchEvent ||
														(window.DocumentTouch &&
															document instanceof DocumentTouch)
												);
											}),
											(this.add = function (A) {
												var o,
													i,
													n,
													s,
													a,
													r,
													c,
													l,
													h,
													u,
													p,
													d,
													w = [];
												if (
													(t(this.options),
													'touch' === (p = this.options.visible) &&
														(p = this.isTouchDevice() ? 'always' : 'hover'),
													A || (A = 'h2, h3, h4, h5, h6'),
													0 === (o = e(A)).length)
												)
													return this;
												for (
													(function () {
														if (
															null ===
															document.head.querySelector('style.anchorjs')
														) {
															var A,
																t = document.createElement('style');
															(t.className = 'anchorjs'),
																t.appendChild(document.createTextNode('')),
																void 0 ===
																(A = document.head.querySelector(
																	'[rel="stylesheet"],style'
																))
																	? document.head.appendChild(t)
																	: document.head.insertBefore(t, A),
																t.sheet.insertRule(
																	'.anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',
																	t.sheet.cssRules.length
																),
																t.sheet.insertRule(
																	':hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}',
																	t.sheet.cssRules.length
																),
																t.sheet.insertRule(
																	'[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}',
																	t.sheet.cssRules.length
																),
																t.sheet.insertRule(
																	'@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',
																	t.sheet.cssRules.length
																);
														}
													})(),
														i = document.querySelectorAll('[id]'),
														n = [].map.call(i, function (A) {
															return A.id;
														}),
														a = 0;
													a < o.length;
													a++
												)
													if (this.hasAnchorJSLink(o[a])) w.push(a);
													else {
														if (o[a].hasAttribute('id'))
															s = o[a].getAttribute('id');
														else if (o[a].hasAttribute('data-anchor-id'))
															s = o[a].getAttribute('data-anchor-id');
														else {
															(h = l = this.urlify(o[a].textContent)), (c = 0);
															do {
																void 0 !== r && (h = l + '-' + c),
																	(r = n.indexOf(h)),
																	(c += 1);
															} while (-1 !== r);
															(r = void 0),
																n.push(h),
																o[a].setAttribute('id', h),
																(s = h);
														}
														((u = document.createElement('a')).className =
															'anchorjs-link ' + this.options.class),
															u.setAttribute(
																'aria-label',
																this.options.ariaLabel
															),
															u.setAttribute(
																'data-anchorjs-icon',
																this.options.icon
															),
															this.options.titleText &&
																(u.title = this.options.titleText),
															(d = document.querySelector('base')
																? window.location.pathname +
																  window.location.search
																: ''),
															(d = this.options.base || d),
															(u.href = d + '#' + s),
															'always' === p && (u.style.opacity = '1'),
															'' === this.options.icon &&
																((u.style.font = '1em/1 anchorjs-icons'),
																'left' === this.options.placement &&
																	(u.style.lineHeight = 'inherit')),
															'left' === this.options.placement
																? ((u.style.position = 'absolute'),
																  (u.style.marginLeft = '-1em'),
																  (u.style.paddingRight = '.5em'),
																  o[a].insertBefore(u, o[a].firstChild))
																: ((u.style.paddingLeft = '.375em'),
																  o[a].appendChild(u));
													}
												for (a = 0; a < w.length; a++) o.splice(w[a] - a, 1);
												return (this.elements = this.elements.concat(o)), this;
											}),
											(this.remove = function (A) {
												for (var t, o, i = e(A), n = 0; n < i.length; n++)
													(o = i[n].querySelector('.anchorjs-link')) &&
														(-1 !== (t = this.elements.indexOf(i[n])) &&
															this.elements.splice(t, 1),
														i[n].removeChild(o));
												return this;
											}),
											(this.removeAll = function () {
												this.remove(this.elements);
											}),
											(this.urlify = function (A) {
												var e = document.createElement('textarea');
												(e.innerHTML = A), (A = e.value);
												return (
													this.options.truncate || t(this.options),
													A.trim()
														.replace(/'/gi, '')
														.replace(
															/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,
															'-'
														)
														.replace(/-{2,}/g, '-')
														.substring(0, this.options.truncate)
														.replace(/^-+|-+$/gm, '')
														.toLowerCase()
												);
											}),
											(this.hasAnchorJSLink = function (A) {
												var t =
														A.firstChild &&
														(' ' + A.firstChild.className + ' ').indexOf(
															' anchorjs-link '
														) > -1,
													e =
														A.lastChild &&
														(' ' + A.lastChild.className + ' ').indexOf(
															' anchorjs-link '
														) > -1;
												return t || e || !1;
											});
									};
								})
									? e.apply(t, o)
									: e) || (A.exports = i);
				})();
			},
		},
		t = {};
	function e(o) {
		var i = t[o];
		if (void 0 !== i) return i.exports;
		var n = (t[o] = { exports: {} });
		return A[o].call(n.exports, n, n.exports, e), n.exports;
	}
	(() => {
		'use strict';
		new (e(303))().add();
	})();
})();
