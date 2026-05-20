import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "gs-r3-basic",
    question:
      "Apply Gram-Schmidt to {v₁, v₂, v₃} = {(1,1,0), (1,0,1), (0,1,1)} in ℝ³ to produce an orthonormal basis.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Step 1: e₁ = v₁/‖v₁‖ = (1,1,0)/√2. Step 2: u₂ = v₂ − ⟨v₂,e₁⟩e₁. ⟨v₂,e₁⟩ = (1·1+0·1+1·0)/√2 = 1/√2. So u₂ = (1,0,1) − (1/2)(1,1,0) = (1/2, −1/2, 1).",
      "e₂ = u₂/‖u₂‖. ‖u₂‖ = √(1/4+1/4+1) = √(3/2) = √6/2. e₂ = (1/√6, −1/√6, 2/√6).",
      "Step 3: u₃ = v₃ − ⟨v₃,e₁⟩e₁ − ⟨v₃,e₂⟩e₂. Compute ⟨v₃,e₁⟩ = 1/√2 and ⟨v₃,e₂⟩ = (0−1+2)/√6 = 1/√6. Then normalize u₃.",
    ],
  },
  {
    id: "gs-polynomials-p2",
    question:
      "Apply Gram-Schmidt to {1, x, x²} in P₂ with ⟨p,q⟩ = ∫₋₁¹ p(x)q(x) dx to obtain an orthonormal basis. Are the resulting polynomials related to Legendre polynomials?",
    type: "computation",
    difficulty: "medium",
    hints: [
      "p₁ = 1. ‖1‖² = ∫₋₁¹ 1 dx = 2. e₁ = 1/√2.",
      "p₂ = x − ⟨x, 1/√2⟩·(1/√2). ⟨x, 1/√2⟩ = (1/√2)∫₋₁¹ x dx = 0 (odd integrand on symmetric interval). So p₂ = x, e₂ = x/‖x‖. ‖x‖² = ∫₋₁¹ x² dx = 2/3. e₂ = x/√(2/3) = x√(3/2).",
      "For x²: subtract projections onto e₁ and e₂. ⟨x², e₁⟩ = (1/√2)·(2/3). The result is x² − 1/3, proportional to the Legendre polynomial P₂(x) = (3x²−1)/2.",
    ],
  },
  {
    id: "gs-why-order-matters",
    question:
      "Apply Gram-Schmidt to {v₁, v₂} = {(1,0), (1,1)} in ℝ² and then to {v₂, v₁} = {(1,1), (1,0)}. Do you get the same orthonormal set?",
    type: "reasoning",
    difficulty: "easy",
    hints: [
      "Order 1: e₁ = (1,0). u₂ = (1,1) − 1·(1,0) = (0,1). e₂ = (0,1).",
      "Order 2: e₁ = (1,1)/√2. u₂ = (1,0) − (1/√2)·(1,1)/√2 = (1,0) − (1/2)(1,1) = (1/2, −1/2). e₂ = (1/√2, −1/√2).",
      "Different ONBs are obtained! Both are valid, but Gram-Schmidt gives different results depending on the order. The span at each step is preserved.",
    ],
  },
  {
    id: "gs-projection-formula",
    question:
      "In the Gram-Schmidt process, the projection formula is proj_{eₖ}(v) = ⟨v,eₖ⟩eₖ. Why do we subtract projections rather than the original vectors?",
    type: "reasoning",
    difficulty: "easy",
    hints: [
      "We subtract the component of v in the direction already 'covered' by the orthonormal set so far.",
      "After subtracting all projections onto e₁,...,eₖ₋₁, the remainder uₖ = v − Σ⟨v,eⱼ⟩eⱼ is orthogonal to all previous eⱼ.",
      "This is because ⟨uₖ, eⱼ⟩ = ⟨v,eⱼ⟩ − ⟨v,eⱼ⟩⟨eⱼ,eⱼ⟩ = ⟨v,eⱼ⟩ − ⟨v,eⱼ⟩·1 = 0.",
    ],
  },
  {
    id: "gs-qr-connection",
    question:
      "The Gram-Schmidt process applied to the columns of an n×k matrix A produces an orthonormal basis for col(A). How does this relate to the QR factorization A = QR?",
    type: "reasoning",
    difficulty: "hard",
    hints: [
      "Let the columns of A be a₁,...,aₖ. Gram-Schmidt produces orthonormal vectors e₁,...,eₖ (columns of Q).",
      "Each aⱼ = Σᵢ≤ⱼ ⟨aⱼ,eᵢ⟩eᵢ, i.e., aⱼ is a linear combination of e₁,...,eⱼ only (upper triangular structure).",
      "The coefficients ⟨aⱼ,eᵢ⟩ form the entries of the upper triangular matrix R. So A = QR where Q has ONB columns and R is upper triangular.",
    ],
  },
];

export default questions;
