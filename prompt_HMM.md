# 🧠 REUSABLE PROMPT: Interactive HTML Study Guide for [TOPIC]

Create an **interactive HTML study guide** to explain **[TOPIC]** in detail, for use as exam prep material for **CGAI** at `https://charteredcertifications.com/learning/courses/cgai`.

---

## 1. CONTENT STRUCTURE (one tab per section)

Cover **[TOPIC]** end-to-end with the following sections (each as a separate tab):

- **Overview** – what it is, why it matters, comparison table vs alternatives.
- **Pipeline / Process** – step‑by‑step breakdown of how [TOPIC] works.
- **Core Mechanism** – deep‑dive on **[KEY_MECHANISM]** with an interactive demo.
- **Architecture** – internal structure, components, and how they connect.
- **Key Concepts** – refer to the attached image, list challenges, and exam must‑knows.
- **Diagrams** – embedded reference images with annotated captions (see section 4).
- **Quiz** – 10 practice questions with instant feedback and score tracking.

**For each section include:**

- A **concrete worked example** using **[EXAMPLE]**.
- A **comparison table** where relevant.
- A **glossary / key‑term cards** (styled as small cards).

---

## 2. INTERACTIVITY REQUIREMENTS

- **Sticky tabbed navigation** (one tab per section above) – tabs remain visible while scrolling.
- **Clickable step‑by‑step pipeline stepper** – each step can be clicked to expand detailed content.
- **Interactive demo** of **[KEY_MECHANISM]** – user can click/select elements (e.g., sliders, buttons, or diagrams) to see live output or parameter changes.
- **10‑question practice quiz** with:
  - Instant per‑question feedback + explanation.
  - Progress bar (visual).
  - Final score with pass/fail grade.
  - Retry button to reset and restart the quiz.

---

## 3. DESIGN & STYLING

- **Pastel colour theme** – use a distinct hue per section (soft blues, greens, peaches, lavenders, etc.).
- **Google Fonts** for typography:
  - Serif display font for headings (e.g., `Playfair Display` or `DM Serif Display`).
  - Clean sans‑serif body font (e.g., `Inter`, `DM Sans`, or `Poppins`).
- **Smooth tab transitions** (fade or slide animation when switching tabs).
- **Mobile‑friendly responsive layout** – works on all screen sizes.
- **Hero banner** at the top with:
  - Topic title.
  - Badge showing certification name ("CGAI Exam Prep").
  - Topic pill tags (3–6 relevant keywords).

---

## 4. IMAGES & DIAGRAMS

- Embed **each image as a separate file** – **do NOT use base64 inline src**.
- Reference images with relative paths: `src="image_filename.png"`.
- Place **each image** in the **"Diagrams" tab**, each with:
  - A heading (e.g., "Figure 1: …").
  - A 2–3 sentence **annotated caption** explaining what the diagram shows and what to look for.
- Provide **two separate image files** (e.g., `diagram1.png` and `diagram2.jpg`) – the HTML will refer to them.

---

## 5. OUTPUT FILES

Deliver **THREE files** (all must be downloadable and stored in the same folder for images to load):

1. **`[TOPIC]_StudyGuide.html`** – the main interactive guide (lightweight, no embedded images).
2. **`[IMAGE_1_FILENAME].png`** – first reference diagram.
3. **`[IMAGE_2_FILENAME].jpg`** – second reference diagram (optional, adjust as needed).

**Constraints:**

- Single self‑contained HTML file (inline CSS + JS, no external frameworks except Google Fonts).
- Only Google Fonts loaded externally; everything else local.
- **No base64 image data** inside the HTML.
- Works **offline** once all three files are downloaded and placed in the same folder.

---

## 💡 Example placeholders (fill in before using)

- `[TOPIC]` = e.g., *"Convolutional Neural Networks"*, *"Maximum Likelihood Estimation"*, *"Probability Distributions in Generative AI"*
- `[KEY_MECHANISM]` = e.g., *"convolution operation"*, *"likelihood maximisation"*, *"KL divergence"*
- `[EXAMPLE]` = e.g., *"image classification with a 3×3 filter"*, *"coin toss MLE"*, *"next‑token prediction in an LLM"*
- Image filenames: `cnn_architecture.png`, `mle_visualisation.jpg`, `prob_dist_infographic.png`, etc.

---

## 📝 Example Usage

**Topic:** Use case of Markov and Hidden Markov Models in Gen AI
**Image file:** `MARKOV_USE_CASE_GENAI.png`

Fill in the placeholders:

| Placeholder | Value |
|---|---|
| `[TOPIC]` | Markov & Hidden Markov Models in Generative AI |
| `[KEY_MECHANISM]` | Markov transition dynamics |
| `[EXAMPLE]` | next-token prediction in an LLM |
| `[IMAGE_1_FILENAME]` | MARKOV_USE_CASE_GENAI |
| `[IMAGE_2_FILENAME]` | HMM_Generative_Process_Flow |
