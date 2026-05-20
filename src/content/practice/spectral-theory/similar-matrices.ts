import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "st-sm-1",
    question:
      "Are $A = \\begin{pmatrix}1 & 2 \\\\ 0 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 0 \\\\ 2 & 1\\end{pmatrix}$ similar?",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Compute invariants: $\\operatorname{tr}(A) = 4 = \\operatorname{tr}(B)$. $\\det(A) = 3 = \\det(B)$.",
      "Characteristic polynomials: $p_A(\\lambda) = (\\lambda-1)(\\lambda-3) = p_B(\\lambda)$. Same eigenvalues: $1$ and $3$.",
      "Since both have 2 distinct eigenvalues, both are diagonalizable to the same diagonal matrix $D = \\text{diag}(1,3)$. Therefore $A \\sim D \\sim B$, so **yes, $A \\sim B$**.",
    ],
  },
  {
    id: "st-sm-2",
    question:
      "Show that $A = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$ and $B = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$ are **not** similar, despite having the same characteristic polynomial.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "Both have $p(\\lambda) = \\lambda^2$. Eigenvalue $\\lambda=0$ with algebraic multiplicity 2 for both.",
      "But $\\operatorname{rank}(A) = 1 \\neq 0 = \\operatorname{rank}(B)$.",
      "Rank is a similarity invariant. Since $\\operatorname{rank}(A) \\neq \\operatorname{rank}(B)$, they are **not similar**.",
    ],
  },
  {
    id: "st-sm-3",
    question:
      "Find an invertible $P$ such that $P^{-1}AP = D$ (diagonal), where $A = \\begin{pmatrix}1 & 3 \\\\ 4 & 2\\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Find eigenvalues: $p_A(\\lambda) = (\\lambda-1)(\\lambda-2)-12 = \\lambda^2-3\\lambda-10 = (\\lambda-5)(\\lambda+2)$. So $\\lambda_1=5$, $\\lambda_2=-2$.",
      "Eigenvector for $\\lambda=5$: $(A-5I)\\mathbf{x}=\\mathbf{0}$: $\\begin{pmatrix}-4&3\\\\4&-3\\end{pmatrix}\\sim\\begin{pmatrix}4&-3\\\\0&0\\end{pmatrix}$. So $4x_1=3x_2$, take $\\mathbf{p}_1=(3,4)^T$.",
      "Eigenvector for $\\lambda=-2$: $(A+2I)\\mathbf{x}=\\mathbf{0}$: $\\begin{pmatrix}3&3\\\\4&4\\end{pmatrix}\\sim\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$. So $x_1=-x_2$, take $\\mathbf{p}_2=(1,-1)^T$. Result: $P=\\begin{pmatrix}3&1\\\\4&-1\\end{pmatrix}$, $D=\\begin{pmatrix}5&0\\\\0&-2\\end{pmatrix}$.",
    ],
  },
  {
    id: "st-sm-4",
    question:
      "Prove that if $A$ is similar to $B$ and $B$ is similar to $C$, then $A$ is similar to $C$ (transitivity of similarity).",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Given: $B = P^{-1}AP$ and $C = Q^{-1}BQ$ for some invertible $P, Q$.",
      "Substitute: $C = Q^{-1}(P^{-1}AP)Q = (PQ)^{-1}A(PQ)$.",
      "Set $R = PQ$. Then $R$ is invertible (product of invertible matrices) and $C = R^{-1}AR$. Therefore $A \\sim C$. ∎",
    ],
  },
];

export default questions;
