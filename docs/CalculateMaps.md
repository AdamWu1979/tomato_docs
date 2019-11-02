---
title: Calculate maps
nav_order: 2
---

# How to calculate maps with TomatoExe

`TomatoExe` is a command line tool that allows for map calculation and saving in a DICOM format. To specify what are the input DICOM files and the settings of map calculation a `yaml` file is used as an input. For detailed Toamto `yaml` description see [Work with yaml files]({{ site.baseurl }}{% link docs/WorkWithYaml.md %}).

[![asciicast](https://asciinema.org/a/1C9dcW6oa7KJFNu4M1x8cFnzW.svg)](https://asciinema.org/a/1C9dcW6oa7KJFNu4M1x8cFnzW)

## How to calculate a map - step by step guide

* Download `TomatoExe` for your operating system from here <https://github.com/MRKonrad/tomato/releases/latest>
* Download `testData.zip` from here <https://github.com/MRKonrad/tomato/releases/latest>
* Unzip the downloaded files
* Prepare a `yaml` configuration file, for example by modifying the ones provided in `testData.zip`, or generate your own one like `myTomatoConfigFile.yml`. For details on how to use `yaml` in `Tomato` please see [Work with yaml files]({{ site.baseurl }}{% link docs/WorkWithYaml.md %})
* Using command line navigate to the directory with `TomatoExe` file
* Run TomatoExe
  * on OSX or Linux
```command
./TomatoExe myTomatoConfigFile.yml
```
  * on Windows:
```command
TomatoExe.exe myTomatoConfigFile.yml
```
* The maps have been generated in the output directory specified in `myTomatoConfigFile.yml`
* See the maps using your favourite dicom browser, for example <http://www.microdicom.com/> or <https://horosproject.org/>
* Enjoy 🍅🍅🍅

## How to calculate a map - a video guide

[![Tomato tutorial](https://img.youtube.com/vi/0tzNZNiZh18/maxresdefault.jpg)](https://www.youtube.com/watch?v=0tzNZNiZh18)
