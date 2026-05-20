import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-span-1",
    question:
      "Determine whether $\\mathbf{b} = (3, 0, -1)$ is in $\\operatorname{span}(\\{(1,2,0), (0,-1,1)\\})$ in $\\mathbb{R}^3$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Set up: we want $\\alpha(1,2,0) + \\beta(0,-1,1) = (3,0,-1)$.",
      "This gives the system: $\\alpha = 3$, $2\\alpha - \\beta = 0$, $\\beta = -1$.",
      "From the first equation $\\alpha = 3$. From the third, $\\beta = -1$. Check the second: $2(3) - (-1) = 7 \\neq 0$. The system is **inconsistent**, so $(3,0,-1) \\notin \\operatorname{span}$.",
    ],
  },
  {
    id: "vs-span-2",
    question:
      "Find $\\operatorname{span}(\\{(1,0,1), (2,0,2)\\})$ in $\\mathbb{R}^3$. Describe it geometrically.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "Any linear combination: $\\alpha(1,0,1) + \\beta(2,0,2) = (\\alpha+2\\beta, 0, \\alpha+2\\beta)$. Let $t = \\alpha + 2\\beta$.",
      "The span is $\\{(t, 0, t) \\mid t \\in \\mathbb{R}\\}$.",
      "This is a **line** through the origin in the direction $(1,0,1)$. Notice that $(2,0,2) = 2(1,0,1)$, so the two vectors are parallel — the span collapses to a line, not a plane.",
    ],
  },
  {
    id: "vs-span-3",
    question:
      "Prove that $\\{1, 1+x, 1+x+x^2\\}$ spans $\\mathbb{P}_2(\\mathbb{R})$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "A general element is $a + bx + cx^2$. We need to find $\\alpha, \\beta, \\gamma$ such that $\\alpha(1) + \\beta(1+x) + \\gamma(1+x+x^2) = a + bx + cx^2$.",
      "Expand: $(\\alpha+\\beta+\\gamma) + (\\beta+\\gamma)x + \\gamma x^2 = a + bx + cx^2$.",
      "Equate coefficients: $\\gamma = c$, $\\beta = b - c$, $\\alpha = a - b$. This has a unique solution for any $a, b, c$, so the set spans $\\mathbb{P}_2(\\mathbb{R})$.",
    ],
  },
  {
    id: "vs-span-4",
    question:
      "Let $V$ be a vector space. Prove that if $S \\subseteq T \\subseteq V$, then $\\operatorname{span}(S) \\subseteq \\operatorname{span}(T)$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Take any $\\mathbf{v} \\in \\operatorname{span}(S)$. Then $\\mathbf{v} = \\alpha_1\\mathbf{s}_1 + \\cdots + \\alpha_k\\mathbf{s}_k$ for some $\\mathbf{s}_i \\in S$ and $\\alpha_i \\in \\mathbb{F}$.",
      "Since $S \\subseteq T$, each $\\mathbf{s}_i \\in T$. Therefore the same linear combination $\\alpha_1\\mathbf{s}_1 + \\cdots + \\alpha_k\\mathbf{s}_k$ expresses $\\mathbf{v}$ as a linear combination of elements of $T$.",
      "Hence $\\mathbf{v} \\in \\operatorname{span}(T)$. Since $\\mathbf{v}$ was arbitrary, $\\operatorname{span}(S) \\subseteq \\operatorname{span}(T)$. ∎",
    ],
  },
];

export default questions;
