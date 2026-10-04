var e=Object.assign({"../content/blog/antennas-in-time.md":`---
title: "Antennas in time: a primer on time-varying permittivity"
date: 2026-09-29
summary: Change a material while a wave is inside it and the wave's frequency changes, not its wavelength. A short introduction to temporal boundaries and why they interest antenna designers.
tags: [Time-varying media, Theory]
---

Every antenna course is built on an unspoken assumption: the materials do not change while the wave passes through them. Drop that assumption and some familiar rules turn inside out. This is the direction my current work is taking, so here is the starting point.

## A boundary in time

At an ordinary interface between two materials, space is no longer uniform but time still is. Frequency is therefore conserved, and the wavenumber changes. That is where Snell's law comes from.

Now imagine the opposite. An unbounded medium is uniform in space, but at the instant $t_0$ its permittivity jumps from $\\varepsilon_1$ to $\\varepsilon_2$. Space is still uniform, so the **wavenumber $k$ is conserved**. Time is not, so the **frequency changes**.

The boundary conditions also swap roles. Across a temporal boundary, the electric displacement $\\mathbf{D}$ and the magnetic flux density $\\mathbf{B}$ stay continuous, while $\\mathbf{E}$ and $\\mathbf{H}$ jump. For non-magnetic media, conserving $k$ while the phase velocity changes gives

$$
\\omega_2 = \\omega_1 \\frac{n_1}{n_2} = \\omega_1 \\sqrt{\\frac{\\varepsilon_1}{\\varepsilon_2}} .
$$

Raise the permittivity and the frequency drops. The wavelength is unchanged.

## The time-reflected wave

A spatial boundary produces a transmitted and a reflected wave. A temporal boundary produces two waves too, but both exist in the new medium: one continues forward and one travels **backward**, a time-reflected wave. Matching $\\mathbf{D}$ and $\\mathbf{B}$ across the jump gives, for non-magnetic media, forward and backward amplitudes in $\\mathbf{D}$ of

$$
D_f = \\frac{1}{2}\\left(1 + \\frac{n_2}{n_1}\\right) D_1,
\\qquad
D_b = \\frac{1}{2}\\left(1 - \\frac{n_2}{n_1}\\right) D_1 .
$$

Energy is not conserved across the jump. Whatever changes the material does work on the field, or takes energy from it.

## Why antenna designers care

Time variation removes some constraints that linear, time-invariant thinking treats as fundamental:

- **Frequency conversion inside the structure.** A modulated substrate can move energy between frequencies without a separate mixer.
- **Matching beyond static limits.** Bandwidth limits such as Bode–Fano are derived for linear, time-invariant networks. Time-varying elements are not bound by them in the same way, which is an active research topic for wideband and pulsed operation.
- **Non-reciprocity without magnets.** Modulation that varies in both space and time can make transmission depend on direction, which normally requires ferrites.

## From theory to hardware

An instantaneous, uniform jump in permittivity is an idealization. Real devices modulate a material with varactors, ferroelectrics, liquid crystals or optically pumped semiconductors, and each has limits on speed, depth of modulation and loss. The interesting design questions sit exactly there: how fast, how deep, and over what volume the modulation needs to be to change how an antenna radiates.

Those questions connect naturally to the tools I already use. Characteristic modes describe what a structure wants to radiate. A time-varying structure changes its modes while it radiates, and understanding that interplay is what I want to work out next.

## Further reading

- F. R. Morgenthaler, "Velocity modulation of electromagnetic waves," *IRE Transactions on Microwave Theory and Techniques*, 1958.
- C. Caloz and Z.-L. Deck-Léger, "Spacetime metamaterials, Part I: General concepts," *IEEE Transactions on Antennas and Propagation*, 2020.
`,"../content/blog/axial-ratio-explained.md":`---
title: Axial ratio, explained with a helix
date: 2026-08-11
summary: What the axial ratio of a circularly polarized antenna measures, why 3 dB became the standard threshold, and how little a 3 dB axial ratio actually costs you.
tags: [Circular polarization, Antenna basics]
---

Every paper on circularly polarized antennas quotes an axial-ratio bandwidth. It is worth being precise about what that number means, because it is easy to treat "AR below 3 dB" as a ritual rather than a measurement.

## Polarization is the shape the field traces

Take a plane wave travelling along $+z$. At a fixed point in space, the electric field is

$$
\\mathbf{E}(t) = \\hat{x}\\,E_1 \\cos(\\omega t) + \\hat{y}\\,E_2 \\cos(\\omega t + \\delta).
$$

As time passes, the tip of $\\mathbf{E}$ traces a curve in the $xy$-plane:

- If $\\delta = 0$ or $180^\\circ$, it moves back and forth along a line: **linear polarization**.
- If $E_1 = E_2$ and $\\delta = \\pm 90^\\circ$, it traces a circle: **circular polarization**.
- Anything else traces an ellipse: **elliptical polarization**, the general case.

Look along the direction of travel instead of at a single point, and the circle becomes a helix. That helix is the figure at the top of the [research page](./research.html).

The handedness follows the IEEE convention: view the wave from behind, looking in the direction it travels. If the field rotates clockwise, it is right-hand circularly polarized (RHCP).

## The axial ratio

The axial ratio (AR) is the ratio of the major to the minor axis of the polarization ellipse. It is 1 for perfect CP and infinite for linear polarization, and is usually quoted in decibels, $\\mathrm{AR_{dB}} = 20\\log_{10}\\mathrm{AR}$, so perfect CP is 0 dB.

From the two components and their phase difference,

$$
\\mathrm{AR} = \\sqrt{
\\frac{E_1^2 + E_2^2 + \\sqrt{E_1^4 + E_2^4 + 2E_1^2E_2^2\\cos 2\\delta}}
     {E_1^2 + E_2^2 - \\sqrt{E_1^4 + E_2^4 + 2E_1^2E_2^2\\cos 2\\delta}}
}.
$$

Two things push a real antenna away from 0 dB: unequal amplitudes ($E_1 \\neq E_2$) and a phase difference that drifts away from 90°. Both change with frequency, which is why the AR is always quoted as a band.

## Why 3 dB?

The 3 dB threshold is a convention, but a sensible one. An axial ratio of 3 dB means $\\mathrm{AR} \\approx 1.41$. Two consequences make that tolerable:

- The **cross-polarized component** is about 15 dB below the co-polarized one, since the cross-polar discrimination is $20\\log_{10}\\dfrac{\\mathrm{AR}+1}{\\mathrm{AR}-1} \\approx 15.3\\ \\text{dB}$.
- The **polarization mismatch** against an ideal CP receiver of the same hand is tiny. The polarization loss factor $\\dfrac{(1+\\mathrm{AR})^2}{2(1+\\mathrm{AR}^2)}$ evaluates to about 0.97, a loss of roughly 0.1 dB.

So a 3 dB axial ratio still delivers almost all of the benefit of circular polarization. Beyond that point, the cross-polar level rises quickly.

## How antennas make circular polarization

The definition above is also the design brief: produce two orthogonal field components of equal amplitude in quadrature. There are two broad strategies.

**Dual feed.** Excite two orthogonal ports with a 90° hybrid. The phase is set by the feed network, which makes wide AR bandwidths possible at the cost of size and complexity.

**Single feed.** Perturb the structure so that one feed excites two orthogonal modes whose resonances are slightly apart. Truncated corners on a patch are the classic example. The phase comes from the structure, which keeps things compact but usually narrows the AR band.

Metasurfaces sit in between. They let a single feed excite several orthogonal modes, and with care you can place two CP points close enough that their AR bands merge. The [post on characteristic modes](./post.html?p=letting-the-modes-design) explains how.

## Reading AR numbers in papers

When you compare designs, compare fractional bandwidths, not absolute ones. For the quad-port MIMO antenna we presented at IEEE MAPCON 2025, the 3 dB AR band runs from 5.82 to 6.64 GHz, about 13% around its centre, inside an impedance band of 5.36 to 7 GHz.

Check, too, where the AR was measured. A boresight AR curve says nothing about how the polarization degrades away from broadside, which matters for any antenna meant to cover a room rather than a point.
`,"../content/blog/letting-the-modes-design.md":`---
title: Letting the modes do the design work
date: 2026-07-14
summary: Characteristic mode analysis tells you which currents a structure wants to carry before you decide where to feed it. Here is how that turns into a recipe for circular polarization.
tags: [CMA, Circular polarization, Metasurfaces]
---

Most antenna design starts with a feed and asks what the structure does with it. Characteristic mode analysis (CMA) turns the question around. It asks what currents the structure would *like* to carry, independent of any feed, and only then asks how to excite the useful ones.

For circularly polarized (CP) antennas this change of viewpoint is unusually productive, because the requirement for CP is itself a statement about modes: two orthogonal radiating currents, equal in amplitude, 90° apart in phase.

## What CMA actually computes

Start from the method-of-moments impedance matrix of a conducting body, $Z = R + jX$. The characteristic modes are the solutions of the generalized eigenvalue problem

$$
X\\,\\mathbf{J}_n = \\lambda_n R\\,\\mathbf{J}_n .
$$

The eigencurrents $\\mathbf{J}_n$ are real and orthogonal over the radiated power, which is what makes them useful as a basis. Each mode comes with an eigenvalue $\\lambda_n$, and three numbers derived from it carry most of the physical meaning:

- **The eigenvalue** $\\lambda_n$ is zero at the mode's resonance. Negative values mean the mode stores mostly electric energy (capacitive), positive values mostly magnetic energy (inductive).
- **Modal significance**, $\\mathrm{MS}_n = \\left|\\dfrac{1}{1 + j\\lambda_n}\\right|$, runs from 0 to 1 and peaks at resonance. The band where $\\mathrm{MS}_n \\ge 0.707$, equivalently $|\\lambda_n| \\le 1$, is a convenient definition of the mode's radiating bandwidth.
- **Characteristic angle**, $\\alpha_n = 180^\\circ - \\arctan\\lambda_n$, is 180° at resonance and is the quantity to watch when you care about phase.

## From modes to a real current

Under an excitation, the total current is a weighted sum of modes:

$$
\\mathbf{J} = \\sum_n \\frac{V_n}{1 + j\\lambda_n}\\,\\mathbf{J}_n ,
\\qquad V_n = \\langle \\mathbf{J}_n, \\mathbf{E}^{i} \\rangle .
$$

The factor $1/(1+j\\lambda_n)$ belongs to the structure. The modal excitation coefficient $V_n$ belongs to the feed: it measures how well the incident field overlaps with each mode's current. That split is the whole design method in one line. You shape the structure to put the right modes in the right place, then choose the feed to set the $V_n$.

## A recipe for circular polarization

Pick two orthogonal modes, $\\mathbf{J}_1$ and $\\mathbf{J}_2$. Suppose the geometry is tuned so that at the target frequency $\\lambda_1 = +1$ and $\\lambda_2 = -1$. Then

$$
\\frac{1}{1 + j} = \\tfrac{1}{\\sqrt{2}}\\,e^{-j45^\\circ},
\\qquad
\\frac{1}{1 - j} = \\tfrac{1}{\\sqrt{2}}\\,e^{+j45^\\circ}.
$$

Both modes have the same significance, 0.707, and their phases differ by exactly 90°. In terms of characteristic angles, the two modes sit at 135° and 225°. If the feed excites them equally, $V_1 = V_2$, the radiated field is circularly polarized.

That gives a clear checklist for the geometry:

1. Find two orthogonal modes that radiate broadside.
2. Separate their resonances so that their MS curves cross near 0.707 at the frequency you want.
3. Place the feed where it couples equally into both, often along a diagonal of the structure.

The interactive figure on the [research page](./research.html) shows exactly this: select $J_1 + jJ_2$ and the current arrows start to rotate.

## Why metasurfaces help

A single patch offers you one or two useful modes and not much freedom to move them. A metasurface above a simple source offers many more. Changing the size of individual unit cells, and making the surface deliberately non-uniform, shifts the resonances of different modes by different amounts.

That freedom is what allows more than one CP point in the same band. In our 2025 paper in *AEU – International Journal of Electronics and Communications*, CMA guided a non-uniform metasurface in which three orthogonal modes produce two CP poles that merge into one broad axial-ratio band, on low-cost FR-4 and in a footprint of 0.7λ × 0.7λ × 0.07λ.

## Where CMA stops

CMA is a source-free analysis of a structure, so it cannot replace a full-wave simulation of the fed antenna. The feed network, the finite ground plane and the substrate all change what you actually excite. Dielectrics deserve particular care, because different CMA formulations treat them differently.

I use CMA to decide what to build and full-wave simulation to decide whether it works. The measurement on the bench has the final word.

## Further reading

- R. F. Harrington and J. R. Mautz, "Theory of characteristic modes for conducting bodies," *IEEE Transactions on Antennas and Propagation*, 1971.
- R. J. Garbacz, "Modal expansions for resonance scattering phenomena," *Proceedings of the IEEE*, 1965.
`,"../content/blog/simulate-fabricate-measure.md":`---
title: "Simulate, fabricate, measure: a checklist for low-cost prototypes"
date: 2026-09-08
summary: The gap between a simulated S11 curve and a measured one is usually made of small, predictable things. This is the checklist I go through before and after a board is made.
tags: [Measurement, Fabrication, FR-4]
---

A simulated antenna is a promise. The fabricated one is the evidence. Most of the gap between the two comes from a short list of details that are easy to forget, especially on inexpensive substrates like FR-4.

## Before fabrication

**Model the substrate you will actually get.** FR-4 is not one material. Its relative permittivity is typically somewhere between about 4.3 and 4.6 and its loss tangent around 0.02, and both vary with the vendor, the glass weave and frequency. Resonant frequency scales roughly as $1/\\sqrt{\\varepsilon_r}$, so moving from 4.4 to 4.6 shifts a 6 GHz resonance down by about 2%, roughly 130 MHz. Run the design at both ends of the plausible range before committing.

**Include the connector.** An SMA launch is a short transmission line with its own discontinuity. At 5–7 GHz it is visible in $S_{11}$. Put a realistic connector model in the simulation, or at least de-embed it consistently.

**Simulate the real board outline.** The ground plane is part of the antenna. A design simulated on an oversized ground behaves differently on a board trimmed to its final size.

**Check mesh convergence.** Refine the mesh until the resonant frequency and the depth of the $S_{11}$ dip stop moving. If they still change by more than about 1% between refinements, the result is not ready.

**Respect the fabrication tolerance.** Etching typically changes copper features by tens of micrometres. Anything that depends on a 0.1 mm gap deserves a tolerance sweep.

## On the bench

**Calibrate at the end of the cable.** A full SOLT calibration at the connector plane, not at the analyser's port, removes the cable from the measurement. Check the calibration with a known load before you trust it.

**Watch the cable.** On small antennas, current on the outside of the coaxial cable becomes part of the radiator. Route the cable away from the antenna, and use ferrite chokes if the response moves when you touch the cable.

**Compare curves, not dips.** A matching resonant frequency can hide a different bandwidth or an extra resonance. Overlay the full measured and simulated $S_{11}$ and quote the −10 dB band.

**Measure every port of a MIMO antenna.** Isolation needs the full $S$-matrix. The envelope correlation coefficient can be estimated from $S$-parameters,

$$
\\rho_e = \\frac{\\left|S_{11}^{*}S_{12} + S_{21}^{*}S_{22}\\right|^2}
{\\left(1 - |S_{11}|^2 - |S_{21}|^2\\right)\\left(1 - |S_{22}|^2 - |S_{12}|^2\\right)},
$$

but this formula assumes a lossless, highly efficient antenna. For a lossy substrate, calculate the ECC from measured or simulated far-field patterns as well.

**Axial ratio and gain need far-field measurements.** A network analyser alone cannot tell you about polarization. AR and gain come from an anechoic chamber or a calibrated far-field setup.

## After the measurement

When simulation and measurement disagree, change one assumption at a time in the model: permittivity first, then the connector, then the fabricated dimensions as actually measured with a microscope. The goal is not to make the curves match. It is to understand why they don't, so the next design starts closer.
`});function t(e,t){let n=t.split(`/`).pop().replace(/\.md$/,``),r=/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(e),i={},a=e;if(r){a=r[2];for(let e of r[1].split(`
`)){let t=/^(\w+):\s*(.*)$/.exec(e.trim());if(!t)continue;let n=t[2].trim();n=n.startsWith(`[`)&&n.endsWith(`]`)?n.slice(1,-1).split(`,`).map(e=>e.trim().replace(/^["']|["']$/g,``)).filter(Boolean):n===`true`||n===`false`?n===`true`:n.replace(/^["']|["']$/g,``),i[t[1]]=n}}let o=a.replace(/\$\$[\s\S]*?\$\$/g,` `).split(/\s+/).filter(Boolean).length;return{slug:n,title:i.title||n,date:i.date||``,summary:i.summary||``,tags:Array.isArray(i.tags)?i.tags:i.tags?[i.tags]:[],draft:i.draft===!0,minutes:Math.max(1,Math.round(o/220)),body:a}}var n=Object.entries(e).map(([e,n])=>t(n,e)).filter(e=>!e.draft).sort((e,t)=>e.date<t.date?1:-1),r=e=>e?new Date(`${e}T00:00:00`).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`}):``,i=e=>`./post.html?p=${encodeURIComponent(e)}`;export{i as n,n as r,r as t};