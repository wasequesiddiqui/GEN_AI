"""
Generate additional diagram images for the GAN Study Guide.
Requires: matplotlib, numpy, Pillow
Run: python generate_diagrams.py
"""

import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

# ──────────────────────────────────────────────
# Figure 2: GAN Training Loss Curves
# ──────────────────────────────────────────────
def gen_training_curves():
    epochs = np.arange(0, 101)
    # Simulate realistic GAN loss curves
    np.random.seed(42)
    d_real = 0.5 + 0.4 * np.exp(-epochs / 12) + 0.02 * np.random.randn(101)
    d_fake = 0.5 - 0.4 * np.exp(-epochs / 15) + 0.02 * np.random.randn(101)
    d_loss = -(np.log(d_real + 1e-8) + np.log(1 - d_fake + 1e-8))
    g_loss = -np.log(d_fake + 1e-8)

    # Smooth a bit
    def smooth(y, w=5):
        return np.convolve(y, np.ones(w)/w, mode='same')
    d_loss = smooth(d_loss)
    g_loss = smooth(g_loss)

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(epochs, d_loss, label='Discriminator Loss', color='#4a7abf', linewidth=2.2)
    ax.plot(epochs, g_loss, label='Generator Loss', color='#cf6a3a', linewidth=2.2)
    ax.axhline(y=np.log(2), color='#888', linestyle='--', linewidth=1.2, alpha=0.7, label='log(2) ≈ 0.69 (equilibrium)')

    ax.set_xlabel('Epoch', fontsize=12, fontweight='bold')
    ax.set_ylabel('Loss', fontsize=12, fontweight='bold')
    ax.set_title('GAN Training Loss Curves', fontsize=14, fontweight='bold', pad=12)
    ax.legend(fontsize=10, loc='upper right')
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 4.5)
    ax.grid(True, alpha=0.3)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    plt.tight_layout()
    path = os.path.join(OUT_DIR, 'GAN_Training_Curves.png')
    plt.savefig(path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f'✅ Created {path}')

# ──────────────────────────────────────────────
# Figure 3: Latent Space Interpolation
# ──────────────────────────────────────────────
def gen_latent_interpolation():
    """Create a strip of morphed face-like blobs to simulate latent interpolation."""
    W, H = 800, 160
    img = Image.new('RGB', (W, H), '#f5f0fa')
    draw = ImageDraw.Draw(img)

    n_frames = 10
    frame_w = W // n_frames

    # Two "latent" endpoints — just colour / shape parameters
    start_params = {'cx': 0.3, 'cy': 0.3, 'r': 0.2, 'cr': 200, 'cg': 80, 'cb': 120}
    end_params   = {'cx': 0.7, 'cy': 0.6, 'r': 0.25, 'cr': 80, 'cg': 160, 'cb': 200}

    for i in range(n_frames):
        t = i / (n_frames - 1)
        cx = int((start_params['cx'] * (1-t) + end_params['cx'] * t) * frame_w + frame_w * 0.5)
        cy = int((start_params['cy'] * (1-t) + end_params['cy'] * t) * H + H * 0.1)
        r  = int((start_params['r'] * (1-t) + end_params['r'] * t) * H * 0.6)
        cr = int(start_params['cr'] * (1-t) + end_params['cr'] * t)
        cg = int(start_params['cg'] * (1-t) + end_params['cg'] * t)
        cb = int(start_params['cb'] * (1-t) + end_params['cb'] * t)

        x0 = i * frame_w
        # Background for frame
        bg_shade = int(245 * (1-t) + 235 * t)
        bg_color = (bg_shade, bg_shade-5, bg_shade+5)
        draw.rectangle([x0, 0, x0 + frame_w - 1, H - 1], fill=bg_color)

        # Draw a "face" — an ellipse with features
        face_cx = x0 + frame_w // 2
        face_cy = H // 2 - 5
        face_rx = r
        face_ry = int(r * 1.15)

        # Face oval
        draw.ellipse([face_cx - face_rx, face_cy - face_ry, face_cx + face_rx, face_cy + face_ry],
                     fill=(cr, cg, cb), outline=(cr-30, cg-30, cb-30), width=2)

        # Eyes
        eye_offset_x = int(face_rx * 0.35)
        eye_y = face_cy - int(face_ry * 0.2)
        eye_r = max(3, int(face_rx * 0.07))
        draw.ellipse([face_cx - eye_offset_x - eye_r, eye_y - eye_r,
                      face_cx - eye_offset_x + eye_r, eye_y + eye_r], fill=(50,50,50))
        draw.ellipse([face_cx + eye_offset_x - eye_r, eye_y - eye_r,
                      face_cx + eye_offset_x + eye_r, eye_y + eye_r], fill=(50,50,50))

        # Mouth
        mouth_y = face_cy + int(face_ry * 0.35)
        mouth_w = int(face_rx * 0.4)
        draw.arc([face_cx - mouth_w, mouth_y - 5, face_cx + mouth_w, mouth_y + 8],
                 0, 180, fill=(60,30,40), width=2)

        # Label
        label = f'z₁ → {t:.1f} → z₂' if i == 0 or i == n_frames-1 else f'α={t:.1f}'
        draw.text((x0 + 8, H - 22), label, fill=(100,100,120))

    # Border
    draw.rectangle([0, 0, W-1, H-1], outline='#ccc', width=1)

    path = os.path.join(OUT_DIR, 'GAN_Latent_Interpolation.png')
    img.save(path, quality=95)
    print(f'✅ Created {path}')

if __name__ == '__main__':
    gen_training_curves()
    gen_latent_interpolation()
    print('\n🎯 Done! Both diagrams generated.')
