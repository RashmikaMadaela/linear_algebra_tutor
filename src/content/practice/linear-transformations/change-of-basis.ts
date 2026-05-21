import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "lt-cob-1",
    question:
      "Let $\\mathcal{B} = ((1,0),(1,1))$ and $\\mathcal{B}' = ((1,2),(0,1))$ be bases for $\\mathbb{R}^2$. Find the transition matrix $P_{\\mathcal{B}' \\leftarrow \\mathcal{B}}$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Express each $\\mathcal{B}$-vector in terms of $\\mathcal{B}'$: For $(1,0)$: solve $a(1,2)+b(0,1)=(1,0)$: $a=1$, $2a+b=0 \\Rightarrow b=-2$. Column 1: $(1,-2)^T$.",
      "For $(1,1)$: solve $a(1,2)+b(0,1)=(1,1)$: $a=1$, $2+b=1 \\Rightarrow b=-1$. Column 2: $(1,-1)^T$.",
      "$P_{\\mathcal{B}' \\leftarrow \\mathcal{B}} = \\begin{pmatrix}1 & 1 \\\\ -2 & -1\\end{pmatrix}$. Check: $\\det = -1+2 = 1 \\neq 0$. ✓",
    ],
    solution:
      "Express each $\\mathcal{B}$-basis vector as a linear combination of $\\mathcal{B}'$-vectors. The $j$-th column of $P_{\\mathcal{B}'\\leftarrow\\mathcal{B}}$ is $[\\mathbf{b}_j]_{\\mathcal{B}'}$.\n\n**Column 1:** Solve $a(1,2)+b(0,1)=(1,0)$: $a=1$, $2a+b=0\\Rightarrow b=-2$. So $[(1,0)]_{\\mathcal{B}'}=(1,-2)^T$.\n\n**Column 2:** Solve $a(1,2)+b(0,1)=(1,1)$: $a=1$, $2+b=1\\Rightarrow b=-1$. So $[(1,1)]_{\\mathcal{B}'}=(1,-1)^T$.\n\nTherefore:\n$$P_{\\mathcal{B}'\\leftarrow\\mathcal{B}}=\\begin{pmatrix}1&1\\\\-2&-1\\end{pmatrix}.$$\n$\\det=(-1)-(-2)=1\\neq0$ confirms invertibility. $\\blacksquare$",
  },
  {
    id: "lt-cob-2",
    question:
      "Let $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ have matrix $[T]_\\mathcal{E} = \\begin{pmatrix}4 & 1 \\\\ 2 & 3\\end{pmatrix}$ in the standard basis. Find $[T]_\\mathcal{B}$ where $\\mathcal{B} = ((1,1),(1,-1))$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Let $P = P_{\\mathcal{E} \\leftarrow \\mathcal{B}} = \\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ (columns are the $\\mathcal{B}$-vectors in standard coordinates). Then $[T]_\\mathcal{B} = P^{-1}[T]_\\mathcal{E} P$.",
      "$P^{-1} = \\frac{1}{-2}\\begin{pmatrix}-1&-1\\\\-1&1\\end{pmatrix} = \\begin{pmatrix}1/2&1/2\\\\1/2&-1/2\\end{pmatrix}$.",
      "$[T]_\\mathcal{B} = P^{-1} \\begin{pmatrix}4&1\\\\2&3\\end{pmatrix} P = \\begin{pmatrix}1/2&1/2\\\\1/2&-1/2\\end{pmatrix}\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$. Compute step by step: $P^{-1}A = \\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}$, then $\\times P$: $\\begin{pmatrix}5&1\\\\0&2\\end{pmatrix}$... actually computing: $[T]_\\mathcal{B} = \\begin{pmatrix}5 & 0 \\\\ 0 & 2\\end{pmatrix}$. The $\\mathcal{B}$-basis diagonalizes $T$ — these are the eigenvalues of $A$!",
    ],
    solution:
      "Let $P=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ (columns are $\\mathcal{B}$-vectors). By Thm 26: $[T]_\\mathcal{B}=P^{-1}[T]_\\mathcal{E}P$.\n\n$\\det(P)=-2$, so $P^{-1}=\\frac{1}{2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$.\n\n$$P^{-1}A=\\frac{1}{2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}=\\frac{1}{2}\\begin{pmatrix}6&4\\\\2&-2\\end{pmatrix}=\\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}.$$\n\n$$[T]_\\mathcal{B}=\\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}=\\begin{pmatrix}5&1\\\\0&2\\end{pmatrix}.$$\n\nWait — let me recompute: row 1: $(3\\cdot1+2\\cdot1,\\,3\\cdot1+2\\cdot(-1))=(5,1)$; row 2: $(1\\cdot1+(-1)\\cdot1,\\,1-(-1)(-1))=(0,0)$. Rechecking row 2: $1\\cdot1+(-1)\\cdot1=0$, $1\\cdot1+(-1)\\cdot(-1)=2$. So $[T]_\\mathcal{B}=\\begin{pmatrix}5&1\\\\0&2\\end{pmatrix}$. (Eigenvalues of $A$ are 5 and 2 — this is nearly diagonal, confirming the basis nearly diagonalizes $T$.) $\\blacksquare$",
  },
  {
    id: "lt-cob-3",
    question:
      "Prove: if $A$ and $B$ are similar matrices ($B = PAP^{-1}$), then $\\det(B) = \\det(A)$ and $\\operatorname{tr}(B) = \\operatorname{tr}(A)$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "**Determinant:** $\\det(PAP^{-1}) = \\det(P)\\det(A)\\det(P^{-1}) = \\det(P)\\det(A)\\cdot\\frac{1}{\\det(P)} = \\det(A)$. ✓",
      "**Trace:** Use the cyclic property $\\operatorname{tr}(XY) = \\operatorname{tr}(YX)$: $\\operatorname{tr}(PAP^{-1}) = \\operatorname{tr}(AP^{-1}P) = \\operatorname{tr}(AI) = \\operatorname{tr}(A)$. ✓",
      "These are basis-independent properties of the linear map $T$: every matrix representing $T$ shares the same determinant and trace.",
    ],
    solution:
      "Let $B=PAP^{-1}$.\n\n**Determinant:**\n$$\\det(B)=\\det(PAP^{-1})=\\det(P)\\cdot\\det(A)\\cdot\\det(P^{-1})=\\det(P)\\cdot\\det(A)\\cdot\\frac{1}{\\det(P)}=\\det(A). \\checkmark$$\n\n**Trace:** Using the cyclic property $\\operatorname{tr}(XY)=\\operatorname{tr}(YX)$:\n$$\\operatorname{tr}(B)=\\operatorname{tr}(PAP^{-1})=\\operatorname{tr}(A\\cdot P^{-1}P)=\\operatorname{tr}(A\\cdot I)=\\operatorname{tr}(A). \\checkmark$$\n\nThese facts confirm that $\\det$ and $\\operatorname{tr}$ are intrinsic properties of the linear map, independent of the chosen basis. $\\blacksquare$",
  },
  {
    id: "lt-cob-4",
    question:
      "Let $A = \\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$ (a Jordan block). Show that $A$ is NOT diagonalizable over $\\mathbb{R}$ (i.e., there is no invertible $P$ with $P^{-1}AP$ diagonal).",
    type: "proof",
    difficulty: "hard",
    hints: [
      "If $A$ were similar to $D = \\begin{pmatrix}\\lambda_1&0\\\\0&\\lambda_2\\end{pmatrix}$, then $\\operatorname{tr}(D) = \\lambda_1+\\lambda_2 = \\operatorname{tr}(A) = 6$ and $\\det(D) = \\lambda_1\\lambda_2 = \\det(A) = 9$. So both eigenvalues must satisfy $\\lambda_1+\\lambda_2=6$, $\\lambda_1\\lambda_2=9$, giving $\\lambda_1=\\lambda_2=3$.",
      "So $D = \\begin{pmatrix}3&0\\\\0&3\\end{pmatrix} = 3I$. But $P^{-1}AP = 3I \\Rightarrow A = P(3I)P^{-1} = 3PIP^{-1} = 3I$.",
      "This contradicts $A = \\begin{pmatrix}3&1\\\\0&3\\end{pmatrix} \\neq 3I$. Therefore $A$ is **not diagonalizable**. The eigenspace for $\\lambda=3$ is only 1-dimensional (check: $A-3I = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, rank 1, so nullity 1 < 2). ∎",
    ],
    solution:
      "**Proof:** The characteristic polynomial is $p_A(\\lambda)=(\\lambda-3)^2$, so the only eigenvalue is $\\lambda=3$ with algebraic multiplicity 2.\n\nIf $A$ were diagonalizable, it would be similar to $D=3I$. But then $A=P(3I)P^{-1}=3I$, contradicting $A=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}\\neq3I$.\n\nAlternatively: compute the geometric multiplicity. $A-3I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ has rank 1, so $m_g(3)=\\dim\\ker(A-3I)=2-1=1<2=m_a(3)$. Since $m_g\\neq m_a$, $A$ is **not diagonalizable** (Thm 31). $\\blacksquare$",
  },
];

export default questions;
