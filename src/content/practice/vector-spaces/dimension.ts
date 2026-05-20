import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-dim-1",
    question:
      "What is $\\dim(W_1 + W_2)$ if $W_1 = \\operatorname{span}(\\{(1,0,0),(0,1,0)\\})$ and $W_2 = \\operatorname{span}(\\{(0,1,0),(0,0,1)\\})$ in $\\mathbb{R}^3$?",
    type: "computation",
    difficulty: "easy",
    hints: [
      "$W_1$ is the $xy$-plane: $\\dim W_1 = 2$. $W_2$ is the $yz$-plane: $\\dim W_2 = 2$.",
      "$W_1 \\cap W_2 = \\operatorname{span}(\\{(0,1,0)\\})$: the $y$-axis. So $\\dim(W_1 \\cap W_2) = 1$.",
      "By the Dimension Formula: $\\dim(W_1 + W_2) = 2 + 2 - 1 = 3$. So $W_1 + W_2 = \\mathbb{R}^3$.",
    ],
  },
  {
    id: "vs-dim-2",
    question:
      "Let $A$ be a $5 \\times 7$ matrix with $\\operatorname{rank}(A) = 3$. Find the dimension of the null space of $A$ and the dimension of the null space of $A^T$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Rank-Nullity for $A$ (which is $5\\times 7$): $\\operatorname{rank}(A) + \\operatorname{nullity}(A) = 7$. So $\\operatorname{nullity}(A) = 7 - 3 = 4$.",
      "$A^T$ is $7\\times 5$ and has the same rank: $\\operatorname{rank}(A^T) = \\operatorname{rank}(A) = 3$.",
      "Rank-Nullity for $A^T$: $\\operatorname{rank}(A^T) + \\operatorname{nullity}(A^T) = 5$. So $\\operatorname{nullity}(A^T) = 5 - 3 = 2$.",
    ],
  },
  {
    id: "vs-dim-3",
    question:
      "Prove: if $V$ is $n$-dimensional and $W \\subseteq V$ is a subspace with $\\dim W = n$, then $W = V$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Let $\\mathcal{B} = \\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_n\\}$ be a basis for $W$. Since $\\mathcal{B}$ is a set of $n$ vectors in $V$ and $\\dim V = n$, it suffices to show $\\mathcal{B}$ is LI (we already know it is) and spans $V$ or is a basis for $V$.",
      "Since $\\mathcal{B}$ is LI and $|\\mathcal{B}| = n = \\dim V$, by the Steinitz Exchange Lemma (Theorem 12), $\\mathcal{B}$ is a basis for $V$.",
      "Therefore $\\operatorname{span}(\\mathcal{B}) = V$. But $\\operatorname{span}(\\mathcal{B}) = W$ (since $\\mathcal{B}$ is a basis for $W$). Hence $W = V$. ∎",
    ],
  },
  {
    id: "vs-dim-4",
    question:
      "Let $V = \\mathbb{P}_4(\\mathbb{R})$ and consider the subspace $W = \\{p \\in \\mathbb{P}_4(\\mathbb{R}) \\mid p(1) = 0\\}$. Find a basis for $W$ and compute $\\dim W$.",
    type: "computation",
    difficulty: "hard",
    hints: [
      "If $p(1) = 0$, then $(x-1)$ is a factor of $p(x)$. Write $p(x) = (x-1)q(x)$ where $q(x) \\in \\mathbb{P}_3(\\mathbb{R})$.",
      "A basis for $\\mathbb{P}_3(\\mathbb{R})$ is $\\{1, x, x^2, x^3\\}$. Multiplying by $(x-1)$: a basis for $W$ is $\\{(x-1), x(x-1), x^2(x-1), x^3(x-1)\\}$.",
      "Explicitly: $\\{x-1,\\; x^2-x,\\; x^3-x^2,\\; x^4-x^3\\}$. These are LI (why? each has a different degree for the leading term) and span $W$. So $\\dim W = 4 = \\dim \\mathbb{P}_4 - 1 = 5 - 1$. This reflects the one linear constraint $p(1) = 0$.",
    ],
  },
];

export default questions;
