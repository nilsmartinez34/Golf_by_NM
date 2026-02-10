(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    globalThis['compose-multiplatform-core-collection-collection'] = factory(typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var longArray = kotlin_kotlin.$_$.y4;
  var Long = kotlin_kotlin.$_$.a6;
  var fill = kotlin_kotlin.$_$.n2;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var toLong = kotlin_kotlin.$_$.d5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.j6;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o1;
  var ulongCompare = kotlin_kotlin.$_$.u6;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.e5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var protoOf = kotlin_kotlin.$_$.c5;
  var initMetadataForClass = kotlin_kotlin.$_$.n4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var until = kotlin_kotlin.$_$.k5;
  var copyOf = kotlin_kotlin.$_$.j2;
  var arrayCopy = kotlin_kotlin.$_$.d2;
  var fillArrayVal = kotlin_kotlin.$_$.g4;
  var THROW_CCE = kotlin_kotlin.$_$.d6;
  var hashCode = kotlin_kotlin.$_$.m4;
  var equals = kotlin_kotlin.$_$.f4;
  var toString_0 = kotlin_kotlin.$_$.s6;
  var copyOf_0 = kotlin_kotlin.$_$.i2;
  var longArrayOf = kotlin_kotlin.$_$.x4;
  var CoroutineImpl = kotlin_kotlin.$_$.w3;
  var SequenceScope = kotlin_kotlin.$_$.n5;
  var numberRangeToNumber = kotlin_kotlin.$_$.z4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h3;
  var initMetadataForLambda = kotlin_kotlin.$_$.r4;
  var iterator = kotlin_kotlin.$_$.o5;
  var KtSet = kotlin_kotlin.$_$.a2;
  var Collection = kotlin_kotlin.$_$.w1;
  var fill_0 = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForLambda(ScatterSet$SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForLambda(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableScatterSet$MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, Collection, KtSet]);
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  //endregion
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.rp_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.pp_1 = new Int32Array(newCapacity);
    $this.qp_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.op_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.op_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.yp_1 = loadedCapacity($this.zp()) - $this.sp_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.rp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.op_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$4);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.pp_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.yp_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.op_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage($this);
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.sp_1 = $this.sp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.yp_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.op_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.yp_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.op_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = $this.rp_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.rp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.op_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage($this) {
    var tmp;
    if ($this.rp_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.sp_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.rp_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage($this, nextCapacity($this.rp_1));
    } else {
      resizeStorage($this, nextCapacity($this.rp_1));
    }
  }
  function resizeStorage($this, newCapacity) {
    var previousMetadata = $this.op_1;
    var previousKeys = $this.pp_1;
    var previousValues = $this.qp_1;
    var previousCapacity = $this.rp_1;
    initializeStorage($this, newCapacity);
    var newKeys = $this.pp_1;
    var newValues = $this.qp_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot($this, tmp$ret$3);
          // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          var value = toLong(tmp$ret$4);
          var m = $this.op_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.rp_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.yp_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).aq = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.pp_1[index] = key;
    this.qp_1[index] = value;
  };
  function IntIntMap() {
    this.op_1 = get_EmptyGroup();
    this.pp_1 = get_EmptyIntArray();
    this.qp_1 = get_EmptyIntArray();
    this.rp_1 = 0;
    this.sp_1 = 0;
  }
  protoOf(IntIntMap).zp = function () {
    return this.rp_1;
  };
  protoOf(IntIntMap).i = function () {
    return this.sp_1;
  };
  protoOf(IntIntMap).p = function () {
    return this.sp_1 === 0;
  };
  protoOf(IntIntMap).o = function (key) {
    var index = this.cq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('Cannot find value for key ' + key);
    }
    return this.qp_1[index];
  };
  protoOf(IntIntMap).bq = function (key) {
    return this.cq(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.pp_1;
    var v = this.qp_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.op_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.pp_1;
    var v = this.qp_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.op_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  var key = k[index];
                  if (!(v[index] === other.o(key))) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.p()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().x6(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.pp_1;
    var v = this.qp_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.op_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var key = k[index];
                  var value = v[index];
                  s.da(key);
                  s.w6('=');
                  s.da(value);
                  i = i + 1 | 0;
                  if (i < this.sp_1) {
                    s.x6(_Char___init__impl__6a9atx(44)).x6(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.x6(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).cq = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.rp_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.op_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$4);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.pp_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.dq_1 = tmp_0;
    this.eq_1 = 0;
  }
  protoOf(IntList).i = function () {
    return this.eq_1;
  };
  protoOf(IntList).o = function (index) {
    if (!(0 <= index ? index < this.eq_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.eq_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    return this.dq_1[index];
  };
  protoOf(IntList).fq = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.IntList.joinToString.<anonymous>' call
      this_0.e(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.dq_1;
      var inductionVariable = 0;
      var last = this.eq_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.IntList.joinToString.<anonymous>.<anonymous>' call
          var element = content[i];
          if (i === limit) {
            this_0.e(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.e(separator);
          }
          this_0.da(element);
        }
         while (inductionVariable < last);
      this_0.e(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).gq = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.fq(separator, prefix, postfix, limit, truncated) : $super.fq.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.dq_1;
    var inductionVariable = 0;
    var last = this.eq_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.IntList.hashCode.<anonymous>' call
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.eq_1 === this.eq_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.dq_1;
    var otherContent = other.dq_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.eq_1);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.gq(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).jq = function (element) {
    this.kq(this.eq_1 + 1 | 0);
    this.dq_1[this.eq_1] = element;
    this.eq_1 = this.eq_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).kq = function (capacity) {
    var oldContent = this.dq_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.dq_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).e1 = function (index) {
    if (!(0 <= index ? index < this.eq_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.eq_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    var content = this.dq_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.eq_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.eq_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, startIndex, endIndex);
    }
    this.eq_1 = this.eq_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).lq = function (index, element) {
    if (!(0 <= index ? index < this.eq_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.eq_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('set index ' + index + ' must be between 0 .. ' + tmp$ret$0);
    }
    var content = this.dq_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.pq_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.nq_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.oq_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.mq_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.mq_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.wq_1 = loadedCapacity($this.zp()) - $this.qq_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.pq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.mq_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$4);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.nq_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.wq_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.mq_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_0($this);
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.qq_1 = $this.qq_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.wq_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.mq_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.wq_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.mq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = $this.pq_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.pq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.mq_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_0($this) {
    var tmp;
    if ($this.pq_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.qq_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.pq_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_0($this, nextCapacity($this.pq_1));
    } else {
      resizeStorage_0($this, nextCapacity($this.pq_1));
    }
  }
  function resizeStorage_0($this, newCapacity) {
    var previousMetadata = $this.mq_1;
    var previousKeys = $this.nq_1;
    var previousValues = $this.oq_1;
    var previousCapacity = $this.pq_1;
    initializeStorage_0($this, newCapacity);
    var newKeys = $this.nq_1;
    var newValues = $this.oq_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0($this, tmp$ret$3);
          // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          var value = toLong(tmp$ret$4);
          var m = $this.mq_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.pq_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.wq_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).xq = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.nq_1[index] = key;
    this.oq_1[index] = value;
  };
  protoOf(MutableIntObjectMap).yq = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.mq_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$4);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nq_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.zq(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).zq = function (index) {
    this.qq_1 = this.qq_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.mq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    var c = this.pq_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var oldValue = this.oq_1[index];
    this.oq_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  function IntObjectMap() {
    this.mq_1 = get_EmptyGroup();
    this.nq_1 = get_EmptyIntArray();
    this.oq_1 = get_EMPTY_OBJECTS();
    this.pq_1 = 0;
    this.qq_1 = 0;
  }
  protoOf(IntObjectMap).zp = function () {
    return this.pq_1;
  };
  protoOf(IntObjectMap).i = function () {
    return this.qq_1;
  };
  protoOf(IntObjectMap).p = function () {
    return this.qq_1 === 0;
  };
  protoOf(IntObjectMap).o = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.mq_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$4);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nq_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.oq_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).ar = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.mq_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$4);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nq_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.hashCode.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var tmp_0 = hash;
                  var tmp_1 = key;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.o(key) == null) || !other.ar(key)) {
                      return false;
                    }
                  } else if (!equals(value, other.o(key))) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.p()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().x6(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.da(key);
                  s.w6('=');
                  s.v6(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.qq_1) {
                    s.x6(_Char___init__impl__6a9atx(44)).x6(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.x6(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.br_1 = get_EmptyGroup();
    this.cr_1 = get_EmptyIntArray();
    this.dr_1 = 0;
    this.er_1 = 0;
  }
  protoOf(IntSet).zp = function () {
    return this.dr_1;
  };
  protoOf(IntSet).bq = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dr_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.br_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$4);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.cr_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).fq = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.e(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.cr_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.br_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.e(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.e(separator);
                    }
                    this_0.da(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.e(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).fr = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.fq(separator, prefix, postfix, limit, truncated) : $super.fq.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.cr_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.br_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.er_1 === this.er_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.cr_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.br_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.bq(element)) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.fr(VOID, '[', ']');
  };
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.dr_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.cr_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.br_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.br_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.kr_1 = loadedCapacity($this.zp()) - $this.er_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.dr_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.br_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$4);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.cr_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.kr_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.br_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_1($this);
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.er_1 = $this.er_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kr_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.br_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kr_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.br_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = $this.dr_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.dr_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.br_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_1($this) {
    var tmp;
    if ($this.dr_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.er_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.dr_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_1($this, nextCapacity($this.dr_1));
    } else {
      resizeStorage_1($this, nextCapacity($this.dr_1));
    }
  }
  function resizeStorage_1($this, newCapacity) {
    var previousMetadata = $this.br_1;
    var previousElements = $this.cr_1;
    var previousCapacity = $this.dr_1;
    initializeStorage_1($this, newCapacity);
    var newElements = $this.cr_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1($this, tmp$ret$3);
          // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          var value = toLong(tmp$ret$4);
          var m = $this.br_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.dr_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.kr_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).jq = function (element) {
    var oldSize = this.er_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.cr_1[index] = element;
    return !(this.er_1 === oldSize);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.or_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.mr_1 = fillArrayVal(Array(newCapacity), null);
    $this.nr_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.lr_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.lr_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.vr_1 = loadedCapacity($this.zp()) - $this.pr_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.or_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.lr_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$5);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.mr_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.vr_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.lr_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_2($this);
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.pr_1 = $this.pr_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.vr_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.lr_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.vr_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.lr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = $this.or_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.or_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.lr_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_2($this) {
    var tmp;
    if ($this.or_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.pr_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.or_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_2($this, nextCapacity($this.or_1));
    } else {
      resizeStorage_2($this, nextCapacity($this.or_1));
    }
  }
  function resizeStorage_2($this, newCapacity) {
    var previousMetadata = $this.lr_1;
    var previousKeys = $this.mr_1;
    var previousValues = $this.nr_1;
    var previousCapacity = $this.or_1;
    initializeStorage_2($this, newCapacity);
    var newKeys = $this.mr_1;
    var newValues = $this.nr_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.lr_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.or_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.vr_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).wr = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.nr_1[index];
    }
    this.mr_1[index] = key;
    this.nr_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).xr = function (index) {
    this.pr_1 = this.pr_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.lr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    var c = this.or_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    this.mr_1[index] = null;
  };
  function ObjectIntMap() {
    this.lr_1 = get_EmptyGroup();
    this.mr_1 = get_EMPTY_OBJECTS();
    this.nr_1 = get_EmptyIntArray();
    this.or_1 = 0;
    this.pr_1 = 0;
  }
  protoOf(ObjectIntMap).zp = function () {
    return this.or_1;
  };
  protoOf(ObjectIntMap).i = function () {
    return this.pr_1;
  };
  protoOf(ObjectIntMap).p = function () {
    return this.pr_1 === 0;
  };
  protoOf(ObjectIntMap).l1 = function (key) {
    var index = this.yr(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.nr_1[index];
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mr_1;
    var v = this.nr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mr_1;
    var v = this.nr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.l1(key))) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.p()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().x6(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mr_1;
    var v = this.nr_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.v6(key === this ? '(this)' : key);
                  s.w6('=');
                  s.da(value);
                  i = i + 1 | 0;
                  if (i < this.pr_1) {
                    s.x6(_Char___init__impl__6a9atx(44)).x6(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.x6(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).yr = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.or_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.lr_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$5);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.mr_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = fillArrayVal(Array(initialCapacity), null);
    }
    tmp.zr_1 = tmp_0;
    this.as_1 = 0;
  }
  protoOf(ObjectList).i = function () {
    return this.as_1;
  };
  protoOf(ObjectList).bs = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>' call
      this_0.e(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.zr_1;
      var inductionVariable = 0;
      var last = this.as_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>.<anonymous>' call
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.e(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.e(separator);
          }
          if (transform == null) {
            this_0.v6(element);
          } else {
            this_0.e(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.e(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).cs = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.bs(separator, prefix, postfix, limit, truncated, transform) : $super.bs.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.zr_1;
    var inductionVariable = 0;
    var last = this.as_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.ObjectList.hashCode.<anonymous>' call
        var tmp = content[i];
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$0) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.as_1 === this.as_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.zr_1;
    var otherContent = other.zr_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.as_1);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.cs(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.fs_1 = null;
  }
  protoOf(MutableObjectList).d = function (element) {
    this.kq(this.as_1 + 1 | 0);
    this.zr_1[this.as_1] = element;
    this.as_1 = this.as_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).kq = function (capacity) {
    var oldContent = this.zr_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.zr_1 = copyOf_0(oldContent, newSize);
    }
  };
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = fillArrayVal(Array(0), null);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.js_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.hs_1 = fillArrayVal(Array(newCapacity), null);
    var tmp_1 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.is_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.gs_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.gs_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.qs_1 = loadedCapacity($this.zp()) - $this.ks_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.js_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.gs_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_3($this) {
    var tmp;
    if ($this.js_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.ks_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.js_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_3($this, nextCapacity($this.js_1));
    } else {
      resizeStorage_3($this, nextCapacity($this.js_1));
    }
  }
  function resizeStorage_3($this, newCapacity) {
    var previousMetadata = $this.gs_1;
    var previousKeys = $this.hs_1;
    var previousValues = $this.is_1;
    var previousCapacity = $this.js_1;
    initializeStorage_3($this, newCapacity);
    var newKeys = $this.hs_1;
    var newValues = $this.is_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.gs_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.js_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.qs_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).rs = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.ss(key);
    var index_0 = index < 0 ? ~index : index;
    this.hs_1[index_0] = key;
    this.is_1[index_0] = value;
  };
  protoOf(MutableScatterMap).u3 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.js_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.gs_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$5);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.hs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.zq(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).zq = function (index) {
    this.ks_1 = this.ks_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.gs_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    var c = this.js_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    this.hs_1[index] = null;
    var oldValue = this.is_1[index];
    this.is_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).ss = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.js_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.gs_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$5);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.hs_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3(this, hash1);
    var tmp_0;
    if (this.qs_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.gs_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_3(this);
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.ks_1 = this.ks_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.qs_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.gs_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.qs_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = this.gs_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = this.js_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return ~index_0;
  };
  function ScatterMap() {
    this.gs_1 = get_EmptyGroup();
    this.hs_1 = get_EMPTY_OBJECTS();
    this.is_1 = get_EMPTY_OBJECTS();
    this.js_1 = 0;
    this.ks_1 = 0;
  }
  protoOf(ScatterMap).zp = function () {
    return this.js_1;
  };
  protoOf(ScatterMap).i = function () {
    return this.ks_1;
  };
  protoOf(ScatterMap).p = function () {
    return this.ks_1 === 0;
  };
  protoOf(ScatterMap).l1 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.js_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.gs_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$5);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.hs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.is_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).j1 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.js_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.gs_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$5);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.hs_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.hs_1;
    var v = this.is_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.gs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.hs_1;
    var v = this.is_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.gs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.l1(key) == null) || !o.j1(key)) {
                      return false;
                    }
                  } else if (!equals(value, o.l1(key))) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.p()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().x6(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.hs_1;
    var v = this.is_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.gs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.v6(key === this ? '(this)' : key);
                  s.w6('=');
                  s.v6(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.ks_1) {
                    s.x6(_Char___init__impl__6a9atx(44)).x6(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.x6(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.bt_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).st = function ($this$iterator, $completion) {
    var tmp = this.tt($this$iterator, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).n8 = function (p1, $completion) {
    return this.st(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 11;
            var tmp_0 = this;
            tmp_0.dt_1 = this.bt_1;
            this.et_1 = this.dt_1.vt_1;
            this.r7_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.gt_1 = this.dt_1;
            this.ht_1 = this.gt_1.ut_1;
            this.it_1 = this.ht_1.length - 2 | 0;
            this.jt_1 = numberRangeToNumber(0, this.it_1).f();
            this.r7_1 = 2;
            continue $sm;
          case 2:
            if (!this.jt_1.g()) {
              this.r7_1 = 9;
              continue $sm;
            }

            this.kt_1 = this.jt_1.h();
            this.lt_1 = this.ht_1[this.kt_1];
            var this_0 = this.lt_1;
            if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.mt_1 = 8 - (~(this.kt_1 - this.it_1 | 0) >>> 31 | 0) | 0;
              this.nt_1 = until(0, this.mt_1).f();
              this.r7_1 = 3;
              continue $sm;
            } else {
              this.r7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.nt_1.g()) {
              this.r7_1 = 6;
              continue $sm;
            }

            this.ot_1 = this.nt_1.h();
            if (this.lt_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
              this.pt_1 = (this.kt_1 << 3) + this.ot_1 | 0;
              var tmp_2 = this;
              tmp_2.qt_1 = this.pt_1;
              var tmp_3 = this;
              var tmp_4 = this.et_1[this.qt_1];
              tmp_3.rt_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.r7_1 = 4;
              suspendResult = this.ct_1.qb(this.rt_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 5;
              continue $sm;
            }

          case 4:
            this.r7_1 = 5;
            continue $sm;
          case 5:
            this.lt_1 = this.lt_1.e2(8);
            this.r7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.mt_1 === 8)) {
              this.ft_1 = Unit_instance;
              this.r7_1 = 10;
              continue $sm;
            } else {
              this.r7_1 = 7;
              continue $sm;
            }

          case 7:
            this.r7_1 = 8;
            continue $sm;
          case 8:
            this.r7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.r7_1 = 1;
              continue $sm;
            }

            this.r7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 11) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).tt = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.bt_1, completion);
    i.ct_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.st($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.yt_1 = $outer;
  }
  protoOf(SetWrapper).i = function () {
    return this.yt_1.xt_1;
  };
  protoOf(SetWrapper).z = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.yt_1.n(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).n = function (element) {
    return this.yt_1.n(element);
  };
  protoOf(SetWrapper).p = function () {
    return this.yt_1.p();
  };
  protoOf(SetWrapper).f = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.yt_1, null));
  };
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.ut_1 = get_EmptyGroup();
    this.vt_1 = get_EMPTY_OBJECTS();
    this.wt_1 = 0;
    this.xt_1 = 0;
  }
  protoOf(ScatterSet).zp = function () {
    return this.wt_1;
  };
  protoOf(ScatterSet).i = function () {
    return this.xt_1;
  };
  protoOf(ScatterSet).p = function () {
    return this.xt_1 === 0;
  };
  protoOf(ScatterSet).zt = function () {
    return !(this.xt_1 === 0);
  };
  protoOf(ScatterSet).n = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.wt_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.ut_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$5);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.vt_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).bs = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.e(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.vt_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.ut_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var tmp = k[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.e(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.e(separator);
                    }
                    if (transform == null) {
                      this_0.v6(element);
                    } else {
                      this_0.e(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.e(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).au = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.bs(separator, prefix, postfix, limit, truncated, transform) : $super.bs.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ut_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ut_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var tmp = k[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.n(element)) {
                    return false;
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.au(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).bu = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.ku_1 = this$0;
    this.lu_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).st = function ($this$iterator, $completion) {
    var tmp = this.tt($this$iterator, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).n8 = function (p1, $completion) {
    return this.st(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 11;
            this.r7_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.ou_1 = this.ku_1;
            this.pu_1 = this.ou_1.ut_1;
            this.qu_1 = this.pu_1.length - 2 | 0;
            this.ru_1 = numberRangeToNumber(0, this.qu_1).f();
            this.r7_1 = 2;
            continue $sm;
          case 2:
            if (!this.ru_1.g()) {
              this.r7_1 = 9;
              continue $sm;
            }

            this.su_1 = this.ru_1.h();
            this.tu_1 = this.pu_1[this.su_1];
            var this_0 = this.tu_1;
            if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.uu_1 = 8 - (~(this.su_1 - this.qu_1 | 0) >>> 31 | 0) | 0;
              this.vu_1 = until(0, this.uu_1).f();
              this.r7_1 = 3;
              continue $sm;
            } else {
              this.r7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.vu_1.g()) {
              this.r7_1 = 6;
              continue $sm;
            }

            this.wu_1 = this.vu_1.h();
            if (this.tu_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
              this.xu_1 = (this.su_1 << 3) + this.wu_1 | 0;
              var tmp_1 = this;
              tmp_1.yu_1 = this.xu_1;
              this.lu_1.zu_1 = this.yu_1;
              this.r7_1 = 4;
              var tmp_2 = this.ku_1.vt_1[this.yu_1];
              suspendResult = this.mu_1.qb((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 5;
              continue $sm;
            }

          case 4:
            this.r7_1 = 5;
            continue $sm;
          case 5:
            this.tu_1 = this.tu_1.e2(8);
            this.r7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.uu_1 === 8)) {
              this.nu_1 = Unit_instance;
              this.r7_1 = 10;
              continue $sm;
            } else {
              this.r7_1 = 7;
              continue $sm;
            }

          case 7:
            this.r7_1 = 8;
            continue $sm;
          case 8:
            this.r7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.r7_1 = 1;
              continue $sm;
            }

            this.r7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 11) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).tt = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.ku_1, this.lu_1, completion);
    i.mu_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.st($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.bv_1 = this$0;
    this.zu_1 = -1;
    var tmp = this;
    tmp.av_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).g = function () {
    return this.av_1.g();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).h = function () {
    return this.av_1.h();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).u2 = function () {
    if (!(this.zu_1 === -1)) {
      this.bv_1.hv(this.zu_1);
      this.zu_1 = -1;
    }
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.wt_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.vt_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ut_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.ut_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.gv_1 = loadedCapacity($this.zp()) - $this.xt_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.wt_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ut_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
      var x = g.i2(tmp$ret$5);
      var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.vt_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.g2(this_1.x1(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.gv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ut_1[offset_0 >> 3].e2((offset_0 & 7) << 3).g2(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_4($this);
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.xt_1 = $this.xt_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.gv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ut_1[offset_1 >> 3].e2((offset_1 & 7) << 3).g2(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.gv_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.ut_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    var c = $this.wt_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].g2((new Long(255, 0)).d2(b_1).c2()).h2(value.d2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.wt_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ut_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.g2(g.c2().d2(7)).g2(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_4($this) {
    var tmp;
    if ($this.wt_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.xt_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).y1(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.wt_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).y1(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_4($this, nextCapacity($this.wt_1));
    } else {
      resizeStorage_4($this, nextCapacity($this.wt_1));
    }
  }
  function resizeStorage_4($this, newCapacity) {
    var previousMetadata = $this.ut_1;
    var previousElements = $this.vt_1;
    var previousCapacity = $this.wt_1;
    initializeStorage_4($this, newCapacity);
    var newElements = $this.vt_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].e2((i & 7) << 3).g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.ut_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
          var c = $this.wt_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableSetWrapper($outer) {
    this.jv_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).d = function (element) {
    return this.jv_1.d(element);
  };
  protoOf(MutableSetWrapper).m = function (elements) {
    return this.jv_1.kv(elements);
  };
  protoOf(MutableSetWrapper).b1 = function () {
    this.jv_1.b1();
  };
  protoOf(MutableSetWrapper).f = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.jv_1);
  };
  protoOf(MutableSetWrapper).a1 = function (element) {
    return this.jv_1.a1(element);
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.gv_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).d = function (element) {
    var oldSize = this.i();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.vt_1[index] = element;
    return !(this.i() === oldSize);
  };
  protoOf(MutableScatterSet).lv = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.vt_1[index] = element;
  };
  protoOf(MutableScatterSet).kv = function (elements) {
    var oldSize = this.i();
    this.mv(elements);
    return !(oldSize === this.i());
  };
  protoOf(MutableScatterSet).nv = function (elements) {
    var oldSize = this.i();
    this.ov(elements);
    return !(oldSize === this.i());
  };
  protoOf(MutableScatterSet).mv = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.lv(element);
    }
  };
  protoOf(MutableScatterSet).ov = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = elements.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.ut_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var tmp = k[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.lv(element);
                }
                slot = slot.e2(8);
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
  protoOf(MutableScatterSet).a1 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.wt_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.ut_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].f2(b).h2(metadata[i + 1 | 0].d2(64 - b | 0).g2(toLong(b).b2().e2(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).y1(toLong(hash2));
        var x = g.i2(tmp$ret$5);
        var m = x.x1(new Long(16843009, 16843009)).g2(x.c2()).g2(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.vt_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.g2(this_1.x1(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.g2(g.c2().d2(6)).g2(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.hv(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).hv = function (index) {
    this.xt_1 = this.xt_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.ut_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    var c = this.wt_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].g2((new Long(255, 0)).d2(b_0).c2()).h2(value.d2(b_0));
    this.vt_1[index] = null;
  };
  protoOf(MutableScatterSet).b1 = function () {
    this.xt_1 = 0;
    if (!(this.ut_1 === get_EmptyGroup())) {
      fill(this.ut_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.ut_1;
      var offset = this.wt_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].g2((new Long(255, 0)).d2(b).c2()).h2(value.d2(b));
    }
    fill_0(this.vt_1, null, 0, this.wt_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).pv = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.mutableScatterSetOf.<anonymous>' call
    this_0.lv(element1);
    this_0.lv(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableIntIntMap;
  _.$_$.b = MutableIntList;
  _.$_$.c = MutableIntObjectMap;
  _.$_$.d = MutableIntSet;
  _.$_$.e = MutableObjectIntMap;
  _.$_$.f = MutableObjectList;
  _.$_$.g = MutableScatterMap;
  _.$_$.h = MutableScatterSet;
  _.$_$.i = ScatterSet;
  _.$_$.j = mutableScatterMapOf;
  _.$_$.k = mutableScatterSetOf_0;
  _.$_$.l = mutableScatterSetOf;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
