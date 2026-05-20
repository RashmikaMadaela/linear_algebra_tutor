import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "opoly-legendre-orthogonality",
    question:
      "Verify that P₀(x) = 1 and P₁(x) = x are orthogonal on [−1,1] under the standard L² inner product ⟨f,g⟩ = ∫₋₁¹ f(x)g(x) dx.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "⟨P₀, P₁⟩ = ∫₋₁¹ 1·x dx.",
      "The integrand x is an odd function; integrating over a symmetric interval [−1,1] gives 0.",
      "⟨P₀,P₁⟩ = [x²/2]₋₁¹ = 1/2 − 1/2 = 0. ✓",
    ],
  },
  {
    id: "opoly-legendre-p2",
    question:
      "Using the Legendre recurrence (n+1)Pₙ₊₁(x) = (2n+1)xPₙ(x) − nPₙ₋₁(x), compute P₂(x) and P₃(x). Verify ⟨P₁, P₂⟩ = 0.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "For n=1: 2P₂ = 3xP₁ − P₀ = 3x² − 1. So P₂(x) = (3x²−1)/2.",
      "For n=2: 3P₃ = 5xP₂ − 2P₁ = 5x(3x²−1)/2 − 2x = (15x³−5x)/2 − 2x = (15x³−9x)/2. So P₃(x) = (5x³−3x)/2.",
      "⟨P₁,P₂⟩ = ∫₋₁¹ x·(3x²−1)/2 dx = (1/2)∫₋₁¹ (3x³−x) dx. Both 3x³ and x are odd, so integral = 0. ✓",
    ],
  },
  {
    id: "opoly-chebyshev-identity",
    question:
      "Verify the Chebyshev identity T₂(cos θ) = cos(2θ) using the recurrence Tₙ₊₁(x) = 2xTₙ(x) − Tₙ₋₁(x) with T₀(x) = 1, T₁(x) = x.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "T₂(x) = 2x·T₁(x) − T₀(x) = 2x·x − 1 = 2x² − 1.",
      "Set x = cos θ: T₂(cos θ) = 2cos²θ − 1.",
      "Recall the double angle formula: cos(2θ) = 2cos²θ − 1. So T₂(cos θ) = cos(2θ). ✓",
    ],
  },
  {
    id: "opoly-chebyshev-t3",
    question: "Compute T₃(x) using the Chebyshev recurrence and verify T₃(cos θ) = cos(3θ).",
    type: "computation",
    difficulty: "medium",
    hints: [
      "T₃(x) = 2x·T₂(x) − T₁(x) = 2x(2x²−1) − x = 4x³ − 2x − x = 4x³ − 3x.",
      "Set x = cos θ: T₃(cos θ) = 4cos³θ − 3cosθ.",
      "Triple angle formula: cos(3θ) = 4cos³θ − 3cosθ. ✓ The Chebyshev polynomials encode the multiple angle formulas.",
    ],
  },
  {
    id: "opoly-laguerre-recurrence",
    question:
      "Using the Laguerre recurrence (n+1)Lₙ₊₁(x) = (2n+1−x)Lₙ(x) − nLₙ₋₁(x) with L₀ = 1, L₁ = 1−x, compute L₂(x).",
    type: "computation",
    difficulty: "medium",
    hints: [
      "For n=1: 2L₂(x) = (3−x)L₁(x) − L₀(x) = (3−x)(1−x) − 1.",
      "(3−x)(1−x) = 3 − 3x − x + x² = 3 − 4x + x². Subtract 1: 2L₂ = 2 − 4x + x².",
      "L₂(x) = (x² − 4x + 2)/2 = 1 − 2x + x²/2. Verify by checking that ⟨L₁,L₂⟩ = 0 under ∫₀^∞ e^{−x}f·g dx.",
    ],
  },
];

export default questions;
