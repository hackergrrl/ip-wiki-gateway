#!/bin/bash

browserify index.js > bundle.js
echo "/ipfs/$(ipfs add -qw index.html bundle.js | tail -n 1)"
