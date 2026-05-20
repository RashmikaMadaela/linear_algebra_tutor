import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "ip-def-verify-dot",
    question:
      "Verify that the standard dot product on ℝ³ satisfies all three inner product axioms. Specifically, for u = (1, 2, −1) and v = (3, 0, 2), compute ⟨u, v⟩ and ⟨v, u⟩.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "The three axioms are: linearity in first slot, conjugate symmetry, and positive definiteness.",
      "For ℝ, conjugate symmetry reduces to ordinary symmetry: ⟨u,v⟩ = ⟨v,u⟩.",
      "⟨u,v⟩ = 1·3 + 2·0 + (−1)·2 = 3 + 0 − 2 = 1. Check that ⟨v,u⟩ gives the same value.",
    ],
  },
  {
    id: "ip-trace-inner-product",
    question:
      "Show that ⟨A, B⟩ = tr(BᵀA) defines an inner product on M₂₂(ℝ). Compute ⟨A, A⟩ for A = [[1, 2], [3, 4]].",
    type: "verification",
    difficulty: "medium",
    hints: [
      "You must verify the three axioms. For positive definiteness, tr(AᵀA) = Σᵢⱼ Aᵢⱼ².",
      "Linearity in the first argument: tr(Bᵀ(αA + C)) = α·tr(BᵀA) + tr(BᵀC) — use linearity of trace.",
      "⟨A,A⟩ = tr(AᵀA) = 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30.",
    ],
  },
  {
    id: "ip-hermitian-complex",
    question:
      "For u = (1+i, 2) and v = (1, i) in ℂ², compute ⟨u,v⟩ and ⟨v,u⟩ using the Hermitian inner product. Verify that ⟨u,v⟩ = conj(⟨v,u⟩).",
    type: "computation",
    difficulty: "medium",
    hints: [
      "The Hermitian inner product is ⟨u,v⟩ = Σ uᵢ·conj(vᵢ).",
      "⟨u,v⟩ = (1+i)·conj(1) + 2·conj(i) = (1+i)·1 + 2·(−i) = 1+i−2i = 1−i.",
      "⟨v,u⟩ = 1·conj(1+i) + i·conj(2) = (1−i) + i·2 = 1−i+2i = 1+i. Check: conj(1+i) = 1−i = ⟨u,v⟩. ✓",
    ],
  },
  {
    id: "ip-l2-inner-product",
    question:
      "Compute ⟨f, g⟩ = ∫₀¹ f(x)g(x) dx for f(x) = x and g(x) = x². Then compute the norms ‖f‖ and ‖g‖.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "⟨f,g⟩ = ∫₀¹ x·x² dx = ∫₀¹ x³ dx.",
      "∫₀¹ x³ dx = [x⁴/4]₀¹ = 1/4.",
      "‖f‖² = ∫₀¹ x² dx = 1/3, so ‖f‖ = 1/√3. ‖g‖² = ∫₀¹ x⁴ dx = 1/5, so ‖g‖ = 1/√5.",
    ],
  },
  {
    id: "ip-thm17-conjugate-linear",
    question:
      "Using Theorem 17 (conjugate-linearity in the second argument over ℂ), compute ⟨u, 2iv⟩ where ⟨u,v⟩ = 3 + 4i in a complex inner product space.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Theorem 17: ⟨u, αv⟩ = conj(α)·⟨u,v⟩ for α ∈ ℂ.",
      "Here α = 2i, so conj(α) = conj(2i) = −2i.",
      "⟨u, 2iv⟩ = −2i·⟨u,v⟩ = −2i·(3+4i) = −6i − 8i² = 8 − 6i.",
    ],
  },
];

export default questions;
