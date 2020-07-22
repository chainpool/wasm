#!/usr/bin/env bash
# Copyright 2019-2020 @chainx-v2/wasm authors & contributors
# This software may be modified and distributed under the terms
# of the Apache-2.0 license. See the LICENSE file for details.

set -e

rustup toolchain install nightly$NIGHTLY
yarn polkadot-ci-ghact-build
