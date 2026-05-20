import type { PracticeQuestion } from '@/types/practice';

export const questions: PracticeQuestion[] = [
  {
    id: 'groups-1',
    type: 'proof',
    difficulty: 'medium',
    question:
      'Let $(G, \\ast)$ be a group with identity $e$. Prove that for any $a \\in G$, $(a^{-1})^{-1} = a$.',
    hints: [
      {
        level: 1,
        text: 'By definition, $(a^{-1})^{-1}$ is the unique element that, when combined with $a^{-1}$, gives $e$.',
      },
      {
        level: 2,
        text: 'Show that $a$ itself satisfies the definition of the inverse of $a^{-1}$: compute $a^{-1} \\ast a$.',
      },
    ],
    solution:
      'By the definition of inverse, $a^{-1} \\ast a = e$ and $a \\ast a^{-1} = e$. Therefore $a$ is an inverse of $a^{-1}$. By Theorem 2 (uniqueness of inverses), $(a^{-1})^{-1} = a$. $\\blacksquare$',
  },
  {
    id: 'groups-2',
    type: 'verification',
    difficulty: 'easy',
    question:
      'Is $(\\mathbb{Q} \\setminus \\{0\\}, \\times)$ a group? Verify all group axioms.',
    hints: [
      {
        level: 1,
        text: 'Check: is the product of two nonzero rationals always nonzero and rational?',
      },
      {
        level: 2,
        text: 'The identity is $1$. For inverses: what is the multiplicative inverse of $p/q$?',
      },
    ],
    solution:
      'Yes. (1) Closure: if $a, b \\in \\mathbb{Q}\\setminus\\{0\\}$, then $ab \\in \\mathbb{Q}$ and $ab \\neq 0$. (2) Associativity: inherited from $\\mathbb{Q}$. (3) Identity: $1 \\in \\mathbb{Q}\\setminus\\{0\\}$ and $1 \\cdot a = a$. (4) Inverses: for $a = p/q$, its inverse is $q/p \\in \\mathbb{Q}\\setminus\\{0\\}$. Hence $(\\mathbb{Q}\\setminus\\{0\\}, \\times)$ is a group (in fact abelian).',
  },
  {
    id: 'groups-3',
    type: 'computation',
    difficulty: 'easy',
    question:
      'In $(\\mathbb{Z}_6, +_6)$, compute the inverse of each element and find the order of the element $2$.',
    hints: [
      {
        level: 1,
        text: 'The inverse of $a$ in $(\\mathbb{Z}_6, +_6)$ is $6 - a$ (for $a \\neq 0$).',
      },
      {
        level: 2,
        text: 'The order of $2$ is the smallest $n$ such that $2 + 2 + \\cdots + 2$ ($n$ times) $\\equiv 0 \\pmod{6}$.',
      },
    ],
    solution:
      'Inverses: $0^{-1}=0$, $1^{-1}=5$, $2^{-1}=4$, $3^{-1}=3$, $4^{-1}=2$, $5^{-1}=1$. Order of $2$: we need the smallest $n$ with $2n \\equiv 0 \\pmod 6$, i.e., $6 \\mid 2n$, i.e., $3 \\mid n$. So $\\text{ord}(2) = 3$.',
  },
  {
    id: 'groups-4',
    type: 'proof',
    difficulty: 'hard',
    question:
      'Prove that a group $G$ is abelian if and only if $(ab)^{-1} = a^{-1}b^{-1}$ for all $a, b \\in G$.',
    hints: [
      {
        level: 1,
        text: '($\\Rightarrow$) If $G$ is abelian, use $ab = ba$ to simplify $(ab)^{-1} = b^{-1}a^{-1}$.',
      },
      {
        level: 2,
        text: '($\\Leftarrow$) Start from $(ab)^{-1} = a^{-1}b^{-1}$ and also from the socks-shoes property $(ab)^{-1} = b^{-1}a^{-1}$.',
      },
      {
        level: 3,
        text: 'For the converse: equate $a^{-1}b^{-1} = b^{-1}a^{-1}$, then replace $a$ by $a^{-1}$ and $b$ by $b^{-1}$.',
      },
    ],
    solution:
      '($\\Rightarrow$) Assume $G$ is abelian. By socks-shoes, $(ab)^{-1} = b^{-1}a^{-1} = a^{-1}b^{-1}$ (using commutativity). ($\\Leftarrow$) Assume $(ab)^{-1} = a^{-1}b^{-1}$ for all $a, b$. By socks-shoes $(ab)^{-1} = b^{-1}a^{-1}$. So $a^{-1}b^{-1} = b^{-1}a^{-1}$ for all $a, b$. Replacing $a \\to a^{-1}$ and $b \\to b^{-1}$: $(a^{-1})^{-1}(b^{-1})^{-1} = (b^{-1})^{-1}(a^{-1})^{-1}$, i.e., $ab = ba$. So $G$ is abelian. $\\blacksquare$',
  },
];
