"""Render the scanned AIBE syllabus PDF to PNG bytes without Pillow/numpy.

The syllabus PDF is a single scanned page with no text layer, so we rasterise
it and read the image directly.
"""
import struct
import zlib
from pathlib import Path

import pypdfium2 as pdfium

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "Syllabus for All India Bar Exam-XXI.pdf"
OUT_DIR = ROOT / "tools"
OUT_DIR.mkdir(exist_ok=True)


def write_png(path: Path, width: int, height: int, rgb: bytes) -> None:
    raw = b"".join(
        b"\x00" + rgb[y * width * 3:(y + 1) * width * 3] for y in range(height)
    )

    def chunk(tag: bytes, data: bytes) -> bytes:
        return (struct.pack(">I", len(data)) + tag + data
                + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(raw, 9))
    png += chunk(b"IEND", b"")
    path.write_bytes(png)


def main() -> None:
    doc = pdfium.PdfDocument(str(SRC))
    for pno in range(len(doc)):
        bmp = doc[pno].render(scale=3)
        width, height, stride = bmp.width, bmp.height, bmp.stride
        nch = bmp.n_channels
        print(f"page {pno + 1}: {width}x{height} stride={stride} nch={nch} mode={bmp.mode}")
        buf = bytes(bmp.buffer)
        rows = []
        for y in range(height):
            line = buf[y * stride:y * stride + width * nch]
            # pdfium renders as BGRA (or BGR); reorder to RGB
            px = bytearray(width * 3)
            px[0::3] = line[2::nch]
            px[1::3] = line[1::nch]
            px[2::3] = line[0::nch]
            rows.append(bytes(px))
        out = OUT_DIR / f"syllabus_page{pno + 1}.png"
        write_png(out, width, height, b"".join(rows))
        print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
