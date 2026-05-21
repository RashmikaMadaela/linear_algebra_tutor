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
    solution:
      "**Computation:** $\\langle \\mathbf{u},\\mathbf{v}\\rangle = 1\\cdot3 + 2\\cdot0 + (-1)\\cdot2 = 3+0-2=1$. By symmetry, $\\langle\\mathbf{v},\\mathbf{u}\\rangle=1$. \\checkmark\n\n**Axiom 1 — Linearity:** $\\langle \\alpha\\mathbf{u}+\\mathbf{w},\\mathbf{v}\\rangle=\\sum_i(\\alpha u_i+w_i)v_i=\\alpha\\sum_i u_iv_i+\\sum_i w_iv_i=\\alpha\\langle\\mathbf{u},\\mathbf{v}\\rangle+\\langle\\mathbf{w},\\mathbf{v}\\rangle$.\n\n**Axiom 2 — Symmetry:** $\\langle\\mathbf{u},\\mathbf{v}\\rangle=\\sum u_iv_i=\\sum v_iu_i=\\langle\\mathbf{v},\\mathbf{u}\\rangle$.\n\n**Axiom 3 — Positive definiteness:** $\\langle\\mathbf{u},\\mathbf{u}\\rangle=\\sum u_i^2\\geq0$, and equals zero iff all $u_i=0$, i.e., $\\mathbf{u}=\\mathbf{0}$. $\\blacksquare$",
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
    solution:
      "**Axiom 1 — Linearity:** $\\langle\\alpha A+C,B\\rangle=\\operatorname{tr}(B^T(\\alpha A+C))=\\alpha\\operatorname{tr}(B^TA)+\\operatorname{tr}(B^TC)=\\alpha\\langle A,B\\rangle+\\langle C,B\\rangle$. (Linearity of trace.) $\\checkmark$\n\n**Axiom 2 — Symmetry:** $\\langle A,B\\rangle=\\operatorname{tr}(B^TA)=\\operatorname{tr}((B^TA)^T)=\\operatorname{tr}(A^TB)=\\langle B,A\\rangle$. (Used: $\\operatorname{tr}(M)=\\operatorname{tr}(M^T)$.) $\\checkmark$\n\n**Axiom 3 — Positive definiteness:** $\\langle A,A\\rangle=\\operatorname{tr}(A^TA)=\\sum_{i,j}A_{ij}^2\\geq0$, with equality iff all $A_{ij}=0$. $\\checkmark$\n\n**Computation:** For $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$: $\\langle A,A\\rangle=1^2+2^2+3^2+4^2=1+4+9+16=30$. $\\blacksquare$",
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
    solution:
      "Using $\\langle\\mathbf{u},\\mathbf{v}\\rangle=\\sum_i u_i\\overline{v_i}$:\n$$\\langle\\mathbf{u},\\mathbf{v}\\rangle=(1+i)\\overline{1}+2\\overline{i}=(1+i)(1)+2(-i)=1+i-2i=1-i.$$\n$$\\langle\\mathbf{v},\\mathbf{u}\\rangle=1\\cdot\\overline{(1+i)}+i\\cdot\\overline{2}=(1-i)+2i=1+i.$$\n\n**Verification:** $\\overline{\\langle\\mathbf{v},\\mathbf{u}\\rangle}=\\overline{1+i}=1-i=\\langle\\mathbf{u},\\mathbf{v}\\rangle$. $\\checkmark$\n\nThis confirms conjugate symmetry: $\\langle\\mathbf{u},\\mathbf{v}\\rangle=\\overline{\\langle\\mathbf{v},\\mathbf{u}\\rangle}$. $\\blacksquare$",
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
    solution:
      "**Inner product:**\n$$\\langle f,g\\rangle=\\int_0^1 x\\cdot x^2\\,dx=\\int_0^1 x^3\\,dx=\\left[\\frac{x^4}{4}\\right]_0^1=\\frac{1}{4}.$$\n\n**Norms:**\n$$\\|f\\|^2=\\int_0^1 x^2\\,dx=\\frac{1}{3},\\quad\\|f\\|=\\frac{1}{\\sqrt{3}}.$$\n$$\\|g\\|^2=\\int_0^1 x^4\\,dx=\\frac{1}{5},\\quad\\|g\\|=\\frac{1}{\\sqrt{5}}.$$\n\n**Cauchy-Schwarz check:** $|\\langle f,g\\rangle|=\\frac{1}{4}\\leq\\|f\\|\\|g\\|=\\frac{1}{\\sqrt{15}}\\approx0.258$. Indeed $0.25<0.258$. $\\checkmark$ $\\blacksquare$",
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
    solution:
      "By Theorem 17 (conjugate-linearity in the second argument): $\\langle\\mathbf{u},\\alpha\\mathbf{v}\\rangle=\\overline{\\alpha}\\langle\\mathbf{u},\\mathbf{v}\\rangle$.\n\nHere $\\alpha=2i$, so $\\overline{\\alpha}=\\overline{2i}=-2i$.\n\n$$\\langle\\mathbf{u},2i\\mathbf{v}\\rangle=(-2i)\\langle\\mathbf{u},\\mathbf{v}\\rangle=(-2i)(3+4i)=-6i-8i^2=-6i+8=8-6i. \\blacksquare$$",
  },
];

export default questions;
