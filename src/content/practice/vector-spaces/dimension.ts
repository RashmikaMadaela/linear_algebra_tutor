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
    solution:
      "We apply the **Dimension Formula** (Theorem 14): $\\dim(W_1+W_2)=\\dim W_1+\\dim W_2-\\dim(W_1\\cap W_2)$.\n\n- $W_1=\\operatorname{span}\\{(1,0,0),(0,1,0)\\}$ is the $xy$-plane: $\\dim W_1=2$.\n- $W_2=\\operatorname{span}\\{(0,1,0),(0,0,1)\\}$ is the $yz$-plane: $\\dim W_2=2$.\n- $W_1\\cap W_2$: a vector $(a,b,c)$ in both planes satisfies $c=0$ (for $W_1$) and $a=0$ (for $W_2$), so $W_1\\cap W_2=\\{(0,b,0)\\mid b\\in\\mathbb{R}\\}=\\operatorname{span}\\{(0,1,0)\\}$, giving $\\dim(W_1\\cap W_2)=1$.\n\nTherefore $\\dim(W_1+W_2)=2+2-1=3$, so $W_1+W_2=\\mathbb{R}^3$. $\\blacksquare$",
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
    solution:
      "**For $A$ ($5\\times7$ with rank 3):** By the Rank-Nullity Theorem (Theorem 25), $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=$ number of columns $=7$. So $\\operatorname{nullity}(A)=7-3=4$.\n\n**For $A^T$ ($7\\times5$):** We use the fact that $\\operatorname{rank}(A^T)=\\operatorname{rank}(A)=3$ (row rank equals column rank). Applying Rank-Nullity to $A^T$: $3+\\operatorname{nullity}(A^T)=5$, so $\\operatorname{nullity}(A^T)=2$.\n\n**Summary:** $\\dim(\\ker A)=4$ and $\\dim(\\ker A^T)=2$. Note $\\ker A^T=$ the **left null space** of $A$. $\\blacksquare$",
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
    ],    solution:
      "**Proof:** Let $\\mathcal{B}=\\{\\mathbf{w}_1,\\ldots,\\mathbf{w}_n\\}$ be a basis for $W$. By hypothesis, $|\\mathcal{B}|=n=\\dim V$.\n\nSince $W\\subseteq V$, each $\\mathbf{w}_i\\in V$, so $\\mathcal{B}$ is a linearly independent set of $n$ vectors in the $n$-dimensional space $V$. By Theorem 12 (a LI set of size $\\dim V$ is a basis for $V$), $\\mathcal{B}$ is a basis for $V$.\n\nTherefore $V=\\operatorname{span}(\\mathcal{B})=W$, since $\\mathcal{B}$ was a basis for $W$.\n\nHence $W=V$. $\\blacksquare$\n\n*Corollary:* A proper subspace of a finite-dimensional vector space always has strictly smaller dimension.",  },
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
    solution:
      "**Structure of $W$:** If $p(x)\\in W$, then $p(1)=0$, so $(x-1)\\mid p(x)$. Write $p(x)=(x-1)q(x)$ where $q(x)\\in\\mathbb{P}_3(\\mathbb{R})$ (since $\\deg p\\leq4$, $\\deg q\\leq3$).\n\n**Basis construction:** A basis for $\\mathbb{P}_3(\\mathbb{R})$ is $\\{1,x,x^2,x^3\\}$. Multiplying each element by $(x-1)$:\n$$\\mathcal{B}=\\{x-1,\\;x^2-x,\\;x^3-x^2,\\;x^4-x^3\\}.$$\n\n**Verification:** Each element clearly satisfies $p(1)=0$ (since $(1-1)q(1)=0$). Linear independence: these have leading monomials $x,x^2,x^3,x^4$ — all different — so they are LI. Spanning: any $p\\in W$ factors as $(x-1)q$ with $q\\in\\mathbb{P}_3$, and $q$ is a linear combination of $\\{1,x,x^2,x^3\\}$, so $p$ is a combination of $\\mathcal{B}$.\n\n**Conclusion:** $\\dim W=4$. (This is $\\dim\\mathbb{P}_4-1=5-1$, reflecting one linear constraint.) $\\blacksquare$",
  },
];

export default questions;
