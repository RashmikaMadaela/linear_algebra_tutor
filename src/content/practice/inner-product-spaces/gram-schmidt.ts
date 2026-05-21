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
    solution:
      "**Step 1:** $\\mathbf{u}_1=\\mathbf{v}_1=(1,1,0)$, $\\|\\mathbf{u}_1\\|=\\sqrt{2}$, $\\mathbf{e}_1=\\tfrac{1}{\\sqrt{2}}(1,1,0)$.\n\n**Step 2:** $\\langle\\mathbf{v}_2,\\mathbf{e}_1\\rangle=\\tfrac{1}{\\sqrt{2}}(1\\cdot1+0\\cdot1+1\\cdot0)=\\tfrac{1}{\\sqrt{2}}$.\n$$\\mathbf{u}_2=(1,0,1)-\\frac{1}{\\sqrt{2}}\\cdot\\frac{1}{\\sqrt{2}}(1,1,0)=(1,0,1)-\\tfrac{1}{2}(1,1,0)=\\left(\\tfrac{1}{2},-\\tfrac{1}{2},1\\right).$$\n$\\|\\mathbf{u}_2\\|=\\sqrt{\\tfrac{1}{4}+\\tfrac{1}{4}+1}=\\sqrt{\\tfrac{3}{2}}=\\tfrac{\\sqrt{6}}{2}$, so $\\mathbf{e}_2=\\tfrac{1}{\\sqrt{6}}(1,-1,2)$.\n\n**Step 3:** $\\langle\\mathbf{v}_3,\\mathbf{e}_1\\rangle=\\tfrac{1}{\\sqrt{2}}(0+1+0)=\\tfrac{1}{\\sqrt{2}}$; $\\langle\\mathbf{v}_3,\\mathbf{e}_2\\rangle=\\tfrac{1}{\\sqrt{6}}(0-1+2)=\\tfrac{1}{\\sqrt{6}}$.\n$$\\mathbf{u}_3=(0,1,1)-\\tfrac{1}{2}(1,1,0)-\\tfrac{1}{6}(1,-1,2)=\\left(-\\tfrac{2}{3},\\tfrac{2}{3},\\tfrac{2}{3}\\right)\\propto(-1,1,1).$$\n$\\|(-1,1,1)\\|=\\sqrt{3}$, so $\\mathbf{e}_3=\\tfrac{1}{\\sqrt{3}}(-1,1,1)$.\n\n**ONB:** $\\left\\{\\tfrac{1}{\\sqrt{2}}(1,1,0),\\,\\tfrac{1}{\\sqrt{6}}(1,-1,2),\\,\\tfrac{1}{\\sqrt{3}}(-1,1,1)\\right\\}$. $\\blacksquare$",
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
    ],    solution:
      "**Step 1:** $e_1=\\frac{1}{\\sqrt{2}}$ (since $\\|1\\|^2=\\int_{-1}^1 1\\,dx=2$).\n\n**Step 2:** $\\langle x,e_1\\rangle=\\frac{1}{\\sqrt{2}}\\int_{-1}^1 x\\,dx=0$ (odd function). So $p_2=x$, and $\\|x\\|^2=\\int_{-1}^1 x^2\\,dx=\\frac{2}{3}$, giving $e_2=x\\cdot\\sqrt{\\frac{3}{2}}$.\n\n**Step 3:** $\\langle x^2,e_1\\rangle=\\frac{1}{\\sqrt{2}}\\cdot\\frac{2}{3}=\\frac{\\sqrt{2}}{3}$; $\\langle x^2,e_2\\rangle=\\sqrt{\\frac{3}{2}}\\int_{-1}^1 x^3\\,dx=0$ (odd). So:\n$$p_3=x^2-\\frac{\\sqrt{2}}{3}\\cdot\\frac{1}{\\sqrt{2}}=x^2-\\frac{1}{3}.$$\n$\\|x^2-\\frac{1}{3}\\|^2=\\int_{-1}^1(x^2-\\frac{1}{3})^2\\,dx=\\frac{8}{45}$, so $e_3=\\sqrt{\\frac{45}{8}}\\left(x^2-\\frac{1}{3}\\right)$.\n\n**Relation to Legendre:** $p_3=x^2-\\frac{1}{3}=\\frac{2}{3}\\cdot\\frac{3x^2-1}{2}=\\frac{2}{3}P_2(x)$. Yes, these are scalar multiples of the Legendre polynomials $P_0,P_1,P_2$. $\\blacksquare$",  },
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
    solution:
      "**Order 1: $\\{\\mathbf{v}_1,\\mathbf{v}_2\\}=\\{(1,0),(1,1)\\}$**\n$\\mathbf{e}_1=(1,0)$. $\\langle(1,1),(1,0)\\rangle=1$, so $\\mathbf{u}_2=(1,1)-1\\cdot(1,0)=(0,1)$. $\\mathbf{e}_2=(0,1)$.\n\nResult: $\\{(1,0),(0,1)\\}$ — the standard basis.\n\n**Order 2: $\\{\\mathbf{v}_2,\\mathbf{v}_1\\}=\\{(1,1),(1,0)\\}$**\n$\\mathbf{e}_1=\\frac{1}{\\sqrt{2}}(1,1)$. $\\langle(1,0),\\mathbf{e}_1\\rangle=\\frac{1}{\\sqrt{2}}$, so $\\mathbf{u}_2=(1,0)-\\frac{1}{\\sqrt{2}}\\cdot\\frac{1}{\\sqrt{2}}(1,1)=(\\frac{1}{2},-\\frac{1}{2})$. $\\mathbf{e}_2=\\frac{1}{\\sqrt{2}}(1,-1)$.\n\nResult: $\\{\\frac{1}{\\sqrt{2}}(1,1),\\frac{1}{\\sqrt{2}}(1,-1)\\}$ — a rotated basis.\n\nBoth are valid ONBs for $\\mathbb{R}^2$, but they are **different**. The order determines which ONB is produced. $\\blacksquare$",
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
    solution:
      "**Reason:** After projecting $\\mathbf{v}_k$ onto the previously constructed orthonormal vectors $\\mathbf{e}_1,\\ldots,\\mathbf{e}_{k-1}$, we define:\n$$\\mathbf{u}_k=\\mathbf{v}_k-\\sum_{j=1}^{k-1}\\langle\\mathbf{v}_k,\\mathbf{e}_j\\rangle\\mathbf{e}_j.$$\n\n**Why is $\\mathbf{u}_k\\perp\\mathbf{e}_m$ for each $m<k$?** Compute:\n$$\\langle\\mathbf{u}_k,\\mathbf{e}_m\\rangle=\\langle\\mathbf{v}_k,\\mathbf{e}_m\\rangle-\\sum_{j=1}^{k-1}\\langle\\mathbf{v}_k,\\mathbf{e}_j\\rangle\\langle\\mathbf{e}_j,\\mathbf{e}_m\\rangle.$$\nSince $\\{\\mathbf{e}_j\\}$ is orthonormal, $\\langle\\mathbf{e}_j,\\mathbf{e}_m\\rangle=\\delta_{jm}$, so the sum collapses to $\\langle\\mathbf{v}_k,\\mathbf{e}_m\\rangle$.\n$$\\langle\\mathbf{u}_k,\\mathbf{e}_m\\rangle=\\langle\\mathbf{v}_k,\\mathbf{e}_m\\rangle-\\langle\\mathbf{v}_k,\\mathbf{e}_m\\rangle=0. \\checkmark$$\n\nSubtracting projections removes the component in each direction, leaving a vector orthogonal to all previous ones. $\\blacksquare$",
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
    solution:
      "**Connection:** Applying Gram-Schmidt to the columns $\\mathbf{a}_1,\\ldots,\\mathbf{a}_k$ of $A$ produces orthonormal vectors $\\mathbf{e}_1,\\ldots,\\mathbf{e}_k$.\n\nAt step $j$, we subtract projections:\n$$\\mathbf{a}_j=\\langle\\mathbf{a}_j,\\mathbf{e}_1\\rangle\\mathbf{e}_1+\\cdots+\\langle\\mathbf{a}_j,\\mathbf{e}_j\\rangle\\mathbf{e}_j.$$\n\nLet $Q=[\\mathbf{e}_1|\\cdots|\\mathbf{e}_k]$ (columns are ONB) and define the upper triangular matrix $R$ by $R_{ij}=\\langle\\mathbf{a}_j,\\mathbf{e}_i\\rangle$ for $i\\leq j$ and $0$ otherwise.\n\nThen $A=QR$ is the **QR factorization**: $Q$ has orthonormal columns ($Q^TQ=I$) and $R$ is upper triangular with positive diagonal entries (if $A$ has full column rank). $\\blacksquare$",
  },
];

export default questions;
