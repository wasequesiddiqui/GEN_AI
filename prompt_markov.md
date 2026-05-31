# Reusable HTML Guide Prompt Template

Use this prompt to generate a new topic page with the same structure, styling, and interactive behavior as `RNN.html`.

**Purpose:** Each generated HTML page serves as a focused **study guide** for the [Chartered Certifications CGAI (Certified Generative AI)](https://charteredcertifications.com/learning/courses/cgai) exam. The guides distill a single topic into digestible concept cards, architecture equations, training & regularization tips, runnable code, and comparison tables — everything needed to review and retain exam-relevant material quickly.

## Prompt

Create a complete self-contained HTML document similar to the existing `RNN.html` page.

**This HTML page is a study guide for the [CGAI (Certified Generative AI) exam](https://charteredcertifications.com/learning/courses/cgai).** The content should be accurate, exam-focused, and structured to help a learner review, understand, and retain the material. Prioritize clarity, practical code examples, and concise explanations that align with the CGAI syllabus.

The page should include:

1. A responsive `<head>` with the same CSS styles and theme as `RNN.html`.
2. A top header section:
   - badge label
   - main title with a highlighted keyword
   - short tagline
   - intro paragraph describing the topic and what the guide covers

3. An infographic area:
   - image file name and alt text
   - fallback diagram block for when the image is missing
   - caption text

4. A sticky tab navigation with seven tabs:
   - All Hyperparameters
   - Architecture
   - Training
   - Regularization
   - Full Code
   - Summary & Comparison
   - 🧠 Quiz

5. A first tab panel with 10 concept cards:
   - each card has an icon, title, description, code snippet, and either a tip/warn/good note

6. An Architecture tab panel:
   - heading and intro text
   - 4 equation blocks
   - an explanation card with breakdown items for each equation term
   - additional cards summarizing the main architecture concepts

7. A Training tab panel:
   - heading and intro text
   - 4 cards describing training hyperparameters and examples

8. A Regularization tab panel:
   - heading and intro text
   - 4 cards describing regularization/tuning techniques with examples

9. A Full Code tab panel:
   - runnable code example in a syntax-highlighted block
   - each key hyperparameter visibly annotated with numbered labels
   - a short note below the code block

10. A Summary tab panel:
    - summary table of the 10 items
    - comparison grid of learned parameters vs hyperparameters
    - a baseline config card
    - a feature comparison table if relevant

11. A Quiz tab panel (🧠 Quiz):
    - heading and intro text inviting the learner to test their knowledge
    - a progress bar showing answered / total questions
    - 10 multiple-choice questions (4 options each: A, B, C, D)
    - each question is a card with:
      - question number and text
      - 4 clickable option buttons with letter badges
      - selected state highlighting (accent color)
      - "Check Answer" button that locks the question and reveals:
        - correct answer highlighted in green
        - wrong answer (if selected) highlighted in red
        - a detailed explanation/feedback block below the options
      - "Next →" button to scroll to the next question
    - final "🏆 See Results" button on the last question
    - scoreboard showing: score fraction (e.g., 8/10), percentage, and a grade message
    - "🔄 Restart Quiz" button to reset all answers and retake
    - quiz state is managed in JS: tracks answers, locked status, score, and finished state
    - quiz is lazily initialized on first visit to the Quiz tab
    - questions should span the topic's key concepts: theory, algorithms, hyperparameters, equations, and Gen AI applications

12. A back-to-top button and JavaScript:
    - tab switching logic
    - image fallback logic
    - quiz rendering, answer checking, progress tracking, scoreboard, and restart logic
    - smooth scrolling
    - a console-ready status message

Use the same visual styling, layout, and class names as `RNN.html`, but replace all RNN-specific content with content for the new topic.

## Fill-in fields

- page title
- badge label
- main heading
- tagline
- intro paragraph
- infographic image filename
- infographic alt text
- 10 section cards: title, description, example code, tip/note
- architecture equations and term breakdowns
- training hyperparameter cards
- regularization/tuning cards
- full code sample for the topic
- summary table rows
- comparison rows
- baseline configuration items
- 10 quiz questions (each with: question text, 4 options, correct answer index 0–3, and detailed explanation text)

## Example usage

Create an HTML study guide for "Transformer Attention Hyperparameters" — a topic relevant to the **CGAI exam**. Follow the same structure as `RNN.html`. Use:
- badge: "🔧 Transformer · Attention"
- title: "Transformer Attention – Hyperparameters"
- tagline: one concise sentence about tuning attention models
- intro paragraph describing the topic and guide scope
- infographic image filename: `Transformer_Attention_Nutshell.png`
- 10 cards covering attention heads, model depth, embedding size, dropout, learning rate, batch size, warmup steps, optimizer, sequence length, loss
- architecture section with attention equations and term breakdown
- training and regularization sections with Transformer-specific advice
- summary and comparison tables
- 10 quiz questions testing attention hyperparameters, architecture concepts, and Gen AI applications with detailed feedback for each answer
