import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "orth-check-rn",
    question:
      "Determine which pairs among the vectors u₁ = (1, 1, 0), u₂ = (1, −1, 0), u₃ = (0, 0, 1) in ℝ³ are orthogonal. Is {u₁, u₂, u₃} an orthogonal set?",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Compute all three pairwise dot products: ⟨u₁,u₂⟩, ⟨u₁,u₃⟩, ⟨u₂,u₃⟩.",
      "⟨u₁,u₂⟩ = 1·1 + 1·(−1) + 0·0 = 0. ✓ Orthogonal. ⟨u₁,u₃⟩ = 0. ⟨u₂,u₃⟩ = 0.",
      "All three pairwise inner products are zero, so {u₁, u₂, u₃} is an orthogonal set.",
    ],
  },
  {
    id: "orth-normalize",
    question:
      "Normalize the orthogonal set {u₁, u₂, u₃} from the previous problem to obtain an orthonormal set. Verify ‖eᵢ‖ = 1 and ⟨eᵢ,eⱼ⟩ = δᵢⱼ.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Normalize: eᵢ = uᵢ / ‖uᵢ‖.",
      "‖u₁‖ = √2, ‖u₂‖ = √2, ‖u₃‖ = 1. So e₁ = (1/√2, 1/√2, 0), e₂ = (1/√2, −1/√2, 0), e₃ = (0,0,1).",
      "Check ⟨e₁,e₂⟩ = 1/2 − 1/2 = 0 ✓. This is actually the 2D rotation matrix columns — an ONB for ℝ³.",
    ],
  },
  {
    id: "orth-li-from-orthogonal",
    question:
      "Prove (or outline the proof of Theorem 20) that a set of non-zero mutually orthogonal vectors is linearly independent.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Suppose Σ cᵢuᵢ = 0 with all uᵢ ≠ 0 and ⟨uᵢ,uⱼ⟩ = 0 for i ≠ j. Take the inner product of both sides with uₖ.",
      "⟨Σ cᵢuᵢ, uₖ⟩ = Σ cᵢ⟨uᵢ,uₖ⟩ = cₖ‖uₖ‖² = 0.",
      "Since uₖ ≠ 0, ‖uₖ‖² > 0, so cₖ = 0. This holds for all k, hence LI.",
    ],
  },
  {
    id: "orth-polynomial",
    question:
      "Check whether p(x) = 1 and q(x) = x are orthogonal in P₂ with inner product ⟨p,q⟩ = ∫₋₁¹ p(x)q(x) dx. Are p(x) = 1 and r(x) = x² orthogonal?",
    type: "computation",
    difficulty: "easy",
    hints: [
      "⟨p,q⟩ = ∫₋₁¹ 1·x dx = [x²/2]₋₁¹ = 1/2 − 1/2 = 0. So 1 ⊥ x. ✓",
      "⟨p,r⟩ = ∫₋₁¹ 1·x² dx = [x³/3]₋₁¹ = 1/3 − (−1/3) = 2/3 ≠ 0. So 1 is NOT orthogonal to x².",
      "This motivates Gram-Schmidt: to make {1, x²} orthogonal, we'd need to subtract the projection of x² onto 1.",
    ],
  },
  {
    id: "orth-fourier-coefficients",
    question:
      "If {e₁, e₂, e₃} is an orthonormal basis for ℝ³ and v = (2, −1, 3), express v in terms of the standard basis using Fourier coefficients ⟨v, eᵢ⟩.",
    type: "reasoning",
    difficulty: "medium",
    hints: [
      "For an orthonormal basis, v = Σᵢ ⟨v, eᵢ⟩ eᵢ. The coefficients ⟨v, eᵢ⟩ are the Fourier (or generalized Fourier) coefficients.",
      "If the basis is the standard basis {(1,0,0), (0,1,0), (0,0,1)}, then ⟨v,e₁⟩ = 2, ⟨v,e₂⟩ = −1, ⟨v,e₃⟩ = 3.",
      "So v = 2e₁ − e₂ + 3e₃. The key insight: ONBs make coordinate extraction trivial — just take inner products.",
    ],
  },
];

export default questions;
