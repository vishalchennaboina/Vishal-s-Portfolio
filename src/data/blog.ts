export type BlogCategory = "AI Projects" | "Web Dev" | "QA Learning" | "Research";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogCategories: BlogCategory[] = ["AI Projects", "Web Dev", "QA Learning", "Research"];

export const blogPosts: BlogPost[] = [
  {
    id: "building-rag-pipeline",
    title: "Building a Production RAG Pipeline",
    excerpt: "A deep dive into building retrieval-augmented generation systems that actually work in production environments.",
    content: `# Building a Production RAG Pipeline

Retrieval-Augmented Generation (RAG) has become the go-to architecture for building AI applications that need access to custom knowledge bases. In this post, I'll walk through how I built a production-ready RAG pipeline.

## The Architecture

The pipeline consists of three main components:

1. **Document Ingestion** — Processing and chunking documents
2. **Vector Store** — Storing embeddings for efficient retrieval
3. **Generation** — Using retrieved context to generate accurate responses

## Key Learnings

- **Chunk size matters**: Too small and you lose context. Too large and you add noise.
- **Hybrid search wins**: Combining semantic search with keyword search gives the best results.
- **Re-ranking is essential**: A cross-encoder re-ranker dramatically improves relevance.

## Code Example

\`\`\`python
from langchain import RAGPipeline

pipeline = RAGPipeline(
    retriever=hybrid_retriever,
    reranker=cross_encoder,
    generator=llm
)

response = pipeline.query("How does the system handle errors?")
\`\`\`

## Conclusion

Building a production RAG system requires careful attention to chunking strategy, retrieval quality, and prompt engineering. The investment pays off with significantly more accurate and grounded responses.`,
    category: "AI Projects",
    date: "2025-12-15",
    readTime: "8 min",
    tags: ["RAG", "LLM", "Python", "Vector DB"],
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    excerpt: "Breaking down RSC architecture and when you should (and shouldn't) use server components.",
    content: `# Understanding React Server Components

React Server Components represent a fundamental shift in how we think about React architecture. Let's break down what they are and when to use them.

## What Are Server Components?

Server Components render on the server and send HTML to the client. They can:

- Access server-side resources directly
- Reduce client-side JavaScript bundle size
- Maintain interactivity through Client Components

## When to Use Them

Use Server Components for:
- **Data fetching** — Direct database access without API routes
- **Static content** — Blog posts, documentation, marketing pages
- **Heavy computations** — Processing that shouldn't happen on the client

## Best Practices

1. Keep client components small and focused
2. Use the "use client" directive sparingly
3. Pass serializable props between server and client components

## Conclusion

RSCs aren't a replacement for client components — they're a complement. Use them where they make sense and keep your architecture simple.`,
    category: "Web Dev",
    date: "2025-11-20",
    readTime: "6 min",
    tags: ["React", "Next.js", "Server Components"],
  },
  {
    id: "automated-testing-strategy",
    title: "Building a Robust Automated Testing Strategy",
    excerpt: "From unit tests to E2E — creating a testing pyramid that actually catches bugs before production.",
    content: `# Building a Robust Automated Testing Strategy

A good testing strategy is the backbone of reliable software. Here's how I structure testing across my projects.

## The Testing Pyramid

- **Unit Tests (70%)** — Fast, isolated, test individual functions
- **Integration Tests (20%)** — Test component interactions
- **E2E Tests (10%)** — Test critical user flows

## Tools I Use

- **Vitest** for unit tests
- **Testing Library** for component tests
- **Playwright** for E2E tests
- **MSW** for API mocking

## Key Principles

1. Test behavior, not implementation
2. Use meaningful test names
3. Keep tests independent
4. Mock at the right boundary

## Conclusion

Invest in your testing infrastructure early. It pays dividends as your codebase grows.`,
    category: "QA Learning",
    date: "2025-10-05",
    readTime: "7 min",
    tags: ["Testing", "QA", "Vitest", "Playwright"],
  },
  {
    id: "transformer-attention-mechanisms",
    title: "Visualizing Transformer Attention Mechanisms",
    excerpt: "An interactive exploration of how attention works in transformer models with custom visualizations.",
    content: `# Visualizing Transformer Attention Mechanisms

Understanding attention is key to understanding modern AI. In this research project, I built interactive visualizations to explore how transformers process language.

## Self-Attention Explained

Self-attention allows each token to attend to every other token in the sequence. The attention weights determine how much each token influences the representation of others.

## Multi-Head Attention

Multiple attention heads learn different types of relationships:
- **Syntactic heads** — Learn grammatical structure
- **Semantic heads** — Capture meaning relationships
- **Positional heads** — Track token positions

## Visualization Approach

I built an interactive tool using D3.js that renders attention patterns as heatmaps and directed graphs, allowing researchers to explore how different layers and heads contribute to model predictions.

## Key Findings

The visualizations revealed that earlier layers tend to focus on local syntax while deeper layers capture longer-range semantic dependencies.`,
    category: "Research",
    date: "2025-09-18",
    readTime: "10 min",
    tags: ["Transformers", "Attention", "NLP", "Visualization"],
  },
  {
    id: "nextjs-performance",
    title: "Next.js Performance Optimization Guide",
    excerpt: "Practical techniques to make your Next.js app blazing fast — from bundle analysis to caching strategies.",
    content: `# Next.js Performance Optimization Guide

Performance directly impacts user experience and SEO. Here are battle-tested techniques I use to optimize Next.js applications.

## Bundle Size Reduction

- Use dynamic imports for heavy components
- Analyze bundles with \`@next/bundle-analyzer\`
- Tree-shake unused library code

## Image Optimization

Next.js Image component handles most cases, but consider:
- Using WebP/AVIF formats
- Implementing blur placeholders
- Setting proper sizes and priority

## Caching Strategies

1. **Static Generation** for content that rarely changes
2. **ISR** for content that updates periodically
3. **Client-side caching** with React Query or SWR

## Conclusion

Performance optimization is an ongoing process. Measure first, optimize second, and always test on real devices.`,
    category: "Web Dev",
    date: "2025-08-22",
    readTime: "5 min",
    tags: ["Next.js", "Performance", "Optimization"],
  },
  {
    id: "fine-tuning-llms",
    title: "Fine-Tuning LLMs for Domain-Specific Tasks",
    excerpt: "A practical guide to fine-tuning language models for specialized applications with limited data.",
    content: `# Fine-Tuning LLMs for Domain-Specific Tasks

Off-the-shelf LLMs are impressive, but fine-tuning unlocks their full potential for specific use cases.

## When to Fine-Tune

- Domain-specific terminology
- Consistent output formatting
- Improved accuracy on niche topics
- Reduced hallucinations in your domain

## Techniques

### LoRA (Low-Rank Adaptation)
The most efficient approach — adds small trainable matrices to existing weights while keeping the base model frozen.

### QLoRA
Combines quantization with LoRA for fine-tuning on consumer hardware.

## Data Preparation

Quality over quantity. A few hundred high-quality examples often outperform thousands of noisy ones.

## Evaluation

Always evaluate on a held-out test set and compare against the base model to ensure fine-tuning actually helps.`,
    category: "AI Projects",
    date: "2025-07-10",
    readTime: "9 min",
    tags: ["LLM", "Fine-tuning", "LoRA", "AI"],
  },
];
