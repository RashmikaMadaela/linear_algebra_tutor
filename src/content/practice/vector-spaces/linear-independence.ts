import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-li-1",
    question:
      "Determine whether $\\{(1,2,1),\\; (2,1,3),\\; (1,-1,2)\\}$ is linearly independent in $\\mathbb{R}^3$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Form the matrix with these vectors as **columns** and row-reduce: $\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 1 & -1 \\\\ 1 & 3 & 2 \\end{pmatrix}$.",
      "Row reduce: $R_2 \\leftarrow R_2 - 2R_1$ gives $(0,-3,-3)$; $R_3 \\leftarrow R_3 - R_1$ gives $(0,1,1)$. Then $R_3 \\leftarrow R_3 + \\tfrac{1}{3}R_2$ gives $(0,0,0)$.",
      "The matrix has rank 2 (only 2 pivots), so the set is **linearly dependent**. The third column is a combination of the first two. Find the relation: $\\mathbf{v}_3 = -\\tfrac{1}{3}\\mathbf{v}_1 + \\tfrac{1}{3}\\mathbf{v}_2 + ?$. Actually solve $\\alpha_1\\mathbf{v}_1 + \\alpha_2\\mathbf{v}_2 + \\alpha_3\\mathbf{v}_3 = \\mathbf{0}$ to find the exact coefficients.",
    ],
    solution:
      "Form the matrix $A$ with these vectors as columns and row reduce:\n$$A = \\begin{pmatrix}1&2&1\\\\2&1&-1\\\\1&3&2\\end{pmatrix} \\xrightarrow{R_2-2R_1,\\;R_3-R_1} \\begin{pmatrix}1&2&1\\\\0&-3&-3\\\\0&1&1\\end{pmatrix} \\xrightarrow{R_3+\\frac{1}{3}R_2} \\begin{pmatrix}1&2&1\\\\0&-3&-3\\\\0&0&0\\end{pmatrix}.$$\n\nOnly **2 pivots** out of 3 columns. Therefore the set is **linearly dependent**.\n\n**Finding the dependency:** From the RREF, the free variable is $\\alpha_3$. Setting $\\alpha_3=1$: from row 2, $-3\\alpha_2-3=0\\Rightarrow\\alpha_2=-1$; from row 1, $\\alpha_1+2(-1)+1=0\\Rightarrow\\alpha_1=1$. So $1\\cdot\\mathbf{v}_1-1\\cdot\\mathbf{v}_2+1\\cdot\\mathbf{v}_3=\\mathbf{0}$, i.e., $(1,2,1)-(2,1,3)+(1,-1,2)=(0,0,0)$. ✓ $\\blacksquare$",
  },
  {
    id: "vs-li-2",
    question:
      "Are $\\{1,\\; \\cos^2(x),\\; \\sin^2(x)\\}$ linearly independent in the vector space of continuous functions $C(\\mathbb{R}, \\mathbb{R})$?",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Set up: suppose $\\alpha \\cdot 1 + \\beta \\cos^2 x + \\gamma \\sin^2 x = 0$ for all $x \\in \\mathbb{R}$.",
      "Use the identity $\\cos^2 x + \\sin^2 x = 1$. This gives $\\alpha \\cdot 1 + \\beta \\cos^2 x + \\gamma \\sin^2 x = (\\alpha + \\gamma) + \\beta \\cos^2 x - \\gamma \\cos^2 x = (\\alpha+\\gamma) + (\\beta-\\gamma)\\cos^2 x$.",
      "For this to be identically zero for all $x$, we need $\\beta - \\gamma = 0$ and $\\alpha + \\gamma = 0$. This has infinitely many solutions: e.g., $\\alpha = -1, \\beta = \\gamma = 1$ gives $-1 + \\cos^2 x + \\sin^2 x = 0$. The set is **linearly dependent**.",
    ],
    solution:
      "The set $\\{1,\\cos^2 x,\\sin^2 x\\}$ is **linearly dependent**.\n\n**Proof:** Suppose $\\alpha\\cdot 1+\\beta\\cos^2 x+\\gamma\\sin^2 x=0$ for all $x\\in\\mathbb{R}$.\n\nUsing the Pythagorean identity $\\sin^2 x = 1-\\cos^2 x$:\n$$\\alpha+\\beta\\cos^2 x+\\gamma(1-\\cos^2 x) = (\\alpha+\\gamma)+(\\beta-\\gamma)\\cos^2 x = 0.$$\n\nFor this to hold for all $x$: $\\beta-\\gamma=0$ and $\\alpha+\\gamma=0$. These give $\\beta=\\gamma$ and $\\alpha=-\\gamma$. Choosing $\\gamma=1$ gives the nontrivial solution $\\alpha=-1,\\beta=1,\\gamma=1$, and indeed:\n$$-1+\\cos^2 x+\\sin^2 x = 0. \\checkmark$$\n\nTherefore the set is **linearly dependent** (it spans only a 2-dimensional space, with basis $\\{1, \\cos^2 x\\}$). $\\blacksquare$",
  },
  {
    id: "vs-li-3",
    question:
      "Prove: if $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is linearly independent and $\\mathbf{w} \\notin \\operatorname{span}(\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\})$, then $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{w}\\}$ is linearly independent.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Suppose $\\alpha_1\\mathbf{v}_1 + \\alpha_2\\mathbf{v}_2 + \\alpha_3\\mathbf{v}_3 + \\alpha_4\\mathbf{w} = \\mathbf{0}$.",
      "If $\\alpha_4 \\neq 0$, then $\\mathbf{w} = -\\tfrac{\\alpha_1}{\\alpha_4}\\mathbf{v}_1 - \\tfrac{\\alpha_2}{\\alpha_4}\\mathbf{v}_2 - \\tfrac{\\alpha_3}{\\alpha_4}\\mathbf{v}_3 \\in \\operatorname{span}(\\{\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\})$, contradicting the assumption. So $\\alpha_4 = 0$.",
      "With $\\alpha_4 = 0$: $\\alpha_1\\mathbf{v}_1 + \\alpha_2\\mathbf{v}_2 + \\alpha_3\\mathbf{v}_3 = \\mathbf{0}$. Since $\\{\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\}$ is LI, all $\\alpha_i = 0$. Hence the four-vector set is LI. ∎",
    ],
  },
  {
    id: "vs-li-4",
    question:
      "For which values of $k \\in \\mathbb{R}$ is the set $\\{(1,1,0),\\; (1,0,1),\\; (0,1,k)\\}$ linearly independent?",
    type: "computation",
    difficulty: "hard",
    hints: [
      "Compute the determinant of the matrix with these columns: $\\det \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & k \\end{pmatrix}$.",
      "Expanding: $\\det = 1(0 \\cdot k - 1 \\cdot 1) - 1(1 \\cdot k - 1 \\cdot 0) + 0(\\cdots) = -1 - k$.",
      "The set is LI iff $\\det \\neq 0$, i.e., $-1 - k \\neq 0$, i.e., $k \\neq -1$. For $k = -1$ the set is linearly dependent; for all other $k$ it is independent.",
    ],
    solution:
      "The set $\\{\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\}$ in $\\mathbb{R}^3$ is linearly independent iff the matrix $[\\mathbf{v}_1|\\mathbf{v}_2|\\mathbf{v}_3]$ has nonzero determinant.\n\n$$\\det\\begin{pmatrix}1&1&0\\\\1&0&1\\\\0&1&k\\end{pmatrix} = 1\\cdot(0\\cdot k-1\\cdot 1)-1\\cdot(1\\cdot k-1\\cdot 0)+0 = -1-k.$$\n\nThe set is linearly independent iff $-1-k\\neq 0$, i.e., $k\\neq -1$.\n\n**When $k=-1$:** $\\det=0$, so the set is dependent. Indeed, $(0,1,-1)=(1,1,0)-(1,0,1)$, confirming a linear relation.\n\n**Conclusion:** The set is linearly independent for all $k\\neq -1$. $\\blacksquare$",
  },
];

export default questions;
