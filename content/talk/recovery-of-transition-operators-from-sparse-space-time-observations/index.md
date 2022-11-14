---
title: Recovery of Transition Operators From Sparse Space-Time Observations
sessions:
- Mathematics of Information
speakers:
- name: Sui Tang
  affiliation: University of California Santa Barbara
locations:
- Junior Ballroom C
tags:
- ''
outputs:
- HTML
- Calendar
categories:
- special-session
date: 2022-12-09T15:30:00-0800
publishDate: '2022-10-01T10:00:00-08:00'
end: 2022-12-09T15:55:00-0800
featured: 'false'
draft: 'false'
abstract: "We consider the nonlinear inverse problem of learning a transition operator\
  \ ${A}$ from partial observations across different time scales, or in other words,\
  \ from {sparse observations of its powers ${A},\\cdots,{A}^{T-1}$. This Spatio-Temporal\
  \ Transition Operator Recovery  problem is motivated by the recent interest in learning\
  \ time-varying graph signals that are driven by graph operators depending on the\
  \ underlying graph topology. We address the non-linearity issue by embedding the\
  \ problem into a higher-dimensional space of suitable block-Hankel matrices, where\
  \ it becomes a low-rank matrix completion problem, even if ${A}$ is of full rank.\n\
  For both a uniform and an adaptive random space-time sampling model, we quantify\
  \ the recoverability of the transition operator via suitable measures of incoherence\
  \ of these block-Hankel embedding matrices. For graph transition operators these\
  \ measures of incoherence depend on the interplay between the dynamics and the graph\
  \ topology. \nWe establish quadratic local convergence analysis of a suitable non-convex\
  \ iterative reweighted least squares (IRLS) algorithm, and show that in optimal\
  \ scenarios, no more than $\\mathcal{O}(rn \\log(nT))$ space-time samples are sufficient\
  \ to ensure accurate recovery of a rank-$r$ operator ${A}$ of size $n \\times n$.\
  \ This establishes that {spatial samples} can be substituted by a comparable number\
  \ of {space-time samples}.\nWe provide an efficient implementation of the proposed\
  \ IRLS algorithm with space complexity of order $O(r n T)$ and whose per-iteration\
  \ time complexity is {linear} in $n$. Numerical experiments for transition operators\
  \ based on several graph models confirm that the theoretical findings accurately\
  \ track empirical phase transitions, and illustrate the applicability of the proposed\
  \ algorithm."
---
