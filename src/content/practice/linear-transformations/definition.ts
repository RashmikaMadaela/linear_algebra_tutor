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
    solution:
      "**(a) $T(x,y)=(2x-y,x+3y)$ — Linear.**\n\nFor any $(x_1,y_1),(x_2,y_2)\\in\\mathbb{R}^2$ and $\\alpha,\\beta\\in\\mathbb{R}$:\n$$T(\\alpha(x_1,y_1)+\\beta(x_2,y_2))=T(\\alpha x_1+\\beta x_2,\\,\\alpha y_1+\\beta y_2)$$\n$$=(2(\\alpha x_1+\\beta x_2)-(\\alpha y_1+\\beta y_2),\\;(\\alpha x_1+\\beta x_2)+3(\\alpha y_1+\\beta y_2))$$\n$$=\\alpha(2x_1-y_1,x_1+3y_1)+\\beta(2x_2-y_2,x_2+3y_2)=\\alpha T(x_1,y_1)+\\beta T(x_2,y_2). \\checkmark$$\n\nThe matrix of $T$ is $\\begin{pmatrix}2&-1\\\\1&3\\end{pmatrix}$.\n\n**(b) $S(x,y)=(x+1,y)$ — NOT linear.**\n\n$S(\\mathbf{0})=S(0,0)=(1,0)\\neq(0,0)=\\mathbf{0}$. A linear map must satisfy $T(\\mathbf{0})=\\mathbf{0}$, so $S$ fails this necessary condition. (S is an **affine** map, not a linear one.) $\\blacksquare$",
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
    solution:
      "**Linearity:** For any $p,q\\in\\mathbb{P}_2$ and $\\alpha,\\beta\\in\\mathbb{R}$:\n$$T(\\alpha p+\\beta q)(x)=(\\alpha p+\\beta q)(x+1)=\\alpha p(x+1)+\\beta q(x+1)=\\alpha T(p)(x)+\\beta T(q)(x). \\checkmark$$\n\n**Computing $T(1+2x+x^2)$:**\n$$T(1+2x+x^2)(x)=1+2(x+1)+(x+1)^2=1+2x+2+(x^2+2x+1)=x^2+4x+4=(x+2)^2.$$\n\nSo $T(1+2x+x^2)=x^2+4x+4$. Alternatively, since $1+2x+x^2=(1+x)^2=(x+1)^2$, we have $T((x+1)^2)=((x+1)+1)^2=(x+2)^2$. $\\blacksquare$",
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
    solution:
      "By linearity of $T$:\n$$T(2\\mathbf{b}_1-\\mathbf{b}_2+3\\mathbf{b}_3)=2T(\\mathbf{b}_1)-T(\\mathbf{b}_2)+3T(\\mathbf{b}_3)$$\n$$=2(1,0)-(0,1)+3(1,1)=(2,0)+(0,-1)+(3,3)=(5,2).$$\n\n*Key principle:* A linear map is completely determined by its values on any basis. Given $T$ on $\\mathcal{B}$, the value of $T$ on any $\\mathbf{v}=\\sum\\alpha_i\\mathbf{b}_i$ is $T(\\mathbf{v})=\\sum\\alpha_i T(\\mathbf{b}_i)$ by linearity. $\\blacksquare$",
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
    ],    solution:
      "**Proof:** Define $R:=T-S:V\\to W$ by $R(\\mathbf{v})=T(\\mathbf{v})-S(\\mathbf{v})$. Since $T$ and $S$ are linear, $R$ is linear.\n\nBy hypothesis, for every basis vector $\\mathbf{b}_i\\in\\mathcal{B}$:\n$$R(\\mathbf{b}_i)=T(\\mathbf{b}_i)-S(\\mathbf{b}_i)=\\mathbf{0}.$$\n\nNow let $\\mathbf{v}\\in V$ be arbitrary. Since $\\mathcal{B}$ is a basis, $\\mathbf{v}=\\sum_{i=1}^n\\alpha_i\\mathbf{b}_i$ for unique $\\alpha_i\\in\\mathbb{F}$. By linearity of $R$:\n$$R(\\mathbf{v})=R\\!\\left(\\sum_{i=1}^n\\alpha_i\\mathbf{b}_i\\right)=\\sum_{i=1}^n\\alpha_i R(\\mathbf{b}_i)=\\sum_{i=1}^n\\alpha_i\\mathbf{0}=\\mathbf{0}.$$\n\nSince $R(\\mathbf{v})=\\mathbf{0}$ for all $\\mathbf{v}\\in V$, we have $R=0$, i.e., $T=S$. $\\blacksquare$",  },
];

export default questions;
