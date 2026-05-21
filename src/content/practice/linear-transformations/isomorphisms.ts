import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "lt-iso-1",
    question:
      "Is $T: \\mathbb{P}_2(\\mathbb{R}) \\to \\mathbb{R}^3$ defined by $T(a + bx + cx^2) = (a, a+b, a+b+c)$ an isomorphism?",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Both spaces are 3-dimensional, so it suffices to check injectivity (or surjectivity).",
      "**Check injectivity:** $T(a+bx+cx^2) = (0,0,0) \\Rightarrow a=0$, $a+b=0 \\Rightarrow b=0$, $a+b+c=0 \\Rightarrow c=0$. So $\\ker(T)=\\{0\\}$. ✓",
      "Since $T$ is injective between equal-dimensional spaces, $T$ is an **isomorphism**.",
    ],
    solution:
      "Both $\\mathbb{P}_2(\\mathbb{R})$ and $\\mathbb{R}^3$ have dimension 3. It suffices to check that $T$ is injective.\n\nSuppose $T(a+bx+cx^2)=(0,0,0)$. Then:\n$$a=0,\\quad a+b=0\\Rightarrow b=0,\\quad a+b+c=0\\Rightarrow c=0.$$\n\nSo $\\ker(T)=\\{0\\}$ and $T$ is injective. Since $\\dim\\mathbb{P}_2=\\dim\\mathbb{R}^3=3$, an injective linear map between equal-dimensional spaces is an isomorphism. $\\blacksquare$",
  },
  {
    id: "lt-iso-2",
    question:
      "Prove that if $T: V \\to W$ is an isomorphism and $\\mathcal{B} = \\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}$ is a basis for $V$, then $T(\\mathcal{B}) = \\{T(\\mathbf{b}_1),\\ldots,T(\\mathbf{b}_n)\\}$ is a basis for $W$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "**LI:** Suppose $\\sum \\alpha_i T(\\mathbf{b}_i) = \\mathbf{0}_W$. By linearity, $T(\\sum \\alpha_i \\mathbf{b}_i) = \\mathbf{0}_W$. Since $T$ is injective ($\\ker(T)=\\{\\mathbf{0}\\}$): $\\sum \\alpha_i \\mathbf{b}_i = \\mathbf{0}_V$. Since $\\mathcal{B}$ is LI: all $\\alpha_i = 0$. ✓",
      "**Spanning:** For any $\\mathbf{w} \\in W$, since $T$ is surjective, $\\mathbf{w} = T(\\mathbf{v})$ for some $\\mathbf{v} \\in V$. Write $\\mathbf{v} = \\sum \\alpha_i \\mathbf{b}_i$. Then $\\mathbf{w} = T(\\mathbf{v}) = \\sum \\alpha_i T(\\mathbf{b}_i)$. ✓",
      "Therefore $T(\\mathcal{B})$ is LI and spans $W$: it is a basis for $W$. ∎",
    ],
    solution:
      "**Part 1 — Linear independence of $T(\\mathcal{B})$:**\nSuppose $\\sum_{i=1}^n\\alpha_i T(\\mathbf{b}_i)=\\mathbf{0}_W$. By linearity, $T\\!\\left(\\sum\\alpha_i\\mathbf{b}_i\\right)=\\mathbf{0}_W$. Since $T$ is injective ($\\ker T=\\{\\mathbf{0}_V\\}$), we get $\\sum\\alpha_i\\mathbf{b}_i=\\mathbf{0}_V$. Since $\\mathcal{B}$ is linearly independent, all $\\alpha_i=0$. $\\checkmark$\n\n**Part 2 — Spanning:**\nLet $\\mathbf{w}\\in W$. Since $T$ is surjective, $\\exists\\mathbf{v}\\in V$ with $T(\\mathbf{v})=\\mathbf{w}$. Write $\\mathbf{v}=\\sum\\alpha_i\\mathbf{b}_i$ (since $\\mathcal{B}$ spans $V$). Then $\\mathbf{w}=T(\\mathbf{v})=\\sum\\alpha_i T(\\mathbf{b}_i)\\in\\operatorname{span}(T(\\mathcal{B}))$. $\\checkmark$\n\nTherefore $T(\\mathcal{B})$ is a basis for $W$. $\\blacksquare$",
  },
  {
    id: "lt-iso-3",
    question:
      "Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ have matrix $A = \\begin{pmatrix}1&0&1\\\\2&1&0\\\\0&1&1\\end{pmatrix}$. Determine if $T$ is an isomorphism.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "For a linear map $V \\to V$, it is an isomorphism iff its matrix has nonzero determinant.",
      "$\\det(A) = 1(1\\cdot1 - 0\\cdot1) - 0 + 1(2\\cdot1 - 1\\cdot0) = 1(1) + 1(2) = 3 \\neq 0$.",
      "Therefore $T$ is an **isomorphism** (invertible linear map).",
    ],
    solution:
      "A linear map $T:V\\to V$ is an isomorphism iff its matrix is invertible, i.e., $\\det(A)\\neq 0$.\n\nExpand along the first row:\n$$\\det(A)=1\\cdot\\det\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}-0+1\\cdot\\det\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}=1(1-0)+1(2-0)=1+2=3\\neq0.$$\n\nSince $\\det(A)\\neq 0$, $A$ is invertible, and $T$ is an **isomorphism**. $\\blacksquare$",
  },
  {
    id: "lt-iso-4",
    question:
      "Show that $\\mathbb{P}(\\mathbb{R})$ (all polynomials) and $\\mathbb{R}^\\infty$ (sequences of real numbers, finitely many non-zero) are isomorphic as vector spaces.",
    type: "proof",
    difficulty: "hard",
    hints: [
      "Define $\\Phi: \\mathbb{P}(\\mathbb{R}) \\to \\mathbb{R}^\\infty$ by $\\Phi(a_0 + a_1 x + \\cdots + a_n x^n) = (a_0, a_1, \\ldots, a_n, 0, 0, \\ldots)$. This maps a polynomial to its sequence of coefficients.",
      "$\\Phi$ is linear: $\\Phi(\\alpha p + \\beta q)$ maps to $\\alpha$ times coefficients of $p$ plus $\\beta$ times coefficients of $q$. ✓",
      "Injective: if $\\Phi(p) = \\mathbf{0}$, all coefficients are 0, so $p = 0$. Surjective: every finitely-supported sequence $(a_0,\\ldots,a_n,0,\\ldots)$ is the image of $\\sum a_i x^i$. Therefore $\\Phi$ is an isomorphism. ∎",
    ],
    solution:
      "Define $\\Phi:\\mathbb{P}(\\mathbb{R})\\to\\mathbb{R}^\\infty$ by $\\Phi(a_0+a_1x+\\cdots+a_nx^n)=(a_0,a_1,\\ldots,a_n,0,0,\\ldots)$.\n\n**Linearity:** For $p=\\sum a_i x^i$ and $q=\\sum b_i x^i$, $\\Phi(\\alpha p+\\beta q)=\\alpha(a_0,a_1,\\ldots)+\\beta(b_0,b_1,\\ldots)=\\alpha\\Phi(p)+\\beta\\Phi(q)$. $\\checkmark$\n\n**Injectivity:** If $\\Phi(p)=\\mathbf{0}$, all coefficients $a_i=0$, so $p=0$. $\\checkmark$\n\n**Surjectivity:** Every sequence $(a_0,\\ldots,a_n,0,0,\\ldots)\\in\\mathbb{R}^\\infty$ (finitely-many nonzero entries by definition) equals $\\Phi(a_0+\\cdots+a_nx^n)$. $\\checkmark$\n\nTherefore $\\Phi$ is an isomorphism and $\\mathbb{P}(\\mathbb{R})\\cong\\mathbb{R}^\\infty$. $\\blacksquare$",
  },
];

export default questions;
