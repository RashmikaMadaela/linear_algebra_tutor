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
  },
];

export default questions;
