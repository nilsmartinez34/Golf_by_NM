(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
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
    globalThis['Golf_by_NM:golf-core'] = factory(typeof globalThis['Golf_by_NM:golf-core'] === 'undefined' ? {} : globalThis['Golf_by_NM:golf-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-internal-html-core-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c5;
  var getNumberHashCode = kotlin_kotlin.$_$.j4;
  var THROW_CCE = kotlin_kotlin.$_$.d6;
  var equals = kotlin_kotlin.$_$.f4;
  var initMetadataForClass = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.l4;
  var toString = kotlin_kotlin.$_$.e5;
  var hashCode = kotlin_kotlin.$_$.m4;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var to = kotlin_kotlin.$_$.t6;
  var mapOf = kotlin_kotlin.$_$.t2;
  var coerceAtLeast = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var coerceIn = kotlin_kotlin.$_$.i5;
  var initMetadataForObject = kotlin_kotlin.$_$.s4;
  var THROW_IAE = kotlin_kotlin.$_$.e6;
  var Enum = kotlin_kotlin.$_$.w5;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var listOf = kotlin_kotlin.$_$.s2;
  var checkIndexOverflow = kotlin_kotlin.$_$.f2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Option = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var KMutableProperty0 = kotlin_kotlin.$_$.l5;
  var THROW_ISE = kotlin_kotlin.$_$.f6;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i4;
  var ensureNotNull = kotlin_kotlin.$_$.l6;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Select = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var toDoubleOrNull = kotlin_kotlin.$_$.r5;
  var Number_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var Canvas = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Point3D, 'Point3D');
  initMetadataForClass(Club, 'Club');
  initMetadataForClass(TrajectoryResult, 'TrajectoryResult');
  initMetadataForClass(PuttingResult, 'PuttingResult');
  initMetadataForClass(SwingInputData, 'SwingInputData');
  initMetadataForClass(LaunchParams, 'LaunchParams');
  initMetadataForObject(PhysicsEngine, 'PhysicsEngine');
  initMetadataForObject(PuttingPhysicsEngine, 'PuttingPhysicsEngine');
  initMetadataForClass(SimMode, 'SimMode', VOID, Enum);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  var com_example_golf_by_nm_core_Point$stable;
  var com_example_golf_by_nm_core_Point3D$stable;
  var com_example_golf_by_nm_core_ClubSpecs$stable;
  var com_example_golf_by_nm_core_Club$stable;
  var com_example_golf_by_nm_core_TrajectoryResult$stable;
  var com_example_golf_by_nm_core_PuttingResult$stable;
  var com_example_golf_by_nm_core_SwingInputData$stable;
  var com_example_golf_by_nm_core_LaunchParams$stable;
  function Point3D(x, y, z) {
    this.p2b_1 = x;
    this.q2b_1 = y;
    this.r2b_1 = z;
  }
  protoOf(Point3D).toString = function () {
    return 'Point3D(x=' + this.p2b_1 + ', y=' + this.q2b_1 + ', z=' + this.r2b_1 + ')';
  };
  protoOf(Point3D).hashCode = function () {
    var result = getNumberHashCode(this.p2b_1);
    result = imul(result, 31) + getNumberHashCode(this.q2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r2b_1) | 0;
    return result;
  };
  protoOf(Point3D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point3D))
      return false;
    var tmp0_other_with_cast = other instanceof Point3D ? other : THROW_CCE();
    if (!equals(this.p2b_1, tmp0_other_with_cast.p2b_1))
      return false;
    if (!equals(this.q2b_1, tmp0_other_with_cast.q2b_1))
      return false;
    if (!equals(this.r2b_1, tmp0_other_with_cast.r2b_1))
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
    this.s2b_1 = name;
    this.t2b_1 = loft;
    this.u2b_1 = lengthInches;
    this.v2b_1 = smashFactor;
    this.w2b_1 = baseSpinRpm;
    this.x2b_1 = rollFactor;
    this.y2b_1 = faceAngle;
    this.z2b_1 = pgaTargetSpeedMph;
  }
  protoOf(Club).a2c = function (name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph) {
    return new Club(name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph);
  };
  protoOf(Club).b2c = function (name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph, $super) {
    name = name === VOID ? this.s2b_1 : name;
    loft = loft === VOID ? this.t2b_1 : loft;
    lengthInches = lengthInches === VOID ? this.u2b_1 : lengthInches;
    smashFactor = smashFactor === VOID ? this.v2b_1 : smashFactor;
    baseSpinRpm = baseSpinRpm === VOID ? this.w2b_1 : baseSpinRpm;
    rollFactor = rollFactor === VOID ? this.x2b_1 : rollFactor;
    faceAngle = faceAngle === VOID ? this.y2b_1 : faceAngle;
    pgaTargetSpeedMph = pgaTargetSpeedMph === VOID ? this.z2b_1 : pgaTargetSpeedMph;
    return $super === VOID ? this.a2c(name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph) : $super.a2c.call(this, name, loft, lengthInches, smashFactor, baseSpinRpm, rollFactor, faceAngle, pgaTargetSpeedMph);
  };
  protoOf(Club).toString = function () {
    return 'Club(name=' + this.s2b_1 + ', loft=' + this.t2b_1 + ', lengthInches=' + this.u2b_1 + ', smashFactor=' + this.v2b_1 + ', baseSpinRpm=' + this.w2b_1 + ', rollFactor=' + this.x2b_1 + ', faceAngle=' + this.y2b_1 + ', pgaTargetSpeedMph=' + this.z2b_1 + ')';
  };
  protoOf(Club).hashCode = function () {
    var result = getStringHashCode(this.s2b_1);
    result = imul(result, 31) + getNumberHashCode(this.t2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z2b_1) | 0;
    return result;
  };
  protoOf(Club).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Club))
      return false;
    var tmp0_other_with_cast = other instanceof Club ? other : THROW_CCE();
    if (!(this.s2b_1 === tmp0_other_with_cast.s2b_1))
      return false;
    if (!equals(this.t2b_1, tmp0_other_with_cast.t2b_1))
      return false;
    if (!equals(this.u2b_1, tmp0_other_with_cast.u2b_1))
      return false;
    if (!equals(this.v2b_1, tmp0_other_with_cast.v2b_1))
      return false;
    if (!equals(this.w2b_1, tmp0_other_with_cast.w2b_1))
      return false;
    if (!equals(this.x2b_1, tmp0_other_with_cast.x2b_1))
      return false;
    if (!equals(this.y2b_1, tmp0_other_with_cast.y2b_1))
      return false;
    if (!equals(this.z2b_1, tmp0_other_with_cast.z2b_1))
      return false;
    return true;
  };
  function TrajectoryResult(path, clubHeadSpeedMph, ballSpeedMph, smashFactor, launchAngle, swingPath, faceToPath, carryDistance, totalDistance, rollDistance, lateralDeviation, maxHeight, spinRpm, sideSpinRpm, launchVelocity, flightTimeSeconds) {
    rollDistance = rollDistance === VOID ? 0.0 : rollDistance;
    spinRpm = spinRpm === VOID ? 0.0 : spinRpm;
    sideSpinRpm = sideSpinRpm === VOID ? 0.0 : sideSpinRpm;
    launchVelocity = launchVelocity === VOID ? 0.0 : launchVelocity;
    flightTimeSeconds = flightTimeSeconds === VOID ? 0.0 : flightTimeSeconds;
    this.c2c_1 = path;
    this.d2c_1 = clubHeadSpeedMph;
    this.e2c_1 = ballSpeedMph;
    this.f2c_1 = smashFactor;
    this.g2c_1 = launchAngle;
    this.h2c_1 = swingPath;
    this.i2c_1 = faceToPath;
    this.j2c_1 = carryDistance;
    this.k2c_1 = totalDistance;
    this.l2c_1 = rollDistance;
    this.m2c_1 = lateralDeviation;
    this.n2c_1 = maxHeight;
    this.o2c_1 = spinRpm;
    this.p2c_1 = sideSpinRpm;
    this.q2c_1 = launchVelocity;
    this.r2c_1 = flightTimeSeconds;
  }
  protoOf(TrajectoryResult).toString = function () {
    return 'TrajectoryResult(path=' + toString(this.c2c_1) + ', clubHeadSpeedMph=' + this.d2c_1 + ', ballSpeedMph=' + this.e2c_1 + ', smashFactor=' + this.f2c_1 + ', launchAngle=' + this.g2c_1 + ', swingPath=' + this.h2c_1 + ', faceToPath=' + this.i2c_1 + ', carryDistance=' + this.j2c_1 + ', totalDistance=' + this.k2c_1 + ', rollDistance=' + this.l2c_1 + ', lateralDeviation=' + this.m2c_1 + ', maxHeight=' + this.n2c_1 + ', spinRpm=' + this.o2c_1 + ', sideSpinRpm=' + this.p2c_1 + ', launchVelocity=' + this.q2c_1 + ', flightTimeSeconds=' + this.r2c_1 + ')';
  };
  protoOf(TrajectoryResult).hashCode = function () {
    var result = hashCode(this.c2c_1);
    result = imul(result, 31) + getNumberHashCode(this.d2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r2c_1) | 0;
    return result;
  };
  protoOf(TrajectoryResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TrajectoryResult))
      return false;
    var tmp0_other_with_cast = other instanceof TrajectoryResult ? other : THROW_CCE();
    if (!equals(this.c2c_1, tmp0_other_with_cast.c2c_1))
      return false;
    if (!equals(this.d2c_1, tmp0_other_with_cast.d2c_1))
      return false;
    if (!equals(this.e2c_1, tmp0_other_with_cast.e2c_1))
      return false;
    if (!equals(this.f2c_1, tmp0_other_with_cast.f2c_1))
      return false;
    if (!equals(this.g2c_1, tmp0_other_with_cast.g2c_1))
      return false;
    if (!equals(this.h2c_1, tmp0_other_with_cast.h2c_1))
      return false;
    if (!equals(this.i2c_1, tmp0_other_with_cast.i2c_1))
      return false;
    if (!equals(this.j2c_1, tmp0_other_with_cast.j2c_1))
      return false;
    if (!equals(this.k2c_1, tmp0_other_with_cast.k2c_1))
      return false;
    if (!equals(this.l2c_1, tmp0_other_with_cast.l2c_1))
      return false;
    if (!equals(this.m2c_1, tmp0_other_with_cast.m2c_1))
      return false;
    if (!equals(this.n2c_1, tmp0_other_with_cast.n2c_1))
      return false;
    if (!equals(this.o2c_1, tmp0_other_with_cast.o2c_1))
      return false;
    if (!equals(this.p2c_1, tmp0_other_with_cast.p2c_1))
      return false;
    if (!equals(this.q2c_1, tmp0_other_with_cast.q2c_1))
      return false;
    if (!equals(this.r2c_1, tmp0_other_with_cast.r2c_1))
      return false;
    return true;
  };
  function PuttingResult(path, totalDistance, finalX, finalY, residualSpeed) {
    this.s2c_1 = path;
    this.t2c_1 = totalDistance;
    this.u2c_1 = finalX;
    this.v2c_1 = finalY;
    this.w2c_1 = residualSpeed;
  }
  protoOf(PuttingResult).toString = function () {
    return 'PuttingResult(path=' + toString(this.s2c_1) + ', totalDistance=' + this.t2c_1 + ', finalX=' + this.u2c_1 + ', finalY=' + this.v2c_1 + ', residualSpeed=' + this.w2c_1 + ')';
  };
  protoOf(PuttingResult).hashCode = function () {
    var result = hashCode(this.s2c_1);
    result = imul(result, 31) + getNumberHashCode(this.t2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w2c_1) | 0;
    return result;
  };
  protoOf(PuttingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PuttingResult))
      return false;
    var tmp0_other_with_cast = other instanceof PuttingResult ? other : THROW_CCE();
    if (!equals(this.s2c_1, tmp0_other_with_cast.s2c_1))
      return false;
    if (!equals(this.t2c_1, tmp0_other_with_cast.t2c_1))
      return false;
    if (!equals(this.u2c_1, tmp0_other_with_cast.u2c_1))
      return false;
    if (!equals(this.v2c_1, tmp0_other_with_cast.v2c_1))
      return false;
    if (!equals(this.w2c_1, tmp0_other_with_cast.w2c_1))
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
    this.x2c_1 = isValid;
    this.y2c_1 = failureReason;
    this.z2c_1 = clubSpeedMph;
    this.a2d_1 = efficiency;
    this.b2d_1 = attackAngleDeg;
    this.c2d_1 = pathDeviationDeg;
    this.d2d_1 = powerFactor;
    this.e2d_1 = tempoRatio;
  }
  protoOf(SwingInputData).toString = function () {
    return 'SwingInputData(isValid=' + this.x2c_1 + ', failureReason=' + this.y2c_1 + ', clubSpeedMph=' + this.z2c_1 + ', efficiency=' + this.a2d_1 + ', attackAngleDeg=' + this.b2d_1 + ', pathDeviationDeg=' + this.c2d_1 + ', powerFactor=' + this.d2d_1 + ', tempoRatio=' + this.e2d_1 + ')';
  };
  protoOf(SwingInputData).hashCode = function () {
    var result = getBooleanHashCode(this.x2c_1);
    result = imul(result, 31) + (this.y2c_1 == null ? 0 : getStringHashCode(this.y2c_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z2c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e2d_1) | 0;
    return result;
  };
  protoOf(SwingInputData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SwingInputData))
      return false;
    var tmp0_other_with_cast = other instanceof SwingInputData ? other : THROW_CCE();
    if (!(this.x2c_1 === tmp0_other_with_cast.x2c_1))
      return false;
    if (!(this.y2c_1 == tmp0_other_with_cast.y2c_1))
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
    return true;
  };
  function LaunchParams(ballSpeedMps, launchAngleDeg, horizontalLaunchDeg, sideSpinRpm, backSpinRpm) {
    this.f2d_1 = ballSpeedMps;
    this.g2d_1 = launchAngleDeg;
    this.h2d_1 = horizontalLaunchDeg;
    this.i2d_1 = sideSpinRpm;
    this.j2d_1 = backSpinRpm;
  }
  protoOf(LaunchParams).toString = function () {
    return 'LaunchParams(ballSpeedMps=' + this.f2d_1 + ', launchAngleDeg=' + this.g2d_1 + ', horizontalLaunchDeg=' + this.h2d_1 + ', sideSpinRpm=' + this.i2d_1 + ', backSpinRpm=' + this.j2d_1 + ')';
  };
  protoOf(LaunchParams).hashCode = function () {
    var result = getNumberHashCode(this.f2d_1);
    result = imul(result, 31) + getNumberHashCode(this.g2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i2d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j2d_1) | 0;
    return result;
  };
  protoOf(LaunchParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LaunchParams))
      return false;
    var tmp0_other_with_cast = other instanceof LaunchParams ? other : THROW_CCE();
    if (!equals(this.f2d_1, tmp0_other_with_cast.f2d_1))
      return false;
    if (!equals(this.g2d_1, tmp0_other_with_cast.g2d_1))
      return false;
    if (!equals(this.h2d_1, tmp0_other_with_cast.h2d_1))
      return false;
    if (!equals(this.i2d_1, tmp0_other_with_cast.i2d_1))
      return false;
    if (!equals(this.j2d_1, tmp0_other_with_cast.j2d_1))
      return false;
    return true;
  };
  var com_example_golf_by_nm_core_PhysicsEngine$stable;
  function toRadians($this, deg) {
    return deg * 3.141592653589793 / 180.0;
  }
  function PhysicsEngine() {
    PhysicsEngine_instance = this;
    this.k2d_1 = 9.81;
    this.l2d_1 = 1.225;
    this.m2d_1 = 0.0459;
    this.n2d_1 = 0.001432;
    this.o2d_1 = 0.02135;
    this.p2d_1 = 0.999;
    this.q2d_1 = mapOf([to('Dr', new Club('Dr', 10.5, 45.0, 1.5, 2300.0, 0.25)), to('3W', new Club('3W', 15.0, 43.0, 1.42, 3600.0, 0.18)), to('4i', new Club('4i', 24.0, 38.5, 1.37, 5200.0, 0.08)), to('5i', new Club('5i', 27.0, 38.0, 1.32, 5800.0, 0.07)), to('6i', new Club('6i', 30.0, 37.5, 1.27, 6400.0, 0.06)), to('7i', new Club('7i', 34.0, 37.0, 1.22, 7200.0, 0.06)), to('8i', new Club('8i', 37.0, 36.5, 1.17, 8000.0, 0.05)), to('9i', new Club('9i', 41.0, 36.0, 1.12, 8800.0, 0.05)), to('PW', new Club('PW', 45.0, 35.5, 1.07, 10200.0, 0.04)), to('SW', new Club('SW', 54.0, 35.0, 1.03, 11800.0, 0.02)), to('LW', new Club('LW', 58.0, 35.0, 1.0, 13500.0, 0.01))]);
  }
  protoOf(PhysicsEngine).r2d = function (input, club, manualAttackAngle) {
    var vClubMps = input.z2c_1 * input.d2d_1 * 0.44704;
    var vBallMps = vClubMps * club.v2b_1 * input.a2d_1;
    var launchAngle = club.t2b_1 * (0.95 - club.t2b_1 * 0.005) + manualAttackAngle * 0.6;
    var speedRatio = vBallMps / 60.0;
    var spinLoft = coerceAtLeast(club.t2b_1 - manualAttackAngle, 10.0);
    var spinLoftFactor = spinLoft / club.t2b_1;
    var backSpin = club.w2b_1 * speedRatio * spinLoftFactor;
    var sideSpin = (club.y2b_1 - input.c2d_1) * 180.0 * speedRatio;
    var horizontalLaunch = input.c2d_1 * 0.7 + club.y2b_1 * 0.3;
    return new LaunchParams(vBallMps, launchAngle, horizontalLaunch, sideSpin, backSpin);
  };
  protoOf(PhysicsEngine).s2d = function (input, club, manualAttackAngle, $super) {
    manualAttackAngle = manualAttackAngle === VOID ? 0.0 : manualAttackAngle;
    return $super === VOID ? this.r2d(input, club, manualAttackAngle) : $super.r2d.call(this, input, club, manualAttackAngle);
  };
  protoOf(PhysicsEngine).t2d = function (params, input, club) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var path = ArrayList_init_$Create$();
    var dt = 0.01;
    var t = 0.0;
    var x = 0.0;
    var y = 0.0;
    var z = 0.0;
    var launchRad = toRadians(this, params.g2d_1);
    var yawRad = toRadians(this, params.h2d_1);
    // Inline function 'kotlin.math.cos' call
    var tmp$ret$1 = Math.cos(launchRad);
    var tmp = params.f2d_1 * tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    var vx = tmp * Math.cos(yawRad);
    // Inline function 'kotlin.math.sin' call
    var tmp$ret$3 = Math.sin(launchRad);
    var vy = params.f2d_1 * tmp$ret$3;
    // Inline function 'kotlin.math.cos' call
    var tmp$ret$4 = Math.cos(launchRad);
    var tmp_0 = params.f2d_1 * tmp$ret$4;
    // Inline function 'kotlin.math.sin' call
    var vz = tmp_0 * Math.sin(yawRad);
    var currentBackSpin = params.j2d_1;
    var currentSideSpin = params.i2d_1;
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
    var roll = x * club.x2b_1 * (1.0 - coerceIn(maxY / 50.0, 0.0, 0.8));
    return new TrajectoryResult(path, input.z2c_1 * input.d2d_1, params.f2d_1 / 0.44704, params.f2d_1 / 0.44704 / coerceAtLeast(input.z2c_1 * input.d2d_1, 1.0), params.g2d_1, input.c2d_1, club.y2b_1 - input.c2d_1, x, x + roll, roll, z, maxY, params.j2d_1, params.i2d_1, params.f2d_1, t);
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
    this.u2d_1 = 9.81;
    this.v2d_1 = 0.131;
    this.w2d_1 = 0.01;
    this.x2d_1 = 0.01;
  }
  protoOf(PuttingPhysicsEngine).y2d = function (targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg) {
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
  protoOf(PuttingPhysicsEngine).z2d = function (targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg, $super) {
    aimAngleDeg = aimAngleDeg === VOID ? 0.0 : aimAngleDeg;
    return $super === VOID ? this.y2d(targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg) : $super.y2d.call(this, targetDistance, slopeXDeg, slopeYDeg, aimAngleDeg);
  };
  var PuttingPhysicsEngine_instance;
  function PuttingPhysicsEngine_getInstance() {
    return PuttingPhysicsEngine_instance;
  }
  var SimMode_PRACTICE_instance;
  var SimMode_PUTTING_instance;
  function valueOf(value) {
    switch (value) {
      case 'PRACTICE':
        return SimMode_PRACTICE_getInstance();
      case 'PUTTING':
        return SimMode_PUTTING_getInstance();
      default:
        SimMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var SimMode_entriesInitialized;
  function SimMode_initEntries() {
    if (SimMode_entriesInitialized)
      return Unit_instance;
    SimMode_entriesInitialized = true;
    SimMode_PRACTICE_instance = new SimMode('PRACTICE', 0);
    SimMode_PUTTING_instance = new SimMode('PUTTING', 1);
  }
  function SimMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function main() {
    renderComposable('root', ComposableSingletons$MainKt_getInstance().n2e_1);
  }
  function simulatePractice(clubName, speed, attack, onResult) {
    var tmp0_safe_receiver = PhysicsEngine_getInstance().q2d_1.l1(clubName);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2c();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var club = tmp;
    var input = new SwingInputData(true, VOID, speed, VOID, attack);
    var launch = PhysicsEngine_getInstance().s2d(input, club);
    var result = PhysicsEngine_getInstance().t2d(launch, input, club);
    var msg = 'Carry: ' + format(result.j2c_1, 1) + 'm | Total: ' + format(result.k2c_1, 1) + 'm | Height: ' + format(result.n2c_1, 1) + 'm';
    onResult(msg, result.c2c_1);
  }
  function simulatePutting(dist, sx, sy, onResult) {
    var result = PuttingPhysicsEngine_instance.z2d(dist, sx, sy);
    var msg = 'Result: X=' + format(result.u2c_1, 2) + 'm, Y=' + format(result.v2c_1, 2) + 'm (Residual Speed: ' + format(result.w2c_1, 2) + 'm/s)';
    var points = listOf([new Point3D(0.0, 0.0, 0.0), new Point3D(result.u2c_1, result.v2c_1, 0.0)]);
    onResult(msg, points);
  }
  function drawTrajectory(points) {
    var tmp = document.getElementById('simCanvas');
    var tmp0_elvis_lhs = tmp instanceof HTMLCanvasElement ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var canvas = tmp_0;
    var tmp_1 = canvas.getContext('2d');
    var tmp1_elvis_lhs = tmp_1 instanceof CanvasRenderingContext2D ? tmp_1 : null;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var ctx = tmp_2;
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator = points.f();
      if (!iterator.g()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
      var maxValue = iterator.h().q2b_1;
      while (iterator.g()) {
        // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
        var v = iterator.h().q2b_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxValue;
        maxValue = Math.max(a, v);
      }
      tmp$ret$0 = maxValue;
    }
    var tmp2_elvis_lhs = tmp$ret$0;
    var maxDist = tmp2_elvis_lhs == null ? 100.0 : tmp2_elvis_lhs;
    var tmp_3 = canvas.width;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator_0 = points.f();
      if (!iterator_0.g()) {
        tmp$ret$4 = null;
        break $l$block_0;
      }
      // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
      var maxValue_0 = iterator_0.h().q2b_1;
      while (iterator_0.g()) {
        // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
        var v_0 = iterator_0.h().q2b_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = maxValue_0;
        maxValue_0 = Math.max(a_0, v_0);
      }
      tmp$ret$4 = maxValue_0;
    }
    var tmp3_elvis_lhs = tmp$ret$4;
    var scaleX = tmp_3 / coerceAtLeast(tmp3_elvis_lhs == null ? 200.0 : tmp3_elvis_lhs, 10.0);
    var tmp_4 = canvas.height;
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator_1 = points.f();
      if (!iterator_1.g()) {
        tmp$ret$8 = null;
        break $l$block_1;
      }
      // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
      var maxValue_1 = iterator_1.h().r2b_1;
      while (iterator_1.g()) {
        // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
        var v_1 = iterator_1.h().r2b_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = maxValue_1;
        maxValue_1 = Math.max(a_1, v_1);
      }
      tmp$ret$8 = maxValue_1;
    }
    var tmp4_elvis_lhs = tmp$ret$8;
    var scaleY = tmp_4 / coerceAtLeast(tmp4_elvis_lhs == null ? 50.0 : tmp4_elvis_lhs, 10.0) * 0.8;
    ctx.beginPath();
    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 2.0;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = points.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'com.example.golf_by_nm.core.drawTrajectory.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var drawX = item.q2b_1 * scaleX;
      var drawY = canvas.height - item.r2b_1 * scaleY;
      if (index_0 === 0) {
        ctx.moveTo(drawX, drawY);
      } else {
        ctx.lineTo(drawX, drawY);
      }
    }
    ctx.stroke();
  }
  function drawPutt(points) {
    var tmp = document.getElementById('simCanvas');
    var tmp0_elvis_lhs = tmp instanceof HTMLCanvasElement ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var canvas = tmp_0;
    var tmp_1 = canvas.getContext('2d');
    var tmp1_elvis_lhs = tmp_1 instanceof CanvasRenderingContext2D ? tmp_1 : null;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var ctx = tmp_2;
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
    var centerX = canvas.width / 2.0;
    var scale = 50.0;
    ctx.beginPath();
    ctx.strokeStyle = '#FFFF00';
    ctx.lineWidth = 2.0;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = points.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'com.example.golf_by_nm.core.drawPutt.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var drawX = centerX + item.p2b_1 * scale;
      var drawY = canvas.height - item.q2b_1 * scale - 20.0;
      if (index_0 === 0) {
        ctx.moveTo(drawX, drawY);
      } else {
        ctx.lineTo(drawX, drawY);
      }
    }
    ctx.stroke();
  }
  function format(_this__u8e3s4, digits) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4.toFixed(digits);
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(178812003, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:33)');
    }
    Text('Golf Simulator Core', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1465186303, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-2.<anonymous> (Main.kt:38)');
    }
    Text('Mode', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$Option, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(490708987, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-3.<anonymous> (Main.kt:45)');
    }
    Text('Practice / Swing', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$Option, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(591960882, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-4.<anonymous> (Main.kt:46)');
    }
    Text('Putting', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$Select, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-881233743, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-5.<anonymous> (Main.kt:45)');
    }
    Option('PRACTICE', null, ComposableSingletons$MainKt_getInstance().c2e_1, $composer_0, 390, 2);
    Option('PUTTING', null, ComposableSingletons$MainKt_getInstance().d2e_1, $composer_0, 390, 2);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(83071622, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-6.<anonymous> (Main.kt:55)');
    }
    Text('Club', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt($this$Select, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1004871882, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous> (Main.kt:59)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = PhysicsEngine_getInstance().q2d_1.m1().f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-2029712516, true, ComposableSingletons$MainKt$lambda_7$lambda$lambda_q2kg1o(element), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.uz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.g1a();
      var tmp;
      if (invalid || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Option(element, null, tmp0, $composer_0, 384, 2);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_7$lambda$lambda_q2kg1o($name) {
    return function ($this$Option, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2029712516, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-7.<anonymous>.<anonymous>.<anonymous> (Main.kt:60)');
      }
      Text($name, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_8$lambda_h1qhie($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1557952879, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-8.<anonymous> (Main.kt:65)');
    }
    Text('Club Speed (mph)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1835946482, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-9.<anonymous> (Main.kt:72)');
    }
    Text('Attack Angle (deg)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_10$lambda_vulrrt($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(857786333, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-10.<anonymous> (Main.kt:82)');
    }
    Text('Distance (m)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_11$lambda_acvt54($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(314070278, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-11.<anonymous> (Main.kt:89)');
    }
    Text('Slope X (deg)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_12$lambda_igqnx3($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1021303451, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-12.<anonymous> (Main.kt:96)');
    }
    Text('Slope Y (deg)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1948308070, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-13.<anonymous> (Main.kt:120)');
    }
    Text('CALCULATE', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda_52vk2d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2106145729, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous> (Main.kt:17)');
    }
    $composer_0.i18(1219617628);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.g1a();
    var tmp;
    if (false || it === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value = mutableStateOf(SimMode_PRACTICE_getInstance());
      $composer_0.h1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k18();
    var mode$delegate = tmp0_group;
    $composer_0.i18(1219621041);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.g1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_0 = mutableStateOf(100.0);
      $composer_0.h1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.k18();
    var clubSpeed$delegate = tmp1_group;
    $composer_0.i18(1219623023);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.g1a();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_1 = mutableStateOf(0.0);
      $composer_0.h1a(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.k18();
    var attackAngle$delegate = tmp2_group;
    $composer_0.i18(1219624848);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.g1a();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_2 = mutableStateOf('Dr');
      $composer_0.h1a(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.k18();
    var clubName$delegate = tmp3_group;
    $composer_0.i18(1219627951);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.g1a();
    var tmp_7;
    if (false || it_3 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_3 = mutableStateOf(3.0);
      $composer_0.h1a(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.k18();
    var puttDistance$delegate = tmp4_group;
    $composer_0.i18(1219630031);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.g1a();
    var tmp_9;
    if (false || it_4 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_4 = mutableStateOf(0.0);
      $composer_0.h1a(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.k18();
    var slopeX$delegate = tmp5_group;
    $composer_0.i18(1219632143);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.g1a();
    var tmp_11;
    if (false || it_5 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_5 = mutableStateOf(0.0);
      $composer_0.h1a(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.k18();
    var slopeY$delegate = tmp6_group;
    $composer_0.i18(1219635167);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.g1a();
    var tmp_13;
    if (false || it_6 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_6 = mutableStateOf('Ready to simulate');
      $composer_0.h1a(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.k18();
    var message$delegate = tmp7_group;
    $composer_0.i18(1219637127);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.g1a();
    var tmp_15;
    if (false || it_7 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu;
      $composer_0.h1a(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.k18();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(955904224, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu_0(mode$delegate, clubName$delegate, clubSpeed$delegate, attackAngle$delegate, puttDistance$delegate, slopeX$delegate, slopeY$delegate, message$delegate), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.uz(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_8 = $composer_1.g1a();
    var tmp_17;
    if (invalid || it_8 === Companion_getInstance().c13_1) {
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>' call
      var value_8 = ComposableLambda$invoke$ref_25(dispatchReceiver);
      $composer_1.h1a(value_8);
      tmp_17 = value_8;
    } else {
      tmp_17 = it_8;
    }
    var tmp_18 = tmp_17;
    var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    Div(tmp8_group, tmp0, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function invoke$lambda($mode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('mode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mode$delegate.i1();
  }
  function invoke$lambda_0($mode$delegate, _set____db54di) {
    getLocalDelegateReference('mode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $mode$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_1($clubSpeed$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('clubSpeed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $clubSpeed$delegate.i1();
  }
  function invoke$lambda_2($clubSpeed$delegate, _set____db54di) {
    getLocalDelegateReference('clubSpeed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $clubSpeed$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_3($attackAngle$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('attackAngle', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $attackAngle$delegate.i1();
  }
  function invoke$lambda_4($attackAngle$delegate, _set____db54di) {
    getLocalDelegateReference('attackAngle', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $attackAngle$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_5($clubName$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('clubName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $clubName$delegate.i1();
  }
  function invoke$lambda_6($clubName$delegate, _set____db54di) {
    getLocalDelegateReference('clubName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $clubName$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_7($puttDistance$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('puttDistance', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $puttDistance$delegate.i1();
  }
  function invoke$lambda_8($puttDistance$delegate, _set____db54di) {
    getLocalDelegateReference('puttDistance', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $puttDistance$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_9($slopeX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('slopeX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $slopeX$delegate.i1();
  }
  function invoke$lambda_10($slopeX$delegate, _set____db54di) {
    getLocalDelegateReference('slopeX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $slopeX$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_11($slopeY$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('slopeY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $slopeY$delegate.i1();
  }
  function invoke$lambda_12($slopeY$delegate, _set____db54di) {
    getLocalDelegateReference('slopeY', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $slopeY$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function invoke$lambda_13($message$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('message', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $message$delegate.i1();
  }
  function invoke$lambda_14($message$delegate, _set____db54di) {
    getLocalDelegateReference('message', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $message$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu($this$Div) {
    $this$Div.k22(['container']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff($this$Div) {
    $this$Div.k22(['controls']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa($mode$delegate) {
    return function (event) {
      invoke$lambda_0($mode$delegate, valueOf(ensureNotNull(event.b2a_1)));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej($mode$delegate) {
    return function ($this$Select) {
      $this$Select.l22('mode');
      $this$Select.s27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa($mode$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_0($mode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1450146658, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:38)');
      }
      Label('mode', null, ComposableSingletons$MainKt_getInstance().b2e_1, $composer_0, 390, 2);
      $composer_0.i18(-1437082577);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej($mode$delegate);
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      Select(tmp0_group, false, ComposableSingletons$MainKt_getInstance().e2e_1, $composer_0, 390, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_0($mode$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(207082305, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous> (Main.kt:37)');
      }
      $composer_0.i18(-234461623);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva;
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1450146658, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_0($mode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.uz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.g1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.h1a(value_0);
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
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_1($this$Div) {
    $this$Div.k22(['controls']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_1($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_0($clubName$delegate) {
    return function (it) {
      invoke$lambda_6($clubName$delegate, ensureNotNull(it.b2a_1));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_0($clubName$delegate) {
    return function ($this$Select) {
      $this$Select.s27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_0($clubName$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_2($clubName$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1957429415, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:55)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().f2e_1, $composer_0, 384, 3);
      $composer_0.i18(-1437061915);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_0($clubName$delegate);
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      Select(tmp0_group, false, ComposableSingletons$MainKt_getInstance().g2e_1, $composer_0, 390, 2);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_3($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_1($clubSpeed$delegate) {
    return function (it) {
      var tmp0_safe_receiver = it.b2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      invoke$lambda_2($clubSpeed$delegate, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_1($clubSpeed$delegate) {
    return function ($this$Input) {
      $this$Input.m27(invoke$lambda_1($clubSpeed$delegate));
      $this$Input.n27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_1($clubSpeed$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_4($clubSpeed$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1070472368, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:65)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().h2e_1, $composer_0, 384, 3);
      var tmp = Number_getInstance();
      $composer_0.i18(-1437046858);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp_0;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_1($clubSpeed$delegate);
        $composer_0.h1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k18();
      Input(tmp, tmp0_group, $composer_0, 48);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_5($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_2($attackAngle$delegate) {
    return function (it) {
      var tmp0_safe_receiver = it.b2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      invoke$lambda_4($attackAngle$delegate, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_2($attackAngle$delegate) {
    return function ($this$Input) {
      $this$Input.m27(invoke$lambda_3($attackAngle$delegate));
      $this$Input.n27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_2($attackAngle$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_6($attackAngle$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-169404433, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:72)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().i2e_1, $composer_0, 384, 3);
      var tmp = Number_getInstance();
      $composer_0.i18(-1437035398);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp_0;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_2($attackAngle$delegate);
        $composer_0.h1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k18();
      Input(tmp, tmp0_group, $composer_0, 48);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_2($clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1418415558, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous> (Main.kt:54)');
      }
      $composer_0.i18(-234440599);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_1;
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1957429415, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_2($clubName$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.uz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.g1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.h1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.i18(-234426551);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.g1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_3;
        $composer_0.h1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1070472368, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_4($clubSpeed$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.uz(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.g1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_17(dispatchReceiver_0);
        $composer_2.h1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.i18(-234415159);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.g1a();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_5;
        $composer_0.h1a(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-169404433, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_6($attackAngle$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.uz(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.g1a();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_18(dispatchReceiver_1);
        $composer_3.h1a(value_4);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_3($this$Div) {
    $this$Div.k22(['controls']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_7($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_3($puttDistance$delegate) {
    return function (it) {
      var tmp0_safe_receiver = it.b2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      invoke$lambda_8($puttDistance$delegate, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_3($puttDistance$delegate) {
    return function ($this$Input) {
      $this$Input.m27(invoke$lambda_7($puttDistance$delegate));
      $this$Input.n27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_3($puttDistance$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_8($puttDistance$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-927970754, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:82)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().j2e_1, $composer_0, 384, 3);
      var tmp = Number_getInstance();
      $composer_0.i18(-1437021252);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp_0;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_3($puttDistance$delegate);
        $composer_0.h1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k18();
      Input(tmp, tmp0_group, $composer_0, 48);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_9($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_4($slopeX$delegate) {
    return function (it) {
      var tmp0_safe_receiver = it.b2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      invoke$lambda_10($slopeX$delegate, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_4($slopeX$delegate) {
    return function ($this$Input) {
      $this$Input.m27(invoke$lambda_9($slopeX$delegate));
      $this$Input.n27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_4($slopeX$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_10($slopeX$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2106539225, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:89)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().k2e_1, $composer_0, 384, 3);
      var tmp = Number_getInstance();
      $composer_0.i18(-1437009776);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp_0;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_4($slopeX$delegate);
        $composer_0.h1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k18();
      Input(tmp, tmp0_group, $composer_0, 48);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_11($this$Div) {
    $this$Div.k22(['control-group']);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_5($slopeY$delegate) {
    return function (it) {
      var tmp0_safe_receiver = it.b2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      invoke$lambda_12($slopeY$delegate, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_5($slopeY$delegate) {
    return function ($this$Input) {
      $this$Input.m27(invoke$lambda_11($slopeY$delegate));
      $this$Input.n27(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda$lambda_71qpfa_5($slopeY$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_12($slopeY$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(853054342, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:96)');
      }
      Label(null, null, ComposableSingletons$MainKt_getInstance().l2e_1, $composer_0, 384, 3);
      var tmp = Number_getInstance();
      $composer_0.i18(-1436998672);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp_0;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_5($slopeY$delegate);
        $composer_0.h1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k18();
      Input(tmp, tmp0_group, $composer_0, 48);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_4($puttDistance$delegate, $slopeX$delegate, $slopeY$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2146325277, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous> (Main.kt:81)');
      }
      $composer_0.i18(-234400823);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_7;
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-927970754, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_8($puttDistance$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.uz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.g1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.h1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.i18(-234389367);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.g1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_9;
        $composer_0.h1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-2106539225, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_10($slopeX$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.uz(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.g1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
        $composer_2.h1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.i18(-234378263);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.g1a();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_11;
        $composer_0.h1a(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(853054342, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_12($slopeY$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.uz(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.g1a();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_22(dispatchReceiver_1);
        $composer_3.h1a(value_4);
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
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_6($message$delegate) {
    return function (msg, points) {
      invoke$lambda_14($message$delegate, msg);
      drawTrajectory(points);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_7($message$delegate) {
    return function (msg, points) {
      invoke$lambda_14($message$delegate, msg);
      drawPutt(points);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_13($mode$delegate, $clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate, $message$delegate, $puttDistance$delegate, $slopeX$delegate, $slopeY$delegate) {
    return function (it) {
      var tmp;
      if (invoke$lambda($mode$delegate).equals(SimMode_PRACTICE_getInstance())) {
        var tmp_0 = invoke$lambda_5($clubName$delegate);
        var tmp_1 = invoke$lambda_1($clubSpeed$delegate);
        var tmp_2 = invoke$lambda_3($attackAngle$delegate);
        simulatePractice(tmp_0, tmp_1, tmp_2, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_6($message$delegate));
        tmp = Unit_instance;
      } else {
        var tmp_3 = invoke$lambda_7($puttDistance$delegate);
        var tmp_4 = invoke$lambda_9($slopeX$delegate);
        var tmp_5 = invoke$lambda_11($slopeY$delegate);
        simulatePutting(tmp_3, tmp_4, tmp_5, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda$lambda_osgeej_7($message$delegate));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_5($mode$delegate, $clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate, $message$delegate, $puttDistance$delegate, $slopeX$delegate, $slopeY$delegate) {
    return function ($this$Button) {
      $this$Button.o22(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_13($mode$delegate, $clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate, $message$delegate, $puttDistance$delegate, $slopeX$delegate, $slopeY$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_6($this$Div) {
    $this$Div.i22(ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_14);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda$lambda_nsijva_14($this$style) {
    marginTop($this$style, get_px(20));
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_7($message$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1815085418, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous> (Main.kt:124)');
      }
      Text(invoke$lambda_13($message$delegate), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_8($this$Canvas) {
    $this$Canvas.l22('simCanvas');
    $this$Canvas.f22('width', '800');
    $this$Canvas.f22('height', '400');
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu_0($mode$delegate, $clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate, $puttDistance$delegate, $slopeX$delegate, $slopeY$delegate, $message$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(955904224, $changed, -1, 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous> (Main.kt:33)');
      }
      H1(null, ComposableSingletons$MainKt_getInstance().a2e_1, $composer_0, 48, 1);
      $composer_0.i18(-1716096155);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.g1a();
      var tmp;
      if (false || it === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff;
        $composer_0.h1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(207082305, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_0($mode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.uz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.g1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.h1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (invoke$lambda($mode$delegate).equals(SimMode_PRACTICE_getInstance())) {
        $composer_0.i18(-1658709665);
        $composer_0.i18(-1716075259);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.g1a();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().c13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_1;
          $composer_0.h1a(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.k18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(1418415558, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_2($clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.uz(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.g1a();
        var tmp_5;
        if (invalid_0 || it_2 === Companion_getInstance().c13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_19(dispatchReceiver_0);
          $composer_2.h1a(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
        $composer_0.k18();
      } else {
        $composer_0.i18(-1657479864);
        $composer_0.i18(-1716035483);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.g1a();
        var tmp_7;
        if (false || it_3 === Companion_getInstance().c13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_3;
          $composer_0.h1a(value_3);
          tmp_7 = value_3;
        } else {
          tmp_7 = it_3;
        }
        var tmp_8 = tmp_7;
        var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.k18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(2146325277, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_4($puttDistance$delegate, $slopeX$delegate, $slopeY$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.uz(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_3.g1a();
        var tmp_9;
        if (invalid_1 || it_4 === Companion_getInstance().c13_1) {
          // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = ComposableLambda$invoke$ref_23(dispatchReceiver_1);
          $composer_3.h1a(value_4);
          tmp_9 = value_4;
        } else {
          tmp_9 = it_4;
        }
        var tmp_10 = tmp_9;
        var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
        $composer_0.k18();
      }
      $composer_0.i18(-1715998483);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.g1a();
      var tmp_11;
      if (false || it_5 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_5($mode$delegate, $clubName$delegate, $clubSpeed$delegate, $attackAngle$delegate, $message$delegate, $puttDistance$delegate, $slopeX$delegate, $slopeY$delegate);
        $composer_0.h1a(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp3_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.k18();
      Button(tmp3_group, ComposableSingletons$MainKt_getInstance().m2e_1, $composer_0, 54, 0);
      $composer_0.i18(-1715978036);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.g1a();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_6;
        $composer_0.h1a(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp4_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.k18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_2 = rememberComposableLambda(1815085418, true, ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_7($message$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_4.uz(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_4.g1a();
      var tmp_15;
      if (invalid_2 || it_7 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_7 = ComposableLambda$invoke$ref_24(dispatchReceiver_2);
        $composer_4.h1a(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp0_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      Div(tmp4_group, tmp0_2, $composer_0, 54, 0);
      $composer_0.i18(-1715974808);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_0.g1a();
      var tmp_17;
      if (false || it_8 === Companion_getInstance().c13_1) {
        // Inline function 'com.example.golf_by_nm.core.ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_8 = ComposableSingletons$MainKt$lambda_14$lambda$lambda$lambda_tt96ff_8;
        $composer_0.h1a(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp5_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.k18();
      Canvas(tmp5_group, null, $composer_0, 6, 2);
      var tmp_19;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_19 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.a2e_1 = ComposableLambda$invoke$ref(composableLambdaInstance(178812003, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.b2e_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1465186303, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.c2e_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(490708987, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.d2e_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(591960882, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.e2e_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-881233743, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.f2e_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(83071622, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.g2e_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1004871882, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
    var tmp_6 = this;
    tmp_6.h2e_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1557952879, false, ComposableSingletons$MainKt$lambda_8$lambda_h1qhie));
    var tmp_7 = this;
    tmp_7.i2e_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1835946482, false, ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej));
    var tmp_8 = this;
    tmp_8.j2e_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(857786333, false, ComposableSingletons$MainKt$lambda_10$lambda_vulrrt));
    var tmp_9 = this;
    tmp_9.k2e_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(314070278, false, ComposableSingletons$MainKt$lambda_11$lambda_acvt54));
    var tmp_10 = this;
    tmp_10.l2e_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1021303451, false, ComposableSingletons$MainKt$lambda_12$lambda_igqnx3));
    var tmp_11 = this;
    tmp_11.m2e_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1948308070, false, ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu));
    var tmp_12 = this;
    tmp_12.n2e_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-2106145729, false, ComposableSingletons$MainKt$lambda_14$lambda_52vk2d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function SimMode_PRACTICE_getInstance() {
    SimMode_initEntries();
    return SimMode_PRACTICE_instance;
  }
  function SimMode_PUTTING_getInstance() {
    SimMode_initEntries();
    return SimMode_PUTTING_instance;
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
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Golf_by_NM-golf-core.js.map
