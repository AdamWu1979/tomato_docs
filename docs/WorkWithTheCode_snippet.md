---
title: Code snippet
parent: TomatoLib
nav_order: 5
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

```

## Code snippet explanation

The detailed role of each class has been described in the [code specification section]({{ site.baseurl }}{% link docs/WorkWithTheCode_specification.md %}).

* In this example as input we have following arrays of size `nSamples`: `sigMag`, `sigPha`, `invTimes`.
* First we instantiate the objects necessary for the calculation.
* Then we configure the `calculatorT1Shmolli` with the instantiated objects, for example the fitter by `calculatorT1Shmolli.setFitter(&fitter);`.
* Then we assign the input data to the the `calculatorT1Shmolli`, for example by calculatorT1Shmolli.setInvTimes(invTimes);
* Then we call the calculation method `calculatorT1Shmolli.calculate();`.
* Then we can process the results `calculatorT1Shmolli.GetResults();` 🍅🍅🍅
