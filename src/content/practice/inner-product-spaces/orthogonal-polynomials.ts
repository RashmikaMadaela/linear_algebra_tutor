import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "opoly-legendre-orthogonality",
    question:
      "Verify that P₀(x) = 1 and P₁(x) = x are orthogonal on [−1,1] under the standard L² inner product ⟨f,g⟩ = ∫₋₁¹ f(x)g(x) dx.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "⟨P₀, P₁⟩ = ∫₋₁¹ 1·x dx.",
      "The integrand x is an odd function; integrating over a symmetric interval [−1,1] gives 0.",
      "⟨P₀,P₁⟩ = [x²/2]₋₁¹ = 1/2 − 1/2 = 0. ✓",
    ],
    solution:
      "Using $P_0(x)=1$, $P_1(x)=x$ and $\langle f,g\rangle=\int_{-1}^1f(x)g(x)\,dx$:\n$$\langle P_0,P_1\rangle=\int_{-1}^11\cdot x\,dx=\int_{-1}^1x\,dx=0,$$\nsince $x$ is odd on a symmetric interval. Therefore $P_0\perp P_1$. $\\blacksquare$",
  },
  {
    id: "opoly-legendre-p2",
    question:
      "Using the Legendre recurrence (n+1)Pₙ₊₁(x) = (2n+1)xPₙ(x) − nPₙ₋₁(x), compute P₂(x) and P₃(x). Verify ⟨P₁, P₂⟩ = 0.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "For n=1: 2P₂ = 3xP₁ − P₀ = 3x² − 1. So P₂(x) = (3x²−1)/2.",
      "For n=2: 3P₃ = 5xP₂ − 2P₁ = 5x(3x²−1)/2 − 2x = (15x³−5x)/2 − 2x = (15x³−9x)/2. So P₃(x) = (5x³−3x)/2.",
      "⟨P₁,P₂⟩ = ∫₋₁¹ x·(3x²−1)/2 dx = (1/2)∫₋₁¹ (3x³−x) dx. Both 3x³ and x are odd, so integral = 0. ✓",
    ],
    solution:
      "From $(n+1)P_{n+1}=(2n+1)xP_n-nP_{n-1}$ with $P_0=1$, $P_1=x$:\n\nFor $n=1$:\n$$2P_2=3xP_1-P_0=3x^2-1\implies P_2(x)=\frac{3x^2-1}{2}.$$\nFor $n=2$:\n$$3P_3=5xP_2-2P_1=5x\frac{3x^2-1}{2}-2x=\frac{15x^3-9x}{2}\implies P_3(x)=\frac{5x^3-3x}{2}.$$\nNow\n$$\langle P_1,P_2\rangle=\int_{-1}^1x\cdot\frac{3x^2-1}{2}\,dx=\frac12\int_{-1}^1(3x^3-x)\,dx=0,$$\nbecause integrand is odd. Hence $P_1\perp P_2$. $\\blacksquare$",
  },
  {
    id: "opoly-chebyshev-identity",
    question:
      "Verify the Chebyshev identity T₂(cos θ) = cos(2θ) using the recurrence Tₙ₊₁(x) = 2xTₙ(x) − Tₙ₋₁(x) with T₀(x) = 1, T₁(x) = x.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "T₂(x) = 2x·T₁(x) − T₀(x) = 2x·x − 1 = 2x² − 1.",
      "Set x = cos θ: T₂(cos θ) = 2cos²θ − 1.",
      "Recall the double angle formula: cos(2θ) = 2cos²θ − 1. So T₂(cos θ) = cos(2θ). ✓",
    ],
    solution:
      "Using $T_{n+1}(x)=2xT_n(x)-T_{n-1}(x)$ with $T_0(x)=1$, $T_1(x)=x$:\n$$T_2(x)=2xT_1(x)-T_0(x)=2x^2-1.$$\nSubstitute $x=\cos\theta$:\n$$T_2(\cos\theta)=2\cos^2\theta-1=\cos(2\theta).$$\nSo the identity is verified. $\\blacksquare$",
  },
  {
    id: "opoly-chebyshev-t3",
    question: "Compute T₃(x) using the Chebyshev recurrence and verify T₃(cos θ) = cos(3θ).",
    type: "computation",
    difficulty: "medium",
    hints: [
      "T₃(x) = 2x·T₂(x) − T₁(x) = 2x(2x²−1) − x = 4x³ − 2x − x = 4x³ − 3x.",
      "Set x = cos θ: T₃(cos θ) = 4cos³θ − 3cosθ.",
      "Triple angle formula: cos(3θ) = 4cos³θ − 3cosθ. ✓ The Chebyshev polynomials encode the multiple angle formulas.",
    ],
    solution:
      "From recurrence:\n$$T_3(x)=2xT_2(x)-T_1(x)=2x(2x^2-1)-x=4x^3-3x.$$\nThen\n$$T_3(\cos\theta)=4\cos^3\theta-3\cos\theta=\cos(3\theta),$$\nby the triple-angle identity. Hence verified. $\\blacksquare$",
  },
  {
    id: "opoly-laguerre-recurrence",
    question:
      "Using the Laguerre recurrence (n+1)Lₙ₊₁(x) = (2n+1−x)Lₙ(x) − nLₙ₋₁(x) with L₀ = 1, L₁ = 1−x, compute L₂(x).",
    type: "computation",
    difficulty: "medium",
    hints: [
      "For n=1: 2L₂(x) = (3−x)L₁(x) − L₀(x) = (3−x)(1−x) − 1.",
      "(3−x)(1−x) = 3 − 3x − x + x² = 3 − 4x + x². Subtract 1: 2L₂ = 2 − 4x + x².",
      "L₂(x) = (x² − 4x + 2)/2 = 1 − 2x + x²/2. Verify by checking that ⟨L₁,L₂⟩ = 0 under ∫₀^∞ e^{−x}f·g dx.",
    ],
    solution:
      "Use $(n+1)L_{n+1}=(2n+1-x)L_n-nL_{n-1}$ with $L_0=1$, $L_1=1-x$. For $n=1$:\n$$2L_2=(3-x)L_1-L_0=(3-x)(1-x)-1.$$\nExpand:\n$$(3-x)(1-x)=3-4x+x^2,$$\nso\n$$2L_2=2-4x+x^2\implies L_2(x)=\frac{x^2-4x+2}{2}=1-2x+\frac{x^2}{2}.$$\nThus $\boxed{L_2(x)=1-2x+\frac{x^2}{2}}$. $\\blacksquare$",
  },
];

export default questions;
