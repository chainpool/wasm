// Copyright 2019-2020 @chainx-v2/wasm-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

global.WebAssembly = null;

require('override-require')(
  (request) => request === './wasm_asm_stub',
  () => require('../build/wasm_asm')
);

const { runUnassisted } = require('./all');

runUnassisted();
