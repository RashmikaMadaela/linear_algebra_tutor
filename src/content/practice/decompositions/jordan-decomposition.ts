import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "dc-jnf-1",
    question:
      "Find the Jordan Normal Form of $A = \\begin{pmatrix}3 & 1 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3\\end{pmatrix}$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "Characteristic polynomial: $(\\lambda-3)^3$. So the only eigenvalue is $\\lambda=3$ with $a_3=3$.",
      "$(A-3I) = \\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}$. Rank $= 1$, so $g_3 = 3 - 1 = 2$.",
      "$g_3 = 2$ means two Jordan blocks for $\\lambda=3$. Sizes must sum to $3$ with two blocks: $(2,1)$. So $J = J_2(3) \\oplus J_1(3) = \\begin{pmatrix}3&1&0\\\\0&3&0\\\\0&0&3\\end{pmatrix}$.",
    ],
    solution: "**Solution:** Characteristic polynomial: $(\\lambda-3)^3$. So the only eigenvalue is $\\lambda=3$ with $a_3=3$.\n\n$(A-3I) = \\begin{pmatrix}0&1&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}$. Rank $= 1$, so $g_3 = 3 - 1 = 2$.\n\n$g_3 = 2$ means two Jordan blocks for $\\lambda=3$. Sizes must sum to $3$ with two blocks: $(2,1)$. So $J = J_2(3) \\oplus J_1(3) = \\begin{pmatrix}3&1&0\\\\0&3&0\\\\0&0&3\\end{pmatrix}$.",
  },
  {
    id: "dc-jnf-2",
    question:
      "A $5\\times5$ matrix $A$ has characteristic polynomial $(\\lambda-2)^3(\\lambda-5)^2$ and $\\dim\\ker(A-2I)=2$, $\\dim\\ker(A-5I)=1$. Determine the Jordan Normal Form of $A$.",
    type: "reasoning",
    difficulty: "medium",
    hints: [
      "For $\\lambda=2$: $a_2=3$, $g_2=2$. Two Jordan blocks summing to size 3 → sizes $(2,1)$.",
      "For $\\lambda=5$: $a_5=2$, $g_5=1$. One Jordan block of size 2.",
      "$J = J_2(2) \\oplus J_1(2) \\oplus J_2(5) = \\begin{pmatrix}2&1&&&\\\\0&2&&&\\\\&&2&&\\\\&&&5&1\\\\&&&&5\\end{pmatrix}$.",
    ],
    solution: "**Solution:** For $\\lambda=2$: $a_2=3$, $g_2=2$. Two Jordan blocks summing to size 3 → sizes $(2,1)$.\n\nFor $\\lambda=5$: $a_5=2$, $g_5=1$. One Jordan block of size 2.\n\n$J = J_2(2) \\oplus J_1(2) \\oplus J_2(5) = \\begin{pmatrix}2&1&&&\\\\0&2&&&\\\\&&2&&\\\\&&&5&1\\\\&&&&5\\end{pmatrix}$.",
  },
  {
    id: "dc-jnf-3",
    question:
      "Compute $A^5$ for $A = \\begin{pmatrix}4 & 1 \\\\ 0 & 4\\end{pmatrix}$ using the Jordan block power formula.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "$A = J_2(4)$ is already a Jordan block. Apply the power formula: $J_k(\\lambda)^m_{ij} = \\binom{m}{j-i}\\lambda^{m-(j-i)}$ for $j \\geq i$.",
      "$A^5 = \\begin{pmatrix}4^5 & \\binom{5}{1}4^4 \\\\ 0 & 4^5\\end{pmatrix} = \\begin{pmatrix}1024 & 5 \\cdot 256 \\\\ 0 & 1024\\end{pmatrix} = \\begin{pmatrix}1024 & 1280 \\\\ 0 & 1024\\end{pmatrix}$.",
      "Verify: $A^2 = \\begin{pmatrix}16&8\\\\0&16\\end{pmatrix}$, pattern holds. ✓",
    ],
    solution: "**Solution:** $A = J_2(4)$ is already a Jordan block. Apply the power formula: $J_k(\\lambda)^m_{ij} = \\binom{m}{j-i}\\lambda^{m-(j-i)}$ for $j \\geq i$.\n\n$A^5 = \\begin{pmatrix}4^5 & \\binom{5}{1}4^4 \\\\ 0 & 4^5\\end{pmatrix} = \\begin{pmatrix}1024 & 5 \\cdot 256 \\\\ 0 & 1024\\end{pmatrix} = \\begin{pmatrix}1024 & 1280 \\\\ 0 & 1024\\end{pmatrix}$.\n\nVerify: $A^2 = \\begin{pmatrix}16&8\\\\0&16\\end{pmatrix}$, pattern holds. ✓",
  },
  {
    id: "dc-jnf-4",
    question:
      "Prove that $A$ and $A^T$ have the same Jordan Normal Form (i.e., they are similar over $\\mathbb{C}$).",
    type: "proof",
    difficulty: "hard",
    hints: [
      "Step 1: $A$ and $A^T$ have the same characteristic polynomial (since $\\det(\\lambda I - A^T) = \\det((\\lambda I - A)^T) = \\det(\\lambda I - A)$), so same eigenvalues with same algebraic multiplicities.",
      "Step 2: Show geometric multiplicities match: $\\dim\\ker(A-\\lambda I) = \\dim\\ker(A^T - \\lambda I)$ (ranks are preserved under transpose).",
      "Step 3: In fact, all dimensions $\\dim\\ker(A-\\lambda I)^k = \\dim\\ker(A^T-\\lambda I)^k$ agree (since $(A-\\lambda I)^k$ and its transpose have the same rank). This pins down the full Jordan block sizes. Since all block structure data agrees, $A$ and $A^T$ have the same JNF. ∎",
    ],
    solution: "**Solution:** Step 1: $A$ and $A^T$ have the same characteristic polynomial (since $\\det(\\lambda I - A^T) = \\det((\\lambda I - A)^T) = \\det(\\lambda I - A)$), so same eigenvalues with same algebraic multiplicities.\n\nStep 2: Show geometric multiplicities match: $\\dim\\ker(A-\\lambda I) = \\dim\\ker(A^T - \\lambda I)$ (ranks are preserved under transpose).\n\nStep 3: In fact, all dimensions $\\dim\\ker(A-\\lambda I)^k = \\dim\\ker(A^T-\\lambda I)^k$ agree (since $(A-\\lambda I)^k$ and its transpose have the same rank). This pins down the full Jordan block sizes. Since all block structure data agrees, $A$ and $A^T$ have the same JNF. ∎",
  },
];

export default questions;
