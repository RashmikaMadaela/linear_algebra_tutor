import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-sub-1",
    question:
      "Determine whether $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 0\\}$ is a subspace of $\\mathbb{R}^3$.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "Check the three conditions: (i) Is $\\mathbf{0} = (0,0,0) \\in W$? Substitute: $0 + 0 - 0 = 0$. ✓",
      "Check closure under addition: if $x_1 + 2y_1 - z_1 = 0$ and $x_2 + 2y_2 - z_2 = 0$, does $(x_1+x_2) + 2(y_1+y_2) - (z_1+z_2) = 0$? Add the two equations.",
      "Check closure under scaling: if $x + 2y - z = 0$ and $\\alpha \\in \\mathbb{R}$, does $\\alpha x + 2(\\alpha y) - \\alpha z = \\alpha(x+2y-z) = 0$? Yes. Conclude $W$ is a subspace.",
    ],
  },
  {
    id: "vs-sub-2",
    question:
      "Is $W = \\{(x,y) \\in \\mathbb{R}^2 \\mid xy \\geq 0\\}$ (vectors in the first or third quadrant, including axes) a subspace of $\\mathbb{R}^2$?",
    type: "verification",
    difficulty: "easy",
    hints: [
      "$\\mathbf{0} = (0,0) \\in W$ since $0 \\cdot 0 = 0 \\geq 0$. Zero vector check passes.",
      "Try two vectors that are in $W$ but whose sum is not. Consider $(1, 0)$ and $(0, 1)$: both are in $W$ (on the axes, $xy=0 \\geq 0$). But $(1,0)+(0,1) = (1,1)$ has $xy = 1 \\geq 0$, still in $W$. Try $(2, 1)$ (first quadrant, $xy=2\\geq 0$) and $(-1, -2)$ (third quadrant, $xy = 2 \\geq 0$). Their sum is $(1, -1)$ with $xy = -1 < 0$. Not in $W$! ✗",
      "$W$ fails closure under addition, so $W$ is **not** a subspace.",
    ],
  },
  {
    id: "vs-sub-3",
    question:
      "Let $V = M_{2 \\times 2}(\\mathbb{R})$ (all real $2 \\times 2$ matrices). Show that the set $W$ of symmetric matrices ($A = A^T$) is a subspace of $V$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "The zero matrix satisfies $\\mathbf{0}^T = \\mathbf{0}$, so $\\mathbf{0} \\in W$. ✓",
      "If $A^T = A$ and $B^T = B$, then $(A+B)^T = A^T + B^T = A + B$. So $A + B \\in W$. ✓",
      "If $A^T = A$ and $\\alpha \\in \\mathbb{R}$, then $(\\alpha A)^T = \\alpha A^T = \\alpha A$. So $\\alpha A \\in W$. ✓ All three conditions hold.",
    ],
  },
  {
    id: "vs-sub-4",
    question:
      "Prove or disprove: the union $W_1 \\cup W_2$ of two subspaces of $V$ is always a subspace.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "This is **false** in general. Find a counterexample in $\\mathbb{R}^2$. Let $W_1$ be the $x$-axis and $W_2$ be the $y$-axis.",
      "$(1, 0) \\in W_1$ and $(0, 1) \\in W_2$, so both are in $W_1 \\cup W_2$. But $(1,0) + (0,1) = (1,1)$ is neither on the $x$-axis nor the $y$-axis, so $(1,1) \\notin W_1 \\cup W_2$.",
      "Therefore $W_1 \\cup W_2$ is not closed under addition, so it's not a subspace. (The correct statement is: $W_1 \\cup W_2$ is a subspace iff $W_1 \\subseteq W_2$ or $W_2 \\subseteq W_1$.)",
    ],
  },
];

export default questions;
