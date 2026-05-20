import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "dc-svd-1",
    question:
      "Find the SVD of $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1 \\\\ 1 & 0\\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "$A^TA = \\begin{pmatrix}1&0&1\\\\1&1&0\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\\\1&0\\end{pmatrix} = \\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. Eigenvalues: $(\\lambda-2)^2-1=0 \\implies \\lambda=3,1$. Singular values: $\\sigma_1=\\sqrt{3}$, $\\sigma_2=1$.",
      "Right singular vectors: $\\lambda=3$: $(A^TA-3I)\\mathbf{v}=\\mathbf{0}$, $\\mathbf{v}_1=(1,1)^T/\\sqrt{2}$. $\\lambda=1$: $\\mathbf{v}_2=(1,-1)^T/\\sqrt{2}$.",
      "$\\mathbf{u}_1 = A\\mathbf{v}_1/\\sigma_1 = \\frac{1}{\\sqrt{6}}\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}$. $\\mathbf{u}_2 = A\\mathbf{v}_2/\\sigma_2 = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}0\\\\-1\\\\1\\end{pmatrix}$. Extend to orthonormal basis: $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1,1,1)^T$ (or any unit vector $\\perp \\mathbf{u}_1, \\mathbf{u}_2$). $U=\\begin{pmatrix}2/\\sqrt{6}&0&-1/\\sqrt{3}\\\\1/\\sqrt{6}&-1/\\sqrt{2}&1/\\sqrt{3}\\\\1/\\sqrt{6}&1/\\sqrt{2}&1/\\sqrt{3}\\end{pmatrix}$, $\\Sigma=\\begin{pmatrix}\\sqrt{3}&0\\\\0&1\\\\0&0\\end{pmatrix}$, $V=\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$.",
    ],
  },
  {
    id: "dc-svd-2",
    question:
      "Given that $A = U\\Sigma V^T$ is the SVD of a $4\\times5$ real matrix with $\\Sigma = \\operatorname{diag}(5, 3, 1, 0, 0)$ (embedded), find: (a) $\\operatorname{rank}(A)$, (b) a basis for $\\operatorname{col}(A)$, (c) $\\|A\\|_F$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "(a) $\\operatorname{rank}(A)$ = number of nonzero singular values = $3$.",
      "(b) The first $r=3$ columns of $U$ form an orthonormal basis for $\\operatorname{col}(A)$: $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$.",
      "(c) $\\|A\\|_F^2 = \\sum_i \\sigma_i^2 = 25+9+1 = 35$, so $\\|A\\|_F = \\sqrt{35}$.",
    ],
  },
  {
    id: "dc-svd-3",
    question:
      "Suppose $A$ has SVD with singular values $\\sigma_1=10$, $\\sigma_2=4$, $\\sigma_3=1$. Find the best rank-1 approximation $A_1$ and compute the approximation error $\\|A-A_1\\|_F$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Best rank-1 approximation: $A_1 = \\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T$ (keep only the first outer product).",
      "Approximation error (Eckart-Young): $\\|A-A_1\\|_F^2 = \\sigma_2^2 + \\sigma_3^2 = 16+1 = 17$.",
      "$\\|A-A_1\\|_F = \\sqrt{17}$. Note: The relative error is $\\sqrt{17}/\\sqrt{100+16+1} = \\sqrt{17/117} \\approx 38\\%$.",
    ],
  },
  {
    id: "dc-svd-4",
    question:
      "Prove: the singular values of a matrix $A \\in \\mathbb{C}^{m\\times n}$ are the nonneg. square roots of the eigenvalues of $A^HA$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "By definition, the singular values are $\\sigma_i = \\sqrt{\\lambda_i(A^HA)}$ — so really we need to show the definition is consistent: $A^HA$ has nonneg. real eigenvalues.",
      "Hermitian: $(A^HA)^H = A^H(A^H)^H = A^HA$. ✓ So eigenvalues are real.",
      "PSD: for any $\\mathbf{x}\\neq\\mathbf{0}$, $\\mathbf{x}^H(A^HA)\\mathbf{x} = \\|A\\mathbf{x}\\|^2 \\geq 0$. Hence all eigenvalues $\\geq 0$. ✓ Taking nonneg. square roots defines $\\sigma_i \\geq 0$. ∎",
    ],
  },
];

export default questions;
