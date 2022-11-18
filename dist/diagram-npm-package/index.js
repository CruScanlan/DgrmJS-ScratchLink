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
    x: nextScale / scale * (position.x - fixedPoint.x) + fixedPoint.x,
    y: nextScale / scale * (position.y - fixedPoint.y) + fixedPoint.y
  });
  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE).setScale(nextScale, nextScale);
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

/**
 * Point in view (in SVG) to point in canvas
 * @param {Point} canvasPosition
 * @param {number} scale
 * @param {Point} point
 * @returns {Point}
 */
function pointViewToCanvas(canvasPosition, scale, point) {
  return {
    x: (point.x - canvasPosition.x) / scale,
    y: (point.y - canvasPosition.y) / scale
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
    x: point.x * scale + canvasPosition.x,
    y: point.y * scale + canvasPosition.y
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
          if (!shape[movedDelta]) {
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
var movedDelta = Symbol(0);

/** @typedef {IPresenterShape & { [movedDelta]?: Point }} IEvtProcShape */

/**
 * @param {IDiagram} diagram
 * @param {IEvtProcShape} shape
 * @param {IDiagramPrivateEvent} evt
 * @param {boolean} bindConnectorToPointer TODO: refactor remove this
 */
function shapeMove(diagram, shape, evt) {
  var bindConnectorToPointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!shape[movedDelta]) {
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
      shape[movedDelta] = {
        x: 0,
        y: 0
      };
    } else {
      // remember point in shape we take and bind to pointer

      var shapePositionInView = pointCanvasToView(diagram.canvasPosition, diagram.scale, shape.positionGet());
      shape[movedDelta] = {
        x: shapePositionInView.x - evt.detail.clientX,
        y: shapePositionInView.y - evt.detail.clientY
      };
    }
  }
  diagram.shapeUpdate(shape, {
    position: pointViewToCanvas(diagram.canvasPosition, diagram.scale, {
      x: shape[movedDelta].x + evt.detail.clientX,
      y: shape[movedDelta].y + evt.detail.clientY
    })
  });
}

/**
 * @param {IDiagramPrivate} diagram
 * @param {IEvtProcShape} shape
 */
function shapeMoveEnd(diagram, shape) {
  disable(shape, false);
  delete shape[movedDelta];
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
 * Defaut diagram factory
 * if you want to use custom shapeFactories, custom events proccesors - create your diagram factory
 * @param {SVGSVGElement} svg
 * @returns {IDiagram}
 */
function svgDiagramCreate(svg) {
  var presenter = new SvgPresenter(svg,
  // shape factrory
  function (type, param) {
    switch (type) {
      case 'shape':
        {
          var shape = shapeCreate(param.svgCanvas, param.createParams.templateKey);
          param.svgElemToPresenterObj.set(shape.svgEl, shape);
          connectorsInit(param.svgElemToPresenterObj, shape);
          shape.update(param.createParams);
          return shape;
        }
      case 'path':
        {
          var path = pathCreate(param);
          param.svgElemToPresenterObj.set(path.svgEl, path);
          return path;
        }
    }
  });
  var connectorManager = new ConnectorManager(presenter);
  return new Diagram(presenter, connectorManager, function (dgrm) {
    return new Set([new ShapeEvtProc(dgrm, connectorManager), new ConnectorEvtProc(dgrm, connectorManager), new PathEvtProc(dgrm)]);
  });
}

export { svgDiagramCreate };
