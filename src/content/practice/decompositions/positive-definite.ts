import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "dc-pd-1",
    question:
      "Determine whether $A = \\begin{pmatrix}2 & 1 \\\\ 1 & 3\\end{pmatrix}$ is positive definite using (a) eigenvalue criterion and (b) leading principal minor criterion.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "(a) Eigenvalues: $p(\\lambda)=(\\lambda-2)(\\lambda-3)-1=\\lambda^2-5\\lambda+5$. $\\lambda = (5\\pm\\sqrt{5})/2 > 0$. Both positive ⟹ PD. ✓",
      "(b) Leading principal minors: $\\Delta_1 = 2 > 0$; $\\Delta_2 = \\det(A) = 6-1 = 5 > 0$. All positive ⟹ PD. ✓",
      "Both methods confirm: $A \\succ 0$.",
    ],
  },
  {
    id: "dc-pd-2",
    question:
      "Find all values of $c$ for which $A = \\begin{pmatrix}4 & c \\\\ c & 1\\end{pmatrix}$ is positive definite.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Apply Sylvester's criterion: $\\Delta_1 = 4 > 0$ always satisfied.",
      "$\\Delta_2 = \\det(A) = 4 - c^2 > 0 \\implies c^2 < 4 \\implies -2 < c < 2$.",
      "So $A$ is PD if and only if $c \\in (-2, 2)$.",
    ],
  },
  {
    id: "dc-pd-3",
    question:
      "Prove: if $A \\succ 0$ (positive definite), then $A^{-1} \\succ 0$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Since $A \\succ 0$, $A$ is invertible (all eigenvalues $> 0$, so $\\det(A) > 0$).",
      "Let $\\mathbf{x} \\neq \\mathbf{0}$. Set $\\mathbf{y} = A^{-1}\\mathbf{x}$ (nonzero since $A^{-1}$ is invertible). Then: $\\mathbf{x}^T A^{-1}\\mathbf{x} = (A\\mathbf{y})^T A^{-1}(A\\mathbf{y}) = \\mathbf{y}^T A^T A^{-1} A \\mathbf{y}$.",
      "Since $A$ is symmetric, $A^T = A$, so $\\mathbf{y}^T A^T A^{-1} A \\mathbf{y} = \\mathbf{y}^T A \\mathbf{y} > 0$ (as $A\\succ 0$). Thus $A^{-1}\\succ 0$. ∎ Alternatively: eigenvalues of $A^{-1}$ are $1/\\lambda_i > 0$. ✓",
    ],
  },
  {
    id: "dc-pd-4",
    question:
      "Solve the ODE system $\\dot{\\mathbf{x}} = A\\mathbf{x}$ with $A = \\begin{pmatrix}-2 & 1 \\\\ 1 & -2\\end{pmatrix}$ and initial condition $\\mathbf{x}(0) = (3, 1)^T$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Eigenvalues: $p(\\lambda)=(\\lambda+2)^2-1=(\\lambda+1)(\\lambda+3)$. $\\lambda_1=-1$, $\\lambda_2=-3$. $A$ is symmetric negative definite (both $< 0$).",
      "Eigenvectors: $\\lambda=-1$: $(A+I)\\mathbf{v}=\\mathbf{0}$ ⟹ $\\mathbf{v}_1=(1,1)^T/\\sqrt{2}$. $\\lambda=-3$: $(A+3I)\\mathbf{v}=\\mathbf{0}$ ⟹ $\\mathbf{v}_2=(1,-1)^T/\\sqrt{2}$.",
      "General solution: $\\mathbf{x}(t)=c_1 e^{-t}(1,1)^T + c_2 e^{-3t}(1,-1)^T$. Apply IC: $c_1+c_2=3$, $c_1-c_2=1$ ⟹ $c_1=2$, $c_2=1$. Answer: $\\mathbf{x}(t) = 2e^{-t}(1,1)^T + e^{-3t}(1,-1)^T$.",
    ],
  },
];

export default questions;
