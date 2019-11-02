---
title: Build
parent: Work with the code
nav_order: 2
---

# How to build TOMATO

Start with looking at the repository <https://github.com/MRKonrad/tomato>, take a look at the scripts in the `scriptsBuild` and the continuous integrations scripts `.appveyor.yml` and `travis.yml`.

## Requirements

* a system with reasonably modern compiler like gcc, clang or Visual Studio
* [cmake](https://cmake.org/)

## Sample terminal session to build tomato

Open your console/terminal and navigate to the directory where you want to have `Tomato` code and build files. 

```console
git clone https://github.com/MRKonrad/tomato.git
cd tomato
mkdir build
```
Then on Windows
```console
cmake .. -DCMAKE_INSTALL_PREFIX=../../tomato_install -DCMAKE_WINDOWS_EXPORT_ALL_SYMBOLS=ON
cmake --build . --config RELEASE --target ALL_BUILD
cmake --build . --config RELEASE --target INSTALL
```
Then on OSX
```console
cmake .. -DCMAKE_INSTALL_PREFIX=../../tomato_install -DCMAKE_MACOSX_RPATH=ON
cmake --build . --config RELEASE
cmake --build . --config RELEASE --target INSTALL
```
Then on Linux
```console
cmake .. -DCMAKE_INSTALL_PREFIX=../../tomato_install
cmake --build . --config RELEASE
cmake --build . --config RELEASE --target INSTALL
```

If the installation have been successful, you should find the compiled library and executable in the directory specified by `CMAKE_INSTALL_PREFIX`.
