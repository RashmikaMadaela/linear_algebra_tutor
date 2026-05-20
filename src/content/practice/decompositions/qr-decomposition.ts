import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "dc-qr-1",
    question:
      "Compute the QR decomposition of $A = \\begin{pmatrix}1 & 0 \\\\ 1 & 1 \\\\ 0 & 1\\end{pmatrix}$ using Gram-Schmidt.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Column 1: $\\mathbf{a}_1 = (1,1,0)^T$. $\\|\\mathbf{a}_1\\|=\\sqrt{2}$. $\\mathbf{q}_1 = (1,1,0)^T/\\sqrt{2}$.",
      "Column 2: $\\mathbf{a}_2=(0,1,1)^T$. $r_{12}=\\langle\\mathbf{a}_2,\\mathbf{q}_1\\rangle = 1/\\sqrt{2}$. $\\mathbf{u}_2 = (0,1,1)^T - (1/\\sqrt{2})\\cdot(1,1,0)^T/\\sqrt{2} = (-1/2, 1/2, 1)^T$.",
      "$\\|\\mathbf{u}_2\\|=\\sqrt{1/4+1/4+1}=\\sqrt{6}/2$. $\\mathbf{q}_2 = \\frac{2}{\\sqrt{6}}(-1/2,1/2,1)^T = \\frac{1}{\\sqrt{6}}(-1,1,2)^T$. So $Q = \\begin{pmatrix}1/\\sqrt{2}&-1/\\sqrt{6}\\\\1/\\sqrt{2}&1/\\sqrt{6}\\\\0&2/\\sqrt{6}\\end{pmatrix}$, $R = \\begin{pmatrix}\\sqrt{2}&1/\\sqrt{2}\\\\0&\\sqrt{6}/2\\end{pmatrix}$.",
    ],
  },
  {
    id: "dc-qr-2",
    question:
      "Given the QR decomposition $A = QR$ from problem 1, verify that $Q^TQ = I$ and that $R$ is upper triangular with positive diagonal.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "$Q^TQ$: compute the dot products. $\\mathbf{q}_1\\cdot\\mathbf{q}_1 = 1/2+1/2+0 = 1$. $\\mathbf{q}_2\\cdot\\mathbf{q}_2 = 1/6+1/6+4/6 = 1$. $\\mathbf{q}_1\\cdot\\mathbf{q}_2 = -1/(\\sqrt{2}\\cdot\\sqrt{6})+1/(\\sqrt{2}\\cdot\\sqrt{6})+0 = 0$. ✓",
      "$R = \\begin{pmatrix}\\sqrt{2}&1/\\sqrt{2}\\\\0&\\sqrt{6}/2\\end{pmatrix}$: lower-left entry is $0$ ✓ (upper triangular). Diagonal: $\\sqrt{2}>0$, $\\sqrt{6}/2>0$. ✓",
      "Both conditions satisfied. ✓",
    ],
  },
  {
    id: "dc-qr-3",
    question:
      "Use the QR decomposition of $A = \\begin{pmatrix}1&1\\\\1&2\\\\1&3\\end{pmatrix}$ to solve the least-squares problem $\\min_{\\mathbf{x}}\\|A\\mathbf{x}-\\mathbf{b}\\|$ with $\\mathbf{b}=(1,2,4)^T$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "QR of $A$: Gram-Schmidt on $(1,1,1)^T$ and $(1,2,3)^T$. $\\mathbf{q}_1=(1,1,1)^T/\\sqrt{3}$. $r_{12}=\\langle(1,2,3)^T,\\mathbf{q}_1\\rangle=6/\\sqrt{3}=2\\sqrt{3}$. $\\mathbf{u}_2=(1,2,3)^T-2(1,1,1)^T=(-1,0,1)^T$. $\\mathbf{q}_2=(-1,0,1)^T/\\sqrt{2}$.",
      "Form $Q^T\\mathbf{b}$: $(Q^T\\mathbf{b})_1 = (1+2+4)/\\sqrt{3}=7/\\sqrt{3}$. $(Q^T\\mathbf{b})_2 = (-1+0+4)/\\sqrt{2}=3/\\sqrt{2}$.",
      "Solve $R\\mathbf{x}=Q^T\\mathbf{b}$: $R=\\begin{pmatrix}\\sqrt{3}&2\\sqrt{3}\\\\0&\\sqrt{2}\\end{pmatrix}$. Back-substitution: $x_2 = (3/\\sqrt{2})/\\sqrt{2}=3/2$. $x_1 = (7/\\sqrt{3}-2\\sqrt{3}\\cdot3/2)/\\sqrt{3} = (7-9)/3 = -2/3$. Answer: $\\mathbf{x}=(-2/3, 3/2)^T$.",
    ],
  },
  {
    id: "dc-qr-4",
    question:
      "Perform one iteration of the QR algorithm on $A = \\begin{pmatrix}0 & 2 \\\\ 1 & 1\\end{pmatrix}$. What are the eigenvalues?",
    type: "computation",
    difficulty: "medium",
    hints: [
      "QR decomposition of $A$: columns $(0,1)^T$ and $(2,1)^T$. $\\mathbf{q}_1=(0,1)^T$. $r_{12}=\\langle(2,1)^T,\\mathbf{q}_1\\rangle=1$. $\\mathbf{u}_2=(2,1)^T-(0,1)^T=(2,0)^T$. $\\mathbf{q}_2=(1,0)^T$. So $Q=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ (permutation matrix), $R=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$.",
      "$A_1 = RQ = \\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=\\begin{pmatrix}1&1\\\\2&0\\end{pmatrix}$.",
      "Eigenvalues of $A$ (and $A_1$): $p(\\lambda)=\\lambda(\\lambda-1)-2=\\lambda^2-\\lambda-2=(\\lambda-2)(\\lambda+1)$. So $\\lambda=2$ and $\\lambda=-1$. The QR iteration will converge to upper triangular form with these on the diagonal.",
    ],
  },
];

export default questions;
