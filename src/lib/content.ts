import type { Section } from '@/types/lesson';

export const SYLLABUS: Section[] = [
  {
    slug: 'algebraic-structures',
    number: 'I',
    title: 'Algebraic Structures',
    description:
      'Begin with the abstract algebraic foundations — groups and fields — that underpin all of linear algebra.',
    color: 'text-violet-400',
    icon: '⊕',
    lessons: [
      {
        slug: 'groups',
        title: 'Groups',
        description:
          'Definition of a group, subgroups, and the key examples that appear throughout linear algebra.',
        estimatedMinutes: 25,
        notesRef: { definitions: [1, 2], theorems: [1], examples: [1] },
      },
      {
        slug: 'fields',
        title: 'Fields',
        description:
          'Fields as the scalar systems for vector spaces — real numbers, complex numbers, and finite fields.',
        estimatedMinutes: 20,
        notesRef: { definitions: [3], theorems: [2, 3], examples: [2] },
      },
    ],
  },
  {
    slug: 'vector-spaces',
    number: 'II',
    title: 'Vector Spaces',
    description:
      'The central object of linear algebra. Master the axioms, subspaces, span, independence, bases, and dimension.',
    color: 'text-blue-400',
    icon: '→',
    lessons: [
      {
        slug: 'definition',
        title: 'Vector Space Definition',
        description:
          'The eight axioms of a vector space over a field F, and first examples.',
        estimatedMinutes: 30,
        notesRef: { definitions: [4, 5], theorems: [4, 5], examples: [3, 4, 5] },
        prerequisites: [
          { slug: 'algebraic-structures', lesson: 'fields', label: 'Fields' },
        ],
      },
      {
        slug: 'subspaces',
        title: 'Subspaces',
        description:
          'Criteria for a subset to be a subspace, the subspace test, and intersection/sum of subspaces.',
        estimatedMinutes: 25,
        notesRef: { definitions: [6, 7], theorems: [6, 7, 8], examples: [6, 7] },
        prerequisites: [
          { slug: 'vector-spaces', lesson: 'definition', label: 'Vector Spaces' },
        ],
      },
      {
        slug: 'span',
        title: 'Span & Linear Combinations',
        description: 'Spanning sets, the span of a set, and generating subspaces.',
        estimatedMinutes: 20,
        notesRef: { definitions: [8], theorems: [9], examples: [8] },
      },
      {
        slug: 'linear-independence',
        title: 'Linear Independence',
        description:
          'Linear dependence and independence, and the relationship to unique representations.',
        estimatedMinutes: 25,
        notesRef: { definitions: [9, 10], theorems: [10, 11], examples: [9] },
      },
      {
        slug: 'bases',
        title: 'Bases',
        description:
          'Bases as minimal spanning sets / maximal independent sets, coordinates.',
        estimatedMinutes: 30,
        notesRef: { definitions: [11, 12], theorems: [12, 13, 14], examples: [10] },
      },
      {
        slug: 'dimension',
        title: 'Dimension',
        description:
          'Dimension of a vector space, the dimension theorem, and finite-dimensional spaces.',
        estimatedMinutes: 25,
        notesRef: { definitions: [13], theorems: [15, 16, 17], examples: [11] },
      },
    ],
  },
  {
    slug: 'inner-product-spaces',
    number: 'III',
    title: 'Inner Product Spaces',
    description:
      'Add geometry to vector spaces via inner products. Study orthogonality, Gram–Schmidt, and normed/metric structure.',
    color: 'text-cyan-400',
    icon: '⟨·,·⟩',
    lessons: [
      {
        slug: 'inner-products',
        title: 'Inner Products',
        description:
          'Definition of an inner product (real and complex), standard examples.',
        estimatedMinutes: 25,
        notesRef: { definitions: [14, 15], examples: [12, 13] },
      },
      {
        slug: 'inequalities',
        title: 'Cauchy–Schwarz & Triangle Inequality',
        description:
          'Cauchy–Schwarz inequality, triangle inequality, and their geometric meaning.',
        estimatedMinutes: 20,
        notesRef: { theorems: [18, 19] },
      },
      {
        slug: 'orthogonality',
        title: 'Orthogonality',
        description:
          'Orthogonal and orthonormal sets, orthogonal complements, and projection.',
        estimatedMinutes: 25,
        notesRef: { definitions: [16, 17, 18], theorems: [20, 21] },
      },
      {
        slug: 'gram-schmidt',
        title: 'Gram–Schmidt Process',
        description:
          'Constructing orthonormal bases from any basis via the Gram–Schmidt algorithm.',
        estimatedMinutes: 30,
        notesRef: { theorems: [22], examples: [14, 15] },
      },
      {
        slug: 'orthogonal-polynomials',
        title: 'Orthogonal Polynomials',
        description: 'Applying Gram–Schmidt to polynomial spaces; Legendre polynomials.',
        estimatedMinutes: 25,
        notesRef: { examples: [16] },
      },
      {
        slug: 'orthogonal-complements',
        title: 'Orthogonal Complements',
        description:
          'The orthogonal complement of a subspace and the direct sum decomposition.',
        estimatedMinutes: 20,
        notesRef: { definitions: [19], theorems: [23, 24] },
      },
      {
        slug: 'normed-spaces',
        title: 'Normed Spaces',
        description: 'Norms induced by inner products, equivalence of norms.',
        estimatedMinutes: 20,
        notesRef: { definitions: [20] },
      },
      {
        slug: 'metric-spaces',
        title: 'Metric Spaces',
        description: 'Metrics from norms, metric space axioms, and completeness.',
        estimatedMinutes: 20,
        notesRef: { definitions: [21] },
      },
    ],
  },
  {
    slug: 'linear-transformations',
    number: 'IV',
    title: 'Linear Transformations',
    description:
      'The maps between vector spaces. Understand kernels, images, rank-nullity, and matrix representations.',
    color: 'text-emerald-400',
    icon: 'T',
    lessons: [
      {
        slug: 'definition',
        title: 'Linear Transformations',
        description:
          'Definition of a linear map, examples: projection, differentiation, integration.',
        estimatedMinutes: 25,
        notesRef: { definitions: [22, 23], examples: [17, 18] },
      },
      {
        slug: 'kernel-image',
        title: 'Kernel & Image',
        description:
          'Null space and image of a linear map; Rank-Nullity Theorem with full proof.',
        estimatedMinutes: 30,
        notesRef: { definitions: [20], theorems: [24, 25], examples: [16, 17] },
        prerequisites: [
          { slug: 'linear-transformations', lesson: 'definition', label: 'Linear Transformations' },
        ],
      },
      {
        slug: 'isomorphisms',
        title: 'Isomorphisms',
        description:
          'Bijective linear maps, invertibility, and the isomorphism theorem.',
        estimatedMinutes: 20,
        notesRef: { theorems: [25] },
        prerequisites: [
          { slug: 'linear-transformations', lesson: 'kernel-image', label: 'Kernel & Image' },
        ],
      },
      {
        slug: 'matrix-representations',
        title: 'Matrix of a Linear Transformation',
        description:
          'Representing a linear map as a matrix with respect to chosen bases; Definition 21.',
        estimatedMinutes: 30,
        notesRef: { definitions: [21], theorems: [26], examples: [18] },
        prerequisites: [
          { slug: 'linear-transformations', lesson: 'isomorphisms', label: 'Isomorphisms' },
        ],
      },
      {
        slug: 'change-of-basis',
        title: 'Change of Basis',
        description:
          'Transition matrices, RREF, row/column spaces, and rank — Theorem 26 and 27.',
        estimatedMinutes: 25,
        notesRef: { definitions: [22], theorems: [26, 27] },
        prerequisites: [
          { slug: 'linear-transformations', lesson: 'matrix-representations', label: 'Matrix of LT' },
        ],
      },
    ],
  },
  {
    slug: 'spectral-theory',
    number: 'V',
    title: 'Spectral Theory',
    description:
      'Eigenvalues, eigenvectors, diagonalization — the spectral decomposition of linear operators.',
    color: 'text-amber-400',
    icon: 'λ',
    lessons: [
      {
        slug: 'eigenvalues',
        title: 'Eigenvalues & Eigenvectors',
        description:
          'Definitions, geometric meaning, and first examples.',
        estimatedMinutes: 25,
        notesRef: { definitions: [27, 28], examples: [21] },
      },
      {
        slug: 'characteristic-polynomial',
        title: 'Characteristic Polynomial',
        description:
          'The characteristic equation det(A − λI) = 0 and its roots.',
        estimatedMinutes: 20,
        notesRef: { definitions: [29], theorems: [30] },
      },
      {
        slug: 'similar-matrices',
        title: 'Similar Matrices',
        description:
          'Similarity as a change of basis; invariants under similarity.',
        estimatedMinutes: 20,
        notesRef: { definitions: [30], theorems: [31] },
      },
      {
        slug: 'multiplicities',
        title: 'Algebraic & Geometric Multiplicities',
        description:
          'Algebraic multiplicity vs. geometric multiplicity, and their relationship.',
        estimatedMinutes: 25,
        notesRef: { definitions: [31, 32] },
      },
      {
        slug: 'diagonalization',
        title: 'Diagonalization',
        description:
          'When is a matrix diagonalizable? Conditions and the diagonalization algorithm.',
        estimatedMinutes: 30,
        notesRef: { theorems: [32, 33], examples: [22] },
      },
    ],
  },
  {
    slug: 'decompositions',
    number: 'VI',
    title: 'Matrix Decompositions',
    description:
      'Powerful factorizations: spectral theorem, Jordan form, QR, and SVD — tools for applied linear algebra.',
    color: 'text-rose-400',
    icon: '∑',
    lessons: [
      {
        slug: 'hermitian-unitary',
        title: 'Hermitian & Unitary Operators',
        description:
          'Spectral theorem for Hermitian operators, unitary matrices and their properties.',
        estimatedMinutes: 30,
      },
      {
        slug: 'positive-definite',
        title: 'Positive Definite Matrices',
        description:
          'Positive (semi)definite matrices, tests, and the Cholesky factorization.',
        estimatedMinutes: 25,
      },
      {
        slug: 'jordan-decomposition',
        title: 'Jordan Normal Form',
        description:
          'Jordan blocks, Jordan basis, and the Jordan–Chevalley decomposition.',
        estimatedMinutes: 40,
      },
      {
        slug: 'qr-decomposition',
        title: 'QR Decomposition',
        description:
          'Gram–Schmidt as QR, least squares via QR, and the QR algorithm.',
        estimatedMinutes: 30,
      },
      {
        slug: 'svd',
        title: 'Singular Value Decomposition',
        description:
          'SVD: existence, geometric interpretation, pseudoinverse, and low-rank approximation.',
        estimatedMinutes: 40,
      },
    ],
  },
];

/** Flat map: sectionSlug → lessonSlug → { section, lesson } */
export function getLessonMeta(
  sectionSlug: string,
  lessonSlug: string
): { section: Section; lessonIndex: number } | null {
  const section = SYLLABUS.find((s) => s.slug === sectionSlug);
  if (!section) return null;
  const lessonIndex = section.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return null;
  return { section, lessonIndex };
}

/** Adjacent lessons for prev/next navigation */
export function getAdjacentLessons(
  sectionSlug: string,
  lessonSlug: string
) {
  const allLessons: Array<{ sectionSlug: string; lessonSlug: string; title: string }> = [];
  for (const section of SYLLABUS) {
    for (const lesson of section.lessons) {
      allLessons.push({
        sectionSlug: section.slug,
        lessonSlug: lesson.slug,
        title: lesson.title,
      });
    }
  }
  const idx = allLessons.findIndex(
    (l) => l.sectionSlug === sectionSlug && l.lessonSlug === lessonSlug
  );
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  };
}

export const TOTAL_LESSONS = SYLLABUS.reduce((sum, s) => sum + s.lessons.length, 0);
