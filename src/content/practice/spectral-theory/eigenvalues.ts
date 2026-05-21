import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "st-ev-1",
    question:
      "Find all eigenvalues of $A = \\begin{pmatrix}3 & 0 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 2 & 1\\end{pmatrix}$ and a corresponding eigenvector for each.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Since $A$ is block upper-triangular (the $(1,1)$ entry is isolated), one eigenvalue is $\\lambda_1 = 3$ with eigenvector $(1,0,0)^T$.",
      "For the $2\\times 2$ block $B = \\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$: $p_B(\\lambda) = (\\lambda-1)^2 - 4 = \\lambda^2-2\\lambda-3 = (\\lambda-3)(\\lambda+1)$. So $\\lambda_2 = 3$, $\\lambda_3 = -1$.",
      "For $\\lambda = 3$: solve $(B-3I)\\mathbf{x}=\\mathbf{0}$: $\\begin{pmatrix}-2&2\\\\2&-2\\end{pmatrix}\\mathbf{x}=\\mathbf{0}$, so $x_2=x_3$. Eigenvector for $A$: $(0,1,1)^T$. For $\\lambda=-1$: $x_3=-x_2$, eigenvector $(0,1,-1)^T$.",
    ],
    solution: "**Solution:** Since $A$ is block upper-triangular (the $(1,1)$ entry is isolated), one eigenvalue is $\\lambda_1 = 3$ with eigenvector $(1,0,0)^T$.\n\nFor the $2\\\times 2$ block $B = \\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$: $p_B(\\lambda) = (\\lambda-1)^2 - 4 = \\lambda^2-2\\lambda-3 = (\\lambda-3)(\\lambda+1)$. So $\\lambda_2 = 3$, $\\lambda_3 = -1$.\n\nFor $\\lambda = 3$: solve $(B-3I)\\mathbf{x}=\\mathbf{0}$: $\\begin{pmatrix}-2&2\\\\2&-2\\end{pmatrix}\\mathbf{x}=\\mathbf{0}$, so $x_2=x_3$. Eigenvector for $A$: $(0,1,1)^T$. For $\\lambda=-1$: $x_3=-x_2$, eigenvector $(0,1,-1)^T$.",
  },
  {
    id: "st-ev-2",
    question:
      "Let $T: \\mathbb{P}_2(\\mathbb{R}) \\to \\mathbb{P}_2(\\mathbb{R})$ be defined by $T(p)(x) = xp'(x)$. Find all eigenvalues of $T$ and their eigenvectors.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Write $p(x) = ax^2 + bx + c$. Then $p'(x) = 2ax+b$, so $T(p)(x) = x(2ax+b) = 2ax^2+bx$.",
      "We need $T(p) = \\lambda p$: $2ax^2+bx+0 = \\lambda ax^2 + \\lambda bx + \\lambda c$. Comparing coefficients: $2a=\\lambda a$, $b=\\lambda b$, $0=\\lambda c$.",
      "Case $a\\neq 0$: $\\lambda=2$, then $b=2b\\Rightarrow b=0$, $\\lambda c=0\\Rightarrow c=0$. Eigenvector: $x^2$. Case $a=0, b\\neq 0$: $\\lambda=1$, $c=0$. Eigenvector: $x$. Case $a=b=0$: not an eigenvector ($p=0$). So eigenvalues are $\\lambda=1$ (eigenvector $x$) and $\\lambda=2$ (eigenvector $x^2$).",
    ],
    solution: "**Solution:** Write $p(x) = ax^2 + bx + c$. Then $p'(x) = 2ax+b$, so $T(p)(x) = x(2ax+b) = 2ax^2+bx$.\n\nWe need $T(p) = \\lambda p$: $2ax^2+bx+0 = \\lambda ax^2 + \\lambda bx + \\lambda c$. Comparing coefficients: $2a=\\lambda a$, $b=\\lambda b$, $0=\\lambda c$.\n\nCase $a\\\neq 0$: $\\lambda=2$, then $b=2b\\Rightarrow b=0$, $\\lambda c=0\\Rightarrow c=0$. Eigenvector: $x^2$. Case $a=0, b\\\neq 0$: $\\lambda=1$, $c=0$. Eigenvector: $x$. Case $a=b=0$: not an eigenvector ($p=0$). So eigenvalues are $\\lambda=1$ (eigenvector $x$) and $\\lambda=2$ (eigenvector $x^2$).",
  },
  {
    id: "st-ev-3",
    question:
      "Prove: if $\\lambda$ is an eigenvalue of invertible $A$, then $\\lambda^{-1}$ is an eigenvalue of $A^{-1}$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Let $A\\mathbf{v} = \\lambda\\mathbf{v}$ with $\\mathbf{v}\\neq\\mathbf{0}$. Since $A$ is invertible, $\\lambda \\neq 0$ (otherwise $A\\mathbf{v}=\\mathbf{0}$ contradicts injectivity).",
      "Apply $A^{-1}$ to both sides: $A^{-1}(A\\mathbf{v}) = A^{-1}(\\lambda\\mathbf{v})$.",
      "$\\mathbf{v} = \\lambda A^{-1}\\mathbf{v}$, so $A^{-1}\\mathbf{v} = \\lambda^{-1}\\mathbf{v}$. Thus $\\mathbf{v}$ is also an eigenvector of $A^{-1}$ with eigenvalue $\\lambda^{-1}$. ∎",
    ],
    solution: "**Solution:** Let $A\\mathbf{v} = \\lambda\\mathbf{v}$ with $\\mathbf{v}\\\neq\\mathbf{0}$. Since $A$ is invertible, $\\lambda \\\neq 0$ (otherwise $A\\mathbf{v}=\\mathbf{0}$ contradicts injectivity).\n\nApply $A^{-1}$ to both sides: $A^{-1}(A\\mathbf{v}) = A^{-1}(\\lambda\\mathbf{v})$.\n\n$\\mathbf{v} = \\lambda A^{-1}\\mathbf{v}$, so $A^{-1}\\mathbf{v} = \\lambda^{-1}\\mathbf{v}$. Thus $\\mathbf{v}$ is also an eigenvector of $A^{-1}$ with eigenvalue $\\lambda^{-1}$. ∎",
  },
  {
    id: "st-ev-4",
    question:
      "Prove: if $A$ and $B$ are $n\\times n$ matrices, then $AB$ and $BA$ have the same eigenvalues.",
    type: "proof",
    difficulty: "hard",
    hints: [
      "**Case 1 — $A$ invertible:** If $AB\\mathbf{v} = \\lambda\\mathbf{v}$, then $BA(A\\mathbf{v}) = B(AB)\\mathbf{v} = B(\\lambda A\\mathbf{v}) = \\lambda(BA)(A\\mathbf{v})$. So $A\\mathbf{v}$ is an eigenvector of $BA$ with eigenvalue $\\lambda$.",
      "**Case 2 — General $A$:** Use the identity $\\det(\\lambda I - AB) = \\det(\\lambda I - BA)$ for $\\lambda \\neq 0$. Proof: $\\lambda I - AB = \\lambda(I - \\lambda^{-1}AB)$. Note $\\det\\begin{pmatrix}I & -A\\\\ \\lambda^{-1}B & I\\end{pmatrix} = \\det(I - \\lambda^{-1}AB) = \\det(I - \\lambda^{-1}BA)$ by block determinant manipulation.",
      "Specifically: $\\det(\\lambda I - AB) = \\det\\begin{pmatrix}\\lambda I & A \\\\ B & I\\end{pmatrix}\\cdot\\frac{1}{1}$ (Schur complement). Both $\\det(\\lambda I - AB)$ and $\\det(\\lambda I - BA)$ equal $\\det\\begin{pmatrix}\\lambda I & A \\\\ B & I\\end{pmatrix}$ for $\\lambda\\neq 0$. Hence they share the same nonzero eigenvalues. ∎",
    ],
    solution: "**Solution:** **Case 1 — $A$ invertible:** If $AB\\mathbf{v} = \\lambda\\mathbf{v}$, then $BA(A\\mathbf{v}) = B(AB)\\mathbf{v} = B(\\lambda A\\mathbf{v}) = \\lambda(BA)(A\\mathbf{v})$. So $A\\mathbf{v}$ is an eigenvector of $BA$ with eigenvalue $\\lambda$.\n\n**Case 2 — General $A$:** Use the identity $\\det(\\lambda I - AB) = \\det(\\lambda I - BA)$ for $\\lambda \\\neq 0$. Proof: $\\lambda I - AB = \\lambda(I - \\lambda^{-1}AB)$. Note $\\det\\begin{pmatrix}I & -A\\\\ \\lambda^{-1}B & I\\end{pmatrix} = \\det(I - \\lambda^{-1}AB) = \\det(I - \\lambda^{-1}BA)$ by block determinant manipulation.\n\nSpecifically: $\\det(\\lambda I - AB) = \\det\\begin{pmatrix}\\lambda I & A \\\\ B & I\\end{pmatrix}\\cdot\\frac{1}{1}$ (Schur complement). Both $\\det(\\lambda I - AB)$ and $\\det(\\lambda I - BA)$ equal $\\det\\begin{pmatrix}\\lambda I & A \\\\ B & I\\end{pmatrix}$ for $\\lambda\\\neq 0$. Hence they share the same nonzero eigenvalues. ∎",
  },
];

export default questions;
