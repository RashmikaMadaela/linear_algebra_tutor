import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "dc-hu-1",
    question:
      "Verify that $A = \\begin{pmatrix}2 & 1+i \\\\ 1-i & 3\\end{pmatrix}$ is Hermitian, then find its eigenvalues and confirm they are real.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Hermitian check: compute $A^H = (\\overline{A})^T$. Entry $(1,2)$ of $A^H$ should equal entry $(2,1)$ of $A$. $\\overline{(1+i)} = 1-i = a_{21}$. ✓ So $A^H = A$.",
      "Characteristic polynomial: $p(\\lambda) = (\\lambda-2)(\\lambda-3) - (1+i)(1-i) = \\lambda^2-5\\lambda+6-2 = \\lambda^2-5\\lambda+4 = (\\lambda-1)(\\lambda-4)$.",
      "Eigenvalues: $\\lambda_1=1$, $\\lambda_2=4$ — both real. ✓ (Consistent with Spectral Theorem: Hermitian matrices have real eigenvalues.)",
    ],
  },
  {
    id: "dc-hu-2",
    question:
      "Prove that unitary matrices preserve the Hermitian inner product: if $U$ is unitary and $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{C}^n$, then $\\langle U\\mathbf{x}, U\\mathbf{y}\\rangle = \\langle\\mathbf{x},\\mathbf{y}\\rangle$.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "Expand using the definition $\\langle\\mathbf{u},\\mathbf{v}\\rangle = \\mathbf{v}^H\\mathbf{u}$.",
      "$\\langle U\\mathbf{x}, U\\mathbf{y}\\rangle = (U\\mathbf{y})^H(U\\mathbf{x}) = \\mathbf{y}^H U^H U \\mathbf{x}$.",
      "Since $U$ is unitary, $U^H U = I$. So $\\mathbf{y}^H U^H U \\mathbf{x} = \\mathbf{y}^H\\mathbf{x} = \\langle\\mathbf{x},\\mathbf{y}\\rangle$. ∎",
    ],
  },
  {
    id: "dc-hu-3",
    question:
      "Prove: if $A$ is Hermitian ($A^H = A$), then $iA$ is **skew-Hermitian** ($(iA)^H = -iA$).",
    type: "proof",
    difficulty: "easy",
    hints: [
      "Compute $(iA)^H$ directly using properties of the conjugate transpose.",
      "$(iA)^H = \\overline{i} A^H = (-i)(A) = -iA$. (Used: $(cB)^H = \\bar{c}B^H$ and $A^H=A$.)",
      "Therefore $(iA)^H = -iA$, which is the definition of skew-Hermitian. ∎",
    ],
  },
  {
    id: "dc-hu-4",
    question:
      "Find an orthogonal matrix $P$ that diagonalizes the real symmetric matrix $A = \\begin{pmatrix}1 & 2 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & 0 & 3\\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Block structure: lower-right $1\\times1$ block gives $\\lambda_3=3$ with eigenvector $(0,0,1)^T$. Upper-left $2\\times2$ block: $\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ has eigenvalues $3$ and $-1$.",
      "For upper-left block: $\\lambda=3$: eigenvector $(1,1)^T/\\sqrt{2}$. $\\lambda=-1$: eigenvector $(1,-1)^T/\\sqrt{2}$.",
      "$P = \\begin{pmatrix}1/\\sqrt{2}&1/\\sqrt{2}&0\\\\1/\\sqrt{2}&-1/\\sqrt{2}&0\\\\0&0&1\\end{pmatrix}$, $D=\\operatorname{diag}(3,-1,3)$. Verify $P^TP=I$. ✓",
    ],
  },
];

export default questions;
