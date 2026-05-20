import type { PracticeQuestion } from "@/types/practice";

const questions: PracticeQuestion[] = [
  {
    id: "vs-def-1",
    question:
      "Verify that $\\mathbb{P}_n(\\mathbb{R})$, the set of all real polynomials of degree $\\leq n$, is a vector space over $\\mathbb{R}$ by checking all ten axioms.",
    type: "verification",
    difficulty: "medium",
    hints: [
      "Start by defining the operations: $(p + q)(x) = p(x) + q(x)$ and $(\\alpha p)(x) = \\alpha p(x)$.",
      "Group the axioms into two categories: the five abelian group axioms for addition, and the five scalar multiplication axioms. Verify each group in turn.",
      "The zero vector is the zero polynomial $p(x) = 0$ (all coefficients are zero). The additive inverse of $p$ is $-p$ (all coefficients negated).",
    ],
    solution:
      "**Operations:** $(p+q)(x)=p(x)+q(x)$ and $(\\alpha p)(x)=\\alpha p(x)$. The degree of a sum of degree-$\\leq n$ polynomials is at most $n$, and scalar multiples stay degree $\\leq n$, so closure holds.\n\n**Abelian group axioms for addition:** (1) Associativity: $(p+q)+r = p+(q+r)$ — both equal the pointwise sum. (2) Commutativity: $p+q=q+p$ by commutativity in $\\mathbb{R}$. (3) Identity: the zero polynomial $\\mathbf{0}(x)=0$ satisfies $p+\\mathbf{0}=p$. (4) Inverses: $(-p)(x)=-p(x)$ satisfies $p+(-p)=\\mathbf{0}$. (5) Closure: degree $\\leq n$ is preserved.\n\n**Scalar multiplication axioms:** (6) Distributivity over vector addition: $\\alpha(p+q)=\\alpha p+\\alpha q$. (7) Distributivity over scalar addition: $(\\alpha+\\beta)p=\\alpha p+\\beta p$. (8) Associativity: $(\\alpha\\beta)p=\\alpha(\\beta p)$. (9) Unit: $1\\cdot p=p$.\n\nAll axioms hold, so $\\mathbb{P}_n(\\mathbb{R})$ is a vector space. $\\blacksquare$",
  },
  {
    id: "vs-def-2",
    question:
      "Let $\\mathbb{F}$ be any field. Show that $\\{\\mathbf{0}\\}$ (the set containing only the zero vector) is a vector space over $\\mathbb{F}$. What are the only possible addition and scalar multiplication operations?",
    type: "proof",
    difficulty: "easy",
    hints: [
      "The only element is $\\mathbf{0}$, so the only possible addition is $\\mathbf{0} + \\mathbf{0} = \\mathbf{0}$, and scalar multiplication must be $\\alpha \\cdot \\mathbf{0} = \\mathbf{0}$.",
      "Check each axiom. Most are trivial because there's only one element. The unit scalar axiom says $1 \\cdot \\mathbf{0} = \\mathbf{0}$, which holds.",
    ],
    solution:
      "The **only possible operations** are $\\mathbf{0}+\\mathbf{0}=\\mathbf{0}$ (since there is only one element) and $\\alpha\\cdot\\mathbf{0}=\\mathbf{0}$ for all $\\alpha\\in\\mathbb{F}$.\n\n**Verification:** (1) Closure under both operations: $\\mathbf{0}+\\mathbf{0}=\\mathbf{0}\\in\\{\\mathbf{0}\\}$ ✓ and $\\alpha\\mathbf{0}=\\mathbf{0}\\in\\{\\mathbf{0}\\}$ ✓. (2) All abelian group axioms hold trivially since there is only one element — both sides of every equation equal $\\mathbf{0}$. (3) All scalar axioms hold: e.g., $1\\cdot\\mathbf{0}=\\mathbf{0}$ ✓, $(\\alpha\\beta)\\mathbf{0}=\\mathbf{0}=\\alpha(\\beta\\mathbf{0})$ ✓. Therefore $\\{\\mathbf{0}\\}$ is a vector space, called the **trivial vector space**. $\\blacksquare$",
  },
  {
    id: "vs-def-3",
    question:
      "Prove the following consequence of the vector space axioms: if $\\alpha \\mathbf{v} = \\mathbf{0}$, then either $\\alpha = 0$ or $\\mathbf{v} = \\mathbf{0}$. *(Hint: use the fact that $\\mathbb{F}$ is a field.)*",
    type: "proof",
    difficulty: "medium",
    hints: [
      "Split into cases: either $\\alpha = 0$ (done) or $\\alpha \\neq 0$. In the second case, since $\\mathbb{F}$ is a field, $\\alpha$ has a multiplicative inverse $\\alpha^{-1}$.",
      "If $\\alpha \\neq 0$, multiply both sides of $\\alpha \\mathbf{v} = \\mathbf{0}$ by $\\alpha^{-1}$ on the left. Use axiom 9 (associativity of scaling) and axiom 10 (unit scalar): $\\mathbf{v} = 1 \\cdot \\mathbf{v} = (\\alpha^{-1}\\alpha)\\mathbf{v} = \\alpha^{-1}(\\alpha \\mathbf{v}) = \\alpha^{-1} \\mathbf{0} = \\mathbf{0}$.",
    ],
    solution:
      "**Proof (Theorem 4, part 3):** Suppose $\\alpha\\mathbf{v}=\\mathbf{0}$.\n\n**Case 1:** $\\alpha=0$. Done — the conclusion holds.\n\n**Case 2:** $\\alpha\\neq 0$. Since $\\mathbb{F}$ is a field, $\\alpha^{-1}$ exists. Apply $\\alpha^{-1}$ to both sides:\n$$\\mathbf{v} = 1\\cdot\\mathbf{v} = (\\alpha^{-1}\\alpha)\\mathbf{v} = \\alpha^{-1}(\\alpha\\mathbf{v}) = \\alpha^{-1}\\mathbf{0} = \\mathbf{0}.$$\nHere we used: (i) the unit scalar axiom $1\\cdot\\mathbf{v}=\\mathbf{v}$; (ii) associativity of scalar multiplication; (iii) Theorem 4 part 2: $\\alpha^{-1}\\mathbf{0}=\\mathbf{0}$.\n\nTherefore $\\mathbf{v}=\\mathbf{0}$. $\\blacksquare$",
  },
  {
    id: "vs-def-4",
    question:
      "Let $V = \\mathbb{R}^+$ (positive reals) with operations $x \\oplus y = xy$ and $\\alpha \\odot x = x^\\alpha$. Find the zero vector, the additive inverse of $x$, and verify axioms 7 and 8 (the two distributivity laws).",
    type: "computation",
    difficulty: "hard",
    hints: [
      "The zero vector $\\mathbf{0}$ satisfies $\\mathbf{0} \\oplus x = x$ for all $x$, i.e., $\\mathbf{0} \\cdot x = x$. So $\\mathbf{0} = 1$.",
      "The additive inverse $(-x)$ satisfies $x \\oplus (-x) = \\mathbf{0}$, i.e., $x \\cdot (-x) = 1$. So $(-x) = x^{-1} = 1/x$.",
      "Verify axiom 7: $\\alpha \\odot (x \\oplus y) = (xy)^\\alpha = x^\\alpha y^\\alpha = (\\alpha \\odot x) \\oplus (\\alpha \\odot y)$. ✓ Verify axiom 8: $(\\alpha + \\beta) \\odot x = x^{\\alpha+\\beta} = x^\\alpha x^\\beta = (\\alpha \\odot x) \\oplus (\\beta \\odot x)$. ✓",
    ],
    solution:
      "This is Example 3.7 from the notes — an exotic vector space on $(\\mathbb{R}^+, \\oplus, \\odot)$ over $(\\mathbb{R},+,\\cdot)$.\n\n**Zero vector:** We need $\\mathbf{0}\\oplus x = x$ for all $x$, i.e., $\\mathbf{0}\\cdot x = x$. So $\\mathbf{0} = 1$ (the number 1 acts as the zero vector!).\n\n**Additive inverse of $x$:** We need $x\\oplus(-x)=\\mathbf{0}=1$, i.e., $x\\cdot(-x)=1$, so $-x = 1/x = x^{-1}$.\n\n**Axiom 4 (distributivity of scalar over vector addition):**\n$$\\alpha\\odot(x\\oplus y) = (xy)^\\alpha = x^\\alpha y^\\alpha = (\\alpha\\odot x)\\oplus(\\alpha\\odot y). \\checkmark$$\n\n**Axiom 5 (distributivity of vector over scalar addition):**\n$$(\\alpha+\\beta)\\odot x = x^{\\alpha+\\beta} = x^\\alpha\\cdot x^\\beta = (\\alpha\\odot x)\\oplus(\\beta\\odot x). \\checkmark$$\n\nThis confirms $(\\mathbb{R}^+,\\oplus,\\odot)$ is a vector space — an isomorphic copy of $(\\mathbb{R},+,\\cdot)$ via the map $x\\mapsto\\ln x$. $\\blacksquare$",
  },
];

export default questions;
