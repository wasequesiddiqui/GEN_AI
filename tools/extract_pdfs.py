"""Extract text from the two AIBE source PDFs into plain-text sidecars.

Usage: python tools/extract_pdfs.py
Outputs: AIBE_XXI_English_Set_A.txt, Syllabus_AIBE_XXI.txt (repo root)
"""
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent

TARGETS = [
    ("AIBE_XXI_English_Set_A.pdf", "AIBE_XXI_English_Set_A.txt"),
    ("Syllabus for All India Bar Exam-XXI.pdf", "Syllabus_AIBE_XXI.txt"),
]


def main() -> None:
    for src_name, out_name in TARGETS:
        src = ROOT / src_name
        if not src.exists():
            print(f"! missing: {src}")
            continue
        reader = PdfReader(str(src))
        chunks = []
        for i, page in enumerate(reader.pages, start=1):
            text = page.extract_text() or ""
            chunks.append(f"\n\n===== PAGE {i} =====\n{text}")
        out = ROOT / out_name
        out.write_text("".join(chunks), encoding="utf-8")
        print(f"{src.name}: {len(reader.pages)} pages -> {out_name} "
              f"({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
