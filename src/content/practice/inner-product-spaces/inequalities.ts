import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "ineq-cs-rn",
    question:
      "Apply the Cauchy-Schwarz inequality to u = (1, 2, 2) and v = (2, −1, 2) in ℝ³. Verify the inequality holds and find ⟨u,v⟩, ‖u‖, ‖v‖.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "⟨u,v⟩ = 1·2 + 2·(−1) + 2·2 = 2 − 2 + 4 = 4.",
      "‖u‖ = √(1+4+4) = 3. ‖v‖ = √(4+1+4) = 3. So ‖u‖·‖v‖ = 9.",
      "|⟨u,v⟩| = 4 ≤ 9 = ‖u‖·‖v‖ ✓. Equality holds iff u = λv — check: no such scalar λ works, so strict inequality.",
    ],
    solution:
      "**Computation:**\n$$\\langle\\mathbf{u},\\mathbf{v}\\rangle=1\\cdot2+2\\cdot(-1)+2\\cdot2=2-2+4=4.$$\n$$\\|\\mathbf{u}\\|=\\sqrt{1^2+2^2+2^2}=\\sqrt{9}=3,\\quad\\|\\mathbf{v}\\|=\\sqrt{2^2+1^2+2^2}=3.$$\n\n**Cauchy-Schwarz:** $|\\langle\\mathbf{u},\\mathbf{v}\\rangle|=4\\leq\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|=9$. $\\checkmark$ (Strict inequality.)\n\n**Equality condition:** Equality holds iff $\\mathbf{u}=\\lambda\\mathbf{v}$ for some $\\lambda$. Here $(1,2,2)=\\lambda(2,-1,2)$ requires $\\lambda=1/2$ (from $z$-components) but $2\\neq-1/2$. So **strict** inequality. $\\blacksquare$",
  },
  {
    id: "ineq-cs-equality",
    question:
      "When does equality hold in the Cauchy-Schwarz inequality |⟨u,v⟩| ≤ ‖u‖·‖v‖? Give an example with equality in ℝ².",
    type: "reasoning",
    difficulty: "easy",
    hints: [
      "Equality holds if and only if u and v are linearly dependent (one is a scalar multiple of the other).",
      "If v = 0 equality is trivial. If v ≠ 0, set u = λv and compute both sides.",
      "Example: u = (1, 2), v = (2, 4). ⟨u,v⟩ = 2+8 = 10. ‖u‖ = √5, ‖v‖ = √20 = 2√5. ‖u‖·‖v‖ = 2·5 = 10. ✓",
    ],
    solution:
      "**Equality condition:** Equality $|\\langle\\mathbf{u},\\mathbf{v}\\rangle|=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$ holds if and only if $\\mathbf{u}$ and $\\mathbf{v}$ are **linearly dependent** (one is a scalar multiple of the other, or one is zero).\n\n**Proof sketch:** In the standard proof via $0\\leq\\|\\mathbf{u}-t\\mathbf{v}\\|^2$ (real case), equality requires the minimizing $t^*=\\langle\\mathbf{u},\\mathbf{v}\\rangle/\\|\\mathbf{v}\\|^2$ to satisfy $\\mathbf{u}=t^*\\mathbf{v}$.\n\n**Example:** Let $\\mathbf{u}=(1,2)$ and $\\mathbf{v}=(2,4)=2\\mathbf{u}$. Then:\n$$|\\langle\\mathbf{u},\\mathbf{v}\\rangle|=|2+8|=10,\\quad\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|=\\sqrt{5}\\cdot\\sqrt{20}=\\sqrt{100}=10.$$\nEquality holds. $\\checkmark$ $\\blacksquare$",
  },
  {
    id: "ineq-cs-functions",
    question:
      "Use the Cauchy-Schwarz inequality in L²[0,1] to bound |∫₀¹ f(x)g(x)dx| where f(x) = eˣ and g(x) = 1. Compute the exact bound.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Cauchy-Schwarz: |∫₀¹ fg dx| ≤ √(∫₀¹ f² dx) · √(∫₀¹ g² dx).",
      "‖g‖² = ∫₀¹ 1 dx = 1, so ‖g‖ = 1.",
      "‖f‖² = ∫₀¹ e²ˣ dx = [e²ˣ/2]₀¹ = (e²−1)/2. So bound = √((e²−1)/2) ≈ 1.311. Actual: ∫₀¹ eˣ dx = e−1 ≈ 1.718. Wait — check: 1.718 ≤ 1.311? No! Recheck: √((e²−1)/2) ≈ √(3.195) ≈ 1.788 ≥ 1.718 ✓.",
    ],
    solution:
      "Apply Cauchy-Schwarz in $L^2[0,1]$: $|\\langle f,g\\rangle|\\leq\\|f\\|\\|g\\|$.\n\n$$\\|g\\|^2=\\int_0^1 1^2\\,dx=1,\\quad\\|g\\|=1.$$\n$$\\|f\\|^2=\\int_0^1 e^{2x}\\,dx=\\left[\\frac{e^{2x}}{2}\\right]_0^1=\\frac{e^2-1}{2},\\quad\\|f\\|=\\sqrt{\\frac{e^2-1}{2}}.$$\n\nSo C-S gives:\n$$\\left|\\int_0^1 e^x\\,dx\\right|\\leq\\sqrt{\\frac{e^2-1}{2}}\\cdot1=\\sqrt{\\frac{e^2-1}{2}}.$$\n\n**Verification:** Left side $=e-1\\approx1.718$. Right side $=\\sqrt{(e^2-1)/2}\\approx\\sqrt{3.195}\\approx1.788$. Indeed $1.718\\leq1.788$. $\\checkmark$ $\\blacksquare$",
  },
  {
    id: "ineq-triangle",
    question:
      "Verify the triangle inequality ‖u + v‖ ≤ ‖u‖ + ‖v‖ for u = (3, 4) and v = (−1, 1) in ℝ². When is equality achieved?",
    type: "verification",
    difficulty: "easy",
    hints: [
      "u + v = (2, 5). ‖u+v‖ = √(4+25) = √29 ≈ 5.39.",
      "‖u‖ = √(9+16) = 5. ‖v‖ = √(1+1) = √2 ≈ 1.41. Sum = 5 + √2 ≈ 6.41.",
      "√29 ≤ 5 + √2 ✓. Equality in the triangle inequality holds iff one vector is a non-negative scalar multiple of the other.",
    ],
    solution:
      "**Computation:** $\\mathbf{u}+\\mathbf{v}=(2,5)$, so $\\|\\mathbf{u}+\\mathbf{v}\\|=\\sqrt{4+25}=\\sqrt{29}$.\n$\\|\\mathbf{u}\\|=\\sqrt{9+16}=5$, $\\|\\mathbf{v}\\|=\\sqrt{1+1}=\\sqrt{2}$.\n\n**Verification:** $\\sqrt{29}\\approx5.385\\leq5+\\sqrt{2}\\approx6.414$. $\\checkmark$\n\n**Equality condition:** The triangle inequality $\\|\\mathbf{u}+\\mathbf{v}\\|=\\|\\mathbf{u}\\|+\\|\\mathbf{v}\\|$ holds iff $\\mathbf{v}=\\lambda\\mathbf{u}$ for some $\\lambda\\geq0$ (the vectors point in the same direction). Here $(-1,1)\\neq\\lambda(3,4)$ for any $\\lambda\\geq0$, confirming strict inequality. $\\blacksquare$",
  },
  {
    id: "ineq-cs-corollary",
    question:
      "Deduce from Cauchy-Schwarz that |Σᵢ aᵢbᵢ|² ≤ (Σᵢ aᵢ²)(Σᵢ bᵢ²) for real numbers a₁,...,aₙ and b₁,...,bₙ. State this as a finite-sum inequality.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "This is exactly the Cauchy-Schwarz inequality in ℝⁿ with the dot product: |⟨a,b⟩|² ≤ ‖a‖²·‖b‖².",
      "⟨a,b⟩ = Σ aᵢbᵢ, ‖a‖² = Σ aᵢ², ‖b‖² = Σ bᵢ².",
      "The result follows directly by substituting these expressions into the abstract Cauchy-Schwarz inequality.",
    ],
    solution:
      "**Proof:** Let $\\mathbf{a}=(a_1,\\ldots,a_n)$ and $\\mathbf{b}=(b_1,\\ldots,b_n)$ in $\\mathbb{R}^n$ with the standard dot product.\n\nThe abstract Cauchy-Schwarz inequality (Thm 18) states $|\\langle\\mathbf{a},\\mathbf{b}\\rangle|^2\\leq\\|\\mathbf{a}\\|^2\\|\\mathbf{b}\\|^2$.\n\nSubstituting:\n$$|\\langle\\mathbf{a},\\mathbf{b}\\rangle|^2=\\left(\\sum_{i=1}^n a_ib_i\\right)^2,\\quad\\|\\mathbf{a}\\|^2=\\sum_{i=1}^n a_i^2,\\quad\\|\\mathbf{b}\\|^2=\\sum_{i=1}^n b_i^2.$$\n\nTherefore:\n$$\\left(\\sum_{i=1}^n a_ib_i\\right)^2\\leq\\left(\\sum_{i=1}^n a_i^2\\right)\\left(\\sum_{i=1}^n b_i^2\\right). \\blacksquare$$",
  },
];

export default questions;
