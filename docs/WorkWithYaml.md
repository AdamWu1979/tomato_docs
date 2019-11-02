---
title: Work with yaml files
nav_order: 3
---



# Modify calculation parameters

As input `TomatoExe` is taking a `yaml` configuration file. In this file all the processing details can be configured, specifically the [input](#input) data, [output](#output) file destination and [calculation details](#calculation-details) like fitting method.

This site has been prepared for `Tomato` v0.4.3.

Important
{: .label .label-red }

## What the fields in the yaml file mean

### Input

A set of DICOM files has to be passed to `TomatoExe` to perform calculation. This can be done by a list of file paths or a single directory containing the DICOM files.

Correct `files_magnitude` or `dir_magnitude` has to be present to perform calculations.
{: .d-inline-block }

Required
{: .label .label-blue }

* `files_magnitude`: a list of file paths in a form of a yaml list. Each path should be in double quotes. An example can be seen in the [Sample yaml file](#sample-yaml-file).
* `files_phase`: a list of file paths in a form of a yaml list. Each path should be in double quotes. An example can be seen in the [Sample yaml file](#sample-yaml-file).
* `dir_magnitude`: a path to the directory where the DICOM files are stored. Should be in quotes.
* `dir_phase`: a path to the directory where the DICOM files are stored. Should be in quotes.

### Output

The output files of `TomatoExe` are DICOM files with **maps** written to the `dir_output_map` path and other **fitting parameters** stored in the `dir_output_fitparams`.

<div class="code-example" markdown="1">
Required
{: .label .label-blue }
Correct `dir_output_map` has to be present to save the results.
</div>

* `dir_output_map`: a path to the directory where the output DICOM files will be save to. Should be in quotes.
* `dir_output_fitparams`: a path to the directory where the output DICOM files will be save to. Should be in quotes.
* `output_map_series_number`: you can specify a series number that will be stored in the DICOM tag of the output DICOM files.
* `output_fitparams_series_number`: you can specify a series number that will be stored in the DICOM tag of the output DICOM files.

### Calculation details

* `parameter_to_map`
  * `T1_Molli` T1 calculation as described in Messroghli's 2004 article https://doi.org/10.1002/mrm.20110
  * `T1_Shmolli` T1 calculation as described in Piechnik's 2010 article https://doi.org/10.1186/1532-429X-12-69 adapted to Tomoto architecture
  * `T1_SHMOLLI_original` The original T1 calculation as described in Piechnik's 2010 article https://doi.org/10.1186/1532-429X-12-69
* `functions_object`
  * `FunctionsThreeParams` fitting performed using following T1 model: <img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;-&space;B&space;\exp&space;(-&space;T_{inv}(t)/&space;T_1)" title="M(t) = A - B \exp (- T_{inv}(t)/ T_1)" />
  * `FunctionsTwoParams` fitting performed using following T1 model: <img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;(1&space;-&space;exp&space;(-&space;t/&space;T_1))" title="M(t) = A (1 - exp (- t/ T_1))" />
  * `FunctionsShmolli` fitting performed using following T1 model: <img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;-&space;B&space;\exp&space;(-&space;T_{inv}(t)/&space;T_1)" title="M(t) = A - B \exp (- T_{inv}(t)/ T_1)" /> with performance tweaks
* `fitting_method`
  * `AmoebaVnl` fitting using Nelder–Mead algorithm implemented in VNL <https://vxl.github.io/>
  * `LevMarVnl` fitting using Levenberg–Marquardt algorithm implemented in VNL <https://vxl.github.io/>
  * `AmoebaPrivateNr2` fitting using Nelder–Mead algorithm loosely based on Numerical Recipes <http://numerical.recipes>
* `fTolerance`: default 1e-12, fitting tolerance, the small the better the fitting result, but the slower the fitting procedure.
* `max_function_evals`: default 4000, maximum number of model function evaluations performed if the fTolerance has not been reached. The gigher the number the better the fitting result, but slower the fitting procedure.
* `sign_calc_method` as the input data is usually provided as magnitude, the information about the sign of the signal is missing. The calculator chosen in this settin will be responsible for recovering the sign either from just magnitude data (`MagOnly`) or from magnitude and phase data. If the phase data has not been provided in `files_phase` or `dir_phase`, this setting will be changed to `MagOnly`.
  * `MagOnly` signal recovery as described in Messroghli's 2004 article https://doi.org/10.1002/mrm.20110
  * `MagPhase` signal recovery as used in Piechnik's 2010 article https://doi.org/10.1186/1532-429X-12-69
  * `RealImag` signal recovery as described in Xue's 2013 article https://dx.doi.org/10.1002%2Fmrm.24385
* `start_point_calc_method`
  * `DefaultThreeParam` default [100 200 1200], starting point for the fitting procedure
  * `DefaultTwoParam` default [100 1000], starting point for the fitting procedure
  * `StartPointSHMOLLI` start point calculation as used in Piechnik's 2010 article https://doi.org/10.1186/1532-429X-12-69

## Sample yaml file

```yaml

files_magnitude:
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0001.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0002.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0003.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0004.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0005.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0006.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12/IM-0001-0007.dcm"

files_phase:
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0001.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0002.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0003.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0004.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0005.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0006.dcm"
  - "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13/IM-0002-0007.dcm"

dir_output_map: "testData/tomatoOutput_Shmolli/map"
output_map_series_number: 8800
dir_output_fitparams: "testData/tomatoOutput_Shmolli/fitparams"
output_fitparams_series_number: 8801

parameter_to_map: T1_SHMOLLI
functions_type: FunctionsShmolli
fitting_method: AmoebaPrivateNr2
max_function_evals: 4000
fTolerance: 1e-12
sign_calc_method: MagPhase
start_point_calc_method: StartPointSHMOLLI
```
