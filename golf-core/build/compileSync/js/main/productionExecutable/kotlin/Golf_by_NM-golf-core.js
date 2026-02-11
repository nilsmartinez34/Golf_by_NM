(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Golf_by_NM:golf-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Golf_by_NM:golf-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Golf_by_NM:golf-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'Golf_by_NM:golf-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Golf_by_NM:golf-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'Golf_by_NM:golf-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'Golf_by_NM:golf-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'Golf_by_NM:golf-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Golf_by_NM:golf-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Golf_by_NM:golf-core'.");
    }
    globalThis['Golf_by_NM:golf-core'] = factory(typeof globalThis['Golf_by_NM:golf-core'] === 'undefined' ? {} : globalThis['Golf_by_NM:golf-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-internal-html-core-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.n5;
  var getNumberHashCode = kotlin_kotlin.$_$.s4;
  var THROW_CCE = kotlin_kotlin.$_$.q6;
  var equals = kotlin_kotlin.$_$.o4;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var toString = kotlin_kotlin.$_$.p5;
  var hashCode = kotlin_kotlin.$_$.v4;
  var getBooleanHashCode = kotlin_kotlin.$_$.q4;
  var to = kotlin_kotlin.$_$.f7;
  var mapOf = kotlin_kotlin.$_$.b3;
  var coerceAtLeast = kotlin_kotlin.$_$.q5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.v1;
  var coerceIn = kotlin_kotlin.$_$.t5;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var Exception = kotlin_kotlin.$_$.l6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.j4;
  var Long = kotlin_kotlin.$_$.n6;
  var checkIndexOverflow = kotlin_kotlin.$_$.j2;
  var first = kotlin_kotlin.$_$.t2;
  var last = kotlin_kotlin.$_$.x2;
  var Enum = kotlin_kotlin.$_$.j6;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var numberToInt = kotlin_kotlin.$_$.k5;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.r5;
  var coerceAtMost = kotlin_kotlin.$_$.s5;
  var charSequenceLength = kotlin_kotlin.$_$.l4;
  var charSequenceGet = kotlin_kotlin.$_$.k4;
  var toString_0 = kotlin_kotlin.$_$.m1;
  var titlecase = kotlin_kotlin.$_$.d6;
  var isLowerCase = kotlin_kotlin.$_$.c6;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var background = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var toList = kotlin_kotlin.$_$.n3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var emptyList = kotlin_kotlin.$_$.p2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KMutableProperty0 = kotlin_kotlin.$_$.x5;
  var THROW_ISE = kotlin_kotlin.$_$.r6;
  var getLocalDelegateReference = kotlin_kotlin.$_$.r4;
  var coerceIn_0 = kotlin_kotlin.$_$.u5;
  var CoroutineImpl = kotlin_kotlin.$_$.e4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.f5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p3;
  var initMetadataForLambda = kotlin_kotlin.$_$.a5;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.x6;
  var numberToLong = kotlin_kotlin.$_$.l5;
  var listOf = kotlin_kotlin.$_$.z2;
  var plus = kotlin_kotlin.$_$.h3;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var Canvas = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var flex = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var marginLeft = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var numberToDouble = kotlin_kotlin.$_$.j5;
  var Range_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var selected = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var listOf_0 = kotlin_kotlin.$_$.a3;
  var Option = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Select = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3D, 'Point3D');
  initMetadataForClass(Club, 'Club');
  initMetadataForClass(TrajectoryResult, 'TrajectoryResult');
  initMetadataForClass(PuttingResult, 'PuttingResult');
  initMetadataForClass(SwingInputData, 'SwingInputData');
  initMetadataForClass(LaunchParams, 'LaunchParams');
  initMetadataForObject(PhysicsEngine, 'PhysicsEngine');
  initMetadataForObject(PuttingPhysicsEngine, 'PuttingPhysicsEngine');
  initMetadataForClass(SwingCanceledException, 'SwingCanceledException', VOID, Exception);
  initMetadataForObject(SwingCaptureProcessor, 'SwingCaptureProcessor');
  initMetadataForClass(AppMode, 'AppMode', VOID, Enum);
  initMetadataForLambda(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForClass(_no_name_provided__qut3iv_0);
  //endregion
  var com_example_golf_by_nm_core_Point$stable;
  var com_example_golf_by_nm_core_Point3D$stable;
  var com_example_golf_by_nm_core_ClubSpecs$stable;
  var com_example_golf_by_nm_core_Club$stable;
  var com_example_golf_by_nm_core_TrajectoryResult$stable;
  var com_example_golf_by_nm_core_PuttingResult$stable;
  var com_example_golf_by_nm_core_SwingInputData$stable;
  var com_example_golf_by_nm_core_LaunchParams$stable;
  function Point(x, y) {
    this.t2c_1 = x;
    this.u2c_1 = y;
  }
  protoOf(Point).toString = function () {
    return 'Point(x=' + this.t2c_1 + ', y=' + this.u2c_1 + ')';
  };
  protoOf(Point).hashCode = function () {
    var result = getNumberHashCode(this.t2c_1);
    result = imul(result, 31) + getNumberHashCode(this.u2c_1) | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!equals(this.t2c_1, tmp0_other_with_cast.t2c_1))
      return false;
    if (!equals(this.u2c_1, tmp0_other_with_cast.u2c_1))
      return false;
    return true;
  };
  function Point3D(x, y, z) {
    this.v2c_1 = x;
    this.w2c_1 = y;
    this.x2c_1 = z;
  }
  protoOf(Point3D).toString = function () {
    return 'Point3D(x=' + this.v2c_1 + ', y=' + this.w2c_1 + ', z=' + this.x2c_1 + ')';
  };
  protoOf(Point3D).hashCode = function () {
    var result = getNumberHashCode(this.v2c_1);
    result = imul(result, 31) + getNumberHashCode(this.w2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2c_1) | 0;
    return result;
  };
  protoOf(Point3D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point3D))
      return false;
    var tmp0_other_with_cast = other instanceof Point3D ? other : THROW_CCE();
    if (!equals(this.v2c_1, tmp0_other_with_cast.v2c_1))
      return false;
    if (!equals(this.w2c_1, tmp0_other_with_cast.w2c_1))
      return false;
    if (!equals(this.x2c_1, tmp0_other_with_cast.x2c_1))
      return false;
    return true;
  };
  function Club(name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph) {
    lengthInches = lengthInches === VOID ? 37.0 : lengthInches;
    smashFactor = smashFactor === VOID ? 1.4 : smashFactor;
    baseSpinRpm = baseSpinRpm === VOID ? 7000.0 : baseSpinRpm;
    rollFactor = rollFactor === VOID ? 0.05 : rollFactor;
    faceAngle = faceAngle === VOID ? 0.0 : faceAngle;
    pgaTargetSpeedMph = pgaTargetSpeedMph === VOID ? 0.0 : pgaTargetSpeedMph;
    this.y2c_1 = name;
    this.z2c_1 = loft;
    this.a2d_1 = lengthInches;
    this.b2d_1 = smashFactor;
    this.c2d_1 = baseSpinRpm;
    this.d2d_1 = rollFactor;
    this.e2d_1 = faceAngle;
    this.f2d_1 = pgaTargetSpeedMph;
  }
  protoOf(Club).g2d = function (name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph) {
    return new Club(name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph);
  };
  protoOf(Club).h2d = function (name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph, $super) {
    name = name === VOID ? this.y2c_1 : name;
    loft = loft === VOID ? this.z2c_1 : loft;
    lengthInches = lengthInches === VOID ? this.a2d_1 : lengthInches;
    smashFactor = smashFactor === VOID ? this.b2d_1 : smashFactor;
    baseSpinRpm = baseSpinRpm === VOID ? this.c2d_1 : baseSpinRpm;
    rollFactor = rollFactor === VOID ? this.d2d_1 : rollFactor;
    faceAngle = faceAngle === VOID ? this.e2d_1 : faceAngle;
    pgaTargetSpeedMph = pgaTargetSpeedMph === VOID ? this.f2d_1 : pgaTargetSpeedMph;
    return $super === VOID ? this.g2d(name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph) : $super.g2d.call(this, name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph);
  };
  protoOf(Club).toString = function () {
    return 'Club(name=' + this.y2c_1 + ', loft=' + this.z2c_1 + ', lengthInches=' + this.a2d_1 + ', smashFactor=' + this.b2d_1 + ', baseSpinRpm=' + this.c2d_1 + ', rollFactor=' + this.d2d_1 + ', faceAngle=' + this.e2d_1 + ', pgaTargetSpeedMph=' + this.f2d_1 + ')';
  };
  protoOf(Club).hashCode = function () {
    var result = getStringHashCode(this.y2c_1);
    result = imul(result, 31) + getNumberHashCode(this.z2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f2d_1) | 0;
    return result;
  };
  protoOf(Club).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Club))
      return false;
    var tmp0_other_with_cast = other instanceof Club ? other : THROW_CCE();
    if (!(this.y2c_1 === tmp0_other_with_cast.y2c_1))
      return false;
    if (!equals(this.z2c_1, tmp0_other_with_cast.z2c_1))
      return false;
    if (!equals(this.a2d_1, tmp0_other_with_cast.a2d_1))
      return false;
    if (!equals(this.b2d_1, tmp0_other_with_cast.b2d_1))
      return false;
    if (!equals(this.c2d_1, tmp0_other_with_cast.c2d_1))
      return false;
    if (!equals(this.d2d_1, tmp0_other_with_cast.d2d_1))
      return false;
    if (!equals(this.e2d_1, tmp0_other_with_cast.e2d_1))
      return false;
    if (!equals(this.f2d_1, tmp0_other_with_cast.f2d_1))
      return false;
    return true;
  };
  function TrajectoryResult(path, clubHeadSpeedMph, ballSpeedMph, smashFactor, launchAngle, swingPath, faceToPath, carryDistance, totalDistance, rollDistance, lateralDeviation, maxHeight, spinRpm, sideSpinRpm, launchVelocity, flightTimeSeconds) {
    rollDistance = rollDistance === VOID ? 0.0 : rollDistance;
    spinRpm = spinRpm === VOID ? 0.0 : spinRpm;
    sideSpinRpm = sideSpinRpm === VOID ? 0.0 : sideSpinRpm;
    launchVelocity = launchVelocity === VOID ? 0.0 : launchVelocity;
    flightTimeSeconds = flightTimeSeconds === VOID ? 0.0 : flightTimeSeconds;
    this.i2d_1 = path;
    this.j2d_1 = clubHeadSpeedMph;
    this.k2d_1 = ballSpeedMph;
    this.l2d_1 = smashFactor;
    this.m2d_1 = launchAngle;
    this.n2d_1 = swingPath;
    this.o2d_1 = faceToPath;
    this.p2d_1 = carryDistance;
    this.q2d_1 = totalDistance;
    this.r2d_1 = rollDistance;
    this.s2d_1 = lateralDeviation;
    this.t2d_1 = maxHeight;
    this.u2d_1 = spinRpm;
    this.v2d_1 = sideSpinRpm;
    this.w2d_1 = launchVelocity;
    this.x2d_1 = flightTimeSeconds;
  }
  protoOf(TrajectoryResult).toString = function () {
    return 'TrajectoryResult(path=' + toString(this.i2d_1) + ', clubHeadSpeedMph=' + this.j2d_1 + ', ballSpeedMph=' + this.k2d_1 + ', smashFactor=' + this.l2d_1 + ', launchAngle=' + this.m2d_1 + ', swingPath=' + this.n2d_1 + ', faceToPath=' + this.o2d_1 + ', carryDistance=' + this.p2d_1 + ', totalDistance=' + this.q2d_1 + ', rollDistance=' + this.r2d_1 + ', lateralDeviation=' + this.s2d_1 + ', maxHeight=' + this.t2d_1 + ', spinRpm=' + this.u2d_1 + ', sideSpinRpm=' + this.v2d_1 + ', launchVelocity=' + this.w2d_1 + ', flightTimeSeconds=' + this.x2d_1 + ')';
  };
  protoOf(TrajectoryResult).hashCode = function () {
    var result = hashCode(this.i2d_1);
    result = imul(result, 31) + getNumberHashCode(this.j2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2d_1) | 0;
    return result;
  };
  protoOf(TrajectoryResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TrajectoryResult))
      return false;
    var tmp0_other_with_cast = other instanceof TrajectoryResult ? other : THROW_CCE();
    if (!equals(this.i2d_1, tmp0_other_with_cast.i2d_1))
      return false;
    if (!equals(this.j2d_1, tmp0_other_with_cast.j2d_1))
      return false;
    if (!equals(this.k2d_1, tmp0_other_with_cast.k2d_1))
      return false;
    if (!equals(this.l2d_1, tmp0_other_with_cast.l2d_1))
      return false;
    if (!equals(this.m2d_1, tmp0_other_with_cast.m2d_1))
      return false;
    if (!equals(this.n2d_1, tmp0_other_with_cast.n2d_1))
      return false;
    if (!equals(this.o2d_1, tmp0_other_with_cast.o2d_1))
      return false;
    if (!equals(this.p2d_1, tmp0_other_with_cast.p2d_1))
      return false;
    if (!equals(this.q2d_1, tmp0_other_with_cast.q2d_1))
      return false;
    if (!equals(this.r2d_1, tmp0_other_with_cast.r2d_1))
      return false;
    if (!equals(this.s2d_1, tmp0_other_with_cast.s2d_1))
      return false;
    if (!equals(this.t2d_1, tmp0_other_with_cast.t2d_1))
      return false;
    if (!equals(this.u2d_1, tmp0_other_with_cast.u2d_1))
      return false;
    if (!equals(this.v2d_1, tmp0_other_with_cast.v2d_1))
      return false;
    if (!equals(this.w2d_1, tmp0_other_with_cast.w2d_1))
      return false;
    if (!equals(this.x2d_1, tmp0_other_with_cast.x2d_1))
      return false;
    return true;
  };
  function PuttingResult(path, totalDistance, finalX, finalY, residualSpeed) {
    this.y2d_1 = path;
    this.z2d_1 = totalDistance;
    this.a2e_1 = finalX;
    this.b2e_1 = finalY;
    this.c2e_1 = residualSpeed;
  }
  protoOf(PuttingResult).toString = function () {
    return 'PuttingResult(path=' + toString(this.y2d_1) + ', totalDistance=' + this.z2d_1 + ', finalX=' + this.a2e_1 + ', finalY=' + this.b2e_1 + ', residualSpeed=' + this.c2e_1 + ')';
  };
  protoOf(PuttingResult).hashCode = function () {
    var result = hashCode(this.y2d_1);
    result = imul(result, 31) + getNumberHashCode(this.z2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c2e_1) | 0;
    return result;
  };
  protoOf(PuttingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PuttingResult))
      return false;
    var tmp0_other_with_cast = other instanceof PuttingResult ? other : THROW_CCE();
    if (!equals(this.y2d_1, tmp0_other_with_cast.y2d_1))
      return false;
    if (!equals(this.z2d_1, tmp0_other_with_cast.z2d_1))
      return false;
    if (!equals(this.a2e_1, tmp0_other_with_cast.a2e_1))
      return false;
    if (!equals(this.b2e_1, tmp0_other_with_cast.b2e_1))
      return false;
    if (!equals(this.c2e_1, tmp0_other_with_cast.c2e_1))
      return false;
    return true;
  };
  function SwingInputData(isValid, failureReason, clubSpeedMph, efficiency, attackAngleDeg, pathDeviationDeg, powerFactor, tempoRatio) {
    failureReason = failureReason === VOID ? null : failureReason;
    clubSpeedMph = clubSpeedMph === VOID ? 0.0 : clubSpeedMph;
    efficiency = efficiency === VOID ? 1.0 : efficiency;
    attackAngleDeg = attackAngleDeg === VOID ? 0.0 : attackAngleDeg;
    pathDeviationDeg = pathDeviationDeg === VOID ? 0.0 : pathDeviationDeg;
    powerFactor = powerFactor === VOID ? 1.0 : powerFactor;
    tempoRatio = tempoRatio === VOID ? 0.0 : tempoRatio;
    this.d2e_1 = isValid;
    this.e2e_1 = failureReason;
    this.f2e_1 = clubSpeedMph;
    this.g2e_1 = efficiency;
    this.h2e_1 = attackAngleDeg;
    this.i2e_1 = pathDeviationDeg;
    this.j2e_1 = powerFactor;
    this.k2e_1 = tempoRatio;
  }
  protoOf(SwingInputData).toString = function () {
    return 'SwingInputData(isValid=' + this.d2e_1 + ', failureReason=' + this.e2e_1 + ', clubSpeedMph=' + this.f2e_1 + ', efficiency=' + this.g2e_1 + ', attackAngleDeg=' + this.h2e_1 + ', pathDeviationDeg=' + this.i2e_1 + ', powerFactor=' + this.j2e_1 + ', tempoRatio=' + this.k2e_1 + ')';
  };
  protoOf(SwingInputData).hashCode = function () {
    var result = getBooleanHashCode(this.d2e_1);
    result = imul(result, 31) + (this.e2e_1 == null ? 0 : getStringHashCode(this.e2e_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k2e_1) | 0;
    return result;
  };
  protoOf(SwingInputData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SwingInputData))
      return false;
    var tmp0_other_with_cast = other instanceof SwingInputData ? other : THROW_CCE();
    if (!(this.d2e_1 === tmp0_other_with_cast.d2e_1))
      return false;
    if (!(this.e2e_1 == tmp0_other_with_cast.e2e_1))
      return false;
    if (!equals(this.f2e_1, tmp0_other_with_cast.f2e_1))
      return false;
    if (!equals(this.g2e_1, tmp0_other_with_cast.g2e_1))
      return false;
    if (!equals(this.h2e_1, tmp0_other_with_cast.h2e_1))
      return false;
    if (!equals(this.i2e_1, tmp0_other_with_cast.i2e_1))
      return false;
    if (!equals(this.j2e_1, tmp0_other_with_cast.j2e_1))
      return false;
    if (!equals(this.k2e_1, tmp0_other_with_cast.k2e_1))
      return false;
    return true;
  };
  function LaunchParams(ballSpeedMps, launchAngleDeg, horizontalLaunchDeg, sideSpinRpm, backSpinRpm) {
    this.l2e_1 = ballSpeedMps;
    this.m2e_1 = launchAngleDeg;
    this.n2e_1 = horizontalLaunchDeg;
    this.o2e_1 = sideSpinRpm;
    this.p2e_1 = backSpinRpm;
  }
  protoOf(LaunchParams).toString = function () {
    return 'LaunchParams(ballSpeedMps=' + this.l2e_1 + ', launchAngleDeg=' + this.m2e_1 + ', horizontalLaunchDeg=' + this.n2e_1 + ', sideSpinRpm=' + this.o2e_1 + ', backSpinRpm=' + this.p2e_1 + ')';
  };
  protoOf(LaunchParams).hashCode = function () {
    var result = getNumberHashCode(this.l2e_1);
    result = imul(result, 31) + getNumberHashCode(this.m2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o2e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p2e_1) | 0;
    return result;
  };
  protoOf(LaunchParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LaunchParams))
      return false;
    var tmp0_other_with_cast = other instanceof LaunchParams ? other : THROW_CCE();
    if (!equals(this.l2e_1, tmp0_other_with_cast.l2e_1))
      return false;
    if (!equals(this.m2e_1, tmp0_other_with_cast.m2e_1))
      return false;
    if (!equals(this.n2e_1, tmp0_other_with_cast.n2e_1))
      return false;
    if (!equals(this.o2e_1, tmp0_other_with_cast.o2e_1))
      return false;
    if (!equals(this.p2e_1, tmp0_other_with_cast.p2e_1))
      return false;
    return true;
  };
  var com_example_golf_by_nm_core_PhysicsEngine$stable;
  function toRadians($this, deg) {
    return deg * 3.141592653589793 / 180.0;
  }
  function PhysicsEngine() {
    PhysicsEngine_instance = this;
    this.q2e_1 = 9.81;
    this.r2e_1 = 1.225;
    this.s2e_1 = 0.0459;
    this.t2e_1 = 0.001432;
    this.u2e_1 = 0.02135;
    this.v2e_1 = 0.999;
    this.w2e_1 = mapOf([to('Dr', new Club('Dr', 10.5, 45.0, 1.5, 2300.0, 0.25)), to('3W', new Club('3W', 15.0, 43.0, 1.42, 3600.0, 0.18)), to('4i', new Club('4i', 24.0, 38.5, 1.37, 5200.0, 0.08)), to('5i', new Club('5i', 27.0, 38.0, 1.32, 5800.0, 0.07)), to('6i', new Club('6i', 30.0, 37.5, 1.27, 6400.0, 0.06)), to('7i', new Club('7i', 34.0, 37.0, 1.22, 7200.0, 0.06)), to('8i', new Club('8i', 37.0, 36.5, 1.17, 8000.0, 0.05)), to('9i', new Club('9i', 41.0, 36.0, 1.12, 8800.0, 0.05)), to('PW', new Club('PW', 45.0, 35.5, 1.07, 10200.0, 0.04)), to('SW', new Club('SW', 54.0, 35.0, 1.03, 11800.0, 0.02)), to('LW', new Club('LW', 58.0, 35.0, 1.0, 13500.0, 0.01))]);
  }
  protoOf(PhysicsEngine).x2e = function (input, club, manualAttackAngle) {
    var vClubMps = input.f2e_1 * input.j2e_1 * 0.44704;
    var vBallMps = vClubMps * club.b2d_1 * input.g2e_1;
    var launchAngle = club.z2c_1 * (0.95 - club.z2c_1 * 0.005) + manualAttackAngle * 0.6;
    var speedRatio = vBallMps / 60.0;
    var spinLoft = coerceAtLeast(club.z2c_1 - manualAttackAngle, 10.0);
    var spinLoftFactor = spinLoft / club.z2c_1;
    var backSpin = club.c2d_1 * speedRatio * spinLoftFactor;
    var sideSpin = (club.e2d_1 - input.i2e_1) * 180.0 * speedRatio;
    var horizontalLaunch = input.i2e_1 * 0.7 + club.e2d_1 * 0.3;
    return new LaunchParams(vBallMps, launchAngle, horizontalLaunch, sideSpin, backSpin);
  };
  protoOf(PhysicsEngine).y2e = function (params, input, club) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var path = ArrayList_init_$Create$();
    var dt = 0.01;
    var t = 0.0;
    var x = 0.0;
    var y = 0.0;
    var z = 0.0;
    var launchRad = toRadians(this, params.m2e_1);
    var yawRad = toRadians(this, params.n2e_1);
    // Inline function 'kotlin.math.cos' call
    var tmp$ret$1 = Math.cos(launchRad);
    var tmp = params.l2e_1 * tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    var vx = tmp * Math.cos(yawRad);
    // Inline function 'kotlin.math.sin' call
    var tmp$ret$3 = Math.sin(launchRad);
    var vy = params.l2e_1 * tmp$ret$3;
    // Inline function 'kotlin.math.cos' call
    var tmp$ret$4 = Math.cos(launchRad);
    var tmp_0 = params.l2e_1 * tmp$ret$4;
    // Inline function 'kotlin.math.sin' call
    var vz = tmp_0 * Math.sin(yawRad);
    var currentBackSpin = params.p2e_1;
    var currentSideSpin = params.o2e_1;
    var maxY = 0.0;
    $l$loop: while (y >= 0.0 && t < 15.0) {
      path.d(new Point3D(x, y, z));
      if (y > maxY)
        maxY = y;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = vx * vx + vy * vy + vz * vz;
      var v = Math.sqrt(x_0);
      if (v < 0.5)
        break $l$loop;
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.pow' call
      var this_0 = currentBackSpin;
      var tmp_1 = Math.pow(this_0, 2);
      // Inline function 'kotlin.math.pow' call
      var this_1 = currentSideSpin;
      var x_1 = tmp_1 + Math.pow(this_1, 2);
      var omegaRad = Math.sqrt(x_1) * 2 * 3.141592653589793 / 60.0;
      var spinParameter = 0.02135 * omegaRad / v;
      // Inline function 'kotlin.math.exp' call
      var x_2 = 0.3 * (v - 35.0);
      var cd_base = 0.2 + 0.25 / (1.0 + Math.exp(x_2));
      // Inline function 'kotlin.math.pow' call
      var cd_spin = 0.35 * Math.pow(spinParameter, 1.8);
      var cd = cd_base + cd_spin;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -3.0 * spinParameter;
      var cl = 0.1 + 0.3 * (1.0 - Math.exp(x_3));
      var dragForce = 0.5 * 1.225 * v * v * 0.001432 * cd;
      var liftForce = 0.5 * 1.225 * v * v * 0.001432 * cl;
      var ax_drag = -(vx / v) * (dragForce / 0.0459);
      var ay_drag = -(vy / v) * (dragForce / 0.0459);
      var az_drag = -(vz / v) * (dragForce / 0.0459);
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.pow' call
      var this_2 = currentBackSpin;
      var tmp_2 = Math.pow(this_2, 2);
      // Inline function 'kotlin.math.pow' call
      var this_3 = currentSideSpin;
      var x_4 = tmp_2 + Math.pow(this_3, 2);
      var tmp$ret$15 = Math.sqrt(x_4);
      var totalSpin = coerceAtLeast(tmp$ret$15, 1.0);
      var liftRatioBack = currentBackSpin / totalSpin;
      var liftRatioSide = currentSideSpin / totalSpin;
      var ay_lift = vx / v * (liftForce / 0.0459) * liftRatioBack;
      var az_lift = vx / v * (liftForce / 0.0459) * liftRatioSide;
      vx = vx + ax_drag * dt;
      vy = vy + (ay_drag + ay_lift - 9.81) * dt;
      vz = vz + (az_drag + az_lift) * dt;
      x = x + vx * dt;
      y = y + vy * dt;
      z = z + vz * dt;
      currentBackSpin = currentBackSpin * 0.999;
      currentSideSpin = currentSideSpin * 0.999;
      t = t + dt;
    }
    if (y < 0) {
      path.d(new Point3D(x, 0.0, z));
    }
    var roll = x * club.d2d_1 * (1.0 - coerceIn(maxY / 50.0, 0.0, 0.8));
    return new TrajectoryResult(path, input.f2e_1 * input.j2e_1, params.l2e_1 / 0.44704, params.l2e_1 / 0.44704 / coerceAtLeast(input.f2e_1 * input.j2e_1, 1.0), params.m2e_1, input.i2e_1, club.e2d_1 - input.i2e_1, x, x + roll, roll, z, maxY, params.p2e_1, params.o2e_1, params.l2e_1, t);
  };
  var PhysicsEngine_instance;
  function PhysicsEngine_getInstance() {
    if (PhysicsEngine_instance == null)
      new PhysicsEngine();
    return PhysicsEngine_instance;
  }
  var com_example_golf_by_nm_core_PuttingPhysicsEngine$stable;
  function toRadians_0($this, deg) {
    return deg * 3.141592653589793 / 180.0;
  }
  function PuttingPhysicsEngine() {
    this.z2e_1 = 9.81;
    this.a2f_1 = 0.131;
    this.b2f_1 = 0.01;
    this.c2f_1 = 0.01;
  }
  protoOf(PuttingPhysicsEngine).d2f = function (targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var path = ArrayList_init_$Create$();
    var thetaX = toRadians_0(this, slopeXDeg);
    var thetaY = toRadians_0(this, slopeYDeg);
    var phiAim = toRadians_0(this, aimAngleDeg);
    // Inline function 'kotlin.math.sqrt' call
    var x = 2 * 0.131 * 9.81 * targetDistance;
    var v0 = Math.sqrt(x);
    // Inline function 'kotlin.math.sin' call
    var vx = v0 * Math.sin(phiAim);
    // Inline function 'kotlin.math.cos' call
    var vy = v0 * Math.cos(phiAim);
    var x_0 = 0.0;
    var y = 0.0;
    var t = 0.0;
    // Inline function 'kotlin.math.sin' call
    var ax_slope = 9.81 * Math.sin(thetaX);
    var tmp = -9.81;
    // Inline function 'kotlin.math.sin' call
    var ay_slope = tmp * Math.sin(thetaY);
    var totalDistTraveled = 0.0;
    $l$loop_0: while (t < 10.0) {
      var prevX = x_0;
      var prevY = y;
      path.d(new Point3D(x_0, y, 0.0));
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = vx * vx + vy * vy;
      var v = Math.sqrt(x_1);
      if (v < 0.01 && t > 0.1)
        break $l$loop_0;
      // Inline function 'kotlin.math.cos' call
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.pow' call
      var tmp_0 = Math.pow(thetaX, 2);
      // Inline function 'kotlin.math.pow' call
      var x_2 = tmp_0 + Math.pow(thetaY, 2);
      var x_3 = Math.sqrt(x_2);
      var cosTheta = Math.cos(x_3);
      var frictionAcc = 0.131 * 9.81 * cosTheta;
      var ax_fric = v > 0 ? -(vx / v) * frictionAcc : 0.0;
      var ay_fric = v > 0 ? -(vy / v) * frictionAcc : 0.0;
      var ax_total = ax_fric + ax_slope;
      var ay_total = ay_fric + ay_slope;
      vx = vx + ax_total * 0.01;
      vy = vy + ay_total * 0.01;
      var dx = vx * 0.01;
      var dy = vy * 0.01;
      x_0 = x_0 + dx;
      y = y + dy;
      var tmp_1 = totalDistTraveled;
      // Inline function 'kotlin.math.sqrt' call
      var x_4 = dx * dx + dy * dy;
      totalDistTraveled = tmp_1 + Math.sqrt(x_4);
      t = t + 0.01;
      // Inline function 'kotlin.math.sqrt' call
      var x_5 = vx * vx + vy * vy;
      var newV = Math.sqrt(x_5);
      if (newV < 0.01 && t > 0.1)
        break $l$loop_0;
    }
    var tmp_2 = totalDistTraveled;
    var tmp_3 = x_0;
    var tmp_4 = y;
    // Inline function 'kotlin.math.sqrt' call
    var x_6 = vx * vx + vy * vy;
    var tmp$ret$13 = Math.sqrt(x_6);
    return new PuttingResult(path, tmp_2, tmp_3, tmp_4, tmp$ret$13);
  };
  protoOf(PuttingPhysicsEngine).e2f = function (targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg, $super) {
    aimAngleDeg = aimAngleDeg === VOID ? 0.0 : aimAngleDeg;
    return $super === VOID ? this.d2f(targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg) : $super.d2f.call(this, targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg);
  };
  var PuttingPhysicsEngine_instance;
  function PuttingPhysicsEngine_getInstance() {
    return PuttingPhysicsEngine_instance;
  }
  var com_example_golf_by_nm_core_SwingCanceledException$stable;
  var com_example_golf_by_nm_core_SwingCaptureProcessor$stable;
  function SwingCanceledException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, SwingCanceledException);
  }
  function SwingCaptureProcessor() {
    SwingCaptureProcessor_instance = this;
    this.f2f_1 = 'SwingCapture';
    this.g2f_1 = 80.0;
    this.h2f_1 = new Long(150, 0);
    this.i2f_1 = 12.0;
    this.j2f_1 = 10.0;
    this.k2f_1 = 2.0;
  }
  protoOf(SwingCaptureProcessor).l2f = function (points, totalDurationMs, screenDensity, explicitPathDeg, speedFactor) {
    if (points.i() < 5 || totalDurationMs.v(new Long(150, 0)) < 0) {
      return new SwingInputData(false, 'Gesture too short');
    }
    var maxY = -3.4028235E38;
    var inflectionIndex = -1;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = points.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'com.example.golf_by_nm.core.SwingCaptureProcessor.processSwing.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      if (item.u2c_1 > maxY) {
        maxY = item.u2c_1;
        inflectionIndex = index_0;
      }
    }
    if (inflectionIndex < 2 || inflectionIndex > (points.i() - 3 | 0)) {
      return new SwingInputData(false, 'Bad swing shape');
    }
    var startPoint = first(points);
    var inflectionPoint = points.o(inflectionIndex);
    var endPoint = last(points);
    var backswingAmplitude = inflectionPoint.u2c_1 - startPoint.u2c_1;
    var backswingGaugeFill = coerceIn(backswingAmplitude / (350.0 * screenDensity), 0.1, 1.0);
    var downswingPoints = points.a1(inflectionIndex, points.i());
    // Inline function 'kotlin.Long.times' call
    var other = downswingPoints.i() / points.i();
    var downswingDuration = totalDurationMs.l2() * other;
    var dx = endPoint.t2c_1 - inflectionPoint.t2c_1;
    var dy = endPoint.u2c_1 - inflectionPoint.u2c_1;
    // Inline function 'kotlin.math.sqrt' call
    var x = dx * dx + dy * dy;
    var totalDistance = Math.sqrt(x);
    var speedPxMs = downswingDuration > 0 ? totalDistance / downswingDuration : 0.0;
    if (speedPxMs < 1.0)
      throw new SwingCanceledException('Swing too slow');
    var baseSpeed = speedPxMs * 12.0 * backswingGaugeFill;
    var clubSpeedMph = coerceIn(baseSpeed * speedFactor, 10.0, 160.0);
    var backswingPointsCount = inflectionIndex;
    var downswingPointsCount = points.i() - inflectionIndex | 0;
    var tempo = downswingPointsCount > 0 ? backswingPointsCount / downswingPointsCount : 0.0;
    var dDownX = endPoint.t2c_1 - inflectionPoint.t2c_1;
    var dDownY = inflectionPoint.u2c_1 - endPoint.u2c_1;
    // Inline function 'kotlin.math.atan2' call
    var pathAngle = Math.atan2(dDownX, dDownY) * 180.0 / 3.141592653589793;
    return new SwingInputData(true, VOID, clubSpeedMph, 1.0, -2.0, coerceIn(pathAngle, -45.0, 45.0), 1.0, tempo);
  };
  protoOf(SwingCaptureProcessor).m2f = function (points, totalDurationMs, screenDensity, explicitPathDeg, speedFactor, $super) {
    explicitPathDeg = explicitPathDeg === VOID ? 0.0 : explicitPathDeg;
    speedFactor = speedFactor === VOID ? 1.0 : speedFactor;
    return $super === VOID ? this.l2f(points, totalDurationMs, screenDensity, explicitPathDeg, speedFactor) : $super.l2f.call(this, points, totalDurationMs, screenDensity, explicitPathDeg, speedFactor);
  };
  var SwingCaptureProcessor_instance;
  function SwingCaptureProcessor_getInstance() {
    if (SwingCaptureProcessor_instance == null)
      new SwingCaptureProcessor();
    return SwingCaptureProcessor_instance;
  }
  var AppMode_RANGE_instance;
  var AppMode_PUTTING_instance;
  var AppMode_entriesInitialized;
  function AppMode_initEntries() {
    if (AppMode_entriesInitialized)
      return Unit_instance;
    AppMode_entriesInitialized = true;
    AppMode_RANGE_instance = new AppMode('RANGE', 0);
    AppMode_PUTTING_instance = new AppMode('PUTTING', 1);
  }
  function AppMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function main() {
    renderComposable('root', ComposableSingletons$MainKt_getInstance().v2f_1);
  }
  function TopCenterMetrics(res, progress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-1831419582);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(res) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m19(progress) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1831419582, $dirty, -1, 'com.example.golf_by_nm.core.TopCenterMetrics (Main.kt:272)');
      }
      $composer_0.r18(-1473798000);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.TopCenterMetrics.<anonymous>' call
        var value = TopCenterMetrics$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.TopCenterMetrics.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1706030719, true, TopCenterMetrics$lambda_0(res, progress), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.TopCenterMetrics.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(TopCenterMetrics$lambda_1(res, progress, $changed));
    }
  }
  function PuttingMetrics(res, ghost, progress, isAimPoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(1310376973);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(res) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k19(ghost) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m19(progress) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.l19(isAimPoint) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(1310376973, $dirty, -1, 'com.example.golf_by_nm.core.PuttingMetrics (Main.kt:282)');
      }
      $composer_0.r18(-1843278211);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingMetrics.<anonymous>' call
        var value = PuttingMetrics$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingMetrics.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1866539438, true, PuttingMetrics$lambda_0(isAimPoint, ghost, res, progress), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingMetrics.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_32(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(PuttingMetrics$lambda_1(res, ghost, progress, isAimPoint, $changed));
    }
  }
  function MetricItem(label, value, unit, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(1793715605);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b10(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b10(value) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b10(unit) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(1793715605, $dirty, -1, 'com.example.golf_by_nm.core.MetricItem (Main.kt:295)');
      }
      $composer_0.r18(-667124103);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>' call
        var value_0 = MetricItem$lambda;
        this_0.s1a(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-160242476, true, MetricItem$lambda_0(label, value, unit), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.s1a(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(MetricItem$lambda_1(label, value, unit, $changed));
    }
  }
  function SettingsModal(sf, onSf, al, onAl, bg, onBg, onClose, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-1445284247);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m19(sf) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k19(onSf) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m19(al) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.k19(onAl) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.b10(bg) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.k19(onBg) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.k19(onClose) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1445284247, $dirty, -1, 'com.example.golf_by_nm.core.SettingsModal (Main.kt:306)');
      }
      $composer_0.r18(518592714);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>' call
        var value = SettingsModal$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(796635658, true, SettingsModal$lambda_0(onClose, sf, onSf, al, onAl, onBg, bg), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_49(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(SettingsModal$lambda_1(sf, onSf, al, onAl, bg, onBg, onClose, $changed));
    }
  }
  function PerformanceHUD(res, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-2042490396);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(res) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2042490396, $dirty, -1, 'com.example.golf_by_nm.core.PerformanceHUD (Main.kt:329)');
      }
      $composer_0.r18(32379175);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PerformanceHUD.<anonymous>' call
        var value = PerformanceHUD$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PerformanceHUD.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(298518819, true, PerformanceHUD$lambda_0(res), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PerformanceHUD.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(PerformanceHUD$lambda_1(res, $changed));
    }
  }
  function ImpactHUD(res, strike, limit, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(1270740458);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(res) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b10(strike) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m19(limit) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(1270740458, $dirty, -1, 'com.example.golf_by_nm.core.ImpactHUD (Main.kt:339)');
      }
      var faceAngle = (strike.t2c_1 - 0.5) * (limit * 2.0);
      var attack = (strike.u2c_1 - 0.5) * 12.0;
      $composer_0.r18(-722805446);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ImpactHUD.<anonymous>' call
        var value = ImpactHUD$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ImpactHUD.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(166406603, true, ImpactHUD$lambda_0(res, faceAngle, attack), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ImpactHUD.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_51(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(ImpactHUD$lambda_1(res, strike, limit, $changed));
    }
  }
  function PuttingHUD(res, ghost, sx, sy, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-1949591755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(res) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k19(ghost) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n19(sx) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.n19(sy) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1949591755, $dirty, -1, 'com.example.golf_by_nm.core.PuttingHUD (Main.kt:350)');
      }
      $composer_0.r18(-590808646);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>' call
        var value = PuttingHUD$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(658238806, true, PuttingHUD$lambda_0(sx, sy, ghost), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (!(res == null)) {
        $composer_0.r18(-590798213);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = this_1.r1a();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>' call
          var value_1 = PuttingHUD$lambda_1;
          this_1.s1a(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1559788901, true, PuttingHUD$lambda_2(res), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.b10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.r1a();
        var tmp_5;
        if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_53(dispatchReceiver_0);
          $composer_2.s1a(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp2_safe_receiver = $composer_0.a1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.d1g(PuttingHUD$lambda_3(res, ghost, sx, sy, $changed));
    }
  }
  function HudRow(label, value, unit, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(1243270677);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b10(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b10(value) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b10(unit) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(1243270677, $dirty, -1, 'com.example.golf_by_nm.core.HudRow (Main.kt:367)');
      }
      $composer_0.r18(836530997);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>' call
        var value_0 = HudRow$lambda;
        this_0.s1a(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(319241428, true, HudRow$lambda_0(label, unit, value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_58(dispatchReceiver);
        $composer_1.s1a(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(HudRow$lambda_1(label, value, unit, $changed));
    }
  }
  function ClubHorizontalBar(clubs, selected, onSelect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-600087743);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k19(clubs) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b10(selected) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.k19(onSelect) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-600087743, $dirty, -1, 'com.example.golf_by_nm.core.ClubHorizontalBar (Main.kt:372)');
      }
      $composer_0.r18(252573748);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>' call
        var value = ClubHorizontalBar$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-912806080, true, ClubHorizontalBar$lambda_0(clubs, selected, onSelect), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_60(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(ClubHorizontalBar$lambda_1(clubs, selected, onSelect, $changed));
    }
  }
  function PuttingControls(sx, sy, hole, onSx, onSy, onHole, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-1347687640);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.n19(sx) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.n19(sy) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n19(hole) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.k19(onSx) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.k19(onSy) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.k19(onHole) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1347687640, $dirty, -1, 'com.example.golf_by_nm.core.PuttingControls (Main.kt:377)');
      }
      $composer_0.r18(-73211195);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>' call
        var value = PuttingControls$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-770280567, true, PuttingControls$lambda_0(hole, onHole, sx, onSx, sy, onSy), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_64(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(PuttingControls$lambda_1(sx, sy, hole, onSx, onSy, onHole, $changed));
    }
  }
  function InteractiveImpactBall(strike, onUpdate, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z19(-134149285);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b10(strike) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k19(onUpdate) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(-134149285, $dirty, -1, 'com.example.golf_by_nm.core.InteractiveImpactBall (Main.kt:386)');
      }
      $composer_0.r18(-1912004790);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous>' call
        var value = InteractiveImpactBall$lambda;
        this_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-446867622, true, InteractiveImpactBall$lambda_0(strike, onUpdate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    var tmp1_safe_receiver = $composer_0.a1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1g(InteractiveImpactBall$lambda_1(strike, onUpdate, $changed));
    }
  }
  function setupMainCanvas(canvas, res, progress) {
    var tmp = canvas.getContext('2d');
    var tmp0_elvis_lhs = tmp instanceof CanvasRenderingContext2D ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var ctx = tmp_0;
    var rect = canvas.getBoundingClientRect();
    if (!(canvas.width === numberToInt(rect.width)) || !(canvas.height === numberToInt(rect.height))) {
      canvas.width = numberToInt(rect.width);
      canvas.height = numberToInt(rect.height);
    }
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
    var w = canvas.width;
    var h = canvas.height;
    var horizonY = h * 0.38;
    var groundStartY = h * 0.88;
    var k = 0.0052;
    var groundRange = groundStartY - horizonY;
    if (!(res == null)) {
      var pathPoints = res.i2d_1;
      var pointsCount = coerceAtLeast_0(numberToInt(pathPoints.i() * progress), 1);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 2.0;
      var inductionVariable = 0;
      var last = coerceAtMost(pointsCount, pathPoints.i() - 1 | 0);
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var p = pathPoints.o(i);
          var dist = p.w2c_1;
          // Inline function 'kotlin.math.exp' call
          var x = -k * dist;
          var scale = Math.exp(x);
          var liftFactor = 1.2 - 0.4 * coerceIn(dist / 250.0, 0.0, 1.0);
          var screenX = w * 0.5 + p.v2c_1 * scale * 15.0;
          var screenY = horizonY + groundRange * scale - p.x2c_1 * scale * 19.0 * liftFactor;
          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
          if (i === (pointsCount - 2 | 0)) {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(screenX, screenY, coerceAtLeast(5.0 * scale, 1.5), 0.0, 2.0 * 3.141592653589793);
            ctx.fill();
          }
        }
         while (inductionVariable < last);
      ctx.stroke();
    } else {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(w * 0.5, groundStartY, 10.0, 0.0, 2.0 * 3.141592653589793);
      ctx.fill();
    }
  }
  function setupPuttingCanvas(canvas, res, ghost, progress, holeDist) {
    var tmp = canvas.getContext('2d');
    var tmp0_elvis_lhs = tmp instanceof CanvasRenderingContext2D ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var ctx = tmp_0;
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0.0, 0.0, w, h);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1.0;
    var step = 40.0;
    var inductionVariable = 0;
    var last = numberToInt(w / step);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.beginPath();
        ctx.moveTo(i * step, 0.0);
        ctx.lineTo(i * step, h);
        ctx.stroke();
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = numberToInt(h / step);
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        ctx.beginPath();
        ctx.moveTo(0.0, i_0 * step);
        ctx.lineTo(w, i_0 * step);
        ctx.stroke();
      }
       while (!(i_0 === last_0));
    var holeX = w * 0.5;
    var holeY = h * 0.8 - holeDist * 50.0;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.arc(holeX, holeY, 15.0, 0.0, 2.0 * 3.141592653589793);
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2.0;
    ctx.stroke();
    var ballStartX = w * 0.5;
    var ballStartY = h * 0.8;
    if (!(ghost == null)) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(252, 211, 77, 0.3)';
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [5.0, 5.0];
      ctx.setLineDash(tmp$ret$2);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var tmp0_iterator = ghost.y2d_1.f();
      while (tmp0_iterator.g()) {
        var item = tmp0_iterator.h();
        // Inline function 'com.example.golf_by_nm.core.setupPuttingCanvas.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i_1 = checkIndexOverflow(tmp1);
        var px = ballStartX + item.v2c_1 * 50.0;
        var py = ballStartY - item.w2c_1 * 50.0;
        if (i_1 === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      ctx.setLineDash(tmp$ret$5);
    }
    if (!(res == null)) {
      var points = res.y2d_1;
      var count = coerceAtLeast_0(numberToInt(points.i() * progress), 1);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 3.0;
      var inductionVariable_1 = 0;
      var last_1 = coerceAtMost(count, points.i());
      if (inductionVariable_1 < last_1)
        do {
          var i_2 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var p = points.o(i_2);
          var px_0 = ballStartX + p.v2c_1 * 50.0;
          var py_0 = ballStartY - p.w2c_1 * 50.0;
          if (i_2 === 0) {
            ctx.moveTo(px_0, py_0);
          } else {
            ctx.lineTo(px_0, py_0);
          }
          if (i_2 === (count - 1 | 0)) {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(px_0, py_0, 6.0, 0.0, 2.0 * 3.141592653589793);
            ctx.fill();
          }
        }
         while (inductionVariable_1 < last_1);
      ctx.stroke();
    } else {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(ballStartX, ballStartY, 8.0, 0.0, 2.0 * 3.141592653589793);
      ctx.fill();
    }
  }
  function drawImpactBall(canvas, strike) {
    var tmp = canvas.getContext('2d');
    var tmp0_elvis_lhs = tmp instanceof CanvasRenderingContext2D ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var ctx = tmp_0;
    var center = canvas.width / 2.0;
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
    ctx.strokeStyle = '#1D4ED8';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(center - 12, 0.0);
    ctx.lineTo(center - 12, canvas.height);
    ctx.moveTo(center + 12, 0.0);
    ctx.lineTo(center + 12, canvas.height);
    ctx.stroke();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(center, 0.0);
    ctx.lineTo(center, canvas.height);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(strike.t2c_1 * canvas.width, strike.u2c_1 * canvas.height, 6.0, 0.0, 2.0 * 3.141592653589793);
    ctx.fill();
  }
  function processSwingAction(pts, dur, dens, sf, clb, strk, lim, onRes) {
    var face = (strk.t2c_1 - 0.5) * (lim * 2.0);
    var att = (strk.u2c_1 - 0.5) * 12.0;
    var input = SwingCaptureProcessor_getInstance().m2f(pts, dur, dens, VOID, sf);
    if (input.d2e_1) {
      var cFace = clb.h2d(VOID, VOID, VOID, VOID, VOID, VOID, face);
      onRes(PhysicsEngine_getInstance().y2e(PhysicsEngine_getInstance().x2e(input, cFace, att), input, cFace));
    }
  }
  function executeSchoolSwing(pwr, pth, clb, sf, strk, lim, onRes) {
    var face = (strk.t2c_1 - 0.5) * (lim * 2.0);
    var att = (strk.u2c_1 - 0.5) * 12.0;
    var tmp0_pathDeviationDeg = pth * 10.0;
    var input = new SwingInputData(true, VOID, 100.0, 1.0, VOID, tmp0_pathDeviationDeg, pwr);
    var cFace = clb.h2d(VOID, VOID, VOID, VOID, VOID, VOID, face);
    onRes(PhysicsEngine_getInstance().y2e(PhysicsEngine_getInstance().x2e(input, cFace, att), input, cFace));
  }
  function processPuttAction(pts, holeDist, sx, sy, onRes) {
    if (pts.i() < 2)
      return Unit_instance;
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'kotlin.math.pow' call
    var this_0 = first(pts).t2c_1 - last(pts).t2c_1;
    var tmp = Math.pow(this_0, 2.0);
    // Inline function 'kotlin.math.pow' call
    var this_1 = first(pts).u2c_1 - last(pts).u2c_1;
    var x = tmp + Math.pow(this_1, 2.0);
    var distPx = Math.sqrt(x);
    onRes(PuttingPhysicsEngine_instance.e2f(coerceIn(distPx / 50.0, 0.5, 20.0), sx, sy));
  }
  function solvePerfectPutt(targetY, slopeX, slopeY, $completion) {
    var bestAim = 0.0;
    var bestPower = targetY;
    if (slopeY > 0)
      bestPower = targetY * (1.0 + slopeY * 0.03);
    else if (slopeY < 0)
      bestPower = targetY * (1.0 + slopeY * 0.02);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.example.golf_by_nm.core.solvePerfectPutt.<anonymous>' call
        var res = PuttingPhysicsEngine_instance.d2f(bestPower, slopeX, slopeY, bestAim);
        bestAim = bestAim - res.a2e_1 / targetY * 50.0;
      }
       while (inductionVariable < 5);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 3)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'com.example.golf_by_nm.core.solvePerfectPutt.<anonymous>' call
        var res_0 = PuttingPhysicsEngine_instance.d2f(bestPower, slopeX, slopeY, bestAim);
        bestPower = bestPower - (res_0.b2e_1 - targetY) * 0.8;
      }
       while (inductionVariable_0 < 3);
    return PuttingPhysicsEngine_instance.d2f(bestPower, slopeX, slopeY, bestAim);
  }
  function format(_this__u8e3s4, digits) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4.toFixed(digits);
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function format_0(_this__u8e3s4, digits) {
    return format(_this__u8e3s4, digits);
  }
  function capitalize(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'com.example.golf_by_nm.core.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$ref_y67wvx($start, $duration, $flightPercent$delegate) {
    var l = function (p0) {
      invoke$_anonymous_$_anonymous_$animate_if052x($flightPercent$delegate, $start, $duration, p0);
      return Unit_instance;
    };
    l.callableName = '<anonymous>$<anonymous>$animate';
    return l;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$0$ref_osn5bl($start, $duration, $flightPercent$delegate) {
    var l = function (p0) {
      invoke$_anonymous_$_anonymous_$animate$0_btpy3x($flightPercent$delegate, $start, $duration, p0);
      return Unit_instance;
    };
    l.callableName = '<anonymous>$<anonymous>$animate$0';
    return l;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1684906677, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:110)');
    }
    Text('RANGE', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1773533428, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-2.<anonymous> (Main.kt:115)');
    }
    Text('GREEN', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1882489225, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-3.<anonymous> (Main.kt:231)');
    }
    $composer_0.r18(1903552236);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (false || it === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80;
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t18();
    Div(tmp0_group, null, $composer_0, 6, 2);
    Text('RECOMMENDED LINE', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($this$Div) {
    $this$Div.c23(['legend-color']);
    $this$Div.a23(ComposableSingletons$MainKt$lambda_3$lambda$lambda$lambda_3m2q0b);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda$lambda_3m2q0b($this$style) {
    background($this$style, 'var(--accent-gold)');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1494146026, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-4.<anonymous> (Main.kt:230)');
    }
    $composer_0.r18(-883865152);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (false || it === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz;
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t18();
    Div(tmp0_group, ComposableSingletons$MainKt_getInstance().p2f_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz($this$Div) {
    $this$Div.c23(['legend-item']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-350342924, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-5.<anonymous> (Main.kt:239)');
    }
    Text('\u2699\uFE0F', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1094089123, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-6.<anonymous> (Main.kt:240)');
    }
    Text('\uD83D\uDD04', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1696770872, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous> (Main.kt:250)');
    }
    Text('SCHOOL', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_8$lambda_h1qhie($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1331435809, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-8.<anonymous> (Main.kt:258)');
    }
    Text('AIM POINT', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2106145729, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous> (Main.kt:22)');
    }
    var availableClubs = toList(PhysicsEngine_getInstance().w2e_1.n1());
    $composer_0.r18(-1936379627);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (false || it === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value = mutableStateOf(AppMode_RANGE_getInstance());
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t18();
    var appMode$delegate = tmp0_group;
    $composer_0.r18(-1936377299);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.r1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_0 = mutableStateOf(false);
      $composer_0.s1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t18();
    var isSettingsOpen$delegate = tmp1_group;
    $composer_0.r18(-1936374242);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.r1a();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_1 = mutableStateOf(first(availableClubs));
      $composer_0.s1a(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.t18();
    var selectedClub$delegate = tmp2_group;
    $composer_0.r18(-1936371623);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.r1a();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_2 = mutableStateOf(new Point(0.5, 0.5));
      $composer_0.s1a(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.t18();
    var strikePosition$delegate = tmp3_group;
    $composer_0.r18(-1936369089);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.r1a();
    var tmp_7;
    if (false || it_3 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_3 = mutableStateOf(null);
      $composer_0.s1a(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.t18();
    var trajectoryResult$delegate = tmp4_group;
    $composer_0.r18(-1936366579);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.r1a();
    var tmp_9;
    if (false || it_4 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_4 = mutableStateOf(false);
      $composer_0.s1a(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.t18();
    var isSwinging$delegate = tmp5_group;
    $composer_0.r18(-1936364563);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.r1a();
    var tmp_11;
    if (false || it_5 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_5 = mutableStateOf(false);
      $composer_0.s1a(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.t18();
    var isSchoolMode$delegate = tmp6_group;
    $composer_0.r18(-1936362581);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.r1a();
    var tmp_13;
    if (false || it_6 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_6 = mutableStateOf(0.0);
      $composer_0.s1a(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.t18();
    var schoolPower$delegate = tmp7_group;
    $composer_0.r18(-1936360693);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.r1a();
    var tmp_15;
    if (false || it_7 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_7 = mutableStateOf(0.0);
      $composer_0.s1a(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.t18();
    var schoolPath$delegate = tmp8_group;
    $composer_0.r18(-1936357604);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_8 = $composer_0.r1a();
    var tmp_17;
    if (false || it_8 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_8 = mutableStateOf(null);
      $composer_0.s1a(value_8);
      tmp_17 = value_8;
    } else {
      tmp_17 = it_8;
    }
    var tmp_18 = tmp_17;
    var tmp9_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
    $composer_0.t18();
    var puttingResult$delegate = tmp9_group;
    $composer_0.r18(-1936355140);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_9 = $composer_0.r1a();
    var tmp_19;
    if (false || it_9 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_9 = mutableStateOf(null);
      $composer_0.s1a(value_9);
      tmp_19 = value_9;
    } else {
      tmp_19 = it_9;
    }
    var tmp_20 = tmp_19;
    var tmp10_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
    $composer_0.t18();
    var ghostResult$delegate = tmp10_group;
    $composer_0.r18(-1936352755);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_10 = $composer_0.r1a();
    var tmp_21;
    if (false || it_10 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_10 = mutableStateOf(false);
      $composer_0.s1a(value_10);
      tmp_21 = value_10;
    } else {
      tmp_21 = it_10;
    }
    var tmp_22 = tmp_21;
    var tmp11_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
    $composer_0.t18();
    var isRolling$delegate = tmp11_group;
    $composer_0.r18(-1936350933);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_11 = $composer_0.r1a();
    var tmp_23;
    if (false || it_11 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_11 = mutableStateOf(0.0);
      $composer_0.s1a(value_11);
      tmp_23 = value_11;
    } else {
      tmp_23 = it_11;
    }
    var tmp_24 = tmp_23;
    var tmp12_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
    $composer_0.t18();
    var slopeX$delegate = tmp12_group;
    $composer_0.r18(-1936349173);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_12 = $composer_0.r1a();
    var tmp_25;
    if (false || it_12 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_12 = mutableStateOf(0.0);
      $composer_0.s1a(value_12);
      tmp_25 = value_12;
    } else {
      tmp_25 = it_12;
    }
    var tmp_26 = tmp_25;
    var tmp13_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
    $composer_0.t18();
    var slopeY$delegate = tmp13_group;
    $composer_0.r18(-1936347155);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_13 = $composer_0.r1a();
    var tmp_27;
    if (false || it_13 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_13 = mutableStateOf(false);
      $composer_0.s1a(value_13);
      tmp_27 = value_13;
    } else {
      tmp_27 = it_13;
    }
    var tmp_28 = tmp_27;
    var tmp14_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
    $composer_0.t18();
    var isAimPointMode$delegate = tmp14_group;
    $composer_0.r18(-1936345141);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_14 = $composer_0.r1a();
    var tmp_29;
    if (false || it_14 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_14 = mutableStateOf(5.0);
      $composer_0.s1a(value_14);
      tmp_29 = value_14;
    } else {
      tmp_29 = it_14;
    }
    var tmp_30 = tmp_29;
    var tmp15_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
    $composer_0.t18();
    var holeDistance$delegate = tmp15_group;
    $composer_0.r18(-1936342132);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_15 = $composer_0.r1a();
    var tmp_31;
    if (false || it_15 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_15 = mutableStateOf(1.0);
      $composer_0.s1a(value_15);
      tmp_31 = value_15;
    } else {
      tmp_31 = it_15;
    }
    var tmp_32 = tmp_31;
    var tmp16_group = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
    $composer_0.t18();
    var speedFactor$delegate = tmp16_group;
    $composer_0.r18(-1936340211);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_16 = $composer_0.r1a();
    var tmp_33;
    if (false || it_16 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_16 = mutableStateOf(10.0);
      $composer_0.s1a(value_16);
      tmp_33 = value_16;
    } else {
      tmp_33 = it_16;
    }
    var tmp_34 = tmp_33;
    var tmp17_group = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
    $composer_0.t18();
    var angleLimit$delegate = tmp17_group;
    $composer_0.r18(-1936337998);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_17 = $composer_0.r1a();
    var tmp_35;
    if (false || it_17 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_17 = mutableStateOf('mountain');
      $composer_0.s1a(value_17);
      tmp_35 = value_17;
    } else {
      tmp_35 = it_17;
    }
    var tmp_36 = tmp_35;
    var tmp18_group = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
    $composer_0.t18();
    var selectedBackground$delegate = tmp18_group;
    $composer_0.r18(-1936334678);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_18 = $composer_0.r1a();
    var tmp_37;
    if (false || it_18 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_18 = mutableStateOf(new Long(0, 0));
      $composer_0.s1a(value_18);
      tmp_37 = value_18;
    } else {
      tmp_37 = it_18;
    }
    var tmp_38 = tmp_37;
    var tmp19_group = (tmp_38 == null ? true : !(tmp_38 == null)) ? tmp_38 : THROW_CCE();
    $composer_0.t18();
    var swingStartTime$delegate = tmp19_group;
    $composer_0.r18(-1936332768);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_19 = $composer_0.r1a();
    var tmp_39;
    if (false || it_19 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_19 = mutableStateOf(emptyList());
      $composer_0.s1a(value_19);
      tmp_39 = value_19;
    } else {
      tmp_39 = it_19;
    }
    var tmp_40 = tmp_39;
    var tmp20_group = (tmp_40 == null ? true : !(tmp_40 == null)) ? tmp_40 : THROW_CCE();
    $composer_0.t18();
    var swingPoints$delegate = tmp20_group;
    $composer_0.r18(-1936330134);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_20 = $composer_0.r1a();
    var tmp_41;
    if (false || it_20 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_20 = mutableStateOf(0.0);
      $composer_0.s1a(value_20);
      tmp_41 = value_20;
    } else {
      tmp_41 = it_20;
    }
    var tmp_42 = tmp_41;
    var tmp21_group = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
    $composer_0.t18();
    var flightPercent$delegate = tmp21_group;
    var tmp_43 = [invoke$lambda_25(isAimPointMode$delegate), invoke$lambda_21(slopeX$delegate), invoke$lambda_23(slopeY$delegate), invoke$lambda_27(holeDistance$delegate)];
    $composer_0.r18(-1936325557);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_21 = $composer_0.r1a();
    var tmp_44;
    if (false || it_21 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_21 = ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_0(isAimPointMode$delegate, holeDistance$delegate, slopeX$delegate, slopeY$delegate, ghostResult$delegate, null);
      $composer_0.s1a(value_21);
      tmp_44 = value_21;
    } else {
      tmp_44 = it_21;
    }
    var tmp_45 = tmp_44;
    var tmp22_group = (tmp_45 == null ? true : !(tmp_45 == null)) ? tmp_45 : THROW_CCE();
    $composer_0.t18();
    LaunchedEffect(tmp_43, tmp22_group, $composer_0, 0);
    var tmp_46 = invoke$lambda_7(trajectoryResult$delegate);
    var tmp_47 = invoke$lambda_17(puttingResult$delegate);
    $composer_0.r18(-1936315733);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_22 = $composer_0.r1a();
    var tmp_48;
    if (false || it_22 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_22 = ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_2(appMode$delegate, trajectoryResult$delegate, puttingResult$delegate, flightPercent$delegate, null);
      $composer_0.s1a(value_22);
      tmp_48 = value_22;
    } else {
      tmp_48 = it_22;
    }
    var tmp_49 = tmp_48;
    var tmp23_group = (tmp_49 == null ? true : !(tmp_49 == null)) ? tmp_49 : THROW_CCE();
    $composer_0.t18();
    LaunchedEffect_0(tmp_46, tmp_47, tmp23_group, $composer_0, 0);
    $composer_0.r18(-1936277566);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_23 = $composer_0.r1a();
    var tmp_50;
    if (false || it_23 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_23 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm;
      $composer_0.s1a(value_23);
      tmp_50 = value_23;
    } else {
      tmp_50 = it_23;
    }
    var tmp_51 = tmp_50;
    var tmp24_group = (tmp_51 == null ? true : !(tmp_51 == null)) ? tmp_51 : THROW_CCE();
    $composer_0.t18();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(955904224, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_0(appMode$delegate, trajectoryResult$delegate, flightPercent$delegate, puttingResult$delegate, ghostResult$delegate, isAimPointMode$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.b10(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_24 = $composer_1.r1a();
    var tmp_52;
    if (invalid || it_24 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>' call
      var value_24 = ComposableLambda$invoke$ref_8(dispatchReceiver);
      $composer_1.s1a(value_24);
      tmp_52 = value_24;
    } else {
      tmp_52 = it_24;
    }
    var tmp_53 = tmp_52;
    var tmp0 = (tmp_53 == null ? true : !(tmp_53 == null)) ? tmp_53 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    Div(tmp24_group, tmp0, $composer_0, 54, 0);
    $composer_0.r18(-1936267550);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_25 = $composer_0.r1a();
    var tmp_54;
    if (false || it_25 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_25 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_1;
      $composer_0.s1a(value_25);
      tmp_54 = value_25;
    } else {
      tmp_54 = it_25;
    }
    var tmp_55 = tmp_54;
    var tmp25_group = (tmp_55 == null ? true : !(tmp_55 == null)) ? tmp_55 : THROW_CCE();
    $composer_0.t18();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
    var dispatchReceiver_0 = rememberComposableLambda(89484105, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_2(appMode$delegate, trajectoryResult$delegate, puttingResult$delegate, selectedBackground$delegate, flightPercent$delegate, ghostResult$delegate, holeDistance$delegate, swingStartTime$delegate, swingPoints$delegate, isSwinging$delegate, isSchoolMode$delegate, schoolPower$delegate, schoolPath$delegate, selectedClub$delegate, speedFactor$delegate, strikePosition$delegate, angleLimit$delegate, slopeX$delegate, slopeY$delegate, isAimPointMode$delegate, isSettingsOpen$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_2.b10(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_26 = $composer_2.r1a();
    var tmp_56;
    if (invalid_0 || it_26 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>' call
      var value_26 = ComposableLambda$invoke$ref_14(dispatchReceiver_0);
      $composer_2.s1a(value_26);
      tmp_56 = value_26;
    } else {
      tmp_56 = it_26;
    }
    var tmp_57 = tmp_56;
    var tmp0_0 = (tmp_57 == null ? true : !(tmp_57 == null)) ? tmp_57 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    Div(tmp25_group, tmp0_0, $composer_0, 54, 0);
    $composer_0.r18(-1936020667);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_27 = $composer_0.r1a();
    var tmp_58;
    if (false || it_27 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value_27 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_3;
      $composer_0.s1a(value_27);
      tmp_58 = value_27;
    } else {
      tmp_58 = it_27;
    }
    var tmp_59 = tmp_58;
    var tmp26_group = (tmp_59 == null ? true : !(tmp_59 == null)) ? tmp_59 : THROW_CCE();
    $composer_0.t18();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
    var dispatchReceiver_1 = rememberComposableLambda(1690650152, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_4(appMode$delegate, availableClubs, selectedClub$delegate, isSchoolMode$delegate, strikePosition$delegate, slopeX$delegate, slopeY$delegate, holeDistance$delegate, isAimPointMode$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_3 = $composer_0;
    sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_3.b10(dispatchReceiver_1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_28 = $composer_3.r1a();
    var tmp_60;
    if (invalid_1 || it_28 === Companion_getInstance().j13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>' call
      var value_28 = ComposableLambda$invoke$ref_17(dispatchReceiver_1);
      $composer_3.s1a(value_28);
      tmp_60 = value_28;
    } else {
      tmp_60 = it_28;
    }
    var tmp_61 = tmp_60;
    var tmp0_1 = (tmp_61 == null ? true : !(tmp_61 == null)) ? tmp_61 : THROW_CCE();
    sourceInformationMarkerEnd($composer_3);
    Div(tmp26_group, tmp0_1, $composer_0, 54, 0);
    if (invoke$lambda_1(isSettingsOpen$delegate)) {
      var tmp_62 = invoke$lambda_29(speedFactor$delegate);
      $composer_0.r18(-1935982817);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_29 = $composer_0.r1a();
      var tmp_63;
      if (false || it_29 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
        var value_29 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_5(speedFactor$delegate);
        $composer_0.s1a(value_29);
        tmp_63 = value_29;
      } else {
        tmp_63 = it_29;
      }
      var tmp_64 = tmp_63;
      var tmp27_group = (tmp_64 == null ? true : !(tmp_64 == null)) ? tmp_64 : THROW_CCE();
      $composer_0.t18();
      var tmp_65 = invoke$lambda_31(angleLimit$delegate);
      $composer_0.r18(-1935981730);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_30 = $composer_0.r1a();
      var tmp_66;
      if (false || it_30 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
        var value_30 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_6(angleLimit$delegate);
        $composer_0.s1a(value_30);
        tmp_66 = value_30;
      } else {
        tmp_66 = it_30;
      }
      var tmp_67 = tmp_66;
      var tmp28_group = (tmp_67 == null ? true : !(tmp_67 == null)) ? tmp_67 : THROW_CCE();
      $composer_0.t18();
      var tmp_68 = invoke$lambda_33(selectedBackground$delegate);
      $composer_0.r18(-1935980410);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_31 = $composer_0.r1a();
      var tmp_69;
      if (false || it_31 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
        var value_31 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_7(selectedBackground$delegate);
        $composer_0.s1a(value_31);
        tmp_69 = value_31;
      } else {
        tmp_69 = it_31;
      }
      var tmp_70 = tmp_69;
      var tmp29_group = (tmp_70 == null ? true : !(tmp_70 == null)) ? tmp_70 : THROW_CCE();
      $composer_0.t18();
      $composer_0.r18(-1935979483);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_32 = $composer_0.r1a();
      var tmp_71;
      if (false || it_32 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
        var value_32 = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_8(isSettingsOpen$delegate);
        $composer_0.s1a(value_32);
        tmp_71 = value_32;
      } else {
        tmp_71 = it_32;
      }
      var tmp_72 = tmp_71;
      var tmp30_group = (tmp_72 == null ? true : !(tmp_72 == null)) ? tmp_72 : THROW_CCE();
      $composer_0.t18();
      SettingsModal(tmp_62, tmp27_group, tmp_65, tmp28_group, tmp_68, tmp29_group, tmp30_group, $composer_0, 1772592);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function invoke$lambda($appMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('appMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $appMode$delegate.i1();
  }
  function invoke$lambda_0($appMode$delegate, _set____db54di) {
    getLocalDelegateReference('appMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $appMode$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_1($isSettingsOpen$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isSettingsOpen', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isSettingsOpen$delegate.i1();
  }
  function invoke$lambda_2($isSettingsOpen$delegate, _set____db54di) {
    getLocalDelegateReference('isSettingsOpen', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isSettingsOpen$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_3($selectedClub$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedClub', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedClub$delegate.i1();
  }
  function invoke$lambda_4($selectedClub$delegate, _set____db54di) {
    getLocalDelegateReference('selectedClub', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedClub$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_5($strikePosition$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('strikePosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $strikePosition$delegate.i1();
  }
  function invoke$lambda_6($strikePosition$delegate, _set____db54di) {
    getLocalDelegateReference('strikePosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $strikePosition$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_7($trajectoryResult$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('trajectoryResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $trajectoryResult$delegate.i1();
  }
  function invoke$lambda_8($trajectoryResult$delegate, _set____db54di) {
    getLocalDelegateReference('trajectoryResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $trajectoryResult$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_9($isSwinging$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isSwinging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isSwinging$delegate.i1();
  }
  function invoke$lambda_10($isSwinging$delegate, _set____db54di) {
    getLocalDelegateReference('isSwinging', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isSwinging$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_11($isSchoolMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isSchoolMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isSchoolMode$delegate.i1();
  }
  function invoke$lambda_12($isSchoolMode$delegate, _set____db54di) {
    getLocalDelegateReference('isSchoolMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isSchoolMode$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_13($schoolPower$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('schoolPower', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $schoolPower$delegate.i1();
  }
  function invoke$lambda_14($schoolPower$delegate, _set____db54di) {
    getLocalDelegateReference('schoolPower', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $schoolPower$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_15($schoolPath$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('schoolPath', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $schoolPath$delegate.i1();
  }
  function invoke$lambda_16($schoolPath$delegate, _set____db54di) {
    getLocalDelegateReference('schoolPath', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $schoolPath$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_17($puttingResult$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('puttingResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $puttingResult$delegate.i1();
  }
  function invoke$lambda_18($puttingResult$delegate, _set____db54di) {
    getLocalDelegateReference('puttingResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $puttingResult$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_19($ghostResult$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('ghostResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $ghostResult$delegate.i1();
  }
  function invoke$lambda_20($ghostResult$delegate, _set____db54di) {
    getLocalDelegateReference('ghostResult', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $ghostResult$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_21($slopeX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('slopeX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $slopeX$delegate.i1();
  }
  function invoke$lambda_22($slopeX$delegate, _set____db54di) {
    getLocalDelegateReference('slopeX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $slopeX$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_23($slopeY$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('slopeY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $slopeY$delegate.i1();
  }
  function invoke$lambda_24($slopeY$delegate, _set____db54di) {
    getLocalDelegateReference('slopeY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $slopeY$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_25($isAimPointMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isAimPointMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isAimPointMode$delegate.i1();
  }
  function invoke$lambda_26($isAimPointMode$delegate, _set____db54di) {
    getLocalDelegateReference('isAimPointMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isAimPointMode$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_27($holeDistance$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('holeDistance', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $holeDistance$delegate.i1();
  }
  function invoke$lambda_28($holeDistance$delegate, _set____db54di) {
    getLocalDelegateReference('holeDistance', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $holeDistance$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_29($speedFactor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('speedFactor', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $speedFactor$delegate.i1();
  }
  function invoke$lambda_30($speedFactor$delegate, _set____db54di) {
    getLocalDelegateReference('speedFactor', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $speedFactor$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_31($angleLimit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('angleLimit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $angleLimit$delegate.i1();
  }
  function invoke$lambda_32($angleLimit$delegate, _set____db54di) {
    getLocalDelegateReference('angleLimit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $angleLimit$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_33($selectedBackground$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedBackground', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedBackground$delegate.i1();
  }
  function invoke$lambda_34($selectedBackground$delegate, _set____db54di) {
    getLocalDelegateReference('selectedBackground', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedBackground$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_35($swingStartTime$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('swingStartTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $swingStartTime$delegate.i1();
  }
  function invoke$lambda_36($swingStartTime$delegate, _set____db54di) {
    getLocalDelegateReference('swingStartTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $swingStartTime$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_37($swingPoints$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('swingPoints', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $swingPoints$delegate.i1();
  }
  function invoke$lambda_38($swingPoints$delegate, _set____db54di) {
    getLocalDelegateReference('swingPoints', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $swingPoints$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_39($flightPercent$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('flightPercent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $flightPercent$delegate.i1();
  }
  function invoke$lambda_40($flightPercent$delegate, _set____db54di) {
    getLocalDelegateReference('flightPercent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $flightPercent$delegate.tn(_set____db54di);
    return Unit_instance;
  }
  function invoke$_anonymous_$_anonymous_$animate_if052x(flightPercent$delegate, start, duration, time) {
    var p = coerceIn_0((time - start) / duration, 0.0, 1.0);
    invoke$lambda_40(flightPercent$delegate, p);
    if (p < 1.0) {
      var tmp = window;
      tmp.requestAnimationFrame(ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$ref_y67wvx_0(start, duration, flightPercent$delegate));
    }
  }
  function invoke$_anonymous_$_anonymous_$animate$0_btpy3x(flightPercent$delegate, start, duration, time) {
    var p = coerceIn_0((time - start) / duration, 0.0, 1.0);
    invoke$lambda_40(flightPercent$delegate, p);
    if (p < 1.0) {
      var tmp = window;
      tmp.requestAnimationFrame(ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$0$ref_osn5bl_0(start, duration, flightPercent$delegate));
    }
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp($isAimPointMode$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $ghostResult$delegate, resultContinuation) {
    this.r2g_1 = $isAimPointMode$delegate;
    this.s2g_1 = $holeDistance$delegate;
    this.t2g_1 = $slopeX$delegate;
    this.u2g_1 = $slopeY$delegate;
    this.v2g_1 = $ghostResult$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp).u1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.v1h($this$LaunchedEffect, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 3;
            if (invoke$lambda_25(this.r2g_1)) {
              this.w7_1 = 1;
              suspendResult = solvePerfectPutt(invoke$lambda_27(this.s2g_1), invoke$lambda_21(this.t2g_1), invoke$lambda_23(this.u2g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              invoke$lambda_20(this.v2g_1, null);
              this.w7_1 = 2;
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_20(this.v2g_1, ARGUMENT);
            this.w7_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 3) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp).v1h = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp(this.r2g_1, this.s2g_1, this.t2g_1, this.u2g_1, this.v2g_1, completion);
    i.w2g_1 = $this$LaunchedEffect;
    return i;
  };
  function ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_0($isAimPointMode$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $ghostResult$delegate, resultContinuation) {
    var i = new ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp($isAimPointMode$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $ghostResult$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.u1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate, $flightPercent$delegate, resultContinuation) {
    this.f2h_1 = $appMode$delegate;
    this.g2h_1 = $trajectoryResult$delegate;
    this.h2h_1 = $puttingResult$delegate;
    this.i2h_1 = $flightPercent$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1).u1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.v1h($this$LaunchedEffect, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        if (tmp === 0) {
          this.x7_1 = 1;
          var res = invoke$lambda(this.f2h_1).equals(AppMode_RANGE_getInstance()) ? invoke$lambda_7(this.g2h_1) : null;
          var put = invoke$lambda(this.f2h_1).equals(AppMode_PUTTING_getInstance()) ? invoke$lambda_17(this.h2h_1) : null;
          if (!(res == null)) {
            invoke$lambda_40(this.i2h_1, 0.0);
            var start = window.performance.now();
            var duration = coerceAtLeast(res.x2d_1 * 1000, 1500.0);
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$ref_y67wvx(start, duration, this.i2h_1));
          } else if (!(put == null)) {
            invoke$lambda_40(this.i2h_1, 0.0);
            var start_0 = window.performance.now();
            var duration_0 = 2500.0;
            var tmp_1 = window;
            tmp_1.requestAnimationFrame(ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$0$ref_osn5bl(start_0, duration_0, this.i2h_1));
          }
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
  protoOf(ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1).v1h = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1(this.f2h_1, this.g2h_1, this.h2h_1, this.i2h_1, completion);
    i.j2h_1 = $this$LaunchedEffect;
    return i;
  };
  function ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_2($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate, $flightPercent$delegate, resultContinuation) {
    var i = new ComposableSingletons$MainKt$lambda_9$lambda$slambda_70j0rp_1($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate, $flightPercent$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.u1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm($this$Div) {
    $this$Div.c23(['zone-top']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_0($appMode$delegate, $trajectoryResult$delegate, $flightPercent$delegate, $puttingResult$delegate, $ghostResult$delegate, $isAimPointMode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(955904224, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous> (Main.kt:95)');
      }
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        $composer_0.r18(1285222727);
        TopCenterMetrics(invoke$lambda_7($trajectoryResult$delegate), invoke$lambda_39($flightPercent$delegate), $composer_0, 0);
        $composer_0.t18();
      } else {
        $composer_0.r18(1285309775);
        PuttingMetrics(invoke$lambda_17($puttingResult$delegate), invoke$lambda_19($ghostResult$delegate), invoke$lambda_39($flightPercent$delegate), invoke$lambda_25($isAimPointMode$delegate), $composer_0, 0);
        $composer_0.t18();
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_1($this$Div) {
    $this$Div.c23(['zone-mid']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h($this$Div) {
    $this$Div.c23(['mode-switcher']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function (it) {
      invoke$lambda_0($appMode$delegate, AppMode_RANGE_getInstance());
      invoke$lambda_8($trajectoryResult$delegate, null);
      invoke$lambda_18($puttingResult$delegate, null);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['mode-btn']);
      var tmp;
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        $this$Div.c23(['active']);
        tmp = Unit_instance;
      }
      $this$Div.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function (it) {
      invoke$lambda_0($appMode$delegate, AppMode_PUTTING_getInstance());
      invoke$lambda_8($trajectoryResult$delegate, null);
      invoke$lambda_18($puttingResult$delegate, null);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['mode-btn']);
      var tmp;
      if (invoke$lambda($appMode$delegate).equals(AppMode_PUTTING_getInstance())) {
        $this$Div.c23(['active']);
        tmp = Unit_instance;
      }
      $this$Div.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2026125674, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous> (Main.kt:106)');
      }
      $composer_0.r18(1266860976);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().n2f_1, $composer_0, 54, 0);
      $composer_0.r18(1266869876);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.r1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate);
        $composer_0.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t18();
      Div(tmp1_group, ComposableSingletons$MainKt_getInstance().o2f_1, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_1($this$Img) {
    $this$Img.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_1);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_1($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    position($this$style, tmp$ret$3);
    width($this$style, get_percent(100));
    height($this$style, get_percent(100));
    $this$style.a29('object-fit', 'cover');
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_2($this$Div) {
    $this$Div.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_2);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_2($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    position($this$style, tmp$ret$3);
    width($this$style, get_percent(100));
    height($this$style, get_percent(100));
    background($this$style, 'radial-gradient(circle at center, #22C55E 0%, #15803D 100%)');
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_1($element, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate) {
    return function (e) {
      var touch = ensureNotNull((e instanceof TouchEvent ? e : THROW_CCE()).touches.item(0));
      var rect = $element.getBoundingClientRect();
      invoke$lambda_36($swingStartTime$delegate, numberToLong(window.performance.now()));
      invoke$lambda_38($swingPoints$delegate, listOf(new Point(touch.clientX - rect.left, touch.clientY - rect.top)));
      invoke$lambda_10($isSwinging$delegate, true);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_2($element, $isSwinging$delegate, $swingPoints$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate) {
    return function (e) {
      var tmp;
      if (invoke$lambda_9($isSwinging$delegate)) {
        var touch = ensureNotNull((e instanceof TouchEvent ? e : THROW_CCE()).touches.item(0));
        var rect = $element.getBoundingClientRect();
        var p = new Point(touch.clientX - rect.left, touch.clientY - rect.top);
        invoke$lambda_38($swingPoints$delegate, plus(invoke$lambda_37($swingPoints$delegate), p));
        var tmp_0;
        if (invoke$lambda_11($isSchoolMode$delegate)) {
          var dx = p.t2c_1 - first(invoke$lambda_37($swingPoints$delegate)).t2c_1;
          var dy = p.u2c_1 - first(invoke$lambda_37($swingPoints$delegate)).u2c_1;
          invoke$lambda_14($schoolPower$delegate, coerceIn(dy / (rect.height * 0.3), 0.0, 1.0));
          invoke$lambda_16($schoolPath$delegate, coerceIn(dx / 150.0, -1.0, 1.0));
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna($trajectoryResult$delegate) {
    return function (it) {
      invoke$lambda_8($trajectoryResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_0($trajectoryResult$delegate) {
    return function (it) {
      invoke$lambda_8($trajectoryResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_1($puttingResult$delegate) {
    return function (it) {
      invoke$lambda_18($puttingResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_3($isSwinging$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $trajectoryResult$delegate, $swingPoints$delegate, $swingStartTime$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $puttingResult$delegate) {
    return function (_unused_var__etf5q3) {
      var tmp;
      if (invoke$lambda_9($isSwinging$delegate)) {
        invoke$lambda_10($isSwinging$delegate, false);
        var tmp_0;
        if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
          var tmp_1;
          if (invoke$lambda_11($isSchoolMode$delegate)) {
            var tmp_2 = invoke$lambda_13($schoolPower$delegate);
            var tmp_3 = invoke$lambda_15($schoolPath$delegate);
            var tmp_4 = invoke$lambda_3($selectedClub$delegate);
            var tmp_5 = invoke$lambda_29($speedFactor$delegate);
            var tmp_6 = invoke$lambda_5($strikePosition$delegate);
            var tmp_7 = invoke$lambda_31($angleLimit$delegate);
            executeSchoolSwing(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna($trajectoryResult$delegate));
            tmp_1 = Unit_instance;
          } else {
            var tmp_8 = invoke$lambda_37($swingPoints$delegate);
            var tmp_9 = numberToLong(window.performance.now()).y1(invoke$lambda_35($swingStartTime$delegate));
            var tmp_10 = invoke$lambda_29($speedFactor$delegate);
            var tmp_11 = invoke$lambda_3($selectedClub$delegate);
            var tmp_12 = invoke$lambda_5($strikePosition$delegate);
            var tmp_13 = invoke$lambda_31($angleLimit$delegate);
            processSwingAction(tmp_8, tmp_9, 1.0, tmp_10, tmp_11, tmp_12, tmp_13, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_0($trajectoryResult$delegate));
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        } else {
          var tmp_14 = invoke$lambda_37($swingPoints$delegate);
          var tmp_15 = invoke$lambda_27($holeDistance$delegate);
          var tmp_16 = invoke$lambda_21($slopeX$delegate);
          var tmp_17 = invoke$lambda_23($slopeY$delegate);
          processPuttAction(tmp_14, tmp_15, tmp_16, tmp_17, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_1($puttingResult$delegate));
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($element, $touchStart, $touchMove, $touchEnd) {
    this.k2h_1 = $element;
    this.l2h_1 = $touchStart;
    this.m2h_1 = $touchMove;
    this.n2h_1 = $touchEnd;
  }
  protoOf(_no_name_provided__qut3iv).vh = function () {
    // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.k2h_1.removeEventListener('touchstart', this.l2h_1);
    this.k2h_1.removeEventListener('touchmove', this.m2h_1);
    this.k2h_1.removeEventListener('touchend', this.n2h_1);
  };
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_3($appMode$delegate, $trajectoryResult$delegate, $flightPercent$delegate, $puttingResult$delegate, $ghostResult$delegate, $holeDistance$delegate, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $slopeX$delegate, $slopeY$delegate) {
    return function ($this$ref, element) {
      var tmp;
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        setupMainCanvas(element, invoke$lambda_7($trajectoryResult$delegate), invoke$lambda_39($flightPercent$delegate));
        tmp = Unit_instance;
      } else {
        setupPuttingCanvas(element, invoke$lambda_17($puttingResult$delegate), invoke$lambda_19($ghostResult$delegate), invoke$lambda_39($flightPercent$delegate), invoke$lambda_27($holeDistance$delegate));
        tmp = Unit_instance;
      }
      var touchStart = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_1(element, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate);
      var touchMove = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_2(element, $isSwinging$delegate, $swingPoints$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate);
      var touchEnd = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_3($isSwinging$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $trajectoryResult$delegate, $swingPoints$delegate, $swingStartTime$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $puttingResult$delegate);
      element.addEventListener('touchstart', touchStart);
      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchEnd);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(element, touchStart, touchMove, touchEnd);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_4($swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate) {
    return function (e) {
      invoke$lambda_36($swingStartTime$delegate, numberToLong(window.performance.now()));
      invoke$lambda_38($swingPoints$delegate, listOf(new Point(e.h2c_1, e.i2c_1)));
      invoke$lambda_10($isSwinging$delegate, true);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_5($isSwinging$delegate, $swingPoints$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate) {
    return function (e) {
      var tmp;
      if (invoke$lambda_9($isSwinging$delegate)) {
        var p = new Point(e.h2c_1, e.i2c_1);
        invoke$lambda_38($swingPoints$delegate, plus(invoke$lambda_37($swingPoints$delegate), p));
        var tmp_0;
        if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance()) && invoke$lambda_11($isSchoolMode$delegate)) {
          var tmp_1 = e.m2a_1;
          var rect = (tmp_1 instanceof HTMLElement ? tmp_1 : THROW_CCE()).getBoundingClientRect();
          var dx = p.t2c_1 - first(invoke$lambda_37($swingPoints$delegate)).t2c_1;
          var dy = p.u2c_1 - first(invoke$lambda_37($swingPoints$delegate)).u2c_1;
          invoke$lambda_14($schoolPower$delegate, coerceIn(dy / (rect.height * 0.3), 0.0, 1.0));
          invoke$lambda_16($schoolPath$delegate, coerceIn(dx / 150.0, -1.0, 1.0));
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_4($trajectoryResult$delegate) {
    return function (it) {
      invoke$lambda_8($trajectoryResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_5($trajectoryResult$delegate) {
    return function (it) {
      invoke$lambda_8($trajectoryResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_6($puttingResult$delegate) {
    return function (it) {
      invoke$lambda_18($puttingResult$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_6($isSwinging$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $trajectoryResult$delegate, $swingPoints$delegate, $swingStartTime$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $puttingResult$delegate) {
    return function (e) {
      var tmp;
      if (invoke$lambda_9($isSwinging$delegate)) {
        invoke$lambda_10($isSwinging$delegate, false);
        var tmp_0;
        if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
          var tmp_1;
          if (invoke$lambda_11($isSchoolMode$delegate)) {
            var tmp_2 = invoke$lambda_13($schoolPower$delegate);
            var tmp_3 = invoke$lambda_15($schoolPath$delegate);
            var tmp_4 = invoke$lambda_3($selectedClub$delegate);
            var tmp_5 = invoke$lambda_29($speedFactor$delegate);
            var tmp_6 = invoke$lambda_5($strikePosition$delegate);
            var tmp_7 = invoke$lambda_31($angleLimit$delegate);
            executeSchoolSwing(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_4($trajectoryResult$delegate));
            tmp_1 = Unit_instance;
          } else {
            var tmp_8 = invoke$lambda_37($swingPoints$delegate);
            var tmp_9 = numberToLong(window.performance.now()).y1(invoke$lambda_35($swingStartTime$delegate));
            var tmp_10 = invoke$lambda_29($speedFactor$delegate);
            var tmp_11 = invoke$lambda_3($selectedClub$delegate);
            var tmp_12 = invoke$lambda_5($strikePosition$delegate);
            var tmp_13 = invoke$lambda_31($angleLimit$delegate);
            processSwingAction(tmp_8, tmp_9, 1.0, tmp_10, tmp_11, tmp_12, tmp_13, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_5($trajectoryResult$delegate));
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        } else {
          var tmp_14 = invoke$lambda_37($swingPoints$delegate);
          var tmp_15 = invoke$lambda_27($holeDistance$delegate);
          var tmp_16 = invoke$lambda_21($slopeX$delegate);
          var tmp_17 = invoke$lambda_23($slopeY$delegate);
          processPuttAction(tmp_14, tmp_15, tmp_16, tmp_17, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_6($puttingResult$delegate));
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_3($appMode$delegate, $trajectoryResult$delegate, $flightPercent$delegate, $puttingResult$delegate, $ghostResult$delegate, $holeDistance$delegate, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $slopeX$delegate, $slopeY$delegate) {
    return function ($this$Canvas) {
      $this$Canvas.d23('simCanvas');
      $this$Canvas.e23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_3($appMode$delegate, $trajectoryResult$delegate, $flightPercent$delegate, $puttingResult$delegate, $ghostResult$delegate, $holeDistance$delegate, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $slopeX$delegate, $slopeY$delegate));
      $this$Canvas.i23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_4($swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate));
      $this$Canvas.k23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_5($isSwinging$delegate, $swingPoints$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate));
      $this$Canvas.j23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_6($isSwinging$delegate, $appMode$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $trajectoryResult$delegate, $swingPoints$delegate, $swingStartTime$delegate, $holeDistance$delegate, $slopeX$delegate, $slopeY$delegate, $puttingResult$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_4($this$Div) {
    $this$Div.c23(['school-overlay']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_7($this$Div) {
    $this$Div.c23(['power-bar']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_2($schoolPower$delegate) {
    return function ($this$style) {
      height($this$style, get_percent(invoke$lambda_13($schoolPower$delegate) * 100));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_7($schoolPower$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['power-fill']);
      $this$Div.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_2($schoolPower$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_8($schoolPower$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1198258920, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:219)');
      }
      $composer_0.r18(-513169360);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_7($schoolPower$delegate);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, null, $composer_0, 6, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_9($this$Div) {
    $this$Div.c23(['path-bar']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_3($schoolPath$delegate) {
    return function ($this$style) {
      left($this$style, get_percent(50 + invoke$lambda_15($schoolPath$delegate) * 45));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_8($schoolPath$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['path-indicator']);
      $this$Div.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda$lambda_z8hgna_3($schoolPath$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_10($schoolPath$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(866544449, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:222)');
      }
      $composer_0.r18(-513163755);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_8($schoolPath$delegate);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, null, $composer_0, 6, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_5($schoolPower$delegate, $schoolPath$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-809915721, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous> (Main.kt:218)');
      }
      $composer_0.r18(1267065985);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_7;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1198258920, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_8($schoolPower$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.r18(1267071616);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_9;
        $composer_0.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(866544449, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_10($schoolPath$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.r1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_11(dispatchReceiver_0);
        $composer_2.s1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_6($this$Div) {
    $this$Div.c23(['aim-point-legend']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_7($this$Div) {
    $this$Div.c23(['floating-controls']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_9($isSettingsOpen$delegate) {
    return function (it) {
      invoke$lambda_2($isSettingsOpen$delegate, true);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_11($isSettingsOpen$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['round-btn']);
      $this$Div.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_9($isSettingsOpen$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_10($trajectoryResult$delegate, $puttingResult$delegate) {
    return function (it) {
      invoke$lambda_8($trajectoryResult$delegate, null);
      invoke$lambda_18($puttingResult$delegate, null);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_12($trajectoryResult$delegate, $puttingResult$delegate) {
    return function ($this$Div) {
      $this$Div.c23(['round-btn']);
      $this$Div.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_10($trajectoryResult$delegate, $puttingResult$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_8($isSettingsOpen$delegate, $trajectoryResult$delegate, $puttingResult$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1128890707, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous> (Main.kt:239)');
      }
      $composer_0.r18(1267094788);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_11($isSettingsOpen$delegate);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().r2f_1, $composer_0, 54, 0);
      $composer_0.r18(1267098108);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.r1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_12($trajectoryResult$delegate, $puttingResult$delegate);
        $composer_0.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t18();
      Div(tmp1_group, ComposableSingletons$MainKt_getInstance().s2f_1, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_2($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate, $selectedBackground$delegate, $flightPercent$delegate, $ghostResult$delegate, $holeDistance$delegate, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $slopeX$delegate, $slopeY$delegate, $isAimPointMode$delegate, $isSettingsOpen$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(89484105, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous> (Main.kt:105)');
      }
      $composer_0.r18(1565489510);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(2026125674, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_0($appMode$delegate, $trajectoryResult$delegate, $puttingResult$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        $composer_0.r18(1286210852);
        var tmp_3 = 'image/bg_range_' + invoke$lambda_33($selectedBackground$delegate) + '.png';
        $composer_0.r18(1565513729);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.r1a();
        var tmp_4;
        if (false || it_1 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_1;
          $composer_0.s1a(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.t18();
        Img(tmp_3, null, tmp1_group, $composer_0, 384, 2);
        $composer_0.t18();
      } else {
        $composer_0.r18(1286457302);
        $composer_0.r18(1565519943);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.r1a();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_2;
          $composer_0.s1a(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.t18();
        Div(tmp2_group, null, $composer_0, 6, 2);
        $composer_0.t18();
      }
      $composer_0.r18(1565531635);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.r1a();
      var tmp_8;
      if (false || it_3 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_3($appMode$delegate, $trajectoryResult$delegate, $flightPercent$delegate, $puttingResult$delegate, $ghostResult$delegate, $holeDistance$delegate, $swingStartTime$delegate, $swingPoints$delegate, $isSwinging$delegate, $isSchoolMode$delegate, $schoolPower$delegate, $schoolPath$delegate, $selectedClub$delegate, $speedFactor$delegate, $strikePosition$delegate, $angleLimit$delegate, $slopeX$delegate, $slopeY$delegate);
        $composer_0.s1a(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = it_3;
      }
      var tmp_9 = tmp_8;
      var tmp3_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.t18();
      Canvas(tmp3_group, null, $composer_0, 6, 2);
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        $composer_0.r18(1291530576);
        PerformanceHUD(invoke$lambda_7($trajectoryResult$delegate), $composer_0, 0);
        ImpactHUD(invoke$lambda_7($trajectoryResult$delegate), invoke$lambda_5($strikePosition$delegate), invoke$lambda_31($angleLimit$delegate), $composer_0, 0);
        $composer_0.t18();
      } else {
        $composer_0.r18(1291669890);
        PuttingHUD(invoke$lambda_17($puttingResult$delegate), invoke$lambda_19($ghostResult$delegate), invoke$lambda_21($slopeX$delegate), invoke$lambda_23($slopeY$delegate), $composer_0, 0);
        $composer_0.t18();
      }
      $composer_0.r18(1565692416);
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance()) && invoke$lambda_11($isSchoolMode$delegate) && invoke$lambda_9($isSwinging$delegate)) {
        $composer_0.r18(1565694567);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.r1a();
        var tmp_10;
        if (false || it_4 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_4;
          $composer_0.s1a(value_4);
          tmp_10 = value_4;
        } else {
          tmp_10 = it_4;
        }
        var tmp_11 = tmp_10;
        var tmp4_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-809915721, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_5($schoolPower$delegate, $schoolPath$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.b10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_2.r1a();
        var tmp_12;
        if (invalid_0 || it_5 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref_12(dispatchReceiver_0);
          $composer_2.s1a(value_5);
          tmp_12 = value_5;
        } else {
          tmp_12 = it_5;
        }
        var tmp_13 = tmp_12;
        var tmp0_0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp4_group, tmp0_0, $composer_0, 54, 0);
      }
      $composer_0.t18();
      $composer_0.r18(1565710205);
      if (invoke$lambda($appMode$delegate).equals(AppMode_PUTTING_getInstance()) && invoke$lambda_25($isAimPointMode$delegate)) {
        $composer_0.r18(1565712169);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = $composer_0.r1a();
        var tmp_14;
        if (false || it_6 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_6 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_6;
          $composer_0.s1a(value_6);
          tmp_14 = value_6;
        } else {
          tmp_14 = it_6;
        }
        var tmp_15 = tmp_14;
        var tmp5_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        $composer_0.t18();
        Div(tmp5_group, ComposableSingletons$MainKt_getInstance().q2f_1, $composer_0, 54, 0);
      }
      $composer_0.t18();
      $composer_0.r18(1565723370);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.r1a();
      var tmp_16;
      if (false || it_7 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_7;
        $composer_0.s1a(value_7);
        tmp_16 = value_7;
      } else {
        tmp_16 = it_7;
      }
      var tmp_17 = tmp_16;
      var tmp6_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(1128890707, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_8($isSettingsOpen$delegate, $trajectoryResult$delegate, $puttingResult$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.b10(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_3.r1a();
      var tmp_18;
      if (invalid_1 || it_8 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ComposableLambda$invoke$ref_13(dispatchReceiver_1);
        $composer_3.s1a(value_8);
        tmp_18 = value_8;
      } else {
        tmp_18 = it_8;
      }
      var tmp_19 = tmp_18;
      var tmp0_1 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp6_group, tmp0_1, $composer_0, 54, 0);
      var tmp_20;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_20 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_3($this$Div) {
    $this$Div.c23(['zone-bottom']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_9($this$Div) {
    $this$Div.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_13);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_13($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_px(20));
    flex($this$style, 1);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_14($selectedClub$delegate) {
    return function (it) {
      invoke$lambda_4($selectedClub$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_11($isSchoolMode$delegate) {
    return function (it) {
      invoke$lambda_12($isSchoolMode$delegate, !invoke$lambda_11($isSchoolMode$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_15($isSchoolMode$delegate) {
    return function ($this$Button) {
      $this$Button.c23(['club-btn']);
      var tmp;
      if (invoke$lambda_11($isSchoolMode$delegate)) {
        $this$Button.c23(['active']);
        tmp = Unit_instance;
      }
      $this$Button.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_11($isSchoolMode$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_10($availableClubs, $selectedClub$delegate, $isSchoolMode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-512556658, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous> (Main.kt:248)');
      }
      var tmp = invoke$lambda_3($selectedClub$delegate);
      $composer_0.r18(1267111934);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp_0;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_14($selectedClub$delegate);
        $composer_0.s1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t18();
      ClubHorizontalBar($availableClubs, tmp, tmp0_group, $composer_0, 384);
      $composer_0.r18(1267113582);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.r1a();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_15($isSchoolMode$delegate);
        $composer_0.s1a(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t18();
      Button(tmp1_group, ComposableSingletons$MainKt_getInstance().t2f_1, $composer_0, 54, 0);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_11($strikePosition$delegate) {
    return function (it) {
      invoke$lambda_6($strikePosition$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_12($this$Div) {
    $this$Div.a23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_16);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_16($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_px(20));
    flex($this$style, 1);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_17($slopeX$delegate) {
    return function (it) {
      invoke$lambda_22($slopeX$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_18($slopeY$delegate) {
    return function (it) {
      invoke$lambda_24($slopeY$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_19($holeDistance$delegate) {
    return function (it) {
      invoke$lambda_28($holeDistance$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_12($isAimPointMode$delegate) {
    return function (it) {
      invoke$lambda_26($isAimPointMode$delegate, !invoke$lambda_25($isAimPointMode$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_20($isAimPointMode$delegate) {
    return function ($this$Button) {
      $this$Button.c23(['club-btn']);
      var tmp;
      if (invoke$lambda_25($isAimPointMode$delegate)) {
        $this$Button.c23(['active']);
        tmp = Unit_instance;
      }
      $this$Button.h23(ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda$lambda_u8wqmd_12($isAimPointMode$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_13($slopeX$delegate, $slopeY$delegate, $holeDistance$delegate, $isAimPointMode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1070985947, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous> (Main.kt:256)');
      }
      var tmp = invoke$lambda_21($slopeX$delegate);
      var tmp_0 = invoke$lambda_23($slopeY$delegate);
      var tmp_1 = invoke$lambda_27($holeDistance$delegate);
      $composer_0.r18(1267128600);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp_2;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_17($slopeX$delegate);
        $composer_0.s1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t18();
      $composer_0.r18(1267129144);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.r1a();
      var tmp_4;
      if (false || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_18($slopeY$delegate);
        $composer_0.s1a(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t18();
      $composer_0.r18(1267129694);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_6;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_19($holeDistance$delegate);
        $composer_0.s1a(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.t18();
      PuttingControls(tmp, tmp_0, tmp_1, tmp0_group, tmp1_group, tmp2_group, $composer_0, 224256);
      $composer_0.r18(1267131380);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.r1a();
      var tmp_8;
      if (false || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda$lambda_pxjfqe_20($isAimPointMode$delegate);
        $composer_0.s1a(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp3_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.t18();
      Button(tmp3_group, ComposableSingletons$MainKt_getInstance().u2f_1, $composer_0, 54, 0);
      var tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_10 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_4($appMode$delegate, $availableClubs, $selectedClub$delegate, $isSchoolMode$delegate, $strikePosition$delegate, $slopeX$delegate, $slopeY$delegate, $holeDistance$delegate, $isAimPointMode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1690650152, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous> (Main.kt:246)');
      }
      if (invoke$lambda($appMode$delegate).equals(AppMode_RANGE_getInstance())) {
        $composer_0.r18(1293202995);
        $composer_0.r18(1565737158);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.r1a();
        var tmp;
        if (false || it === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_9;
          $composer_0.s1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-512556658, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_10($availableClubs, $selectedClub$delegate, $isSchoolMode$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.b10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.r1a();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.s1a(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_3 = invoke$lambda_5($strikePosition$delegate);
        $composer_0.r18(1565751745);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.r1a();
        var tmp_4;
        if (false || it_1 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_11($strikePosition$delegate);
          $composer_0.s1a(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.t18();
        InteractiveImpactBall(tmp_3, tmp1_group, $composer_0, 48);
        $composer_0.t18();
      } else {
        $composer_0.r18(1293720695);
        $composer_0.r18(1565753894);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.r1a();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_12;
          $composer_0.s1a(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1070985947, true, ComposableSingletons$MainKt$lambda_9$lambda$lambda$lambda_egz65h_13($slopeX$delegate, $slopeY$delegate, $holeDistance$delegate, $isAimPointMode$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.b10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_2.r1a();
        var tmp_8;
        if (invalid_0 || it_3 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_16(dispatchReceiver_0);
          $composer_2.s1a(value_3);
          tmp_8 = value_3;
        } else {
          tmp_8 = it_3;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp2_group, tmp0_0, $composer_0, 54, 0);
        $composer_0.t18();
      }
      var tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_10 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_5($speedFactor$delegate) {
    return function (it) {
      invoke$lambda_30($speedFactor$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_6($angleLimit$delegate) {
    return function (it) {
      invoke$lambda_32($angleLimit$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_7($selectedBackground$delegate) {
    return function (it) {
      invoke$lambda_34($selectedBackground$delegate, it);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm_8($isSettingsOpen$delegate) {
    return function () {
      invoke$lambda_2($isSettingsOpen$delegate, false);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$ref_y67wvx_0($start, $duration, $flightPercent$delegate) {
    var l = function (p0) {
      invoke$_anonymous_$_anonymous_$animate_if052x($flightPercent$delegate, $start, $duration, p0);
      return Unit_instance;
    };
    l.callableName = '<anonymous>$<anonymous>$animate';
    return l;
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$_anonymous_$_anonymous_$animate$0$ref_osn5bl_0($start, $duration, $flightPercent$delegate) {
    var l = function (p0) {
      invoke$_anonymous_$_anonymous_$animate$0_btpy3x($flightPercent$delegate, $start, $duration, p0);
      return Unit_instance;
    };
    l.callableName = '<anonymous>$<anonymous>$animate$0';
    return l;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_10$lambda_vulrrt($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2010867758, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-10.<anonymous> (Main.kt:309)');
    }
    Text('Settings', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_11$lambda_acvt54($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-609441939, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-11.<anonymous> (Main.kt:309)');
    }
    Text('\u2715', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_12$lambda_igqnx3($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1115072248, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-12.<anonymous> (Main.kt:311)');
    }
    Text('Speed Factor', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-220301481, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-13.<anonymous> (Main.kt:315)');
    }
    Text('Angle Limit', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda_52vk2d($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1555675210, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous> (Main.kt:319)');
    }
    Text('Environment', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_15$lambda_xwi14k($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1093471444, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-15.<anonymous> (Main.kt:319)');
    }
    Span(null, ComposableSingletons$MainKt_getInstance().a2g_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_16$lambda_8azjsd($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2075880798, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-16.<anonymous> (Main.kt:331)');
    }
    Text('PERFORMANCE', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_17$lambda_kimx9u($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1760902292, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-17.<anonymous> (Main.kt:342)');
    }
    Text('IMPACT DATA', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_18$lambda_lounn3($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2006554935, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-18.<anonymous> (Main.kt:352)');
    }
    Text('GREEN DATA', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_19$lambda_74rtf4($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2087941828, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-19.<anonymous> (Main.kt:359)');
    }
    Text('RESULT', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_20$lambda_1yhqze($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1081714804, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-20.<anonymous> (Main.kt:379)');
    }
    Text('HOLE (M)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_21$lambda_us481l($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(236826357, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-21.<anonymous> (Main.kt:380)');
    }
    Text('SLOPE X (%)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_22$lambda_bfdcvc($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-447403948, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-22.<anonymous> (Main.kt:381)');
    }
    Text('SLOPE Y (%)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.n2f_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1684906677, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.o2f_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1773533428, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.p2f_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1882489225, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.q2f_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1494146026, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.r2f_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-350342924, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.s2f_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1094089123, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.t2f_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1696770872, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
    var tmp_6 = this;
    tmp_6.u2f_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1331435809, false, ComposableSingletons$MainKt$lambda_8$lambda_h1qhie));
    var tmp_7 = this;
    tmp_7.v2f_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-2106145729, false, ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej));
    var tmp_8 = this;
    tmp_8.w2f_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(2010867758, false, ComposableSingletons$MainKt$lambda_10$lambda_vulrrt));
    var tmp_9 = this;
    tmp_9.x2f_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-609441939, false, ComposableSingletons$MainKt$lambda_11$lambda_acvt54));
    var tmp_10 = this;
    tmp_10.y2f_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(1115072248, false, ComposableSingletons$MainKt$lambda_12$lambda_igqnx3));
    var tmp_11 = this;
    tmp_11.z2f_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-220301481, false, ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu));
    var tmp_12 = this;
    tmp_12.a2g_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1555675210, false, ComposableSingletons$MainKt$lambda_14$lambda_52vk2d));
    var tmp_13 = this;
    tmp_13.b2g_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1093471444, false, ComposableSingletons$MainKt$lambda_15$lambda_xwi14k));
    var tmp_14 = this;
    tmp_14.c2g_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-2075880798, false, ComposableSingletons$MainKt$lambda_16$lambda_8azjsd));
    var tmp_15 = this;
    tmp_15.d2g_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-1760902292, false, ComposableSingletons$MainKt$lambda_17$lambda_kimx9u));
    var tmp_16 = this;
    tmp_16.e2g_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(2006554935, false, ComposableSingletons$MainKt$lambda_18$lambda_lounn3));
    var tmp_17 = this;
    tmp_17.f2g_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-2087941828, false, ComposableSingletons$MainKt$lambda_19$lambda_74rtf4));
    var tmp_18 = this;
    tmp_18.g2g_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-1081714804, false, ComposableSingletons$MainKt$lambda_20$lambda_1yhqze));
    var tmp_19 = this;
    tmp_19.h2g_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(236826357, false, ComposableSingletons$MainKt$lambda_21$lambda_us481l));
    var tmp_20 = this;
    tmp_20.i2g_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-447403948, false, ComposableSingletons$MainKt$lambda_22$lambda_bfdcvc));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function TopCenterMetrics$lambda($this$Div) {
    $this$Div.c23(['metric-group']);
    return Unit_instance;
  }
  function TopCenterMetrics$lambda_0($res, $progress) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1706030719, $changed, -1, 'com.example.golf_by_nm.core.TopCenterMetrics.<anonymous> (Main.kt:274)');
      }
      MetricItem('CARRY', !($res == null) ? format($res.p2d_1 * $progress, 1) : '--', 'M', $composer_0, 390);
      MetricItem('TOTAL', !($res == null) ? format($res.q2d_1 * $progress, 1) : '--', 'M', $composer_0, 390);
      var tmp;
      if (!($res == null)) {
        // Inline function 'kotlin.math.abs' call
        var x = $res.s2d_1 * $progress;
        var tmp$ret$0 = Math.abs(x);
        tmp = format(tmp$ret$0, 1);
      } else {
        tmp = '--';
      }
      MetricItem('SIDE', tmp, !($res == null) && $res.s2d_1 < 0 ? 'L' : 'R', $composer_0, 6);
      MetricItem('APEX', !($res == null) ? format($res.t2d_1 * $progress, 1) : '--', 'M', $composer_0, 390);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function TopCenterMetrics$lambda_1($res, $progress, $$changed) {
    return function ($composer, $force) {
      TopCenterMetrics($res, $progress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PuttingMetrics$lambda($this$Div) {
    $this$Div.c23(['metric-group']);
    return Unit_instance;
  }
  function PuttingMetrics$lambda_0($isAimPoint, $ghost, $res, $progress) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1866539438, $changed, -1, 'com.example.golf_by_nm.core.PuttingMetrics.<anonymous> (Main.kt:284)');
      }
      if ($isAimPoint && !($ghost == null)) {
        $composer_0.r18(821802739);
        MetricItem('PLAY AS', format($ghost.z2d_1, 2), 'M', $composer_0, 390);
        MetricItem('BREAK', format($ghost.a2e_1, 2), 'M', $composer_0, 390);
        $composer_0.t18();
      } else {
        $composer_0.r18(821952345);
        MetricItem('DIST', !($res == null) ? format($res.z2d_1 * $progress, 2) : '--', 'M', $composer_0, 390);
        MetricItem('SPEED', !($res == null) ? format($res.c2e_1 * (1.0 - $progress), 1) : '--', 'm/s', $composer_0, 390);
        $composer_0.t18();
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingMetrics$lambda_1($res, $ghost, $progress, $isAimPoint, $$changed) {
    return function ($composer, $force) {
      PuttingMetrics($res, $ghost, $progress, $isAimPoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MetricItem$lambda($this$Div) {
    $this$Div.c23(['metric-item']);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda($this$Span) {
    $this$Span.c23(['metric-label']);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda_0($label) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1701341774, $changed, -1, 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous> (Main.kt:297)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function MetricItem$lambda$lambda_1($this$Div) {
    $this$Div.a23(MetricItem$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Baseline' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'baseline';
    alignItems($this$style, tmp$ret$7);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda$lambda_0($this$Span) {
    $this$Span.c23(['metric-value']);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda$lambda_1($value) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1932061617, $changed, -1, 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous> (Main.kt:299)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function MetricItem$lambda$lambda$lambda_2($this$Span) {
    $this$Span.c23(['hud-unit']);
    $this$Span.a23(MetricItem$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MetricItem$lambda$lambda$lambda$lambda($this$style) {
    marginLeft($this$style, get_px(4));
    return Unit_instance;
  }
  function MetricItem$lambda$lambda$lambda_3($unit) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-113653528, $changed, -1, 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous> (Main.kt:300)');
      }
      Text($unit, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function MetricItem$lambda$lambda_2($value, $unit) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1760325203, $changed, -1, 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous> (Main.kt:299)');
      }
      $composer_0.r18(910059544);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = MetricItem$lambda$lambda$lambda_0;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1932061617, true, MetricItem$lambda$lambda$lambda_1($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.r18(910061776);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = MetricItem$lambda$lambda$lambda_2;
        $composer_0.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-113653528, true, MetricItem$lambda$lambda$lambda_3($unit), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.r1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_35(dispatchReceiver_0);
        $composer_2.s1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Span(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function MetricItem$lambda_0($label, $value, $unit) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-160242476, $changed, -1, 'com.example.golf_by_nm.core.MetricItem.<anonymous> (Main.kt:297)');
      }
      $composer_0.r18(-1898344615);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = MetricItem$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1701341774, true, MetricItem$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.r18(-1898342521);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = MetricItem$lambda$lambda_1;
        $composer_0.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1760325203, true, MetricItem$lambda$lambda_2($value, $unit), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.r1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.MetricItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_36(dispatchReceiver_0);
        $composer_2.s1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function MetricItem$lambda_1($label, $value, $unit, $$changed) {
    return function ($composer, $force) {
      MetricItem($label, $value, $unit, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda($this$Div) {
    $this$Div.c23(['modal-overlay']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda($this$Div) {
    $this$Div.c23(['modal-content']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda($this$Div) {
    $this$Div.c23(['modal-header']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda($onClose) {
    return function (it) {
      $onClose();
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda($onClose) {
    return function ($this$Div) {
      $this$Div.c23(['round-btn']);
      $this$Div.h23(SettingsModal$lambda$lambda$lambda$lambda$lambda($onClose));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda_0($onClose) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(914856588, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous> (Main.kt:309)');
      }
      H2(null, ComposableSingletons$MainKt_getInstance().w2f_1, $composer_0, 48, 1);
      $composer_0.r18(2052132922);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.b10($onClose);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda$lambda$lambda($onClose);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().x2f_1, $composer_0, 48, 0);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda_1($this$Div) {
    $this$Div.c23(['setting-row']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.c23(['setting-label']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_0($sf) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(373245153, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:311)');
      }
      Text(format_0($sf, 2) + 'x', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_1($sf) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-530748394, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:311)');
      }
      Span(null, ComposableSingletons$MainKt_getInstance().y2f_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(373245153, true, SettingsModal$lambda$lambda$lambda$lambda$lambda_0($sf), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1a();
      var tmp;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_1($onSf) {
    return function (e) {
      $onSf(numberToDouble(ensureNotNull(e.f2b_1)));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_2($sf, $onSf) {
    return function ($this$Input) {
      $this$Input.x22('min', '0.5');
      $this$Input.x22('max', '1.5');
      $this$Input.x22('step', '0.01');
      $this$Input.i28($sf.toString());
      $this$Input.j28(SettingsModal$lambda$lambda$lambda$lambda$lambda_1($onSf));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda_2($sf, $onSf) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-263711883, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous> (Main.kt:311)');
      }
      $composer_0.r18(2052137319);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda$lambda$lambda_0;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-530748394, true, SettingsModal$lambda$lambda$lambda$lambda_1($sf), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3 = Range_getInstance();
      $composer_0.r18(2052142285);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.m19($sf) | $composer_0.b10($onSf));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SettingsModal$lambda$lambda$lambda$lambda_2($sf, $onSf);
        $composer_0.s1a(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t18();
      Input(tmp_3, tmp1_group, $composer_0, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda_3($this$Div) {
    $this$Div.c23(['setting-row']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda_3($this$Div) {
    $this$Div.c23(['setting-label']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_2($al) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-962128576, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:315)');
      }
      Text(format_0($al, 0) + '\xB0', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_4($al) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1866122123, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:315)');
      }
      Span(null, ComposableSingletons$MainKt_getInstance().z2f_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-962128576, true, SettingsModal$lambda$lambda$lambda$lambda$lambda_2($al), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1a();
      var tmp;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_3($onAl) {
    return function (e) {
      $onAl(numberToDouble(ensureNotNull(e.f2b_1)));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_5($al, $onAl) {
    return function ($this$Input) {
      $this$Input.x22('min', '5');
      $this$Input.x22('max', '25');
      $this$Input.x22('step', '1');
      $this$Input.i28($al.toString());
      $this$Input.j28(SettingsModal$lambda$lambda$lambda$lambda$lambda_3($onAl));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda_4($al, $onAl) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1599085612, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous> (Main.kt:315)');
      }
      $composer_0.r18(2052148935);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda$lambda$lambda_3;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1866122123, true, SettingsModal$lambda$lambda$lambda$lambda_4($al), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3 = Range_getInstance();
      $composer_0.r18(2052153863);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.m19($al) | $composer_0.b10($onAl));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SettingsModal$lambda$lambda$lambda$lambda_5($al, $onAl);
        $composer_0.s1a(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t18();
      Input(tmp_3, tmp1_group, $composer_0, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda_5($this$Div) {
    $this$Div.c23(['setting-row']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda_6($this$Div) {
    $this$Div.c23(['setting-label']);
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_4($this$style) {
    width($this$style, get_percent(100));
    padding($this$style, [get_px(10)]);
    background($this$style, '#2d2d2d');
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    border($this$style, get_px(0));
    borderRadius($this$style, get_px(8));
    return Unit_instance;
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_5($onBg) {
    return function (e) {
      $onBg(ensureNotNull(e.f2b_1));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_7($onBg) {
    return function ($this$Select) {
      $this$Select.a23(SettingsModal$lambda$lambda$lambda$lambda$lambda_4);
      $this$Select.p28(SettingsModal$lambda$lambda$lambda$lambda$lambda_5($onBg));
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_6($b, $bg) {
    return function ($this$Option) {
      var tmp;
      if ($b === $bg) {
        selected($this$Option);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda$lambda_7($b) {
    return function ($this$Option, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1668333320, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:321)');
      }
      Text(capitalize($b), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda$lambda_8($bg) {
    return function ($this$Select, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1601793342, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:321)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = listOf_0(['mountain', 'sea', 'urban', 'castelnau', 'air']).f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.r18(-830065597);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.b10(element) | $composer_0.b10($bg));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.r1a();
        var tmp;
        if (invalid || it === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SettingsModal$lambda$lambda$lambda$lambda$lambda_6(element, $bg);
          $composer_0.s1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1668333320, true, SettingsModal$lambda$lambda$lambda$lambda$lambda_7(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.b10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.r1a();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.s1a(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Option(element, tmp0_group, tmp0, $composer_0, 384, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda$lambda_6($onBg, $bg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1360507955, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous> (Main.kt:319)');
      }
      $composer_0.r18(2052160327);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda$lambda$lambda_6;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().b2g_1, $composer_0, 54, 0);
      $composer_0.r18(2052163434);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.b10($onBg);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SettingsModal$lambda$lambda$lambda$lambda_7($onBg);
        $composer_0.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1601793342, true, SettingsModal$lambda$lambda$lambda$lambda_8($bg), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.r1a();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Select(tmp1_group, false, tmp0, $composer_0, 384, 2);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda$lambda_0($onClose, $sf, $onSf, $al, $onAl, $onBg, $bg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-305814677, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous> (Main.kt:309)');
      }
      $composer_0.r18(406919111);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(914856588, true, SettingsModal$lambda$lambda$lambda_0($onClose), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_38(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.r18(406924070);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SettingsModal$lambda$lambda$lambda_1;
        $composer_0.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-263711883, true, SettingsModal$lambda$lambda$lambda_2($sf, $onSf), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.r1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_41(dispatchReceiver_0);
        $composer_2.s1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.r18(406935686);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.r1a();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = SettingsModal$lambda$lambda$lambda_3;
        $composer_0.s1a(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-1599085612, true, SettingsModal$lambda$lambda$lambda_4($al, $onAl), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.b10(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.r1a();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_44(dispatchReceiver_1);
        $composer_3.s1a(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
      $composer_0.r18(406947078);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.r1a();
      var tmp_11;
      if (false || it_5 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_5 = SettingsModal$lambda$lambda$lambda_5;
        $composer_0.s1a(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp3_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_2 = rememberComposableLambda(1360507955, true, SettingsModal$lambda$lambda$lambda_6($onBg, $bg), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_4.b10(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_4.r1a();
      var tmp_13;
      if (invalid_2 || it_6 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_47(dispatchReceiver_2);
        $composer_4.s1a(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp0_2 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      Div(tmp3_group, tmp0_2, $composer_0, 54, 0);
      var tmp_15;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_15 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda_0($onClose, $sf, $onSf, $al, $onAl, $onBg, $bg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(796635658, $changed, -1, 'com.example.golf_by_nm.core.SettingsModal.<anonymous> (Main.kt:308)');
      }
      $composer_0.r18(131095369);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>' call
        var value = SettingsModal$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-305814677, true, SettingsModal$lambda$lambda_0($onClose, $sf, $onSf, $al, $onAl, $onBg, $bg), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.SettingsModal.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_48(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function SettingsModal$lambda_1($sf, $onSf, $al, $onAl, $bg, $onBg, $onClose, $$changed) {
    return function ($composer, $force) {
      SettingsModal($sf, $onSf, $al, $onAl, $bg, $onBg, $onClose, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PerformanceHUD$lambda($this$Div) {
    $this$Div.c23(['hud-panel', 'hud-left']);
    return Unit_instance;
  }
  function PerformanceHUD$lambda$lambda($this$Div) {
    $this$Div.c23(['hud-title']);
    return Unit_instance;
  }
  function PerformanceHUD$lambda_0($res) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(298518819, $changed, -1, 'com.example.golf_by_nm.core.PerformanceHUD.<anonymous> (Main.kt:331)');
      }
      $composer_0.r18(-92857062);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PerformanceHUD.<anonymous>.<anonymous>.<anonymous>' call
        var value = PerformanceHUD$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().c2g_1, $composer_0, 54, 0);
      HudRow('CLUB', !($res == null) ? format($res.j2d_1, 1) : '--', 'MPH', $composer_0, 390);
      HudRow('BALL', !($res == null) ? format($res.k2d_1, 1) : '--', 'MPH', $composer_0, 390);
      HudRow('SMASH', !($res == null) ? format($res.l2d_1, 2) : '--', '', $composer_0, 390);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PerformanceHUD$lambda_1($res, $$changed) {
    return function ($composer, $force) {
      PerformanceHUD($res, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ImpactHUD$lambda($this$Div) {
    $this$Div.c23(['hud-panel', 'hud-right']);
    return Unit_instance;
  }
  function ImpactHUD$lambda$lambda($this$Div) {
    $this$Div.c23(['hud-title']);
    return Unit_instance;
  }
  function ImpactHUD$lambda_0($res, $faceAngle, $attack) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(166406603, $changed, -1, 'com.example.golf_by_nm.core.ImpactHUD.<anonymous> (Main.kt:342)');
      }
      $composer_0.r18(-512184756);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.ImpactHUD.<anonymous>.<anonymous>.<anonymous>' call
        var value = ImpactHUD$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().d2g_1, $composer_0, 54, 0);
      HudRow('PATH', !($res == null) ? format($res.n2d_1, 1) + '\xB0' : '--', '', $composer_0, 390);
      HudRow('FACE', format_0($faceAngle, 1) + '\xB0', '', $composer_0, 390);
      HudRow('ATTACK', format_0($attack, 1) + '\xB0', '', $composer_0, 390);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ImpactHUD$lambda_1($res, $strike, $limit, $$changed) {
    return function ($composer, $force) {
      ImpactHUD($res, $strike, $limit, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PuttingHUD$lambda($this$Div) {
    $this$Div.c23(['hud-panel', 'hud-left']);
    return Unit_instance;
  }
  function PuttingHUD$lambda$lambda($this$Div) {
    $this$Div.c23(['hud-title']);
    return Unit_instance;
  }
  function PuttingHUD$lambda_0($sx, $sy, $ghost) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(658238806, $changed, -1, 'com.example.golf_by_nm.core.PuttingHUD.<anonymous> (Main.kt:352)');
      }
      $composer_0.r18(-1004412627);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingHUD$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().e2g_1, $composer_0, 54, 0);
      HudRow('SLOPE X', format($sx, 1) + '%', '', $composer_0, 390);
      HudRow('SLOPE Y', format($sy, 1) + '%', '', $composer_0, 390);
      if (!($ghost == null)) {
        HudRow('AIM X', format($ghost.a2e_1, 2) + 'm', '', $composer_0, 390);
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingHUD$lambda_1($this$Div) {
    $this$Div.c23(['hud-panel', 'hud-right']);
    return Unit_instance;
  }
  function PuttingHUD$lambda$lambda_0($this$Div) {
    $this$Div.c23(['hud-title']);
    return Unit_instance;
  }
  function PuttingHUD$lambda_2($res) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1559788901, $changed, -1, 'com.example.golf_by_nm.core.PuttingHUD.<anonymous> (Main.kt:359)');
      }
      $composer_0.r18(-1004402035);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingHUD.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingHUD$lambda$lambda_0;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().f2g_1, $composer_0, 54, 0);
      HudRow('STOP X', format($res.a2e_1, 2) + 'm', '', $composer_0, 390);
      HudRow('STOP Y', format($res.b2e_1, 2) + 'm', '', $composer_0, 390);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingHUD$lambda_3($res, $ghost, $sx, $sy, $$changed) {
    return function ($composer, $force) {
      PuttingHUD($res, $ghost, $sx, $sy, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HudRow$lambda($this$Div) {
    $this$Div.c23(['hud-row']);
    return Unit_instance;
  }
  function HudRow$lambda$lambda($this$Span) {
    $this$Span.c23(['hud-label']);
    return Unit_instance;
  }
  function HudRow$lambda$lambda_0($label) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1936919730, $changed, -1, 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous> (Main.kt:368)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function HudRow$lambda$lambda$lambda($this$Span) {
    $this$Span.c23(['hud-value']);
    return Unit_instance;
  }
  function HudRow$lambda$lambda$lambda_0($value) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1407531569, $changed, -1, 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous> (Main.kt:368)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function HudRow$lambda$lambda$lambda_1($this$Span) {
    $this$Span.c23(['hud-unit']);
    return Unit_instance;
  }
  function HudRow$lambda$lambda$lambda_2($unit) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1035459316, $changed, -1, 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous> (Main.kt:368)');
      }
      Text($unit, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function HudRow$lambda$lambda_1($unit, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1955028435, $changed, -1, 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous> (Main.kt:368)');
      }
      $composer_0.r18(1500696373);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = HudRow$lambda$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1407531569, true, HudRow$lambda$lambda$lambda_0($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_55(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = $unit;
      if (charSequenceLength(this_0) > 0) {
        $composer_0.r18(1500698868);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.r1a();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = HudRow$lambda$lambda$lambda_1;
          $composer_0.s1a(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1035459316, true, HudRow$lambda$lambda$lambda_2($unit), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.b10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.r1a();
        var tmp_5;
        if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_56(dispatchReceiver_0);
          $composer_2.s1a(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Span(tmp1_group, tmp0_0, $composer_0, 54, 0);
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function HudRow$lambda_0($label, $unit, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(319241428, $changed, -1, 'com.example.golf_by_nm.core.HudRow.<anonymous> (Main.kt:368)');
      }
      $composer_0.r18(536068758);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>' call
        var value = HudRow$lambda$lambda;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1936919730, true, HudRow$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_54(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1955028435, true, HudRow$lambda$lambda_1($unit, $value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.r1a();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.HudRow.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_57(dispatchReceiver_0);
        $composer_2.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(null, tmp0_0, $composer_0, 48, 1);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function HudRow$lambda_1($label, $value, $unit, $$changed) {
    return function ($composer, $force) {
      HudRow($label, $value, $unit, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ClubHorizontalBar$lambda($this$Div) {
    $this$Div.c23(['club-bar']);
    return Unit_instance;
  }
  function ClubHorizontalBar$lambda$lambda$lambda($onSelect, $club) {
    return function (it) {
      $onSelect($club);
      return Unit_instance;
    };
  }
  function ClubHorizontalBar$lambda$lambda($club, $selected, $onSelect) {
    return function ($this$Button) {
      $this$Button.c23(['club-btn']);
      var tmp;
      if ($club.y2c_1 === $selected.y2c_1) {
        $this$Button.c23(['active']);
        tmp = Unit_instance;
      }
      $this$Button.h23(ClubHorizontalBar$lambda$lambda$lambda($onSelect, $club));
      return Unit_instance;
    };
  }
  function ClubHorizontalBar$lambda$lambda_0($club) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1766886767, $changed, -1, 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>.<anonymous> (Main.kt:373)');
      }
      Text($club.y2c_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ClubHorizontalBar$lambda_0($clubs, $selected, $onSelect) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-912806080, $changed, -1, 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous> (Main.kt:373)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $clubs.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.r18(-1058662847);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.b10(element) | $composer_0.b10($selected)) | $composer_0.b10($onSelect));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.r1a();
        var tmp;
        if (invalid || it === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ClubHorizontalBar$lambda$lambda(element, $selected, $onSelect);
          $composer_0.s1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1766886767, true, ClubHorizontalBar$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.b10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.r1a();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().j13_1) {
          // Inline function 'com.example.golf_by_nm.core.ClubHorizontalBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_59(dispatchReceiver);
          $composer_1.s1a(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp0_group, tmp0, $composer_0, 48, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function ClubHorizontalBar$lambda_1($clubs, $selected, $onSelect, $$changed) {
    return function ($composer, $force) {
      ClubHorizontalBar($clubs, $selected, $onSelect, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda($this$Div) {
    $this$Div.a23(PuttingControls$lambda$lambda);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    gap($this$style, get_px(30));
    flex($this$style, 1);
    fontSize($this$style, get_px(10));
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda_0($this$Div) {
    $this$Div.a23(PuttingControls$lambda$lambda$lambda);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda($this$style) {
    flex($this$style, 1);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda$lambda($onHole) {
    return function (e) {
      $onHole(numberToDouble(ensureNotNull(e.f2b_1)));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda$lambda_0($hole, $onHole) {
    return function ($this$Input) {
      $this$Input.x22('min', '1');
      $this$Input.x22('max', '20');
      $this$Input.x22('step', '0.5');
      $this$Input.i28($hole.toString());
      $this$Input.j28(PuttingControls$lambda$lambda$lambda$lambda($onHole));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda_1($hole, $onHole) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1166361002, $changed, -1, 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous> (Main.kt:379)');
      }
      Span(null, ComposableSingletons$MainKt_getInstance().g2g_1, $composer_0, 48, 1);
      var tmp = Range_getInstance();
      $composer_0.r18(-1884331656);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.n19($hole) | $composer_0.b10($onHole));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingControls$lambda$lambda$lambda_0($hole, $onHole);
        $composer_0.s1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t18();
      Input(tmp, tmp0_group, $composer_0, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingControls$lambda$lambda_2($this$Div) {
    $this$Div.a23(PuttingControls$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda_1($this$style) {
    flex($this$style, 1);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda$lambda_0($onSx) {
    return function (e) {
      $onSx(numberToDouble(ensureNotNull(e.f2b_1)));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda$lambda_2($sx, $onSx) {
    return function ($this$Input) {
      $this$Input.x22('min', '-5');
      $this$Input.x22('max', '5');
      $this$Input.x22('step', '0.1');
      $this$Input.i28($sx.toString());
      $this$Input.j28(PuttingControls$lambda$lambda$lambda$lambda_0($onSx));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda_3($sx, $onSx) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(269126035, $changed, -1, 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous> (Main.kt:380)');
      }
      Span(null, ComposableSingletons$MainKt_getInstance().h2g_1, $composer_0, 48, 1);
      var tmp = Range_getInstance();
      $composer_0.r18(-1884324268);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.n19($sx) | $composer_0.b10($onSx));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingControls$lambda$lambda$lambda_2($sx, $onSx);
        $composer_0.s1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t18();
      Input(tmp, tmp0_group, $composer_0, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingControls$lambda$lambda_4($this$Div) {
    $this$Div.a23(PuttingControls$lambda$lambda$lambda_3);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda_3($this$style) {
    flex($this$style, 1);
    return Unit_instance;
  }
  function PuttingControls$lambda$lambda$lambda$lambda_1($onSy) {
    return function (e) {
      $onSy(numberToDouble(ensureNotNull(e.f2b_1)));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda$lambda_4($sy, $onSy) {
    return function ($this$Input) {
      $this$Input.x22('min', '-10');
      $this$Input.x22('max', '10');
      $this$Input.x22('step', '0.1');
      $this$Input.i28($sy.toString());
      $this$Input.j28(PuttingControls$lambda$lambda$lambda$lambda_1($onSy));
      return Unit_instance;
    };
  }
  function PuttingControls$lambda$lambda_5($sy, $onSy) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-415104270, $changed, -1, 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous> (Main.kt:381)');
      }
      Span(null, ComposableSingletons$MainKt_getInstance().i2g_1, $composer_0, 48, 1);
      var tmp = Range_getInstance();
      $composer_0.r18(-1884317002);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.n19($sy) | $composer_0.b10($onSy));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingControls$lambda$lambda$lambda_4($sy, $onSy);
        $composer_0.s1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t18();
      Input(tmp, tmp0_group, $composer_0, 0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingControls$lambda_0($hole, $onHole, $sx, $onSx, $sy, $onSy) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-770280567, $changed, -1, 'com.example.golf_by_nm.core.PuttingControls.<anonymous> (Main.kt:379)');
      }
      $composer_0.r18(-1932638773);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (false || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
        var value = PuttingControls$lambda$lambda_0;
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1166361002, true, PuttingControls$lambda$lambda_1($hole, $onHole), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.b10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.r1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_61(dispatchReceiver);
        $composer_1.s1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.r18(-1932631477);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.r1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = PuttingControls$lambda$lambda_2;
        $composer_0.s1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(269126035, true, PuttingControls$lambda$lambda_3($sx, $onSx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.b10(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.r1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_62(dispatchReceiver_0);
        $composer_2.s1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.r18(-1932624213);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.r1a();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = PuttingControls$lambda$lambda_4;
        $composer_0.s1a(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-415104270, true, PuttingControls$lambda$lambda_5($sy, $onSy), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.b10(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.r1a();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.PuttingControls.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_63(dispatchReceiver_1);
        $composer_3.s1a(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function PuttingControls$lambda_1($sx, $sy, $hole, $onSx, $onSy, $onHole, $$changed) {
    return function ($composer, $force) {
      PuttingControls($sx, $sy, $hole, $onSx, $onSy, $onHole, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InteractiveImpactBall$lambda($this$Div) {
    $this$Div.c23(['impact-container']);
    return Unit_instance;
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).vh = function () {
    // Inline function 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function InteractiveImpactBall$lambda$lambda$lambda($strike) {
    return function ($this$ref, element) {
      drawImpactBall(element, $strike);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0();
    };
  }
  function InteractiveImpactBall$lambda$lambda$lambda_0($onUpdate) {
    return function (e) {
      var tmp = e.i2a_1;
      var rect = (tmp instanceof HTMLElement ? tmp : THROW_CCE()).getBoundingClientRect();
      $onUpdate(new Point(coerceIn_0((e.b2c_1 - rect.left) / rect.width, 0.0, 1.0), coerceIn_0((e.c2c_1 - rect.top) / rect.height, 0.0, 1.0)));
      return Unit_instance;
    };
  }
  function InteractiveImpactBall$lambda$lambda($strike, $onUpdate) {
    return function ($this$Canvas) {
      $this$Canvas.d23('impactCanvas');
      $this$Canvas.x22('width', '130');
      $this$Canvas.x22('height', '130');
      $this$Canvas.e23(InteractiveImpactBall$lambda$lambda$lambda($strike));
      $this$Canvas.i23(InteractiveImpactBall$lambda$lambda$lambda_0($onUpdate));
      return Unit_instance;
    };
  }
  function InteractiveImpactBall$lambda_0($strike, $onUpdate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-446867622, $changed, -1, 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous> (Main.kt:388)');
      }
      $composer_0.r18(146555055);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.b10($strike) | $composer_0.b10($onUpdate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.r1a();
      var tmp;
      if (invalid || it === Companion_getInstance().j13_1) {
        // Inline function 'com.example.golf_by_nm.core.InteractiveImpactBall.<anonymous>.<anonymous>.<anonymous>' call
        var value = InteractiveImpactBall$lambda$lambda($strike, $onUpdate);
        $composer_0.s1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t18();
      Canvas(tmp0_group, null, $composer_0, 0, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x20(p0, p1, p2);
    };
  }
  function InteractiveImpactBall$lambda_1($strike, $onUpdate, $$changed) {
    return function ($composer, $force) {
      InteractiveImpactBall($strike, $onUpdate, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppMode_RANGE_getInstance() {
    AppMode_initEntries();
    return AppMode_RANGE_instance;
  }
  function AppMode_PUTTING_getInstance() {
    AppMode_initEntries();
    return AppMode_PUTTING_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  com_example_golf_by_nm_core_Point$stable = 0;
  com_example_golf_by_nm_core_Point3D$stable = 0;
  com_example_golf_by_nm_core_ClubSpecs$stable = 0;
  com_example_golf_by_nm_core_Club$stable = 0;
  com_example_golf_by_nm_core_TrajectoryResult$stable = 8;
  com_example_golf_by_nm_core_PuttingResult$stable = 8;
  com_example_golf_by_nm_core_SwingInputData$stable = 0;
  com_example_golf_by_nm_core_LaunchParams$stable = 0;
  com_example_golf_by_nm_core_PhysicsEngine$stable = 8;
  com_example_golf_by_nm_core_PuttingPhysicsEngine$stable = 0;
  PuttingPhysicsEngine_instance = new PuttingPhysicsEngine();
  com_example_golf_by_nm_core_SwingCanceledException$stable = 0;
  com_example_golf_by_nm_core_SwingCaptureProcessor$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Golf_by_NM-golf-core.js.map
