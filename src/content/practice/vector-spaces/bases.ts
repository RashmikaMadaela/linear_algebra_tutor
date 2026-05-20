import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-bases-1",
    question:
      "Show that $\\{(1,1,0),\\; (1,0,1),\\; (0,1,1)\\}$ is a basis for $\\mathbb{R}^3$.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Check LI: form the matrix with these as columns and compute the determinant: $\\det\\begin{pmatrix}1&1&0\\\\1&0&1\\\\0&1&1\\end{pmatrix}$.",
      "Expanding: $= 1(0-1) - 1(1-0) + 0 = -1 - 1 = -2 \\neq 0$. So the columns are LI. ✓",
      "Since we have 3 LI vectors in a 3-dimensional space ($\\mathbb{R}^3$), they automatically form a basis. No need to check spanning separately — in a finite-dim space, $n$ LI vectors form a basis iff $\\dim V = n$.",
    ],
  },
  {
    id: "vs-bases-2",
    question:
      "Find a basis for the solution space of the homogeneous system $A\\mathbf{x} = \\mathbf{0}$ where $A = \\begin{pmatrix} 1 & 2 & -1 & 0 \\\\ 2 & 4 & 0 & 2 \\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Row-reduce $A$: $R_2 \\leftarrow R_2 - 2R_1$ gives $\\begin{pmatrix}1&2&-1&0\\\\0&0&2&2\\end{pmatrix}$. Then $R_2 \\leftarrow \\tfrac{1}{2}R_2$: $\\begin{pmatrix}1&2&-1&0\\\\0&0&1&1\\end{pmatrix}$.",
      "Back-substitute: $x_3 = -x_4$. Then $x_1 = -2x_2 + x_3 - 0 = -2x_2 - x_4$. Free variables: $x_2 = s$, $x_4 = t$.",
      "Solution: $(x_1,x_2,x_3,x_4) = s(-2,1,0,0) + t(-1,0,-1,1)$. Basis: $\\{(-2,1,0,0),(-1,0,-1,1)\\}$. Nullity $= 2$, Rank $= 2$, and $2+2=4$ (number of columns). ✓",
    ],
  },
  {
    id: "vs-bases-3",
    question:
      "Prove that if $\\mathcal{B} = \\{\\mathbf{b}_1, \\ldots, \\mathbf{b}_n\\}$ is a basis for $V$, then every vector $\\mathbf{v} \\in V$ has a **unique** representation as a linear combination of $\\mathcal{B}$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "**Existence** follows immediately from spanning: since $\\mathcal{B}$ spans $V$, every $\\mathbf{v} \\in V$ is *some* linear combination.",
      "**Uniqueness**: Suppose $\\mathbf{v} = \\sum \\alpha_i \\mathbf{b}_i$ and also $\\mathbf{v} = \\sum \\beta_i \\mathbf{b}_i$. Subtract: $\\mathbf{0} = \\sum (\\alpha_i - \\beta_i)\\mathbf{b}_i$.",
      "Since $\\mathcal{B}$ is LI, the only solution is $\\alpha_i - \\beta_i = 0$ for all $i$, i.e., $\\alpha_i = \\beta_i$. Hence the representation is unique. ∎",
    ],
  },
  {
    id: "vs-bases-4",
    question:
      "Find a basis for the subspace of $M_{2 \\times 2}(\\mathbb{R})$ consisting of all **antisymmetric** matrices ($A^T = -A$). What is the dimension of this subspace?",
    type: "computation",
    difficulty: "hard",
    hints: [
      "An antisymmetric $2\\times 2$ matrix has the form $A = \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ where $A^T = -A$. This means $a = -a$ (so $a=0$), $d = -d$ (so $d=0$), $c = -b$.",
      "So $A = \\begin{pmatrix}0&b\\\\-b&0\\end{pmatrix} = b\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$.",
      "Basis: $\\left\\{\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}\\right\\}$. Dimension $= 1$. In general, antisymmetric $n\\times n$ matrices form a space of dimension $\\binom{n}{2} = \\tfrac{n(n-1)}{2}$.",
    ],
  },
];

export default questions;
