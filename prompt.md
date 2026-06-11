# Reusable HTML Guide Prompt Template

Use this prompt to generate a new topic page with the same structure, styling, and interactive behavior as `RNN.html`.

**Purpose:** Each generated HTML page serves as a focused **study guide** for the [Chartered Certifications CGAI (Certified Generative AI)](https://charteredcertifications.com/learning/courses/cgai) exam. The guides distill a single topic into digestible concept cards, architecture equations, training & regularization tips, runnable code, comparison tables, and a self-assessment quiz — everything needed to review and retain exam-relevant material quickly.

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
   - Quiz

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

11. A back-to-top button and JavaScript:
    - tab switching logic
    - image fallback logic
    - smooth scrolling
    - a console-ready status message

12. A Quiz tab panel with at least 20 multiple-choice questions:
    - progress bar showing answered count out of total
    - A/B/C/D option buttons with selected/correct/incorrect visual states
    - previous and next navigation buttons
    - submit button to score the quiz
    - score display with a radial progress circle and grade message
    - retake button to reset the quiz
    - detailed explanations shown after submission for each question
    - quiz CSS styles matching the page theme (option hover, selection, correct/incorrect feedback)
    - quiz JavaScript: question data array, state management (currentIndex, answers[], submitted flag), render/select/navigate/submit/restart functions
    - quiz auto-initializes when its tab is clicked

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
- 20+ quiz questions: question text, 4 options (A/B/C/D), correct answer index, explanation for each

## Example usage

Create an HTML study guide for "Understanding in Detail Sequence to Sequence Models" — a topic relevant to the **CGAI exam**. Follow the same structure as `RNN.html`. Use:
- badge: "🔧 Basics of Sequence to Sequence Models"
- title: "Basics of Sequence to Sequence Models"
- tagline: one concise sentence about tuning attention models
- intro paragraph describing the topic and guide scope
- infographic image filename: `SEQ2SEQ.png`,`SEQ2SEQ2.png`  in the images folder
- 10 cards covering attention heads, model depth, embedding size, dropout, learning rate, batch size, warmup steps, optimizer, sequence length, loss
- architecture section with attention equations and term breakdown
- training and regularization sections with Transformer-specific advice
- summary and comparison tables
- 20+ quiz questions covering all hyperparameters, architecture concepts, and training best practices
