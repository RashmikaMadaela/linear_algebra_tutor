import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "st-mult-1",
    question:
      "For $A = \\begin{pmatrix}5 & 1 & 0 \\\\ 0 & 5 & 0 \\\\ 0 & 0 & 3\\end{pmatrix}$, find the algebraic and geometric multiplicities of each eigenvalue. Is $A$ diagonalizable?",
    type: "computation",
    difficulty: "easy",
    hints: [
      "$A$ is upper triangular, so eigenvalues are diagonal entries: $\\lambda_1=5$ (from $a_{11}, a_{22}$) and $\\lambda_2=3$ (from $a_{33}$). Thus $m_a(5)=2$, $m_a(3)=1$.",
      "For $\\lambda=5$: $A-5I = \\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&-2\\end{pmatrix}$. Rank = 2, so $m_g(5) = 3-2 = 1$.",
      "$m_g(5)=1 < 2 = m_a(5)$ — defective! $m_g(3)=1=m_a(3)$ ✓. Since $m_g(5) \\neq m_a(5)$, $A$ is **not diagonalizable**.",
    ],
    solution: "**Solution:** $A$ is upper triangular, so eigenvalues are diagonal entries: $\\lambda_1=5$ (from $a_{11}, a_{22}$) and $\\lambda_2=3$ (from $a_{33}$). Thus $m_a(5)=2$, $m_a(3)=1$.\n\nFor $\\lambda=5$: $A-5I = \\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&-2\\end{pmatrix}$. Rank = 2, so $m_g(5) = 3-2 = 1$.\n\n$m_g(5)=1 < 2 = m_a(5)$ — defective! $m_g(3)=1=m_a(3)$ ✓. Since $m_g(5) \\\neq m_a(5)$, $A$ is **not diagonalizable**.",
  },
  {
    id: "st-mult-2",
    question:
      "For $A = \\begin{pmatrix}2 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 2\\end{pmatrix}$, find all eigenvalues with their algebraic and geometric multiplicities. Is $A$ diagonalizable?",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Compute $p_A(\\lambda)$. Expanding along the middle row: $p_A(\\lambda) = (\\lambda-2)[(\\lambda-2)^2-1] = (\\lambda-2)(\\lambda^2-4\\lambda+3) = (\\lambda-2)(\\lambda-1)(\\lambda-3)$.",
      "Eigenvalues: $\\lambda=1,2,3$, all with $m_a=1$.",
      "Since all eigenvalues are distinct (all $m_a=1$), automatically $m_g=1$ for each. Therefore **diagonalizable** with eigenvectors: $\\lambda=1$: solve $(A-I)\\mathbf{x}=\\mathbf{0}$ → $(1,0,-1)^T$; $\\lambda=2$: $(0,1,0)^T$; $\\lambda=3$: $(1,0,1)^T$.",
    ],
    solution: "**Solution:** Compute $p_A(\\lambda)$. Expanding along the middle row: $p_A(\\lambda) = (\\lambda-2)[(\\lambda-2)^2-1] = (\\lambda-2)(\\lambda^2-4\\lambda+3) = (\\lambda-2)(\\lambda-1)(\\lambda-3)$.\n\nEigenvalues: $\\lambda=1,2,3$, all with $m_a=1$.\n\nSince all eigenvalues are distinct (all $m_a=1$), automatically $m_g=1$ for each. Therefore **diagonalizable** with eigenvectors: $\\lambda=1$: solve $(A-I)\\mathbf{x}=\\mathbf{0}$ → $(1,0,-1)^T$; $\\lambda=2$: $(0,1,0)^T$; $\\lambda=3$: $(1,0,1)^T$.",
  },
  {
    id: "st-mult-3",
    question:
      "Suppose $A$ is a $4\\times4$ matrix with characteristic polynomial $p_A(\\lambda)=(\\lambda-2)^2(\\lambda+1)^2$. Give **two** examples: one where $A$ is diagonalizable, one where it is not.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "**Diagonalizable example:** $A = \\operatorname{diag}(2,2,-1,-1) = \\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\0&0&-1&0\\\\0&0&0&-1\\end{pmatrix}$. Here $m_g(2)=2=m_a(2)$ and $m_g(-1)=2=m_a(-1)$.",
      "**Not diagonalizable:** $A = \\begin{pmatrix}2&1&0&0\\\\0&2&0&0\\\\0&0&-1&1\\\\0&0&0&-1\\end{pmatrix}$. For $\\lambda=2$: $A-2I$ has rank 2, so $m_g(2)=2$... actually rank 1 for the 2×2 Jordan block. Refine: use $\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ block for each — then $m_g(2) = m_g(-1) = 1 < 2 = m_a$.",
      "Alternatively, non-diagonalizable: $A = J_2(2) \\oplus J_2(-1) = \\begin{pmatrix}2&1&0&0\\\\0&2&0&0\\\\0&0&-1&1\\\\0&0&0&-1\\end{pmatrix}$. Here $m_g(2)=1<2$ (one Jordan block of size 2 for each eigenvalue), so not diagonalizable.",
    ],
    solution: "**Solution:** **Diagonalizable example:** $A = \\operatorname{diag}(2,2,-1,-1) = \\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\0&0&-1&0\\\\0&0&0&-1\\end{pmatrix}$. Here $m_g(2)=2=m_a(2)$ and $m_g(-1)=2=m_a(-1)$.\n\n**Not diagonalizable:** $A = \\begin{pmatrix}2&1&0&0\\\\0&2&0&0\\\\0&0&-1&1\\\\0&0&0&-1\\end{pmatrix}$. For $\\lambda=2$: $A-2I$ has rank 2, so $m_g(2)=2$... actually rank 1 for the 2×2 Jordan block. Refine: use $\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ block for each — then $m_g(2) = m_g(-1) = 1 < 2 = m_a$.\n\nAlternatively, non-diagonalizable: $A = J_2(2) \\oplus J_2(-1) = \\begin{pmatrix}2&1&0&0\\\\0&2&0&0\\\\0&0&-1&1\\\\0&0&0&-1\\end{pmatrix}$. Here $m_g(2)=1<2$ (one Jordan block of size 2 for each eigenvalue), so not diagonalizable.",
  },
  {
    id: "st-mult-4",
    question:
      "Prove: $1 \\leq m_g(\\lambda_0) \\leq m_a(\\lambda_0)$ for any eigenvalue $\\lambda_0$ of $A \\in M_{n\\times n}(\\mathbb{F})$.",
    type: "proof",
    difficulty: "hard",
    hints: [
      "**Lower bound:** $\\lambda_0$ is an eigenvalue means $\\ker(A-\\lambda_0 I)\\neq\\{\\mathbf{0}\\}$, so $m_g(\\lambda_0) = \\dim\\ker(A-\\lambda_0 I) \\geq 1$.",
      "**Upper bound:** Let $k = m_g(\\lambda_0)$ and extend a basis $\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_k\\}$ of $E_{\\lambda_0}$ to a basis $\\mathcal{B}$ of $\\mathbb{F}^n$. In this basis, $A$ has the block form $\\begin{pmatrix}\\lambda_0 I_k & C \\\\ 0 & B\\end{pmatrix}$ (since $A\\mathbf{v}_i = \\lambda_0\\mathbf{v}_i$ for $i\\leq k$).",
      "Then $p_A(\\lambda) = \\det(\\lambda I - A) = (\\lambda-\\lambda_0)^k \\cdot p_B(\\lambda)$. Therefore $(\\lambda-\\lambda_0)^k$ divides $p_A(\\lambda)$, meaning $m_a(\\lambda_0) \\geq k = m_g(\\lambda_0)$. ∎",
    ],
    solution: "**Solution:** **Lower bound:** $\\lambda_0$ is an eigenvalue means $\\ker(A-\\lambda_0 I)\\\neq\\{\\mathbf{0}\\}$, so $m_g(\\lambda_0) = \\dim\\ker(A-\\lambda_0 I) \\geq 1$.\n\n**Upper bound:** Let $k = m_g(\\lambda_0)$ and extend a basis $\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_k\\}$ of $E_{\\lambda_0}$ to a basis $\\mathcal{B}$ of $\\mathbb{F}^n$. In this basis, $A$ has the block form $\\begin{pmatrix}\\lambda_0 I_k & C \\\\ 0 & B\\end{pmatrix}$ (since $A\\mathbf{v}_i = \\lambda_0\\mathbf{v}_i$ for $i\\leq k$).\n\nThen $p_A(\\lambda) = \\det(\\lambda I - A) = (\\lambda-\\lambda_0)^k \\cdot p_B(\\lambda)$. Therefore $(\\lambda-\\lambda_0)^k$ divides $p_A(\\lambda)$, meaning $m_a(\\lambda_0) \\geq k = m_g(\\lambda_0)$. ∎",
  },
];

export default questions;
