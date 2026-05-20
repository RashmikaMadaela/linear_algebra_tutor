import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "lt-def-1",
    question:
      "Determine which of the following maps are linear: (a) $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$, $T(x,y) = (2x-y, x+3y)$. (b) $S: \\mathbb{R}^2 \\to \\mathbb{R}^2$, $S(x,y) = (x+1, y)$.",
    type: "verification",
    difficulty: "easy",
    hints: [
      "(a) Check: $T(\\alpha(x_1,y_1)+\\beta(x_2,y_2)) = T(\\alpha x_1+\\beta x_2, \\alpha y_1+\\beta y_2) = (2(\\alpha x_1+\\beta x_2)-(\\alpha y_1+\\beta y_2), \\ldots) = \\alpha T(x_1,y_1) + \\beta T(x_2,y_2)$. ✓ **T is linear.**",
      "(b) Check $S(\\mathbf{0}) = S(0,0) = (1,0) \\neq (0,0)$. Since a linear map must send $\\mathbf{0}$ to $\\mathbf{0}$, **S is NOT linear.** (It's an affine map, not a linear map.)",
      "A quick test: always check $T(\\mathbf{0}) = \\mathbf{0}$ first. If this fails, the map cannot be linear (necessary but not sufficient condition).",
    ],
  },
  {
    id: "lt-def-2",
    question:
      "Define $T: \\mathbb{P}_2(\\mathbb{R}) \\to \\mathbb{P}_2(\\mathbb{R})$ by $T(p)(x) = p(x+1)$ (shift). Show that $T$ is linear and find $T(1 + 2x + x^2)$.",
    type: "computation",
    difficulty: "easy",
    hints: [
      "**Linearity:** $T(\\alpha p + \\beta q)(x) = (\\alpha p + \\beta q)(x+1) = \\alpha p(x+1) + \\beta q(x+1) = \\alpha T(p)(x) + \\beta T(q)(x)$. ✓",
      "**Compute:** $T(1 + 2x + x^2)(x) = 1 + 2(x+1) + (x+1)^2 = 1 + 2x + 2 + x^2 + 2x + 1 = x^2 + 4x + 4 = (x+2)^2$.",
      "So $T(1 + 2x + x^2) = x^2 + 4x + 4$.",
    ],
  },
  {
    id: "lt-def-3",
    question:
      "Let $T: V \\to W$ be linear and $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2, \\mathbf{b}_3\\}$ a basis for $V$. If $T(\\mathbf{b}_1) = (1,0)$, $T(\\mathbf{b}_2) = (0,1)$, $T(\\mathbf{b}_3) = (1,1)$, find $T(2\\mathbf{b}_1 - \\mathbf{b}_2 + 3\\mathbf{b}_3)$.",
    type: "computation",
    difficulty: "medium",
    hints: [
      "A linear map is completely determined by its values on a basis. Apply linearity:",
      "$T(2\\mathbf{b}_1 - \\mathbf{b}_2 + 3\\mathbf{b}_3) = 2T(\\mathbf{b}_1) - T(\\mathbf{b}_2) + 3T(\\mathbf{b}_3)$",
      "$= 2(1,0) - (0,1) + 3(1,1) = (2,0) + (0,-1) + (3,3) = (5, 2)$.",
    ],
  },
  {
    id: "lt-def-4",
    question:
      "Prove: if $T: V \\to W$ and $S: V \\to W$ are both linear and agree on a basis $\\mathcal{B}$ of $V$ (i.e., $T(\\mathbf{b}) = S(\\mathbf{b})$ for all $\\mathbf{b} \\in \\mathcal{B}$), then $T = S$.",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Consider the map $R = T - S: V \\to W$ defined by $R(\\mathbf{v}) = T(\\mathbf{v}) - S(\\mathbf{v})$. $R$ is linear (difference of linear maps).",
      "$R(\\mathbf{b}) = T(\\mathbf{b}) - S(\\mathbf{b}) = \\mathbf{0}$ for all $\\mathbf{b} \\in \\mathcal{B}$. So $\\mathcal{B} \\subseteq \\ker(R)$.",
      "For any $\\mathbf{v} \\in V$, write $\\mathbf{v} = \\sum \\alpha_i \\mathbf{b}_i$. Then $R(\\mathbf{v}) = \\sum \\alpha_i R(\\mathbf{b}_i) = \\sum \\alpha_i \\mathbf{0} = \\mathbf{0}$. So $R = \\mathbf{0}$, meaning $T = S$. ∎",
    ],
  },
];

export default questions;
