# LlamaIndex for RAG: 60 Practice Questions

Try each question first. The answer key is at the end.

## Part 1: RAG Pipeline Fundamentals

**1. What is the correct order of stages in a basic LlamaIndex RAG pipeline?**
A. Retrieve → Load → Index → Synthesize
B. Load → Chunk → Embed/Index → Retrieve → Synthesize
C. Embed → Load → Synthesize → Retrieve
D. Chunk → Synthesize → Load → Index

**2. In LlamaIndex, what is a `Document`?**
A. A chunk of text with an embedding attached
B. A saved vector store on disk
C. A generic container around a data source, holding text and metadata
D. A prompt template sent to the LLM

**3. What is a `Node` in LlamaIndex?**
A. A chunk of a Document that carries metadata and relationships to other nodes
B. A server that hosts the vector database
C. A type of retriever
D. A function that calls the LLM

**4. What does `SimpleDirectoryReader` do?**
A. Embeds files into vectors
B. Stores documents in memory
C. Splits text into sentences
D. Loads files from a directory into `Document` objects

**5. What is LlamaHub?**
A. LlamaIndex's hosted LLM
B. A community registry of data loaders, tools, and integrations
C. A built-in vector database
D. A tool for evaluating RAG pipelines

**6. Which call turns an index into something you can ask questions?**
A. `index.as_embedder()`
B. `index.to_prompt()`
C. `index.as_query_engine()`
D. `index.run_llm()`

**7. What is the default `similarity_top_k` for a retriever or query engine built from `VectorStoreIndex`?**
A. 2
B. 5
C. 10
D. 20

**8. Which object holds global defaults such as the LLM, embedding model, and chunk size?**
A. `StorageContext`
B. `ServiceRetriever`
C. `PromptHelper`
D. `Settings`

## Part 2: Node Parsers and Chunking

**9. In `SentenceSplitter`, what unit is `chunk_size` measured in?**
A. Characters
B. Tokens
C. Sentences
D. Paragraphs

**10. What is the purpose of `chunk_overlap`?**
A. To preserve context across the boundary between adjacent chunks
B. To make chunks smaller
C. To remove duplicate documents
D. To speed up embedding

**11. How does `TokenTextSplitter` differ from `SentenceSplitter`?**
A. It uses embeddings to find breakpoints
B. It splits only on paragraph breaks
C. It splits by raw token count without regard for sentence boundaries
D. It only works on code

**12. How does `SemanticSplitterNodeParser` decide where to split?**
A. At a fixed token count
B. At every new line
C. At every heading
D. At points where embedding similarity between adjacent sentences drops

**13. What does `SentenceWindowNodeParser` do?**
A. Merges small chunks into large ones
B. Stores surrounding sentences in each node's metadata for later context expansion
C. Splits text by Markdown headers
D. Removes stop words

**14. What does `HierarchicalNodeParser` produce?**
A. Multi-level chunks (for example, 2048, 512, and 128 tokens) with parent-child links
B. Only one chunk size
C. Keyword tables
D. Graph triples

**15. Which parser is best suited for splitting by headings in `.md` files?**
A. `CodeSplitter`
B. `TokenTextSplitter`
C. `MarkdownNodeParser`
D. `SimpleFileNodeParser`

**16. What does `CodeSplitter` rely on to split source code?**
A. Regular expressions only
B. Line count
C. Sentence boundaries
D. Tree-sitter syntax parsing

**17. What is a common downside of very small chunks?**
A. They are too slow to embed
B. They lose surrounding context needed to answer the question
C. They cannot be stored in a vector store
D. They always exceed the LLM context window

## Part 3: Embeddings and Index Types

**18. What does an embedding model do?**
A. Generates the final answer
B. Splits documents into nodes
C. Converts text into dense vectors that capture meaning
D. Stores vectors on disk

**19. Which class runs a local Hugging Face embedding model?**
A. `HuggingFaceEmbedding`
B. `LocalNodeParser`
C. `HFVectorStore`
D. `SentenceEmbedder`

**20. What does `VectorStoreIndex` do?**
A. Stores raw files only
B. Stores node embeddings and retrieves nodes by similarity
C. Stores a keyword-to-node map
D. Stores LLM prompts

**21. How does `SummaryIndex` (formerly `ListIndex`) behave by default at query time?**
A. It retrieves the top 2 nodes by similarity
B. It retrieves by keyword
C. It routes to a sub-index
D. It sends all nodes to the synthesizer

**22. What does `TreeIndex` build?**
A. A hierarchy of summaries over the nodes
B. A table of keywords
C. A graph of entities
D. A list of embeddings

**23. What does `KeywordTableIndex` do?**
A. Embeds keywords as vectors
B. Ranks nodes by popularity
C. Extracts keywords from nodes and maps each keyword to its nodes
D. Translates queries into SQL

**24. What does `PropertyGraphIndex` represent?**
A. A table of document metadata
B. A graph of entities and relationships extracted from the data
C. A list of chunk summaries
D. A cache of LLM responses

**25. Which similarity measure is most commonly used to compare embeddings?**
A. Hamming distance
B. Edit distance
C. Jaccard index
D. Cosine similarity

**26. Why must the same embedding model be used for indexing and querying?**
A. So the query and document vectors live in the same vector space
B. To avoid API charges
C. To make chunks the same size
D. To keep the LLM from hallucinating

## Part 4: Storage and Vector Stores

**27. What does `StorageContext` bundle together?**
A. Only the LLM and the embedding model
B. Only prompts
C. The docstore, index store, and vector store
D. Only the retriever

**28. How do you persist an index to disk?**
A. `index.save_llm()`
B. `index.storage_context.persist(persist_dir=...)`
C. `index.export_nodes()`
D. `Settings.persist()`

**29. Which function reloads a persisted index?**
A. `index.reload()`
B. `Settings.load()`
C. `SimpleDirectoryReader.load()`
D. `load_index_from_storage()`

**30. What vector store is used if you don't specify one?**
A. `SimpleVectorStore`, which is in memory
B. Chroma
C. Pinecone
D. Qdrant

**31. How do you use an external vector store such as Chroma?**
A. Pass it to `Settings.llm`
B. Wrap it in `ChromaVectorStore` and pass it through `StorageContext.from_defaults(vector_store=...)`
C. Pass it to `SimpleDirectoryReader`
D. Set it as the response mode

## Part 5: Retrieval

**32. What does `index.as_retriever().retrieve(query)` return?**
A. A final answer string
B. A single embedding
C. A list of `NodeWithScore` objects
D. A prompt template

**33. What does a `NodeWithScore` contain?**
A. Only the node text
B. Only the score
C. The query and the response
D. The node and its relevance score

**34. What is `MetadataFilters` used for?**
A. Restricting retrieval to nodes whose metadata matches given conditions
B. Rewriting the user's query
C. Compressing embeddings
D. Changing the chunk size

**35. What does hybrid search combine?**
A. Two different LLMs
B. Dense vector search and sparse keyword search
C. Two embedding dimensions
D. Chunking and synthesis

**36. What kind of retrieval does `BM25Retriever` perform?**
A. Dense embedding retrieval
B. Graph traversal
C. Sparse keyword-based retrieval
D. Random sampling

**37. What does HyDE (`HyDEQueryTransform`) do?**
A. Hides metadata from the LLM
B. Splits queries into sub-questions
C. Compresses retrieved nodes
D. Has the LLM write a hypothetical answer and embeds that for retrieval

**38. What does `AutoMergingRetriever` do?**
A. Merges retrieved child chunks into their parent chunk when enough siblings are retrieved
B. Merges two vector stores
C. Merges duplicate documents
D. Merges multiple LLM answers

## Part 6: Postprocessing and Response Synthesis

**39. When do node postprocessors run?**
A. Before the documents are loaded
B. After retrieval and before response synthesis
C. During embedding
D. After the LLM answers

**40. What does `SimilarityPostprocessor(similarity_cutoff=0.7)` do?**
A. Boosts all scores by 0.7
B. Limits chunk size to 0.7
C. Removes retrieved nodes scoring below the cutoff
D. Sets the temperature of the LLM

**41. What is the role of a reranker such as `SentenceTransformerRerank`?**
A. Re-embeds the documents
B. Rewrites the query
C. Splits nodes further
D. Reorders retrieved nodes with a model that scores query-node relevance more precisely

**42. What is the default `response_mode` of a query engine?**
A. `compact`
B. `refine`
C. `tree_summarize`
D. `no_text`

**43. How does the `refine` response mode work?**
A. It answers using all chunks in one call
B. It builds an initial answer from the first chunk, then refines it with each subsequent chunk
C. It skips the LLM entirely
D. It summarizes chunks into a tree

**44. When is `tree_summarize` most useful?**
A. When you want zero LLM calls
B. When you need keyword extraction
C. When summarizing many chunks, since it recursively combines them bottom-up
D. When you only need one chunk

**45. What does `response_mode="no_text"` do?**
A. Returns an empty string
B. Returns only the LLM's reasoning
C. Returns the embeddings
D. Retrieves nodes without calling the LLM

**46. How can you customize the prompt used by a query engine?**
A. Define a `PromptTemplate` and apply it with `query_engine.update_prompts()`
B. Edit the vector store
C. Change the chunk overlap
D. Rename the index

**47. What does `query_engine.get_prompts()` return?**
A. The retrieved nodes
B. The prompt templates used by the engine's components
C. The chat history
D. The embeddings

## Part 7: Query Engines, Chat, and Advanced Patterns

**48. What does `RouterQueryEngine` do?**
A. Routes documents to different folders
B. Routes embeddings to GPUs
C. Uses a selector to pick the best query engine for each query
D. Routes API keys

**49. What does `SubQuestionQueryEngine` do?**
A. Removes questions the LLM can't answer
B. Translates questions
C. Caches questions
D. Breaks a complex query into sub-questions and sends them to the relevant tools

**50. How does a chat engine differ from a query engine?**
A. It maintains conversation history across turns
B. It doesn't use an LLM
C. It doesn't use retrieval
D. It only works with SummaryIndex

**51. What does the `condense_plus_context` chat mode do?**
A. Compresses embeddings
B. Condenses the history and new message into a standalone question, then retrieves context and answers
C. Skips retrieval
D. Condenses documents before indexing

**52. What is `QueryEngineTool` used for?**
A. Evaluating answers
B. Splitting documents
C. Wrapping a query engine so an agent can call it as a tool
D. Persisting indexes

**53. What is the main benefit of `IngestionPipeline`?**
A. It replaces the LLM
B. It stores chat history
C. It generates synthetic questions
D. It runs transformations such as chunking and embedding, with caching to avoid reprocessing

**54. Which of these can be a transformation in an `IngestionPipeline`?**
A. A `SentenceSplitter` node parser
B. A `ChatEngine`
C. A `QueryEngineTool`
D. A `RouterQueryEngine`

## Part 8: Evaluation

**55. What does `FaithfulnessEvaluator` check?**
A. Whether the query is well written
B. Whether the response is supported by the retrieved context (no hallucination)
C. Whether chunks are the right size
D. Whether embeddings are normalized

**56. What does `RelevancyEvaluator` check?**
A. Response speed
B. Token usage
C. Whether the response and retrieved context are relevant to the query
D. Chunk overlap

**57. What does hit rate measure in retrieval evaluation?**
A. Average LLM latency
B. Cache hits
C. The number of documents indexed
D. The fraction of queries where the expected node appears in the top-k results

**58. What does MRR (Mean Reciprocal Rank) measure?**
A. How high the first relevant result ranks, averaged across queries
B. The mean number of retrieved chunks
C. The mean response length
D. The mean embedding dimension

**59. What does `generate_question_context_pairs` do?**
A. Retrieves question-answer pairs from the web
B. Uses an LLM to create synthetic questions from nodes for building an evaluation dataset
C. Trains an embedding model
D. Merges two indexes

**60. What does `CorrectnessEvaluator` compare?**
A. The query against the context
B. The context against the nodes
C. The generated answer against a reference answer
D. Two embedding models

---

## Answer Key

1. **B**: Load, chunk, embed and index, retrieve, then synthesize.
2. **C**: A Document wraps a source's text and metadata.
3. **A**: Nodes are chunks with metadata and relationships (source, previous, next).
4. **D**: It reads files from a directory into Documents.
5. **B**: LlamaHub is a community registry of loaders, tools, and packs.
6. **C**: `as_query_engine()` builds the query interface.
7. **A**: The default `similarity_top_k` is 2.
8. **D**: `Settings` holds global defaults (LLM, embed model, chunk size).
9. **B**: Chunk size is measured in tokens.
10. **A**: Overlap preserves context across chunk boundaries.
11. **C**: It cuts by token count, ignoring sentences.
12. **D**: It splits where embedding similarity between sentences drops.
13. **B**: It keeps neighboring sentences in metadata for later expansion.
14. **A**: It builds multiple chunk levels with parent-child links.
15. **C**: `MarkdownNodeParser` splits on headers.
16. **D**: `CodeSplitter` uses tree-sitter to parse code structure.
17. **B**: Small chunks often lack the context needed to answer.
18. **C**: Embeddings map text to dense semantic vectors.
19. **A**: `HuggingFaceEmbedding` runs local HF models.
20. **B**: It stores node embeddings and retrieves by similarity.
21. **D**: By default it returns all nodes for synthesis.
22. **A**: `TreeIndex` builds a hierarchy of summaries.
23. **C**: It maps extracted keywords to nodes.
24. **B**: It models entities and relationships as a graph.
25. **D**: Cosine similarity is the usual metric.
26. **A**: Vectors from different models aren't comparable.
27. **C**: It bundles the docstore, index store, and vector store.
28. **B**: Use `storage_context.persist(persist_dir=...)`.
29. **D**: `load_index_from_storage()` reloads a persisted index.
30. **A**: The default is the in-memory `SimpleVectorStore`.
31. **B**: Wrap it in `ChromaVectorStore` and pass it via `StorageContext`.
32. **C**: Retrievers return `NodeWithScore` lists.
33. **D**: It pairs a node with its score.
34. **A**: Metadata filters limit retrieval to matching nodes.
35. **B**: Hybrid search combines dense and sparse retrieval.
36. **C**: BM25 is sparse keyword retrieval.
37. **D**: HyDE embeds an LLM-written hypothetical answer.
38. **A**: It merges child chunks into the parent when enough are retrieved.
39. **B**: They run after retrieval and before synthesis.
40. **C**: It filters out nodes below the score cutoff.
41. **D**: Rerankers reorder nodes with finer relevance scoring.
42. **A**: The default mode is `compact`.
43. **B**: Refine builds an answer chunk by chunk.
44. **C**: `tree_summarize` combines chunks recursively, which suits summarization.
45. **D**: `no_text` returns the retrieved nodes without calling the LLM.
46. **A**: Use `PromptTemplate` with `update_prompts()`.
47. **B**: It returns the prompt templates in use.
48. **C**: The router picks a query engine per query.
49. **D**: It decomposes complex queries into sub-questions.
50. **A**: Chat engines keep conversation history.
51. **B**: It rewrites the history plus the new message into a standalone question, then retrieves.
52. **C**: It exposes a query engine as an agent tool.
53. **D**: It runs transformations with caching.
54. **A**: Node parsers like `SentenceSplitter` are valid transformations.
55. **B**: Faithfulness checks that the answer is grounded in the context.
56. **C**: Relevancy checks the response and context against the query.
57. **D**: Hit rate is the share of queries with the expected node in the top-k.
58. **A**: MRR averages the reciprocal rank of the first relevant result.
59. **B**: It generates synthetic questions for evaluation datasets.
60. **C**: It compares the generated answer to a reference answer.
