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
    solution:
      "Compute all pairwise dot products:\n$$\\langle\\mathbf{u}_1,\\mathbf{u}_2\\rangle=1(1)+1(-1)+0(0)=0, \\checkmark$$\n$$\\langle\\mathbf{u}_1,\\mathbf{u}_3\\rangle=1(0)+1(0)+0(1)=0, \\checkmark$$\n$$\\langle\\mathbf{u}_2,\\mathbf{u}_3\\rangle=1(0)+(-1)(0)+0(1)=0. \\checkmark$$\n\nSince all pairwise inner products are zero, $\\{\\mathbf{u}_1,\\mathbf{u}_2,\\mathbf{u}_3\\}$ is an **orthogonal set**. Since the set is orthogonal and all vectors are nonzero, it is also linearly independent (by Thm 20). $\\blacksquare$",
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
    solution:
      "Divide each vector by its norm to get $\\mathbf{e}_i=\\mathbf{u}_i/\\|\\mathbf{u}_i\\|$:\n$$\\|\\mathbf{u}_1\\|=\\sqrt{1^2+1^2+0^2}=\\sqrt{2},\\quad\\mathbf{e}_1=\\tfrac{1}{\\sqrt{2}}(1,1,0).$$\n$$\\|\\mathbf{u}_2\\|=\\sqrt{1^2+1^2+0^2}=\\sqrt{2},\\quad\\mathbf{e}_2=\\tfrac{1}{\\sqrt{2}}(1,-1,0).$$\n$$\\|\\mathbf{u}_3\\|=1,\\quad\\mathbf{e}_3=(0,0,1).$$\n\n**Verification:** $\\|\\mathbf{e}_i\\|=1$ for each $i$. $\\langle\\mathbf{e}_1,\\mathbf{e}_2\\rangle=\\frac{1}{2}-\\frac{1}{2}+0=0$. $\\langle\\mathbf{e}_1,\\mathbf{e}_3\\rangle=\\langle\\mathbf{e}_2,\\mathbf{e}_3\\rangle=0$. $\\checkmark$\n\nSo $\\{\\mathbf{e}_1,\\mathbf{e}_2,\\mathbf{e}_3\\}$ is an **orthonormal basis** for $\\mathbb{R}^3$. $\\blacksquare$",
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
    solution:
      "**Proof (Theorem 20):** Let $\\{\\mathbf{u}_1,\\ldots,\\mathbf{u}_k\\}$ be a set of nonzero pairwise orthogonal vectors. Suppose\n$$\\sum_{i=1}^k c_i\\mathbf{u}_i=\\mathbf{0}.$$\n\nFor any fixed $m\\in\\{1,\\ldots,k\\}$, take the inner product of both sides with $\\mathbf{u}_m$:\n$$\\left\\langle\\sum_{i=1}^k c_i\\mathbf{u}_i,\\mathbf{u}_m\\right\\rangle=\\langle\\mathbf{0},\\mathbf{u}_m\\rangle=0.$$\nBy linearity and orthogonality ($\\langle\\mathbf{u}_i,\\mathbf{u}_m\\rangle=0$ for $i\\neq m$):\n$$\\sum_{i=1}^k c_i\\langle\\mathbf{u}_i,\\mathbf{u}_m\\rangle=c_m\\|\\mathbf{u}_m\\|^2=0.$$\nSince $\\mathbf{u}_m\\neq\\mathbf{0}$, $\\|\\mathbf{u}_m\\|^2>0$, so $c_m=0$.\n\nThis holds for all $m$, hence all $c_i=0$ and the set is linearly independent. $\\blacksquare$",
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
    solution:
      "Using $\\langle p,q\\rangle=\\int_{-1}^1 p(x)q(x)\\,dx$:\n\n**Are $1$ and $x$ orthogonal?**\n$$\\langle 1,x\\rangle=\\int_{-1}^1 x\\,dx=\\left[\\frac{x^2}{2}\\right]_{-1}^1=\\frac{1}{2}-\\frac{1}{2}=0. \\checkmark$$\n(The integrand $x$ is an odd function on a symmetric interval.) Yes, $1\\perp x$.\n\n**Are $1$ and $x^2$ orthogonal?**\n$$\\langle 1,x^2\\rangle=\\int_{-1}^1 x^2\\,dx=\\left[\\frac{x^3}{3}\\right]_{-1}^1=\\frac{1}{3}-\\frac{-1}{3}=\\frac{2}{3}\\neq0.$$\nNo, $1\\not\\perp x^2$. This motivates Gram-Schmidt: we need to subtract $\\frac{2/3}{2}\\cdot1=\\frac{1}{3}$ from $x^2$ to get $x^2-\\frac{1}{3}\\propto P_2(x)$. $\\blacksquare$",
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
    solution:
      "For any orthonormal basis $\\{\\mathbf{e}_1,\\mathbf{e}_2,\\mathbf{e}_3\\}$, the expansion theorem (Thm 21) gives:\n$$\\mathbf{v}=\\sum_{i=1}^3\\langle\\mathbf{v},\\mathbf{e}_i\\rangle\\mathbf{e}_i.$$\n\nThe scalars $\\langle\\mathbf{v},\\mathbf{e}_i\\rangle$ are the **Fourier coefficients** (coordinates of $\\mathbf{v}$ in the ONB).\n\nFor the standard ONB $\\{\\mathbf{e}_1,\\mathbf{e}_2,\\mathbf{e}_3\\}=\\{(1,0,0),(0,1,0),(0,0,1)\\}$ and $\\mathbf{v}=(2,-1,3)$:\n$$\\langle\\mathbf{v},\\mathbf{e}_1\\rangle=2,\\quad\\langle\\mathbf{v},\\mathbf{e}_2\\rangle=-1,\\quad\\langle\\mathbf{v},\\mathbf{e}_3\\rangle=3.$$\n$$\\mathbf{v}=2\\mathbf{e}_1-\\mathbf{e}_2+3\\mathbf{e}_3=(2,-1,3). \\checkmark$$\n\nThe power of ONBs: coordinates are just inner products — no need to solve a linear system. $\\blacksquare$",
  },
];

export default questions;
