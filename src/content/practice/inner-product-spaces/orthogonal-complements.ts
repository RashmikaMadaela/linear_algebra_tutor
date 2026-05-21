import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "oc-find-complement",
    question:
      "Let W = span{(1,0,1)} in ℝ³ with the standard dot product. Find W⊥ and verify ℝ³ = W ⊕ W⊥.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "W⊥ = {v ∈ ℝ³ : ⟨v, (1,0,1)⟩ = 0} = {(x,y,z) : x + z = 0} = {(x,y,−x) : x,y ∈ ℝ}.",
      "A basis for W⊥ is {(1,0,−1), (0,1,0)} — dimension 2. Check: 1 + 2 = 3 = dim(ℝ³). ✓",
      "Every v ∈ ℝ³ splits as v = proj_W(v) + (v − proj_W(v)). The first part is in W, the second in W⊥.",
    ],
    solution:
      "$W=\operatorname{span}\{(1,0,1)\}$. Then\n$$W^\perp=\{(x,y,z)\in\mathbb{R}^3:\langle(x,y,z),(1,0,1)\rangle=0\}=\{(x,y,z):x+z=0\}.$$\nSo\n$$W^\perp=\{(x,y,-x):x,y\in\mathbb{R}\}=\operatorname{span}\{(1,0,-1),(0,1,0)\}.$$\nHence $\dim W=1$, $\dim W^\perp=2$, and $1+2=3=\dim\mathbb{R}^3$. Also $W\cap W^\perp=\{0\}$, so\n$$\mathbb{R}^3=W\oplus W^\perp.$$\n$\\blacksquare$",
  },
  {
    id: "oc-best-approximation",
    question:
      "Find the best approximation to v = (1, 2, 3) in W = span{(1, 1, 0), (0, 1, 1)} ⊆ ℝ³. Compute the approximation error.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "First, apply Gram-Schmidt to {(1,1,0),(0,1,1)} to get an ONB {e₁,e₂} for W. e₁ = (1,1,0)/√2.",
      "u₂ = (0,1,1) − ⟨(0,1,1),(1,1,0)/√2⟩·(1,1,0)/√2 = (0,1,1) − (1/2)(1,1,0) = (−1/2, 1/2, 1). Normalize.",
      "proj_W(v) = ⟨v,e₁⟩e₁ + ⟨v,e₂⟩e₂. The error is ‖v − proj_W(v)‖, which by Pythagoras satisfies ‖v‖² = ‖proj_W(v)‖² + ‖error‖².",
    ],
    solution:
      "Let $a_1=(1,1,0)$, $a_2=(0,1,1)$. Gram-Schmidt gives\n$$e_1=\frac{1}{\sqrt2}(1,1,0),\quad u_2=a_2-\langle a_2,e_1\rangle e_1=\left(-\tfrac12,\tfrac12,1\right),\quad e_2=\frac{1}{\sqrt6}(-1,1,2).$$\nFor $v=(1,2,3)$:\n$$\langle v,e_1\rangle=\frac{3}{\sqrt2},\qquad \langle v,e_2\rangle=\frac{7}{\sqrt6}.$$\nSo\n$$\operatorname{proj}_W(v)=\langle v,e_1\rangle e_1+\langle v,e_2\rangle e_2=( -\tfrac{2}{3},\tfrac{7}{3},3).$$\nError vector:\n$$v-\operatorname{proj}_W(v)=\left(\tfrac{5}{3},-\tfrac{1}{3},0\right),$$\nand error norm\n$$\|v-\operatorname{proj}_W(v)\|=\sqrt{\tfrac{26}{9}}=\frac{\sqrt{26}}{3}.$$\nThus the best approximation in $W$ is $(-2/3,7/3,3)$ with error $\sqrt{26}/3$. $\\blacksquare$",
  },
  {
    id: "oc-pythagoras",
    question:
      "Theorem 22 includes a Pythagorean identity: if v = w + z with w ∈ W and z ∈ W⊥, then ‖v‖² = ‖w‖² + ‖z‖². Prove this.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "Expand ‖v‖² = ⟨w+z, w+z⟩ = ⟨w,w⟩ + ⟨w,z⟩ + ⟨z,w⟩ + ⟨z,z⟩.",
      "Since w ∈ W and z ∈ W⊥, we have ⟨w,z⟩ = 0 and ⟨z,w⟩ = conj(⟨w,z⟩) = 0.",
      "So ‖v‖² = ‖w‖² + ‖z‖². ✓ This is the vector space version of the Pythagorean theorem.",
    ],
    solution:
      "If $v=w+z$ with $w\in W$ and $z\in W^\perp$, then\n$$\|v\|^2=\langle w+z,w+z\rangle=\langle w,w\rangle+\langle w,z\rangle+\langle z,w\rangle+\langle z,z\rangle.$$\nBecause $z\perp W$ and $w\in W$, we have $\langle w,z\rangle=0$, and by conjugate symmetry also $\langle z,w\rangle=0$. Therefore\n$$\|v\|^2=\|w\|^2+\|z\|^2.$$\nThis is exactly the inner-product Pythagorean identity. $\\blacksquare$",
  },
  {
    id: "oc-polynomial-approx",
    question:
      "Find the best approximation to f(x) = x³ in W = span{1, x} ⊆ P₃ with ⟨p,q⟩ = ∫₋₁¹ pq dx. In other words, find the least-squares linear fit to x³ on [−1,1].",
    type: "computation",
    difficulty: "medium",
    hints: [
      "The ONB for W is e₁ = 1/√2, e₂ = x/√(2/3) = x√(3/2) (from Gram-Schmidt on {1, x}).",
      "⟨x³, 1/√2⟩ = (1/√2)∫₋₁¹ x³ dx = 0 (odd function). ⟨x³, x√(3/2)⟩ = √(3/2)∫₋₁¹ x⁴ dx = √(3/2)·(2/5).",
      "proj_W(x³) = 0·e₁ + √(3/2)·(2/5)·x√(3/2) = (3/2)·(2/5)·x = (3/5)x. The best linear approximation is (3/5)x.",
    ],
    solution:
      "With inner product $\langle p,q\rangle=\int_{-1}^1p(x)q(x)\,dx$ and $W=\operatorname{span}\{1,x\}$, an orthonormal basis is\n$$e_1=\frac1{\sqrt2},\qquad e_2=x\sqrt{\frac32}.$$\nProject $f(x)=x^3$ onto $W$:\n$$\operatorname{proj}_W(f)=\langle f,e_1\rangle e_1+\langle f,e_2\rangle e_2.$$\nNow\n$$\langle x^3,e_1\rangle=\frac1{\sqrt2}\int_{-1}^1x^3dx=0,$$\n$$\langle x^3,e_2\rangle=\sqrt{\frac32}\int_{-1}^1x^4dx=\sqrt{\frac32}\cdot\frac{2}{5}.$$\nHence\n$$\operatorname{proj}_W(x^3)=\sqrt{\frac32}\frac{2}{5}\cdot x\sqrt{\frac32}=\frac35x.$$\nSo the least-squares linear approximation on $[-1,1]$ is $\boxed{\frac35x}$. $\\blacksquare$",
  },
  {
    id: "oc-complement-subspace",
    question:
      "Prove that W⊥ is a subspace of V for any subset W ⊆ V. You need to verify: (1) 0 ∈ W⊥, (2) closure under addition, (3) closure under scalar multiplication.",
    type: "proof",
    difficulty: "easy",
    hints: [
      "(1) ⟨0, w⟩ = 0 for all w ∈ W, so 0 ∈ W⊥. ✓",
      "(2) If u,v ∈ W⊥ and w ∈ W: ⟨u+v, w⟩ = ⟨u,w⟩ + ⟨v,w⟩ = 0 + 0 = 0. So u+v ∈ W⊥. ✓",
      "(3) If u ∈ W⊥ and α ∈ F: ⟨αu, w⟩ = α⟨u,w⟩ = α·0 = 0. So αu ∈ W⊥. ✓",
    ],
    solution:
      "Let $W^\perp=\{u\in V:\langle u,w\rangle=0\ \forall w\in W\}$.\n\n1. $0\in W^\perp$ since $\langle0,w\rangle=0$ for every $w\in W$.\n\n2. If $u,v\in W^\perp$, then for any $w\in W$,\n$$\langle u+v,w\rangle=\langle u,w\rangle+\langle v,w\rangle=0+0=0,$$\nso $u+v\in W^\perp$.\n\n3. If $u\in W^\perp$ and $\alpha\in\mathbb{F}$, then for any $w\in W$,\n$$\langle\alpha u,w\rangle=\alpha\langle u,w\rangle=\alpha\cdot0=0,$$\nso $\alpha u\in W^\perp$.\n\nHence $W^\perp$ is a subspace of $V$. $\\blacksquare$",
  },
];

export default questions;
