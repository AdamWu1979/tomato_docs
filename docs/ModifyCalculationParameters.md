---
title: Modify calculation parameters
has_children: true
nav_order: 3
---

# Modify calculation parameters

Modify calculation parameters using yaml files.

Sample yaml file:

```yaml
dir_magnitude: "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_12"
dir_phase: "testData/dicom/Hcmr_Phantom_1916_260C/Konrad_Shmolli/ShMOLLI_192i_e11_13"

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

number_of_threads: 0
```

## What the fields do

* files_magnitude: <yaml list of file paths, each in quotes>
* files_phase: <yaml list of file paths, each in quotes>
* dir_magnitude: <directory path in quites>
* dir_phase: <directory path in quites>
* dir_output_map: <directory path in quites>
* output_map_series_number: <number, for example 10007>
* dir_output_fitparams: <directory path in quites>
* output_fitparams_series_number: <number, for example 10008>

* parameter_to_map: <T1_Molli/T1_Shmolli/T1_SHMOLLI_original>
* functions_object: <FunctionsThreeParams FunctionsTwoParams FunctionsShmolli>
* fitting_method: <AmoebaVnl/LevMarVnl/AmoebaPrivateNr2>
* fTolerance: <number, for example 1e-12>
* max_function_evals: <number, for example 4000>
* sign_calc_method: <MagOnly/MagPhase/RealImag>
* start_point_calc_method: <DefaultThreeParam DefaultTwoParam StartPointSHMOLLI>
