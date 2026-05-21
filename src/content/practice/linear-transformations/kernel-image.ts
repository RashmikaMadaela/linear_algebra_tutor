import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "lt-ki-1",
    question:
      "Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be defined by $T(x,y,z) = (x+y, y+z)$. Find $\\ker(T)$ and $\\operatorname{Im}(T)$, and verify the Rank-Nullity Theorem.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "**Kernel:** Solve $T(x,y,z)=(0,0)$: $x+y=0$ and $y+z=0$. From these: $x=-y$, $z=-y$. So $\\ker(T) = \\{(-t,t,-t) \\mid t\\in\\mathbb{R}\\} = \\operatorname{span}(\\{(-1,1,-1)\\})$. $\\operatorname{nullity}(T) = 1$.",
      "**Image:** Since $T(1,0,0)=(1,0)$ and $T(0,1,0)=(1,1)$ which are LI, $\\operatorname{Im}(T) = \\mathbb{R}^2$. So $\\operatorname{rank}(T) = 2$.",
      "**Check:** $\\operatorname{nullity}(T) + \\operatorname{rank}(T) = 1 + 2 = 3 = \\dim \\mathbb{R}^3$. ✓",
    ],
    solution:
      "**Kernel:** Set $T(x,y,z)=(0,0)$:\n$$x+y=0,\\quad y+z=0.$$\nFrom these: $x=-y$ and $z=-y$. Setting $y=t$: $(x,y,z)=t(-1,1,-1)$. Thus\n$$\\ker(T)=\\operatorname{span}\\{(-1,1,-1)\\},\\quad \\operatorname{nullity}(T)=1.$$\n\n**Image:** Compute $T$ on the standard basis:\n$$T(1,0,0)=(1,0),\\quad T(0,1,0)=(1,1),\\quad T(0,0,1)=(0,1).$$\nSince $(1,0)$ and $(1,1)$ are linearly independent (neither is a scalar multiple of the other), they span $\\mathbb{R}^2$. Thus $\\operatorname{Im}(T)=\\mathbb{R}^2$ and $\\operatorname{rank}(T)=2$.\n\n**Rank-Nullity check:** $\\operatorname{nullity}(T)+\\operatorname{rank}(T)=1+2=3=\\dim\\mathbb{R}^3$. $\\checkmark$ $\\blacksquare$",
  },
  {
    id: "lt-ki-2",
    question:
      "Let $A = \\begin{pmatrix}1 & 2 & 1 \\\\ 2 & 4 & 3 \\\\ 1 & 2 & 2\\end{pmatrix}$. Find the kernel of $T_A(\\mathbf{x}) = A\\mathbf{x}$ and determine whether $T_A$ is injective.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Row-reduce $A$: $R_2\\leftarrow R_2-2R_1$, $R_3\\leftarrow R_3-R_1$: $\\begin{pmatrix}1&2&1\\\\0&0&1\\\\0&0&1\\end{pmatrix}$. Then $R_3\\leftarrow R_3-R_2$: $\\begin{pmatrix}1&2&1\\\\0&0&1\\\\0&0&0\\end{pmatrix}$. Back-sub: $x_3=0$, $x_1=-2x_2$. Free variable $x_2=t$.",
      "$\\ker(T_A) = \\operatorname{span}(\\{(-2,1,0)\\})$. Since $\\ker(T_A) \\neq \\{\\mathbf{0}\\}$, $T_A$ is **not injective**.",
      "$\\operatorname{nullity}(T_A) = 1$, so $\\operatorname{rank}(T_A) = 3 - 1 = 2$.",
    ],
    solution:
      "Row-reduce $A$:\n$$\\begin{pmatrix}1&2&1\\\\2&4&3\\\\1&2&2\\end{pmatrix}\\xrightarrow{R_2-2R_1,\\,R_3-R_1}\\begin{pmatrix}1&2&1\\\\0&0&1\\\\0&0&1\\end{pmatrix}\\xrightarrow{R_3-R_2}\\begin{pmatrix}1&2&1\\\\0&0&1\\\\0&0&0\\end{pmatrix}.$$\n\nBack-substitution: $x_3=0$, then $x_1+2x_2+0=0\\Rightarrow x_1=-2x_2$. Let $x_2=t$ (free variable):\n$$\\ker(T_A)=\\operatorname{span}\\{(-2,1,0)\\},\\quad\\operatorname{nullity}(T_A)=1.$$\n\nSince $\\ker(T_A)\\neq\\{\\mathbf{0}\\}$, $T_A$ is **not injective**. By rank-nullity: $\\operatorname{rank}(T_A)=3-1=2$. $\\blacksquare$",
  },
  {
    id: "lt-ki-3",
    question:
      "Let $T: \\mathbb{P}_3(\\mathbb{R}) \\to \\mathbb{P}_3(\\mathbb{R})$ be defined by $T(p) = p - p'$ (polynomial minus its derivative). Find $\\ker(T)$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "$\\ker(T) = \\{p \\in \\mathbb{P}_3 \\mid p(x) = p'(x)\\}$. Let $p(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3$.",
      "Then $p'(x) = a_1 + 2a_2 x + 3a_3 x^2$. Setting $p = p'$: $a_0 = a_1$, $a_1 = 2a_2$, $a_2 = 3a_3$, $a_3 = 0$.",
      "From $a_3=0$: $a_2=0$, $a_1=0$, $a_0=0$. So $\\ker(T) = \\{\\mathbf{0}\\}$. Therefore $T$ is injective! (The only polynomial equal to its own derivative in $\\mathbb{P}_3$ is the zero polynomial.)",
    ],
    solution:
      "Let $p(x)=a_0+a_1x+a_2x^2+a_3x^3\\in\\ker(T)$, so $T(p)=p-p'=0$, i.e., $p(x)=p'(x)$.\n\nComputing $p'(x)=a_1+2a_2x+3a_3x^2$ and equating coefficients of $p=p'$:\n$$a_0=a_1,\\quad a_1=2a_2,\\quad a_2=3a_3,\\quad a_3=0.$$\n\nSolving from the last equation backward: $a_3=0\\Rightarrow a_2=0\\Rightarrow a_1=0\\Rightarrow a_0=0$.\n\nThus $\\ker(T)=\\{\\mathbf{0}\\}$ and $T$ is **injective**. The only polynomial in $\\mathbb{P}_3$ equal to its own derivative is the zero polynomial (since the only solution to $p=p'$ in a polynomial space must have all coefficients zero). $\\blacksquare$",
  },
  {
    id: "lt-ki-4",
    question:
      "Suppose $T: V \\to W$ is linear with $\\dim V = \\dim W = n$. Prove: $T$ is injective if and only if $T$ is surjective.",
    type: "proof",
    difficulty: "hard",
    hints: [
      "By Rank-Nullity: $\\operatorname{nullity}(T) + \\operatorname{rank}(T) = n$.",
      "$T$ injective $\\iff$ $\\operatorname{nullity}(T) = 0$ $\\iff$ $\\operatorname{rank}(T) = n$ $\\iff$ $\\dim\\operatorname{Im}(T) = n$.",
      "Since $\\operatorname{Im}(T) \\subseteq W$ and $\\dim W = n$, a subspace of dimension $n$ must equal $W$ (by the result from Section II: equal dimension implies equality). So $\\operatorname{rank}(T)=n \\iff \\operatorname{Im}(T) = W \\iff T$ surjective. ∎",
    ],
    solution:
      "**Proof:** By the Rank-Nullity Theorem (Thm 25): $\\operatorname{nullity}(T)+\\operatorname{rank}(T)=n$.\n\n$(\\Rightarrow)$ Suppose $T$ is injective. Then $\\ker(T)=\\{\\mathbf{0}\\}$, so $\\operatorname{nullity}(T)=0$. By rank-nullity, $\\operatorname{rank}(T)=n$, i.e., $\\dim\\operatorname{Im}(T)=n$. Since $\\operatorname{Im}(T)\\subseteq W$ and $\\dim W=n$, a subspace of $W$ with the same dimension as $W$ must equal $W$ (Section II). Hence $\\operatorname{Im}(T)=W$, so $T$ is surjective.\n\n$(\\Leftarrow)$ Suppose $T$ is surjective. Then $\\operatorname{Im}(T)=W$, so $\\operatorname{rank}(T)=\\dim W=n$. By rank-nullity, $\\operatorname{nullity}(T)=0$, so $\\ker(T)=\\{\\mathbf{0}\\}$, hence $T$ is injective. $\\blacksquare$",
  },
];

export default questions;
