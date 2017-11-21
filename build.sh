rm -rf build
mkdir build
mkdir build/lib
cp -R static-lib/* build/lib
cp src/html/* build
cd src/js
browserify Game.js -o ../../build/rl-min.js 