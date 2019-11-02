---
title: Introduction
nav_order: 1
---

# Introduction

## What is a parametric map

In clinical MRI we can acquire series of images with different acquisition settings or in a different physiological states. The changes observed on the images correspond to change of certain physical or physiological parameters. If the model of this change is known, a mathematical procedure called fitting can be performed to extract the parameters from the data. If this procedure is performed in every pixel a **parametric map** is generated.

The most common physical parameters used in MRI are relaxation times: [T1](#t1), [T2](#t2), [T2star](#t2star). The relation between relaxation times and different acquisition settings allow to model the changes observed on the images and thus generation of **relaxation time maps**.

When contrast agent is injected its propagation in the organ can be modeled. This way physiological parameters of the organ are reflected in generated **perfusion maps**.

Relaxation time maps and perfusion maps are often called **parametric maps**. Parametric maps are a promising research tool in cardiac diagnosis and therapy planning.

In other words:
> *To generate a parametric map of perfusion or relaxation times, multiple images of the same region of the myocardium are acquired with different sensitivity to the parameter of interest, and the signal intensities of these images are fit to a model that describes the underlying physiology or relaxation parameters. The parametric map is an image of the fitted perfusion parameters or relaxation times.*

According to <https://doi.org/10.1016/j.jcmg.2013.05.005>

Below we present a set of online resources helpful in understanding **parametric maps**.

## T1

### What is T1
<!-- <https://www.codecogs.com/latex/eqneditor.php> -->
<img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;-&space;B&space;\exp&space;(-&space;T_{inv}(t)/&space;T_1)" title="M(t) = A - B \exp (- T_{inv}(t)/ T_1)" />

{% include T1.html %}

* <http://mriquestions.com/what-is-t1.html>
* <https://qmrlab.org/jekyll/2018/10/23/T1-mapping-inversion-recovery.html>

### Why T1 matters in cardiac MRI
* <http://mriquestions.com/t1-mapping.html>

## T2

### What is T2
Usually measured with Spin Echo MRI sequences.

<img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;exp&space;(-&space;T_E(t)/&space;T_2)" title="M(t) = A exp (- T_E(t)/ T_2)" />

{% include T2.html %}

* <http://mriquestions.com/what-is-t2.html>

### Why T2 matters in cardiac MRI
* <http://mriquestions.com/edemat2-mapping.html>

## T2star

### What is T2star
Usually measured with Gradient MRI sequences

<img src="https://latex.codecogs.com/gif.latex?M(t)&space;=&space;A&space;exp&space;(-&space;T_E(t)/&space;T*_2)" title="M(t) = A exp (- T_E(t)/ T*_2)" />

{% include T2star.html %}

* <https://pmj.bmj.com/content/89/1050/209#F7>
* <http://mriquestions.com/t2-vs-t2.html>
* <https://youtu.be/r0dYgcN3HcU>

### Why T2star matters in cardiac MRI

* <http://mriquestions.com/iront2-mapping.html>
