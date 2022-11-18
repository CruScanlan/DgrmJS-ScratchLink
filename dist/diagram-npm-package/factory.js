function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @template T
 * @param {Iterable<T>} iterable
 * @param {{(el:T) :boolean}=} filter
 * @returns {T}
 */
function last(iterable, filter) {
  if (!iterable) {
    return null;
  }
  var last;
  var _iterator = _createForOfIteratorHelper(iterable),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;
      if (!filter || filter(el)) {
        last = el;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return last;
}

/**
 * @template T
 * @param {Iterable<T>} iterable
 * @param {{(el:T) :boolean}=} filter
 * @returns {T | null}
 */
function first(iterable, filter) {
  var _iterator2 = _createForOfIteratorHelper(iterable),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var el = _step2.value;
      if (!filter || filter(el)) {
        return el;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
}

/**
 * @template T
 * @param {Iterable<T>} iterable
 * @param {{(el:T) :boolean}=} filter
 * @returns {boolean}
 */
function any(iterable, filter) {
  if (!iterable) {
    return false;
  }
  var _iterator3 = _createForOfIteratorHelper(iterable),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var el = _step3.value;
      if (!filter || filter(el)) {
        return true;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return false;
}

/**
 * @template T
 * @param {Set<T>} set
 * @param {T} el
 * @returns {Set<T>}
 */
function setDel(set, el) {
  set["delete"](el);
  return set;
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {number} transform
 * @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
 * @returns {SVGTransform}
 */
function ensureTransform(svgEl, transform, svg) {
  var tr = first(svgEl.transform.baseVal, function (tt) {
    return tt.type === transform;
  });
  if (!tr) {
    tr = (svgEl.ownerSVGElement || svg).createSVGTransform();
    svgEl.transform.baseVal.appendItem(tr);
  }
  return tr;
}

/**
* @param {SVGGraphicsElement} svgEl
* @param { {x: number, y: number} } position
* @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
* @returns {void}
*/
function svgPositionSet(svgEl, position, svg) {
  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_TRANSLATE, svg).setTranslate(position.x, position.y);
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @returns { {x: number, y: number} }
 */
function svgPositionGet(svgEl) {
  var tr = first(svgEl.transform.baseVal, function (tt) {
    return tt.type === SVGTransform.SVG_TRANSFORM_TRANSLATE;
  });
  return tr ? {
    x: tr.matrix.e,
    y: tr.matrix.f
  } : {
    x: 0,
    y: 0
  };
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {number} angle
 * @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
 * @returns {void}
 */
function svgRotate(svgEl, angle, svg) {
  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_ROTATE, svg).setRotate(angle, 0, 0);
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {Point} fixedPoint this point will not chage position while scale
 * @param {number} scale
 * @param {number} nextScale
 */
function svgScale(svgEl, fixedPoint, scale, nextScale) {
  var position = svgPositionGet(svgEl);
  svgPositionSet(svgEl, {
    //@ts-ignore
    x: nextScale / scale * (position.x - (fixedPoint.x - window.dgrmOffsetX)) + (fixedPoint.x - window.dgrmOffsetX),
    //@ts-ignore
    y: nextScale / scale * (position.y - (fixedPoint.y - window.dgrmOffsetY)) + (fixedPoint.y - window.dgrmOffsetY)
  });
  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE).setScale(nextScale, nextScale);
}

/**
 * @param {SVGTextElement} textEl target text element
 * @param {string} str
 * @param {{lineHeight:number, verticalMiddle?:number}} param
 * @returns {void}
 */
function svgTextDraw(textEl, str, param) {
  var _textEl$x$baseVal$0$v, _textEl$x, _textEl$x$baseVal$;
  textEl.innerHTML = svgStrToTspan(str, (_textEl$x$baseVal$0$v = (_textEl$x = textEl.x) === null || _textEl$x === void 0 ? void 0 : (_textEl$x$baseVal$ = _textEl$x.baseVal[0]) === null || _textEl$x$baseVal$ === void 0 ? void 0 : _textEl$x$baseVal$.value) !== null && _textEl$x$baseVal$0$v !== void 0 ? _textEl$x$baseVal$0$v : 0, param.lineHeight);
  if (param.verticalMiddle != null) {
    textEl.y.baseVal[0].value = param.verticalMiddle - textEl.getBBox().height / 2;
  }
}

/**
 * create multiline tspan markup
 * @param {string} str
 * @param {number} x
 * @param {number} lineHeight
 * @returns {string}
 */
function svgStrToTspan(str, x, lineHeight) {
  return str.split('\n').map(function (t, i) {
    return "<tspan x=\"".concat(x, "\" dy=\"").concat(i === 0 ? '.4em' : "".concat(lineHeight, "px"), "\" ").concat(t.length === 0 ? 'visibility="hidden"' : '', ">").concat(t.length === 0 ? '.' : escapeHtml(t).replaceAll(' ', '&nbsp;'), "</tspan>");
  }).join('');
}

/**
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

/**
 * @param {IPresenterStatable} shape
 * @param {DiagramShapeState} state
 */
function shapeStateAdd(shape, state) {
  if (!shape.stateHas(state)) {
    var states = shape.stateGet();
    shape.update({
      state: states.add(state)
    });
  }
}

/**
 * @param {IPresenterStatable} shape
 * @param {DiagramShapeState} state
 */
function shapeStateDel(shape, state) {
  if (shape.stateHas(state)) {
    var states = shape.stateGet();
    shape.update({
      state: setDel(states, state)
    });
  }
}

/**
 * @param {IPresenterStatable} shape
 * @param {DiagramShapeState} state
 * @param {boolean} isSet
 */
function shapeStateSet(shape, state, isSet) {
  (isSet ? shapeStateAdd : shapeStateDel)(shape, state);
}

/**
 * @param {Set<DiagramShapeState>} states
 * @param {SVGGraphicsElement} svgEl
 * @param {DiagramShapeState} state
 */
function stateClassSync(states, svgEl, state) {
  if (states.has(state)) {
    svgEl.classList.add(state);
  } else {
    svgEl.classList.remove(state);
  }
}

/**
 * @param {SVGSVGElement} svg
 * @param {string} templateKey
 * @returns {SVGGeometryElement}
 */
function templateGet(svg, templateKey) {
  return svg.getElementsByTagName('defs')[0].querySelector("[data-templ='".concat(templateKey, "']"));
}

/**
 * clone DOM element with {templateKey} and add to svg
 * @param {SVGGElement | SVGSVGElement} svgParent parent SVG el where to add child
 * @param {string} templateKey
 * @returns {SVGGeometryElement}
 */
function elemCreateByTemplate(svgParent, templateKey) {
  var _svgParent$ownerSVGEl;
  var el = templateGet((_svgParent$ownerSVGEl = svgParent.ownerSVGElement) !== null && _svgParent$ownerSVGEl !== void 0 ? _svgParent$ownerSVGEl : /** @type {SVGSVGElement} */svgParent, templateKey).cloneNode(true);
  svgParent.append(el);
  return (/** @type {SVGGeometryElement} */el
  );
}

/** @implements {ISvgPresenterShape} */
var SvgShape = /*#__PURE__*/function () {
  /**
   * @param {object} param
   * @param {SVGGraphicsElement} param.svgEl
   * @param {'shape'|'canvas'=} param.type
   * @param {boolean=} param.connectable
   * @param {ISvgPresenterConnector=} param.defaultInConnector
   */
  function SvgShape(_ref) {
    var svgEl = _ref.svgEl,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type,
      _ref$connectable = _ref.connectable,
      connectable = _ref$connectable === void 0 ? null : _ref$connectable,
      _ref$defaultInConnect = _ref.defaultInConnector,
      defaultInConnector = _ref$defaultInConnect === void 0 ? null : _ref$defaultInConnect;
    _classCallCheck(this, SvgShape);
    /**
     * @type {Set<DiagramShapeState>}
     * @private
     */
    this._state = new Set();
    this.svgEl = svgEl;

    /** @type {DiagramElementType} */
    this.type = type || 'shape';
    this.connectable = connectable;
    this.defaultInConnector = defaultInConnector;

    /** @type {Map<string, ISvgPresenterConnector>} */
    this.connectors = new Map();
  }

  /**
   * @param {DiagramShapeState} state
   * @returns {boolean}
   */
  _createClass(SvgShape, [{
    key: "stateHas",
    value: function stateHas(state) {
      return this._state.has(state);
    }

    /** @returns {Set<DiagramShapeState>} */
  }, {
    key: "stateGet",
    value: function stateGet() {
      return new Set(this._state);
    }

    /**
     * If type === 'canvas' -> return canvas postiotion in view (in SVG)
     *
     * if type === shape' -> return posiotion in canvas.
     * This position don't relay on canvas postion and canvas scale
     * @returns {Point}
     */
  }, {
    key: "positionGet",
    value: function positionGet() {
      return svgPositionGet(this.svgEl);
    }

    /** @param {DiagramShapeUpdateParam} param */
  }, {
    key: "update",
    value: function update(param) {
      var _this = this;
      if (param.position) {
        svgPositionSet(this.svgEl, param.position);
      }
      if (param.props) {
        SvgShape._attrsSet(this.svgEl, param.props);
      }
      if (param.connectors) {
        Object.keys(param.connectors).forEach(function (connectorKey) {
          var connectorUpdateParams = param.connectors[connectorKey];
          var connectorData = _this.connectors.get(connectorKey);
          if (connectorUpdateParams.innerPosition) {
            connectorData.innerPosition = connectorUpdateParams.innerPosition;
          }
          if (connectorUpdateParams.dir) {
            connectorData.dir = connectorUpdateParams.dir;
          }
        });
      }
      if (param.state) {
        var _this$connectors;
        this._state = param.state;
        for (var _i = 0, _arr = ['selected', 'hovered', 'disabled', 'highlighted']; _i < _arr.length; _i++) {
          var state = _arr[_i];
          stateClassSync(this._state, this.svgEl, /** @type {DiagramShapeState} */state);
        }
        (_this$connectors = this.connectors) === null || _this$connectors === void 0 ? void 0 : _this$connectors.forEach(function (cc) {
          if (!param.state.has('hovered')) {
            shapeStateDel(cc, 'hovered');
          }
        });
      }
    }

    /**
     * @param {Element} elem
     * @param {DiagramShapeProps} props
     * @private
     */
  }], [{
    key: "_attrsSet",
    value: function _attrsSet(elem, props) {
      Object.keys(props).forEach(function (name) {
        var shape = name === 'root' ? elem : elem.querySelector("[data-key='".concat(name, "'"));
        Object.keys(props[name]).forEach(function (attr) {
          var _props$name$attr;
          switch (attr) {
            case 'textContent':
              svgTextDraw( /** @type {SVGTextElement} */shape, (_props$name$attr = props[name][attr]) === null || _props$name$attr === void 0 ? void 0 : _props$name$attr.toString(), textParamsParse( /** @type {SVGTextElement} */shape));
              break;
            default:
              shape.setAttribute(attr, props[name][attr].toString());
              break;
          }
        });
      });
    }
  }]);
  return SvgShape;
}();

/**
 * @param {SVGTextElement} textEl
 * @returns {{lineHeight:number, verticalMiddle?:number}}
 */
function textParamsParse(textEl) {
  return {
    lineHeight: parseInt(textEl.getAttribute('data-line-height')),
    verticalMiddle: textEl.hasAttribute('data-vertical-middle') ? parseInt(textEl.getAttribute('data-vertical-middle')) : null
  };
}

/** @implements {IPresenter} */
var SvgPresenter = /*#__PURE__*/function (_EventTarget) {
  _inherits(SvgPresenter, _EventTarget);
  var _super = _createSuper(SvgPresenter);
  /**
   * @param {SVGSVGElement} svg
   * @param {ISvgPresenterShapeFactory} shapeFactory
   * */
  function SvgPresenter(svg, shapeFactory) {
    var _this;
    _classCallCheck(this, SvgPresenter);
    _this = _super.call(this);

    /** @private */
    _this._shapeFactory = shapeFactory;

    /** @private */
    _this._svg = svg;
    _this._svg.addEventListener('pointermove', _assertThisInitialized(_this));
    _this._svg.addEventListener('pointerdown', _assertThisInitialized(_this));
    _this._svg.addEventListener('pointerup', _assertThisInitialized(_this));
    _this._svg.addEventListener('pointerleave', _assertThisInitialized(_this));

    /**
     * store presenter objects
     * @type {WeakMap<SVGGraphicsElement, IDiagramElement>}
     * @private
     */
    _this._svgElemToPresenterObj = new WeakMap();

    /**
     * @type {SVGGElement}
     * @private
     */
    _this._canvasSvgEl = svg.querySelector('[data-key="canvas"]');
    _this._svgElemToPresenterObj.set(_this._canvasSvgEl, new SvgShape({
      svgEl: _this._canvasSvgEl,
      type: 'canvas'
    }));

    /** to set use scaleSet(...) */
    _this.scale = 1;
    return _this;
  }

  //
  // scale, canvas position

  /**
   * @param {number} scale
   * @param {Point?=} fixedPoint this point will not chage position while scale
   */
  _createClass(SvgPresenter, [{
    key: "scaleSet",
    value: function scaleSet(scale, fixedPoint) {
      svgScale(
      // svgEl
      this._canvasSvgEl,
      // fixedPoint
      fixedPoint,
      // scale
      this.scale,
      // nextScale
      scale);
      this.scale = scale;
    }

    /**	@param {Point} val */
  }, {
    key: "canvasPosition",
    get: /** NOTE: Position is always calculated, take once and save to local variable */
    function get() {
      return svgPositionGet(this._canvasSvgEl);
    }

    //
    // shapes add/update/remove

    /**
     * @param {DiagramChildAddType} type
     * @param {DiagramShapeAddParam | PresenterPathAppendParam} param
     * @returns {IPresenterShape | IPresenterPath}
     */,
    set: function set(val) {
      svgPositionSet(this._canvasSvgEl, val);
    }
  }, {
    key: "append",
    value: function append(type, param) {
      return this._shapeFactory(type, {
        svgCanvas: this._canvasSvgEl,
        svgElemToPresenterObj: this._svgElemToPresenterObj,
        createParams: param
      });
    }

    /**
     * @param {ISvgPresenterElement} elem
     */
  }, {
    key: "delete",
    value: function _delete(elem) {
      if (elem.dispose) {
        elem.dispose();
      }
      this._svgElemToPresenterObj["delete"](elem.svgEl);
      if (elem.type === 'shape') {
        var _iterator = _createForOfIteratorHelper( /** @type {ISvgPresenterShape} */elem.connectors),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var connector = _step.value;
            this._svgElemToPresenterObj["delete"](connector[1].svgEl);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if ( /** @type {ISvgPresenterShape} */elem.defaultInConnector) {
          this._svgElemToPresenterObj["delete"]( /** @type {ISvgPresenterShape} */elem.defaultInConnector.svgEl);
        }
      }
      elem.svgEl.remove();
    }

    //
    // pointer events

    /**
     * @param {PointerEvent & { currentTarget: SVGGraphicsElement, target: SVGGraphicsElement }} evt
     */
  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      if (!evt.isPrimary) {
        return;
      }
      switch (evt.type) {
        case 'pointermove':
          // fix old android
          if (!this._moveStart || Math.abs(this._moveStart.x - evt.clientX) > 3 || Math.abs(this._moveStart.y - evt.clientY) > 3) {
            this._moveStart = null;
            this._dispatchEnterLeave(evt);
            this._dispatchEvent(evt, 'pointermove', null);
          }
          break;
        case 'pointerdown':
        case 'pointerup':
          /**
           * @type {Point}
           * @private
           */
          this._moveStart = {
            x: evt.clientX,
            y: evt.clientY
          };
          this._dispatchEvent(evt, evt.type, SvgPresenter._getPointElem(evt, true));
          break;
        case 'pointerleave':
          this.dispatchEvent(new CustomEvent('canvasleave'));
      }
    }

    /**
     * @param {PointerEvent & { currentTarget: SVGGraphicsElement }} evt
     */
  }, {
    key: "_dispatchEnterLeave",
    value: function _dispatchEnterLeave(evt) {
      var pointElem = SvgPresenter._getPointElem(evt, false);
      if (pointElem === this._pointElem) {
        return;
      }

      // currently don't used
      // if (this._pointElem) {
      // 	this._dispatchEvent(evt, 'pointerleave', this._pointElem);
      // }

      if (pointElem) {
        this._dispatchEvent(evt, 'pointerenter', pointElem);
      }

      /**
       * @type {SVGGraphicsElement}
       * @private
       */
      this._pointElem = pointElem;
    }

    /**
     * @private
     * @param {PointerEvent} evt
     * @param {Boolean} considerNoClickAttr
     * @return {SVGGraphicsElement}
     */
  }, {
    key: "on",
    value:
    //
    // subscribe, disaptch

    /**
     * @param {PresenterEventType} type
     * @param {EventListenerOrEventListenerObject} listener
     * @returns {this}
     */
    function on(type, listener) {
      this.addEventListener(type, listener);
      return this;
    }

    /**
     * @param {PointerEvent & { currentTarget: SVGGraphicsElement }} parentEvt DOM event that trigger dispatching
     * @param {PresenterEventType} type
     * @param {SVGGraphicsElement} target
     * @private
     */
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(parentEvt, type, target) {
      var targetPresenterObj = null;
      if (target) {
        targetPresenterObj = this._svgElemToPresenterObj.get(target === this._svg || target.ownerSVGElement !== this._svg ? this._canvasSvgEl : target);
        // TODO: refactor
        if (!targetPresenterObj) {
          targetPresenterObj = this._svgElemToPresenterObj.get(target.closest('[data-connect]'));
        }
        if (!targetPresenterObj) {
          targetPresenterObj = this._svgElemToPresenterObj.get(target.closest('[data-templ]'));
        }
      }
      this.dispatchEvent(new CustomEvent(type, {
        /** @type {IPresenterEventDetail} */
        detail: {
          target: targetPresenterObj,
          clientX: parentEvt.clientX,
          clientY: parentEvt.clientY
        }
      }));
    }
  }], [{
    key: "_getPointElem",
    value: function _getPointElem(evt, considerNoClickAttr) {
      var _first2;
      var elems = document.elementsFromPoint(evt.clientX, evt.clientY);
      if (considerNoClickAttr) {
        var _first;
        return (/** @type {SVGGraphicsElement} */(_first = first(elems, function (el) {
            return el.hasAttribute('data-evt-z-index') && !el.hasAttribute('data-evt-no-click');
          })) !== null && _first !== void 0 ? _first : elems[0].hasAttribute('data-evt-no-click') ? elems[1] : elems[0]
        );
      }
      return (/** @type {SVGGraphicsElement} */(_first2 = first(elems, function (el) {
          return el.hasAttribute('data-evt-z-index');
        })) !== null && _first2 !== void 0 ? _first2 : elems[0]
      );
    }
  }]);
  return SvgPresenter;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/** @implements {IConnectorManager} */
var ConnectorManager = /*#__PURE__*/function () {
  /**
   * @param {IPresenter} presenter
   */
  function ConnectorManager(presenter) {
    _classCallCheck(this, ConnectorManager);
    this._presenter = presenter;
  }

  /**
   * @param {IConnectorConnector} connectorStart
   * @param {IConnectorConnector} connectorEnd
   * @returns {IPresenterPath}
   */
  _createClass(ConnectorManager, [{
    key: "add",
    value: function add(connectorStart, connectorEnd) {
      var path = /** @type {IConnectorPath} */this._presenter.append('path', {
        templateKey: 'path',
        start: {
          position: ConnectorManager._pathPoint(connectorStart),
          dir: connectorStart.dir
        },
        end: {
          position: ConnectorManager._pathPoint(connectorEnd),
          dir: connectorEnd.dir ? connectorEnd.dir : ConnectorManager._dirRevers(connectorStart.dir)
        },
        startConnector: connectorStart,
        endConnector: connectorEnd
      });
      shapeStateAdd(connectorEnd, 'connected');
      ConnectorManager._pathAdd(connectorStart.shape, path);
      ConnectorManager._pathAdd(connectorEnd.shape, path);
      return path;
    }

    /**
     * reconect to new connector
     * if connectorOld has many connectors - take last
     * @param {IConnectorPath} path
     * @param {IConnectorConnector} connectorNew
     * @returns {void}
     */
  }, {
    key: "replaceEnd",
    value: function replaceEnd(path, connectorNew) {
      var connectorOld = path.end;
      path.update({
        end: {
          position: ConnectorManager._pathPoint(connectorNew),
          dir: connectorNew.dir ? connectorNew.dir : path.end.dir
        },
        endConnector: connectorNew
      });
      if (connectorOld.shape !== connectorNew.shape) {
        if (path.start.shape !== connectorOld.shape) {
          connectorOld.shape.connectedPaths["delete"](path);
        }
        ConnectorManager._pathAdd(connectorNew.shape, path);
      }

      // state
      if (!any(connectorOld.shape.connectedPaths, function (path) {
        return path.start === connectorOld || path.end === connectorOld;
      })) {
        shapeStateDel(connectorOld, 'connected');
      }
      shapeStateAdd(connectorNew, 'connected');
    }

    /**
     * update related with shape paths
     * @param {IConnetorShape} shape
     * @returns {void}
     */
  }, {
    key: "updatePosition",
    value: function updatePosition(shape) {
      if (!any(shape.connectedPaths)) {
        return;
      }
      var shapePosition = shape.positionGet();
      var _iterator = _createForOfIteratorHelper(shape.connectedPaths),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var path = _step.value;
          path.update({
            start: path.start.shape === shape ? {
              position: {
                x: shapePosition.x + path.start.innerPosition.x,
                y: shapePosition.y + path.start.innerPosition.y
              }
            } : null,
            end: path.end.shape === shape ? {
              position: {
                x: shapePosition.x + path.end.innerPosition.x,
                y: shapePosition.y + path.end.innerPosition.y
              }
            } : null
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * @param { IConnetorShape | IConnectorPath } shapeOrPath
     */
  }, {
    key: "del",
    value: function del(shapeOrPath) {
      switch (shapeOrPath.type) {
        case 'shape':
          this._deleteShape( /** @type {IConnetorShape} */shapeOrPath);
          break;
        case 'path':
          this._deletePath( /** @type {IConnectorPath} */shapeOrPath);
          break;
      }
    }

    /**
     * @param {IConnectorPath} path
     * @private
     */
  }, {
    key: "_deletePath",
    value: function _deletePath(path) {
      path.end.shape.connectedPaths["delete"](path);
      if (!any(path.end.shape.connectedPaths, function (pp) {
        return pp.end === path.end;
      })) {
        shapeStateDel(path.end, 'connected');
      }
      path.start.shape.connectedPaths["delete"](path);
      if (path.end.shape.connectable) {
        this._presenter["delete"](path.end.shape);
      }
      this._presenter["delete"](path);
    }

    /**
     * delete shape and related to shape connectors
     * @param {IConnetorShape} shape
     * @returns {void}
     * @private
     */
  }, {
    key: "_deleteShape",
    value: function _deleteShape(shape) {
      this._presenter["delete"](shape);
      if (!any(shape.connectedPaths)) {
        return;
      }
      var _iterator2 = _createForOfIteratorHelper(shape.connectedPaths),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var path = _step2.value;
          this._deletePath(path);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    /**
     * @param {IConnetorShape} shape
     * @param {IConnectorPath} path
     * @private
     */
  }], [{
    key: "_pathAdd",
    value: function _pathAdd(shape, path) {
      if (!shape.connectedPaths) {
        shape.connectedPaths = new Set();
      }
      shape.connectedPaths.add(path);
    }

    /**
     * @param {IConnectorConnector} connector
     * @returns {Point}
     * @private
     */
  }, {
    key: "_pathPoint",
    value: function _pathPoint(connector) {
      var shapePosition = connector.shape.positionGet();
      return {
        x: shapePosition.x + connector.innerPosition.x,
        y: shapePosition.y + connector.innerPosition.y
      };
    }

    /**
     * @param {DiagramPathEndDirection} dir
     * @returns {DiagramPathEndDirection}
     * @private
     */
  }, {
    key: "_dirRevers",
    value: function _dirRevers(dir) {
      switch (dir) {
        case 'bottom':
          return 'top';
        case 'top':
          return 'bottom';
        case 'left':
          return 'right';
        case 'right':
          return 'left';
      }
    }
  }]);
  return ConnectorManager;
}();

/** @implements {IDiagramPrivate} */
var Diagram = /*#__PURE__*/function (_EventTarget) {
  _inherits(Diagram, _EventTarget);
  var _super = _createSuper(Diagram);
  /**
   * @param {IPresenter} pesenter
   * @param {IConnectorManager} connectorManager
   * @param {(diagram: IDiagramPrivate) => Set<IDiagramPrivateEventProcessor>} evtProcessorsFactory
   */
  function Diagram(pesenter, connectorManager, evtProcessorsFactory) {
    var _this;
    _classCallCheck(this, Diagram);
    _this = _super.call(this);

    /** @private */
    _this._presenter = pesenter.on('pointermove', _assertThisInitialized(_this)).on('pointerdown', _assertThisInitialized(_this)).on('pointerup', _assertThisInitialized(_this)).on('pointerenter', _assertThisInitialized(_this))
    // .on('pointerleave', this);
    .on('canvasleave', _assertThisInitialized(_this));

    /** @private */
    _this._connectorManager = connectorManager;

    /**
     * @type {Set<IDiagramPrivateEventProcessor>}
     * @private
     */
    _this._evtProcessors = evtProcessorsFactory(_assertThisInitialized(_this));
    return _this;
  }

  //
  // scale, canvas position
  _createClass(Diagram, [{
    key: "scale",
    get: function get() {
      return this._presenter.scale;
    }
    /**
     * @param {number} scale
     * @param {Point} fixedPoint this point will not chage position while scale
     */
  }, {
    key: "scaleSet",
    value: function scaleSet(scale, fixedPoint) {
      this._presenter.scaleSet(scale, fixedPoint);
      this.dispatch('scale');
    }

    /**	@param {Point} val */
  }, {
    key: "canvasPosition",
    get: function get() {
      return this._presenter.canvasPosition;
    }

    //
    // shapes add/update/remove

    /**
     * @param {DiagramChildAddType} type
     * @param {DiagramShapeAddParam | DiagramPrivateShapeConnectParam} param
     * @returns {IDiagramElement}
     */,
    set: function set(val) {
      this.dispatch('canvmove');
      this._presenter.canvasPosition = val;
    }
  }, {
    key: "add",
    value: function add(type, param) {
      /** @type {IDiagramElement} */
      var element;
      switch (type) {
        case 'shape':
          element = this._presenter.append('shape', /** @type {DiagramShapeAddParam} */param);
          break;
        case 'path':
          element = this._connectorManager.add(connectorGet( /** @type {DiagramPrivateShapeConnectParam} */param.start), connectorGet( /** @type {DiagramPrivateShapeConnectParam} */param.end));
          break;
      }
      this.dispatch('add', element);
      return element;
    }

    /**
     * @param {IPresenterShape} shape
     * @param {DiagramShapeUpdateParam} param
     */
  }, {
    key: "shapeUpdate",
    value: function shapeUpdate(shape, param) {
      shape.update(param);
      if (param.position || param.connectors) {
        this._connectorManager.updatePosition(shape);
      }
    }

    /**
     * @param {IDiagramElement} shape
     * @returns {void}
     */
  }, {
    key: "del",
    value: function del(shape) {
      this.dispatch('del', shape);
      this.selected = null;
      this._connectorManager.del( /** @type { IPresenterShape | IPresenterPath} */shape);
    }

    //
    // pointer events, shape drag/click

    /** @param { CustomEvent<IDiagramPrivateEventDetail> & IDiagramPrivateEvent } evt */
  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      switch (evt.type) {
        case 'pointermove':
        case 'canvasleave':
          this._evtProcess(evt);
          break;
        case 'pointerdown':
          this.activeElement(evt.detail.target);
          this._evtProcess(evt);
          break;
        case 'pointerup':
          this._evtProcess(evt);
          this.activeElement(null);
          break;
        case 'pointerenter':
          if (this._hovered) {
            this._evtProcess({
              type: 'pointerleave',
              detail: {
                target: this._hovered,
                enterTo: evt.detail.target
              }
            });
          }
          this._evtProcess(evt);

          /** @private */
          this._hovered = evt.detail.target;
          break;
      }
    }

    /**
     * @param {IDiagramElement} elem
     * @private
     */
  }, {
    key: "_evtProcGet",
    value: function _evtProcGet(elem) {
      return first(this._evtProcessors, function (proc) {
        return proc.canProcess(elem);
      });
    }

    /**
     * @param { IDiagramPrivateEvent } evt
     * @private
     */
  }, {
    key: "_evtProcess",
    value: function _evtProcess(evt) {
      var _this$_activeProcesso;
      (_this$_activeProcesso = this._activeProcessor) === null || _this$_activeProcesso === void 0 ? void 0 : _this$_activeProcesso.process(this._activeElement, evt);
    }

    /**
     * activeElement track all events
     * @param {IDiagramElement} elem
     * @param {boolean?=} fireUnactive
     */
  }, {
    key: "activeElement",
    value: function activeElement(elem, fireUnactive) {
      if (fireUnactive) {
        this._evtProcess({
          type: 'unactive'
        });
      }

      /**
       * activeElement track all events
       * @type {IDiagramElement}
       * @private
       */
      this._activeElement = elem;

      /**
       * @type {IDiagramPrivateEventProcessor}
       * @private
       */
      this._activeProcessor = this._activeElement ? this._evtProcGet(this._activeElement) : null;
    }

    /** @param {IPresenterStatable} elem */
  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    }

    //
    // subscribe, dispatch

    /**
     * subscribe to event
     * @param {DiagramEventType} evtType
     * @param {EventListenerOrEventListenerObject} listener
     * @param {AddEventListenerOptions?=} options
     */,
    set: function set(elem) {
      if (elem === this._selected) {
        return;
      }
      if (this._selected) {
        this._evtProcGet(this._selected).process(this._selected, {
          type: 'unselect'
        });
      }

      /** @private */
      this._selected = elem;
      if (elem) {
        this.dispatch('select', elem);
        shapeStateAdd(elem, 'selected');
      }
    }
  }, {
    key: "on",
    value: function on(evtType, listener, options) {
      this.addEventListener(evtType, listener, options);
      return this;
    }

    /**
     * @param {DiagramEventType} type
     * @param {IDiagramElement?=} target
     * @returns {boolean}
     */
  }, {
    key: "dispatch",
    value: function dispatch(type, target) {
      return this.dispatchEvent(new CustomEvent(type, {
        cancelable: true,
        detail: {
          target: target
        }
      }));
    }
  }]);
  return Diagram;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/**
 * @param {DiagramPrivateConnectorEnd | IPresenterConnector} startOrEnd
 * @returns {IPresenterConnector}
 */
function connectorGet(startOrEnd) {
  return (/** @type {IPresenterConnector} */startOrEnd.type ? /** @type {IPresenterConnector} */startOrEnd : startOrEnd.shape.connectors.get(startOrEnd.key)
  );
}

/** @implements {ISvgPresenterConnector} */
var SvgConnector = /*#__PURE__*/function () {
  /**
   * @param {object} param
   * @param {SVGGraphicsElement} param.svgEl
   * @param {PresenterConnectorType} param.connectorType
   * @param {string} param.key
   * @param {ISvgPresenterShape} param.shape
   * @param {Point} param.innerPosition
   * @param {DiagramPathEndDirection=} param.dir
   */
  function SvgConnector(_ref) {
    var svgEl = _ref.svgEl,
      connectorType = _ref.connectorType,
      shape = _ref.shape,
      key = _ref.key,
      innerPosition = _ref.innerPosition,
      dir = _ref.dir;
    _classCallCheck(this, SvgConnector);
    this.svgEl = svgEl;

    /**
     * @type {Set<DiagramShapeState>}
     * @private
     */
    this._state = new Set();

    /** @type {DiagramElementType} */
    this.type = 'connector';
    this.connectorType = connectorType;
    this.shape = shape;
    this.key = key;
    this.innerPosition = innerPosition;
    this.dir = dir;
  }

  /**
   * @param {DiagramShapeState} state
   * @returns {boolean}
   */
  _createClass(SvgConnector, [{
    key: "stateHas",
    value: function stateHas(state) {
      return this._state.has(state);
    }

    /**
     * @returns {Set<DiagramShapeState>}
     */
  }, {
    key: "stateGet",
    value: function stateGet() {
      return new Set(this._state);
    }

    /**
     * @param {{ state: Set<DiagramShapeState>; }} param
     */
  }, {
    key: "update",
    value: function update(param) {
      this._state = param.state;
      for (var _i = 0, _arr = ['connected', 'hovered', 'selected']; _i < _arr.length; _i++) {
        var state = _arr[_i];
        stateClassSync(this._state, this.svgEl, /** @type {DiagramShapeState} */state);
      }
      if (param.state.has('hovered')) {
        shapeStateAdd(this.shape, 'hovered');
      }
    }
  }]);
  return SvgConnector;
}();

/**
 * @param {SVGGElement} svgCanvas
 * @param {string} templateKey
 * @returns {SvgShape}
 */
function shapeCreate(svgCanvas, templateKey) {
  // TODO: to reduce DOM changes (for performance) 'shape.update' must go before 'svg.append'
  return new SvgShape({
    svgEl: elemCreateByTemplate(svgCanvas, templateKey)
  });
}

/**
 * @param {WeakMap<SVGGraphicsElement, IDiagramElement>} svgElemToPresenterObj
 * @param {ISvgPresenterShape} shape
 */
function connectorsInit(svgElemToPresenterObj, shape) {
  shape.connectable = shape.svgEl.getAttribute('data-connectable') === 'true';
  var defaultConnectPoint = parseConnectPointAttr(shape.svgEl);
  if (defaultConnectPoint) {
    // !circile link!
    shape.defaultInConnector = connectorCreate(shape.svgEl, shape);
  }

  // create connectors
  shape.svgEl.querySelectorAll('[data-connect]').forEach( /** @param {SVGGraphicsElement} el */function (el) {
    var connector = connectorCreate(el, shape);
    svgElemToPresenterObj.set(el, connector);
    shape.connectors.set(connector.key, connector);
  });
  svgElemToPresenterObj.set(shape.svgEl, shape);
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {ISvgPresenterShape} shape
 * @returns {ISvgPresenterConnector}
 */
function connectorCreate(svgEl, shape) {
  return new SvgConnector({
    svgEl: svgEl,
    connectorType: svgEl.getAttribute('data-connect') === 'in' ? 'in' : 'out',
    shape: shape,
    key: svgEl.getAttribute('data-key'),
    innerPosition: parseConnectPointAttr(svgEl),
    dir: /** @type {DiagramPathEndDirection} */svgEl.getAttribute('data-connect-dir')
  });
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @returns {Point | null}
 */
function parseConnectPointAttr(svgEl) {
  var attr = svgEl.getAttribute('data-connect-point');
  if (!attr) {
    return null;
  }
  var point = svgEl.getAttribute('data-connect-point').split(',');
  return {
    x: parseFloat(point[0]),
    y: parseFloat(point[1])
  };
}

/** @implements {ISvgPresenterPath} */
var SvgPath = /*#__PURE__*/function () {
  /**
   * @param {object} param
   * @param {SVGGElement} param.svgEl
   * @param {PresenterPathEnd} param.start
   * @param {PresenterPathEnd} param.end
   * @param {ISvgPresenterConnector} param.startConnector
   * @param {ISvgPresenterConnector} param.endConnector
   */
  function SvgPath(_ref) {
    var svgEl = _ref.svgEl,
      start = _ref.start,
      end = _ref.end,
      startConnector = _ref.startConnector,
      endConnector = _ref.endConnector;
    _classCallCheck(this, SvgPath);
    /** @type {DiagramElementType} */
    this.type = 'path';
    /** @type {SVGGElement} */
    this.svgEl = svgEl;

    /**
     * @type {SVGPathElement}
     * @private
     */
    this._path = svgEl.querySelector('[data-key="path"]');
    this._outer = svgEl.querySelector('[data-key="outer"]');
    this._selected = svgEl.querySelector('[data-key="selected"]');

    /**
     * @type {SVGGraphicsElement}
     * @private
     */
    this._arrow = svgEl.querySelector('[data-key="arrow"]');

    /**
     * @type {Set<DiagramShapeState>}
     * @private
     */
    this._state = new Set();

    /**
     * @type {PresenterPathEnd}
     * @private
     */
    this._start = {};

    /**
     * @type {PresenterPathEnd}
     * @private
     */
    this._end = {};
    this.update({
      start: start,
      end: end,
      startConnector: startConnector,
      endConnector: endConnector
    });
  }

  /**
   * @param {DiagramShapeState} state
   * @returns {boolean}
   */
  _createClass(SvgPath, [{
    key: "stateHas",
    value: function stateHas(state) {
      return this._state.has(state);
    }

    /** @returns {Set<DiagramShapeState>} */
  }, {
    key: "stateGet",
    value: function stateGet() {
      return new Set(this._state);
    }

    /**
     * @param {SvgPresenterPathUpdateParam} param
     * @returns {void}
     */
  }, {
    key: "update",
    value: function update(param) {
      if (param.start) {
        Object.assign(this._start, param.start);
      }
      if (param.end) {
        Object.assign(this._end, param.end);
        this._arrowUpdate();
      }
      if (param.start || param.end) {
        this._pathUpdate();
      }
      if (param.endConnector && this.end !== param.endConnector) {
        if (this.end) {
          shapeStateDel(this.end, 'selected');
        }
        /** @type {ISvgPresenterConnector} */
        this.end = param.endConnector;
        this.svgEl.parentNode.appendChild(this.svgEl);
      }
      if (param.startConnector) {
        this.start = param.startConnector;
      }
      if (param.state) {
        this._state = param.state;
        for (var _i = 0, _arr = /** @type {DiagramShapeState[]} */['selected', 'disabled']; _i < _arr.length; _i++) {
          var state = _arr[_i];
          stateClassSync(this._state, this.svgEl, state);
          if (param.state.has(state)) {
            shapeStateAdd(this.end.shape.connectable ? this.end.shape : this.end, state);
          } else {
            shapeStateDel(this.end.shape.connectable ? this.end.shape : this.end, state);
          }
        }
      }
    }

    /** @private */
  }, {
    key: "_pathUpdate",
    value: function _pathUpdate() {
      var coef = distance(this._start.position, this._end.position) * 0.5;
      var dAttr = SvgPath._calcDAttr(coef > 70 ? 70 : coef < 15 ? 15 : coef, this._start, this._end);
      this._path.setAttribute('d', dAttr);
      this._outer.setAttribute('d', dAttr);
      this._selected.setAttribute('d', dAttr);
    }
  }, {
    key: "_arrowUpdate",
    value: function _arrowUpdate() {
      svgPositionSet(this._arrow, this._end.position);
      svgRotate(this._arrow, this._end.dir === 'right' ? 180 : this._end.dir === 'left' ? 0 : this._end.dir === 'bottom' ? 270 : 90);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._path = null;
      this._outer = null;
      this._selected = null;
      this._arrow = null;
    }

    /**
     * @param {number} coef
     * @param {PresenterPathEnd} start
     * @param {PresenterPathEnd} end
     * @returns {string}
     * @private
     */
  }], [{
    key: "_calcDAttr",
    value: function _calcDAttr(coef, start, end) {
      return "M ".concat(start.position.x, " ").concat(start.position.y, " C ").concat(SvgPath._cx(start.dir, start.position.x, coef), " ").concat(SvgPath._cy(start.dir, start.position.y, coef), ", ") + "".concat(SvgPath._cx(end.dir, end.position.x, coef), " ").concat(SvgPath._cy(end.dir, end.position.y, coef), ", ").concat(end.position.x, " ").concat(end.position.y);
    }

    /**
     * @param {DiagramPathEndDirection} dir
     * @param {number} x
     * @param {number} coef
     * @return {number}
     * @private
     */
  }, {
    key: "_cx",
    value: function _cx(dir, x, coef) {
      return dir === 'right' || dir === 'left' ? dir === 'right' ? x + coef : x - coef : x;
    }

    /**
     * @param {DiagramPathEndDirection} dir
     * @param {number} y
     * @param {number} coef
     * @return {number}
     * @private
     */
  }, {
    key: "_cy",
    value: function _cy(dir, y, coef) {
      return dir === 'right' || dir === 'left' ? y : dir === 'bottom' ? y + coef : y - coef;
    }
  }]);
  return SvgPath;
}();

/**
 * @param {Point} a
 * @param {Point} b
 * @return {number}
 */
function distance(a, b) {
  var x = a.x - b.x;
  var y = a.y - b.y;
  return Math.sqrt(x * x + y * y);
}

/**
 * @param {ISvgPresenterPathFactoryParam} param
 * @returns {SvgPath}
 */
function pathCreate(param) {
  // TODO: to reduce DOM changes (for performance) 'new SvgPath' must go before 'svg.appendChild'
  return new SvgPath({
    svgEl: elemCreateByTemplate(param.svgCanvas, param.createParams.templateKey),
    start: param.createParams.start,
    end: param.createParams.end,
    startConnector: param.createParams.startConnector,
    endConnector: param.createParams.endConnector
  });
}

/**
 * Base decorator for editable elements
 * - call 'onEdit' when element enter in edit mode - on second click on a shape
 * - call 'onEditLeave' when element leave edit mode
 * - inheritors must override 'onEdit', 'onEditLeave' methods
 */
var SvgElementEditableAbstract = /*#__PURE__*/function () {
  /**
   * @param {IPresenterStatable & ISvgPresenterElement} svgElement
   */
  function SvgElementEditableAbstract(svgElement) {
    _classCallCheck(this, SvgElementEditableAbstract);
    this.svgElement = svgElement;
    this.type = svgElement.type;
    this.svgEl = this.svgElement.svgEl;
    this.svgElement.svgEl.addEventListener('pointerdown', this);
    this.svgElement.svgEl.addEventListener('pointerup', this);
    this.svgElement.svgEl.addEventListener('click', this);
  }

  /**
   * @param {{ state?: Set<DiagramShapeState> }} param
   */
  _createClass(SvgElementEditableAbstract, [{
    key: "update",
    value: function update(param) {
      if (param.state && this._isEditState) {
        this._isEditState = false;
        this.onEditLeave();
      }
      if (param.state) {
        this._isSelectedOnDown = false;
      }
      this.svgElement.update(param);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._isEditState) {
        this.onEditLeave();
      }
      if (this.svgElement.dispose) {
        this.svgElement.dispose();
      }
    }

    /**
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     */
  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      if (evt.target.hasAttribute('data-evt-no-click') || document.elementFromPoint(evt.clientX, evt.clientY) !== evt.target) {
        return;
      }
      if (evt.type === 'click') {
        this.onClick(evt, this._isEditState);
        return;
      }
      if (this._isEditState) {
        return;
      }
      switch (evt.type) {
        case 'pointerdown':
          /** @private */
          this._isSelectedOnDown = this.svgElement.stateGet().has('selected');
          break;
        case 'pointerup':
          if (this._isSelectedOnDown) {
            /** @private */
            this._isEditState = true;
            this.onEdit(evt);
          }
          break;
      }
    }

    /**
     * when shape enter edit mode
     * override this method
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     */
  }, {
    key: "onEdit",
    value: function onEdit(evt) {}

    /**
     * when shape leave edit mode
     * override this method
     */
  }, {
    key: "onEditLeave",
    value: function onEditLeave() {}

    /**
     * click on shape
     * override this method
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     * @param {boolean} isEditState
     */
  }, {
    key: "onClick",
    value: function onClick(evt, isEditState) {}
  }]);
  return SvgElementEditableAbstract;
}();

/**
 * Base decorator for editable shapes
 * - call 'onEdit' when shape enter in edit mode - on second click on a shape
 * - call 'onEditLeave' when shape leave edit mode
 * - inheritors must override 'onEdit', 'onEditLeave' methods
 * @implements {IPresenterShape}
 */
var SvgShapeEditableAbstractDecorator = /*#__PURE__*/function (_SvgElementEditableAb) {
  _inherits(SvgShapeEditableAbstractDecorator, _SvgElementEditableAb);
  var _super = _createSuper(SvgShapeEditableAbstractDecorator);
  /**
   * @param {ISvgPresenterShape} svgShape
   */
  function SvgShapeEditableAbstractDecorator(svgShape) {
    var _this;
    _classCallCheck(this, SvgShapeEditableAbstractDecorator);
    _this = _super.call(this, svgShape);

    // ISvgPresenterShape
    _this.connectable = /** @type {ISvgPresenterShape} */_this.svgElement.connectable;
    _this.defaultInConnector = /** @type {ISvgPresenterShape} */_this.svgElement.defaultInConnector;
    _this.connectors = /** @type {ISvgPresenterShape} */_this.svgElement.connectors;
    return _this;
  }

  /**
   * @param {DiagramShapeState} state
   */
  _createClass(SvgShapeEditableAbstractDecorator, [{
    key: "stateHas",
    value: function stateHas(state) {
      return this.svgElement.stateHas(state);
    }
  }, {
    key: "stateGet",
    value: function stateGet() {
      return this.svgElement.stateGet();
    }
  }, {
    key: "positionGet",
    value: function positionGet() {
      return (/** @type {ISvgPresenterShape} */this.svgElement.positionGet()
      );
    }

    /**
     * @param {DiagramShapeUpdateParam} param
     */
  }, {
    key: "update",
    value: function update(param) {
      if (param.state && this._isEditState) {
        this._isEditState = false;
        this.onEditLeave();
      }
      _get(_getPrototypeOf(SvgShapeEditableAbstractDecorator.prototype), "update", this).call(this, param);
    }
  }]);
  return SvgShapeEditableAbstractDecorator;
}(SvgElementEditableAbstract);

/**
 * Create teaxtArea above SVGTextElement 'textEl'
 * update 'textEl' with text from teaxtArea
 * resize teaxtArea - so teaxtArea always cover all 'textEl'
 * @param {SVGTextElement} textEl
 * @param {{lineHeight:number, verticalMiddle?:number}} textParam
 * @param {string} val
 * @param {{(val:string):void}} onchange
 * @param {{(val:string):void}} onblur
 * @returns {SVGForeignObjectElement}
 */
function textareaCreate(textEl, textParam, val, onchange, onblur) {
  var foreign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
  var textarea = document.createElement('textarea');
  textarea.style.caretColor = textEl.getAttribute('fill');
  textarea.value = val;
  textarea.oninput = function () {
    svgTextDraw(textEl, textarea.value, textParam);
    foreignWidthSet(textEl, foreign, textarea, textareaPaddingAndBorder, textareaStyle.textAlign);
    onchange(textarea.value);
  };
  textarea.onblur = function () {
    onblur(textarea.value);
  };
  textarea.onpointerdown = function (evt) {
    evt.stopImmediatePropagation();
  };
  foreign.appendChild(textarea);
  textEl.parentElement.appendChild(foreign);
  var textareaStyle = getComputedStyle(textarea);
  // must be in px
  var textareaPaddingAndBorder = parseInt(textareaStyle.padding) + parseInt(textareaStyle.borderWidth);
  foreignWidthSet(textEl, foreign, textarea, textareaPaddingAndBorder, textareaStyle.textAlign);
  textarea.focus();
  return foreign;
}

/**
 * @param {SVGTextElement} textEl
 * @param {SVGForeignObjectElement} foreign
 * @param {HTMLTextAreaElement} textarea
 * @param {number} textareaPaddingAndBorder
 * @param {string} textAlign
 */
function foreignWidthSet(textEl, foreign, textarea, textareaPaddingAndBorder, textAlign) {
  var textBbox = textEl.getBBox();
  var width = textBbox.width + 20; // +20 paddings for iPhone

  foreign.width.baseVal.value = width + 2 * textareaPaddingAndBorder + 2; // +2 magic number for FireFox
  foreign.x.baseVal.value = textBbox.x - textareaPaddingAndBorder - (textAlign === 'center' ? 10 : 0);
  foreign.height.baseVal.value = textBbox.height + 2 * textareaPaddingAndBorder + 3; // +3 magic number for FireFox
  foreign.y.baseVal.value = textBbox.y - textareaPaddingAndBorder;
  textarea.style.width = "".concat(width, "px");
  textarea.style.height = "".concat(textBbox.height, "px");
}

// utils encapsulate work with texteditor attributes and class names

/**
 * show text editor if 'targetEl' is marked for text editor
 * set 'props' with text from texteditor
 *
 * function encapsulate parsing text editor attributes
 *
 * Markup example:
 * <rect data-text-for="text" ... />
 * <text data-key="text" data-line-height="20" data-vertical-middle="35" text-anchor="middle"
 * 	alignment-baseline="central" ...>&nbsp;</text>
 *
 * @param {SVGGraphicsElement} svgShapeEl
 * @param {DiagramShapeProps} props
 * @param {SVGGraphicsElement} targetEl
 * @param {{(textEl:SVGTextElement, updatedProp:DiagramShapeProps):void}} onchange
 * @param {{():void}} onblur
 * @returns {SVGForeignObjectElement}
 */
function textEditorShow(svgShapeEl, props, targetEl, onchange, onblur) {
  var _props$textKey;
  /** @type {SVGRectElement} */
  var placeEl;
  switch (targetEl.tagName) {
    case 'tspan':
      placeEl = svgShapeEl.querySelector("[data-text-for=".concat(targetEl.parentElement.getAttribute('data-key'), "]"));
      break;
    case 'text':
      placeEl = svgShapeEl.querySelector("[data-text-for=".concat(targetEl.getAttribute('data-key'), "]"));
      break;
    default:
      if (targetEl.getAttribute('data-text-for')) {
        placeEl = /** @type {SVGRectElement} */targetEl;
      }
      break;
  }
  if (!placeEl) {
    return;
  }
  placeEl.classList.remove('empty');
  var textKey = placeEl.getAttribute('data-text-for');

  /** @type {SVGTextElement} */
  var textEl = svgShapeEl.querySelector("[data-key=".concat(textKey, "]"));
  return textareaCreate(
  // textEl
  textEl,
  // textParam
  textParamsParse(textEl), // val
  (_props$textKey = props[textKey]) === null || _props$textKey === void 0 ? void 0 : _props$textKey.textContent.toString(),
  // onchange
  function (val) {
    onchange(textEl, _defineProperty({}, textKey, {
      textContent: val
    }));
  },
  // onblur
  function (val) {
    if (!val) {
      placeEl.classList.add('empty');
    } else {
      placeEl.classList.remove('empty');
    }
    onblur();
  });
}

// currnelty don't used
// /**
//  * @param {SVGGraphicsElement} svgShapeEl
//  * @param {DiagramShapeProps} props
//  */
// export function textEditorHighlightEmpty(svgShapeEl, props) {
// 	svgShapeEl.querySelectorAll('[data-text-for]').forEach(el => {
// 		if (!props[el.getAttribute('data-text-for')]?.textContent) {
// 			el.classList.add('empty');
// 		}
// 	});
// }

var SvgShapeTextEditorDecorator = /*#__PURE__*/function (_SvgShapeEditableAbst) {
  _inherits(SvgShapeTextEditorDecorator, _SvgShapeEditableAbst);
  var _super = _createSuper(SvgShapeTextEditorDecorator);
  /**
   * @param {ISvgPresenterShape} svgShape
   * @param {DiagramShapeProps} txtProps
   * Describes text-editors.
   * Example: { text: { textContent: 'Title' } }
   * <text data-key="text" ...> will get texteditor functionality and filled with 'Title'
   * See textEditorShow function
   */
  function SvgShapeTextEditorDecorator(svgShape, txtProps) {
    var _this;
    _classCallCheck(this, SvgShapeTextEditorDecorator);
    _this = _super.call(this, svgShape);

    /** @type {DiagramShapeProps} */
    _this.txtProps = Object.assign({}, txtProps); // TODO: save only 'textContent' props
    return _this;
  }

  /**
   * @param {DiagramShapeUpdateParam} param
   */
  _createClass(SvgShapeTextEditorDecorator, [{
    key: "update",
    value: function update(param) {
      if (param.props) {
        Object.assign(this.txtProps, param.props); // TODO: save only 'textContent' props
      }

      // currnelty don't used
      // if (param.state && param.state.has('selected') && !this.stateGet().has('selected')) {
      // 	textEditorHighlightEmpty(this.svgEl, this.txtProps);
      // }

      _get(_getPrototypeOf(SvgShapeTextEditorDecorator.prototype), "update", this).call(this, param);
    }

    /**
     * click on shape
     * override this method
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     * @param {boolean} isEditState
     */
  }, {
    key: "onClick",
    value: function onClick(evt, isEditState) {
      if (isEditState) {
        this._textEditorShow(evt);
      }
    }

    /**
     * when shape leave edit mode
     * override this method
     */
  }, {
    key: "onEditLeave",
    value: function onEditLeave() {
      this._textEditorDel();
    }

    /**
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     * @private
     */
  }, {
    key: "_textEditorShow",
    value: function _textEditorShow(evt) {
      var _this2 = this;
      if (this._textEditor) {
        return;
      }

      /** @private */
      this._textEditor = textEditorShow(this.svgEl, this.txtProps, evt.target,
      // onchange
      function (textEl, updatedProp) {
        Object.assign(_this2.txtProps, updatedProp);
        _this2.onTextChange(textEl, updatedProp);
      },
      // onblur
      function (_) {
        _this2._textEditorDel();
      });
    }

    /**
     * when text changed
     * can be overridden
     * @param {SVGTextElement} textEl
     * @param {DiagramShapeProps} updatedProp
     */
  }, {
    key: "onTextChange",
    value: function onTextChange(textEl, updatedProp) {}

    /** @private */
  }, {
    key: "_textEditorDel",
    value: function _textEditorDel() {
      if (this._textEditor && !this._lock) {
        /** @private */
        this._lock = true;
        this._textEditor.remove();
        this._textEditor = null;
        this._lock = false;
      }
    }
  }]);
  return SvgShapeTextEditorDecorator;
}(SvgShapeEditableAbstractDecorator);

var ShapeSettings = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ShapeSettings, _HTMLElement);
  var _super = _createSuper(ShapeSettings);
  function ShapeSettings() {
    _classCallCheck(this, ShapeSettings);
    return _super.apply(this, arguments);
  }
  _createClass(ShapeSettings, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;
      /** @private */
      var shadow = this.attachShadow({
        mode: 'closed'
      });
      shadow.innerHTML = "<style>\n\t\t\t.ln { display: flex;}\n\t\t\t.ln > div {\n\t\t\t\theight: 24px;\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\t\t\t[data-cmd] { cursor: pointer; }\n\n\t\t\t.crcl {\n\t\t\t\twidth: 25px;\n\t\t\t\theight: 25px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\n\t\t\t.props {\n\t\t\t\tpadding-bottom: 10px;\n\t\t\t}\n\t\t</style>\n\t\t<div class=\"props\" style=\"display: none;\">\n\t\t\t<div class=\"ln\">\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-red\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #E74C3C\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-orange\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #ff6600\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-green\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #19bc9b\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"ln\">\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-blue\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #1aaee5\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-dblue\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #1D809F\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t\t<div data-cmd=\"style\" data-cmd-arg=\"cl-dgray\">\n\t\t\t\t\t<div class=\"crcl\" style=\"background: #495057\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"ln\">\n\t\t\t<div data-cmd=\"toggle\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z\" fill=\"rgba(52,71,103,1)\"/></svg>\n\t\t\t</div>\n\t\t\t<div data-cmd=\"del\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z\" fill=\"rgba(52,71,103,1)\"/></svg>\n\t\t\t</div>\n\t\t</div>";
      shadow.querySelectorAll('[data-cmd]').forEach(function (el) {
        return el.addEventListener('click', _this);
      });

      /** @private */
      this._parent = shadow.host.parentElement;

      /**
       * @type {HTMLDivElement}
       * @private
       */
      this._props = shadow.querySelector('.props');
    }

    /** @param {PointerEvent & { currentTarget: Element }} evt */
  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      var cmd = evt.currentTarget.getAttribute('data-cmd');
      if (cmd === 'toggle') {
        this._toggle();
        return;
      }
      this.dispatchEvent(new CustomEvent('cmd', {
        cancelable: true,
        detail: {
          cmd: cmd,
          arg: evt.currentTarget.getAttribute('data-cmd-arg')
        }
      }));
    }

    /** @private */
  }, {
    key: "_toggle",
    value: function _toggle() {
      if (this._props.style.display === 'none') {
        this._props.style.display = 'unset';
        this._parent.style.top = "".concat(this._parent.getBoundingClientRect().top + window.scrollY - 88, "px"); // window.scrollY fix IPhone keyboard
      } else {
        this._props.style.display = 'none';
        this._parent.style.top = "".concat(this._parent.getBoundingClientRect().top + window.scrollY + 88, "px"); // window.scrollY fix IPhone keyboard
      }
    }
  }]);
  return ShapeSettings;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('ap-shape-settings', ShapeSettings);

var pnlSymbol = Symbol(0);

/** @typedef { any & {[pnlSymbol]?: HTMLDivElement} } panelHost */

/**
 * Show panel with del button
 * @param {panelHost} parent
 * @param {number} x
 * @param {number} y
 * @param {Function} onclick
*/
function pnlDelShow(parent, x, y, onclick) {
  pnlCreate(parent, x, y, null, 10);
  parent[pnlSymbol].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgba(52,71,103,1)"/></svg>';
  parent[pnlSymbol].onclick = function () {
    pnlDel(parent);
    onclick();
  };
}

/**
 * @param {panelHost} parent
 * @param {number} bottomX positon of the bottom left corner of the panel
 * @param {number} bottomY positon of the bottom left corner of the panel
 */
function pnlMove(parent, bottomX, bottomY) {
  parent[pnlSymbol].style.left = "".concat(bottomX, "px");
  parent[pnlSymbol].style.top = "".concat(window.scrollY + bottomY - parent[pnlSymbol].getBoundingClientRect().height, "px"); // window.scrollY fix IPhone keyboard
}

/** @param {panelHost} parent */
function pnlDel(parent) {
  if (parent[pnlSymbol]) {
    parent[pnlSymbol].remove();
    parent[pnlSymbol] = null;
  }
}

/**
 * @param {panelHost} parent
 * @param {number} x
 * @param {number} y
 * @param {HTMLElement} htmlElem
 * @param {number} padding
 * @return {HTMLDivElement}
 */
function pnlCreate(parent, x, y) {
  var htmlElem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var div = document.createElement('div');
  div.style.cssText = "position: fixed; left: ".concat(x, "px; top: ").concat(y, "px; padding: ").concat(padding, "px; box-shadow: 0px 0px 58px 2px rgb(34 60 80 / 20%); border-radius: 16px; background-color: rgba(255,255,255, .9);");
  if (htmlElem) {
    div.append(htmlElem);
  }
  parent[pnlSymbol] = div;
  document.body.append(parent[pnlSymbol]);
  return div;
}

/** @implements {IAppShape} */
var AppShapeEditorDecorator = /*#__PURE__*/function (_SvgShapeTextEditorDe) {
  _inherits(AppShapeEditorDecorator, _SvgShapeTextEditorDe);
  var _super = _createSuper(AppShapeEditorDecorator);
  /**
   * @param {IDiagram} diagram
   * @param {ISvgPresenterShape} svgShape
   * @param {IAppShapeData} addParam
   */
  function AppShapeEditorDecorator(diagram, svgShape, addParam) {
    var _addParam$styles;
    var _this;
    _classCallCheck(this, AppShapeEditorDecorator);
    _this = _super.call(this, svgShape,
    // SvgShapeTextEditorDecorator is common class. It use universal description for texteditors
    // { text: { textContent: addParam.detail } }

    // TODO: here pass null, because shapefactory call update() right after creation of the shape.
    // don't remeber why shapefactory do so
    null);
    _this.diagram = diagram;

    /** @private */
    _this._templateKey = addParam.templateKey;
    if (((_addParam$styles = addParam.styles) === null || _addParam$styles === void 0 ? void 0 : _addParam$styles.length) > 0) {
      _this._styleSet(addParam.styles[0]);
    }
    return _this;
  }

  /**
   * @param {IAppShapeData & DiagramShapeUpdateParam} param
   */
  _createClass(AppShapeEditorDecorator, [{
    key: "update",
    value: function update(param) {
      var _this$txtProps$text, _this$txtProps$text2;
      if (param.detail) {
        if (!param.props) {
          param.props = {};
        }
        Object.assign(param.props, {
          text: {
            textContent: param.detail
          }
        });
      }
      var oldText = (_this$txtProps$text = this.txtProps.text) === null || _this$txtProps$text === void 0 ? void 0 : _this$txtProps$text.textContent;
      _get(_getPrototypeOf(AppShapeEditorDecorator.prototype), "update", this).call(this, param);
      if (oldText !== ((_this$txtProps$text2 = this.txtProps.text) === null || _this$txtProps$text2 === void 0 ? void 0 : _this$txtProps$text2.textContent)) {
        // notify inheritors
        // TODO: maybe move this to SvgShapeTextEditorDecorator
        this.onTextChange(this.svgEl.querySelector('[data-key="text"]'), null);
      }
    }

    /**
     * when shape enter edit mode
     * override this method
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     */
  }, {
    key: "onEdit",
    value: function onEdit(evt) {
      this.svgEl.classList.add('highlighted');
      this._panelShow();
    }

    /**
     * when shape leave edit mode
     * override this method
     */
  }, {
    key: "onEditLeave",
    value: function onEditLeave() {
      _get(_getPrototypeOf(AppShapeEditorDecorator.prototype), "onEditLeave", this).call(this);
      this.svgEl.classList.remove('highlighted');
      pnlDel(this);
      //@ts-ignore
      this.diagram.dispatch('text', this.svgElement);
    }

    /** @private */
  }, {
    key: "_panelShow",
    value: function _panelShow() {
      var _this2 = this;
      var shapeSettings = new ShapeSettings();
      shapeSettings.addEventListener('cmd', /** @param {CustomEvent} evt */function (evt) {
        switch (evt.detail.cmd) {
          case 'del':
            pnlDel(_this2);
            _this2.diagram.del(_this2);
            break;
          case 'style':
            _this2._styleSet(evt.detail.arg);
            break;
        }
      });
      pnlCreate(this, 0, 0, shapeSettings);
      this.panelUpdPos();
    }

    /**
     * @param {string} style
     * @private
     */
  }, {
    key: "_styleSet",
    value: function _styleSet(style) {
      this.svgEl.classList.remove(this._style);

      /**
       * @type {string}
       * @private
       */
      this._style = style;
      this.svgEl.classList.add(this._style);
    }

    /** update panel position */
  }, {
    key: "panelUpdPos",
    value: function panelUpdPos() {
      if (this[pnlSymbol]) {
        var position = this.svgEl.getBoundingClientRect();
        pnlMove(this, position.left + 10, position.top + 10);
      }
    }

    /** @return {IAppShapeData} */
  }, {
    key: "toJson",
    value: function toJson() {
      var _this$txtProps$text3;
      var position = this.positionGet();
      position.x = Math.trunc(position.x);
      position.y = Math.trunc(position.y);
      return {
        templateKey: this._templateKey,
        position: position,
        detail: /** @type {string} */(_this$txtProps$text3 = this.txtProps.text) === null || _this$txtProps$text3 === void 0 ? void 0 : _this$txtProps$text3.textContent,
        styles: this._style ? [this._style] : null
      };
    }
  }]);
  return AppShapeEditorDecorator;
}(SvgShapeTextEditorDecorator);

/**
 * @param {DOMRect} box
 * @param {number?=} padding
 * @returns {Point[]}
 */
function boxPoints(box) {
  var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var leftX = box.x - padding;
  var rightX = box.x + box.width + padding;
  var topY = box.y - padding;
  var bottomY = box.y + box.height + padding;
  return [{
    x: leftX,
    y: topY
  }, {
    x: rightX,
    y: topY
  }, {
    x: leftX,
    y: bottomY
  }, {
    x: rightX,
    y: bottomY
  }];
}

/**
 * get the ceiling for a number {val} with a given floor height {step}
 * @param {number} min
 * @param {number} step
 * @param {number} val
 */
function ceil(min, step, val) {
  if (val <= min) {
    return min;
  }
  return min + Math.ceil((val - min) / step) * step;
}

/**
 * Find minimal val when !isOutFunc()
 * @param {number} minVal
 * @param {number} incrementVal
 * @param {number} currentVal
 * @param {(val:number)=> boolean} isOutFunc
 * @returns {number|null}
 */
function resizeAlg(minVal, incrementVal, currentVal, isOutFunc) {
  var testVal = currentVal;
  if (isOutFunc(testVal)) {
    do {
      testVal += incrementVal;
    } while (isOutFunc(testVal));
    return testVal;
  }
  if (minVal === testVal) {
    return null;
  }
  do {
    testVal -= incrementVal;
  } while (minVal <= testVal && !isOutFunc(testVal));
  testVal += incrementVal;
  return currentVal !== testVal ? testVal : null;
}

var AppCircleDecorator = /*#__PURE__*/function (_AppShapeEditorDecora) {
  _inherits(AppCircleDecorator, _AppShapeEditorDecora);
  var _super = _createSuper(AppCircleDecorator);
  /**
   * @param {IDiagram} diagram
   * @param {ISvgPresenterShape} svgShape
   * @param {IAppShapeData} addParam
   */
  function AppCircleDecorator(diagram, svgShape, addParam) {
    var _this;
    _classCallCheck(this, AppCircleDecorator);
    _this = _super.call(this, diagram, svgShape, addParam);

    /** @private */
    _this._currentRadius = 48;
    return _this;
  }

  /**
   * @param {SVGTextElement} textEl
   * @param {DiagramShapeProps} updatedProp
   * private
   */
  _createClass(AppCircleDecorator, [{
    key: "onTextChange",
    value: function onTextChange(textEl, updatedProp) {
      var maxRadiusQrt = 0;
      var _iterator = _createForOfIteratorHelper(textEl.getElementsByTagName('tspan')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var span = _step.value;
          var _iterator2 = _createForOfIteratorHelper(boxPoints(span.getBBox())),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var point = _step2.value;
              var r = Math.pow(point.x, 2) + Math.pow(point.y, 2);
              if (r > maxRadiusQrt) {
                maxRadiusQrt = r;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var newRadius = ceil(48, 24, Math.sqrt(maxRadiusQrt));
      if (newRadius !== this._currentRadius) {
        this._currentRadius = newRadius;
        this._resize(newRadius);
        this.panelUpdPos();
      }
    }

    /**
     * @private
     * @param {number} mainRadius
     */
  }, {
    key: "_resize",
    value: function _resize(mainRadius) {
      var radNegative = -1 * mainRadius;
      var cons = {
        right: {
          cx: mainRadius
        },
        left: {
          cx: radNegative
        },
        bottom: {
          cy: mainRadius
        },
        top: {
          cy: radNegative
        }
      };
      var consData = {
        right: {
          innerPosition: {
            x: mainRadius,
            y: 0
          }
        },
        left: {
          innerPosition: {
            x: radNegative,
            y: 0
          }
        },
        bottom: {
          innerPosition: {
            x: 0,
            y: mainRadius
          }
        },
        top: {
          innerPosition: {
            x: 0,
            y: radNegative
          }
        }
      };
      this.diagram.shapeUpdate(this, {
        // visability
        props: {
          main: {
            r: mainRadius
          },
          outer: {
            r: mainRadius + 24
          },
          // out connectors
          outright: cons.right,
          outleft: cons.left,
          outbottom: cons.bottom,
          outtop: cons.top,
          // in connectors
          inright: cons.right,
          inleft: cons.left,
          inbottom: cons.bottom,
          intop: cons.top
        },
        // connectors data
        connectors: {
          // out
          outright: consData.right,
          outleft: consData.left,
          outbottom: consData.bottom,
          outtop: consData.top,
          // in
          inright: consData.right,
          inleft: consData.left,
          inbottom: consData.bottom,
          intop: consData.top
        }
      });
    }
  }]);
  return AppCircleDecorator;
}(AppShapeEditorDecorator);

var AppRectDecorator = /*#__PURE__*/function (_AppShapeEditorDecora) {
  _inherits(AppRectDecorator, _AppShapeEditorDecora);
  var _super = _createSuper(AppRectDecorator);
  /**
   * @param {IDiagram} diagram
   * @param {ISvgPresenterShape} svgShape
   * @param {IAppShapeData} addParam
   * @param { {resizeFromCenter:boolean}?= } rectProps
   */
  function AppRectDecorator(diagram, svgShape, addParam, rectProps) {
    var _rectProps$resizeFrom;
    var _this;
    _classCallCheck(this, AppRectDecorator);
    _this = _super.call(this, diagram, svgShape, addParam);

    /** @private */
    _this._minWidth = _this._currentWidth = 96;

    /** @private */
    _this._minHeight = _this._currentHeight = 48;

    /**
     * outer svg elem position
     * @private
     */
    _this._outerPost = {
      x: -24,
      y: -24
    };

    /** @private */
    _this._resizeFromCenter = (_rectProps$resizeFrom = rectProps === null || rectProps === void 0 ? void 0 : rectProps.resizeFromCenter) !== null && _rectProps$resizeFrom !== void 0 ? _rectProps$resizeFrom : true;
    return _this;
  }

  /**
   * @param {SVGTextElement} textEl
   * @param {DiagramShapeProps} updatedProp
   * private
   */
  _createClass(AppRectDecorator, [{
    key: "onTextChange",
    value: function onTextChange(textEl, updatedProp) {
      var maxWidth = 0;
      var _iterator = _createForOfIteratorHelper(textEl.getElementsByTagName('tspan')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var span = _step.value;
          var width = span.getBBox().width + 4 + (
          // 2 padding
          this._resizeFromCenter ? 0 : 6); // 6 left margin for textinput
          if (width > maxWidth) {
            maxWidth = width;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var newWidth = ceil(this._minWidth, 48, maxWidth);
      var newHeight = ceil(this._minHeight, 48, textEl.getBBox().height + 4); // + (this._resizeFromCenter ? 0 : 20)); // 2 padding

      if (newWidth !== this._currentWidth || newHeight !== this._currentHeight) {
        this._currentWidth = newWidth;
        this._currentHeight = newHeight;
        this._resize(newWidth, newHeight);
        this.panelUpdPos();
      }
    }

    /**
     * @private
     * @param {number} width
     * @param {number} height
     */
  }, {
    key: "_resize",
    value: function _resize(width, height) {
      var rect = this._rectCalc(width, height, {
        x: 0,
        y: 0
      });
      var cons = {
        r: {
          cx: width + rect.x,
          cy: height / 2 + rect.y
        },
        l: {
          cx: rect.x,
          cy: height / 2 + rect.y
        },
        b: {
          cx: width / 2 + rect.x,
          cy: height + rect.y
        },
        t: {
          cx: width / 2 + rect.x,
          cy: rect.y
        }
      };
      var consData = {
        right: {
          innerPosition: {
            x: cons.r.cx,
            y: cons.r.cy
          }
        },
        left: {
          innerPosition: {
            x: cons.l.cx,
            y: cons.l.cy
          }
        },
        bottom: {
          innerPosition: {
            x: cons.b.cx,
            y: cons.b.cy
          }
        },
        top: {
          innerPosition: {
            x: cons.t.cx,
            y: cons.t.cy
          }
        }
      };
      this.diagram.shapeUpdate(this, {
        // visability
        props: {
          main: rect,
          outer: this._rectCalc(width + 48, height + 48, this._outerPost),
          // out connectors
          outright: cons.r,
          outleft: cons.l,
          outbottom: cons.b,
          outtop: cons.t,
          // in connectors
          inright: cons.r,
          inleft: cons.l,
          inbottom: cons.b,
          intop: cons.t
        },
        // connectors data
        connectors: {
          // out
          outright: consData.right,
          outleft: consData.left,
          outbottom: consData.bottom,
          outtop: consData.top,
          // in
          inright: consData.right,
          inleft: consData.left,
          inbottom: consData.bottom,
          intop: consData.top
        }
      });
    }

    /**
     * @private
     * @param {number} width
     * @param {number} height
     * @param {Point} currentPosition
     * @returns {{x:number, y:number, width:number, height:number}}
     */
  }, {
    key: "_rectCalc",
    value: function _rectCalc(width, height, currentPosition) {
      return this._resizeFromCenter ? rectCalc(this._minWidth, this._minHeight, width, height) : {
        x: currentPosition.x,
        y: (this._minHeight - height) / 2,
        width: width,
        height: height
      };
    }
  }]);
  return AppRectDecorator;
}(AppShapeEditorDecorator);

/**
 * @param {number} baseWidth
 * @param {number} baseHeight
 * @param {number} width
 * @param {number} height
 * @returns {{x:number, y:number, width:number, height:number}}
 */
function rectCalc(baseWidth, baseHeight, width, height) {
  return {
    y: (baseHeight - height) / 2,
    x: (baseWidth - width) / 2,
    width: width,
    height: height
  };
}

/**
 * Check if text is out of shape
 * @param {SVGTextElement} textEl
 * @param {SVGGeometryElement} shapeEl
 * @param {number} padding
 * @returns {boolean}
 */
function svgTextIsOut(textEl, shapeEl) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return any(textEl.getElementsByTagName('tspan'), function (span) {
    var box = span.getBBox();
    var leftX = box.x - padding;
    var rightX = box.x + box.width + padding;
    var topY = box.y - padding;
    var bottomY = box.y + box.height + padding;
    return !isPointInShape(shapeEl, leftX, topY) ||
    // top left
    !isPointInShape(shapeEl, rightX, topY) ||
    // top right
    !isPointInShape(shapeEl, leftX, bottomY) ||
    // bottom left
    !isPointInShape(shapeEl, rightX, bottomY); // bottom right
  });
}

/**
 * @param {SVGGeometryElement} shapeEl
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */
function isPointInShape(shapeEl, x, y) {
  var point = shapeEl.ownerSVGElement.createSVGPoint();
  point.x = x;
  point.y = y;
  return shapeEl.isPointInFill(point) || shapeEl.isPointInStroke(point);
}

var AppRhombDecorator = /*#__PURE__*/function (_AppShapeEditorDecora) {
  _inherits(AppRhombDecorator, _AppShapeEditorDecora);
  var _super = _createSuper(AppRhombDecorator);
  /**
   * @param {IDiagram} diagram
   * @param {ISvgPresenterShape} svgShape
   * @param {IAppShapeData} addParam
   */
  function AppRhombDecorator(diagram, svgShape, addParam) {
    var _this;
    _classCallCheck(this, AppRhombDecorator);
    _this = _super.call(this, diagram, svgShape, addParam);

    /** @private */
    _this._width = 78;
    return _this;
  }

  /**
   * @param {SVGTextElement} textEl
   * @param {DiagramShapeProps} updatedProp
   * private
   */
  _createClass(AppRhombDecorator, [{
    key: "onTextChange",
    value: function onTextChange(textEl, updatedProp) {
      var _this2 = this;
      if (!this._testPath) {
        /** @private */
        this._testPath = /** @type {SVGPathElement}} */cloneUnshiftTransparent(this.svgEl, 'main');
      }
      var newWidth = resizeAlg(
      // minVal 24 * 4 - 18 (stroke-width="18")
      78,
      // incrementVal, 24 * 2 = 48
      48,
      // currentVal
      this._width,
      // isOutFunc
      function (width) {
        _this2._testPath.setAttribute('d', rhombPathCalc(78, 78, width, 9)); // 18 (stroke-width="18") / 2
        return svgTextIsOut(textEl, _this2._testPath);
      });
      if (newWidth) {
        this._width = newWidth;
        this._resize(newWidth);
        this.panelUpdPos();
      }
    }

    /**
     * @param {number} width
     */
  }, {
    key: "_resize",
    value: function _resize(width) {
      var rhomb = {
        d: rhombPathCalc(78, 78, width, 9)
      };
      var connectors = rhombCalc(96, 96, width + 18, 0); // 96 = 24 * 4
      var cons = {
        left: {
          cx: connectors.l.x
        },
        right: {
          cx: connectors.r.x
        },
        top: {
          cy: connectors.t.y
        },
        bottom: {
          cy: connectors.b.y
        }
      };
      var consData = {
        left: {
          innerPosition: connectors.l
        },
        right: {
          innerPosition: connectors.r
        },
        top: {
          innerPosition: connectors.t
        },
        bottom: {
          innerPosition: connectors.b
        }
      };
      this.diagram.shapeUpdate(this, {
        // visability
        props: {
          main: rhomb,
          outer: {
            d: rhombPathCalc(78, 78, width + 48 + 18, 9)
          },
          border: rhomb,
          // out connectors
          outleft: cons.left,
          outright: cons.right,
          outtop: cons.top,
          outbottom: cons.bottom,
          // in connectors
          inleft: cons.left,
          inright: cons.right,
          intop: cons.top,
          inbottom: cons.bottom
        },
        // connectors data
        connectors: {
          // out
          outleft: consData.left,
          outright: consData.right,
          outtop: consData.top,
          outbottom: consData.bottom,
          // in
          inleft: consData.left,
          inright: consData.right,
          intop: consData.top,
          inbottom: consData.bottom
        }
      });
    }

    /**
     * when shape leave edit mode
     * override this method
     */
  }, {
    key: "onEditLeave",
    value: function onEditLeave() {
      _get(_getPrototypeOf(AppRhombDecorator.prototype), "onEditLeave", this).call(this);
      if (this._testPath) {
        this._testPath.remove();
        this._testPath = null;
      }
    }
  }]);
  return AppRhombDecorator;
}(AppShapeEditorDecorator);

/**
 * @param {number} baseWidth
 * @param {number} baseHeight
 * @param {number} width
 * @param {number} margin
 * @returns {{ l:Point, t:Point, r:Point, b:Point }}
 */
function rhombCalc(baseWidth, baseHeight, width, margin) {
  var incrm = (width - baseWidth) / 2;
  var incrmNeg = -1 * incrm;
  return {
    l: {
      x: incrmNeg + margin,
      y: baseHeight / 2 + margin
    },
    t: {
      x: baseWidth / 2 + margin,
      y: incrmNeg + margin
    },
    r: {
      x: baseWidth + incrm + margin,
      y: baseHeight / 2 + margin
    },
    b: {
      x: baseWidth / 2 + margin,
      y: baseHeight + incrm + margin
    }
  };
}

/**
 * @param {number} baseWidth
 * @param {number} baseHeight
 * @param {number} width
 * @param {number} margin
 * @returns {string}
 */
function rhombPathCalc(baseWidth, baseHeight, width, margin) {
  var rhomb = rhombCalc(baseWidth, baseHeight, width, margin);
  return "M".concat(rhomb.l.x, " ").concat(rhomb.l.y, " L").concat(rhomb.t.x, " ").concat(rhomb.t.y, " L").concat(rhomb.r.x, " ").concat(rhomb.r.y, " L").concat(rhomb.b.x, " ").concat(rhomb.b.y, " Z");
}

/**
 * - get inner element with 'data-key' attr = {dataKey}
 * - clone it, make transparent
 *  - and add to {svgEl}
 * @param {SVGGraphicsElement} svgEl
 * @param {string} dataKey
 * @returns {SVGGraphicsElement}
 */
function cloneUnshiftTransparent(svgEl, dataKey) {
  var cloned = svgEl.querySelector("[data-key=\"".concat(dataKey, "\"]"));
  var clone = /** @type {SVGGraphicsElement}} */cloned.cloneNode(false);
  clone.style.fill = 'transparent';
  clone.style.stroke = 'transparent';
  clone.removeAttribute('data-key');
  svgEl.insertBefore(clone, cloned);
  return clone;
}

/** @implements {IConnectorPath} */
var AppPathEditiorDecorator = /*#__PURE__*/function (_SvgElementEditableAb) {
  _inherits(AppPathEditiorDecorator, _SvgElementEditableAb);
  var _super = _createSuper(AppPathEditiorDecorator);
  /**
   * @param {IDiagram} diagram
   * @param {ISvgPresenterPath} svgElement
   */
  function AppPathEditiorDecorator(diagram, svgElement) {
    var _this;
    _classCallCheck(this, AppPathEditiorDecorator);
    _this = _super.call(this, svgElement);
    _this.diagram = diagram;
    return _this;
  }

  // @ts-ignore
  _createClass(AppPathEditiorDecorator, [{
    key: "end",
    get: function get() {
      return (/** @type {IConnectorPath} */this.svgElement.end
      );
    }
    // @ts-ignore
  }, {
    key: "start",
    get: function get() {
      return (/** @type {IConnectorPath} */this.svgElement.start
      );
    }

    /**
     * @param {DiagramShapeState} state
     */
  }, {
    key: "stateHas",
    value: function stateHas(state) {
      return this.svgElement.stateHas(state);
    }
  }, {
    key: "stateGet",
    value: function stateGet() {
      return this.svgElement.stateGet();
    }

    /**
     * when shape enter edit mode
     * override this method
     * @param {PointerEvent & { target: SVGGraphicsElement }} evt
     */
  }, {
    key: "onEdit",
    value: function onEdit(evt) {
      var _this2 = this;
      pnlDelShow(this, evt.clientX - 20, evt.clientY - 55, function () {
        _this2.diagram.del(_this2);
      });
    }

    /**
     * when shape leave edit mode
     * override this method
     */
  }, {
    key: "onEditLeave",
    value: function onEditLeave() {
      pnlDel(this);
    }
  }]);
  return AppPathEditiorDecorator;
}(SvgElementEditableAbstract);

//@ts-ignore
window.dgrmOffsetX = 0;
//@ts-ignore
window.dgrmOffsetY = 0;

/**
 * Point in view (in SVG) to point in canvas
 * @param {Point} canvasPosition
 * @param {number} scale
 * @param {Point} point
 * @returns {Point}
 */
function pointViewToCanvas(canvasPosition, scale, point) {
  return {
    //@ts-ignore
    x: (point.x - canvasPosition.x - window.dgrmOffsetX) / scale,
    //@ts-ignore
    y: (point.y - canvasPosition.y - window.dgrmOffsetY) / scale
  };
}

/**
 * Point in canvas to point in view (in SVG)
 * @param {Point} canvasPosition
 * @param {number} scale
 * @param {Point} point
 * @returns {Point}
 */
function pointCanvasToView(canvasPosition, scale, point) {
  return {
    //@ts-ignore
    x: point.x * scale + (canvasPosition.x + window.dgrmOffsetX),
    //@ts-ignore
    y: point.y * scale + (canvasPosition.y + window.dgrmOffsetY)
  };
}

/** @implements {IDiagramPrivateEventProcessor} */
var ShapeEvtProc = /*#__PURE__*/function () {
  /**
   * @param {IDiagramPrivate} diagram
   * @param {IConnectorManager} connectorManager
   */
  function ShapeEvtProc(diagram, connectorManager) {
    _classCallCheck(this, ShapeEvtProc);
    /** @private */
    this._diagram = diagram;

    /** @private */
    this._connectorManager = connectorManager;
  }

  /**
   * @param {IDiagramElement} elem
   * @return {boolean}
   */
  _createClass(ShapeEvtProc, [{
    key: "canProcess",
    value: function canProcess(elem) {
      return elem.type === 'shape';
    }

    /**
     * @param {IPresenterShape} shape
     * @param {IDiagramPrivateEvent} evt
     */
  }, {
    key: "process",
    value: function process(shape, evt) {
      var _evt$detail$enterTo, _evt$detail$target;
      switch (evt.type) {
        case 'pointermove':
          shapeMove(this._diagram, shape, evt, shape.connectable);
          break;
        case 'pointerup':
          if (!shape[movedDelta$1]) {
            //
            // select

            this._diagram.selected = shapeOrPath(shape);
            return;
          }

          //
          // move end

          if (shape.connectable && /** @type {IPresenterConnector} */evt.detail.target.connectorType === 'in') {
            //
            // connect

            var path = first(shape.connectedPaths);
            if (!this._diagram.dispatch('connect', path)) {
              return;
            }
            this._connectorManager.replaceEnd(path, /** @type {IPresenterConnector} */evt.detail.target);
            this._diagram.del(shape);
            shapeStateDel(path, 'disabled');
            shape = null;
          }
          this._clean(shape);
          break;
        case 'unselect':
          shapeStateDel(shapeOrPath(shape), 'selected');
          break;
        case 'pointerenter':
          if (shape.connectable && ['connector', 'shape'].includes(evt.detail.target.type)) {
            shapeStateAdd( /** @type {IPresenterStatable} */evt.detail.target, 'hovered');
            this._hoveredSet(evt.detail.target.type === 'shape' ? /** @type {IPresenterShape} */evt.detail.target : /** @type {IPresenterConnector} */evt.detail.target.shape);
          }
          break;
        case 'pointerleave':
          if (!shape.connectable) {
            return;
          }
          switch (evt.detail.target.type) {
            case 'shape':
              if ( /** @type {IPresenterConnector} */((_evt$detail$enterTo = evt.detail.enterTo) === null || _evt$detail$enterTo === void 0 ? void 0 : _evt$detail$enterTo.shape) !== evt.detail.target) {
                this._hoveredSet(null);
              }
              break;
            case 'connector':
              if ( /** @type {IPresenterConnector} */((_evt$detail$target = evt.detail.target) === null || _evt$detail$target === void 0 ? void 0 : _evt$detail$target.shape) !== evt.detail.enterTo) {
                this._hoveredSet(null);
              } else {
                shapeStateDel( /** @type {IPresenterStatable} */evt.detail.target, 'hovered');
              }
              break;
          }
          break;
        case 'canvasleave':
        case 'unactive':
          this._clean(shape);
          break;
      }
    }

    /**
     * @param {IPresenterShape} shape
     * @private
     */
  }, {
    key: "_clean",
    value: function _clean(shape) {
      if (shape) {
        shapeMoveEnd(this._diagram, shape);
      }
      this._hoveredSet(null);
      this._diagram.activeElement(null);
    }

    /**
     * @param {IPresenterShape} shape
     * @private
     */
  }, {
    key: "_hoveredSet",
    value: function _hoveredSet(shape) {
      if (this._hovered && this._hovered !== shape) {
        shapeStateDel(this._hovered, 'hovered');
      }
      /**
       * @private
       */
      this._hovered = shape;
    }
  }]);
  return ShapeEvtProc;
}();

/** delta between shape and cursor when shape start dragging {Point} */
var movedDelta$1 = Symbol(0);

/** @typedef {IPresenterShape & { [movedDelta]?: Point }} IEvtProcShape */

/**
 * @param {IDiagram} diagram
 * @param {IEvtProcShape} shape
 * @param {IDiagramPrivateEvent} evt
 * @param {boolean} bindConnectorToPointer TODO: refactor remove this
 */
function shapeMove(diagram, shape, evt) {
  var bindConnectorToPointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!shape[movedDelta$1]) {
    //
    // move start

    diagram.selected = null;
    disable(shape, true);

    // TODO
    //		remove bindConnectorToPointer.
    //		when move one connector bindConnectorToPointer = true - bing center of connector to pointer
    //		when move many shapes bindConnectorToPointer = false

    if (bindConnectorToPointer) {
      // bind connector center to pointer
      // connectable shape is circle so bind to center
      shape[movedDelta$1] = {
        x: 0,
        y: 0
      };
    } else {
      // remember point in shape we take and bind to pointer

      var shapePositionInView = pointCanvasToView(diagram.canvasPosition, diagram.scale, shape.positionGet());
      shape[movedDelta$1] = {
        x: shapePositionInView.x - evt.detail.clientX,
        y: shapePositionInView.y - evt.detail.clientY
      };
    }
  }
  diagram.shapeUpdate(shape, {
    position: pointViewToCanvas(diagram.canvasPosition, diagram.scale, {
      x: shape[movedDelta$1].x + evt.detail.clientX,
      y: shape[movedDelta$1].y + evt.detail.clientY
    })
  });
}

/**
 * @param {IDiagramPrivate} diagram
 * @param {IEvtProcShape} shape
 */
function shapeMoveEnd(diagram, shape) {
  disable(shape, false);
  delete shape[movedDelta$1];
  diagram.dispatch('moveend', shape);
}

/**
 * @param {IPresenterShape} shape
 * @param {Boolean} isDisable
 * @returns {void}
 */
function disable(shape, isDisable) {
  shapeStateSet(shapeOrPath(shape), 'disabled', isDisable);
}

/**
 * @param {IPresenterShape} shape
 * @returns {IPresenterStatable}
 */
function shapeOrPath(shape) {
  return shape.connectable ? first(shape.connectedPaths) : shape;
}

/** @implements {IDiagramPrivateEventProcessor} */
var ConnectorEvtProc = /*#__PURE__*/function () {
  /**
   * @param {IDiagramPrivate} diagram
   * @param {IConnectorManager} connectorManager
   */
  function ConnectorEvtProc(diagram, connectorManager) {
    _classCallCheck(this, ConnectorEvtProc);
    /** @private */
    this._diagram = diagram;

    /** @private */
    this._connectorManager = connectorManager;
  }

  /**
   * @param {IDiagramElement} elem
   * @return {boolean}
   */
  _createClass(ConnectorEvtProc, [{
    key: "canProcess",
    value: function canProcess(elem) {
      return elem.type === 'connector';
    }

    /**
     * @param {IPresenterConnector} connector
     * @param {IDiagramPrivateEvent} evt
     * */
  }, {
    key: "process",
    value: function process(connector, evt) {
      switch (evt.type) {
        case 'pointermove':
          switch (connector.connectorType) {
            case 'out':
              {
                //
                // dragout new connector

                var connectorEnd = /** @type {IPresenterShape} */this._diagram.add('shape', connectorEndParams(connector));
                this._diagram.add('path', {
                  start: connector,
                  end: connectorEnd.defaultInConnector
                });
                this._diagram.activeElement(connectorEnd);
                break;
              }
            case 'in':
              {
                var _this$_diagram$select;
                //
                // disconnect

                var path = ((_this$_diagram$select = this._diagram.selected) === null || _this$_diagram$select === void 0 ? void 0 : _this$_diagram$select.type) === 'path' && /** @type {IPresenterPath} */this._diagram.selected.end === connector ? /** @type {IPresenterPath} */this._diagram.selected : last(connector.shape.connectedPaths, function (pp) {
                  return pp.end === connector;
                });
                if (!this._diagram.dispatch('disconnect', path)) {
                  return;
                }
                var _connectorEnd = /** @type {IPresenterShape} */this._diagram.add('shape', connectorEndParams(connector));
                this._connectorManager.replaceEnd(path, _connectorEnd.defaultInConnector);
                this._diagram.activeElement(_connectorEnd);
              }
          }
          break;
        case 'pointerup':
          {
            if (connector.connectorType !== 'in') {
              return;
            }
            this._diagram.selected = last(connector.shape.connectedPaths, function (pp) {
              return pp.end === connector;
            });
            break;
          }
      }
    }
  }]);
  return ConnectorEvtProc;
}();

/**
 * create param for connectorEnd shape
 * @param {IPresenterConnector} connector
 * @returns {DiagramShapeAddParam}
 */
function connectorEndParams(connector) {
  var shapePosition = connector.shape.positionGet();
  var innerPosition = connector.innerPosition;
  return {
    templateKey: 'connect-end',
    position: {
      x: shapePosition.x + innerPosition.x,
      y: shapePosition.y + innerPosition.y
    }
  };
}

/** @implements {IDiagramPrivateEventProcessor} */
var PathEvtProc = /*#__PURE__*/function () {
  /**
   * @param {IDiagramPrivate} diagram
   */
  function PathEvtProc(diagram) {
    _classCallCheck(this, PathEvtProc);
    /** @private */
    this._diagram = diagram;
  }

  /**
   * @param {IDiagramElement} elem
   * @return {boolean}
   */
  _createClass(PathEvtProc, [{
    key: "canProcess",
    value: function canProcess(elem) {
      return elem.type === 'path';
    }

    /**
     * @param {IPresenterPath} path
     * @param {IDiagramPrivateEvent} evt
     */
  }, {
    key: "process",
    value: function process(path, evt) {
      switch (evt.type) {
        case 'pointerup':
          this._diagram.selected = path;
          break;
        case 'unselect':
          shapeStateDel(path, 'selected');
          break;
      }
    }
  }]);
  return PathEvtProc;
}();

/**
 * @param {SVGGraphicsElement} svgEl
 * @returns {Point}
 */
function parseCenterAttr(svgEl) {
  var point = svgEl.getAttribute('data-center').split(',');
  return {
    x: parseFloat(point[0]),
    y: parseFloat(point[1])
  };
}

/** delta between shape and cursor when shape start dragging {Point} */
var movedDelta = Symbol(0);

/**
 * @param {IDiagramPrivate} diagram
 * @param {IDiagramPrivateEvent} evt
 */
function canvasMove(diagram, evt) {
  if (!diagram[movedDelta]) {
    //
    // move start

    diagram.selected = null;
    var canvasPosition = diagram.canvasPosition;
    diagram[movedDelta] = {
      x: canvasPosition.x - evt.detail.clientX,
      y: canvasPosition.y - evt.detail.clientY
    };
  }
  diagram.canvasPosition = {
    x: diagram[movedDelta].x + evt.detail.clientX,
    y: diagram[movedDelta].y + evt.detail.clientY
  };
}

/**
 * @param {IDiagramPrivate} diagram
 */
function canvasMoveEnd(diagram) {
  delete diagram[movedDelta];
  diagram.selected = null;
}

/** shape center position */
var shapeCenter = Symbol(0);
/** inner shape center  */
var shapeInnerCenter = Symbol(0);
/** @typedef {ISvgPresenterShape & { [shapeCenter]?: Point, [shapeInnerCenter]?: Point }} SelecEvtProcShape */

/**
 * Allow to select multiple elements.
 * Long tap to start select
 * @implements {IDiagramPrivateEventProcessor}
 */
var CanvasSelecEvtProc = /*#__PURE__*/function () {
  /**
   * @param {IDiagramPrivate} diagram
   * @param {SVGSVGElement} svg
   */
  function CanvasSelecEvtProc(diagram, svg) {
    var _this = this;
    _classCallCheck(this, CanvasSelecEvtProc);
    /**
     * @type {Set<SelecEvtProcShape>}
     * @private
     */
    this._shapes = new Set();
    this.diagram = diagram.on('add', /** @param {CustomEvent<IDiagramEventDetail<ISvgPresenterShape>>} evt */function (evt) {
      if (evt.detail.target.type === 'shape') {
        _this._shapes.add(evt.detail.target);
      }
    }).on('del', /** @param {CustomEvent<IDiagramEventDetail<ISvgPresenterElement>>} evt */function (evt) {
      var _this$selectedShapes;
      var shapeToDel = evt.detail.target.type === 'path' && /** @type {ISvgPresenterPath} */evt.detail.target.end.shape.connectable ? /** @type {ISvgPresenterPath} */evt.detail.target.end.shape : /** @type {ISvgPresenterShape} */evt.detail.target;
      _this._shapes["delete"](shapeToDel);
      (_this$selectedShapes = _this.selectedShapes) === null || _this$selectedShapes === void 0 ? void 0 : _this$selectedShapes["delete"](shapeToDel);
    });

    /** @private */
    this._svg = svg;
  }

  /**
   * @param {IDiagramElement} elem
   * @return {boolean}
   */
  _createClass(CanvasSelecEvtProc, [{
    key: "canProcess",
    value: function canProcess(elem) {
      var _this$selectedShapes2;
      var canProcess = elem.type === 'canvas' || ((_this$selectedShapes2 = this.selectedShapes) === null || _this$selectedShapes2 === void 0 ? void 0 : _this$selectedShapes2.has( /** @type {SelecEvtProcShape} */elem));
      if (!canProcess) {
        // clean selected
        this.onSelectedClean();
      }
      return canProcess;
    }

    /**
     * @param {IDiagramElement} elem
     * @param {IDiagramPrivateEvent} evt
     */
  }, {
    key: "process",
    value: function process(elem, evt) {
      var _this2 = this,
        _this$selectedShapes3;
      switch (evt.type) {
        case 'pointermove':
          this._timerDel();
          /** @private */
          this._downElem = null;

          // select rectangle
          if (this._selectRect) {
            // highlight selected shapes
            this._shapeInRectSelect();

            // draw select rect
            rectDraw(this._selectRect, evt);
            return;
          }

          // selected shapes move
          if (this._isDownOnSelectedShape) {
            this.selectedShapes.forEach(function (shape) {
              return shapeMove(_this2.diagram, shape, evt);
            });
            return;
          }

          // canvas move
          canvasMove(this.diagram, evt);
          break;
        case 'pointerdown':
          this.diagram.selected = null;

          /** @private */
          this._downElem = evt.detail.target;

          /** @private */
          this._isDownOnSelectedShape = (_this$selectedShapes3 = this.selectedShapes) === null || _this$selectedShapes3 === void 0 ? void 0 : _this$selectedShapes3.has( /** @type {SelecEvtProcShape} */evt.detail.target);
          if (elem.type !== 'canvas') {
            return;
          }

          //
          // long tap on cancas

          /** @private */
          this._timer = setTimeout(function (_) {
            _this2._timerDel();

            // clean selected
            _this2.onSelectedClean();

            // calc shape centers
            var canvasPosition = /** @type {ISvgPresenterShape} */elem.positionGet();
            _this2._shapes.forEach(function (shape) {
              // TODO: refactor - shapeInnerCenter get one time for shape template key

              if (!shape[shapeInnerCenter]) {
                shape[shapeInnerCenter] = parseCenterAttr(shape.svgEl);
              }
              var shapePosition = shape.positionGet();
              shape[shapeCenter] = pointCanvasToView(
              // canvasPosition
              canvasPosition,
              // scale
              _this2.diagram.scale,
              // point
              {
                x: shapePosition.x + shape[shapeInnerCenter].x,
                y: shapePosition.y + shape[shapeInnerCenter].y
              });
            });

            // draw select rect
            /** @private */
            _this2._selectRect = rectCreate(_this2._svg, {
              x: evt.detail.clientX,
              y: evt.detail.clientY
            });
          }, 500);
          break;
        case 'pointerup':
          this._actionEnd(elem, evt);
          break;
        case 'unactive':
        case 'canvasleave':
          this.diagram.activeElement(null); // for 'canvasleave'
          this._downElem = null;
          this._actionEnd(elem, evt);
          break;
      }
    }

    /**
     * @param {IDiagramElement} elem
     * @param {IDiagramPrivateEvent} evt
     * @private
     */
  }, {
    key: "_actionEnd",
    value: function _actionEnd(elem, evt) {
      var _this3 = this;
      this._timerDel();

      // click
      if (this._downElem) {
        this._selectRectDel();
        if (this._downElem.type === 'canvas') {
          // click on canvas
          this.onSelectedClean();
        } else {
          // click on selected shape
          this.onShapeClick(evt);
        }
        this._downElem = null;
        return;
      }

      // select rectangle
      if (this._selectRect) {
        this._selectEnd();
        return;
      }

      // selected shapes move end
      if (this._isDownOnSelectedShape) {
        this.selectedShapes.forEach(function (shape) {
          return shapeMoveEnd(_this3.diagram, shape);
        });
        this._isDownOnSelectedShape = false;
        return;
      }

      // canvas move end
      canvasMoveEnd(this.diagram);
    }

    /**
     * when click on one of selected shapes
     * override this method if you need to process this evt
     * @param {IDiagramPrivateEvent} evt
     */
  }, {
    key: "onShapeClick",
    value: function onShapeClick(evt) {
      this.onSelectedClean();
    }

    /**
     * when clean selected
     * override this method if you need to process this evt
     */
  }, {
    key: "onSelectedClean",
    value: function onSelectedClean() {
      var _this$selectedShapes4;
      (_this$selectedShapes4 = this.selectedShapes) === null || _this$selectedShapes4 === void 0 ? void 0 : _this$selectedShapes4.forEach(function (shape) {
        return shapeStateDel(shape, 'highlighted');
      });
      this.selectedShapes = null;
    }

    /**
     * @param {boolean?=} getShapes
     * @returns {Set<SelecEvtProcShape>}
     * @private
     */
  }, {
    key: "_shapeInRectSelect",
    value: function _shapeInRectSelect(getShapes) {
      var _this4 = this;
      /** @type {Set<SelecEvtProcShape>} */
      var shapesInRect = getShapes ? new Set() : null;
      this._shapes.forEach(function (shape) {
        var isInRect = document.elementFromPoint(shape[shapeCenter].x, shape[shapeCenter].y) === _this4._selectRect;
        shapeStateSet(shape, 'highlighted', isInRect);
        if (getShapes && isInRect) {
          shapesInRect.add(shape);
        }
      });
      return (shapesInRect === null || shapesInRect === void 0 ? void 0 : shapesInRect.size) > 0 ? shapesInRect : null;
    }

    /** @private */
  }, {
    key: "_selectEnd",
    value: function _selectEnd() {
      var _this$selectedShapes5;
      /** @private */
      this.selectedShapes = this._shapeInRectSelect(true);

      // can't select one shape
      if (((_this$selectedShapes5 = this.selectedShapes) === null || _this$selectedShapes5 === void 0 ? void 0 : _this$selectedShapes5.size) === 1) {
        shapeStateDel(first(this.selectedShapes), 'highlighted');
        this.selectedShapes = null;
      }
      this._selectRectDel();
    }

    /** @private */
  }, {
    key: "_selectRectDel",
    value: function _selectRectDel() {
      if (this._selectRect) {
        rectDel(this._selectRect);
        this._selectRect = null;
      }
    }

    /** @private */
  }, {
    key: "_timerDel",
    value: function _timerDel() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timer = null;
    }
  }]);
  return CanvasSelecEvtProc;
}();

/** point where selectRect starts */
var rectStartPoint = Symbol(0);
/** link to svg circle, that was added to show rect start drawing */
var rectStartElem = Symbol(0);

/** @typedef {SVGRectElement & { [rectStartPoint]?: Point, [rectStartElem]?: SVGCircleElement }} SelectRect */

/**
 * @param {SVGSVGElement} svg
 * @param {Point} position
 * @return {SVGRectElement}
 */
function rectCreate(svg, position) {
  // TODO: check positon if SVG is not full screen

  //@ts-ignore
  position.x = position.x - window.dgrmOffsetX;
  //@ts-ignore
  position.y = position.y - window.dgrmOffsetY;
  var selectRect = /** @type {SelectRect} */elemCreateByTemplate(svg, 'select');
  selectRect.x.baseVal.value = position.x;
  selectRect.y.baseVal.value = position.y;
  selectRect[rectStartPoint] = position;

  // circle to show rect start drawing
  selectRect[rectStartElem] = /** @type {SVGCircleElement} */elemCreateByTemplate(svg, 'select-start');
  selectRect[rectStartElem].cx.baseVal.value = position.x;
  selectRect[rectStartElem].cy.baseVal.value = position.y;
  return selectRect;
}

/**
 * @param {SelectRect} selectRect
 * @param {IDiagramPrivateEvent} evt
 */
function rectDraw(selectRect, evt) {
  if (selectRect[rectStartElem]) {
    selectRect[rectStartElem].remove();
    delete selectRect[rectStartElem];
  }

  //@ts-ignore
  var x = evt.detail.clientX - selectRect[rectStartPoint].x - window.dgrmOffsetX;
  //@ts-ignore
  var y = evt.detail.clientY - selectRect[rectStartPoint].y - window.dgrmOffsetY;
  selectRect.width.baseVal.value = Math.abs(x);
  if (x < 0) {
    //@ts-ignore
    selectRect.x.baseVal.value = evt.detail.clientX - window.dgrmOffsetX;
  }
  selectRect.height.baseVal.value = Math.abs(y);
  if (y < 0) {
    //@ts-ignore
    selectRect.y.baseVal.value = evt.detail.clientY - window.dgrmOffsetY;
  }
}

/** @param {SelectRect} selectRect */
function rectDel(selectRect) {
  if (selectRect[rectStartElem]) {
    selectRect[rectStartElem].remove();
    delete selectRect[rectStartElem];
  }
  selectRect.remove();
}

var AppCanvasSelecEvtProc = /*#__PURE__*/function (_CanvasSelecEvtProc) {
  _inherits(AppCanvasSelecEvtProc, _CanvasSelecEvtProc);
  var _super = _createSuper(AppCanvasSelecEvtProc);
  /**
   * @param {IDiagramPrivate} diagram
   * @param {SVGSVGElement} svg
   */
  function AppCanvasSelecEvtProc(diagram, svg) {
    var _this;
    _classCallCheck(this, AppCanvasSelecEvtProc);
    _this = _super.call(this, diagram, svg);
    diagram.on('scale', function (_) {
      return pnlDel(_assertThisInitialized(_this));
    });
    return _this;
  }

  /**
   * when click on one of selected shapes
   * @param {IDiagramPrivateEvent} evt
   */
  _createClass(AppCanvasSelecEvtProc, [{
    key: "onShapeClick",
    value: function onShapeClick(evt) {
      var _this2 = this;
      pnlDelShow(this, evt.detail.clientX - 20, evt.detail.clientY - 55, function () {
        var _iterator = _createForOfIteratorHelper(_this2.selectedShapes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var shape = _step.value;
            _this2.diagram.del(shape);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "onSelectedClean",
    value: function onSelectedClean() {
      pnlDel(this);
      _get(_getPrototypeOf(AppCanvasSelecEvtProc.prototype), "onSelectedClean", this).call(this);
    }

    /**
     * @param {IDiagramElement} elem
     * @param {IDiagramPrivateEvent} evt
     */
  }, {
    key: "process",
    value: function process(elem, evt) {
      pnlDel(this);
      _get(_getPrototypeOf(AppCanvasSelecEvtProc.prototype), "process", this).call(this, elem, evt);
    }
  }]);
  return AppCanvasSelecEvtProc;
}(CanvasSelecEvtProc);

/**
 * @param {IDiagram} diagram
 * @param {SVGSVGElement} svg
 */
function scaleFeature(diagram, svg) {
  // mouse wheel, trackpad pitch
  svg.addEventListener('wheel', /** @param {WheelEvent} evt */function (evt) {
    evt.preventDefault();
    var delta = evt.deltaY || evt.deltaX;
    var scaleStep = Math.abs(delta) < 50 ? 0.05 // trackpad pitch
    : 0.25; // mouse wheel
    scale(diagram, diagram.scale + (delta < 0 ? scaleStep : -scaleStep), evtPos(evt));
  });

  // multi touch screen
  scaleTouchScreen(diagram, svg);
}

/**
 * Scale for multi touch screen
 * @param {IDiagram} diagram
 * @param {SVGSVGElement} svg
*/
function scaleTouchScreen(diagram, svg) {
  /** @type { {id:number, pos?:Point} } */
  var firstPointer;

  /** @type { {id:number, pos?:Point} } */
  var secondPointer;

  /** @type {number} */
  var distance;

  /** @type {Point} */
  var center;
  var cancel = function cancel(evt) {
    var _firstPointer, _secondPointer;
    distance = null;
    center = null;
    if (((_firstPointer = firstPointer) === null || _firstPointer === void 0 ? void 0 : _firstPointer.id) === evt.pointerId) {
      firstPointer = null;
    }
    if (((_secondPointer = secondPointer) === null || _secondPointer === void 0 ? void 0 : _secondPointer.id) === evt.pointerId) {
      secondPointer = null;
    }
  };
  svg.addEventListener('pointerdown', function (evt) {
    if (!firstPointer) {
      firstPointer = evtPointer(evt);
      return;
    }
    if (!secondPointer) {
      secondPointer = evtPointer(evt);
    }
  });
  svg.addEventListener('pointermove', /** @type {PointerEvent} */function (evt) {
    var _secondPointer2, _firstPointer2;
    if (!secondPointer || !firstPointer || ((_secondPointer2 = secondPointer) === null || _secondPointer2 === void 0 ? void 0 : _secondPointer2.id) !== evt.pointerId && ((_firstPointer2 = firstPointer) === null || _firstPointer2 === void 0 ? void 0 : _firstPointer2.id) !== evt.pointerId) {
      return;
    }
    var distanceNew = Math.hypot(firstPointer.pos.x - secondPointer.pos.x, firstPointer.pos.y - secondPointer.pos.y);
    var centerNew = {
      x: (firstPointer.pos.x + secondPointer.pos.x) / 2,
      y: (firstPointer.pos.y + secondPointer.pos.y) / 2
    };

    // not first move
    if (distance) {
      var canvasPosition = diagram.canvasPosition;
      diagram.canvasPosition = {
        x: canvasPosition.x + centerNew.x - center.x,
        y: canvasPosition.y + centerNew.y - center.y
      };
      scale(diagram, diagram.scale / distance * distanceNew, centerNew);
    }
    distance = distanceNew;
    center = centerNew;
    if (firstPointer.id === evt.pointerId) {
      firstPointer.pos = evtPos(evt);
    }
    if (secondPointer.id === evt.pointerId) {
      secondPointer.pos = evtPos(evt);
    }
  });
  svg.addEventListener('pointerleave', cancel);
  svg.addEventListener('pointerout', cancel);
  svg.addEventListener('pointercancel', cancel);
  svg.addEventListener('pointerup', cancel);
}

/**
 * @param {IDiagram} diagram
 * @param {number} scale
 * @param {Point} fixedPoint
 */
function scale(diagram, scale, fixedPoint) {
  if (scale < 0.25 || scale > 4) {
    return;
  }
  diagram.selected = null;
  diagram.activeElement(null, true);
  diagram.scaleSet(scale, fixedPoint);
}

/**
 * @param { {pointerId: number, clientX:number, clientY:number} } evt
 * @return { {id:number, pos?:Point} }
 */
function evtPointer(evt) {
  return {
    id: evt.pointerId,
    pos: evtPos(evt)
  };
}

/**
 * @param { {clientX:number, clientY:number} } evt
 * @return {Point}
 */
function evtPos(evt) {
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}

/**
 * @param {IDiagram} diagram
 * @param {SVGSVGElement} svg
 */
function gridFeature(diagram, svg) {
  var curOpacity;

  /** @param {number} opacity */
  function backImg(opacity) {
    if (curOpacity !== opacity) {
      curOpacity = opacity;
      svg.style.backgroundImage = "radial-gradient(rgb(73 80 87 / ".concat(opacity, ") 1px, transparent 0)");
    }
  }
  backImg(0.7);
  var cellSize = 24;
  var cellSizeHalf = cellSize / 2;

  /**
   * @param {number} coordinate
   * @return {number}
   */
  function placeToCell(coordinate) {
    var coor = Math.round(coordinate / cellSize) * cellSize;
    return coordinate - coor > 0 ? coor + cellSizeHalf : coor - cellSizeHalf;
  }
  svg.style.backgroundSize = "".concat(cellSize, "px ").concat(cellSize, "px");
  diagram.on('canvmove', function (_) {
    var pos = diagram.canvasPosition;
    svg.style.backgroundPosition = "".concat(pos.x, "px ").concat(pos.y, "px");
  }).on('scale', function (_) {
    var pos = diagram.canvasPosition;
    var size = cellSize * diagram.scale;
    if (diagram.scale < 0.5) {
      backImg(0);
    } else if (diagram.scale <= 0.9) {
      backImg(0.3);
    } else {
      backImg(0.7);
    }
    svg.style.backgroundSize = "".concat(size, "px ").concat(size, "px");
    svg.style.backgroundPosition = "".concat(pos.x, "px ").concat(pos.y, "px");
  }).on('moveend', /** @param {CustomEvent<IDiagramEventDetail<IDiagramShape>>} evt */function (evt) {
    var pos = evt.detail.target.positionGet();
    diagram.shapeUpdate(evt.detail.target, {
      position: {
        x: placeToCell(pos.x),
        y: placeToCell(pos.y)
      }
    });
  });
}

//

/**
 * @param {SVGSVGElement} svg
 * @returns {IDiagram}
 */
function appDiagramFactory(svg) {
  /** @type {IDiagram} */
  var diagram = null;
  var presenter = new SvgPresenter(svg,
  // shape factrory
  function (type, param) {
    switch (type) {
      case 'shape':
        {
          /** @type {ISvgPresenterShape} */
          var shape = shapeCreate(param.svgCanvas, param.createParams.templateKey);
          switch (param.createParams.templateKey) {
            // About cast to IAppShapeData:
            // It is app-layer. AppCircleDecorator (and other shapes) is also app-layer. So it's ok to know about IAppShapeData here.
            case 'circle':
              shape = new AppCircleDecorator(diagram, shape, /** @type {IAppShapeData} */param.createParams);
              break;
            case 'rhomb':
              shape = new AppRhombDecorator(diagram, shape, /** @type {IAppShapeData} */param.createParams);
              break;
            case 'rect':
              shape = new AppRectDecorator(diagram, shape, /** @type {IAppShapeData} */param.createParams);
              break;
            case 'text':
              shape = new AppRectDecorator(diagram, shape, /** @type {IAppShapeData} */param.createParams, {
                resizeFromCenter: false
              });
              break;
          }
          param.svgElemToPresenterObj.set(shape.svgEl, shape);
          connectorsInit(param.svgElemToPresenterObj, shape);
          shape.update(param.createParams);
          return shape;
        }
      case 'path':
        {
          var path = new AppPathEditiorDecorator(diagram, pathCreate(param));
          param.svgElemToPresenterObj.set(path.svgEl, path);
          return path;
        }
    }
  });
  var connectorManager = new ConnectorManager(presenter);
  diagram = new Diagram(presenter, connectorManager, function (dgrm) {
    return new Set([new AppCanvasSelecEvtProc(dgrm, svg), new ShapeEvtProc(dgrm, connectorManager), new ConnectorEvtProc(dgrm, connectorManager), new PathEvtProc(dgrm)]);
  });

  //
  // features

  scaleFeature(diagram, svg);
  gridFeature(diagram, svg);
  return diagram;
}

export { appDiagramFactory };
