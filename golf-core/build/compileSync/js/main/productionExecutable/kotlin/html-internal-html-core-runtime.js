(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.n5;
  var Unit_instance = kotlin_kotlin.$_$.v1;
  var ensureNotNull = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.q6;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.e4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.f5;
  var initMetadataForLambda = kotlin_kotlin.$_$.a5;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.i21_1 = node;
    this.j21_1 = 0;
  }
  protoOf(DomNodeWrapper).k21 = function () {
    return this.i21_1;
  };
  protoOf(DomNodeWrapper).l21 = function (index, nodeWrapper) {
    var length = this.k21().childNodes.length;
    if (index < length) {
      var tmp = this.k21();
      var tmp_0 = nodeWrapper.k21();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.k21().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.k21().appendChild(nodeWrapper.k21());
    }
  };
  protoOf(DomNodeWrapper).ew = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.k21();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.k21().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).fw = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.k21();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.k21().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.k21();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.k21().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.p21_1 = 0;
  }
  protoOf(DomApplier).q21 = function (index, instance) {
  };
  protoOf(DomApplier).cw = function (index, instance) {
    return this.q21(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).r21 = function (index, instance) {
    this.xv().l21(index, instance);
  };
  protoOf(DomApplier).dw = function (index, instance) {
    return this.r21(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).ew = function (index, count) {
    this.xv().ew(index, count);
  };
  protoOf(DomApplier).fw = function (from, to, count) {
    this.xv().fw(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.x21_1.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.x21_1.c1();
    $this.y21_1 = false;
  }
  function schedule($this, block) {
    $this.x21_1.d(block);
    if (!$this.y21_1) {
      $this.y21_1 = true;
      launch($this.v21_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().t21_1) {
      GlobalSnapshotManager_getInstance().t21_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().t21_1 = false;
    Companion_instance.f1h();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).u1h = function ($this$launch, $completion) {
    var tmp = this.v1h($this$launch, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        if (tmp === 0) {
          this.x7_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).v1h = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.i22_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.s21_1 = false;
    this.t21_1 = false;
    this.u21_1 = null;
    this.v21_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).pc(SupervisorJob()));
    var tmp = this;
    tmp.w21_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.x21_1 = ArrayList_init_$Create$();
    this.y21_1 = false;
    this.z21_1 = 8;
  }
  protoOf(GlobalSnapshotManager).j22 = function () {
    if (!this.s21_1) {
      this.s21_1 = true;
      this.u21_1 = Companion_instance.a1x(this.w21_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.gi();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.l22_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).pi = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().j22();
    var context = monotonicFrameClock.pc(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.u1d(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.u22_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).u1h = function ($this$launch, $completion) {
    var tmp = this.v1h($this$launch, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(renderComposable$slambda).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 2;
            this.w7_1 = 1;
            suspendResult = this.u22_1.l1k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 2) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).v1h = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.u22_1, completion);
    i.v22_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.w22_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i18(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.k18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.a13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
