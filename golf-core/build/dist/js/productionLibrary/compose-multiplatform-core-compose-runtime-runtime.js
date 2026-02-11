(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.n5;
  var initMetadataForInterface = kotlin_kotlin.$_$.z4;
  var Unit_instance = kotlin_kotlin.$_$.v1;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.q6;
  var Companion_instance = kotlin_kotlin.$_$.u1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n1;
  var createFailure = kotlin_kotlin.$_$.w6;
  var intercepted = kotlin_kotlin.$_$.r3;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.a4;
  var fold = kotlin_kotlin.$_$.z3;
  var minusKey = kotlin_kotlin.$_$.b4;
  var plus = kotlin_kotlin.$_$.d4;
  var toString = kotlin_kotlin.$_$.p5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.f5;
  var equals = kotlin_kotlin.$_$.o4;
  var hashCode = kotlin_kotlin.$_$.v4;
  var rotateLeft = kotlin_kotlin.$_$.b7;
  var Enum = kotlin_kotlin.$_$.j6;
  var rotateRight = kotlin_kotlin.$_$.c7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var fill = kotlin_kotlin.$_$.q2;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.p2;
  var Long = kotlin_kotlin.$_$.n6;
  var sortWith = kotlin_kotlin.$_$.l3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.f7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.x4;
  var IllegalStateException = kotlin_kotlin.$_$.m6;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.j4;
  var defineProp = kotlin_kotlin.$_$.n4;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.y6;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.d3;
  var KtMutableList = kotlin_kotlin.$_$.d2;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.m4;
  var FunctionAdapter = kotlin_kotlin.$_$.h4;
  var Comparator = kotlin_kotlin.$_$.i6;
  var KProperty1 = kotlin_kotlin.$_$.y5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t4;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.d5;
  var KtSet = kotlin_kotlin.$_$.e2;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.c2;
  var Exception = kotlin_kotlin.$_$.l6;
  var plus_0 = kotlin_kotlin.$_$.f3;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var fillArrayVal = kotlin_kotlin.$_$.p4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toString_0 = kotlin_kotlin.$_$.e7;
  var Element = kotlin_kotlin.$_$.c4;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.s2;
  var CoroutineImpl = kotlin_kotlin.$_$.e4;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p3;
  var initMetadataForLambda = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.g2;
  var toList = kotlin_kotlin.$_$.n3;
  var flatten = kotlin_kotlin.$_$.u2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var CancellationException = kotlin_kotlin.$_$.o3;
  var addSuppressed = kotlin_kotlin.$_$.t6;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.y4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.j3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var arrayCopy = kotlin_kotlin.$_$.h2;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.i4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.t2;
  var last = kotlin_kotlin.$_$.x2;
  var copyOf = kotlin_kotlin.$_$.n2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus_1 = kotlin_kotlin.$_$.h3;
  var coerceAtMost = kotlin_kotlin.$_$.s5;
  var coerceAtLeast = kotlin_kotlin.$_$.r5;
  var copyOf_0 = kotlin_kotlin.$_$.m2;
  var ensureNotNull = kotlin_kotlin.$_$.x6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var SequenceScope = kotlin_kotlin.$_$.z5;
  var numberRangeToNumber = kotlin_kotlin.$_$.i5;
  var until = kotlin_kotlin.$_$.w5;
  var iterator = kotlin_kotlin.$_$.a6;
  var Collection = kotlin_kotlin.$_$.a2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.e3;
  var AbstractMap = kotlin_kotlin.$_$.x1;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var Entry = kotlin_kotlin.$_$.b2;
  var AbstractSet = kotlin_kotlin.$_$.y1;
  var AbstractCollection = kotlin_kotlin.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.m5;
  var step = kotlin_kotlin.$_$.v5;
  var countOneBits = kotlin_kotlin.$_$.u6;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var toString_1 = kotlin_kotlin.$_$.f6;
  var longArray = kotlin_kotlin.$_$.h5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var Char = kotlin_kotlin.$_$.h6;
  var isCharSequence = kotlin_kotlin.$_$.e5;
  var minus = kotlin_kotlin.$_$.c3;
  var contains = kotlin_kotlin.$_$.l2;
  var plus_2 = kotlin_kotlin.$_$.g3;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.k3;
  var intArrayIterator = kotlin_kotlin.$_$.c5;
  var toIntArray = kotlin_kotlin.$_$.m3;
  var sequence = kotlin_kotlin.$_$.b6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.v6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.k2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var println = kotlin_kotlin.$_$.g4;
  var printStackTrace = kotlin_kotlin.$_$.a7;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.g6;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.l19(value);
  }
  function changed_0(value) {
    return this.m19(value);
  }
  function changed_1(value) {
    return this.n19(value);
  }
  function changedInstance(value) {
    return this.b10(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder');
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector');
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, Collection, KtSet]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_12);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForCoroutine($withFrameNanosCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.gw_1 = applier;
    this.hw_1 = offset;
    this.iw_1 = 0;
  }
  protoOf(OffsetApplier).xv = function () {
    return this.gw_1.xv();
  };
  protoOf(OffsetApplier).aw = function (node) {
    this.iw_1 = this.iw_1 + 1 | 0;
    this.gw_1.aw(node);
  };
  protoOf(OffsetApplier).bw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.iw_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.iw_1 = this.iw_1 - 1 | 0;
    this.gw_1.bw();
  };
  protoOf(OffsetApplier).cw = function (index, instance) {
    this.gw_1.cw(index + (this.iw_1 === 0 ? this.hw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).dw = function (index, instance) {
    this.gw_1.dw(index + (this.iw_1 === 0 ? this.hw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).ew = function (index, count) {
    this.gw_1.ew(index + (this.iw_1 === 0 ? this.hw_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).fw = function (from, to, count) {
    var effectiveOffset = this.iw_1 === 0 ? this.hw_1 : 0;
    this.gw_1.fw(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.jw_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.kw_1 = ArrayList_init_$Create$();
    this.lw_1 = this.jw_1;
  }
  protoOf(AbstractApplier).mw = function (_set____db54di) {
    this.lw_1 = _set____db54di;
  };
  protoOf(AbstractApplier).xv = function () {
    return this.lw_1;
  };
  protoOf(AbstractApplier).nw = function (node) {
    this.kw_1.d(this.xv());
    this.mw(node);
  };
  protoOf(AbstractApplier).aw = function (node) {
    return this.nw((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).bw = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.kw_1.p()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.mw(this.kw_1.f1(this.kw_1.i() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.ow_1 = onFrame;
    this.pw_1 = continuation;
  }
  protoOf(FrameAwaiter).qw = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.ow_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.pw_1.h8(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.sw_1;
    if (!($this.tw_1 == null))
      return Unit_instance;
    $this.tw_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.uw_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.pw_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.h8(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.uw_1.c1();
    $this.ww_1.yw(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.sw_1;
      this$0.uw_1.b1($awaiter);
      if (this$0.uw_1.p()) {
        this$0.ww_1.yw(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.rw_1 = onNewAwaiters;
    this.sw_1 = new Object();
    this.tw_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.uw_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.vw_1 = ArrayList_init_$Create$();
    this.ww_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).zw = function () {
    return !(this.ww_1.gj() === 0);
  };
  protoOf(BroadcastFrameClock).ax = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.sw_1;
    var toResume = this.uw_1;
    this.uw_1 = this.vw_1;
    this.vw_1 = toResume;
    this.ww_1.yw(0);
    var inductionVariable = 0;
    var last = toResume.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.o(i).qw(timeNanos);
      }
       while (inductionVariable < last);
    toResume.c1();
  };
  protoOf(BroadcastFrameClock).bx = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.uh();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.sw_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.tw_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.h8(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.uw_1.p();
      this.uw_1.d(awaiter);
      if (!hadAwaiters) {
        this.ww_1.yw(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.ng(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.rw_1 == null)) {
        try {
          this.rw_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.zf();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.fx_1 = scope;
    this.gx_1 = location;
    this.hx_1 = instances;
  }
  protoOf(Invalidation).ix = function () {
    return this.fx_1.rx(this.hx_1);
  };
  function startRoot($this) {
    $this.dy_1 = 0;
    $this.zy_1 = $this.ux_1.vz();
    startGroup($this, 100);
    $this.tx_1.wz();
    $this.my_1 = $this.tx_1.xz();
    $this.py_1.a10(asInt($this.oy_1));
    $this.oy_1 = $this.b10($this.my_1);
    $this.dz_1 = null;
    if (!$this.hy_1) {
      $this.hy_1 = $this.tx_1.c10();
    }
    if (!$this.uy_1) {
      $this.uy_1 = $this.tx_1.d10();
    }
    var tmp0_safe_receiver = read($this.my_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.d($this.ux_1);
      $this.tx_1.e10(tmp0_safe_receiver);
    }
    startGroup($this, $this.tx_1.f10());
  }
  function endRoot($this) {
    endGroup($this);
    $this.tx_1.g10();
    endGroup($this);
    $this.fz_1.t10();
    finalizeCompose($this);
    $this.zy_1.j11();
    $this.iy_1 = false;
    $this.oy_1 = asBool($this.py_1.k11());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.zx_1.c1();
    $this.ey_1.c1();
    $this.ly_1.c1();
    $this.py_1.c1();
    $this.ny_1 = null;
    $this.hz_1.c1();
    $this.jz_1 = 0;
    $this.sy_1 = 0;
    $this.jy_1 = false;
    $this.iz_1 = false;
    $this.qy_1 = false;
    $this.xy_1 = false;
    $this.iy_1 = false;
    $this.ry_1 = -1;
    if (!$this.zy_1.a11_1) {
      $this.zy_1.j11();
    }
    if (!$this.bz_1.k12_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().m12_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().m12_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.cy_1 = $this.cy_1 + $this.zy_1.p12() | 0;
  }
  function updateSlot($this, value) {
    $this.q12();
    $this.r12(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.iz_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.bz_1)) {
        var group = $this.bz_1.h12_1 - 1 | 0;
        var parent = $this.bz_1.s12(group);
        while (!(parent === $this.bz_1.j12_1) && parent >= 0) {
          group = parent;
          parent = $this.bz_1.s12(group);
        }
        tmp_0 = $this.bz_1.t12(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.zy_1)) {
        var group_0 = $this.zy_1.b11_1 - 1 | 0;
        var parent_0 = $this.zy_1.s12(group_0);
        while (!(parent_0 === $this.zy_1.d11_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.zy_1.s12(group_0);
        }
        tmp_1 = $this.zy_1.t12(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.dz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.zy_1.d11_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.iz_1 && $this.cz_1) {
      var current = $this.bz_1.j12_1;
      while (current > 0) {
        if ($this.bz_1.v12(current) === 202 && equals($this.bz_1.w12(current), get_compositionLocalMap())) {
          var tmp = $this.bz_1.u12(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.dz_1 = providers;
          return providers;
        }
        current = $this.bz_1.s12(current);
      }
    }
    if ($this.zy_1.i() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.zy_1.v12(current_0) === 202 && equals($this.zy_1.w12(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.ny_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.zy_1.u12(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.dz_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.zy_1.s12(current_0);
      }
    }
    $this.dz_1 = $this.my_1;
    return $this.my_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.ny_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.ny_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.y12($this.zy_1.b11_1, providers);
  }
  function ensureWriter($this) {
    if ($this.bz_1.k12_1) {
      $this.bz_1 = $this.az_1.z12();
      $this.bz_1.a13();
      $this.cz_1 = false;
      $this.dz_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.bz_1.k12_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.uy_1) {
      this_0.b13();
    }
    if ($this.tx_1.d13()) {
      this_0.c13();
    }
    tmp.az_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.az_1.z12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.e13(true);
    tmp_0.bz_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.zy_1.i13();
    } else {
      if (!(data == null) && !($this.zy_1.g13() === data)) {
        $this.fz_1.f13(data);
      }
      $this.zy_1.h13();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.dy_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().j13_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.jz_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.jz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.jz_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.jz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.q1_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.jz_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.jz_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.jz_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.jz_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.dy_1 = $this.dy_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().m12_1));
    if ($this.iz_1) {
      $this.zy_1.k13();
      var startIndex = $this.bz_1.h12_1;
      if (isNode) {
        $this.bz_1.n13(key, Companion_getInstance().j13_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.bz_1;
        tmp_3.m13(key, objectKey == null ? Companion_getInstance().j13_1 : objectKey, data);
      } else {
        var tmp_4 = $this.bz_1;
        tmp_4.l13(key, objectKey == null ? Companion_getInstance().j13_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.ay_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.u13(insertKeyInfo, $this.by_1 - tmp4_safe_receiver.p13_1 | 0);
        tmp4_safe_receiver.v13(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().n12_1))) {
      tmp_5 = $this.qy_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.ay_1 == null) {
      var slotKey = $this.zy_1.w13();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.zy_1.y13())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.ay_1 = new Pending($this.zy_1.x13(), $this.by_1);
      }
    }
    var pending = $this.ay_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.z13(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.v13(keyInfo);
        var location = keyInfo.d14_1;
        $this.by_1 = pending.g14(keyInfo) + pending.p13_1 | 0;
        var relativePosition = pending.h14(keyInfo);
        var currentRelativePosition = relativePosition - pending.q13_1 | 0;
        pending.i14(relativePosition, pending.q13_1);
        $this.fz_1.j14(location);
        $this.zy_1.k14(location);
        if (currentRelativePosition > 0) {
          $this.fz_1.l14(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.zy_1.k13();
        $this.iz_1 = true;
        $this.dz_1 = null;
        ensureWriter($this);
        $this.bz_1.a14();
        var startIndex_0 = $this.bz_1.h12_1;
        if (isNode) {
          $this.bz_1.n13(key, Companion_getInstance().j13_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.bz_1;
          tmp_6.m13(key, objectKey == null ? Companion_getInstance().j13_1 : objectKey, data);
        } else {
          var tmp_7 = $this.bz_1;
          tmp_7.l13(key, objectKey == null ? Companion_getInstance().j13_1 : objectKey);
        }
        $this.gz_1 = $this.bz_1.t12(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.u13(insertKeyInfo_0, $this.by_1 - pending.p13_1 | 0);
        pending.v13(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.by_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.zx_1.m14($this.ay_1);
    $this.ay_1 = newPending;
    $this.ey_1.a10($this.cy_1);
    $this.ey_1.a10($this.dy_1);
    $this.ey_1.a10($this.by_1);
    if (isNode)
      $this.by_1 = 0;
    $this.cy_1 = 0;
    $this.dy_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.zx_1.k11();
    if (!(previousPending == null) && !inserting) {
      previousPending.q13_1 = previousPending.q13_1 + 1 | 0;
    }
    $this.ay_1 = previousPending;
    $this.by_1 = $this.ey_1.k11() + expectedNodeCount | 0;
    $this.dy_1 = $this.ey_1.k11();
    $this.cy_1 = $this.ey_1.k11() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.ey_1.n14() - 1 | 0;
    if ($this.iz_1) {
      var parent = $this.bz_1.j12_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey = $this.bz_1.v12(parent);
      var dataKey = $this.bz_1.w12(parent);
      var data = $this.bz_1.u12(parent);
      if (dataKey == null)
        if (!(data == null) && groupKey === 207 && !equals(data, Companion_getInstance().j13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.jz_1 ^ rGroupIndex;
          var this_1 = rotateRight(this_0, 3) ^ groupKey_0;
          tmp.jz_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.jz_1 ^ rGroupIndex;
          var this_3 = rotateRight(this_2, 3) ^ groupKey;
          tmp_0.jz_1 = rotateRight(this_3, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = dataKey.q1_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.jz_1 ^ 0;
          var this_5 = rotateRight(this_4, 3) ^ groupKey_1;
          tmp_1.jz_1 = rotateRight(this_5, 3);
        } else {
          var groupKey_2 = hashCode(dataKey);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.jz_1 ^ 0;
          var this_7 = rotateRight(this_6, 3) ^ groupKey_2;
          tmp_2.jz_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.zy_1.d11_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey_3 = $this.zy_1.v12(parent_0);
      var dataKey_0 = $this.zy_1.w12(parent_0);
      var data_0 = $this.zy_1.u12(parent_0);
      if (dataKey_0 == null)
        if (!(data_0 == null) && groupKey_3 === 207 && !equals(data_0, Companion_getInstance().j13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.jz_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey_4;
          tmp_3.jz_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.jz_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ groupKey_3;
          tmp_4.jz_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey_0 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_5 = dataKey_0.q1_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.jz_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_5;
          tmp_5.jz_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_6 = hashCode(dataKey_0);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.jz_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_6;
          tmp_6.jz_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.cy_1;
    var pending = $this.ay_1;
    if (!(pending == null) && pending.o13_1.i() > 0) {
      var previous = pending.o13_1;
      var current = pending.o14();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.i();
      var previousIndex = 0;
      var previousEnd = previous.i();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.o(previousIndex);
        if (!usedKeys.n(previousInfo)) {
          var deleteOffset = pending.g14(previousInfo);
          $this.fz_1.p14(deleteOffset + pending.p13_1 | 0, previousInfo.e14_1);
          pending.q14(previousInfo.d14_1, 0);
          $this.fz_1.j14(previousInfo.d14_1);
          $this.zy_1.k14(previousInfo.d14_1);
          recordDelete($this);
          $this.zy_1.p12();
          removeRange($this.ky_1, previousInfo.d14_1, previousInfo.d14_1 + $this.zy_1.r14(previousInfo.d14_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.n(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.o(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.g14(currentInfo);
            placedKeys.d(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.s14(currentInfo);
              $this.fz_1.t14(nodePosition + pending.p13_1 | 0, nodeOffset + pending.p13_1 | 0, updatedCount);
              pending.u14(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.s14(currentInfo) | 0;
        }
      }
      $this.fz_1.v14();
      if (previous.i() > 0) {
        $this.fz_1.j14($this.zy_1.w14());
        $this.zy_1.a13();
      }
    }
    var removeIndex = $this.by_1;
    while (!$this.zy_1.x14()) {
      var startSlot = $this.zy_1.b11_1;
      recordDelete($this);
      var nodesToRemove = $this.zy_1.p12();
      $this.fz_1.p14(removeIndex, nodesToRemove);
      removeRange($this.ky_1, startSlot, $this.zy_1.b11_1);
    }
    var inserting = $this.iz_1;
    if (inserting) {
      if (isNode) {
        $this.hz_1.d15();
        expectedNodeCount = 1;
      }
      $this.zy_1.e15();
      var parentGroup = $this.bz_1.j12_1;
      $this.bz_1.f15();
      if (!$this.zy_1.i15()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.bz_1.g15();
        $this.bz_1.e13(true);
        recordInsert($this, $this.gz_1);
        $this.iz_1 = false;
        if (!$this.ux_1.h15()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.fz_1.y14();
      }
      var remainingSlots = $this.zy_1.z14();
      if (remainingSlots > 0) {
        $this.fz_1.a15(remainingSlots);
      }
      $this.fz_1.b15();
      var parentGroup_0 = $this.zy_1.d11_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.zy_1.c15();
      $this.fz_1.v14();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.xy_1;
    $this.xy_1 = true;
    var recomposed = false;
    var parent = $this.zy_1.d11_1;
    var end = parent + $this.zy_1.r14(parent) | 0;
    var recomposeIndex = $this.by_1;
    var recomposeCompoundKey = $this.jz_1;
    var oldGroupNodeCount = $this.cy_1;
    var oldRGroupIndex = $this.dy_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.ky_1, $this.zy_1.b11_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.gx_1;
      removeLocation($this.ky_1, location);
      if (firstInRange_0.ix()) {
        recomposed = true;
        $this.zy_1.k14(location);
        var newGroup = $this.zy_1.b11_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.by_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.dy_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.zy_1.s12(newGroup);
        $this.jz_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.dz_1 = null;
        firstInRange_0.fx_1.k15($this);
        $this.dz_1 = null;
        $this.zy_1.l15(parent);
      } else {
        $this.wy_1.m14(firstInRange_0.fx_1);
        firstInRange_0.fx_1.j15();
        $this.wy_1.k11();
      }
      firstInRange_0 = firstInRange($this.ky_1, $this.zy_1.b11_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.zy_1.a13();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.by_1 = recomposeIndex + parentGroupNodes | 0;
      $this.cy_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.dy_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.jz_1 = recomposeCompoundKey;
    $this.xy_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.zx_1.i() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.zx_1.m15(pendingIndex);
            if (!(pending == null) && pending.q14(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.zy_1.d11_1;
        } else {
          if ($this.zy_1.n15(current))
            break $l$loop_0;
          current = $this.zy_1.s12(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.zy_1.s12(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.zy_1.n15(anchorGroup)) {
      anchorGroup = $this.zy_1.s12(anchorGroup);
    }
    var index = $this.zy_1.n15(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.zy_1.o15(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.zy_1.r14(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.zy_1.n15(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.zy_1.s12(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.zy_1.p15(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.zy_1.r14(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.gy_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.iq(group) ? tmp0_safe_receiver.o(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.fy_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.zy_1.o15(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.gy_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.gy_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.hq(group, count);
      } else {
        var tmp1_elvis_lhs = $this.fy_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.zy_1.i());
          fill(newCounts_0, -1);
          $this.fy_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.fy_1 = null;
    $this.gy_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.zy_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.n15(current)) {
        $this.fz_1.y14();
      }
      current = reader.s12(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.zy_1.s12(group), nearestCommonRoot);
      if ($this.zy_1.n15(group)) {
        $this.fz_1.q15(nodeAt($this.zy_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.zy_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.zy_1.s12(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.zy_1.p15(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.p15(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.w12(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.q1_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.v12(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.u12(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().j13_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.cy_1 = $this.zy_1.r15();
    $this.zy_1.a13();
  }
  function addRecomposeScope($this) {
    if ($this.iz_1) {
      var tmp = $this.yx_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.wy_1.m14(scope);
      $this.r12(scope);
      scope.v15($this.ty_1);
    } else {
      var invalidation = removeLocation($this.ky_1, $this.zy_1.d11_1);
      var slot = $this.zy_1.h();
      var tmp_0;
      if (equals(slot, Companion_getInstance().j13_1)) {
        var tmp_1 = $this.yx_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.r12(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.s15();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.t15(false);
        }
        tmp_2 = this_0;
      }
      scope_0.u15(tmp_2);
      $this.wy_1.m14(scope_0);
      scope_0.v15($this.ty_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.w15(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.jz_1;
    try {
      $this.jz_1 = 126665345;
      if ($this.iz_1) {
        $this.bz_1.x15();
      }
      var providersChanged = $this.iz_1 ? false : !equals($this.zy_1.g13(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().m12_1, locals);
      $this.dz_1 = null;
      if ($this.iz_1 && !force) {
        $this.cz_1 = true;
        var anchor = $this.bz_1.t12($this.bz_1.s12($this.bz_1.j12_1));
        var reference = new MovableContentStateReference(content, parameter, $this.yx_1, $this.az_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.tx_1.y15(reference);
      } else {
        var savedProvidersInvalid = $this.oy_1;
        $this.oy_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.oy_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.dz_1 = null;
      $this.jz_1 = savedCompoundKeyHash;
      $this.z15();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.fz_1;
    var newChangeList = $this.xx_1;
    var previousChangeList = this_0.i10_1;
    try {
      this_0.i10_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.fz_1.a16();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.sb();
          var from = item.tb();
          var anchor = to.f16_1;
          var location = to.e16_1.i16(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.fz_1.j16(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.e16_1;
            if (equals(toSlotTable, $this.az_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.e16_1.vz();
            var tmp;
            try {
              reader.k14(location);
              $this.fz_1.o16(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.fz_1.p16(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.j11();
            }
          } else {
            var resolvedState = $this.tx_1.k16(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.l16_1;
            var fromTable = tmp1_elvis_lhs == null ? from.e16_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.l16_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.t12(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.f16_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.p()) {
              $this.fz_1.m16(nodesToInsert, effectiveNodeIndex);
              if (equals(to.e16_1, $this.ux_1)) {
                var group = $this.ux_1.i16(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.i() | 0);
              }
            }
            $this.fz_1.n16(resolvedState, $this.tx_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.vz();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.zy_1;
                var savedCountOverrides = $this.fy_1;
                var savedProviderUpdates = $this.ny_1;
                $this.fy_1 = null;
                $this.ny_1 = null;
                try {
                  $this.zy_1 = reader_0;
                  var newLocation = fromTable.i16(fromAnchor);
                  reader_0.k14(newLocation);
                  $this.fz_1.o16(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.fz_1;
                  var previousChangeList_0 = this_1.i10_1;
                  try {
                    this_1.i10_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.fz_1;
                    var previousImplicitRootStart = this_2.l10_1;
                    try {
                      this_2.l10_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.b11_1;
                      var tmp_2 = from.g16_1;
                      recomposeMovableContent($this, from.d16_1, to.d16_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.l10_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.i10_1 = previousChangeList_0;
                  }
                  $this.fz_1.p16(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.zy_1 = savedReader;
                  $this.fy_1 = savedCountOverrides;
                  $this.ny_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.j11();
            }
          }
          $this.fz_1.q16();
        }
         while (inductionVariable <= last);
      $this.fz_1.r16();
      $this.fz_1.o16(0);
    }finally {
      this_0.i10_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.xy_1;
    var savedNodeIndex = $this.by_1;
    try {
      $this.xy_1 = true;
      $this.by_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.o(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.sb();
          var instances = item.tb();
          if (!(instances == null)) {
            $this.s16(scope, instances);
          } else {
            $this.s16(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.t16(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.xy_1 = savedIsComposing;
      $this.by_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.xy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.u16(sectionName);
      try {
        $this.ty_1 = currentSnapshot().z16();
        $this.ny_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.a17_1;
        var k = this_0.os_1;
        var v = this_0.ps_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.ns_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        var tmp = k[index];
                        var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                        var tmp_0 = v[index];
                        var instances = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        if (!(scope instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = scope.lx_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b17_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        // Inline function 'kotlin.contracts.contract' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(instances === ScopeInvalidated_instance)) {
                          tmp_2 = instances;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.ky_1.d(new Invalidation(scope, location, tmp$ret$5));
                      }
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.ky_1, get_InvalidationLocationAscending());
        $this.by_1 = 0;
        var complete = false;
        $this.xy_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.q12();
          if (!(savedContent === content) && !(content == null)) {
            $this.r12((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.vy_1;
          var observers = derivedStateObservers_0();
          try {
            observers.f17(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.iy_1 || $this.oy_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().j13_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.g17();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.e17_1 - 1 | 0;
            observers.f1(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.xy_1 = false;
          $this.ky_1.c1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.h17(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.i17(_this__u8e3s4.d11_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.i17(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.jy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.jy_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.jy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.hz_1.p()) {
      $this.fz_1.k17(anchor, $this.az_1);
    } else {
      $this.fz_1.j17(anchor, $this.az_1, $this.hz_1);
      $this.hz_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.zy_1.b11_1);
    $this.fz_1.l17();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.fz_1.v14();
  }
  function reportAllMovableContent($this) {
    if ($this.ux_1.n17()) {
      var changes = new ChangeList();
      $this.ez_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.ux_1.vz();
      var tmp;
      try {
        $this.zy_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.fz_1;
        var previousChangeList = this_0.i10_1;
        try {
          this_0.i10_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.fz_1.m17();
        }finally {
          this_0.i10_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.j11();
      }
    }
  }
  function finalizeCompose($this) {
    $this.fz_1.o17();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.zx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.ay_1 = null;
    $this.by_1 = 0;
    $this.cy_1 = 0;
    $this.jz_1 = 0;
    $this.jy_1 = false;
    $this.fz_1.p17();
    $this.wy_1.c1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.zy_1;
    var tmp;
    if (reader.g18(group)) {
      var key = reader.v12(group);
      var objectKey = reader.w12(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.r17(group, 0);
        var anchor = reader.t12(group);
        var end = group + reader.r14(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.ky_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.i());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.fx_1, item.hx_1);
            target.d(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.yx_1, this$0.ux_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.tx_1.c18(reference);
        this$0.fz_1.d18();
        this$0.fz_1.e18(this$0.yx_1, this$0.tx_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.fz_1.f18(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.o15(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.r17(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.s17_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.y17_1.f();
            while (tmp0_iterator.g()) {
              var element_0 = tmp0_iterator.h();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.tx_1.b18(element_0.yx_1);
            }
          }
          tmp_0 = reader.o15(group);
        } else {
          if (reader.n15(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.o15(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.q17(group)) {
      var size = reader.r14(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.n15(current);
        if (isNode) {
          this$0.fz_1.v14();
          this$0.fz_1.q15(reader.i17(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.fz_1.v14();
          this$0.fz_1.y14();
        }
        current = current + reader.r14(current) | 0;
      }
      tmp = reader.n15(group) ? 1 : runningNodeCount;
    } else if (reader.n15(group)) {
      tmp = 1;
    } else {
      tmp = reader.o15(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.h18_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i18(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.k18()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.j18_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.fz_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.i10_1;
      var tmp;
      try {
        this_0.i10_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.zy_1;
          var savedCountOverrides = this_1.fy_1;
          var savedProviderUpdates = this_1.ny_1;
          this_1.fy_1 = null;
          this_1.ny_1 = null;
          try {
            this_1.zy_1 = reader;
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_2 = this$0.fz_1;
            var previousImplicitRootStart = this_2.l10_1;
            try {
              this_2.l10_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.b16_1, $to.h16_1, $to.c16_1, true);
            }finally {
              this_2.l10_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.zy_1 = savedReader;
            this_1.fy_1 = savedCountOverrides;
            this_1.ny_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        this_0.i10_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.b16_1, $to.h16_1, $to.c16_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.sx_1 = applier;
    this.tx_1 = parentContext;
    this.ux_1 = slotTable;
    this.vx_1 = abandonSet;
    this.wx_1 = changes;
    this.xx_1 = lateChanges;
    this.yx_1 = composition;
    this.zx_1 = new Stack();
    this.ay_1 = null;
    this.by_1 = 0;
    this.cy_1 = 0;
    this.dy_1 = 0;
    this.ey_1 = new IntStack();
    this.fy_1 = null;
    this.gy_1 = null;
    this.hy_1 = false;
    this.iy_1 = false;
    this.jy_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ky_1 = ArrayList_init_$Create$();
    this.ly_1 = new IntStack();
    this.my_1 = persistentCompositionLocalHashMapOf();
    this.ny_1 = null;
    this.oy_1 = false;
    this.py_1 = new IntStack();
    this.qy_1 = false;
    this.ry_1 = -1;
    this.sy_1 = 0;
    this.ty_1 = 0;
    this.uy_1 = this.tx_1.d10() || this.tx_1.d13();
    var tmp_0 = this;
    tmp_0.vy_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.wy_1 = new Stack();
    this.xy_1 = false;
    this.yy_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.ux_1.vz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.j11();
    tmp_1.zy_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.tx_1.d10()) {
      this_1.b13();
    }
    if (this.tx_1.d13()) {
      this_1.c13();
    }
    tmp_2.az_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.az_1.z12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.e13(true);
    tmp_3.bz_1 = this_2;
    this.cz_1 = false;
    this.dz_1 = null;
    this.ez_1 = null;
    this.fz_1 = new ComposerChangeListWriter(this, this.wx_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.az_1.vz();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.t12(0);
    }finally {
      reader.j11();
    }
    tmp_4.gz_1 = tmp_5;
    this.hz_1 = new FixupList();
    this.iz_1 = false;
    this.jz_1 = 0;
  }
  protoOf(ComposerImpl).l18 = function () {
    return this.sx_1;
  };
  protoOf(ComposerImpl).m18 = function () {
    return this.sy_1 > 0;
  };
  protoOf(ComposerImpl).n18 = function () {
    return this.tx_1.o18();
  };
  protoOf(ComposerImpl).p18 = function (key) {
    return start(this, key, null, Companion_getInstance_0().m12_1, null);
  };
  protoOf(ComposerImpl).q18 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).r18 = function (key) {
    var pending = this.ay_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().m12_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.dy_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().j13_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.jz_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.jz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.jz_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.jz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.q1_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.jz_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.jz_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.jz_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.jz_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.dy_1 = this.dy_1 + 1 | 0;
    var reader = this.zy_1;
    if (this.iz_1) {
      reader.k13();
      this.bz_1.l13(key, Companion_getInstance().j13_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.w13();
    if (slotKey === key && !reader.s18()) {
      reader.h13();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.x14()) {
      var removeIndex = this.by_1;
      var startSlot = reader.b11_1;
      recordDelete(this);
      var nodesToRemove = reader.p12();
      this.fz_1.p14(removeIndex, nodesToRemove);
      removeRange(this.ky_1, startSlot, reader.b11_1);
    }
    reader.k13();
    this.iz_1 = true;
    this.dz_1 = null;
    ensureWriter(this);
    var writer = this.bz_1;
    writer.a14();
    var startIndex = writer.h12_1;
    writer.l13(key, Companion_getInstance().j13_1);
    this.gz_1 = writer.t12(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).t18 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).w15 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().m12_1, null);
  };
  protoOf(ComposerImpl).z15 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).u18 = function () {
    this.ny_1 = null;
  };
  protoOf(ComposerImpl).v18 = function () {
    return this.iz_1;
  };
  protoOf(ComposerImpl).k18 = function () {
    var tmp;
    var tmp_0;
    if (!this.iz_1 && !this.qy_1 && !this.oy_1) {
      var tmp0_safe_receiver = this.w18();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x18()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.iy_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).i13 = function () {
    start(this, 125, null, Companion_getInstance_0().n12_1, null);
    this.jy_1 = true;
  };
  protoOf(ComposerImpl).y18 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.iz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.ey_1.z18();
    var groupAnchor = this.bz_1.t12(this.bz_1.j12_1);
    this.cy_1 = this.cy_1 + 1 | 0;
    this.hz_1.a19(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).b19 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.iz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.zy_1, this);
    this.fz_1.q15(node);
    var tmp;
    if (this.qy_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.fz_1.c19(node);
    }
  };
  protoOf(ComposerImpl).d19 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).e19 = function (value, block) {
    if (this.iz_1) {
      this.hz_1.g19(value, block);
    } else {
      this.fz_1.f19(value, block);
    }
  };
  protoOf(ComposerImpl).q12 = function () {
    var tmp;
    if (this.iz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().j13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.zy_1.h();
      var tmp_0;
      var tmp_1;
      if (this.qy_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().j13_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).h19 = function () {
    var tmp;
    if (this.iz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().j13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.zy_1.h();
      var tmp_0;
      var tmp_1;
      if (this.qy_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().j13_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.i19_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).b10 = function (value) {
    var tmp;
    if (!equals(this.q12(), value)) {
      this.r12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).k19 = function (value) {
    var tmp;
    if (!(this.q12() === value)) {
      this.r12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).l19 = function (value) {
    var next = this.q12();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.r12(value);
    return true;
  };
  protoOf(ComposerImpl).m19 = function (value) {
    var next = this.q12();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.r12(value);
    return true;
  };
  protoOf(ComposerImpl).n19 = function (value) {
    var next = this.q12();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.r12(value);
    return true;
  };
  protoOf(ComposerImpl).r12 = function (value) {
    if (this.iz_1) {
      this.bz_1.t19(value);
    } else {
      if (this.zy_1.i11_1) {
        var groupSlotIndex = this.zy_1.p19() - 1 | 0;
        if (this.fz_1.s19()) {
          this.fz_1.r19(value, this.zy_1.t12(this.zy_1.d11_1), groupSlotIndex);
        } else {
          this.fz_1.q19(value, groupSlotIndex);
        }
      } else {
        this.fz_1.o19(this.zy_1.t12(this.zy_1.d11_1), value);
      }
    }
  };
  protoOf(ComposerImpl).u19 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.iz_1) {
        this.fz_1.v19(value);
      }
      this.vx_1.d(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.r12(toStore);
  };
  protoOf(ComposerImpl).w18 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.wy_1;
    return this.sy_1 === 0 && it.gu() ? it.z18() : null;
  };
  protoOf(ComposerImpl).s16 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.lx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.zy_1.u10_1;
    var location = anchor.w19(slotTable);
    if (this.xy_1 && location >= this.zy_1.b11_1) {
      insertIfMissing(this.ky_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).g17 = function () {
    if (this.ky_1.p()) {
      skipGroup(this);
    } else {
      var reader = this.zy_1;
      var key = reader.w13();
      var dataKey = reader.y13();
      var aux = reader.g13();
      var rGroupIndex = this.dy_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().j13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.jz_1;
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.jz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.jz_1;
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.jz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.q1_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.jz_1;
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.jz_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.jz_1;
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.jz_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.x19(), null);
      recomposeToGroupEnd(this);
      reader.c15();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().j13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.jz_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.jz_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.jz_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.jz_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.q1_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.jz_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.jz_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.jz_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.jz_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).a13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.cy_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.w18();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y19();
    }
    if (this.ky_1.p()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).z19 = function (key) {
    this.r18(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).a1a = function () {
    var scope = this.wy_1.gu() ? this.wy_1.k11() : null;
    if (scope != null) {
      scope.u15(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.b1a(this.ty_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fz_1.c1a(tmp2_safe_receiver, this.yx_1);
    }
    var tmp;
    if (!(scope == null) && !scope.e1a() && (scope.o14() || this.hy_1)) {
      if (scope.lx_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.iz_1) {
          tmp_1 = this.bz_1.t12(this.bz_1.j12_1);
        } else {
          tmp_1 = this.zy_1.t12(this.zy_1.d11_1);
        }
        tmp_0.lx_1 = tmp_1;
      }
      scope.d1a(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).f1a = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).g1a = function (sourceInformation) {
    if (this.iz_1 && this.uy_1) {
      this.bz_1.h1a(sourceInformation);
    }
  };
  protoOf(ComposerImpl).i1a = function (key, sourceInformation) {
    if (this.iz_1 && this.uy_1) {
      this.bz_1.j1a(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).k1a = function () {
    if (this.iz_1 && this.uy_1) {
      this.bz_1.l1a();
    }
  };
  protoOf(ComposerImpl).m1a = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.wx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).o1a = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.xy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.xy_1 = true;
    try {
      block();
    }finally {
      this.xy_1 = false;
    }
  };
  protoOf(ComposerImpl).p1a = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.wx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.i() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.ky_1.p();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.iy_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.wx_1.gu();
    }
    return false;
  };
  protoOf(ComposerImpl).q1a = function () {
    return this.w18();
  };
  protoOf(ComposerImpl).r1a = function () {
    return this.h19();
  };
  protoOf(ComposerImpl).s1a = function (value) {
    return this.u19(value);
  };
  protoOf(ComposerImpl).t1a = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.u1a(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.j13_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.h12_1;
    var address = groupIndexToAddress(_this__u8e3s4, group);
    var start = dataIndex_0(_this__u8e3s4.p11_1, _this__u8e3s4, address);
    var end = dataIndex_0(_this__u8e3s4.p11_1, _this__u8e3s4, groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.h12_1 + _this__u8e3s4.r14(_this__u8e3s4.h12_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = _this__u8e3s4.q11_1[dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.v1a() - slot | 0;
          rememberManager.w1a(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.v1a() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.j19_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.y1a()) {
            priority = _this__u8e3s4.i16(anchor);
            endRelativeAfter = _this__u8e3s4.v1a() - _this__u8e3s4.x1a(priority) | 0;
          }
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var priority_0 = priority;
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.z1a(slot_0.i19_1, endRelativeSlotIndex, priority_0, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.a1b();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.b1b();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.b16_1 = content;
    this.c16_1 = parameter;
    this.d16_1 = composition;
    this.e16_1 = slotTable;
    this.f16_1 = anchor;
    this.g16_1 = invalidations;
    this.h16_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.l16_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.g1a(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.c1b();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1b(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1b();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.f1b_1 = message;
  }
  protoOf(ComposeRuntimeError).q8 = function () {
    return this.f1b_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.i19_1 = wrapped;
    this.j19_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.o13_1.i()));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.g1b_1;
      var inductionVariable = 0;
      var last = this$0.o13_1.i();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.o13_1.o(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.g1b_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.o13_1 = keyInfos;
    this.p13_1 = startIndex;
    this.q13_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p13_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r13_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.o13_1.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.o13_1.o(index);
        result.er(keyInfo.d14_1, new GroupInfo(index, runningNodeIndex, keyInfo.e14_1));
        runningNodeIndex = runningNodeIndex + keyInfo.e14_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.s13_1 = result;
    var tmp_1 = this;
    tmp_1.t13_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).h1b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.t13_1;
    keyMap$factory();
    return this_0.i1().g1b_1;
  };
  protoOf(Pending).z13 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.h1b(), joinedKey);
  };
  protoOf(Pending).v13 = function (keyInfo) {
    return this.r13_1.d(keyInfo);
  };
  protoOf(Pending).o14 = function () {
    return this.r13_1;
  };
  protoOf(Pending).i14 = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.s13_1;
      var v = this_0.vq_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.tq_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.i1b_1;
                    if (position === from)
                      group.i1b_1 = to;
                    else if (to <= position ? position < from : false)
                      group.i1b_1 = position + 1 | 0;
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.s13_1;
      var v_0 = this_2.vq_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.tq_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.h2(this_3.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.i1b_1;
                    if (position_0 === from)
                      group_0.i1b_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.i1b_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.f2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).u14 = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.s13_1;
      var v = this_0.vq_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.tq_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.j1b_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.j1b_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.j1b_1 = position + count | 0;
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.s13_1;
      var v_0 = this_2.vq_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.tq_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.h2(this_3.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.j1b_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.j1b_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.j1b_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.f2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).u13 = function (keyInfo, insertIndex) {
    this.s13_1.er(keyInfo.d14_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).q14 = function (group, newCount) {
    var groupInfo = this.s13_1.o(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.j1b_1;
      var difference = newCount - groupInfo.k1b_1 | 0;
      groupInfo.k1b_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.s13_1;
        var v = this_0.vq_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.tq_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var tmp = v[index_0];
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.j1b_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.j1b_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.j1b_1 = newIndex;
                      }
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).h14 = function (keyInfo) {
    var tmp0_safe_receiver = this.s13_1.o(keyInfo.d14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).g14 = function (keyInfo) {
    var tmp0_safe_receiver = this.s13_1.o(keyInfo.d14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).s14 = function (keyInfo) {
    var tmp0_safe_receiver = this.s13_1.o(keyInfo.d14_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1b_1;
    return tmp1_elvis_lhs == null ? keyInfo.e14_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.m12_1 = _GroupKind___init__impl__iwqg06(0);
    this.n12_1 = _GroupKind___init__impl__iwqg06(1);
    this.o12_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var validation = _this__u8e3s4.o(index);
      if (validation.gx_1 < end) {
        _this__u8e3s4.f1(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.h12_1 > (_this__u8e3s4.j12_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.b11_1 > (_this__u8e3s4.d11_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.i()) {
      var firstInvalidation = _this__u8e3s4.o(index);
      if (firstInvalidation.gx_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.f1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.s12(a) === b)
      return b;
    if (_this__u8e3s4.s12(b) === a)
      return a;
    if (_this__u8e3s4.s12(a) === _this__u8e3s4.s12(b))
      return _this__u8e3s4.s12(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.s12(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.s12(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.s12(currentA);
      currentB = _this__u8e3s4.s12(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.e1(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.o(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.hx_1;
        if (oldInstance == null)
          invalidation.hx_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.d(instance);
          } else {
            invalidation.hx_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.hx_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.vz();
    var tmp;
    try {
      var index = _this__u8e3s4.i16(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.j11();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var invalidation = _this__u8e3s4.o(index);
      if (invalidation.gx_1 < end) {
        result.d(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.i1b_1 = slotIndex;
    this.j1b_1 = nodeIndex;
    this.k1b_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.zs(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ps_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.d(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.os_1[insertionIndex] = key;
      this_0.ps_1[insertionIndex] = computedValue;
    } else {
      this_0.ps_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).l1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.f1(0);
        if (list.p()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).z3(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).z3(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.g1b_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.g1b_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.g1b_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.g1b_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.g1b_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.c14_1 == null) ? new JoinedKey(_this__u8e3s4.b14_1, _this__u8e3s4.c14_1) : _this__u8e3s4.b14_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.o(mid);
      var cmp = compareTo(midVal.gx_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.s12(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.i1a(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1a();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.v18() || !equals($this$with.r1a(), value)) {
      $this$with.s1a(value);
      _Updater___get_composer__impl__9ty7av($this).e19(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l1b_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).m1b = function (a, b) {
    return this.l1b_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.m1b(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).m2 = function () {
    return this.l1b_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.m2());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.n15(group)) {
      result.d($reader.i17(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.r14(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.r14(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.gx_1, i2.gx_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.h1b());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.s1b_1.d(instance);
      $this.t1b_1.qq(priority);
      $this.u1b_1.qq(endRelativeAfter);
    } else {
      $this.p1b_1.d(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.s1b_1.p()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.u1b_1.i()) {
        if (endRelativeOrder <= $this.u1b_1.o(index)) {
          var instance = $this.s1b_1.f1(index);
          var endRelativeAfter = $this.u1b_1.f1(index);
          var priority = $this.t1b_1.f1(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.qq(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.qq(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.d(instance);
            toAddAfter.qq(endRelativeAfter);
            toAddPriority.qq(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.i() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.i();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.o(i);
                var jAfter = toAddAfter.o(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.o(i) < toAddPriority.o(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.p1b_1.m(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.n1c_1.m18();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.q1c_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.r1c_1 = content;
    $this.v1b_1.s1c($this, $this.r1c_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.x1b_1.u1c(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.x1b_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.x1b_1.u1c(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.x1b_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.b1c_1.a17_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.cu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.bu_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.h1c_1.w1c(value, scope) && !scope.x1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.v1c() && !forgetConditionalScopes) {
                          $this.d1c_1.d(scope);
                        } else {
                          $this.c1c_1.d(scope);
                        }
                      }
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.h1c_1.w1c(value, scope_0) && !scope_0.x1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.v1c() && !forgetConditionalScopes) {
            $this.d1c_1.d(scope_0);
          } else {
            $this.c1c_1.d(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.y1c_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.cu_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.x1c(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.e1c_1.a17_1.l1(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.cu_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.bu_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.h2(this_3.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.f2(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var tmp0_iterator = values.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.x1c(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.e1c_1.a17_1.l1(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.cu_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.bu_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.h2(this_5.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.f2(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.d1c_1;
    var invalidatedScopes = $this.c1c_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.gu()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.b1c_1.a17_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.ns_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.h2(this_7.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_6.os_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.ps_1[index_2];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.cu_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.bu_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.h2(this_8.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.n(scope) || invalidatedScopes.n(scope)) {
                                      set.ov(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.f2(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.n(scope_0) || invalidatedScopes.n(scope_0);
                    }
                    if (tmp_5) {
                      this_6.gr(index_2);
                    }
                  }
                  slot_2 = slot_2.f2(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.c1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.gu()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.b1c_1.a17_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.ns_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.h2(this_10.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_7 = this_9.os_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.ps_1[index_4];
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.cu_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.bu_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.h2(this_11.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.n(scope_1)) {
                                      set_0.ov(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.f2(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.n(scope_2);
                    }
                    if (tmp_9) {
                      this_9.gr(index_4);
                    }
                  }
                  slot_4 = slot_4.f2(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.c1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.e1c_1.a17_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.ns_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.os_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ps_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.cu_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.bu_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.h2(this_2.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.b1c_1.z1c(derivedState)) {
                                    set.ov(index_0);
                                  }
                                }
                                slot_0 = slot_0.f2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.p();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.b1c_1.z1c(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.gr(index);
                  }
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.d1c_1.gu()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.d1c_1;
      var elements_0 = this_3.cu_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.bu_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.h2(this_4.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).v1c()) {
                      this_3.ov(index_1);
                    }
                  }
                  slot_1 = slot_1.f2(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.b1c_1.a17_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.cu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.bu_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.x1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.h1c_1.a1d(value, scope);
                      }
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.x1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.h1c_1.a1d(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.z1b_1);
    try {
      if (changes.p())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.u16(sectionName);
        try {
          $this.w1b_1.yv();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.a1c_1.z12();
          var normalClose = false;
          var tmp;
          try {
            // Inline function 'kotlin.also' call
            changes.b1d($this.w1b_1, writer, manager);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.e13(normalClose);
          }
          $this.w1b_1.zv();
          break $l$block;
        }finally {
          Trace_instance.h17(token);
        }
      }
      manager.c1d();
      manager.d1d();
      if ($this.j1c_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.u16(sectionName_0);
          try {
            $this.j1c_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.b1c_1.a17_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.ns_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.os_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.ps_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.cu_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.bu_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.h2(this_2.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).y1a()) {
                                            set.ov(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.f2(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.p();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).y1a();
                          }
                          if (tmp_2) {
                            this_0.gr(index);
                          }
                        }
                        slot = slot.f2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.h17(token_0);
          }
        }
      }
    }finally {
      if ($this.g1c_1.p()) {
        manager.e1d();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.f1d() && $this.n1c_1.s16(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.y1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.k1c_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.a1c_1.g1d($this.l1c_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.i1c_1.h1d(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.i1c_1.h1d(scope, ScopeInvalidated_instance);
        } else {
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = $this.i1c_1.a17_1.l1(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.cu_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.bu_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.f2(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.i1c_1.a1d(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.v1b_1.i1d($this);
    return $this.f1d() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.i1c_1;
    $this.i1c_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.m1c_1;
    var tmp;
    if (holder.l1d_1) {
      tmp = holder.k1d_1;
    } else {
      var parentHolder = $this.v1b_1.j1d();
      var parentObserver = parentHolder == null ? null : parentHolder.k1d_1;
      if (!equals(parentObserver, holder.k1d_1)) {
        holder.k1d_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.n1b_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o1b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p1b_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.q1b_1 = ArrayList_init_$Create$();
    this.r1b_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.s1b_1 = ArrayList_init_$Create$();
    this.t1b_1 = new MutableIntList();
    this.u1b_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).m1d = function (instance) {
    this.o1b_1.d(instance);
  };
  protoOf(RememberEventDispatcher).z1a = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).w1a = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.r1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.r1b_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.sv(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).c1d = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.p1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.u16(sectionName);
        try {
          var releasing = this.r1b_1;
          var inductionVariable = this.p1b_1.i() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.p1b_1.o(i);
              if (isInterface(instance, RememberObserver)) {
                this.n1b_1.b1(instance);
                instance.n1d();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.n(instance)) {
                  instance.ex();
                } else {
                  instance.dx();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.h17(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1b_1.p()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.u16(sectionName_0);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.o1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.n1b_1.b1(item);
              item.o1d();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.h17(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).d1d = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.q1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.u16(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.q1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.q1b_1.c1();
          break $l$block;
        }finally {
          Trace_instance.h17(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).e1d = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.u16(sectionName);
        try {
          var iterator = this.n1b_1.f();
          while (iterator.g()) {
            var instance = iterator.h();
            iterator.a3();
            instance.p1d();
          }
          break $l$block;
        }finally {
          Trace_instance.h17(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.v1b_1 = parent;
    this.w1b_1 = applier;
    this.x1b_1 = new AtomicReference(null);
    this.y1b_1 = new Object();
    this.z1b_1 = (new MutableScatterSet()).wv();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.v1b_1.d13()) {
      this_0.c13();
    }
    if (this.v1b_1.d10()) {
      this_0.b13();
    }
    tmp.a1c_1 = this_0;
    this.b1c_1 = new ScopeMap();
    this.c1c_1 = new MutableScatterSet();
    this.d1c_1 = new MutableScatterSet();
    this.e1c_1 = new ScopeMap();
    this.f1c_1 = new ChangeList();
    this.g1c_1 = new ChangeList();
    this.h1c_1 = new ScopeMap();
    this.i1c_1 = new ScopeMap();
    this.j1c_1 = false;
    this.k1c_1 = null;
    this.l1c_1 = 0;
    this.m1c_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.w1b_1, this.v1b_1, this.a1c_1, this.z1b_1, this.f1c_1, this.g1c_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.v1b_1.q1d(this_1);
    tmp_0.n1c_1 = this_1;
    this.o1c_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.v1b_1;
    tmp_1.p1c_1 = tmp_2 instanceof Recomposer;
    this.q1c_1 = false;
    this.r1c_1 = ComposableSingletons$CompositionKt_getInstance().r1d_1;
  }
  protoOf(CompositionImpl).f1d = function () {
    return this.n1c_1.xy_1;
  };
  protoOf(CompositionImpl).t1d = function () {
    return this.q1c_1;
  };
  protoOf(CompositionImpl).u1d = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).v1d = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.y1b_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.w1d();
            observer_0.x1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.n1c_1.m1a(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.y1d(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.i1c_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.z1b_1.p();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.z1d();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).a1e = function (values) {
    $l$loop: while (true) {
      var old = this.x1b_1.gj();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.x1b_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.x1b_1.b1e(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.y1b_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).c1e = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.y1c_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.cu_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.b1c_1.z1c(value) || this.e1c_1.z1c(value))
                      return true;
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var tmp0_iterator = values.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.b1c_1.z1c(element) || this.e1c_1.z1c(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).d1e = function (block) {
    return this.n1c_1.o1a(block);
  };
  protoOf(CompositionImpl).e1e = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.n1c_1.w18();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.u1a(true);
        var alreadyRead = tmp0_safe_receiver.f1e(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.h1e(tmp$ret$0);
          }
          this.b1c_1.a1d(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.i1e();
            this.e1c_1.j1e(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.k1e();
            var k = this_0.tr_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.sr_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp = k[index];
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.h1e(tmp$ret$3);
                          }
                          this.e1c_1.a1d(dependency, value);
                        }
                        slot = slot.f2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.m1e(value, record.l1e());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).n1e = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.e1c_1.a17_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.cu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.bu_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp = k[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).o1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.w1d();
            observer_0.x1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.n1c_1.p1a(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.y1d(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.i1c_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.z1b_1.p();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.z1d();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).p1e = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.qb_1.d16_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.n1c_1.f1a(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.z1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.z1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).q1e = function (state) {
    var manager = new RememberEventDispatcher(this.z1b_1);
    var slotTable = state.l16_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.z12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.e13(normalClose);
    }
    manager.c1d();
  };
  protoOf(CompositionImpl).r1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.f1c_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.z1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.z1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        if (this.g1c_1.gu()) {
          applyChangesInLocked(this, this.g1c_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.z1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.z1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).t1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.n1c_1.u18();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.z1b_1.p()) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.z1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.z1b_1)).e1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.z1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).z1d = function () {
    this.x1b_1.u1e(null);
    this.f1c_1.c1();
    this.g1c_1.c1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z1b_1.p()) {
      (new RememberEventDispatcher(this.z1b_1)).e1d();
    }
  };
  protoOf(CompositionImpl).v1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y1b_1;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.a1c_1.mz_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w1e();
      }
    }
  };
  protoOf(CompositionImpl).t16 = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.k1c_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.l1c_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.k1c_1 = null;
        this.l1c_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).x1e = function (scope, instance) {
    if (scope.y1e()) {
      scope.d1a(true);
    }
    var anchor = scope.lx_1;
    if (anchor == null || !anchor.y1a())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.a1c_1.z1e(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.y1b_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.k1c_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.a1f())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).b1f = function (scope) {
    this.j1c_1 = true;
  };
  protoOf(CompositionImpl).c1f = function (instance, scope) {
    this.b1c_1.w1c(instance, scope);
  };
  protoOf(CompositionImpl).d1f = function (state) {
    if (!this.b1c_1.z1c(state)) {
      this.e1c_1.j1e(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.k1d_1 = observer;
    this.l1d_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.i18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.i18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.k18()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.a13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.r1d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.s1d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.d1(a, _this__u8e3s4.o(b));
    _this__u8e3s4.d1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.sq(a, _this__u8e3s4.o(b));
    _this__u8e3s4.sq(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).j1d = function () {
    return null;
  };
  protoOf(CompositionContext).e10 = function (table) {
  };
  protoOf(CompositionContext).q1d = function (composer) {
  };
  protoOf(CompositionContext).xz = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).wz = function () {
  };
  protoOf(CompositionContext).g10 = function () {
  };
  protoOf(CompositionContext).k16 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.f1f_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).g1f = function () {
    return this.f1f_1;
  };
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = _this__u8e3s4.l1(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.g1f();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.h1f(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().gj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().l1f(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(keys, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -139560008, 'C(LaunchedEffect)P(1)412@17484L59:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-139560008, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:410)');
    }
    var applyContext = $composer_0.n18();
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -568225417, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.b10(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1a();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().j13_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffect_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 590241125, 'C(LaunchedEffect)P(1,2)361@15275L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(590241125, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:359)');
    }
    var applyContext = $composer_0.n18();
    sourceInformationMarkerStart($composer_0, 2064994906, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.b10(key1) | $composer_0.b10(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (invalid || it === Companion_getInstance().j13_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.m1f_1 = task;
    this.n1f_1 = CoroutineScope(parentCoroutineContext);
    this.o1f_1 = null;
  }
  protoOf(LaunchedEffectImpl).o1d = function () {
    var tmp0_safe_receiver = this.o1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.o1f_1 = launch(this.n1f_1, VOID, VOID, this.m1f_1);
  };
  protoOf(LaunchedEffectImpl).n1d = function () {
    var tmp0_safe_receiver = this.o1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hf(new LeftCompositionCancellationException());
    }
    this.o1f_1 = null;
  };
  protoOf(LaunchedEffectImpl).p1d = function () {
    var tmp0_safe_receiver = this.o1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hf(new LeftCompositionCancellationException());
    }
    this.o1f_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.b10(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (invalid || it === Companion_getInstance().j13_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.p1f_1 = effect;
    this.q1f_1 = null;
  }
  protoOf(DisposableEffectImpl).o1d = function () {
    this.q1f_1 = this.p1f_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).n1d = function () {
    var tmp0_safe_receiver = this.q1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vh();
    }
    this.q1f_1 = null;
  };
  protoOf(DisposableEffectImpl).p1d = function () {
  };
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.q1_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.r1f_1 = left;
    this.s1f_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.r1f_1), 31) + hashCodeOf(this, this.s1f_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.r1f_1) + ', right=' + toString_0(this.s1f_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.r1f_1, tmp0_other_with_cast.r1f_1))
      return false;
    if (!equals(this.s1f_1, tmp0_other_with_cast.s1f_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j8(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.t1f_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.t1f_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.t1f_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.t1f_1 === tmp0_other_with_cast.t1f_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.jx_1 = $this.jx_1 | 32;
    } else {
      $this.jx_1 = $this.jx_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.jx_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.jx_1 = $this.jx_1 | 16;
    } else {
      $this.jx_1 = $this.jx_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.i1f();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.u1f(_this__u8e3s4.i1e().l1e(), dependencies.l1(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).v1f = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.o(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.w1f(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.x1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).y1f = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.z1e(item)) {
              var tmp_1 = slots.z1f(slots.i16(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.ox_1 === $token && $instances.equals(this$0.px_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.sr_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.tr_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      var shouldRemove = !(this_0.ur_1[index] === $token);
                      if (shouldRemove) {
                        composition.c1f(instance, this$0);
                        if (isInterface(instance, DerivedState)) {
                          composition.d1f(instance);
                          var tmp0_safe_receiver = this$0.qx_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.z3(instance);
                        }
                      }
                      if (shouldRemove) {
                        this_0.es(index);
                      }
                    }
                    slot = slot.f2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.jx_1 = 0;
    this.kx_1 = owner;
    this.lx_1 = null;
    this.mx_1 = null;
    this.nx_1 = null;
    this.ox_1 = 0;
    this.px_1 = null;
    this.qx_1 = null;
  }
  protoOf(RecomposeScopeImpl).y1a = function () {
    var tmp;
    if (!(this.kx_1 == null)) {
      var tmp0_safe_receiver = this.lx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1a();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).a1f = function () {
    return !(this.mx_1 == null);
  };
  protoOf(RecomposeScopeImpl).u1a = function (value) {
    if (value) {
      this.jx_1 = this.jx_1 | 1;
    } else {
      this.jx_1 = this.jx_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).o14 = function () {
    return !((this.jx_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).y1e = function () {
    return !((this.jx_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).d1a = function (value) {
    if (value) {
      this.jx_1 = this.jx_1 | 4;
    } else {
      this.jx_1 = this.jx_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).u15 = function (value) {
    if (value) {
      this.jx_1 = this.jx_1 | 8;
    } else {
      this.jx_1 = this.jx_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).x18 = function () {
    return !((this.jx_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).k15 = function (composer) {
    var block = this.mx_1;
    var observer = this.nx_1;
    if (!(observer == null) && !(block == null)) {
      observer.a1g(this);
      try {
        block(composer, 1);
      }finally {
        observer.b1g(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).x1c = function (value) {
    var tmp0_safe_receiver = this.kx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1e(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).a1b = function () {
    var tmp0_safe_receiver = this.kx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1f(this);
    }
    this.kx_1 = null;
    this.px_1 = null;
    this.qx_1 = null;
    var tmp1_safe_receiver = this.nx_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.c1g(this);
    }
  };
  protoOf(RecomposeScopeImpl).x1f = function (owner) {
    this.kx_1 = owner;
  };
  protoOf(RecomposeScopeImpl).w1e = function () {
    var tmp0_safe_receiver = this.kx_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.x1e(this, null);
  };
  protoOf(RecomposeScopeImpl).d1g = function (block) {
    this.mx_1 = block;
  };
  protoOf(RecomposeScopeImpl).t15 = function (value) {
    if (value) {
      this.jx_1 = this.jx_1 | 64;
    } else {
      this.jx_1 = this.jx_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).s15 = function () {
    return !((this.jx_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).e1a = function () {
    return !((this.jx_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).v15 = function (token) {
    this.ox_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).y19 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).f1e = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.px_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.px_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.ds(instance, this.ox_1, -1);
    if (token === this.ox_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).m1e = function (instance, value) {
    var tmp0_elvis_lhs = this.qx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.qx_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.ys(instance, value);
  };
  protoOf(RecomposeScopeImpl).v1c = function () {
    return !(this.qx_1 == null);
  };
  protoOf(RecomposeScopeImpl).rx = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.qx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.gu()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.cu_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.bu_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.f2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).j15 = function () {
    var tmp0_safe_receiver = this.kx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.px_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.tr_1;
          var v = tmp0_safe_receiver_0.ur_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.sr_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_0 = k[index];
                        var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.e1e(value);
                      }
                      slot = slot.f2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).b1a = function (token) {
    var tmp0_safe_receiver = this.px_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.e1a()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.tr_1;
          var v = tmp0_safe_receiver.ur_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.sr_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.f2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.e1g_1.i1();
      var new_0 = old.d(info);
      if (old === new_0 || $this.e1g_1.un(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.e1g_1.i1();
      var new_0 = old.b1(info);
      if (old === new_0 || $this.e1g_1.un(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.i1g_1;
    toRecompose.c1();
    toInsert.c1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.z1d();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.c1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.cu_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.bu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp = k[index_0];
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.z1d();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.c1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.cu_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.bu_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).t1e();
                }
                slot_0 = slot_0.f2(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.c1();
    modifiedValues.c1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.cu_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.bu_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.h2(this_2.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.z1d();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.f2(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.c1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.c1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.i1g_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.q1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.d(item);
      }
       while (inductionVariable <= last);
    this$0.q1g_1.c1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.u16(sectionName);
          try {
            this$0.h1g_1.ax(frameTime);
            Companion_instance_11.f1h();
            break $l$block;
          }finally {
            Trace_instance.h17(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.u16(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.i1g_1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.o1g_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.e17_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.c17_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.d(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.o1g_1.c1();
          $modifiedValues.c1();
          $alreadyComposed.c1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.p()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.p();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.i() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.o(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.d(tmp0_safe_receiver);
                  }
                  $alreadyComposed.d(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.c1();
            }
            if ($modifiedValues.gu() || this$0.o1g_1.gu()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.i1g_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.o(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.n(item_0) && item_0.c1e($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              var this_3 = this$0.o1g_1;
              var gap = 0;
              var size_0 = this_3.e17_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp_2 = this_3.c17_1[i_0];
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.n(value) && !$toRecompose.n(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.c17_1[i_0 - gap | 0] = this_3.c17_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.c17_1, null, size_0 - gap | 0, size_0);
              this_3.g1h(size_0 - gap | 0);
            }
            if ($toRecompose.p()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.p()) {
                    break $l$loop_1;
                  }
                  $toLateApply.tv(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.p()) {
            var tmp0_this = this$0;
            tmp0_this.g1g_1 = tmp0_this.g1g_1.b2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.i() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.o(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.d(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.i() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.o(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.r1e();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.c1();
            }
          }
          if ($toLateApply.gu()) {
            try {
              $toComplete.vv($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.cu_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.bu_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.h2(this_7.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_4 = k[index_3];
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).s1e();
                          }
                          slot = slot.f2(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.c1();
            }
          }
          if ($toComplete.gu()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.cu_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.bu_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.h2(this_9.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).t1e();
                          }
                          slot_0 = slot_0.f2(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.c1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.i1g_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_11.h1h();
          $alreadyComposed.c1();
          $modifiedValues.c1();
          this$0.u1g_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.h17(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.i1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.a1h_1.i1().r1(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.n1g_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.y1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.cu_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.bu_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (it instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !it.i1h(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.d(it);
                        }
                      }
                      slot = slot.f2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var tmp0_iterator = changed.f();
          while (tmp0_iterator.g()) {
            var element = tmp0_iterator.h();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.i1h(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.d(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.h8(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.r1h_1 = $block;
    this.s1h_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).u1h = function ($this$coroutineScope, $completion) {
    var tmp = this.v1h($this$coroutineScope, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 2;
            this.w7_1 = 1;
            suspendResult = this.r1h_1(this.t1h_1, this.s1h_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).v1h = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.r1h_1, this.s1h_1, completion);
    i.t1h_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.u1h($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.m1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.l1g_1;
      var newCache = compositions.p() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.m1g_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.z1g_1 && $this.h1g_1.zw();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.a1h_1.i1().r1(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.n1g_1 = new MutableScatterSet();
      $this.o1g_1.c1();
      $this.p1g_1.c1();
      $this.q1g_1.c1();
      $this.t1g_1 = null;
      var tmp0_safe_receiver = $this.v1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.mg();
      $this.v1g_1 = null;
      $this.y1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.y1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.j1g_1 == null) {
        $this.n1g_1 = new MutableScatterSet();
        $this.o1g_1.c1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.o1g_1.gu() || $this.n1g_1.gu()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.p1g_1.p();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.q1g_1.p();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.w1g_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.a1h_1.tn(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.v1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.v1g_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.x1g_1) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.b1h_1.ij().f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.ce()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.w1h_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.x1h_1 = recoverable;
    this.y1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.n1g_1.p())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.n1g_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.n1g_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.o(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.a1e(changes);
            if ($this.a1h_1.i1().r1(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.i1g_1;
      $this.n1g_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.i1g_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.n1g_1.rv(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.k1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.a1h_1.i1().r1(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.j1g_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.j1g_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().f1g_1.gj()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.i1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.p1g_1.c1();
      $this.o1g_1.c1();
      $this.n1g_1 = new MutableScatterSet();
      $this.q1g_1.c1();
      $this.r1g_1.c1();
      $this.s1g_1.c1();
      $this.y1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.i1g_1;
      var errorState = $this.y1g_1;
      if (errorState == null) {
        $this.y1g_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.y1h_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.l1g_1.c1();
    $this.m1g_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.l1g_1.b1(composition);
    $this.m1g_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.l1g_1.d(composition);
    $this.m1g_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.t1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.t1g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.n(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.d(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.n1g_1.gu() || $this.o1g_1.gu() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.c8();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.h1g_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.q1g_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.d16_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.p()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.f1d() || composition.t1d()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.u1g_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_11.i1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.j1i();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.gu()) === true) {
              composition.d1e(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.o1e();
            break $l$block;
          }finally {
            snapshot.k1i(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.i());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.d16_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.l1(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.y3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.d(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.o1().f();
    while (tmp0_iterator.g()) {
      var tmp1_loop_parameter = tmp0_iterator.h();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.h1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.i1();
      runtimeCheck(!composition.f1d());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.i1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.j1i();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.i1g_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.i());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.o(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.r1g_1, item_0.b16_1));
                  target.d(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.i() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.o(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.rb_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.i() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.o(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.rb_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.i());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.i() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.o(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.rb_1 == null ? item_3.qb_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.contracts.contract' call
                      target_0.d(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.i1g_1;
                var this_0 = $this.q1g_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.i());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.i() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.o(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.rb_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.d(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.p1e(toInsert);
              break $l$block_1;
            }finally {
              snapshot.k1i(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.m1());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.r1g_1.p()) {
      var references = flatten($this.r1g_1.n1());
      $this.r1g_1.c1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.i());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.s1g_1.l1(item));
          target.d(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.s1g_1.c1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.i() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.o(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.sb();
        var state = item_0.tb();
        if (!(state == null)) {
          reference.d16_1.q1e(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.y1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.vh();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.o1g_1.gu() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.e1g_1 = MutableStateFlow(persistentSetOf());
    this.f1g_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.c1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.i1g_1;
    var iterator = this$0.q1g_1.f();
    while (iterator.g()) {
      var value = iterator.h();
      if (equals(value.d16_1, $composition)) {
        toInsert.d(value);
        iterator.a3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.i1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.a1h_1.i1().r1(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.k1g_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.h8(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.i1g_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.k1g_1 = tmp_0;
      this$0.a1h_1.tn(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.i1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.j1g_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.a1h_1.tn(State_ShuttingDown_getInstance());
        if (!this$0.x1g_1) {
          runnerJob.hf(cancellation);
        } else if (!(this$0.v1g_1 == null)) {
          continuationToResume = this$0.v1g_1;
        }
        this$0.v1g_1 = null;
        tmp = runnerJob.cf(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.k1g_1 = cancellation;
        this$0.a1h_1.tn(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.h8(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.h1j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).s1j = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.t1j($this$recompositionRunner, parentFrameClock, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).u1j = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.s1j(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 6;
            var tmp_0 = this;
            tmp_0.k1j_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.l1j_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.m1j_1 = ArrayList_init_$Create$();
            this.n1j_1 = mutableScatterSetOf_0();
            this.o1j_1 = mutableScatterSetOf_0();
            this.p1j_1 = new MutableScatterSet();
            this.q1j_1 = wrapIntoSet(this.p1j_1);
            this.r1j_1 = mutableScatterSetOf_0();
            this.w7_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.h1j_1)) {
              this.w7_1 = 5;
              continue $sm;
            }

            this.w7_1 = 2;
            suspendResult = awaitWorkAvailable(this.h1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.h1j_1)) {
              this.w7_1 = 1;
              continue $sm;
            } else {
              this.w7_1 = 3;
              continue $sm;
            }

          case 3:
            this.w7_1 = 4;
            suspendResult = this.j1j_1.bx(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.h1j_1, this.k1j_1, this.p1j_1, this.r1j_1, this.l1j_1, this.m1j_1, this.q1j_1, this.n1j_1, this.o1j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.h1j_1);
            this.w7_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 6) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).t1j = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.h1j_1, completion);
    i.i1j_1 = $this$recompositionRunner;
    i.j1j_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.s1j($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.d1k_1 = this$0;
    this.e1k_1 = $block;
    this.f1k_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).u1h = function ($this$withContext, $completion) {
    var tmp = this.v1h($this$withContext, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(Recomposer$recompositionRunner$slambda).s8 = function (p1, $completion) {
    return this.u1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 5;
            this.h1k_1 = get_job(this.g1k_1.be());
            registerRunnerJob(this.d1k_1, this.h1k_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_11;
            tmp_0.i1k_1 = tmp_1.k1k(Recomposer$recompositionRunner$slambda$lambda(this.d1k_1));
            addRunning(Companion_getInstance_2(), this.d1k_1.d1h_1);
            this.w7_1 = 1;
            continue $sm;
          case 1:
            this.x7_1 = 4;
            this.d1k_1.i1g_1;
            var this_0 = _get_knownCompositions__y8veaj(this.d1k_1);
            var inductionVariable = 0;
            var last = this_0.i() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.o(index);
                item.v1e();
              }
               while (inductionVariable <= last);
            this.w7_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.e1k_1, this.f1k_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j1k_1 = suspendResult;
            this.x7_1 = 5;
            this.w7_1 = 3;
            continue $sm;
          case 3:
            this.x7_1 = 5;
            this.i1k_1.vh();
            this.d1k_1.i1g_1;
            if (this.d1k_1.j1g_1 === this.h1k_1) {
              this.d1k_1.j1g_1 = null;
            }

            deriveStateLocked(this.d1k_1);
            removeRunning(Companion_getInstance_2(), this.d1k_1.d1h_1);
            return Unit_instance;
          case 4:
            this.x7_1 = 5;
            var t = this.z7_1;
            this.i1k_1.vh();
            this.d1k_1.i1g_1;
            if (this.d1k_1.j1g_1 === this.h1k_1) {
              this.d1k_1.j1g_1 = null;
            }

            deriveStateLocked(this.d1k_1);
            removeRunning(Companion_getInstance_2(), this.d1k_1.d1h_1);
            throw t;
          case 5:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 5) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).v1h = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.d1k_1, this.e1k_1, this.f1k_1, completion);
    i.g1k_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.u1h($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.cu_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp = k[index];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.n1e(it);
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.e1e(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.n1e(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1i_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.h1i_1)) {
              this.w7_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.uh();
              this.h1i_1.i1g_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.h1i_1)) {
                tmp_0 = cancellable;
              } else {
                this.h1i_1.v1g_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.h8(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.zf(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w7_1 = 2;
              continue $sm;
            }

          case 1:
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.g1g_1 = new Long(0, 0);
    var tmp = this;
    tmp.h1g_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.i1g_1 = new Object();
    this.j1g_1 = null;
    this.k1g_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.l1g_1 = ArrayList_init_$Create$();
    this.m1g_1 = null;
    this.n1g_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(16), null);
    tmp_1.o1g_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.p1g_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.q1g_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.r1g_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.s1g_1 = LinkedHashMap_init_$Create$();
    this.t1g_1 = null;
    this.u1g_1 = null;
    this.v1g_1 = null;
    this.w1g_1 = 0;
    this.x1g_1 = false;
    this.y1g_1 = null;
    this.z1g_1 = false;
    this.a1h_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.j8(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.cf(Recomposer$effectJob$lambda(this));
    tmp_6.b1h_1 = this_0;
    this.c1h_1 = effectCoroutineContext.pc(this.h1g_1).pc(this.b1h_1);
    this.d1h_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).o18 = function () {
    return this.c1h_1;
  };
  protoOf(Recomposer).l1k = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).s1c = function (composition, content) {
    var composerWasComposing = composition.f1d();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.i1i(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.j1i();
            try {
              composition.v1d(content);
              break $l$block;
            }finally {
              snapshot.k1i(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.h1h();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    if (this.a1h_1.i1().r1(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).n(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.r1e();
      composition.s1e();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.h1h();
    }
  };
  protoOf(Recomposer).f10 = function () {
    return 1000;
  };
  protoOf(Recomposer).d13 = function () {
    return Companion_getInstance_2().f1g_1.gj();
  };
  protoOf(Recomposer).c10 = function () {
    return false;
  };
  protoOf(Recomposer).d10 = function () {
    return false;
  };
  protoOf(Recomposer).e10 = function (table) {
  };
  protoOf(Recomposer).i1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.o1g_1.kb(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.o1g_1.f17(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.h8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).y15 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.q1g_1.d(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.h8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).c18 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.r1g_1, reference.b16_1, reference);
  };
  protoOf(Recomposer).e1f = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    this.s1g_1.y3(reference, data);
  };
  protoOf(Recomposer).b18 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.u1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.u1g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.d(composition);
  };
  protoOf(Recomposer).k16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.i1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.s1g_1.z3(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.l1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.p()) {
        _this__u8e3s4.z3(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.l1(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.y3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.d(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.qz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.lz_1 : false) ? find($this.sz_1, index, $this.lz_1) : null;
  }
  function SlotTable() {
    this.kz_1 = new Int32Array(0);
    this.lz_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.mz_1 = tmp_1;
    this.nz_1 = 0;
    this.oz_1 = 0;
    this.pz_1 = new Object();
    this.qz_1 = false;
    this.rz_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.sz_1 = ArrayList_init_$Create$();
    this.tz_1 = null;
    this.uz_1 = null;
  }
  protoOf(SlotTable).h15 = function () {
    return this.lz_1 === 0;
  };
  protoOf(SlotTable).vz = function () {
    if (this.qz_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.oz_1 = this.oz_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).z12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.oz_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.qz_1 = true;
    this.rz_1 = this.rz_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).t12 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.lz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.sz_1;
    var effectiveSize = this.lz_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.e1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotTable).i16 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.y1a()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.b17_1;
  };
  protoOf(SlotTable).z1e = function (anchor) {
    var tmp;
    if (anchor.y1a()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$145qfty(this.sz_1, anchor.b17_1, this.lz_1);
      tmp = (it >= 0 && equals(this.sz_1.o(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).g1d = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.lz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.z1e(anchor)) {
      var containsUpper = groupIndex + groupSize(this.kz_1, groupIndex) | 0;
      var containsArg = anchor.b17_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).m1k = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.u10_1 === this && this.oz_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.oz_1 = this.oz_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.pz_1;
      var thisMap = this.tz_1;
      if (!(thisMap == null)) {
        thisMap.p4(sourceInformationMap);
      } else {
        this.tz_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).n1k = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.o11_1 === this && this.qz_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.qz_1 = false;
    this.o1k(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).o1k = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.kz_1 = groups;
    this.lz_1 = groupsSize;
    this.mz_1 = slots;
    this.nz_1 = slotsSize;
    this.sz_1 = anchors;
    this.tz_1 = sourceInformationMap;
    this.uz_1 = calledByMap;
  };
  protoOf(SlotTable).n17 = function () {
    return this.lz_1 > 0 && containsMark(this.kz_1, 0);
  };
  protoOf(SlotTable).p1k = function (group) {
    var tmp0_safe_receiver = this.tz_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.l1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).c13 = function () {
    this.uz_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).b13 = function () {
    this.tz_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).z1f = function (group, slotIndex) {
    var start = slotAnchor(this.kz_1, group);
    var end = (group + 1 | 0) < this.lz_1 ? dataAnchor(this.kz_1, group + 1 | 0) : this.mz_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.mz_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().j13_1;
    }
    return tmp;
  };
  protoOf(SlotTable).f = function () {
    return new GroupIterator(this, 0, this.lz_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.r14(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.h12_1);
    if (fromWriter.u11_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.y11_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.p11_1;
    var currentGroup = toWriter.h12_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.p11_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.q11_1;
    var currentSlot = toWriter.w11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.q11_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.j12_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.a12_1;
    var slotsGapLen = toWriter.z11_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.y11_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.a12_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.r11_1, fromIndex, fromWriter.q1k());
    var endAnchors = locationOf(fromWriter.r11_1, sourceGroupsEnd, fromWriter.q1k());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.r11_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.o(anchorIndex);
          sourceAnchor.b17_1 = sourceAnchor.b17_1 + anchorDelta | 0;
          anchors.d(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.r11_1, toWriter.h12_1, toWriter.q1k());
      toWriter.r11_1.g4(insertLocation, anchors);
      sourceAnchors.a1(startAnchors, endAnchors).c1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.p()) {
      var sourceSourceInformationMap = fromWriter.s11_1;
      var destinationSourceInformation = toWriter.s11_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.i() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.o(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.l1(item);
            if (!(information == null)) {
              sourceSourceInformationMap.z3(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.y3(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.j12_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.h12_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.p11_1, child) | 0;
      }
      tmp4_safe_receiver.x1k(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.s12(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.h13();
        fromWriter.y1k(parentGroup - fromWriter.h12_1 | 0);
        fromWriter.h13();
      }
      fromWriter.y1k(fromIndex - fromWriter.h12_1 | 0);
      var anchorsRemoved = fromWriter.b1b();
      if (needsStartGroups) {
        fromWriter.a13();
        fromWriter.f15();
        fromWriter.a13();
        fromWriter.f15();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.c12_1 = toWriter.c12_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.h12_1 = currentGroup + groupsToMove | 0;
      toWriter.w11_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.z1k();
    $this.a1l(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.s11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.t12(parent);
      var value = tmp0_safe_receiver.l1(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.h12_1;
          while (child < end) {
            result.b1l($this, child);
            child = child + groupSize($this.p11_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.y3(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.w11_1 - $this.c1l($this.j12_1) | 0;
    var tmp0_safe_receiver = $this.g12_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o($this.j12_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.j12_1;
    var inserting = $this.b12_1 > 0;
    $this.f12_1.a10($this.c12_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.h12_1;
      var newCurrentSlot = dataIndex_0($this.p11_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.w11_1 = newCurrentSlot;
      $this.x11_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().j13_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().j13_1);
      // Inline function 'kotlin.let' call
      var tmp0_gapLen = $this.z11_1;
      var tmp1_gapStart = $this.y11_1;
      var tmp2_capacity = $this.q11_1.length;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.a12_1 < current) {
        var slotsSize = $this.q11_1.length - $this.z11_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.p11_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.j12_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.q11_1;
        var currentSlot = $this.w11_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.w11_1 = currentSlot;
      }
      $this.c12_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.j12_1 = current;
      $this.h12_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.b1l($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.d12_1.a10(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.h12_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().j13_1)) {
        if (isNode) {
          $this.e1l(aux);
        } else {
          $this.d1l(aux);
        }
      }
      $this.w11_1 = slotIndex($this.p11_1, $this, currentGroupAddress);
      $this.x11_1 = dataIndex_0($this.p11_1, $this, groupIndexToAddress($this, $this.h12_1 + 1 | 0));
      $this.c12_1 = nodeCount($this.p11_1, currentGroupAddress);
      $this.j12_1 = currentGroup;
      $this.h12_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.p11_1, currentGroupAddress) | 0;
    }
    tmp.i12_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.p11_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.p11_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.l12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.gu()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.g1l(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.l12_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.l12_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.h1l(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.p11_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.p11_1, groupAddress, containsAnyMarks);
      var parent = $this.s12(group);
      if (parent >= 0) {
        set.h1l(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.r14(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.p11_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.r14(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.e12_1.a10((_get_capacity__a9k9f3($this) - $this.v11_1 | 0) - $this.i12_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.v11_1 | 0) - $this.e12_1.k11() | 0;
    $this.i12_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.u11_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.p11_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.p11_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.v11_1;
    var gapStart = $this.u11_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.r11_1.p()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.p11_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.p11_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.p11_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.u11_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.z11_1;
    var gapStart = $this.y11_1;
    var slotsGapOwner = $this.a12_1;
    if (!(gapStart === index)) {
      var slots = $this.q11_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.q1k();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.q11_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.u11_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.p11_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.p11_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.v11_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.p11_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.p11_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.u11_1)
            updateAddress_0 = updateAddress_0 + $this.v11_1 | 0;
        }
      }
      $this.a12_1 = newSlotsGapOwner;
    }
    $this.y11_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.y11_1;
    var slotsGapEnd = slotsGapStart + $this.z11_1 | 0;
    fill_0($this.q11_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.h12_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.u11_1;
      var gapLen = $this.v11_1;
      var oldCapacity = $this.p11_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.p11_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.p11_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.i12_1;
      if (currentEnd >= gapStart)
        $this.i12_1 = currentEnd + size | 0;
      $this.u11_1 = gapStart + size | 0;
      $this.v11_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.a12_1 < gapStart ? 0 : $this.y11_1, $this.z11_1, $this.q11_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.p11_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.a12_1;
      if (slotsGapOwner >= gapStart) {
        $this.a12_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.w11_1, group);
      var gapStart = $this.y11_1;
      var gapLen = $this.z11_1;
      if (gapLen < size) {
        var slots = $this.q11_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.q11_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.x11_1;
      if (currentDataEnd >= gapStart)
        $this.x11_1 = currentDataEnd + size | 0;
      $this.y11_1 = gapStart + size | 0;
      $this.z11_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.r11_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.p()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.s11_1);
      }
      $this.u11_1 = start;
      var previousGapLen = $this.v11_1;
      var newGapLen = previousGapLen + len | 0;
      $this.v11_1 = newGapLen;
      var slotsGapOwner = $this.a12_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.a12_1 = Math.max(start, b);
      }
      if ($this.i12_1 >= $this.u11_1) {
        $this.i12_1 = $this.i12_1 - len | 0;
      }
      var parent = $this.j12_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.s11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.i1l(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.l1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.z11_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.y11_1 = start;
      $this.z11_1 = gapLen + len | 0;
      fill_0($this.q11_1, null, start, start + len | 0);
      var currentDataEnd = $this.x11_1;
      if (currentDataEnd >= start)
        $this.x11_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.p11_1.length && isNode($this.p11_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.q11_1[dataIndexToDataAddress($this, nodeIndex($this.p11_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.v11_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.r11_1, previousGapStart, size);
      $l$loop_0: while (index < $this.r11_1.i()) {
        var anchor = $this.r11_1.o(index);
        var location = anchor.b17_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.b17_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.r11_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.r11_1.i()) {
        var anchor_0 = $this.r11_1.o(index_0);
        var location_0 = anchor_0.b17_1;
        if (location_0 >= 0) {
          anchor_0.b17_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.v11_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.r11_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.r11_1.i() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.r11_1.o(index);
      var location = $this.i16(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.b17_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.z3(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.r11_1.a1(removeAnchorStart, removeAnchorEnd).c1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.q1k();
    var index = locationOf($this.r11_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.r11_1.i()) {
        var anchor = $this.r11_1.o(index);
        var location = $this.i16(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.d(anchor);
          $this.r11_1.f1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.o(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.i16(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.u11_1) {
          item.b17_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.b17_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.r11_1, newAnchorIndex, groupsSize);
        $this.r11_1.e1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.p11_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.u11_1 ? index : index + $this.v11_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.y11_1 ? dataIndex : dataIndex + $this.z11_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.p11_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.q11_1.length - $this.z11_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.z11_1, $this.q11_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.q11_1.length - $this.z11_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.z11_1, $this.q11_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.y11_1, $this.z11_1, $this.q11_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.q1k() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.q1k() + index | 0) - -2 | 0;
  }
  function SlotWriter(table) {
    this.o11_1 = table;
    this.p11_1 = this.o11_1.kz_1;
    this.q11_1 = this.o11_1.mz_1;
    this.r11_1 = this.o11_1.sz_1;
    this.s11_1 = this.o11_1.tz_1;
    this.t11_1 = this.o11_1.uz_1;
    this.u11_1 = this.o11_1.lz_1;
    this.v11_1 = (this.p11_1.length / 5 | 0) - this.o11_1.lz_1 | 0;
    this.w11_1 = 0;
    this.x11_1 = 0;
    this.y11_1 = this.o11_1.nz_1;
    this.z11_1 = this.q11_1.length - this.o11_1.nz_1 | 0;
    this.a12_1 = this.o11_1.lz_1;
    this.b12_1 = 0;
    this.c12_1 = 0;
    this.d12_1 = new IntStack();
    this.e12_1 = new IntStack();
    this.f12_1 = new IntStack();
    this.g12_1 = null;
    this.h12_1 = 0;
    this.i12_1 = this.o11_1.lz_1;
    this.j12_1 = -1;
    this.k12_1 = false;
    this.l12_1 = null;
  }
  protoOf(SlotWriter).v1a = function () {
    return this.q11_1.length - this.z11_1 | 0;
  };
  protoOf(SlotWriter).x19 = function () {
    return this.h12_1 < this.i12_1 && isNode(this.p11_1, groupIndexToAddress(this, this.h12_1));
  };
  protoOf(SlotWriter).j1l = function () {
    return !(this.s11_1 == null);
  };
  protoOf(SlotWriter).k1l = function () {
    return !(this.t11_1 == null);
  };
  protoOf(SlotWriter).n15 = function (index) {
    return isNode(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).o15 = function (index) {
    return nodeCount(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v12 = function (index) {
    return key(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).w12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.p11_1, address) ? this.q11_1[objectKeyIndex(this.p11_1, address)] : null;
  };
  protoOf(SlotWriter).r14 = function (index) {
    return groupSize(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).u12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.p11_1, address) ? this.q11_1[auxIndex(this.p11_1, this, address)] : Companion_getInstance().j13_1;
  };
  protoOf(SlotWriter).l1l = function (index) {
    return index > this.j12_1 && index < this.i12_1 || (this.j12_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).m1l = function (index) {
    return this.n1l(index, this.h12_1);
  };
  protoOf(SlotWriter).n1l = function (index, group) {
    var tmp;
    if (group === this.j12_1) {
      tmp = this.i12_1;
    } else if (group > this.d12_1.p1l(0)) {
      tmp = group + this.r14(group) | 0;
    } else {
      var openIndex = this.d12_1.o1l(group);
      tmp = openIndex < 0 ? group + this.r14(group) | 0 : (_get_capacity__a9k9f3(this) - this.v11_1 | 0) - this.e12_1.m15(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).i17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.p11_1, address) ? this.q11_1[dataIndexToDataAddress(this, nodeIndex(this.p11_1, this, address))] : null;
  };
  protoOf(SlotWriter).q1l = function (anchor) {
    return this.i17(anchor.r1l(this));
  };
  protoOf(SlotWriter).s12 = function (index) {
    return parent(this.p11_1, this, index);
  };
  protoOf(SlotWriter).e13 = function (normalClose) {
    this.k12_1 = true;
    if (normalClose && this.d12_1.p()) {
      moveGroupGapTo(this, this.q1k());
      moveSlotGapTo(this, this.q11_1.length - this.z11_1 | 0, this.u11_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.o11_1.n1k(this, this.p11_1, this.u11_1, this.q11_1, this.y11_1, this.r11_1, this.s11_1, this.t11_1);
  };
  protoOf(SlotWriter).s1l = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.h12_1 = 0;
    this.i12_1 = _get_capacity__a9k9f3(this) - this.v11_1 | 0;
    this.w11_1 = 0;
    this.x11_1 = 0;
    this.c12_1 = 0;
  };
  protoOf(SlotWriter).t19 = function (value) {
    if (this.b12_1 > 0 && !(this.w11_1 === this.y11_1)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      // Inline function 'kotlin.also' call
      var tmp0_elvis_lhs = this.g12_1;
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.g12_1 = this_0;
      var key = this.j12_1;
      var tmp0_elvis_lhs_0 = this_0.o(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        var this_1 = new MutableObjectList();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.er(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.d(value);
      return Companion_getInstance().j13_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).t1l = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.w11_1;
    var previousCurrentSlotEnd = this.x11_1;
    var anchorIndex = this.i16(anchor);
    var slotIndex = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.w11_1 = slotIndex;
    this.x11_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.q11_1[slotIndex] = value;
    this.w11_1 = previousCurrentSlot;
    this.x11_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).u1l = function (count) {
    runtimeCheck(count > 0);
    var parent = this.j12_1;
    var groupSlotStart = slotIndex(this.p11_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.w11_1;
    if (currentSlot >= groupSlotStart) {
      this.w11_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).d1l = function (value) {
    var address = groupIndexToAddress(this, this.h12_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.p11_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.q11_1[dataIndexToDataAddress(this, auxIndex(this.p11_1, this, address))] = value;
  };
  protoOf(SlotWriter).h1a = function (sourceInformation) {
    if (this.b12_1 > 0) {
      groupSourceInformationFor(this, this.j12_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).j1a = function (key, value) {
    if (this.b12_1 > 0) {
      var tmp0_safe_receiver = this.t11_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.v12(this.j12_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.j12_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.v1l(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).l1a = function () {
    if (this.b12_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.j12_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w1l(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).e1l = function (value) {
    return updateNodeOfGroup(this, this.h12_1, value);
  };
  protoOf(SlotWriter).x1l = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.r1l(this), value);
  };
  protoOf(SlotWriter).a1l = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w11_1 <= this.x11_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.q11_1[dataIndexToDataAddress(this, this.w11_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).y1l = function (index, value) {
    return this.z1l(this.h12_1, index, value);
  };
  protoOf(SlotWriter).a1m = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.p11_1, this, address);
    var slotsEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).z1l = function (group, index, value) {
    var slotsIndex = this.a1m(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.q11_1[slotAddress];
    this.q11_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).z1k = function () {
    if (this.b12_1 > 0) {
      insertSlots(this, 1, this.j12_1);
    }
    var tmp = this.q11_1;
    var tmp1 = this.w11_1;
    this.w11_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).w1f = function (anchor, index) {
    return this.b1m(this.i16(anchor), index);
  };
  protoOf(SlotWriter).b1m = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.p11_1, this, address);
    var slotsEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().j13_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.q11_1[slotAddress];
  };
  protoOf(SlotWriter).c1l = function (groupIndex) {
    return slotIndex(this.p11_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).c1m = function (groupIndex) {
    return dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).x1a = function (groupIndex) {
    return dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupIndex + this.r14(groupIndex) | 0));
  };
  protoOf(SlotWriter).y1k = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.h12_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.j12_1 && index <= this.i12_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.j12_1 + '-' + this.i12_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.h12_1 = index;
    var newSlot = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, index));
    this.w11_1 = newSlot;
    this.x11_1 = newSlot;
  };
  protoOf(SlotWriter).a13 = function () {
    var newGroup = this.i12_1;
    this.h12_1 = newGroup;
    this.w11_1 = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).a14 = function () {
    var tmp1 = this.b12_1;
    this.b12_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).g15 = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.b12_1 = this.b12_1 - 1 | 0;
    if (this.b12_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.f12_1.i() === this.d12_1.i())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).h13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().j13_1, false, Companion_getInstance().j13_1);
  };
  protoOf(SlotWriter).l13 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().j13_1);
  };
  protoOf(SlotWriter).n13 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().j13_1);
  };
  protoOf(SlotWriter).m13 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).f15 = function () {
    var inserting = this.b12_1 > 0;
    var currentGroup = this.h12_1;
    var currentGroupEnd = this.i12_1;
    var groupIndex = this.j12_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.c12_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.p11_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.g12_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.o(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.gs_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.hs_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var tmp = content[i];
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.fr(groupIndex);
      }
      updateGroupSize(this.p11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.p11_1, groupAddress, newNodes);
      this.c12_1 = this.f12_1.k11() + (isNode_0 ? 1 : newNodes) | 0;
      this.j12_1 = parent(this.p11_1, this, groupIndex);
      var nextAddress = this.j12_1 < 0 ? this.q1k() : groupIndexToAddress(this, this.j12_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.p11_1, this, nextAddress);
      this.w11_1 = newCurrentSlot;
      this.x11_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.p11_1, groupAddress);
      var oldNodes = nodeCount(this.p11_1, groupAddress);
      updateGroupSize(this.p11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.p11_1, groupAddress, newNodes);
      var newParent = this.d12_1.k11();
      restoreCurrentGroupEnd(this);
      this.j12_1 = newParent;
      var groupParent = parent(this.p11_1, this, groupIndex);
      this.c12_1 = this.f12_1.k11();
      if (groupParent === newParent) {
        this.c12_1 = this.c12_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.p11_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.p11_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.p11_1, currentAddress, nodeCount(this.p11_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.p11_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.p11_1, this, current);
          }
        }
        this.c12_1 = this.c12_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).d1m = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.j12_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.i12_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.h12_1;
      var oldCurrentSlot = this.w11_1;
      var oldCurrentSlotEnd = this.x11_1;
      this.h12_1 = index;
      this.h13();
      this.h12_1 = oldCurrent;
      this.w11_1 = oldCurrentSlot;
      this.x11_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).e1m = function (anchor) {
    return this.d1m(anchor.r1l(this));
  };
  protoOf(SlotWriter).p12 = function () {
    var groupAddress = groupIndexToAddress(this, this.h12_1);
    var newGroup = this.h12_1 + groupSize(this.p11_1, groupAddress) | 0;
    this.h12_1 = newGroup;
    this.w11_1 = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.p11_1, groupAddress) ? 1 : nodeCount(this.p11_1, groupAddress);
  };
  protoOf(SlotWriter).b1b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.h12_1;
    var oldSlot = this.w11_1;
    var dataStart = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.p12();
    var tmp0_safe_receiver = sourceInformationOf(this, this.j12_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.i1l(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.f1m(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.l12_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.gu() && tmp1_safe_receiver.z18() >= oldGroup) {
        tmp1_safe_receiver.g1l();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.h12_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.w11_1 - dataStart | 0, oldGroup - 1 | 0);
    this.h12_1 = oldGroup;
    this.w11_1 = oldSlot;
    this.c12_1 = this.c12_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).g1m = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.h12_1;
    var parent = this.j12_1;
    var parentEnd = this.i12_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.p11_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.p11_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, this.h12_1));
    var dataStart = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.h12_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.p11_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.q11_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.y11_1;
    var slotsGapLen = this.z11_1;
    var slotsCapacity = this.q11_1.length;
    var slotsGapOwner = this.a12_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.i12_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).h1m = function (anchor, offset, writer) {
    runtimeCheck(writer.b12_1 > 0);
    runtimeCheck(this.b12_1 === 0);
    runtimeCheck(anchor.y1a());
    var location = this.i16(anchor) + offset | 0;
    var currentGroup = this.h12_1;
    runtimeCheck(currentGroup <= location ? location < this.i12_1 : false);
    var parent = this.s12(location);
    var size = this.r14(location);
    var nodes = this.n15(location) ? 1 : this.o15(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.p11_1, currentAddress, groupSize(this.p11_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.p11_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.p11_1, currentAddress, nodeCount(this.p11_1, currentAddress) - nodes | 0);
        }
      }
      current = this.s12(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.c12_1 >= nodes);
      this.c12_1 = this.c12_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).i1m = function (table, index, removeSourceGroup) {
    runtimeCheck(this.b12_1 > 0);
    if (index === 0 && this.h12_1 === 0 && this.o11_1.lz_1 === 0 && groupSize(table.kz_1, index) === table.lz_1) {
      var myGroups = this.p11_1;
      var mySlots = this.q11_1;
      var myAnchors = this.r11_1;
      var mySourceInformation = this.s11_1;
      var myCallInformation = this.t11_1;
      var groups = table.kz_1;
      var groupsSize = table.lz_1;
      var slots = table.mz_1;
      var slotsSize = table.nz_1;
      var sourceInformation = table.tz_1;
      var callInformation = table.uz_1;
      this.p11_1 = groups;
      this.q11_1 = slots;
      this.r11_1 = table.sz_1;
      this.u11_1 = groupsSize;
      this.v11_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.y11_1 = slotsSize;
      this.z11_1 = slots.length - slotsSize | 0;
      this.a12_1 = groupsSize;
      this.s11_1 = sourceInformation;
      this.t11_1 = callInformation;
      table.o1k(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.r11_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.z12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.e13(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).j1m = function (offset, table, index) {
    runtimeCheck(this.b12_1 <= 0 && this.r14(this.h12_1 + offset | 0) === 1);
    var previousCurrentGroup = this.h12_1;
    var previousCurrentSlot = this.w11_1;
    var previousCurrentSlotEnd = this.x11_1;
    this.y1k(offset);
    this.h13();
    this.a14();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.z12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.e13(normalClose);
    }
    var anchors = tmp;
    this.g15();
    this.f15();
    this.h12_1 = previousCurrentGroup;
    this.w11_1 = previousCurrentSlot;
    this.x11_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).t12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.r11_1;
    var effectiveSize = this.q1k();
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.u11_1 ? index : -(this.q1k() - index | 0) | 0);
      this_0.e1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).k1m = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.p11_1, groupAddress)) {
      updateMark(this.p11_1, groupAddress, true);
      if (!containsMark(this.p11_1, groupAddress)) {
        updateContainsMark(this, this.s12(group));
      }
    }
  };
  protoOf(SlotWriter).x15 = function (group, $super) {
    group = group === VOID ? this.j12_1 : group;
    var tmp;
    if ($super === VOID) {
      this.k1m(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.k1m.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).i16 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.b17_1;
    return it < 0 ? this.q1k() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.h12_1 + ' end=' + this.i12_1 + ' size = ' + this.q1k() + ' ' + ('gap=' + this.u11_1 + '-' + (this.u11_1 + this.v11_1 | 0) + ')');
  };
  protoOf(SlotWriter).i1l = function (group) {
    return (0 <= group ? group < this.q1k() : false) ? find(this.r11_1, group, this.q1k()) : null;
  };
  protoOf(SlotWriter).q1k = function () {
    return _get_capacity__a9k9f3(this) - this.v11_1 | 0;
  };
  function Anchor(loc) {
    this.b17_1 = loc;
  }
  protoOf(Anchor).y1a = function () {
    return !(this.b17_1 === -2147483648);
  };
  protoOf(Anchor).w19 = function (slots) {
    return slots.i16(this);
  };
  protoOf(Anchor).r1l = function (writer) {
    return writer.i16(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.b17_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.u1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.i() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.o(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.v1k_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.u1k_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.u1k_1 = groups;
    groups.d(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.u1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.r1k_1 = key;
    this.s1k_1 = sourceInformation;
    this.t1k_1 = dataStartOffset;
    this.u1k_1 = null;
    this.v1k_1 = false;
    this.w1k_1 = 0;
  }
  protoOf(GroupSourceInformation).v1l = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).w1l = function (dataOffset) {
    openInformation(this).l1m(dataOffset);
  };
  protoOf(GroupSourceInformation).b1l = function (writer, group) {
    add(openInformation(this), writer.t12(group));
  };
  protoOf(GroupSourceInformation).m1m = function (table, group) {
    add(openInformation(this), table.t12(group));
  };
  protoOf(GroupSourceInformation).x1k = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.u1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.u1k_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.i1l(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.i();
          while (index < size) {
            var value = groups.o(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.e1(index_0, writer.t12(group));
  };
  protoOf(GroupSourceInformation).l1m = function (dataOffset) {
    this.v1k_1 = true;
    this.w1k_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).f1m = function (anchor) {
    var groups = this.u1k_1;
    if (!(groups == null)) {
      var index = groups.i() - 1 | 0;
      while (index >= 0) {
        var item = groups.o(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.f1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.f1m(anchor)) {
              groups.f1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.p()) {
        this.u1k_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.x10_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().j13_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.x10_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().j13_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.x10_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.u10_1 = table;
    this.v10_1 = this.u10_1.kz_1;
    this.w10_1 = this.u10_1.lz_1;
    this.x10_1 = this.u10_1.mz_1;
    this.y10_1 = this.u10_1.nz_1;
    this.z10_1 = null;
    this.a11_1 = false;
    this.b11_1 = 0;
    this.c11_1 = this.w10_1;
    this.d11_1 = -1;
    this.e11_1 = new IntStack();
    this.f11_1 = 0;
    this.g11_1 = 0;
    this.h11_1 = 0;
    this.i11_1 = false;
  }
  protoOf(SlotReader).i = function () {
    return this.w10_1;
  };
  protoOf(SlotReader).s12 = function (index) {
    return parentAnchor(this.v10_1, index);
  };
  protoOf(SlotReader).x19 = function () {
    return isNode(this.v10_1, this.b11_1);
  };
  protoOf(SlotReader).n15 = function (index) {
    return isNode(this.v10_1, index);
  };
  protoOf(SlotReader).o15 = function (index) {
    return nodeCount(this.v10_1, index);
  };
  protoOf(SlotReader).i17 = function (index) {
    return isNode(this.v10_1, index) ? node(this.v10_1, this, index) : null;
  };
  protoOf(SlotReader).x14 = function () {
    return this.i15() || this.b11_1 === this.c11_1;
  };
  protoOf(SlotReader).i15 = function () {
    return this.f11_1 > 0;
  };
  protoOf(SlotReader).n1m = function () {
    return groupSize(this.v10_1, this.b11_1);
  };
  protoOf(SlotReader).r14 = function (index) {
    return groupSize(this.v10_1, index);
  };
  protoOf(SlotReader).w14 = function () {
    return this.c11_1;
  };
  protoOf(SlotReader).w13 = function () {
    var tmp;
    if (this.b11_1 < this.c11_1) {
      tmp = key(this.v10_1, this.b11_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).v12 = function (index) {
    return key(this.v10_1, index);
  };
  protoOf(SlotReader).p19 = function () {
    return this.g11_1 - slotAnchor(this.v10_1, this.d11_1) | 0;
  };
  protoOf(SlotReader).p15 = function (index) {
    return hasObjectKey(this.v10_1, index);
  };
  protoOf(SlotReader).s18 = function () {
    return this.b11_1 < this.c11_1 && hasObjectKey(this.v10_1, this.b11_1);
  };
  protoOf(SlotReader).y13 = function () {
    return this.b11_1 < this.c11_1 ? objectKey(this.v10_1, this, this.b11_1) : null;
  };
  protoOf(SlotReader).w12 = function (index) {
    return objectKey(this.v10_1, this, index);
  };
  protoOf(SlotReader).g13 = function () {
    return this.b11_1 < this.c11_1 ? aux(this.v10_1, this, this.b11_1) : 0;
  };
  protoOf(SlotReader).u12 = function (index) {
    return aux(this.v10_1, this, index);
  };
  protoOf(SlotReader).g18 = function (index) {
    return hasMark(this.v10_1, index);
  };
  protoOf(SlotReader).q17 = function (index) {
    return containsMark(this.v10_1, index);
  };
  protoOf(SlotReader).r15 = function () {
    return this.d11_1 >= 0 ? nodeCount(this.v10_1, this.d11_1) : 0;
  };
  protoOf(SlotReader).z14 = function () {
    return this.h11_1 - this.g11_1 | 0;
  };
  protoOf(SlotReader).r17 = function (group, index) {
    var start = slotAnchor(this.v10_1, group);
    var next = group + 1 | 0;
    var end = next < this.w10_1 ? dataAnchor(this.v10_1, next) : this.y10_1;
    var address = start + index | 0;
    return address < end ? this.x10_1[address] : Companion_getInstance().j13_1;
  };
  protoOf(SlotReader).h = function () {
    if (this.f11_1 > 0 || this.g11_1 >= this.h11_1) {
      this.i11_1 = false;
      return Companion_getInstance().j13_1;
    }
    this.i11_1 = true;
    var tmp1 = this.g11_1;
    this.g11_1 = tmp1 + 1 | 0;
    return this.x10_1[tmp1];
  };
  protoOf(SlotReader).k13 = function () {
    this.f11_1 = this.f11_1 + 1 | 0;
  };
  protoOf(SlotReader).e15 = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.f11_1 = this.f11_1 - 1 | 0;
  };
  protoOf(SlotReader).j11 = function () {
    this.a11_1 = true;
    this.u10_1.m1k(this, this.z10_1);
  };
  protoOf(SlotReader).h13 = function () {
    if (this.f11_1 <= 0) {
      var parent = this.d11_1;
      var currentGroup = this.b11_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.v10_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.z10_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1(this.t12(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.m1m(this.u10_1, currentGroup);
      }
      var currentSlotStack = this.e11_1;
      var currentSlot = this.g11_1;
      var currentEndSlot = this.h11_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.a10(-1);
      } else {
        currentSlotStack.a10(currentSlot);
      }
      this.d11_1 = currentGroup;
      this.c11_1 = currentGroup + groupSize(this.v10_1, currentGroup) | 0;
      this.b11_1 = currentGroup + 1 | 0;
      this.g11_1 = slotAnchor(this.v10_1, currentGroup);
      this.h11_1 = currentGroup >= (this.w10_1 - 1 | 0) ? this.y10_1 : dataAnchor(this.v10_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).i13 = function () {
    if (this.f11_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.v10_1, this.b11_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.h13();
    }
  };
  protoOf(SlotReader).p12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.v10_1, this.b11_1) ? 1 : nodeCount(this.v10_1, this.b11_1);
    this.b11_1 = this.b11_1 + groupSize(this.v10_1, this.b11_1) | 0;
    return count;
  };
  protoOf(SlotReader).a13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.b11_1 = this.c11_1;
    this.g11_1 = 0;
    this.h11_1 = 0;
  };
  protoOf(SlotReader).k14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.b11_1 = index;
    var parent = index < this.w10_1 ? parentAnchor(this.v10_1, index) : -1;
    this.d11_1 = parent;
    if (parent < 0)
      this.c11_1 = this.w10_1;
    else
      this.c11_1 = parent + groupSize(this.v10_1, parent) | 0;
    this.g11_1 = 0;
    this.h11_1 = 0;
  };
  protoOf(SlotReader).l15 = function (index) {
    var newCurrentEnd = index + groupSize(this.v10_1, index) | 0;
    var current = this.b11_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.d11_1 = index;
    this.c11_1 = newCurrentEnd;
    this.g11_1 = 0;
    this.h11_1 = 0;
  };
  protoOf(SlotReader).c15 = function () {
    if (this.f11_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.b11_1 === this.c11_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.v10_1, this.d11_1);
      this.d11_1 = parent;
      this.c11_1 = parent < 0 ? this.w10_1 : parent + groupSize(this.v10_1, parent) | 0;
      var currentSlotStack = this.e11_1;
      var newCurrentSlot = currentSlotStack.k11();
      if (newCurrentSlot < 0) {
        this.g11_1 = 0;
        this.h11_1 = 0;
      } else {
        this.g11_1 = newCurrentSlot;
        this.h11_1 = parent >= (this.w10_1 - 1 | 0) ? this.y10_1 : dataAnchor(this.v10_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).x13 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.f11_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.b11_1;
    while (childIndex < this.c11_1) {
      var tmp = key(this.v10_1, childIndex);
      var tmp_0 = objectKey(this.v10_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.v10_1, childIndex) ? 1 : nodeCount(this.v10_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.d(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.v10_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.b11_1 + ', key=' + this.w13() + ', ' + ('parent=' + this.d11_1 + ', end=' + this.c11_1 + ')');
  };
  protoOf(SlotReader).t12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.u10_1.sz_1;
    var effectiveSize = this.w10_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.e1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.o(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.o(mid).b17_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.o1m_1.rz_1 === $this.r1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.o1m_1 = table;
    this.p1m_1 = end;
    this.q1m_1 = start;
    this.r1m_1 = this.o1m_1.rz_1;
    if (this.o1m_1.qz_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).g = function () {
    return this.q1m_1 < this.p1m_1;
  };
  protoOf(GroupIterator).h = function () {
    validateRead(this);
    var group = this.q1m_1;
    this.q1m_1 = this.q1m_1 + groupSize(this.o1m_1.kz_1, group) | 0;
    return new SlotTableGroup(this.o1m_1, group, this.r1m_1);
  };
  function validateRead_0($this) {
    if (!($this.s1m_1.rz_1 === $this.u1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.rz_1 : version;
    this.s1m_1 = table;
    this.t1m_1 = group;
    this.u1m_1 = version;
  }
  protoOf(SlotTableGroup).f = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.s1m_1.p1k(this.t1m_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.s1m_1, this.t1m_1, tmp0_safe_receiver, new AnchoredGroupPath(this.t1m_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.s1m_1, this.t1m_1 + 1 | 0, this.t1m_1 + groupSize(this.s1m_1.kz_1, this.t1m_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.o(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.er(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.qq(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.f1l_1 = list;
  }
  protoOf(PrioritySet).h1l = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f1l_1.p()) {
      tmp = this.f1l_1.o(0) === value || this.f1l_1.o(this.f1l_1.i() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.f1l_1.i();
    this.f1l_1.d(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.f1l_1.o(parent);
      if (value > parentValue) {
        this.f1l_1.d1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.f1l_1.d1(index, value);
  };
  protoOf(PrioritySet).gu = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.f1l_1.p();
  };
  protoOf(PrioritySet).z18 = function () {
    return first(this.f1l_1);
  };
  protoOf(PrioritySet).g1l = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f1l_1.i() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.f1l_1.o(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.f1l_1.p()) {
        tmp = this.f1l_1.o(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.f1l_1.d1(0, last(this.f1l_1));
      this.f1l_1.f1(this.f1l_1.i() - 1 | 0);
      var index = 0;
      var size = this.f1l_1.i();
      var max = this.f1l_1.i() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.f1l_1.o(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.f1l_1.o(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.f1l_1.o(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.f1l_1.d1(index, rightValue);
              this.f1l_1.d1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.f1l_1.d1(index, leftValue);
          this.f1l_1.d1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.b14_1 = key;
    this.c14_1 = objectKey;
    this.d14_1 = location;
    this.e14_1 = nodes;
    this.f14_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.v1m_1 = table;
    this.w1m_1 = parent;
    this.x1m_1 = group;
    this.y1m_1 = path;
    this.z1m_1 = this.v1m_1.rz_1;
    this.a1n_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).g = function () {
    var tmp0_safe_receiver = this.x1m_1.u1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.a1n_1 < tmp0_safe_receiver.i();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp2_safe_receiver = this.x1m_1.u1k_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.a1n_1;
      this.a1n_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.o(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.v1m_1, group.b17_1, this.z1m_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.v1m_1, this.w1m_1, group, new RelativeGroupPath(this.y1m_1, this.a1n_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.b1n_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.c1n_1 = table;
    this.d1n_1 = parent;
    this.e1n_1 = sourceInformation;
    this.f1n_1 = identityPath;
    this.g1n_1 = this.e1n_1.r1k_1;
    this.h1n_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).f = function () {
    return new SourceInformationGroupIterator(this.c1n_1, this.d1n_1, this.e1n_1, this.f1n_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.i1n_1 = parent;
    this.j1n_1 = index;
  }
  function search$accessor$145qfty(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).l1n = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).u1f = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.l1n(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.o1n_1 = myValue;
  }
  protoOf(StateStateRecord).p1n = function (value) {
    var tmp = this;
    tmp.o1n_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).o1n_1;
  };
  protoOf(StateStateRecord).q1n = function () {
    return new StateStateRecord(this.o1n_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.s1n_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_11.w1n()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.u1n_1 = 1;
      tmp_0.v1n_1 = this_1;
    }
    tmp.t1n_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).i1f = function () {
    return this.s1n_1;
  };
  protoOf(SnapshotMutableStateImpl).tn = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.t1n_1;
    var it = current(this_0);
    if (!this.i1f().u1f(it.o1n_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.t1n_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_11.xv();
      overwritableRecord(this_1, this, snapshot, it).o1n_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).i1 = function () {
    return readable_0(this.t1n_1, this).o1n_1;
  };
  protoOf(SnapshotMutableStateImpl).x1n = function () {
    return this.t1n_1;
  };
  protoOf(SnapshotMutableStateImpl).y1n = function (value) {
    var tmp = this;
    tmp.t1n_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).z1n = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.i1f().u1f(currentRecord.o1n_1, appliedRecord.o1n_1)) {
      tmp = current;
    } else {
      var merged = this.i1f().k1n(previousRecord.o1n_1, currentRecord.o1n_1, appliedRecord.o1n_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.q1n();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).o1n_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.t1n_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.o1n_1) + ')@' + hashCode(this);
  };
  function SnapshotThreadLocal() {
    this.j1f_1 = new AtomicReference(get_emptyThreadMap());
    this.k1f_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).gj = function () {
    var tmp = this.j1f_1.gj().d1o(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).l1f = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k1f_1;
    var current = this.j1f_1.gj();
    if (current.e1o(key, value))
      return Unit_instance;
    this.j1f_1.u1e(current.f1o(key, value));
  };
  function IntStack() {
    this.yz_1 = new Int32Array(10);
    this.zz_1 = 0;
  }
  protoOf(IntStack).i = function () {
    return this.zz_1;
  };
  protoOf(IntStack).a10 = function (value) {
    if (this.zz_1 >= this.yz_1.length) {
      this.yz_1 = copyOf(this.yz_1, imul(this.yz_1.length, 2));
    }
    var tmp = this.yz_1;
    var tmp1 = this.zz_1;
    this.zz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).k11 = function () {
    var tmp = this.yz_1;
    this.zz_1 = this.zz_1 - 1 | 0;
    return tmp[this.zz_1];
  };
  protoOf(IntStack).p1l = function (default_0) {
    return this.zz_1 > 0 ? this.z18() : default_0;
  };
  protoOf(IntStack).z18 = function () {
    return this.yz_1[this.zz_1 - 1 | 0];
  };
  protoOf(IntStack).n14 = function () {
    return this.yz_1[this.zz_1 - 2 | 0];
  };
  protoOf(IntStack).m15 = function (index) {
    return this.yz_1[index];
  };
  protoOf(IntStack).p = function () {
    return this.zz_1 === 0;
  };
  protoOf(IntStack).c1 = function () {
    this.zz_1 = 0;
  };
  protoOf(IntStack).o1l = function (value) {
    var inductionVariable = 0;
    var last = this.zz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.yz_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.l11_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).i = function () {
    return this.l11_1.i();
  };
  protoOf(Stack).m14 = function (value) {
    return this.l11_1.d(value);
  };
  protoOf(Stack).k11 = function () {
    return this.l11_1.f1(this.i() - 1 | 0);
  };
  protoOf(Stack).z18 = function () {
    return this.l11_1.o(this.i() - 1 | 0);
  };
  protoOf(Stack).m15 = function (index) {
    return this.l11_1.o(index);
  };
  protoOf(Stack).p = function () {
    return this.l11_1.p();
  };
  protoOf(Stack).gu = function () {
    return !this.p();
  };
  protoOf(Stack).c1 = function () {
    return this.l11_1.c1();
  };
  protoOf(Stack).h4 = function () {
    var tmp = 0;
    var tmp_0 = this.l11_1.i();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.l11_1.o(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.g1o_1;
    current$factory();
    return this_0.i1();
  }
  function LazyValueHolder(valueProducer) {
    this.g1o_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).h1f = function (map) {
    return _get_current__qcrdxk(this);
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.n1a_1 = new Operations();
  }
  protoOf(ChangeList).p = function () {
    return this.n1a_1.p();
  };
  protoOf(ChangeList).gu = function () {
    return this.n1a_1.gu();
  };
  protoOf(ChangeList).c1 = function () {
    this.n1a_1.c1();
  };
  protoOf(ChangeList).b1d = function (applier, slots, rememberManager) {
    return this.n1a_1.p1o(applier, slots, rememberManager);
  };
  protoOf(ChangeList).q1o = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).w1o = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).x1o = function (value, anchor, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).y1o = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).z1o = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).a1p = function () {
    this.n1a_1.b1p(ResetSlots_getInstance());
  };
  protoOf(ChangeList).c1p = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).d1p = function () {
    this.n1a_1.b1p(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).e1p = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).f1p = function () {
    this.n1a_1.b1p(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).g1p = function () {
    this.n1a_1.b1p(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).h1p = function () {
    this.n1a_1.b1p(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).i1p = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).j1p = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).k1p = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).l1p = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).m1p = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.n1a_1.b1p(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).n1p = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).o1p = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).p1p = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).q1p = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).r1p = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).s1p = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1a_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.r1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.s1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.n1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.b7(', ');
              }
              this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.t1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.o1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.b7(', ');
              }
              this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).t1p = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).u1p = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.p()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1a_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.r1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.s1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.n1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.b7(', ');
              }
              this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.t1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.o1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.b7(', ');
              }
              this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).v1p = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).w1p = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1a_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).x1p = function () {
    this.n1a_1.b1p(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).y1p = function (changeList, effectiveNodeIndex) {
    if (changeList.gu()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1a_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.r1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.s1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.n1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.b7(', ');
              }
              this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.t1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.o1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.b7(', ');
              }
              this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.h10_1.zy_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.d18();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.j10_1 && $this.l10_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.i10_1.d1p();
      $this.j10_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.i10_1.e1p(anchor);
    $this.j10_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).d11_1 : _get_reader__fd8dw8($this).b11_1;
    var distance = location - $this.m10_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.i10_1.q1p(distance);
      $this.m10_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.s10_1 > 0) {
      if ($this.p10_1 >= 0) {
        realizeRemoveNode($this, $this.p10_1, $this.s10_1);
        $this.p10_1 = -1;
      } else {
        realizeMoveNode($this, $this.r10_1, $this.q10_1, $this.s10_1);
        $this.q10_1 = -1;
        $this.r10_1 = -1;
      }
      $this.s10_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.i10_1.o1p(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.i10_1.p1p(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.n10_1 > 0) {
      $this.i10_1.r1p($this.n10_1);
      $this.n10_1 = 0;
    }
    if ($this.o10_1.gu()) {
      $this.i10_1.s1p($this.o10_1.h4());
      $this.o10_1.c1();
    }
  }
  function Companion_4() {
    this.z1p_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.h10_1 = composer;
    this.i10_1 = changeList;
    this.j10_1 = false;
    this.k10_1 = new IntStack();
    this.l10_1 = true;
    this.m10_1 = 0;
    this.n10_1 = 0;
    this.o10_1 = new Stack();
    this.p10_1 = -1;
    this.q10_1 = -1;
    this.r10_1 = -1;
    this.s10_1 = 0;
  }
  protoOf(ComposerChangeListWriter).j14 = function (location) {
    this.m10_1 = this.m10_1 + (location - _get_reader__fd8dw8(this).b11_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).o16 = function (location) {
    this.m10_1 = location;
  };
  protoOf(ComposerChangeListWriter).d18 = function () {
    if (_get_reader__fd8dw8(this).i() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.d11_1;
      if (!(this.k10_1.p1l(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.t12(location);
          this.k10_1.a10(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).s19 = function () {
    return (_get_reader__fd8dw8(this).d11_1 - this.m10_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).v19 = function (value) {
    this.i10_1.q1o(value);
  };
  protoOf(ComposerChangeListWriter).q19 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.i10_1.w1o(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).r19 = function (value, anchor, groupSlotIndex) {
    this.i10_1.x1o(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).o19 = function (anchor, value) {
    this.i10_1.y1o(anchor, value);
  };
  protoOf(ComposerChangeListWriter).a15 = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.i10_1.z1o(count);
    }
  };
  protoOf(ComposerChangeListWriter).a16 = function () {
    this.i10_1.a1p();
  };
  protoOf(ComposerChangeListWriter).f13 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.i10_1.c1p(data);
  };
  protoOf(ComposerChangeListWriter).t10 = function () {
    if (this.j10_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.i10_1.f1p();
      this.j10_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).b15 = function () {
    var location = _get_reader__fd8dw8(this).d11_1;
    var currentStartedGroup = this.k10_1.p1l(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.k10_1.p1l(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.k10_1.k11();
      this.i10_1.f1p();
    }
  };
  protoOf(ComposerChangeListWriter).q16 = function () {
    this.i10_1.g1p();
  };
  protoOf(ComposerChangeListWriter).l17 = function () {
    pushSlotEditingOperationPreamble(this);
    this.i10_1.h1p();
    this.m10_1 = this.m10_1 + _get_reader__fd8dw8(this).n1m() | 0;
  };
  protoOf(ComposerChangeListWriter).k17 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.i10_1.i1p(anchor, from);
  };
  protoOf(ComposerChangeListWriter).j17 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.i10_1.j1p(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).l14 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.i10_1.k1p(offset);
  };
  protoOf(ComposerChangeListWriter).c1a = function (action, composition) {
    this.i10_1.l1p(action, composition);
  };
  protoOf(ComposerChangeListWriter).c19 = function (node) {
    pushApplierOperationPreamble(this);
    this.i10_1.m1p(node);
  };
  protoOf(ComposerChangeListWriter).f19 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.i10_1.n1p(value, block);
  };
  protoOf(ComposerChangeListWriter).p14 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.p10_1 === nodeIndex) {
        this.s10_1 = this.s10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.p10_1 = nodeIndex;
        this.s10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).t14 = function (from, to, count) {
    if (count > 0) {
      if (this.s10_1 > 0 && this.q10_1 === (from - this.s10_1 | 0) && this.r10_1 === (to - this.s10_1 | 0)) {
        this.s10_1 = this.s10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.q10_1 = from;
        this.r10_1 = to;
        this.s10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).m17 = function () {
    pushPendingUpsAndDowns(this);
    if (this.j10_1) {
      this.q16();
      this.t10();
    }
  };
  protoOf(ComposerChangeListWriter).v14 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).f18 = function (nodeIndex, group) {
    this.v14();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).n15(group) ? 1 : _get_reader__fd8dw8(this).o15(group);
    if (nodeCount > 0) {
      this.p14(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).y14 = function () {
    realizeNodeMovementOperations(this);
    if (this.o10_1.gu()) {
      this.o10_1.k11();
    } else {
      this.n10_1 = this.n10_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).q15 = function (node) {
    realizeNodeMovementOperations(this);
    this.o10_1.m14(node);
  };
  protoOf(ComposerChangeListWriter).j16 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.i10_1.t1p(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).m16 = function (nodes, effectiveNodeIndex) {
    this.i10_1.u1p(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).n16 = function (resolvedState, parentContext, from, to) {
    this.i10_1.v1p(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).e18 = function (composition, parentContext, reference) {
    this.i10_1.w1p(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).r16 = function () {
    this.i10_1.x1p();
    this.m10_1 = 0;
  };
  protoOf(ComposerChangeListWriter).p16 = function (other, effectiveNodeIndex) {
    this.i10_1.y1p(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).o17 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.k10_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).p17 = function () {
    this.j10_1 = false;
    this.k10_1.c1();
    this.m10_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.m11_1 = new Operations();
    this.n11_1 = new Operations();
  }
  protoOf(FixupList).p = function () {
    return this.m11_1.p();
  };
  protoOf(FixupList).c1 = function () {
    this.n11_1.c1();
    this.m11_1.c1();
  };
  protoOf(FixupList).a1q = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.n11_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.m11_1.p1o(applier, slots, rememberManager);
  };
  protoOf(FixupList).a19 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m11_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.n11_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.r1o(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.n1o_1 === createExpectedArgMask(this_3, operation_0.s1o_1) && this_3.o1o_1 === createExpectedArgMask(this_3, operation_0.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.n1o_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.b7(', ');
            }
            this_4.b7(operation_0.u1o(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.o1o_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.b7(', ');
            }
            this_5.b7(operation_0.v1o(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).d15 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.n11_1.gu()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.n11_1.b1q(this.m11_1);
  };
  protoOf(FixupList).g19 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m11_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.r1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.n1o_1 === createExpectedArgMask(this_0, operation.s1o_1) && this_0.o1o_1 === createExpectedArgMask(this_0, operation.t1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.s1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.n1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.b7(', ');
            }
            this_1.b7(operation.u1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.t1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.o1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.b7(', ');
            }
            this_2.b7(operation.v1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.f1q(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.bw();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.j1q(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.aw(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.y1k(_this__u8e3s4.f1q(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.m1d(_this__u8e3s4.j1q(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.j1q(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1d(value.i19_1);
    }
    slots.t1l(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.f1q(tmp$ret$0);
    var slotsSize = slots.v1a();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.j12_1;
    var slotsStart = slots.c1l(groupIndex);
    var slotsEnd = slots.c1m(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = slots.q11_1[dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.z1a(value.i19_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.a1b();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.u1l(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.f1q(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1d(value.i19_1);
    }
    var previous = slots.y1l(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.v1a() - slots.a1m(slots.h12_1, groupSlotIndex) | 0;
      rememberManager.z1a(previous.i19_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.a1b();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.f1q(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1d(value.i19_1);
    }
    var groupIndex = slots.i16(anchor);
    var previous = slots.z1l(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.v1a() - slots.a1m(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.j19_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.y1a()) {
        priority = slots.i16(anchor_0);
        endRelativeAfter = slots.v1a() - slots.x1a(priority) | 0;
      }
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var priority_0 = priority;
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.z1a(previous.i19_1, endRelativeSlotOrder, priority_0, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.a1b();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.d1l(_this__u8e3s4.j1q(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.d1m(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.e1m(_this__u8e3s4.j1q(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.g1m(_this__u8e3s4.f1q(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.f15();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.a13();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.j1q(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.xv();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).cx();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.j1q(tmp$ret$1);
    block(applier.xv(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).u1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.f1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.ew(tmp, _this__u8e3s4.f1q(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).u1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.f1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.f1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.fw(tmp, tmp_0, _this__u8e3s4.f1q(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.j1q(tmp$ret$1);
    slots.a14();
    slots.i1m(insertTable, anchor.w19(insertTable), false);
    slots.g15();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).v1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.j1q(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.z12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      fixups.a1q(applier, writer, rememberManager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.e13(normalClose);
    }
    slots.a14();
    slots.i1m(insertTable, anchor.w19(insertTable), false);
    slots.g15();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.j1q(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.f1q(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.x1l(groupAnchor, node);
    nodeApplier.cw(insertIndex, node);
    nodeApplier.aw(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).u1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).u1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).v1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.f1q(tmp$ret$1);
    applier.bw();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.q1l(groupAnchor);
    nodeApplier.dw(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.s1l();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.j1q(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.j1q(tmp$ret$1);
    tmp.g1s_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.j1q(tmp$ret$0).g1s_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.o(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.dw(effectiveNodeIndex + index | 0, item);
        applier.cw(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).v1o.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.j1q(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.j1q(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.k16(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.j1m(1, resolvedState.l16_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.d16_1;
    tmp_0.v1f(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.f15();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).v1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.j1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.j1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.j1q(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).v1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).v1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).e1q = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.j1q(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1s_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.j1q(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.b1d(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.s1o_1 = ints;
    this.t1o_1 = objects;
  }
  protoOf(Operation).g1q = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).e9();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).u1o = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).v1o = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.g1q();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.i16(anchor);
    runtimeCheck(slots.h12_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.h12_1 < destination) {
      if (slots.m1l(destination)) {
        if (slots.x19()) {
          applier.aw(slots.i17(slots.h12_1));
          nodeIndex = 0;
        }
        slots.h13();
      } else
        nodeIndex = nodeIndex + slots.p12() | 0;
    }
    runtimeCheck(slots.h12_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.l1l(index)) {
      slots.a13();
      if (slots.n15(slots.j12_1)) {
        applier.bw();
      }
      slots.f15();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.j1l()) {
      slotTable.b13();
    }
    if (slots.k1l()) {
      slotTable.c13();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.z12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.a14();
      writer.l13(126665345, reference.b16_1);
      writer.x15();
      writer.t19(reference.c16_1);
      var anchors = slots.h1m(reference.f16_1, 1, writer);
      writer.p12();
      writer.f15();
      writer.g15();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.e13(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.y1f(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.z12();
      var normalClose_0 = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        Companion_instance_2.v1f(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.e13(normalClose_0);
      }
    }
    parentContext.e1f(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.h12_1;
    var current = slots.j12_1;
    while (current >= 0 && !slots.n15(current)) {
      current = slots.s12(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.n1l(original, current)) {
        if (slots.n15(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.n15(current) ? 1 : slots.o15(current)) | 0;
        current = current + slots.r14(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.r1s_1 = $composition;
    this.s1s_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).x1e = function (scope, instance) {
    var tmp = this.r1s_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1e(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.s1s_1;
      tmp2_this.g16_1 = plus_1(tmp2_this.g16_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).b1f = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).e1e = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.n1o_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).u1o(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.n1o_1 = $this$with.n1o_1 | mask;
    $this$with.j1o_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.o1o_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).v1o(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.o1o_1 = $this$with.o1o_1 | mask;
    $this$with.l1o_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.j1o_1.length;
    if (requiredSize > currentSize) {
      $this.j1o_1 = copyOf($this.j1o_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.l1o_1.length;
    if (requiredSize > currentSize) {
      $this.l1o_1 = copyOf_0($this.l1o_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.h1o_1[$this.i1o_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.k1o_1 - peekOperation($this).s1o_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.m1o_1 - peekOperation($this).t1o_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.w1s_1 = $outer;
    this.t1s_1 = 0;
    this.u1s_1 = 0;
    this.v1s_1 = 0;
  }
  protoOf(OpIterator).h = function () {
    if (this.t1s_1 >= this.w1s_1.i1o_1)
      return false;
    var op = this.x1s();
    this.u1s_1 = this.u1s_1 + op.s1o_1 | 0;
    this.v1s_1 = this.v1s_1 + op.t1o_1 | 0;
    this.t1s_1 = this.t1s_1 + 1 | 0;
    return this.t1s_1 < this.w1s_1.i1o_1;
  };
  protoOf(OpIterator).x1s = function () {
    return ensureNotNull(this.w1s_1.h1o_1[this.t1s_1]);
  };
  protoOf(OpIterator).f1q = function (parameter) {
    return this.w1s_1.j1o_1[this.u1s_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).j1q = function (parameter) {
    var tmp = this.w1s_1.l1o_1[this.v1s_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.y1s_1 = 1024;
    this.z1s_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.h1o_1 = fillArrayVal(Array(16), null);
    this.i1o_1 = 0;
    this.j1o_1 = new Int32Array(16);
    this.k1o_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.l1o_1 = fillArrayVal(Array(16), null);
    this.m1o_1 = 0;
    this.n1o_1 = 0;
    this.o1o_1 = 0;
  }
  protoOf(Operations).i = function () {
    return this.i1o_1;
  };
  protoOf(Operations).p = function () {
    return this.i() === 0;
  };
  protoOf(Operations).gu = function () {
    return !(this.i() === 0);
  };
  protoOf(Operations).c1 = function () {
    this.i1o_1 = 0;
    this.k1o_1 = 0;
    fill_0(this.l1o_1, null, 0, this.m1o_1);
    this.m1o_1 = 0;
  };
  protoOf(Operations).r1o = function (operation) {
    this.n1o_1 = 0;
    this.o1o_1 = 0;
    if (this.i1o_1 === this.h1o_1.length) {
      var resizeAmount = coerceAtMost(this.i1o_1, 1024);
      this.h1o_1 = copyOf_0(this.h1o_1, this.i1o_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.k1o_1 + operation.s1o_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.m1o_1 + operation.t1o_1 | 0);
    var tmp = this.h1o_1;
    var tmp1 = this.i1o_1;
    this.i1o_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.k1o_1 = this.k1o_1 + operation.s1o_1 | 0;
    this.m1o_1 = this.m1o_1 + operation.t1o_1 | 0;
  };
  protoOf(Operations).b1p = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.s1o_1 === 0 && operation.t1o_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.s1o_1 + ' ints and ' + operation.t1o_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.r1o(operation);
  };
  protoOf(Operations).b1q = function (other) {
    if (this.p()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.h1o_1;
    this.i1o_1 = this.i1o_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.i1o_1]);
    this.h1o_1[this.i1o_1] = null;
    other.r1o(op);
    var thisObjIdx = this.m1o_1;
    var otherObjIdx = other.m1o_1;
    // Inline function 'kotlin.repeat' call
    var times = op.t1o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.l1o_1[otherObjIdx] = this.l1o_1[thisObjIdx];
        this.l1o_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.k1o_1;
    var otherIntIdx = other.k1o_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.s1o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.j1o_1[otherIntIdx] = this.j1o_1[thisIntIdx];
        this.j1o_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.m1o_1 = this.m1o_1 - op.t1o_1 | 0;
    this.k1o_1 = this.k1o_1 - op.s1o_1 | 0;
  };
  protoOf(Operations).p1o = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.gu()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.x1s().e1q(iterator, applier, slots, rememberManager);
      }
       while (iterator.h());
    }
    this.c1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.c17_1 = content;
    this.d17_1 = null;
    this.e17_1 = size;
  }
  protoOf(MutableVector).f17 = function (element) {
    this.rq(this.e17_1 + 1 | 0);
    this.c17_1[this.e17_1] = element;
    this.e17_1 = this.e17_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).c1 = function () {
    var content = this.c17_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.e17_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.e17_1 = 0;
  };
  protoOf(MutableVector).kb = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.e17_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.c17_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).rq = function (capacity) {
    var oldContent = this.c17_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.c17_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).gu = function () {
    return !(this.e17_1 === 0);
  };
  protoOf(MutableVector).f1 = function (index) {
    var content = this.c17_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.e17_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.e17_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.e17_1 = this.e17_1 - 1 | 0;
    content[this.e17_1] = null;
    return item;
  };
  protoOf(MutableVector).g1h = function (newSize) {
    this.e17_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.i1t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).z1t = function ($this$iterator, $completion) {
    var tmp = this.a1u($this$iterator, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).s8 = function (p1, $completion) {
    return this.z1t(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 11;
            var tmp_0 = this;
            tmp_0.k1t_1 = this.i1t_1.y1c_1;
            this.l1t_1 = this.k1t_1.cu_1;
            this.w7_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.n1t_1 = this.k1t_1;
            this.o1t_1 = this.n1t_1.bu_1;
            this.p1t_1 = this.o1t_1.length - 2 | 0;
            this.q1t_1 = numberRangeToNumber(0, this.p1t_1).f();
            this.w7_1 = 2;
            continue $sm;
          case 2:
            if (!this.q1t_1.g()) {
              this.w7_1 = 9;
              continue $sm;
            }

            this.r1t_1 = this.q1t_1.h();
            this.s1t_1 = this.o1t_1[this.r1t_1];
            var this_0 = this.s1t_1;
            if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.t1t_1 = 8 - (~(this.r1t_1 - this.p1t_1 | 0) >>> 31 | 0) | 0;
              this.u1t_1 = until(0, this.t1t_1).f();
              this.w7_1 = 3;
              continue $sm;
            } else {
              this.w7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.u1t_1.g()) {
              this.w7_1 = 6;
              continue $sm;
            }

            this.v1t_1 = this.u1t_1.h();
            if (this.s1t_1.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
              this.w1t_1 = (this.r1t_1 << 3) + this.v1t_1 | 0;
              var tmp_2 = this;
              tmp_2.x1t_1 = this.w1t_1;
              var tmp_3 = this;
              var tmp_4 = this.l1t_1[this.x1t_1];
              tmp_3.y1t_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.w7_1 = 4;
              suspendResult = this.j1t_1.xb(this.y1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w7_1 = 5;
              continue $sm;
            }

          case 4:
            this.w7_1 = 5;
            continue $sm;
          case 5:
            this.s1t_1 = this.s1t_1.f2(8);
            this.w7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.t1t_1 === 8)) {
              this.m1t_1 = Unit_instance;
              this.w7_1 = 10;
              continue $sm;
            } else {
              this.w7_1 = 7;
              continue $sm;
            }

          case 7:
            this.w7_1 = 8;
            continue $sm;
          case 8:
            this.w7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.w7_1 = 1;
              continue $sm;
            }

            this.w7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 11) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).a1u = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.i1t_1, completion);
    i.j1t_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.z1t($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.y1c_1 = set;
  }
  protoOf(ScatterSetWrapper).i = function () {
    return this.y1c_1.i();
  };
  protoOf(ScatterSetWrapper).p = function () {
    return this.y1c_1.p();
  };
  protoOf(ScatterSetWrapper).f = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).lb = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.y1c_1.n(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).z = function (elements) {
    return this.lb(elements);
  };
  protoOf(ScatterSetWrapper).kb = function (element) {
    return this.y1c_1.n(element);
  };
  protoOf(ScatterSetWrapper).n = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.kb((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.a17_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).i = function () {
    return this.a17_1.i();
  };
  protoOf(ScopeMap).a1d = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.a17_1;
    var index = this_0.zs(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ps_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).d(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.d(!(value == null) ? value : THROW_CCE());
          set.d(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.os_1[insertionIndex] = key;
      this_0.ps_1[insertionIndex] = computedValue;
    } else {
      this_0.ps_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).h1d = function (key, value) {
    this.a17_1.ys(key, value);
  };
  protoOf(ScopeMap).z1c = function (element) {
    return this.a17_1.j1(element);
  };
  protoOf(ScopeMap).w1c = function (key, scope) {
    var tmp0_elvis_lhs = this.a17_1.l1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.b1(scope);
      if (removed && set.p()) {
        this.a17_1.z3(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.a17_1.z3(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).j1e = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.a17_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.ns_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var tmp = this_0.os_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ps_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.b1(scope);
                    tmp_1 = set.p();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.gr(index);
                  }
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).w1d = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.a17_1;
    var k = this_0.os_1;
    var v = this_0.ps_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.ns_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.h2(this_1.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  // Inline function 'kotlin.collections.set' call
                  var key_0 = !(key == null) ? key : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.iu();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  var value_0 = tmp_1;
                  result.y3(key_0, value_0);
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_8().c1u();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.d1u_1 = new PersistentHashMap(Companion_getInstance_7().e1u_1, 0);
  }
  protoOf(Companion_6).f1u = function () {
    var tmp = this.d1u_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.i1u_1 = node;
    this.j1u_1 = size;
  }
  protoOf(PersistentHashMap).i = function () {
    return this.j1u_1;
  };
  protoOf(PersistentHashMap).m1 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).n1 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).o1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).j1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.i1u_1.o1u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.i1u_1.p1u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).y3 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.i1u_1.q1u(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.r1u_1, this.i() + newNodeResult.s1u_1 | 0);
  };
  protoOf(PersistentHashMap).z3 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.i1u_1.t1u(tmp$ret$0, key, 0);
    if (this.i1u_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().f1u();
    }
    return new PersistentHashMap(newNode, this.i() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.u1u_1[pathIndex].a1v()) {
      return pathIndex;
    }
    if ($this.u1u_1[pathIndex].e1v()) {
      var node = $this.u1u_1[pathIndex].b1v();
      if (pathIndex === 6) {
        $this.u1u_1[pathIndex + 1 | 0].d1v(node.n1u_1, node.n1u_1.length);
      } else {
        $this.u1u_1[pathIndex + 1 | 0].d1v(node.n1u_1, imul(2, node.c1v()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.u1u_1[$this.v1u_1].a1v()) {
      return Unit_instance;
    }
    var inductionVariable = $this.v1u_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.u1u_1[i].e1v()) {
          $this.u1u_1[i].f1v();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.v1u_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.u1u_1[i - 1 | 0].f1v();
        }
        $this.u1u_1[i].d1v(Companion_getInstance_7().e1u_1.n1u_1, 0);
      }
       while (0 <= inductionVariable);
    $this.w1u_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.g())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.u1u_1 = path;
    this.v1u_1 = 0;
    this.w1u_1 = true;
    this.u1u_1[0].d1v(node.n1u_1, imul(2, node.c1v()));
    this.v1u_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).g = function () {
    return this.w1u_1;
  };
  protoOf(PersistentHashMapBaseIterator).h = function () {
    checkHasNext(this);
    var result = this.u1u_1[this.v1u_1].h();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.x1u_1 = Companion_getInstance_7().e1u_1.n1u_1;
    this.y1u_1 = 0;
    this.z1u_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).g1v = function (buffer, dataSize, index) {
    this.x1u_1 = buffer;
    this.y1u_1 = dataSize;
    this.z1u_1 = index;
  };
  protoOf(TrieNodeBaseIterator).d1v = function (buffer, dataSize) {
    this.g1v(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).a1v = function () {
    return this.z1u_1 < this.y1u_1;
  };
  protoOf(TrieNodeBaseIterator).e1v = function () {
    assert(this.z1u_1 >= this.y1u_1);
    return this.z1u_1 < this.x1u_1.length;
  };
  protoOf(TrieNodeBaseIterator).b1v = function () {
    assert(this.e1v());
    var tmp = this.x1u_1[this.z1u_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).f1v = function () {
    assert(this.e1v());
    this.z1u_1 = this.z1u_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).g = function () {
    return this.a1v();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).h = function () {
    assert(this.a1v());
    this.z1u_1 = this.z1u_1 + 2 | 0;
    var tmp = this.x1u_1[this.z1u_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).h = function () {
    assert(this.a1v());
    this.z1u_1 = this.z1u_1 + 2 | 0;
    var tmp = this.x1u_1[this.z1u_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).h = function () {
    assert(this.a1v());
    this.z1u_1 = this.z1u_1 + 2 | 0;
    var tmp = this.x1u_1[this.z1u_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.x1u_1[this.z1u_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.q1v_1 = key;
    this.r1v_1 = value;
  }
  protoOf(MapEntry).h1 = function () {
    return this.q1v_1;
  };
  protoOf(MapEntry).i1 = function () {
    return this.r1v_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.h1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.i1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.h1(), this.h1()) && equals(tmp0_safe_receiver.i1(), this.i1()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.h1()) + '=' + toString_0(this.i1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.s1v_1 = map;
  }
  protoOf(PersistentHashMapKeys).i = function () {
    return this.s1v_1.i();
  };
  protoOf(PersistentHashMapKeys).o4 = function (element) {
    return this.s1v_1.j1(element);
  };
  protoOf(PersistentHashMapKeys).n = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).f = function () {
    return new PersistentHashMapKeysIterator(this.s1v_1.i1u_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.t1v_1 = map;
  }
  protoOf(PersistentHashMapValues).i = function () {
    return this.t1v_1.i();
  };
  protoOf(PersistentHashMapValues).v4 = function (element) {
    return this.t1v_1.k1(element);
  };
  protoOf(PersistentHashMapValues).n = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.v4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).f = function () {
    return new PersistentHashMapValuesIterator(this.t1v_1.i1u_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.u1v_1 = map;
  }
  protoOf(PersistentHashMapEntries).i = function () {
    return this.u1v_1.i();
  };
  protoOf(PersistentHashMapEntries).v1v = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.u1v_1.l1(element.h1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.i1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.i1() == null && this.u1v_1.j1(element.h1()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).n = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.v1v((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).f = function () {
    return new PersistentHashMapEntriesIterator(this.u1v_1.i1u_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.r1u_1 = node;
    this.s1u_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.l1u_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.n1u_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.n1u_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.w1v(positionMask);
    var newBuffer = insertEntryAtIndex($this.n1u_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.k1u_1 | positionMask, $this.l1u_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.n1u_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.k1u_1, $this.l1u_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.n1u_1;
    if (newNodeBuffer.length === 2 && newNode.l1u_1 === 0) {
      if ($this.n1u_1.length === 1) {
        newNode.k1u_1 = $this.l1u_1;
        return newNode;
      }
      var keyIndex = $this.w1v(positionMask);
      var newBuffer = replaceNodeWithEntry($this.n1u_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.k1u_1 ^ positionMask, $this.l1u_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.n1u_1, $this.n1u_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.k1u_1, $this.l1u_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.n1u_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.n1u_1, nodeIndex);
    return TrieNode_init_$Create$($this.k1u_1, $this.l1u_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.x1v(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.n1u_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.k1u_1 ^ positionMask, $this.l1u_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.n1u_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.n1u_1, keyIndex);
    return TrieNode_init_$Create$($this.k1u_1 ^ positionMask, $this.l1u_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.n1u_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.n1u_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.n1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.n1u_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.n1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.n1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.n1u_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.n1u_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.n1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.e1u_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.k1u_1 = dataMap;
    this.l1u_1 = nodeMap;
    this.m1u_1 = ownedBy;
    this.n1u_1 = buffer;
  }
  protoOf(TrieNode).c1v = function () {
    return countOneBits(this.k1u_1);
  };
  protoOf(TrieNode).y1v = function (positionMask) {
    return !((this.k1u_1 & positionMask) === 0);
  };
  protoOf(TrieNode).w1v = function (positionMask) {
    return imul(2, countOneBits(this.k1u_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).x1v = function (positionMask) {
    return (this.n1u_1.length - 1 | 0) - countOneBits(this.l1u_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).z1v = function (nodeIndex) {
    var tmp = this.n1u_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).o1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.y1v(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.w1v(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.z1v(this.x1v(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.o1u(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).p1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.y1v(keyPositionMask)) {
      var keyIndex = this.w1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.z1v(this.x1v(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.p1u(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).q1u = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.y1v(keyPositionMask)) {
      var keyIndex = this.w1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1v(keyPositionMask);
      var targetNode = this.z1v(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.q1u(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.r1u_1;
      tmp_2.r1u_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).t1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.y1v(keyPositionMask)) {
      var keyIndex = this.w1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1v(keyPositionMask);
      var targetNode = this.z1v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.t1u(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.b1u_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_6().f1u());
  }
  protoOf(Companion_8).c1u = function () {
    return this.b1u_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.a1w_1 = firstElement;
    this.b1w_1 = lastElement;
    this.c1w_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).i = function () {
    return this.c1w_1.i();
  };
  protoOf(PersistentOrderedSet).n = function (element) {
    return this.c1w_1.j1(element);
  };
  protoOf(PersistentOrderedSet).d = function (element) {
    if (this.c1w_1.j1(element)) {
      return this;
    }
    if (this.p()) {
      var newMap = this.c1w_1.y3(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.b1w_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.c1w_1.l1(lastElement));
    var newMap_0 = this.c1w_1.y3(lastElement, lastLinks.f1w(element)).y3(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.a1w_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).b1 = function (element) {
    var tmp0_elvis_lhs = this.c1w_1.l1(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.c1w_1.z3(element);
    if (links.g1w()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.d1w_1;
      var tmp$ret$0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l1(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.d1w_1;
      newMap = tmp_0.y3((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.f1w(links.e1w_1));
    }
    if (links.i1w()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.e1w_1;
      var tmp$ret$1 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).l1(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.e1w_1;
      newMap = tmp_2.y3((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.h1w(links.d1w_1));
    }
    var newFirstElement = !links.g1w() ? links.e1w_1 : this.a1w_1;
    var newLastElement = !links.i1w() ? links.d1w_1 : this.b1w_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).f = function () {
    return new PersistentOrderedSetIterator(this.a1w_1, this.c1w_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.d1w_1 = previous;
    this.e1w_1 = next;
  }
  protoOf(Links).f1w = function (newNext) {
    return new Links(this.d1w_1, newNext);
  };
  protoOf(Links).h1w = function (newPrevious) {
    return new Links(newPrevious, this.e1w_1);
  };
  protoOf(Links).i1w = function () {
    return !(this.e1w_1 === EndOfChain_instance);
  };
  protoOf(Links).g1w = function () {
    return !(this.d1w_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.g())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.j1w_1 = nextElement;
    this.k1w_1 = map;
    this.l1w_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).g = function () {
    return this.l1w_1 < this.k1w_1.i();
  };
  protoOf(PersistentOrderedSetIterator).h = function () {
    checkHasNext_0(this);
    var tmp = this.j1w_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.l1w_1 = this.l1w_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = this.k1w_1.l1(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.j1w_1 = tmp_1.e1w_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.y1a() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.lx_1, other.lx_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    // Inline function 'kotlin.also' call
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.r1a();
    var tmp;
    if (false || it === Companion_getInstance().j13_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.s1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.r1w(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.w15(tmp$ret$0, get_lambdaKey());
    var slot = composer.r1a();
    var tmp;
    if (slot === Companion_getInstance().j13_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.s1a(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.r1w(block);
      tmp = slot;
    }
    var result = tmp;
    composer.z15();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.g1s_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.g1s_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().e1u_1;
    tmp.s1w_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_9();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).o1 = function () {
    return protoOf(PersistentHashMap).o1.call(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_9().s1w_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.a1o_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.b1o_1[0].equals(key) ? 0 : $this.b1o_1[0].v(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.b1o_1[mid];
      var comparison = midVal.y1(key);
      if (comparison.v(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.v(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.a1o_1 = size;
    this.b1o_1 = keys;
    this.c1o_1 = values;
  }
  protoOf(ThreadMap).d1o = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.c1o_1[index] : null;
  };
  protoOf(ThreadMap).e1o = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.c1o_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).f1o = function (key, value) {
    var size = this.a1o_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.c1o_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.b1o_1[source];
        var oldValue = this.c1o_1[source];
        if (oldKey.v(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.b1o_1[source];
          var oldValue_0 = this.c1o_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.i());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.d(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.e(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.o(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.e(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.e(truncated);
    }
    buffer.e(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.e(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.e(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.c7(element.dd_1);
        } else {
          _this__u8e3s4.e(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.x1w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).vh = function () {
    return this.x1w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).m2 = function () {
    return this.x1w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.m2());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.y1w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).vh = function () {
    return this.y1w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).m2 = function () {
    return this.y1w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.m2());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_10() {
    this.e1h_1 = 1;
  }
  protoOf(Companion_10).xv = function () {
    return currentSnapshot();
  };
  protoOf(Companion_10).w1n = function () {
    return !(get_threadSnapshot().gj() == null);
  };
  protoOf(Companion_10).i1i = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1w(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_10).k1k = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_10).a1x = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_10).h1h = function () {
    return currentSnapshot().b1x();
  };
  protoOf(Companion_10).f1h = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().gj().c1x();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gu()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_11;
  function Companion_getInstance_10() {
    return Companion_instance_11;
  }
  function Snapshot(id, invalid) {
    this.v16_1 = invalid;
    this.w16_1 = id;
    this.x16_1 = false;
    this.y16_1 = !(id === 0) ? trackPinning(id, this.d1x()) : -1;
  }
  protoOf(Snapshot).e1x = function (_set____db54di) {
    this.v16_1 = _set____db54di;
  };
  protoOf(Snapshot).d1x = function () {
    return this.v16_1;
  };
  protoOf(Snapshot).f1x = function (_set____db54di) {
    this.w16_1 = _set____db54di;
  };
  protoOf(Snapshot).z16 = function () {
    return this.w16_1;
  };
  protoOf(Snapshot).g1x = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).h1x = function () {
    return 0;
  };
  protoOf(Snapshot).vh = function () {
    this.x16_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.j1x();
  };
  protoOf(Snapshot).j1i = function () {
    var previous = get_threadSnapshot().gj();
    get_threadSnapshot().l1f(this);
    return previous;
  };
  protoOf(Snapshot).k1i = function (snapshot) {
    get_threadSnapshot().l1f(snapshot);
  };
  protoOf(Snapshot).n1x = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.o1x();
    this.p1x();
  };
  protoOf(Snapshot).o1x = function () {
    set_openSnapshots(get_openSnapshots().u1x(this.z16()));
  };
  protoOf(Snapshot).p1x = function () {
    this.j1x();
  };
  protoOf(Snapshot).v1x = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.x16_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).j1x = function () {
    if (this.y16_1 >= 0) {
      releasePinningLocked(this.y16_1);
      this.y16_1 = -1;
    }
  };
  protoOf(Snapshot).w1x = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.y16_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.y16_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.x1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    var tmp;
    if (!$this.x1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.y16_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.c1x();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.x1x(null);
      var id = $this.z16();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.cu_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var tmp = k[index];
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).x1n();
                    while (!(current == null)) {
                      if (current.u1n_1 === id || contains($this.u1i_1, current.u1n_1)) {
                        current.u1n_1 = 0;
                      }
                      current = current.v1n_1;
                    }
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.n1x();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.v1i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.v1i_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_11() {
    Companion_instance_12 = this;
    this.y1x_1 = new Int32Array(0);
  }
  var Companion_instance_12;
  function Companion_getInstance_11() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_11();
    Snapshot.call(this, id, invalid);
    this.p1i_1 = readObserver;
    this.q1i_1 = writeObserver;
    this.r1i_1 = 0;
    this.s1i_1 = null;
    this.t1i_1 = null;
    this.u1i_1 = Companion_getInstance_12().z1x_1;
    this.v1i_1 = Companion_getInstance_11().y1x_1;
    this.w1i_1 = 1;
    this.x1i_1 = false;
  }
  protoOf(MutableSnapshot).k1x = function () {
    return this.p1i_1;
  };
  protoOf(MutableSnapshot).l1x = function () {
    return this.q1i_1;
  };
  protoOf(MutableSnapshot).z1w = function (readObserver, writeObserver) {
    this.v1x();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1y(this.z16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().b1y(newId));
    var currentInvalid = this.d1x();
    this.e1x(currentInvalid.b1y(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.z16() + 1 | 0, newId), mergedReadObserver(readObserver, this.k1x()), mergedWriteObserver(writeObserver, this.l1x()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.x1i_1 && !this.x16_1) {
      var previousId = this.z16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.f1x(tmp0_0);
      set_openSnapshots(get_openSnapshots().b1y(this.z16()));
      this.e1x(addRange(this.d1x(), previousId + 1 | 0, this.z16()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).y1i = function () {
    var modified = this.c1x();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().gj(), this, get_openSnapshots().u1x(get_currentGlobalSnapshot().gj().z16())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.i() === 0) {
      this.o1x();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().gj();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.c1x();
      if (!(previousModified == null) && previousModified.gu()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().gj();
      var result = this.c1y(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().u1x(previousGlobalSnapshot_0.z16()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.o1x();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.c1x();
      this.x1x(null);
      previousGlobalSnapshot_0.x1x(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.x1i_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.p()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.gu()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.i() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.p1x();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.cu_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.h2(this_2.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp = k[index_1];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.cu_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.bu_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.h2(this_3.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.f2(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.t1i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.i() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.o(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.t1i_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).i1x = function () {
    return false;
  };
  protoOf(MutableSnapshot).vh = function () {
    if (!this.x16_1) {
      protoOf(Snapshot).vh.call(this);
      this.d1y(this);
    }
  };
  protoOf(MutableSnapshot).e1y = function (snapshot) {
    this.w1i_1 = this.w1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).d1y = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1i_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.w1i_1 = this.w1i_1 - 1 | 0;
    if (this.w1i_1 === 0) {
      if (!this.x1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).b1x = function () {
    if (this.x1i_1 || this.x16_1)
      return Unit_instance;
    this.f1y();
  };
  protoOf(MutableSnapshot).o1x = function () {
    set_openSnapshots(get_openSnapshots().u1x(this.z16()).g1y(this.u1i_1));
  };
  protoOf(MutableSnapshot).p1x = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).p1x.call(this);
  };
  protoOf(MutableSnapshot).c1y = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.d1x().b1y(this.z16()).h1y(this.u1i_1);
    var modified = ensureNotNull(this.c1x());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.cu_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.bu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.x1n();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.z16(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.u1n_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.z16(), this.d1x());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.l1(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'kotlin.contracts.contract' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = state.z1n(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.d(to(state, current.q1n()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.d(state);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.d(!equals(merged, previous) ? to(state, merged) : to(state, previous.q1n()));
                        }
                    }
                  }
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.f1y();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.i() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.sb();
          var stateRecord = item.tb();
          stateRecord.u1n_1 = this.z16();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.v1n_1 = state_0.x1n();
          state_0.y1n(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.i() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.o(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.b1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.t1i_1;
      this.t1i_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).f1y = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1y(this.z16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.x1i_1 && !this.x16_1) {
      var previousId = this.z16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.f1x(tmp0);
      set_openSnapshots(get_openSnapshots().b1y(this.z16()));
      this.e1x(addRange(this.d1x(), previousId + 1 | 0, this.z16()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).a1y = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.u1i_1 = this.u1i_1.b1y(id);
  };
  protoOf(MutableSnapshot).i1y = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.v1i_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.v1i_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).j1y = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.v1i_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.v1i_1 = tmp_0;
  };
  protoOf(MutableSnapshot).k1y = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.u1i_1 = this.u1i_1.h1y(snapshots);
  };
  protoOf(MutableSnapshot).m1x = function (state) {
    var tmp0_elvis_lhs = this.c1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.x1x(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.d(state);
  };
  protoOf(MutableSnapshot).g1x = function (_set____db54di) {
    this.r1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).h1x = function () {
    return this.r1i_1;
  };
  protoOf(MutableSnapshot).x1x = function (_set____db54di) {
    this.s1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).c1x = function () {
    return this.s1i_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.l1y_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).z1w = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).b1x = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).z1y = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).d1y = function (snapshot) {
    return this.z1y(snapshot);
  };
  protoOf(GlobalSnapshot).a1z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).e1y = function (snapshot) {
    return this.a1z(snapshot);
  };
  protoOf(GlobalSnapshot).y1i = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).vh = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.j1x();
  };
  function StateRecord() {
    this.u1n_1 = currentSnapshot().z16();
    this.v1n_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.b1z(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().qq(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().h1z(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().gj();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().gj() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().gj();
    modified = previousGlobalSnapshot.c1x();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().qq(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().qq(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.cu_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.bu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var tmp_1 = k[index_0];
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.f2(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.w1z_1) {
      $this.w1z_1 = true;
      $this.v1z_1.d1y($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.v1z_1 = parent;
    this.w1z_1 = false;
    this.v1z_1.e1y(this);
  }
  protoOf(NestedMutableSnapshot).vh = function () {
    if (!this.x16_1) {
      protoOf(MutableSnapshot).vh.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).y1i = function () {
    if (this.v1z_1.x1i_1 || this.v1z_1.x16_1)
      return new Failure(this);
    var modified = this.c1x();
    var id = this.z16();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.v1z_1, this, this.v1z_1.d1x()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.i() === 0) {
      this.n1x();
    } else {
      var result = this.c1y(this.v1z_1.z16(), optimisticMerges_0, this.v1z_1.d1x());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.v1z_1.c1x();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.uv(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.v1z_1.x1x(modified);
        this.x1x(null);
      }
    }
    if (this.v1z_1.z16() < id) {
      this.v1z_1.f1y();
    }
    this.v1z_1.e1x(this.v1z_1.d1x().u1x(id).g1y(this.u1i_1));
    this.v1z_1.a1y(id);
    this.v1z_1.i1y(this.w1x());
    this.v1z_1.k1y(this.u1i_1);
    this.v1z_1.j1y(this.v1i_1);
    this.x1i_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.b1y(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.c1x();
    var id = currentSnapshot.z16();
    if (modified == null)
      return null;
    var start = applyingSnapshot.d1x().b1y(applyingSnapshot.z16()).h1y(applyingSnapshot.u1i_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.cu_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.bu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.h2(this_0.d2().e2(7)).h2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.h2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.x1n();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.z16(), applyingSnapshot.d1x());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = state.z1n(previous, current, applied);
                      if (!(merged == null)) {
                        // Inline function 'kotlin.collections.set' call
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.also' call
                          // Inline function 'kotlin.collections.hashMapOf' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        tmp_3.y3(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.f2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.o(snapshot.z16())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.z16();
      var tmp_0 = snapshot.x16_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1i_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().x1z(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().u1x(previousGlobalSnapshot.z16()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().u1x(previousGlobalSnapshot.z16()));
    get_currentGlobalSnapshot().u1e(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.vh();
    set_openSnapshots(get_openSnapshots().b1y(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.y1z_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.a20_1[i];
        var value = entry == null ? null : entry.gj();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.a20_1[currentUsed] = entry;
            this_0.z1z_1[currentUsed] = this_0.z1z_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.a20_1[i_0] = null;
        this_0.z1z_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.y1z_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().c20(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.u1n_1 < current.u1n_1 ? current : candidate;
      }
      current = current.v1n_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.x1n();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1z(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.u1n_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.u1n_1 < validRecord.u1n_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.x1n();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.u1n_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.u1n_1 < current_0.u1n_1)
                    youngest = current_0;
                  current_0 = current_0.v1n_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.u1n_1 = 0;
            recordToOverwrite.p1n(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.v1n_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.u1n_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.o(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_11.xv();
    var tmp0_safe_receiver = snapshot.k1x();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.z16(), snapshot.d1x());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_11.xv();
      var tmp_0 = state.x1n();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.z16(), syncSnapshot.d1x());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_11.xv();
    var tmp0_elvis_lhs = readable(r, snapshot.z16(), snapshot.d1x());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_11.xv();
      tmp = readable(r, syncSnapshot.z16(), syncSnapshot.d1x());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.g1x(snapshot.h1x() + 1 | 0);
    var tmp1_safe_receiver = snapshot.l1x();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.i1x()) {
      snapshot.m1x(state);
    }
    var id = snapshot.z16();
    if (candidate.u1n_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.u1n_1 = id;
    if (!(candidate.u1n_1 === 1)) {
      snapshot.m1x(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.u1n_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.q1n();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.u1n_1 = 2147483647;
      this_0.v1n_1 = state.x1n();
      state.y1n(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.x1n();
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1z(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_12().z1x_1;
    while (!(current == null)) {
      var currentId = current.u1n_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.u1n_1 < validRecord.u1n_1 ? current : validRecord;
        }
      }
      current = current.v1n_1;
    }
    return null;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().b1y(result.z16()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_12().z1x_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_12().z1x_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().b1y(this_0.z16()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().gj();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.d1z_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.d1z_1;
    var half = $this.c1z_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.c1z_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.d1z_1;
    var index = $this.e1z_1;
    var handles = $this.f1z_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.d1z_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.d1z_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.e1z_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.d1z_1 = newValues;
    $this.e1z_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.f1z_1.length;
    if ($this.g1z_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.f1z_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.f1z_1 = newHandles;
    }
    var handle = $this.g1z_1;
    $this.g1z_1 = $this.f1z_1[$this.g1z_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.f1z_1[handle] = $this.g1z_1;
    $this.g1z_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.c1z_1 = 0;
    this.d1z_1 = new Int32Array(16);
    this.e1z_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.f1z_1 = tmp_1;
    this.g1z_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).x1z = function (default_0) {
    return this.c1z_1 > 0 ? this.d1z_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).qq = function (value) {
    ensure(this, this.c1z_1 + 1 | 0);
    var tmp1 = this.c1z_1;
    this.c1z_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.d1z_1[i] = value;
    this.e1z_1[i] = handle;
    this.f1z_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).h1z = function (handle) {
    var i = this.f1z_1[handle];
    swap_1(this, i, this.c1z_1 - 1 | 0);
    this.c1z_1 = this.c1z_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_12() {
    Companion_instance_13 = this;
    this.z1x_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.l20_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).u20 = function ($this$sequence, $completion) {
    var tmp = this.v20($this$sequence, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(SnapshotIdSet$iterator$slambda).s8 = function (p1, $completion) {
    return this.u20(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 15;
            this.n20_1 = this.l20_1.t1x_1;
            if (!(this.n20_1 == null)) {
              this.o20_1 = intArrayIterator(this.n20_1);
              this.w7_1 = 1;
              continue $sm;
            } else {
              this.w7_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.o20_1.g()) {
              this.w7_1 = 3;
              continue $sm;
            }

            this.p20_1 = this.o20_1.h();
            this.w7_1 = 2;
            suspendResult = this.m20_1.xb(this.p20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w7_1 = 1;
            continue $sm;
          case 3:
            this.w7_1 = 4;
            continue $sm;
          case 4:
            if (!this.l20_1.r1x_1.equals(new Long(0, 0))) {
              this.q20_1 = until(0, 64).f();
              this.w7_1 = 5;
              continue $sm;
            } else {
              this.w7_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.q20_1.g()) {
              this.w7_1 = 8;
              continue $sm;
            }

            this.r20_1 = this.q20_1.h();
            if (!this.l20_1.r1x_1.h2((new Long(1, 0)).e2(this.r20_1)).equals(new Long(0, 0))) {
              this.w7_1 = 6;
              suspendResult = this.m20_1.xb(this.r20_1 + this.l20_1.s1x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w7_1 = 7;
              continue $sm;
            }

          case 6:
            this.w7_1 = 7;
            continue $sm;
          case 7:
            this.w7_1 = 5;
            continue $sm;
          case 8:
            this.w7_1 = 9;
            continue $sm;
          case 9:
            if (!this.l20_1.q1x_1.equals(new Long(0, 0))) {
              this.s20_1 = until(0, 64).f();
              this.w7_1 = 10;
              continue $sm;
            } else {
              this.w7_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.s20_1.g()) {
              this.w7_1 = 13;
              continue $sm;
            }

            this.t20_1 = this.s20_1.h();
            if (!this.l20_1.q1x_1.h2((new Long(1, 0)).e2(this.t20_1)).equals(new Long(0, 0))) {
              this.w7_1 = 11;
              suspendResult = this.m20_1.xb((this.t20_1 + 64 | 0) + this.l20_1.s1x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w7_1 = 12;
              continue $sm;
            }

          case 11:
            this.w7_1 = 12;
            continue $sm;
          case 12:
            this.w7_1 = 10;
            continue $sm;
          case 13:
            this.w7_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 15) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).v20 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.l20_1, completion);
    i.m20_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.u20($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_12();
    this.q1x_1 = upperSet;
    this.r1x_1 = lowerSet;
    this.s1x_1 = lowerBound;
    this.t1x_1 = belowBound;
  }
  protoOf(SnapshotIdSet).o = function (bit) {
    var offset = bit - this.s1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).e2(offset).h2(this.r1x_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).e2(offset - 64 | 0).h2(this.q1x_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.t1x_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).b1y = function (bit) {
    var offset = bit - this.s1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).e2(offset);
      if (this.r1x_1.h2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.q1x_1, this.r1x_1.i2(mask), this.s1x_1, this.t1x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).e2(offset - 64 | 0);
      if (this.q1x_1.h2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.q1x_1.i2(mask_0), this.r1x_1, this.s1x_1, this.t1x_1);
      }
    } else if (offset >= 128) {
      if (!this.o(bit)) {
        var newUpperSet = this.q1x_1;
        var newLowerSet = this.r1x_1;
        var newLowerBound = this.s1x_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.collections.mutableListOf' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.t1x_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.d(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.h2((new Long(1, 0)).e2(index)).equals(new Long(0, 0))) {
                  newBelowBound.d(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.t1x_1 : tmp1_elvis_lhs)).b1y(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.t1x_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.q1x_1, this.r1x_1, this.s1x_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertLocation + 1 | 0;
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, destinationOffset, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.q1x_1, this.r1x_1, this.s1x_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).u1x = function (bit) {
    var offset = bit - this.s1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).e2(offset);
      if (!this.r1x_1.h2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.q1x_1, this.r1x_1.h2(mask.d2()), this.s1x_1, this.t1x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).e2(offset - 64 | 0);
      if (!this.q1x_1.h2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.q1x_1.h2(mask_0.d2()), this.r1x_1, this.s1x_1, this.t1x_1);
      }
    } else if (offset < 0) {
      var array = this.t1x_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.q1x_1, this.r1x_1, this.s1x_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            // Inline function 'kotlin.collections.copyInto' call
            var startIndex = location + 1 | 0;
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, startIndex, endIndex);
          }
          return new SnapshotIdSet(this.q1x_1, this.r1x_1, this.s1x_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).g1y = function (bits) {
    if (bits === Companion_getInstance_12().z1x_1)
      return this;
    if (this === Companion_getInstance_12().z1x_1)
      return Companion_getInstance_12().z1x_1;
    var tmp;
    if (bits.s1x_1 === this.s1x_1 && bits.t1x_1 === this.t1x_1) {
      tmp = new SnapshotIdSet(this.q1x_1.h2(bits.q1x_1.d2()), this.r1x_1.h2(bits.r1x_1.d2()), this.s1x_1, this.t1x_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = bits.t1x_1;
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.u1x(element);
        }
      }
      if (!bits.r1x_1.equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!bits.r1x_1.h2((new Long(1, 0)).e2(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + bits.s1x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.u1x(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!bits.q1x_1.equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!bits.q1x_1.h2((new Long(1, 0)).e2(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + bits.s1x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.u1x(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).h1y = function (bits) {
    if (bits === Companion_getInstance_12().z1x_1)
      return this;
    if (this === Companion_getInstance_12().z1x_1)
      return bits;
    var tmp;
    if (bits.s1x_1 === this.s1x_1 && bits.t1x_1 === this.t1x_1) {
      tmp = new SnapshotIdSet(this.q1x_1.i2(bits.q1x_1), this.r1x_1.i2(bits.r1x_1), this.s1x_1, this.t1x_1);
    } else {
      var tmp_0;
      if (this.t1x_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = this.t1x_1;
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.b1y(element);
          }
        }
        if (!this.r1x_1.equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!this.r1x_1.h2((new Long(1, 0)).e2(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + this.s1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.b1y(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!this.q1x_1.equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!this.q1x_1.h2((new Long(1, 0)).e2(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + this.s1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.b1y(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = bits.t1x_1;
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.b1y(element_2);
          }
        }
        if (!bits.r1x_1.equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!bits.r1x_1.h2((new Long(1, 0)).e2(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + bits.s1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.b1y(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!bits.q1x_1.equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!bits.q1x_1.h2((new Long(1, 0)).e2(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + bits.s1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.b1y(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).f = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).f();
  };
  protoOf(SnapshotIdSet).b1z = function (default_0) {
    var belowBound = this.t1x_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.r1x_1.equals(new Long(0, 0)))
      return this.s1x_1 + countTrailingZeroBits(this.r1x_1) | 0;
    if (!this.q1x_1.equals(new Long(0, 0)))
      return (this.s1x_1 + 64 | 0) + countTrailingZeroBits(this.q1x_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.d(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  var sync;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.y1z_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.z1z_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.a20_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.z1z_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.a20_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gj();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.y1z_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.z1z_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.a20_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.gj();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.y1z_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.y1z_1 = 0;
    this.z1z_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a20_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).c20 = function (value) {
    var index;
    var size = this.y1z_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.a20_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.a20_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.a20_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.z1z_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.z1z_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.a20_1 = newValues;
      this.z1z_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.a20_1;
      var destination = this.a20_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.z1z_1;
      var destination_0 = this.z1z_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.a20_1[insertIndex] = new WeakReference(value);
    this.z1z_1[insertIndex] = hash;
    this.y1z_1 = this.y1z_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.g1e_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).h1e = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.g1e_1.gj());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.g1e_1.w20(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).i1h = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.g1e_1.gj());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_13() {
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    return Companion_instance_14;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.t1c_1 = value;
  }
  protoOf(AtomicReference).gj = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.t1c_1;
  };
  protoOf(AtomicReference).u1e = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.t1c_1 = value;
  };
  protoOf(AtomicReference).u1c = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.t1c_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.t1c_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).b1e = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.t1c_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.t1c_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.xw_1 = value;
  }
  protoOf(AtomicInt).gj = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.xw_1;
  };
  protoOf(AtomicInt).yw = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.xw_1 = value;
  };
  protoOf(AtomicInt).qq = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.xw_1 = this.xw_1 + amount | 0;
    return this.xw_1;
  };
  protoOf(AtomicInt).w20 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.xw_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.xw_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.n1w_1) {
      var scope = $this.p1w_1;
      if (!(scope == null)) {
        scope.w1e();
        $this.p1w_1 = null;
      }
      var scopes = $this.q1w_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.i();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.o(index);
            item.w1e();
          }
           while (inductionVariable < last);
        scopes.c1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.n1w_1) {
      var scope = composer.q1a();
      if (!(scope == null)) {
        composer.t1a(scope);
        var lastScope = $this.p1w_1;
        if (replacableWith(lastScope, scope)) {
          $this.p1w_1 = scope;
        } else {
          var lastScopes = $this.q1w_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.q1w_1 = newScopes;
            newScopes.d(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.i();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.o(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.d1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.d(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.i18(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.x20($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.m1w_1 = key;
    this.n1w_1 = tracked;
    this.o1w_1 = block;
    this.p1w_1 = null;
    this.q1w_1 = null;
  }
  protoOf(ComposableLambdaImpl).r1w = function (block) {
    if (!equals(this.o1w_1, block)) {
      var oldBlockNull = this.o1w_1 == null;
      this.o1w_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).i18 = function (c, changed) {
    var c_0 = c.z19(this.m1w_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.b10(this) ? differentBits(0) : sameBits(0));
    var tmp = this.o1w_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.a1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1g(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).x20 = function (p1, c, changed) {
    var c_0 = c.z19(this.m1w_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.b10(this) ? differentBits(1) : sameBits(1));
    var tmp = this.o1w_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.a1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1g(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.h8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g21_1 = _this__u8e3s4;
    this.h21_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 2;
            this.w7_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.h21_1, safe));
            suspendResult = returnIfSuspended(safe.o8(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).bx = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).u16 = function (name) {
    return null;
  };
  protoOf(Trace).h17 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x12_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).o = function (key) {
    return this.x12_1.l1(key);
  };
  protoOf(IntMap).y12 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.x12_1.y3(key, value);
  };
  function WeakReference(reference) {
    this.b20_1 = reference;
  }
  protoOf(WeakReference).gj = function () {
    return this.b20_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).yv = onBeginChanges;
  protoOf(OffsetApplier).zv = onEndChanges;
  protoOf(AbstractApplier).yv = onBeginChanges;
  protoOf(AbstractApplier).zv = onEndChanges;
  protoOf(BroadcastFrameClock).h1 = get_key;
  protoOf(BroadcastFrameClock).j8 = get;
  protoOf(BroadcastFrameClock).oc = fold;
  protoOf(BroadcastFrameClock).nc = minusKey;
  protoOf(BroadcastFrameClock).pc = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.q8();
  });
  protoOf(StructuralEqualityPolicy).k1n = merge;
  protoOf(StateObjectImpl).z1n = mergeRecords;
  protoOf(MonotonicClockImpl).h1 = get_key;
  protoOf(MonotonicClockImpl).j8 = get;
  protoOf(MonotonicClockImpl).oc = fold;
  protoOf(MonotonicClockImpl).nc = minusKey;
  protoOf(MonotonicClockImpl).pc = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  Companion_instance_11 = new Companion_10();
  Companion_instance_14 = new Companion_13();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect;
  _.$_$.h = LaunchedEffect_0;
  _.$_$.i = LaunchedEffect;
  _.$_$.j = Recomposer;
  _.$_$.k = invalidApplier;
  _.$_$.l = isTraceInProgress;
  _.$_$.m = mutableStateOf;
  _.$_$.n = sourceInformationMarkerEnd;
  _.$_$.o = sourceInformationMarkerStart;
  _.$_$.p = traceEventEnd;
  _.$_$.q = traceEventStart;
  _.$_$.r = updateChangedFlags;
  _.$_$.s = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.t = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.u = _Updater___init__impl__rbfxm8;
  _.$_$.v = Updater__set_impl_v7kwss;
  _.$_$.w = Companion_instance_11;
  _.$_$.x = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
