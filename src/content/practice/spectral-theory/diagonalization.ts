import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "st-diag-1",
    question:
      "Diagonalize $A = \\begin{pmatrix}6 & -1 \\\\ 2 & 3\\end{pmatrix}$. That is, find invertible $P$ and diagonal $D$ such that $A = PDP^{-1}$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Characteristic polynomial: $p_A(\\lambda) = \\lambda^2-9\\lambda+20 = (\\lambda-4)(\\lambda-5)$. Eigenvalues: $\\lambda_1=4$, $\\lambda_2=5$.",
      "For $\\lambda=4$: $(A-4I)=\\begin{pmatrix}2&-1\\\\2&-1\\end{pmatrix}$, so $2x_1=x_2$. Eigenvector: $\\mathbf{p}_1=(1,2)^T$. For $\\lambda=5$: $(A-5I)=\\begin{pmatrix}1&-1\\\\2&-2\\end{pmatrix}$, so $x_1=x_2$. Eigenvector: $\\mathbf{p}_2=(1,1)^T$.",
      "$P = \\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}$, $D = \\begin{pmatrix}4&0\\\\0&5\\end{pmatrix}$. Verify: $\\det(P) = -1\\neq0$ ✓.",
    ],
  },
  {
    id: "st-diag-2",
    question:
      "Use diagonalization to compute $A^{10}$ where $A = \\begin{pmatrix}3 & 1 \\\\ 0 & 2\\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "$A$ is upper triangular, so eigenvalues are $\\lambda_1=3$, $\\lambda_2=2$. Find eigenvectors. For $\\lambda=3$: $(A-3I)=\\begin{pmatrix}0&1\\\\0&-1\\end{pmatrix}$, eigenvector $(1,0)^T$. For $\\lambda=2$: $(A-2I)=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$, eigenvector $(1,-1)^T$.",
      "$P = \\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}$, $P^{-1} = \\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}$ (check: $PP^{-1}=I$). $D=\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}$.",
      "$A^{10} = PD^{10}P^{-1} = \\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}\\begin{pmatrix}3^{10}&0\\\\0&2^{10}\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix} = \\begin{pmatrix}3^{10}&3^{10}-2^{10}\\\\0&2^{10}\\end{pmatrix}$.",
    ],
  },
  {
    id: "st-diag-3",
    question:
      "Show that $A = \\begin{pmatrix}0 & 4 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 3\\end{pmatrix}$ is diagonalizable and find $P$ and $D$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Characteristic polynomial: expand along the third row/column gives $(\\lambda-3)\\det\\begin{pmatrix}\\lambda&-4\\\\-1&\\lambda\\end{pmatrix} = (\\lambda-3)(\\lambda^2-4) = (\\lambda-3)(\\lambda-2)(\\lambda+2)$.",
      "Three distinct eigenvalues: $\\lambda=3,2,-2$ → automatically diagonalizable.",
      "Eigenvectors: $\\lambda=3$: $(0,0,1)^T$. $\\lambda=2$: solve $\\begin{pmatrix}-2&4&0\\\\1&-2&0\\\\0&0&-1\\end{pmatrix}\\mathbf{x}=\\mathbf{0}$ → $z=0$, $x_1=2x_2$, so $(2,1,0)^T$. $\\lambda=-2$: $x_1=-2x_2$, so $(2,-1,0)^T$. Assemble $P$ and $D$.",
    ],
  },
  {
    id: "st-diag-4",
    question:
      "Prove: if $A$ is diagonalizable with eigenvalues $\\lambda_1,\\ldots,\\lambda_n$ (not necessarily distinct), then $\\det(A) = \\prod_{i=1}^n \\lambda_i$ and $\\operatorname{tr}(A) = \\sum_{i=1}^n \\lambda_i$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Since $A = PDP^{-1}$ with $D = \\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n)$, use similarity invariants.",
      "$\\det(A) = \\det(PDP^{-1}) = \\det(P)\\det(D)\\det(P)^{-1} = \\det(D) = \\prod_{i=1}^n \\lambda_i$. ✓",
      "$\\operatorname{tr}(A) = \\operatorname{tr}(PDP^{-1}) = \\operatorname{tr}(D) = \\sum_{i=1}^n \\lambda_i$ (using cyclic property $\\operatorname{tr}(XY)=\\operatorname{tr}(YX)$). ✓ ∎",
    ],
  },
];

export default questions;
