---
title: "Mass-Zero constrained molecular dynamics for electrostatic interactions"
collection: publications
category: manuscripts
# permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'Optimal exploitation of supercomputing resources for the evaluation of electrostatic forces remains a challenge in molecular dynamics simulations of very large systems. The most efficient methods are currently based on particle-mesh Ewald sums and achieve semi-logarithmic scaling in the number of particles. These methods, however, solve the problem in reciprocal space, requiring extensive use of Fast Fourier transforms (FFT). The communication overhead associated with FFTs is a well-known bottleneck for high-end parallelization. In this work, we introduce a novel real-space approach to solve the Poisson equation on a grid. Our method exploits an extended Lagrangian in which the values of the field at the grid points are treated as auxiliary variables of zero inertia, and the discretized Poisson equation is enforced as dynamical constraint. We first analyze the method using a toy model, and then consider realistic simulations of molten NaCl that validate its ability to reproduce structural and transport properties, and showcase the features of our algorithm on a non-trivial benchmark. Finally, we discuss the computational performance and scaling behavior of the algorithm.'
date: 26-05-2025
venue: 'ArXiv Preprint'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://arxiv.org/pdf/2505.20418'
# citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
