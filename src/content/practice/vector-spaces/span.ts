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
    solution:
      "We ask: does $\\alpha(1,2,0)+\\beta(0,-1,1)=(3,0,-1)$ have a solution?\n\n**Setting up the system:**\n$$\\alpha = 3, \\quad 2\\alpha - \\beta = 0, \\quad \\beta = -1.$$\n\n**Solving:** From equation 1, $\\alpha=3$. From equation 3, $\\beta=-1$. **Check equation 2:** $2(3)-(-1)=7\\neq 0$.\n\nThe system is **inconsistent**, so $(3,0,-1)\\notin\\operatorname{span}\\{(1,2,0),(0,-1,1)\\}$. $\\blacksquare$",
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
    solution:
      "Note that $(2,0,2)=2(1,0,1)$, so the two vectors are **parallel** (linearly dependent).\n\nAny linear combination is:\n$$\\alpha(1,0,1)+\\beta(2,0,2)=(\\alpha+2\\beta)(1,0,1).$$\n\nSetting $t=\\alpha+2\\beta\\in\\mathbb{R}$ (which can take any real value), we get:\n$$\\operatorname{span}\\{(1,0,1),(2,0,2)\\} = \\{(t,0,t)\\mid t\\in\\mathbb{R}\\} = \\operatorname{span}\\{(1,0,1)\\}.$$\n\n**Geometrically:** this is a **line** through the origin in the direction $(1,0,1)$, lying in the $xz$-plane ($y=0$). $\\blacksquare$",
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
    solution:
      "Let $p(x)=a+bx+cx^2\\in\\mathbb{P}_2(\\mathbb{R})$ be arbitrary. We must find $\\alpha,\\beta,\\gamma$ such that:\n$$\\alpha\\cdot 1+\\beta(1+x)+\\gamma(1+x+x^2)=a+bx+cx^2.$$\n\nExpanding the left side:\n$$(\\alpha+\\beta+\\gamma)+(\\beta+\\gamma)x+\\gamma x^2.$$\n\nEquating coefficients of $1,x,x^2$:\n$$\\gamma=c,\\quad \\beta+\\gamma=b\\implies\\beta=b-c,\\quad \\alpha+\\beta+\\gamma=a\\implies\\alpha=a-b.$$\n\nFor any $a,b,c\\in\\mathbb{R}$, this system has the unique solution $\\alpha=a-b,\\;\\beta=b-c,\\;\\gamma=c$. Therefore every $p(x)\\in\\mathbb{P}_2$ is a linear combination of the three given polynomials, so the set **spans** $\\mathbb{P}_2(\\mathbb{R})$. $\\blacksquare$",
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
    ],    solution:
      "**Proof:** Let $\\mathbf{v}\\in\\operatorname{span}(S)$ be arbitrary. By definition, there exist $\\mathbf{s}_1,\\ldots,\\mathbf{s}_k\\in S$ and $\\alpha_1,\\ldots,\\alpha_k\\in\\mathbb{F}$ such that $\\mathbf{v}=\\sum_{i=1}^k\\alpha_i\\mathbf{s}_i$.\n\nSince $S\\subseteq T$, each $\\mathbf{s}_i\\in T$. Therefore $\\mathbf{v}=\\sum_{i=1}^k\\alpha_i\\mathbf{s}_i$ is a linear combination of vectors in $T$, so $\\mathbf{v}\\in\\operatorname{span}(T)$.\n\nSince $\\mathbf{v}\\in\\operatorname{span}(S)$ was arbitrary, $\\operatorname{span}(S)\\subseteq\\operatorname{span}(T)$. $\\blacksquare$\n\n*Remark:* The map $S\\mapsto\\operatorname{span}(S)$ is order-preserving (monotone) for the inclusion partial order.",  },
];

export default questions;
