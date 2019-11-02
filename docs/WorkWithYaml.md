---
title: Work with yaml files
nav_order: 3
---

Important {: .label .label-red } This site has been prepared for Tomato v0.4.3.

# Modify calculation parameters

As input `TomatoExe` is taking a `yaml` configuration file. In this file all the processing details can be configured, specifically the [input][#input] data, [output][#output] file destination and [calculation details][#Calculation details] like fitting method.

## What the fields do

### Input

Required: correct `files_magnitude` or `dir_magnitude` has to be present to perform calculations.

* `files_magnitude`: <yaml list of file paths, each in quotes>
* `files_phase`: <yaml list of file paths, each in quotes>
* `dir_magnitude`: <directory path in quites>
* `dir_phase`: <directory path in quites>

### Output

Required: correct `dir_output_map` has to be present to save the results.

* `dir_output_map`: <directory path in quites>
* `output_map_series_number`: <number, for example 10007>
* `dir_output_fitparams`: <directory path in quites>
* `output_fitparams_series_number`: <number, for example 10008>

### Calculation details

* `parameter_to_map`: <T1_Molli/T1_Shmolli/T1_SHMOLLI_original>
* `functions_object`: <FunctionsThreeParams FunctionsTwoParams FunctionsShmolli>
* `fitting_method`: <AmoebaVnl/LevMarVnl/AmoebaPrivateNr2>
* `fTolerance`: <number, for example 1e-12>
* `max_function_evals`: <number, for example 4000>
* `sign_calc_method`: <MagOnly/MagPhase/RealImag>
* `start_point_calc_method`: <DefaultThreeParam DefaultTwoParam StartPointSHMOLLI>

## Sample `yaml` file:

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
