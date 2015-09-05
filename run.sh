#!/usr/bin/env bash

export HARMONY=$(node --v8-options | grep harmony | awk '{print $1}' | node -e "var s = process.openStdin(), data = '';s.on('data', function(chunk) {data += chunk}),s.on('end',function(){console.log(data.split('\n').join(' '))});")

$ENGINE $HARMONY . $@
