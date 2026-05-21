import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "norm-verify-euclidean",
    question:
      "Verify that the Euclidean norm ‖v‖₂ = √(Σvᵢ²) on ℝⁿ satisfies all three norm axioms (Definition 17).",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Axiom 1 (positive definiteness): ‖v‖₂ = √(Σvᵢ²) ≥ 0, and = 0 iff all vᵢ = 0 iff v = 0. ✓",
      "Axiom 2 (absolute homogeneity): ‖αv‖₂ = √(Σ(αvᵢ)²) = √(α²Σvᵢ²) = |α|√(Σvᵢ²) = |α|‖v‖₂. ✓",
      "Axiom 3 (triangle inequality): ‖u+v‖₂ ≤ ‖u‖₂ + ‖v‖₂ is equivalent to Cauchy-Schwarz (proved in Theorem 19). ✓",
    ],
    solution:
      "Let $\|v\|_2=\sqrt{\sum_i v_i^2}$.\n\n1. **Positive definiteness:** each $v_i^2\ge0$, so $\|v\|_2\ge0$. Also $\|v\|_2=0\iff\sum_i v_i^2=0\iff v_i=0\ \forall i\iff v=0$.\n\n2. **Homogeneity:**\n$$\|\alpha v\|_2=\sqrt{\sum_i(\alpha v_i)^2}=\sqrt{\alpha^2\sum_i v_i^2}=|\alpha|\|v\|_2.$$\n\n3. **Triangle inequality:** by Cauchy-Schwarz,\n$$\|u+v\|_2^2=\langle u+v,u+v\rangle=\|u\|_2^2+2\langle u,v\rangle+\|v\|_2^2\le(\|u\|_2+\|v\|_2)^2,$$\nso $\|u+v\|_2\le\|u\|_2+\|v\|_2$.\n\nHence $\|\cdot\|_2$ is a norm. $\\blacksquare$",
  },
  {
    id: "norm-parallelogram-l1",
    question:
      "Test whether the ℓ¹ norm ‖v‖₁ = |v₁| + |v₂| on ℝ² satisfies the parallelogram law. Take u = (1,0) and v = (0,1).",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Parallelogram law: ‖u+v‖² + ‖u−v‖² = 2‖u‖² + 2‖v‖².",
      "u+v = (1,1): ‖u+v‖₁ = 2. u−v = (1,−1): ‖u−v‖₁ = 2. LHS = 4 + 4 = 8.",
      "‖u‖₁ = 1, ‖v‖₁ = 1. RHS = 2+2 = 4. LHS ≠ RHS, so ℓ¹ norm does NOT come from any inner product.",
    ],
    solution:
      "Take $u=(1,0)$ and $v=(0,1)$ in $(\mathbb{R}^2,\|\cdot\|_1)$.\n\n$$u+v=(1,1),\quad \|u+v\|_1=2;\qquad u-v=(1,-1),\quad \|u-v\|_1=2.$$\nSo\n$$\|u+v\|_1^2+\|u-v\|_1^2=4+4=8.$$\n\nAlso\n$$\|u\|_1=1,\ \|v\|_1=1\implies2\|u\|_1^2+2\|v\|_1^2=2+2=4.$$\nSince $8\neq4$, the parallelogram law fails. Therefore $\|\cdot\|_1$ is not induced by any inner product. $\\blacksquare$",
  },
  {
    id: "norm-different-norms",
    question:
      "For v = (3, 4) in ℝ², compute ‖v‖₁, ‖v‖₂, and ‖v‖∞. Verify that ‖v‖∞ ≤ ‖v‖₂ ≤ ‖v‖₁.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "‖v‖₁ = 3 + 4 = 7. ‖v‖₂ = √(9+16) = √25 = 5. ‖v‖∞ = max(3,4) = 4.",
      "Check: 4 ≤ 5 ≤ 7. ✓ In general on ℝⁿ: ‖v‖∞ ≤ ‖v‖₂ ≤ ‖v‖₁ (all norms on finite-dimensional spaces are equivalent).",
      "The inequality ‖v‖₂ ≤ ‖v‖₁ follows from Cauchy-Schwarz: ‖v‖₁ = ⟨|v|,1⟩ ≤ ‖v‖₂·‖1‖₂ = ‖v‖₂·√n.",
    ],
    solution:
      "For $v=(3,4)$:\n$$\|v\|_1=|3|+|4|=7,\quad \|v\|_2=\sqrt{3^2+4^2}=5,\quad \|v\|_\infty=\max\{3,4\}=4.$$\nTherefore\n$$\|v\|_\infty=4\le5=\|v\|_2\le7=\|v\|_1.$$\nSo the required inequality is verified for this vector. $\\blacksquare$",
  },
  {
    id: "norm-banach-classify",
    question:
      "Is the space P[0,1] of all polynomials on [0,1] with ‖p‖ = max_{x∈[0,1]}|p(x)| a Banach space? Why or why not?",
    type: "reasoning",
    difficulty: "hard",
    hints: [
      "To check if a normed space is Banach, you must check if every Cauchy sequence converges IN the space.",
      "Consider the sequence pₙ(x) = Σₖ₌₀ⁿ xᵏ/k!. Each pₙ is a polynomial. This is Cauchy in the sup norm on [0,1].",
      "The limit is eˣ, which is not a polynomial. Since the limit is outside P[0,1], the space is NOT complete — not a Banach space. Moral: polynomial spaces are dense in C[0,1] under sup norm.",
    ],
    solution:
      "No, $P[0,1]$ with $\|p\|_\infty=\max_{x\in[0,1]}|p(x)|$ is **not** Banach.\n\nConsider\n$$p_n(x)=\sum_{k=0}^n\frac{x^k}{k!}.$$\nEach $p_n$ is a polynomial. On $[0,1]$, $(p_n)$ is Cauchy in sup norm (it converges uniformly to the exponential series). Its uniform limit is $e^x$, but $e^x\notin P[0,1]$.\n\nSo a Cauchy sequence in $P[0,1]$ converges to a function outside $P[0,1]$; hence $P[0,1]$ is not complete, therefore not Banach. $\\blacksquare$",
  },
  {
    id: "norm-induced-from-ip",
    question:
      "Let ‖v‖ = √(⟨v,v⟩) for some inner product space. Show that ‖αv‖ = |α|‖v‖ (absolute homogeneity) using only inner product axioms.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "‖αv‖² = ⟨αv, αv⟩.",
      "By linearity in the first argument: ⟨αv, αv⟩ = α⟨v, αv⟩.",
      "By conjugate symmetry + linearity: ⟨v, αv⟩ = conj(⟨αv,v⟩) = conj(α⟨v,v⟩) = conj(α)‖v‖². So ‖αv‖² = α·conj(α)·‖v‖² = |α|²‖v‖². Taking square roots: ‖αv‖ = |α|‖v‖.",
    ],
    solution:
      "Let $\|v\|=\sqrt{\langle v,v\rangle}$. Then\n$$\|\alpha v\|^2=\langle\alpha v,\alpha v\rangle=\alpha\langle v,\alpha v\rangle=\alpha\overline{\alpha}\langle v,v\rangle=|\alpha|^2\|v\|^2.$$\nAll steps use inner-product axioms (linearity + conjugate symmetry). Since norms are nonnegative, taking square roots gives\n$$\|\alpha v\|=|\alpha|\,\|v\|.$$\nSo absolute homogeneity holds. $\\blacksquare$",
  },
];

export default questions;
