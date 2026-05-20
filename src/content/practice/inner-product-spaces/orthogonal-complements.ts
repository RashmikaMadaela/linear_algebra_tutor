import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "oc-find-complement",
    question:
      "Let W = span{(1,0,1)} in ℝ³ with the standard dot product. Find W⊥ and verify ℝ³ = W ⊕ W⊥.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "W⊥ = {v ∈ ℝ³ : ⟨v, (1,0,1)⟩ = 0} = {(x,y,z) : x + z = 0} = {(x,y,−x) : x,y ∈ ℝ}.",
      "A basis for W⊥ is {(1,0,−1), (0,1,0)} — dimension 2. Check: 1 + 2 = 3 = dim(ℝ³). ✓",
      "Every v ∈ ℝ³ splits as v = proj_W(v) + (v − proj_W(v)). The first part is in W, the second in W⊥.",
    ],
  },
  {
    id: "oc-best-approximation",
    question:
      "Find the best approximation to v = (1, 2, 3) in W = span{(1, 1, 0), (0, 1, 1)} ⊆ ℝ³. Compute the approximation error.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "First, apply Gram-Schmidt to {(1,1,0),(0,1,1)} to get an ONB {e₁,e₂} for W. e₁ = (1,1,0)/√2.",
      "u₂ = (0,1,1) − ⟨(0,1,1),(1,1,0)/√2⟩·(1,1,0)/√2 = (0,1,1) − (1/2)(1,1,0) = (−1/2, 1/2, 1). Normalize.",
      "proj_W(v) = ⟨v,e₁⟩e₁ + ⟨v,e₂⟩e₂. The error is ‖v − proj_W(v)‖, which by Pythagoras satisfies ‖v‖² = ‖proj_W(v)‖² + ‖error‖².",
    ],
  },
  {
    id: "oc-pythagoras",
    question:
      "Theorem 22 includes a Pythagorean identity: if v = w + z with w ∈ W and z ∈ W⊥, then ‖v‖² = ‖w‖² + ‖z‖². Prove this.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "Expand ‖v‖² = ⟨w+z, w+z⟩ = ⟨w,w⟩ + ⟨w,z⟩ + ⟨z,w⟩ + ⟨z,z⟩.",
      "Since w ∈ W and z ∈ W⊥, we have ⟨w,z⟩ = 0 and ⟨z,w⟩ = conj(⟨w,z⟩) = 0.",
      "So ‖v‖² = ‖w‖² + ‖z‖². ✓ This is the vector space version of the Pythagorean theorem.",
    ],
  },
  {
    id: "oc-polynomial-approx",
    question:
      "Find the best approximation to f(x) = x³ in W = span{1, x} ⊆ P₃ with ⟨p,q⟩ = ∫₋₁¹ pq dx. In other words, find the least-squares linear fit to x³ on [−1,1].",
    type: "computation",
    difficulty: "medium",
    hints: [
      "The ONB for W is e₁ = 1/√2, e₂ = x/√(2/3) = x√(3/2) (from Gram-Schmidt on {1, x}).",
      "⟨x³, 1/√2⟩ = (1/√2)∫₋₁¹ x³ dx = 0 (odd function). ⟨x³, x√(3/2)⟩ = √(3/2)∫₋₁¹ x⁴ dx = √(3/2)·(2/5).",
      "proj_W(x³) = 0·e₁ + √(3/2)·(2/5)·x√(3/2) = (3/2)·(2/5)·x = (3/5)x. The best linear approximation is (3/5)x.",
    ],
  },
  {
    id: "oc-complement-subspace",
    question:
      "Prove that W⊥ is a subspace of V for any subset W ⊆ V. You need to verify: (1) 0 ∈ W⊥, (2) closure under addition, (3) closure under scalar multiplication.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "(1) ⟨0, w⟩ = 0 for all w ∈ W, so 0 ∈ W⊥. ✓",
      "(2) If u,v ∈ W⊥ and w ∈ W: ⟨u+v, w⟩ = ⟨u,w⟩ + ⟨v,w⟩ = 0 + 0 = 0. So u+v ∈ W⊥. ✓",
      "(3) If u ∈ W⊥ and α ∈ F: ⟨αu, w⟩ = α⟨u,w⟩ = α·0 = 0. So αu ∈ W⊥. ✓",
    ],
  },
];

export default questions;
