import type { PracticeQuestion } from '@/types/practice';

export const questions: PracticeQuestion[] = [
  {
    id: 'fields-1',
    type: 'verification',
    difficulty: 'easy',
    question:
      'Explain why $(\\mathbb{Z}, +, \\cdot)$ is NOT a field. Which specific field axiom fails?',
    hints: [
      {
        level: 1,
        text: 'A field requires every nonzero element to have a multiplicative inverse.',
      },
      {
        level: 2,
        text: 'Ask: does $2 \\in \\mathbb{Z}$ have a multiplicative inverse in $\\mathbb{Z}$?',
      },
    ],
    solution:
      'Axiom 9 (multiplicative inverses) fails. The element $2 \\in \\mathbb{Z}$ has no multiplicative inverse in $\\mathbb{Z}$, since $1/2 \\notin \\mathbb{Z}$. More generally, no integer $n$ with $|n| > 1$ has an integer inverse.',
  },
  {
    id: 'fields-2',
    type: 'proof',
    difficulty: 'medium',
    question: 'Prove that $0 \\cdot a = 0$ for any element $a$ in a field $\\mathbb{F}$.',
    hints: [
      {
        level: 1,
        text: 'Use the fact that $0 = 0 + 0$ and apply distributivity.',
      },
      {
        level: 2,
        text: 'You should get $0 \\cdot a = 0 \\cdot a + 0 \\cdot a$. Now use the cancellation law.',
      },
    ],
    solution:
      'Since $0 = 0 + 0$, we have $0 \\cdot a = (0 + 0) \\cdot a = 0 \\cdot a + 0 \\cdot a$ (by distributivity). Adding the additive inverse of $0 \\cdot a$ to both sides: $0 = 0 \\cdot a$. $\\blacksquare$',
  },
  {
    id: 'fields-3',
    type: 'computation',
    difficulty: 'medium',
    question:
      'Construct the multiplication table for $\\mathbb{F}_3 = \\{0, 1, 2\\}$ (arithmetic mod 3) and verify it is a field.',
    hints: [
      {
        level: 1,
        text: 'Fill in $a \\cdot b \\pmod{3}$ for all $a, b \\in \\{0, 1, 2\\}$.',
      },
      {
        level: 2,
        text: 'For the field check, focus on multiplicative inverses of $1$ and $2$: find $x$ such that $1 \\cdot x \\equiv 1$ and $2 \\cdot x \\equiv 1 \\pmod{3}$.',
      },
    ],
    solution:
      'Multiplication table mod 3: $0 \\cdot k = 0$ for all $k$; $1 \\cdot 1 = 1$, $1 \\cdot 2 = 2$; $2 \\cdot 2 = 4 \\equiv 1$. Inverses: $1^{-1} = 1$, $2^{-1} = 2$ (since $2 \\cdot 2 = 1$ in $\\mathbb{F}_3$). All nonzero elements have inverses, distributivity holds (can verify), so $\\mathbb{F}_3$ is a field.',
  },
  {
    id: 'fields-4',
    type: 'proof',
    difficulty: 'hard',
    question:
      'Prove that $\\mathbb{Z}_n$ is a field if and only if $n$ is prime.',
    hints: [
      {
        level: 1,
        text: '($\\Rightarrow$) If $n$ is composite, write $n = ab$ with $1 < a, b < n$ and show $a$ has no inverse.',
      },
      {
        level: 2,
        text: 'If $a$ had an inverse $a^{-1}$, then $a \\cdot a^{-1} = 1$. What does multiplying $n = ab$ by $a^{-1}$ give?',
      },
      {
        level: 3,
        text: '($\\Leftarrow$) If $n = p$ is prime and $a \\not\\equiv 0$, use Bézout\'s theorem: $\\gcd(a, p) = 1$ implies $\\exists\\, s, t$ with $as + pt = 1$.',
      },
    ],
    solution:
      '($\\Rightarrow$) Suppose $n = ab$, $1 < a, b < n$. In $\\mathbb{Z}_n$: $a \\cdot b \\equiv 0 \\pmod{n}$ but $a, b \\neq 0$. By Theorem 6 (zero product), $\\mathbb{Z}_n$ cannot be a field (the zero product property would be violated). ($\\Leftarrow$) Let $p$ be prime and $a \\in \\{1, \\ldots, p-1\\}$. Since $\\gcd(a, p) = 1$, Bézout gives $as + pt = 1$ for some $s, t \\in \\mathbb{Z}$. Reducing mod $p$: $as \\equiv 1 \\pmod{p}$, so $s \\bmod p$ is the inverse of $a$. Hence every nonzero element is invertible, and $\\mathbb{Z}_p$ is a field. $\\blacksquare$',
  },
];
