---
title: Code snippet
parent: Work with the code
nav_order: 1
---

## Code snippet

```cpp
Ox::CalculatorT1Results<double> CalculateShmolli(
        int nSamples, double* sigMag, double* sigPha, double* invTimes) {

    // initialise the necessary objects
    Ox::CalculatorT1Shmolli <double> calculatorT1Shmolli;
    Ox::FunctionsT1Shmolli <double> functionsObject;
    Ox::FitterAmoebaNr2 <double> fitter;
    Ox::SignCalculatorShmolli <double> signCalculator;
    Ox::StartPointCalculatorShmolli <double> startPointCalculator;

    // configure
    calculatorT1Shmolli.setFunctionsT1(&functionsObject);
    calculatorT1Shmolli.setFitter(&fitter);
    calculatorT1Shmolli.setSignCalculator(&signCalculator);
    calculatorT1Shmolli.setStartPointCalculator(&startPointCalculator);

    // set the data
    calculatorT1Shmolli.setNSamples(nSamples);
    calculatorT1Shmolli.setInvTimes(invTimes);
    calculatorT1Shmolli.setSigMag(sigMag);
    calculatorT1Shmolli.setSigPha(sigPha);

    calculatorT1Shmolli.calculate();

    return calculatorT1Shmolli.GetResults();
}

## Code snippet explanation
