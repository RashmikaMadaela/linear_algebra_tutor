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
  },
];

export default questions;
