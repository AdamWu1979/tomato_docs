---
title: TomatoExe tutorial
nav_order: 2
---

# Tutorial

## How to calculate maps with TomatoExe?

`TomatoExe` is a command line tool that allows for map calculation and saving in a DICOM format. To specify the input DICOM files and the settings of map calculation, a `yaml` file is used as an input. For a detailed Tomato `yaml` description, see [how to work with yaml files]({{ site.baseurl }}{% link docs/WorkWithYaml.md %}).

{% include terminal.html %}

## How to calculate a map - step by step guide

* Download `TomatoExe` for your operating system from here: <https://github.com/MRKonrad/tomato/releases/latest>. See the discussion about Tomato `OpenSource` and `Full` version [here](https://mrkonrad.github.io/tomato_docs/docs/WorkWithYaml.html#tomatoopensource-vs-tomatofull).

* Download `testData.zip` from here: <https://github.com/MRKonrad/tomato/releases/latest>.

* Unzip the downloaded files.

* Prepare a `yaml` configuration file, for example by modifying the ones provided in `testData.zip`, or generate your own one like `myTomatoConfigFile.yml`. For details on how to use `yaml` in `Tomato` please see the section about [working with yaml files]({{ site.baseurl }}{% link docs/WorkWithYaml.md %}).

* Using command line, navigate to the directory with `TomatoExe` file

* Run TomatoExe
  * on OSX or Linux
```console
./TomatoExe myTomatoConfigFile.yml
```
  * on Windows
```console
TomatoExe.exe myTomatoConfigFile.yml
```

* The maps have been generated in the output directory specified in `myTomatoConfigFile.yml`.

* See the maps using your favourite DICOM browser, for example <http://www.microdicom.com/> for Windows or <https://horosproject.org/> for OSX.

* Enjoy 🍅🍅🍅


## How to calculate a map - a video guide

A YouTube tutorial can be found here <https://www.youtube.com/watch?v=0tzNZNiZh18>

[![Tomato tutorial](https://img.youtube.com/vi/0tzNZNiZh18/maxresdefault.jpg)](https://www.youtube.com/watch?v=0tzNZNiZh18)

## Examples of scenarios when Tomato can be used

* when the maps are not generated automatically on the scanners
* when vendors change the algorithm with which the automatically generated maps have been calculated
* when one wants to calculate maps with different algorithms or parameters than these from the scanner
* when one wants to generate R2, SNR or SD maps
* when one wants to ensure that the same algorithm was used to calculate results in their whole study.
