import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "st-cp-1",
    question:
      "Find the characteristic polynomial and eigenvalues of $A = \\begin{pmatrix}2 & 3 \\\\ 1 & 4\\end{pmatrix}$. Verify that $\\operatorname{tr}(A)$ equals the sum of eigenvalues and $\\det(A)$ equals the product.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "$p_A(\\lambda) = \\det(\\lambda I - A) = (\\lambda-2)(\\lambda-4) - 3 = \\lambda^2 - 6\\lambda + 5 = (\\lambda-1)(\\lambda-5)$.",
      "Eigenvalues: $\\lambda_1 = 1$, $\\lambda_2 = 5$.",
      "Sum: $1+5=6 = \\operatorname{tr}(A) = 2+4$. ✓ Product: $1\\cdot5=5 = \\det(A)=8-3$. ✓",
    ],
  },
  {
    id: "st-cp-2",
    question:
      "Find the characteristic polynomial of $A = \\begin{pmatrix}0 & 0 & -2 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 2\\end{pmatrix}$. This matrix is the **companion matrix** of $p(\\lambda) = \\lambda^3 - 2\\lambda^2 - \\lambda + 2$. Verify that $p_A = p$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Expand $\\det(\\lambda I - A)$ along the first row: $\\det\\begin{pmatrix}\\lambda&0&2\\\\-1&\\lambda&-1\\\\0&-1&\\lambda-2\\end{pmatrix}$.",
      "First row expansion: $\\lambda[\\lambda(\\lambda-2)-1] - 0 + 2[-(-1)(-1)] = \\lambda(\\lambda^2-2\\lambda-1) - 2$.",
      "$= \\lambda^3 - 2\\lambda^2 - \\lambda - 2$. Hmm — recheck with cofactor expansion more carefully: $\\lambda[\\lambda(\\lambda-2)-(-1)(-1)] + 2[(-1)(-1)-\\lambda(0)] = \\lambda(\\lambda^2-2\\lambda-1)+2(1) = \\lambda^3-2\\lambda^2-\\lambda+2$. ✓",
    ],
  },
  {
    id: "st-cp-3",
    question:
      "Let $A$ be an $n\\times n$ matrix with characteristic polynomial $p_A(\\lambda) = \\lambda^n + c_{n-1}\\lambda^{n-1} + \\cdots + c_0$. Prove that $c_0 = (-1)^n \\det(A)$ and $c_{n-1} = -\\operatorname{tr}(A)$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "For $c_0$: set $\\lambda = 0$ in $p_A(\\lambda) = \\det(\\lambda I - A)$: $p_A(0) = \\det(0\\cdot I - A) = \\det(-A) = (-1)^n\\det(A)$. ✓",
      "For $c_{n-1}$: the term $\\lambda^{n-1}$ in $\\det(\\lambda I - A)$ arises only from the product of $n-1$ diagonal factors $(\\lambda - a_{ii})$ and one other diagonal factor. The contribution is $\\sum_{i=1}^n (-a_{ii})\\cdot \\lambda^{n-1} = -\\operatorname{tr}(A)\\cdot\\lambda^{n-1}$.",
      "More precisely: in the Leibniz expansion of $\\det(\\lambda I-A)$, the only permutation contributing to $\\lambda^{n-1}$ is the identity permutation $\\sigma=\\mathrm{id}$, giving $\\prod_i(\\lambda-a_{ii})$. The coefficient of $\\lambda^{n-1}$ in this product is $-\\sum_i a_{ii} = -\\operatorname{tr}(A)$. ∎",
    ],
  },
  {
    id: "st-cp-4",
    question:
      "Suppose $A$ is a $3\\times 3$ real matrix with characteristic polynomial $p_A(\\lambda) = \\lambda^3 - 6\\lambda^2 + 11\\lambda - 6$. (a) Find all eigenvalues. (b) Find $\\operatorname{tr}(A)$ and $\\det(A)$. (c) Without computing $A$, find $\\det(A^2 - 5A)$.",
    type: "computation",
    difficulty: "hard",
    hints: [
      "(a) Factor: try $\\lambda=1$: $1-6+11-6=0$ ✓. Divide by $(\\lambda-1)$: $\\lambda^3-6\\lambda^2+11\\lambda-6 = (\\lambda-1)(\\lambda^2-5\\lambda+6) = (\\lambda-1)(\\lambda-2)(\\lambda-3)$. Eigenvalues: $1, 2, 3$.",
      "(b) $\\operatorname{tr}(A) = 1+2+3 = 6$. $\\det(A) = 1\\cdot2\\cdot3 = 6$.",
      "(c) $A^2-5A = A(A-5I)$, so $\\det(A^2-5A) = \\det(A)\\cdot\\det(A-5I)$. Eigenvalues of $A-5I$ are $1-5=-4$, $2-5=-3$, $3-5=-2$. So $\\det(A-5I) = (-4)(-3)(-2) = -24$. Thus $\\det(A^2-5A) = 6\\cdot(-24) = -144$.",
    ],
  },
];

export default questions;
