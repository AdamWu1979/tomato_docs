# Welcome to Tomato Docs

TOMATO (Total Mapping Toolbox) is a C++ library for the calculation of parametric maps in cardiac magnetic resonance imaging (MRI). As an open source project, TOMATO allows transparent and standardized cardiac longitudinal relaxation time (T1) mapping in clinical applications. With C++ implementation, TOMATO can easily interface and translate between research software environments like MATLAB, and commercial vendors’ closed-source C++ environments on scanners as well as post-processing software. To complement the core library implementation, a ready-to-use command line tool has been provided.


* To see the code go to <https://github.com/MRKonrad/tomato> and enjoy 🍅🍅🍅
* To download the executable go to <https://github.com/MRKonrad/tomato/releases/latest> and enjoy 🍅🍅🍅

# Why
Write about the need for transparency and reproducibility

# What is Tomato
Open source C++ library to calculate paramteric maps in cardiovascular magnetic resonance imaging.

# Sample scenarios when Tomato can be used
* when the maps are not generated automaticaly on the scanners
* when vendor change the algorithm with wich the automaticaly generated maps have been calcualted
* when one wants to calculate maps with different algorithm or parameters than these from the scanner
* when one wants to generate R2 or SNR or SD maps
* when one wants to ensure that the same algorithm was used to calculate results in their whole study

# How to use TOMATO

*   App - download the latest version of `TomatoExe` from the [Releases][downloads_link] page and follow the youtube tutorial below
[![Tomato tutorial](https://img.youtube.com/vi/0tzNZNiZh18/maxresdefault.jpg)](https://www.youtube.com/watch?v=0tzNZNiZh18)

*   Lib - download the latest version of `TomatoLib` from the [Releases][downloads_link] page

*   Code - if you want to build the code please take a look at the scripts in the `scriptsBuild` and the continuous integrations scripts `.appveyor.yml` and `travis.yml`
