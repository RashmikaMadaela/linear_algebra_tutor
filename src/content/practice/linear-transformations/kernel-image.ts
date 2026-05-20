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
  },
];

export default questions;
