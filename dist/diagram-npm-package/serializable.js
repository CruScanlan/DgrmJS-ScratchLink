function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
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
 * @param {Set<DiagramShapeState>} states
 * @param {SVGGraphicsElement} svgEl
 * @param {DiagramShapeState} state
 */

/**
 * @param {SVGSVGElement} svg
 * @param {string} templateKey
 * @returns {SVGGeometryElement}
 */
function templateGet(svg, templateKey) {
  return svg.getElementsByTagName('defs')[0].querySelector("[data-templ='".concat(templateKey, "']"));
}

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
 * @param {SVGSVGElement} svg
 * @param {{
		x: number;
    	y: number;
		height: number;
    	width: number;
	}} rect coordinates of the rect to export
 * @param {number} scale
 * @param {BlobCallback} callBack
 */
function svgToPng(svg, rect, scale, callBack) {
  var img = new Image();
  img.width = rect.width * scale * window.devicePixelRatio;
  img.height = rect.height * scale * window.devicePixelRatio;
  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.style.width = "".concat(img.width, "px");
    canvas.style.height = "".concat(img.height, "px");
    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, rect.x,
    // sx
    rect.y,
    // sy
    rect.width,
    // sWidth
    rect.height,
    // sHeight

    0,
    // dx
    0,
    // dy
    img.width,
    // dWidth
    img.height // dHeight
    );

    URL.revokeObjectURL(img.src);
    canvas.toBlob(callBack, 'image/png');
  };
  svg.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, img.width);
  svg.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, img.height);
  img.src = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], {
    type: 'image/svg+xml;charset=utf-8'
  }));
}

/**
 * @param {Blob} png
 * @param {string} chunkName 4 symbol string
 * @returns {Promise<DataView | null>} chunk data
 */
function pngChunkGet(_x, _x2) {
  return _pngChunkGet.apply(this, arguments);
}

/**
 * @param {Blob} png
 * @param {string} chunkName 4 symbol string
 * @param {Uint8Array} data
 * @returns {Promise<Blob>} new png
 */
function _pngChunkGet() {
  _pngChunkGet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(png, chunkName) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = chunkGet;
            _context.next = 3;
            return png.arrayBuffer();
          case 3:
            _context.t1 = _context.sent;
            _context.t2 = toUit32(chunkName);
            return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _pngChunkGet.apply(this, arguments);
}
function pngChunkSet(_x3, _x4, _x5) {
  return _pngChunkSet.apply(this, arguments);
}

/**
 * @param {ArrayBuffer} pngData
 * @param {number} chunkNameUint32 chunk name as Uint32
 * @param {Uint8Array} data
 * @returns {Blob} new png
 */
function _pngChunkSet() {
  _pngChunkSet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(png, chunkName, data) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = chunkSet;
            _context2.next = 3;
            return png.arrayBuffer();
          case 3:
            _context2.t1 = _context2.sent;
            _context2.t2 = toUit32(chunkName);
            _context2.t3 = data;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3));
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _pngChunkSet.apply(this, arguments);
}
function chunkSet(pngData, chunkNameUint32, data) {
  /** @type {DataView} */
  var startPart;
  /** @type {DataView} */
  var endPart;
  var existingChunk = chunkGet(pngData, chunkNameUint32);
  if (existingChunk) {
    startPart = new DataView(pngData, 0, existingChunk.byteOffset - 8);
    endPart = new DataView(pngData, existingChunk.byteOffset + existingChunk.byteLength + 4);
  } else {
    var endChunkStart = pngData.byteLength - 12; // 12 - end chunk length
    startPart = new DataView(pngData, 0, endChunkStart);
    endPart = new DataView(pngData, endChunkStart);
  }
  var chunkHeader = new DataView(new ArrayBuffer(8));
  chunkHeader.setUint32(0, data.length);
  chunkHeader.setUint32(4, chunkNameUint32);
  return new Blob([startPart,
  // new chunk
  chunkHeader, data, new Uint32Array([0]),
  // CRC fake - not calculated

  endPart], {
    type: 'image/png'
  });
}

/**
 * @param {ArrayBuffer} pngData
 * @param {number} chunkNameUint32 chunk name as Uint32
 * @returns {DataView | null} chunk data
 */
function chunkGet(pngData, chunkNameUint32) {
  var dataView = new DataView(pngData, 8); // 8 byte - png signature

  var chunkPosition = 0;
  var chunkUint = dataView.getUint32(4);
  var chunkLenght;
  while (chunkUint !== 1229278788) {
    // last chunk 'IEND'
    chunkLenght = dataView.getUint32(chunkPosition);
    if (chunkUint === chunkNameUint32) {
      return new DataView(pngData, chunkPosition + 16, chunkLenght);
    }
    chunkPosition = chunkPosition + 12 + chunkLenght;
    chunkUint = dataView.getUint32(chunkPosition + 4);
  }
  return null;
}

/**
 * @param {string} chunkName 4 symbol string
 * @return {number} uit32
 */
function toUit32(chunkName) {
  return new DataView(new TextEncoder().encode(chunkName).buffer).getUint32(0);
}

/**
 * @param {SVGSVGElement} svg
 * @param {BlobCallback} callBack
 * @param {string?=} dgrmChunkVal
 */
function pngDgrmCreate(svg, callBack, dgrmChunkVal) {
  var _first$matrix$a, _first;
  /** @type{SVGGraphicsElement} */
  var canvasEl = svg.querySelector('[data-key="canvas"]');
  var rectToShow = canvasEl.getBoundingClientRect();
  var scale = (_first$matrix$a = (_first = first(canvasEl.transform.baseVal, function (tt) {
    return tt.type === SVGTransform.SVG_TRANSFORM_SCALE;
  })) === null || _first === void 0 ? void 0 : _first.matrix.a) !== null && _first$matrix$a !== void 0 ? _first$matrix$a : 1;

  // TODO: optimize: svgPositionSet and svgScale both change position

  /** @type {SVGSVGElement} */
  // @ts-ignore
  var svgVirtual = svg.cloneNode(true);
  svgVirtual.style.backgroundImage = null;
  svgVirtual.querySelectorAll('.selected, .highlighted').forEach(function (el) {
    return el.classList.remove('selected', 'highlighted');
  });

  // diagram to left corner
  /** @type{SVGGraphicsElement} */
  var canvasElVirtual = svgVirtual.querySelector('[data-key="canvas"]');
  var canvasElVirtualPosition = svgPositionGet(canvasElVirtual);
  svgPositionSet(canvasElVirtual, {
    //@ts-ignore
    x: canvasElVirtualPosition.x + 15 * scale - rectToShow.x + window.dgrmOffsetX,
    // padding 15px
    //@ts-ignore
    y: canvasElVirtualPosition.y + 15 * scale - rectToShow.y + window.dgrmOffsetY
  });
  svgScale(canvasElVirtual, {
    x: 0,
    y: 0
  }, scale, 1);
  svgToPng(svgVirtual, {
    x: 0,
    y: 0,
    height: rectToShow.height / scale + 30,
    width: rectToShow.width / scale + 30
  },
  // scale
  3,
  // callBack
  !dgrmChunkVal ? callBack : /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = callBack;
              _context.next = 3;
              return pngChunkSet(blob, 'dgRm', new TextEncoder().encode(dgrmChunkVal));
            case 3:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * @param {Blob} png
 * @returns {Promise<string|null>}
 */
function pngDgrmChunkGet(_x2) {
  return _pngDgrmChunkGet.apply(this, arguments);
}
function _pngDgrmChunkGet() {
  _pngDgrmChunkGet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(png) {
    var dgrmChunkVal;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return pngChunkGet(png, 'dgRm');
          case 2:
            dgrmChunkVal = _context2.sent;
            if (dgrmChunkVal) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", null);
          case 5:
            return _context2.abrupt("return", new TextDecoder().decode(dgrmChunkVal));
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _pngDgrmChunkGet.apply(this, arguments);
}

/**
 * @type {IAppPngExportable}
 * @mixin
 */
var AppDiagramPngMixin = {
  /**
   * @this IAppDiagramSerializable
   * @param {BlobCallback} callBack
   */
  pngCreate: function pngCreate(callBack) {
    var diagramData = this.dataGet();
    if (!diagramData) {
      callBack(null);
      return;
    }
    pngDgrmCreate(this.svg, callBack, JSON.stringify(diagramData));
  },
  /**
   * @this IAppDiagramSerializable
   * @param {Blob} png
   * @returns {Promise<Boolean>}
   */
  pngLoad: function pngLoad(png) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dgrmChunk;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pngDgrmChunkGet(png);
            case 2:
              dgrmChunk = _context.sent;
              if (dgrmChunk) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", false);
            case 5:
              _this.dataSet(JSON.parse(dgrmChunk));
              return _context.abrupt("return", true);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};

/**
 * @implements {IAppDiagramSerializable}
 * @mixes AppDiagramPngMixin
 */
var AppDiagramSerializable = /*#__PURE__*/function () {
  /**
   * @param {SVGSVGElement} svg
   * @param {IDiagram} diagram
   */
  function AppDiagramSerializable(svg, diagram) {
    var _this = this;
    _classCallCheck(this, AppDiagramSerializable);
    this.svg = svg;

    /**
     * @type {Set<IAppShape>}
     * @private
     */
    this._shapes = new Set();

    /** @private */
    this._diagram = diagram.on('del', /** @param {CustomEvent<IDiagramEventDetail<IDiagramElement>>} evt */
    function (evt) {
      return _this._shapes["delete"]( /** @type {IAppShape} */evt.detail.target);
    });
  }

  /**
   * Add shape and make it active (bind to pointer)
   * @param {DiagramShapeAddParam} param
   */
  _createClass(AppDiagramSerializable, [{
    key: "shapeActiveAdd",
    value: function shapeActiveAdd(param) {
      // calc shape position
      var pointInCanvas = pointViewToCanvas(
      // canvasPosition
      this._diagram.canvasPosition,
      // canvasScale
      this._diagram.scale,
      // point
      param.position);
      var addingShapeCenter = parseCenterAttr(templateGet(this.svg, param.templateKey));
      param.position.x = pointInCanvas.x - addingShapeCenter.x;
      param.position.y = pointInCanvas.y - addingShapeCenter.y;
      this._diagram.activeElement(this._shapeAdd(param));
    }

    /**
     * @private
     * @param {DiagramShapeAddParam} param
     * @returns {IDiagramShape}
     */
  }, {
    key: "_shapeAdd",
    value: function _shapeAdd(param) {
      var shape = /** @type {IAppShape} */this._diagram.add('shape', param);
      this._shapes.add(shape);
      return shape;
    }

    /** @returns {void} */
  }, {
    key: "clear",
    value: function clear() {
      var _iterator = _createForOfIteratorHelper(this._shapes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var shape = _step.value;
          this._diagram.del(shape);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._diagram.canvasPosition = {
        x: 0,
        y: 0
      };
      this._diagram.scaleSet(1, {
        x: 0,
        y: 0
      });
    }

    /** @returns {AppSerializeData} */
  }, {
    key: "dataGet",
    value: function dataGet() {
      if (!any(this._shapes)) {
        return null;
      }

      /** @type {AppSerializeData} */
      var serializeData = {
        s: [],
        c: []
      };

      /** @type {Map<IDiagramShape, number>} */
      var shapeIndex = new Map();
      var _iterator2 = _createForOfIteratorHelper(this._shapes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var shape = _step2.value;
          shapeIndex.set(shape, serializeData.s.push(shape.toJson()) - 1);
        }

        /** @type {Set<IDiagramPath>} */
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var pathsAdded = new Set();
      var _iterator3 = _createForOfIteratorHelper(this._shapes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _shape = _step3.value;
          if (any(_shape.connectedPaths)) {
            var _iterator4 = _createForOfIteratorHelper(_shape.connectedPaths),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var path = _step4.value;
                if (!pathsAdded.has(path) && path.end.key) {
                  pathsAdded.add(path);
                  serializeData.c.push({
                    s: {
                      i: shapeIndex.get(path.start.shape),
                      c: path.start.key
                    },
                    e: {
                      i: shapeIndex.get(path.end.shape),
                      c: path.end.key
                    }
                  });
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (pathsAdded.size === 0) {
        delete serializeData.c;
      }
      return serializeData;
    }

    /**
     * @param {AppSerializeData} data
     * @returns {void}
     */
  }, {
    key: "dataSet",
    value: function dataSet(data) {
      this.clear();
      if (!(data.s && data.s.length > 0)) {
        return;
      }

      /** @type {IDiagramShape[]} */
      var shapes = [];
      var _iterator5 = _createForOfIteratorHelper(data.s),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var shapeJson = _step5.value;
          shapes.push(this._shapeAdd(shapeJson));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (data.c && data.c.length > 0) {
        var _iterator6 = _createForOfIteratorHelper(data.c),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var conJson = _step6.value;
            this._diagram.add('path', {
              start: {
                shape: shapes[conJson.s.i],
                key: conJson.s.c
              },
              end: {
                shape: shapes[conJson.e.i],
                key: conJson.e.c
              }
            });
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }

    /**
     * subscribe to event
     * @param {DiagramEventType} evtType
     * @param {EventListenerOrEventListenerObject} listener
     * @param {AddEventListenerOptions?=} options
     */
  }, {
    key: "on",
    value: function on(evtType, listener, options) {
      this._diagram.on(evtType, listener, options);
      return this;
    }
  }]);
  return AppDiagramSerializable;
}();

//
// Mixin

Object.assign(AppDiagramSerializable.prototype, AppDiagramPngMixin);

export { AppDiagramSerializable };
