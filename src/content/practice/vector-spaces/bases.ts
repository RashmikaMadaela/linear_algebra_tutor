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
    solution:
      "We verify the two basis conditions for three vectors in $\\mathbb{R}^3$.\n\n**Linear independence:** Compute $\\det[\\mathbf{v}_1|\\mathbf{v}_2|\\mathbf{v}_3]$:\n$$\\det\\begin{pmatrix}1&1&0\\\\1&0&1\\\\0&1&1\\end{pmatrix} = 1(0\\cdot1-1\\cdot1)-1(1\\cdot1-1\\cdot0)+0 = -1-1 = -2\\neq 0.$$\n✓ Nonzero determinant $\\Rightarrow$ columns are linearly independent.\n\n**Spanning:** Three linearly independent vectors in $\\mathbb{R}^3$ (which has $\\dim=3$) automatically span $\\mathbb{R}^3$ by Theorem 9.\n\nTherefore $\\{(1,1,0),(1,0,1),(0,1,1)\\}$ is a basis for $\\mathbb{R}^3$. $\\blacksquare$",
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
    solution:
      "**Row reduce $A$:**\n$$\\begin{pmatrix}1&2&-1&0\\\\2&4&0&2\\end{pmatrix}\\xrightarrow{R_2-2R_1}\\begin{pmatrix}1&2&-1&0\\\\0&0&2&2\\end{pmatrix}\\xrightarrow{\\frac{1}{2}R_2}\\begin{pmatrix}1&2&-1&0\\\\0&0&1&1\\end{pmatrix}\\xrightarrow{R_1+R_2}\\begin{pmatrix}1&2&0&1\\\\0&0&1&1\\end{pmatrix}.$$\n\n**Pivot columns:** 1 and 3. **Free variables:** $x_2=s,\\;x_4=t$.\n\n**Parametric solution:**\n- $x_3=-x_4=-t$\n- $x_1=-2x_2-x_4=-2s-t$\n\nSo $(x_1,x_2,x_3,x_4)=s(-2,1,0,0)+t(-1,0,-1,1)$.\n\n**Basis for null space:** $\\{(-2,1,0,0),\\;(-1,0,-1,1)\\}$.\n\n**Verification:** $\\text{rank}(A)=2$, $\\text{nullity}(A)=2$, and $2+2=4=$ number of columns. ✓ $\\blacksquare$",
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
    ],    solution:
      "This is the defining property of a basis (Definition 10).\n\n**Existence:** Since $\\mathcal{B}$ spans $V$, every $\\mathbf{v}\\in V$ can be written as $\\mathbf{v}=\\sum_{i=1}^n\\alpha_i\\mathbf{b}_i$ for some $\\alpha_i\\in\\mathbb{F}$. ✓\n\n**Uniqueness:** Suppose $\\mathbf{v}=\\sum_{i=1}^n\\alpha_i\\mathbf{b}_i$ and also $\\mathbf{v}=\\sum_{i=1}^n\\beta_i\\mathbf{b}_i$. Subtracting:\n$$\\mathbf{0} = \\sum_{i=1}^n(\\alpha_i-\\beta_i)\\mathbf{b}_i.$$\nSince $\\mathcal{B}$ is linearly independent, all coefficients must be zero: $\\alpha_i-\\beta_i=0$ for $i=1,\\ldots,n$, so $\\alpha_i=\\beta_i$.\n\nThus the representation is unique. These unique scalars are called the **coordinates** of $\\mathbf{v}$ with respect to $\\mathcal{B}$. $\\blacksquare$",  },
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
    solution:
      "A matrix $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\in M_{2\\times2}(\\mathbb{R})$ is antisymmetric ($A^T=-A$) iff:\n$$\\begin{pmatrix}a&c\\\\b&d\\end{pmatrix}=\\begin{pmatrix}-a&-b\\\\-c&-d\\end{pmatrix}.$$\n\nThis gives $a=-a\\Rightarrow a=0$, $d=-d\\Rightarrow d=0$, and $c=-b$. So every antisymmetric $2\\times2$ matrix has the form:\n$$A=\\begin{pmatrix}0&b\\\\-b&0\\end{pmatrix}=b\\underbrace{\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}}_{=:J}, \\quad b\\in\\mathbb{R}.$$\n\n**Basis:** $\\left\\{J=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}\\right\\}$.\n\n**Dimension:** $\\dim W = 1$.\n\n*Note:* For $n\\times n$ antisymmetric matrices, the dimension is $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (one free parameter for each strictly upper-triangular entry). $\\blacksquare$",
  },
];

export default questions;
