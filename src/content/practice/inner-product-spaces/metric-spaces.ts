import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "metric-verify-discrete",
    question:
      "Verify that the discrete metric d(x,y) = 1 if x ≠ y, 0 if x = y satisfies all four metric axioms (Definition 18) on any set X.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Axioms 1 and 2 are immediate by definition: d(x,y) ∈ {0,1} ≥ 0, and d(x,y)=0 iff x=y.",
      "Axiom 3 (symmetry): d(x,y) = 1 iff x≠y iff y≠x iff d(y,x)=1. ✓",
      "Axiom 4 (triangle): If x=z, d(x,z)=0 ≤ anything. If x≠z, then either x≠y or y≠z (at least one), so d(x,y)+d(y,z) ≥ 1 = d(x,z). ✓",
    ],
    solution:
      "Check all four axioms for $d(x,y)=0$ if $x=y$, and $1$ otherwise.\n\n1. **Nonnegativity:** $d(x,y)\in\{0,1\}\subset[0,\infty)$.\n\n2. **Identity of indiscernibles:** By definition, $d(x,y)=0$ iff $x=y$.\n\n3. **Symmetry:** $x\neq y$ iff $y\neq x$, so $d(x,y)=d(y,x)$.\n\n4. **Triangle inequality:** If $x=z$, then $d(x,z)=0\le d(x,y)+d(y,z)$. If $x\neq z$, then at least one of $x\neq y$ or $y\neq z$ holds, so at least one of $d(x,y),d(y,z)$ is $1$. Hence $d(x,y)+d(y,z)\ge1=d(x,z)$.\n\nSo the discrete metric satisfies Definition 18 on any set $X$. $\\blacksquare$",
  },
  {
    id: "metric-norm-induces",
    question:
      "Given the ℓ¹ norm ‖v‖₁ on ℝⁿ, define d(u,v) = ‖u−v‖₁. Verify this is a metric and compute d((1,2),(3,1)) in ℝ².",
    type: "verification",
    difficulty: "easy",
    hints: [
      "For any norm ‖·‖, d(u,v) = ‖u−v‖ is always a metric — the verification is the same as in the lesson: follow the 4 axioms.",
      "Symmetry: ‖u−v‖ = ‖−(v−u)‖ = |−1|‖v−u‖ = ‖v−u‖. ✓",
      "d((1,2),(3,1)) = ‖(1−3, 2−1)‖₁ = ‖(−2,1)‖₁ = 2+1 = 3.",
    ],
    solution:
      "Define $d(u,v)=\|u-v\|_1$. Any norm-induced distance is a metric: nonnegativity and definiteness come from norm axiom (1), symmetry from $\|u-v\|=\|-(v-u)\|=\|v-u\|$, and triangle inequality from\n$$\|u-w\|_1=\|(u-v)+(v-w)\|_1\le\|u-v\|_1+\|v-w\|_1.$$\n\nFor the points in $\mathbb{R}^2$:\n$$d((1,2),(3,1))=\|(1-3,2-1)\|_1=\|(-2,1)\|_1=|-2|+|1|=3.$$\nHence it is a metric and the required distance is $3$. $\\blacksquare$",
  },
  {
    id: "metric-discrete-not-norm",
    question:
      "Explain why the discrete metric on ℝ (or any vector space with dim ≥ 1) cannot come from any norm.",
    type: "reasoning",
    difficulty: "medium",
    hints: [
      "If the discrete metric came from a norm, then d(αx,0) = ‖αx‖ = |α|‖x‖.",
      "For x ≠ 0 and α → 0: d(αx, 0) = 1 for any α ≠ 0, but |α|‖x‖ → 0. Contradiction.",
      "A norm-induced metric must scale continuously with scalars (absolute homogeneity), but the discrete metric jumps from 1 to 0 discontinuously at α=0.",
    ],
    solution:
      "Assume, for contradiction, the discrete metric on a nontrivial vector space comes from some norm $\|\cdot\|$, i.e. $d(x,y)=\|x-y\|$. Pick $x\neq0$.\n\nThen for any scalar $\alpha\neq0$, we have $\alpha x\neq0$, so\n$$d(\alpha x,0)=1.$$\nBut if $d$ is norm-induced,\n$$d(\alpha x,0)=\|\alpha x\|=|\alpha|\,\|x\|.$$\nLet $\alpha\to0$. The right-hand side tends to $0$, while the left-hand side is identically $1$ for all $\alpha\neq0$. Contradiction.\n\nTherefore the discrete metric cannot be induced by a norm (on any vector space of dimension $\ge1$). $\\blacksquare$",
  },
  {
    id: "metric-hierarchy-classify",
    question:
      "Classify each space as (a) Hilbert, (b) Banach but not Hilbert, (c) normed but not Banach, or (d) metric but not normed: [i] ℝ³ with ‖·‖₂, [ii] C[0,1] with ‖·‖∞, [iii] ℝ² with discrete metric, [iv] Q with |·|.",
    type: "reasoning",
    difficulty: "medium",
    hints: [
      "[i] ℝ³ with ‖·‖₂ comes from the dot product (inner product) and is complete → Hilbert space (a).",
      "[ii] C[0,1] with ‖·‖∞ is complete (Weierstrass theorem) but ‖·‖∞ fails the parallelogram law → Banach but not Hilbert (b). [iii] Discrete metric has no linear structure (no zero vector well-defined in a general set) → metric but not normed (d).",
      "[iv] Q with |·| is a normed space (the absolute value is a norm on Q as a field) but not complete (√2 ∉ Q) → normed but not Banach (c).",
    ],
    solution:
      "Classification:\n\n1. $\mathbb{R}^3$ with $\|\cdot\|_2$: inner-product induced and complete, so **Hilbert**.\n\n2. $C[0,1]$ with $\|\cdot\|_\infty$: complete under sup norm, so Banach; not Hilbert under this norm in general, so **Banach but not Hilbert**.\n\n3. $\mathbb{R}^2$ with discrete metric: this metric is not norm-induced, so only **metric but not normed**.\n\n4. $\mathbb{Q}$ with $|\cdot|$: normed (absolute value), but not complete in this metric, so **normed but not Banach**.\n\nHence: (i) a, (ii) b, (iii) d, (iv) c. $\\blacksquare$",
  },
  {
    id: "metric-convergence",
    question:
      "In a metric space (X,d), a sequence {xₙ} converges to x if d(xₙ,x) → 0. In ℝ with the standard metric, what does it mean for the sequence xₙ = 1/n to converge? To what limit?",
    type: "reasoning",
    difficulty: "easy",
    hints: [
      "d(xₙ, 0) = |1/n − 0| = 1/n → 0 as n → ∞.",
      "For any ε > 0, choose N > 1/ε. Then for n > N: d(xₙ,0) = 1/n < 1/N < ε.",
      "The sequence converges to 0 in the standard metric. This is exactly the ε-N definition of limit for real sequences, now viewed as convergence in a metric space.",
    ],
    solution:
      "In $\mathbb{R}$ with standard metric $d(a,b)=|a-b|$, convergence $x_n\to x$ means $|x_n-x|\to0$.\n\nFor $x_n=1/n$, take $x=0$:\n$$d(x_n,0)=\left|\frac1n-0\right|=\frac1n\to0.$$\n\n$\varepsilon$-$N$ check: given $\varepsilon>0$, choose $N>1/\varepsilon$. Then for $n>N$,\n$$d(x_n,0)=\frac1n<\frac1N<\varepsilon.$$\nSo $x_n\to0$. $\\blacksquare$",
  },
];

export default questions;
