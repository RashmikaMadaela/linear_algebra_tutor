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
  },
];

export default questions;
