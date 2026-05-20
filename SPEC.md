# Linear Algebra Interactive Learning Website — Project Specification

> **Course:** MA2034 Linear Algebra (University of Moratuwa)
> **Notes source:** `MA2034-LinearAlgebra-23S4-Notes` (ucjaya@uom.lk)

## Overview

An interactive, self-paced web application built to complement the MA2034 Linear Algebra course. The course is proof-based and abstract, starting from algebraic structures (groups and fields) and building up through vector spaces, inner product spaces, linear transformations, spectral theory, and matrix decompositions. The site bridges the gap between terse lecture notes and deep understanding — every definition gets an intuition-first explanation, every theorem gets a worked example, and every abstract concept gets a visual or concrete anchor.

---

## Goals

- Bridge terse lecture-note style (definitions + theorems) into full, explained lessons
- Follow the **Intuition → Formal Definition → Proof Sketch → Examples → Practice** teaching flow
- Make abstract structures (groups, fields, general vector spaces) feel concrete before going abstract
- Cover every definition, theorem, and worked example from the MA2034 notes
- Provide immediate feedback on practice questions
- Be fully self-contained — no external accounts or logins required

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SSG for content pages, great for MDX, SEO-friendly |
| Language | **TypeScript** | Type safety across components and math utilities |
| Styling | **Tailwind CSS** | Fast utility-first styling |
| Math Rendering | **KaTeX** | Fast, accurate LaTeX rendering in the browser |
| Visualizations | **Three.js / React Three Fiber** | 3D vector/transformation visualizations |
| 2D Graphics | **Mafs** (React math graphing) | 2D plots, vector diagrams, transformations |
| Animations | **Framer Motion** | Smooth page and component transitions |
| Content | **MDX** (Markdown + JSX) | Write lessons in Markdown, embed React components |
| State | **Zustand** | Lightweight global state (progress tracking) |
| Storage | **localStorage** | Persist user progress locally, no backend needed |
| Code | **Shiki** | Syntax-highlighted Python/MATLAB code examples |
| Tests | **Vitest** | Unit tests for math utility functions |

---

## Site Structure

```
/                          → Landing page (syllabus overview, progress dashboard)
/topics/[slug]             → Topic landing page (overview + sub-topic list)
/topics/[slug]/[lesson]    → Individual lesson page
/topics/[slug]/[lesson]/practice  → Practice problems for the lesson
/about                     → About the teaching approach
```

---

## Syllabus Content Outline (MA2034)

Each section maps to a `/topics/[slug]` route. Lesson slugs are listed under each section. Definitions, Theorems, and Examples from the lecture notes are the ground truth for content — every item listed here has a corresponding Definition/Theorem/Example in the notes.

---

### Section I — Abstract Algebraic Structures
**Route:** `/topics/algebraic-structures`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Groups | `groups` | Def 1 (Group), Def 2 (Abelian), Thm 1 (uniqueness), Ex 1 (ℝ, GL₂, Dihedral, Elliptic Curves) |
| 2 | Fields | `fields` | Def 3 (Field), Thm 2 (Finite Fields), Thm 3 (field properties), Ex 2 (ℝ, ℚ, ℤ, 𝔽ₚ, mod 4) |

**Section goal:** Establish the algebraic scaffolding that vector spaces are built on. Students must understand *why* ℝ and ℂ are fields before we use them as scalar fields.

---

### Section II — Vector Spaces
**Route:** `/topics/vector-spaces`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Vector Space Definition | `definition` | Def 4 (Vector Space), Note 1 (operations), Note 2/3 (standard notation), Thm 4 (zero/inverse properties), Ex 3 (ℝ³, ℂ³, polynomials, matrices, ℝ⁺ with exotic ops) |
| 2 | Subspaces | `subspaces` | Def 5 (Subspace), Thm 5 (closure criterion), Ex 4 (ℝ³⊂ℂ³, polynomials, GL₂, ODE solutions) |
| 3 | Linear Combinations & Span | `span` | Def 6 (Linear Combination), Def 7 (Span), Thm 6 (SpanB is smallest subspace), Ex 5 (spanning ℝ³) |
| 4 | Linear Independence | `linear-independence` | Def 8 (LI/LD), Thm 7 (LD → element as linear combo), Ex 6 & 7 (ℝ³, zero vector, null set, supersets) |
| 5 | Bases | `bases` | Def 9 (Basis), Def 10 (Hamel Basis), Def 13 (Schauder Basis), Thm 9–13, Ex 8 & 9 (ℝ³, polynomials, matrices, ODE solutions), Ex 10 (infinite-dim spaces, Fourier series) |
| 6 | Dimension & Zorn's Lemma | `dimension` | Def 12 (Dimension), Def 11 (Chain/Maximal), Thm 14 (Zorn's Lemma), Thm 15 (every VS has Hamel basis) + full proof, Note 4 (rank and solutions to Ax=b), Note 5 (Fourier series) |

---

### Section III — Inner Product & Normed Spaces
**Route:** `/topics/inner-product-spaces`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Inner Products | `inner-products` | Def 14 (Inner Product over ordered field), complex case adjustment, norm definition, Ex 11 (dot product, Hermitian, L² integral, trace inner product) |
| 2 | Cauchy-Schwarz & Triangle Inequalities | `inequalities` | Thm 17 (linearity in second arg), Thm 18 (Cauchy-Schwarz), Thm 19 (Triangle), Ex 12 (ℝⁿ, ℂⁿ, L₂[a,b]) |
| 3 | Orthogonality & Orthonormal Sets | `orthogonality` | Def 15 (orthogonal/orthonormal), Thm 20 (orthogonal → LI) |
| 4 | Gram-Schmidt Process | `gram-schmidt` | Thm 21 (Gram-Schmidt), Ex 13 (vectors in ℝ³, polynomials {1,x,x²,x³}) |
| 5 | Special Orthogonal Polynomials | `orthogonal-polynomials` | Note 6: Legendre polynomials (Legendre ODE), Laguerre polynomials (Laguerre ODE), Chebyshev polynomials (Chebyshev ODE, Tₙ(cosθ)=cos nθ) |
| 6 | Orthogonal Complements & Best Approximation | `orthogonal-complements` | Def 16 (W⊥), Thm 22 (W⊥ subspace, direct sum V=W⊕W⊥, Pu = best approximation), Ex 14 (projection in ℝ³, polynomial approximation of eˣ/4) |
| 7 | Norms, Banach & Hilbert Spaces | `normed-spaces` | Def 17 (Norm), Note 7 (Cauchy sequences, completeness, Banach space, Hilbert space) |
| 8 | Metric Spaces | `metric-spaces` | Def 18 (Metric/distance function), relationship: inner product → norm → metric |

---

### Section IV — Linear Transformations
**Route:** `/topics/linear-transformations`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Definition & Properties | `definition` | Def 19 (Linear Transformation), Thm 23 (T(0)=0, T(-u)=-T(u)), Ex 15 (matrix map ℝ³→ℝ⁴, integration, differential operator) |
| 2 | Kernel & Range | `kernel-range` | Def 20 (ker T, ran T), Thm 24 (ker/ran are subspaces, nullT, rankT), Ex 16 (find nullT, rankT for T:ℝ³→ℝ⁴) |
| 3 | Rank-Nullity Theorem | `rank-nullity` | Thm 25 (nullT + rankT = dimV) with full proof, Ex 17 (verify for T:ℝ₃[x]→ℝ₂[x], T(p)=xp''+p' with full proof) |
| 4 | Matrix of a Linear Transformation | `matrix-of-lt` | Def 21 (Matrix of T w.r.t. bases), Thm 26 (change of basis: A'=Q⁻¹AP), Ex 18 (4 examples: standard basis, non-standard basis, polynomial spaces) |
| 5 | Matrix Spaces: RREF, Row/Column Space | `matrix-spaces` | Def 22 (RREF, row space, row rank, column space, column rank), Thm 27 (all ranks are equal), Note 4 (solutions to Ax=b and rank conditions) |

---

### Section V — Spectral Theory
**Route:** `/topics/spectral-theory`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Eigenvalues & Eigenvectors | `eigenvalues` | Def 23 (eigenvalue/eigenvector for L.T.), eigenspace Vλ = ker(T-λI), Def 24 (for matrices: Av=λv, det(A-λI)=0), Ex 19 (integration operator DNE, matrix examples, polynomial operators) |
| 2 | Characteristic Polynomial & Cayley-Hamilton | `characteristic-polynomial` | Def 24 (characteristic polynomial f(x)), Thm 29 (∏λ=detA, ∑λ=trA, f(A)=O) |
| 3 | Similar Matrices | `similar-matrices` | Def 24 (similar matrices AP=PB), Thm 28 (similar → same eigenvalues, basis-independence of eigenvalues, distinct eigenvalues → LI eigenvectors) |
| 4 | Minimal Polynomial & Multiplicities | `multiplicities` | Def 25 (Minimal polynomial), Thm 30 (f and g have same roots; g divides f), Def 26 (algebraic multiplicity aλ, geometric multiplicity gλ, minimal multiplicity mλ) |
| 5 | Diagonalization | `diagonalization` | Def 27 (Diagonalizable), Thm 31 (equivalent conditions: aλ=gλ, mλ=1, eigenvectors form a basis), Ex 20 (three 3×3 matrices: find multiplicities, diagonalize) |

---

### Section VI — Advanced Matrices & Decompositions
**Route:** `/topics/decompositions`

| # | Lesson | Slug | Key Items from Notes |
|---|--------|------|----------------------|
| 1 | Hermitian & Unitary Matrices | `hermitian-unitary` | Def 28 (Hermitian: Aᴴ=A), Def 29 (Unitary: PᴴP=I), Thm 32 (Hermitian → real eigenvalues, orthogonal eigenvectors, spectral theorem) |
| 2 | Positive Definite Matrices | `positive-definite` | Def 30 (Positive Definite), Thm 33 (Hermitian PD ↔ all eigenvalues positive), Ex 21 (identify quadratic surface, solve system of ODEs using diagonalization) |
| 3 | Jordan Decomposition | `jordan-decomposition` | Def 31 (Jordan block, Jordan decomposition A=PJP⁻¹), Thm 34 (every A∈ℂⁿˣⁿ has Jordan decomp), Thm 35 (gλ=r, aλ=∑kᵢ, mλ=max{kᵢ}, relationship aλ−gλ=mλ−1 for n≤3), Ex 22 (three matrices including 4×4 and 6×6) |
| 4 | QR Decomposition & QR Algorithm | `qr-decomposition` | Def 32 (QR decomposition via Gram-Schmidt), Thm 36 (QR algorithm for eigenvalues: iterative Aₖ→upper triangular) |
| 5 | Singular Value Decomposition (SVD) | `svd` | Note 8, Thm 37 (AᴴA and AAᴴ properties), Def 33 (singular values/vectors, Av=σu, AᴴAv=σ²v), Thm 38 (every A has SVD, rank = # nonzero singular values), full derivation of A=UΣVᴴ |

---

## Lesson Page Anatomy

Every lesson follows this fixed structure, adapted for the abstract/proof-based nature of MA2034:

```
┌─────────────────────────────────────┐
│  Breadcrumb: Section > Lesson       │
│  Progress bar (overall + section)   │
├─────────────────────────────────────┤
│  1. BIG IDEA  (1–2 sentence hook)   │
│     "Why does this exist?"          │
│     Connection to previous lesson   │
├─────────────────────────────────────┤
│  2. INTUITION  (no symbols yet)     │
│     Concrete everyday analogy       │
│     Simple numeric example          │
│     Visual / diagram                │
├─────────────────────────────────────┤
│  3. FORMAL DEFINITION               │
│     LaTeX definition boxes          │
│     Every symbol explained inline   │
│     Notation variants noted         │
├─────────────────────────────────────┤
│  4. THEOREM / KEY PROPERTIES        │
│     Statement (LaTeX)               │
│     Proof sketch (collapsible)      │
│     Full proof (collapsible,        │
│     matching notes verbatim)        │
├─────────────────────────────────────┤
│  5. WORKED EXAMPLES  (from notes)   │
│     Every example from MA2034 notes │
│     Step-by-step with toggles       │
│     Interactive inputs where        │
│     possible (matrix, polynomial)   │
├─────────────────────────────────────┤
│  6. VISUAL / INTERACTIVE            │
│     Geometric or structural diagram │
│     Sliders / live computation      │
│     (where concept permits)         │
├─────────────────────────────────────┤
│  7. COMMON MISTAKES & PITFALLS      │
│     ⚠ Callout boxes                 │
│     "Students often confuse..."     │
├─────────────────────────────────────┤
│  8. CONNECTIONS                     │
│     Links to prerequisite lessons   │
│     Links to where this is used     │
├─────────────────────────────────────┤
│  9. SUMMARY  (cheat-sheet strip)    │
│     All definitions in one place    │
│     All theorems bullet-listed      │
├─────────────────────────────────────┤
│  10. PRACTICE PROBLEMS              │
│     [Go to Practice →]              │
└─────────────────────────────────────┘
```

---

## Practice Problem Page

Each lesson has an associated practice page. Problems are grounded in the MA2034 examples and common exam-style questions for this course.

- **3 difficulty tiers:**
  - **Verify** — Check that a given object satisfies a definition (e.g. "Is this a group?")
  - **Compute** — Apply a procedure (e.g. find eigenvalues, perform Gram-Schmidt)
  - **Prove/Reason** — Short justification or proof (e.g. "Show ker T is a subspace")
- **Problem types:**
  - True/False with justification required
  - Multi-step computation with fill-in fields
  - Free-response with reveal-able step-by-step solution (matching notes style)
  - "Which of the following..." selection (drawn directly from Examples in notes)
- **Hints system:** 3-tier progressive hints — first hint is conceptual, second points to the relevant theorem, third shows the first step
- **Solution reveal:** Fully worked solution referencing the relevant Definition/Theorem numbers from notes
- **Attempt tracking:** Stored locally; shows "Solved ✓" on lesson card

---

## Interactive Components (Reusable)

| Component | Used In | Description |
|---|---|---|
| `<GroupTable />` | Section I | Cayley table for a finite group, check axioms live |
| `<FieldChecker />` | Section I | Step through field axiom verification |
| `<VectorSpaceAxioms />` | Section II | Highlight which axiom a given operation satisfies/fails |
| `<VectorCanvas2D />` | Sections II, III | Draw/drag vectors in ℝ², show span, LI/LD, projections |
| `<SpanExplorer />` | Section II | Visualize span of 1, 2, 3 vectors in ℝ³ |
| `<BasisBuilder />` | Section II | Interactively extend LI set to basis, or reduce spanning set |
| `<MatrixInput />` | Sections IV, V, VI | Editable matrix grid with live RREF, rank, det computation |
| `<InnerProductCalc />` | Section III | Compute ⟨u,v⟩ for standard and custom inner products |
| `<GramSchmidt />` | Section III | Animated step-by-step Gram-Schmidt orthogonalization |
| `<ProjectionViz />` | Section III | Show projection Pu onto subspace W, visualize best approximation |
| `<PolynomialPlot />` | Section III | Plot Legendre, Laguerre, Chebyshev polynomials, verify orthogonality |
| `<TransformationViz />` | Section IV | Grid that deforms as user edits a 2×2 or 3×3 transformation matrix |
| `<KernelRangeViz />` | Section IV | Show ker T (collapsed directions) and ran T (image space) |
| `<RREFStepper />` | Section IV | Step-through row reduction with operation labels |
| `<EigenViz />` | Section V | Eigenvectors remain on their lines; shows eigenspace Vλ |
| `<CharPolyCalc />` | Section V | Compute det(A-λI) symbolically for 2×2 and 3×3 |
| `<JordanBuilder />` | Section VI | Build Jordan normal form from block sizes |
| `<SVDViz />` | Section VI | Decompose A=UΣVᴴ, animate singular values geometrically |
| `<QRStepper />` | Section VI | Step-through QR algorithm iterations |
| `<ProofBlock />` | All | Collapsible proof with sketch / full proof toggle |
| `<DefinitionBox />` | All | Styled KaTeX definition with anchor link |
| `<TheoremBox />` | All | Styled KaTeX theorem with proof toggle |
| `<PracticeCard />` | All | Self-contained problem + hint + solution component |
| `<StepReveal />` | All | Click-to-reveal worked solution steps |
| `<ProgressRing />` | All | SVG ring chart for section completion |

---

## Teaching Principles Applied

1. **Intuition before formalism** — Every definition/theorem starts with a plain-English anchor before the LaTeX. For abstract algebra (groups, fields, general vector spaces) this is especially critical.
2. **Concrete examples first** — Use ℝ², ℝ³, and 2×2 matrices to build intuition before generalizing to abstract vector spaces over arbitrary fields.
3. **Notes-faithful** — Every Definition, Theorem, and Example from the MA2034 notes appears verbatim on the site. Students can use the site as a companion while reading the notes.
4. **Proof transparency** — Proofs are shown in full (matching notes) but gated behind a toggle. A "sketch" mode gives the key idea in 1–2 sentences.
5. **Spaced recall** — Later sections explicitly back-reference earlier results (e.g. the Gram-Schmidt section references linear independence from Section II).
6. **Multiple representations** — Abstract definitions are accompanied by at least one concrete example in ℝⁿ, one in polynomial space, and one in matrix space when possible.
7. **Common mistakes highlighted** — Dedicated ⚠ callouts for typical errors (e.g. confusing geometric vs algebraic multiplicity, forgetting ordered basis matters for matrix of LT).
8. **"Why does this structure exist?" framing** — Every section opens with motivation: groups before fields, fields before vector spaces, inner products before Gram-Schmidt.

---

## UI / UX Design

### Layout
- Fixed left sidebar: syllabus navigation tree (collapsible modules)
- Main content area: lesson/practice content (max-width prose)
- Right sidebar (desktop): on-page contents (jump links) + progress mini-map
- Mobile: bottom tab navigation

### Color System
```
Background:   #0f1117  (dark mode default)
Surface:      #1a1d27
Primary:      #6366f1  (indigo — math/academic feel)
Accent:       #22d3ee  (cyan — interactive elements)
Success:      #4ade80  (green — correct answer)
Warning:      #fb923c  (orange — hint/caution)
Error:        #f87171  (red — incorrect answer)
Text:         #e2e8f0
Muted:        #64748b
```

### Typography
- Headings: **Inter** (clean, technical)
- Body: **Inter**
- Math: **KaTeX** built-in fonts
- Code: **JetBrains Mono**

### Accessibility
- WCAG AA contrast ratios throughout
- All interactive visuals have text fallback descriptions
- Keyboard-navigable practice problems
- `prefers-reduced-motion` respected for all animations

---

## Progress System

- Progress stored in `localStorage` under key `linear-algebra-progress`
- Schema:
```json
{
  "lessons": {
    "vectors-dot-product": { "read": true, "practiceScore": 3, "practiceTotal": 5 },
    ...
  },
  "lastVisited": "/topics/matrices/matrix-multiplication"
}
```
- Landing page shows overall % complete + per-module rings
- Lesson cards show: Not Started / In Progress / Complete badge

---

## File Structure

```
e:/Github/Linear/
├── SPEC.md                              ← this file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── public/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx                   ← root layout (sidebar, nav)
│   │   ├── page.tsx                     ← landing / dashboard
│   │   └── topics/
│   │       └── [slug]/
│   │           ├── page.tsx             ← section overview
│   │           └── [lesson]/
│   │               ├── page.tsx         ← lesson content
│   │               └── practice/
│   │                   └── page.tsx     ← practice problems
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   └── Breadcrumb.tsx
│   │   ├── lesson/
│   │   │   ├── DefinitionBox.tsx        ← styled Def with anchor
│   │   │   ├── TheoremBox.tsx           ← styled Thm with proof toggle
│   │   │   ├── ProofBlock.tsx           ← sketch / full proof toggle
│   │   │   ├── StepReveal.tsx           ← worked example steps
│   │   │   └── SummaryBox.tsx
│   │   ├── practice/
│   │   │   ├── PracticeCard.tsx
│   │   │   ├── HintSystem.tsx
│   │   │   └── SolutionReveal.tsx
│   │   ├── visuals/
│   │   │   ├── GroupTable.tsx           ← Cayley table for finite groups
│   │   │   ├── FieldChecker.tsx         ← field axiom step-through
│   │   │   ├── VectorSpaceAxioms.tsx    ← axiom highlighter
│   │   │   ├── VectorCanvas2D.tsx       ← span, LI/LD, projections
│   │   │   ├── SpanExplorer.tsx         ← span visualizer in ℝ³
│   │   │   ├── BasisBuilder.tsx         ← extend/reduce to basis
│   │   │   ├── MatrixInput.tsx          ← live RREF, rank, det
│   │   │   ├── InnerProductCalc.tsx     ← ⟨u,v⟩ calculator
│   │   │   ├── GramSchmidt.tsx          ← animated Gram-Schmidt
│   │   │   ├── ProjectionViz.tsx        ← Pu best approximation
│   │   │   ├── PolynomialPlot.tsx       ← Legendre/Laguerre/Chebyshev
│   │   │   ├── TransformationViz.tsx    ← grid deformation
│   │   │   ├── KernelRangeViz.tsx       ← ker T / ran T visualization
│   │   │   ├── RREFStepper.tsx          ← row reduction step-through
│   │   │   ├── EigenViz.tsx             ← eigenvector/eigenspace
│   │   │   ├── CharPolyCalc.tsx         ← det(A-λI) symbolic
│   │   │   ├── JordanBuilder.tsx        ← Jordan block constructor
│   │   │   ├── SVDViz.tsx               ← A=UΣVᴴ decomposition
│   │   │   └── QRStepper.tsx            ← QR algorithm iterations
│   │   └── progress/
│   │       ├── ProgressRing.tsx
│   │       └── LessonCard.tsx
│   ├── content/
│   │   └── topics/
│   │       ├── algebraic-structures/
│   │       │   ├── index.mdx
│   │       │   ├── groups.mdx
│   │       │   └── fields.mdx
│   │       ├── vector-spaces/
│   │       │   ├── index.mdx
│   │       │   ├── definition.mdx
│   │       │   ├── subspaces.mdx
│   │       │   ├── span.mdx
│   │       │   ├── linear-independence.mdx
│   │       │   ├── bases.mdx
│   │       │   └── dimension.mdx
│   │       ├── inner-product-spaces/
│   │       │   ├── index.mdx
│   │       │   ├── inner-products.mdx
│   │       │   ├── inequalities.mdx
│   │       │   ├── orthogonality.mdx
│   │       │   ├── gram-schmidt.mdx
│   │       │   ├── orthogonal-polynomials.mdx
│   │       │   ├── orthogonal-complements.mdx
│   │       │   ├── normed-spaces.mdx
│   │       │   └── metric-spaces.mdx
│   │       ├── linear-transformations/
│   │       │   ├── index.mdx
│   │       │   ├── definition.mdx
│   │       │   ├── kernel-range.mdx
│   │       │   ├── rank-nullity.mdx
│   │       │   ├── matrix-of-lt.mdx
│   │       │   └── matrix-spaces.mdx
│   │       ├── spectral-theory/
│   │       │   ├── index.mdx
│   │       │   ├── eigenvalues.mdx
│   │       │   ├── characteristic-polynomial.mdx
│   │       │   ├── similar-matrices.mdx
│   │       │   ├── multiplicities.mdx
│   │       │   └── diagonalization.mdx
│   │       └── decompositions/
│   │           ├── index.mdx
│   │           ├── hermitian-unitary.mdx
│   │           ├── positive-definite.mdx
│   │           ├── jordan-decomposition.mdx
│   │           ├── qr-decomposition.mdx
│   │           └── svd.mdx
│   ├── lib/
│   │   ├── math/
│   │   │   ├── matrix.ts              ← RREF, det, rank, multiply
│   │   │   ├── eigen.ts               ← characteristic poly, eigenspaces
│   │   │   ├── gramschmidt.ts         ← Gram-Schmidt algorithm
│   │   │   ├── jordan.ts              ← Jordan form computation
│   │   │   ├── svd.ts                 ← SVD algorithm
│   │   │   └── polynomial.ts          ← Legendre/Laguerre/Chebyshev
│   │   ├── content.ts                 ← MDX loading utilities
│   │   └── progress.ts                ← localStorage helpers
│   ├── hooks/
│   │   ├── useProgress.ts
│   │   └── useLesson.ts
│   ├── store/
│   │   └── progressStore.ts           ← Zustand store
│   └── types/
│       ├── lesson.ts
│       └── practice.ts
```

---

## MDX Lesson Format

Each `.mdx` lesson file uses frontmatter + custom components. The `notesRef` field maps each lesson item back to the source Definition/Theorem/Example numbers in the MA2034 notes.

```mdx
---
title: "Eigenvalues & Eigenvectors"
section: "spectral-theory"
order: 1
estimatedMinutes: 25
prerequisites: ["linear-transformations/definition", "vector-spaces/bases", "linear-transformations/kernel-range"]
notesRef:
  definitions: [23, 24]
  theorems: [28]
  examples: [19]
tags: ["eigenvalue", "eigenvector", "eigenspace", "characteristic-polynomial"]
---

import { DefinitionBox, TheoremBox, ProofBlock, EigenViz,
         MatrixInput, CharPolyCalc, StepReveal, PracticeCard } from '@/components'

## Big Idea
A linear transformation usually moves every vector to a completely new direction.
But some special vectors — **eigenvectors** — only get *scaled*, never rotated.
The scaling factor is the **eigenvalue**.

## Intuition
Imagine stretching a rubber sheet. Most points move in complicated ways.
But points on the x-axis only slide along the x-axis (scaled). Points on the y-axis
only slide along the y-axis. Those axes are the "eigen-directions."

<EigenViz interactive />

## Formal Definition (Definition 23 — Linear Transformation form)

<DefinitionBox id="def-23" title="Eigenvalue & Eigenvector of a Linear Transformation">
Let $T: V \to V$ be a linear transformation over $F$.
$\lambda \in F$ is an **eigenvalue** and $\mathbf{0} \ne v \in V$ is a corresponding **eigenvector** iff
$$T(v) = \lambda v$$
The **eigenspace** $V_\lambda = \ker(T - \lambda I) = \{v \in V \mid T(v) = \lambda v\}$
</DefinitionBox>

## For Matrices (Definition 24)

<DefinitionBox id="def-24" title="Eigenvalue & Eigenvector of a Matrix">
For $A \in F^{n \times n}$, eigenvalues and eigenvectors satisfy $Av = \lambda v$
where $\lambda \in F$ and $\mathbf{0} \ne v \in F^n$.

Finding eigenvalues: $\det(A - \lambda I) = 0$
</DefinitionBox>

## Worked Examples (Example 19 from Notes)

<StepReveal title="Example 19.2 — Find eigenvalues of T((x,y,z)) = (2x+y, −x−2y+2z, 2x+y)">
  Step 1: Write the matrix A w.r.t. standard basis...
  Step 2: Compute det(A − λI)...
  Step 3: Solve characteristic equation...
  Step 4: For each λ, find ker(A − λI)...
</StepReveal>

## Interactive: Try Your Own Matrix
<MatrixInput rows={3} cols={3} showEigenvalues showEigenspaces />
```

---

## Implementation Phases

### Phase 1 — Foundation (Week 1–2)
- [ ] Next.js project scaffolding with TypeScript
- [ ] Tailwind + KaTeX + MDX setup
- [ ] `DefinitionBox`, `TheoremBox`, `ProofBlock` components (these are needed for every lesson)
- [ ] `StepReveal` and `PracticeCard` components
- [ ] Sidebar navigation with all 6 sections + lesson tree
- [ ] Progress system (localStorage)
- [ ] Write Section I fully: Groups + Fields (2 lessons — good test bed for abstract content)

### Phase 2 — Vector Spaces Content (Week 3–4)
- [ ] Write all 6 lessons in Section II (Vector Spaces)
- [ ] `VectorCanvas2D`, `SpanExplorer`, `BasisBuilder` interactive components
- [ ] `MatrixInput` with live RREF and rank
- [ ] `RREFStepper` (used in Section IV but needed to show solutions to Ax=b in Section II)
- [ ] Practice problems for Sections I + II (5 per lesson min.)

### Phase 3 — Inner Products & Linear Transformations (Week 5–6)
- [ ] Write all 8 lessons in Section III (Inner Product Spaces)
- [ ] Write all 5 lessons in Section IV (Linear Transformations)
- [ ] `GramSchmidt`, `ProjectionViz`, `InnerProductCalc` components
- [ ] `PolynomialPlot` for Legendre/Laguerre/Chebyshev
- [ ] `TransformationViz`, `KernelRangeViz` components
- [ ] Practice problems for Sections III + IV

### Phase 4 — Spectral Theory & Decompositions (Week 7–8)
- [ ] Write all 5 lessons in Section V (Spectral Theory)
- [ ] Write all 5 lessons in Section VI (Decompositions)
- [ ] `EigenViz`, `CharPolyCalc`, `JordanBuilder` components
- [ ] `SVDViz`, `QRStepper` components
- [ ] Practice problems for Sections V + VI

### Phase 5 — Polish (Week 9)
- [ ] Mobile responsiveness
- [ ] Accessibility audit (WCAG AA)
- [ ] Landing page + progress dashboard with section rings
- [ ] Quick-reference cheat sheets (one per section)
- [ ] Performance audit (Lighthouse ≥ 90)
- [ ] Cross-link all "prerequisites" and "used in" connections

---

## Out of Scope (v1)

- User accounts / cloud sync
- Video content
- Real-time collaboration
- Backend / API
- Determinants lesson (not in MA2034 notes as a standalone topic — det appears as a tool inside eigenvalue theory)
- Exporting to PDF (except print CSS for cheat sheets)

---

## Open Questions / Decisions Needed

- [ ] Should code examples (Python/NumPy) be included for computational sections (RREF, eigenvalues, SVD)?
- [ ] Dark mode only, or light/dark toggle?
- [ ] Should the Zorn's Lemma proof (Thm 15) be presented in full or flagged as "advanced / optional"?
- [ ] For infinite-dimensional examples (Fourier series, Legendre polynomials) — show interactive plots or static diagrams?
- [ ] Should Example 19.1 (integral operator eigenvalues DNE) be a lesson highlight showing what *fails* as a teaching device?

---

## Content Density Reference

| Section | Lessons | Definitions | Theorems | Examples |
|---------|---------|-------------|----------|---------|
| I — Algebraic Structures | 2 | 3 | 3 | 2 |
| II — Vector Spaces | 6 | 9 | 13 | 10 |
| III — Inner Product Spaces | 8 | 5 | 8 | 4 |
| IV — Linear Transformations | 5 | 4 | 5 | 4 |
| V — Spectral Theory | 5 | 6 | 6 | 3 |
| VI — Decompositions | 5 | 5 | 4 | 2 |
| **Total** | **31** | **32** | **39** | **25** |

All 32 definitions, 39 theorems, and 25 examples from the MA2034 notes must appear on the site.
