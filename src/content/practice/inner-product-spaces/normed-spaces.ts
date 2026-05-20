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
  },
];

export default questions;
