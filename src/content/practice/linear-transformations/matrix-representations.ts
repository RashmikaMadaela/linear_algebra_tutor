import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "lt-mr-1",
    question:
      "Let $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ be defined by $T(x,y) = (3x+y, x-2y)$. Find the matrix $[T]_\\mathcal{E}$ in the standard basis $\\mathcal{E} = (\\mathbf{e}_1,\\mathbf{e}_2)$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Apply $T$ to each standard basis vector: $T(\\mathbf{e}_1) = T(1,0) = (3,1)$ and $T(\\mathbf{e}_2) = T(0,1) = (1,-2)$.",
      "Write these as column vectors: $[T]_\\mathcal{E} = \\begin{pmatrix}3 & 1 \\\\ 1 & -2\\end{pmatrix}$.",
      "Verify: $[T(2,3)]_\\mathcal{E} = \\begin{pmatrix}3&1\\\\1&-2\\end{pmatrix}\\begin{pmatrix}2\\\\3\\end{pmatrix} = \\begin{pmatrix}9\\\\-4\\end{pmatrix}$, and directly $T(2,3) = (9,-4)$. ✓",
    ],
    solution:
      "Apply $T$ to each standard basis vector to get the columns of $[T]_\\mathcal{E}$:\n$$T(\\mathbf{e}_1)=T(1,0)=(3\\cdot1+0,\\,1-2\\cdot0)=(3,1),$$\n$$T(\\mathbf{e}_2)=T(0,1)=(3\\cdot0+1,\\,0-2\\cdot1)=(1,-2).$$\n\nTherefore:\n$$[T]_\\mathcal{E}=\\begin{pmatrix}3&1\\\\1&-2\\end{pmatrix}.$$\n\n**Verification:** $T(2,3)=(6+3,2-6)=(9,-4)$. Matrix: $\\begin{pmatrix}3&1\\\\1&-2\\end{pmatrix}\\begin{pmatrix}2\\\\3\\end{pmatrix}=\\begin{pmatrix}9\\\\-4\\end{pmatrix}$. $\\checkmark$ $\\blacksquare$",
  },
  {
    id: "lt-mr-2",
    question:
      "Let $D: \\mathbb{P}_3(\\mathbb{R}) \\to \\mathbb{P}_3(\\mathbb{R})$ be differentiation (setting $D(p) = p'$ and extending by $D(p) = 0$ for constants — note $D: \\mathbb{P}_3 \\to \\mathbb{P}_2 \\subset \\mathbb{P}_3$). Find $[D]_\\mathcal{B}$ using $\\mathcal{B} = (1, x, x^2, x^3)$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Apply $D$ to each basis vector: $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$, $D(x^3) = 3x^2$.",
      "Express in $\\mathcal{B}$-coordinates: $[0]_\\mathcal{B}=(0,0,0,0)^T$, $[1]_\\mathcal{B}=(1,0,0,0)^T$, $[2x]_\\mathcal{B}=(0,2,0,0)^T$, $[3x^2]_\\mathcal{B}=(0,0,3,0)^T$.",
      "$[D]_\\mathcal{B} = \\begin{pmatrix}0&1&0&0\\\\0&0&2&0\\\\0&0&0&3\\\\0&0&0&0\\end{pmatrix}$. Note: this is a nilpotent matrix — $D^4 = 0$ on $\\mathbb{P}_3$, as expected.",
    ],
    solution:
      "Apply $D$ to each basis vector and express results in $\\mathcal{B}$-coordinates (columns of the matrix):\n$$D(1)=0=[0,0,0,0]^T_\\mathcal{B},$$\n$$D(x)=1=[1,0,0,0]^T_\\mathcal{B},$$\n$$D(x^2)=2x=[0,2,0,0]^T_\\mathcal{B},$$\n$$D(x^3)=3x^2=[0,0,3,0]^T_\\mathcal{B}.$$\n\nTherefore:\n$$[D]_\\mathcal{B}=\\begin{pmatrix}0&1&0&0\\\\0&0&2&0\\\\0&0&0&3\\\\0&0&0&0\\end{pmatrix}.$$\n\nThis is a **nilpotent** matrix ($[D]^4=0$), reflecting the fact that differentiating a degree-3 polynomial 4 times gives zero. The superdiagonal entries $1,2,3$ are the derivative coefficients. $\\blacksquare$",
  },
  {
    id: "lt-mr-3",
    question:
      "Given $[T]_\\mathcal{B} = \\begin{pmatrix}2 & 1 \\\\ 0 & 3\\end{pmatrix}$ with $\\mathcal{B} = ((1,1),(0,1))$, find $T(2,3)$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "First find $[(2,3)]_\\mathcal{B}$: write $(2,3) = a(1,1) + b(0,1)$. Then $a=2$ and $a+b=3$, so $b=1$. Thus $[(2,3)]_\\mathcal{B} = (2,1)^T$.",
      "Apply the matrix: $[T(2,3)]_\\mathcal{B} = \\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\begin{pmatrix}2\\\\1\\end{pmatrix} = \\begin{pmatrix}5\\\\3\\end{pmatrix}$.",
      "Convert back: $T(2,3) = 5\\cdot(1,1) + 3\\cdot(0,1) = (5, 5+3) = (5, 8)$.",
    ],
    solution:
      "**Step 1: Find $\\mathcal{B}$-coordinates of $(2,3)$.**\nSolve $(2,3)=a(1,1)+b(0,1)$: $a=2$ and $a+b=3$, so $b=1$. Thus $[(2,3)]_\\mathcal{B}=(2,1)^T$.\n\n**Step 2: Apply $[T]_\\mathcal{B}$.**\n$$[T(2,3)]_\\mathcal{B}=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}.$$\n\n**Step 3: Convert back to standard coordinates.**\n$$T(2,3)=5(1,1)+3(0,1)=(5,5+3)=(5,8). \\blacksquare$$",
  },
  {
    id: "lt-mr-4",
    question:
      "Prove that $\\dim \\mathcal{L}(V, W) = (\\dim V)(\\dim W)$ for finite-dimensional $V$ and $W$.",
    type: "proof",
    difficulty: "hard",
    hints: [
      "Let $\\dim V = n$, $\\dim W = m$. Fix bases $\\mathcal{B}$ for $V$ and $\\mathcal{C}$ for $W$. The matrix representation $T \\mapsto [T]_{\\mathcal{C},\\mathcal{B}}$ gives a map $\\Phi: \\mathcal{L}(V,W) \\to M_{m\\times n}(\\mathbb{F})$.",
      "Show $\\Phi$ is a linear isomorphism: it is linear (since $(\\alpha S + \\beta T)(\\mathbf{b}_j) = \\alpha S(\\mathbf{b}_j)+\\beta T(\\mathbf{b}_j)$, so the matrix of $\\alpha S+\\beta T$ is $\\alpha[S]+\\beta[T]$). Injective: $[T]=0 \\Rightarrow T(\\mathbf{b}_j)=0$ for all $j \\Rightarrow T=0$. Surjective: for any $A\\in M_{m\\times n}$, define $T$ by $T(\\mathbf{b}_j) = \\phi_\\mathcal{C}^{-1}(\\text{column } j \\text{ of } A)$.",
      "Therefore $\\mathcal{L}(V,W) \\cong M_{m\\times n}(\\mathbb{F})$ and $\\dim \\mathcal{L}(V,W) = \\dim M_{m\\times n}(\\mathbb{F}) = mn$. ∎",
    ],
    solution:
      "Let $n=\\dim V$, $m=\\dim W$. Fix bases $\\mathcal{B}=(\\mathbf{b}_1,\\ldots,\\mathbf{b}_n)$ for $V$ and $\\mathcal{C}=(\\mathbf{c}_1,\\ldots,\\mathbf{c}_m)$ for $W$.\n\nDefine $\\Phi:\\mathcal{L}(V,W)\\to M_{m\\times n}(\\mathbb{F})$ by $\\Phi(T)=[T]_{\\mathcal{C},\\mathcal{B}}$ (the matrix of $T$).\n\n**$\\Phi$ is linear:** $\\Phi(\\alpha S+\\beta T)=[\\alpha S+\\beta T]=\\alpha[S]+\\beta[T]=\\alpha\\Phi(S)+\\beta\\Phi(T)$. $\\checkmark$\n\n**$\\Phi$ is injective:** If $\\Phi(T)=0$, then $T(\\mathbf{b}_j)=\\mathbf{0}$ for all $j$. Since $T$ is linear and vanishes on a basis, $T=0$. $\\checkmark$\n\n**$\\Phi$ is surjective:** Given $A=(a_{ij})\\in M_{m\\times n}$, define $T:V\\to W$ by $T(\\mathbf{b}_j)=\\sum_i a_{ij}\\mathbf{c}_i$, extended linearly. Then $\\Phi(T)=A$. $\\checkmark$\n\nTherefore $\\mathcal{L}(V,W)\\cong M_{m\\times n}(\\mathbb{F})$, so $\\dim\\mathcal{L}(V,W)=\\dim M_{m\\times n}(\\mathbb{F})=mn=(\\dim V)(\\dim W)$. $\\blacksquare$",
  },
];

export default questions;
