#!/bin/bash

################################################################################
# patch-v3-visual-enhancements.sh
#
# Visual polish for BrightLink public sector website
# Adds: fade-up scroll animations, background texture, hero gradient,
#       SVG icons (replacing emojis), image placeholders, section dividers
#
# Usage: ./patch-v3-visual-enhancements.sh
# Run from ~/brightlink-public-sector
################################################################################

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   BrightLink V3: Visual Enhancements                          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"

# Validate files exist
for f in index.html ardis.html training.html; do
    if [ ! -f "$f" ]; then
        echo "ERROR: $f not found. Run from your project root."
        exit 1
    fi
done
echo -e "${GREEN}✓ All files found${NC}"

# Create backups
for f in index.html ardis.html training.html; do
    cp "$f" "${f}.v2-backup"
done
echo -e "${GREEN}✓ Backups created (.v2-backup)${NC}"
echo ""

################################################################################
# PATCH index.html
################################################################################
echo -e "${BLUE}=== Patching index.html ===${NC}"

python3 << 'PYEOF'
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

changes = []

# ─────────────────────────────────────────────────────────────────────────
# 1. Inject fade-up animation CSS + subtle background texture before </style>
# ─────────────────────────────────────────────────────────────────────────
animation_css = """
        /* ── V3: Scroll fade-up animations ── */
        .fade-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* ── V3: Subtle background grain texture ── */
        .textured-bg {
            position: relative;
        }
        .textured-bg::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 256px 256px;
            pointer-events: none;
            z-index: 0;
        }
        .textured-bg > * {
            position: relative;
            z-index: 1;
        }

        /* ── V3: Image placeholder cards ── */
        .hero-image-strip {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            max-width: 900px;
            margin: 40px auto 0;
        }
        .hero-image-card {
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 16/10;
            background: linear-gradient(135deg, rgba(255,88,51,0.08) 0%, rgba(4,8,11,0.04) 100%);
            border: 1px solid rgba(4,8,11,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .hero-image-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .hero-image-card .placeholder-label {
            font-size: 12px;
            color: rgba(4,8,11,0.3);
            text-align: center;
            padding: 12px;
            font-weight: 500;
        }

        /* ── V3: Section divider lines ── */
        .section-divider {
            max-width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #FF5833, rgba(255,88,51,0.2));
            border: none;
            margin: 0 auto 32px;
            border-radius: 2px;
        }

        /* ── V3: Enhanced stat cards with hover ── */
        .stat-item {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        /* ── V3: Solution card hover enhancement ── */
        .solution-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .solution-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        /* ── V3: Security card hover ── */
        .security-item {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .security-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 600px) {
            .hero-image-strip {
                grid-template-columns: 1fr;
                max-width: 300px;
            }
        }
"""

if "</style>" in content:
    content = content.replace("</style>", animation_css + "\n    </style>", 1)
    changes.append("Injected fade-up animation CSS, texture, hover effects")

# ─────────────────────────────────────────────────────────────────────────
# 2. Upgrade hero gradient
# ─────────────────────────────────────────────────────────────────────────
old_hero_bg = "background: linear-gradient(135deg, #FDF9F6 0%, #FCF3EE 100%);"
new_hero_bg = "background: linear-gradient(160deg, #FDF9F6 0%, #FCF3EE 40%, rgba(255,88,51,0.04) 100%);"

if old_hero_bg in content:
    content = content.replace(old_hero_bg, new_hero_bg)
    changes.append("Upgraded hero gradient with subtle orange warmth")

# ─────────────────────────────────────────────────────────────────────────
# 3. Add textured-bg class to key sections
# ─────────────────────────────────────────────────────────────────────────
# Solutions section
old_sol = '<section class="solutions" id="solutions">'
new_sol = '<section class="solutions textured-bg" id="solutions">'
if old_sol in content:
    content = content.replace(old_sol, new_sol)
    changes.append("Added texture to solutions section")

# Security section
old_sec = '<section class="security">'
new_sec = '<section class="security textured-bg">'
if old_sec in content:
    content = content.replace(old_sec, new_sec)
    changes.append("Added texture to security section")

# ─────────────────────────────────────────────────────────────────────────
# 4. Add fade-up classes to major content blocks
# ─────────────────────────────────────────────────────────────────────────
# Solution cards
content = content.replace(
    '<div class="solution-card">',
    '<div class="solution-card fade-up">'
)

# Past performance featured
content = content.replace(
    '<div class="past-perf-featured">',
    '<div class="past-perf-featured fade-up">'
)

# Past perf cards
content = content.replace(
    '<div class="past-perf-card">',
    '<div class="past-perf-card fade-up">'
)

# Stat items
content = content.replace(
    '<div class="stat-item">',
    '<div class="stat-item fade-up">'
)

# Security items
content = content.replace(
    '<div class="security-item">',
    '<div class="security-item fade-up">'
)

changes.append("Added fade-up animation classes to cards and content blocks")

# ─────────────────────────────────────────────────────────────────────────
# 5. Add image placeholder strip below hero CTAs
# ─────────────────────────────────────────────────────────────────────────
hero_ctas_close = """            </div>
        </div>
    </section>

    <!-- Credential Bar -->"""

hero_with_images = """            </div>

            <div class="hero-image-strip fade-up">
                <div class="hero-image-card">
                    <div class="placeholder-label">AI training session photo</div>
                </div>
                <div class="hero-image-card">
                    <div class="placeholder-label">ARDIS dashboard screenshot</div>
                </div>
                <div class="hero-image-card">
                    <div class="placeholder-label">Government building exterior</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Credential Bar -->"""

if hero_ctas_close in content:
    content = content.replace(hero_ctas_close, hero_with_images)
    changes.append("Added hero image placeholder strip (3 cards)")

# ─────────────────────────────────────────────────────────────────────────
# 6. Replace emoji icons in Additional Capabilities with SVGs
# ─────────────────────────────────────────────────────────────────────────
# Strategic Communications emoji
content = content.replace(
    '<div style="font-size:28px;margin-bottom:12px;">&#128172;</div>',
    '<div style="margin-bottom:12px;width:48px;height:48px;margin-left:auto;margin-right:auto;background:rgba(255,88,51,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#FF5833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
)

# Marketing Strategy emoji
content = content.replace(
    '<div style="font-size:28px;margin-bottom:12px;">&#128200;</div>',
    '<div style="margin-bottom:12px;width:48px;height:48px;margin-left:auto;margin-right:auto;background:rgba(255,88,51,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#FF5833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
)

# Operational Process emoji
content = content.replace(
    '<div style="font-size:28px;margin-bottom:12px;">&#9881;&#65039;</div>',
    '<div style="margin-bottom:12px;width:48px;height:48px;margin-left:auto;margin-right:auto;background:rgba(255,88,51,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#FF5833" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#FF5833" stroke-width="2"/></svg></div>'
)
changes.append("Replaced emoji icons with SVG line icons in Additional Capabilities")

# ─────────────────────────────────────────────────────────────────────────
# 7. Add section dividers before key headings
# ─────────────────────────────────────────────────────────────────────────
# Before solutions heading
old_sol_head = '<h2 class="section-heading">Two AI solutions. One accountable partner.</h2>'
new_sol_head = '<hr class="section-divider">\n            <h2 class="section-heading">Two AI solutions. One accountable partner.</h2>'
if old_sol_head in content:
    content = content.replace(old_sol_head, new_sol_head)

# Before past performance heading
old_pp_head = '<h2 class="section-heading">Past Performance That Procurement Can Verify</h2>'
new_pp_head = '<hr class="section-divider">\n            <h2 class="section-heading">Past Performance That Procurement Can Verify</h2>'
if old_pp_head in content:
    content = content.replace(old_pp_head, new_pp_head)

changes.append("Added subtle section divider lines")

# ─────────────────────────────────────────────────────────────────────────
# 8. Add Intersection Observer JS before </body>
# ─────────────────────────────────────────────────────────────────────────
scroll_js = """
    <!-- V3: Scroll fade-up animation -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.fade-up').forEach(function(el) {
            observer.observe(el);
        });
    });
    </script>
"""

if "</body>" in content:
    content = content.replace("</body>", scroll_js + "</body>")
    changes.append("Added Intersection Observer for scroll animations")

# Write
with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

for c in changes:
    print(f"[index.html] ✓ {c}")

PYEOF

################################################################################
# PATCH ardis.html
################################################################################
echo ""
echo -e "${BLUE}=== Patching ardis.html ===${NC}"

python3 << 'PYEOF'
import re

with open("ardis.html", "r", encoding="utf-8") as f:
    content = f.read()

changes = []

# 1. Add fade-up CSS before </style>
fade_css = """
/* ── V3: Scroll fade-up animations ── */
.fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible {
    opacity: 1;
    transform: translateY(0);
}
"""
if "</style>" in content:
    content = content.replace("</style>", fade_css + "\n</style>", 1)
    changes.append("Injected fade-up animation CSS")

# 2. Add fade-up to key elements
# Feature cards
content = content.replace('class="feature-card"', 'class="feature-card fade-up"')
# Trust items
content = content.replace('class="trust-item"', 'class="trust-item fade-up"')
# Pillar rows
content = content.replace('class="pillar-row"', 'class="pillar-row fade-up"')
content = content.replace('class="pillar-row fade-up reverse"', 'class="pillar-row fade-up reverse"')  # avoid double
changes.append("Added fade-up classes to feature cards, trust items, pillars")

# 3. Add Intersection Observer JS before </body>
scroll_js = """
<!-- V3: Scroll fade-up animation -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });
    document.querySelectorAll('.fade-up').forEach(function(el) {
        observer.observe(el);
    });
});
</script>
"""
# Insert before closing </body> but after existing scripts
if "</body>" in content:
    content = content.replace("</body>", scroll_js + "\n</body>", 1)
    changes.append("Added Intersection Observer JS")

with open("ardis.html", "w", encoding="utf-8") as f:
    f.write(content)

for c in changes:
    print(f"[ardis.html] ✓ {c}")

PYEOF

################################################################################
# PATCH training.html
################################################################################
echo ""
echo -e "${BLUE}=== Patching training.html ===${NC}"

python3 << 'PYEOF'
import re

with open("training.html", "r", encoding="utf-8") as f:
    content = f.read()

changes = []

# 1. Add fade-up CSS before </style>
fade_css = """
        /* ── V3: Scroll fade-up animations ── */
        .fade-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
"""
if "</style>" in content:
    content = content.replace("</style>", fade_css + "\n    </style>", 1)
    changes.append("Injected fade-up animation CSS")

# 2. Add fade-up to key elements
content = content.replace('class="track-card"', 'class="track-card fade-up"')
content = content.replace('class="module-card"', 'class="module-card fade-up"')
content = content.replace('class="outcome-item"', 'class="outcome-item fade-up"')
changes.append("Added fade-up classes to track cards, modules, outcomes")

# 3. Add Intersection Observer JS before </body>
scroll_js = """
    <!-- V3: Scroll fade-up animation -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });
        document.querySelectorAll('.fade-up').forEach(function(el) {
            observer.observe(el);
        });
    });
    </script>
"""
if "</body>" in content:
    content = content.replace("</body>", scroll_js + "</body>")
    changes.append("Added Intersection Observer JS")

with open("training.html", "w", encoding="utf-8") as f:
    f.write(content)

for c in changes:
    print(f"[training.html] ✓ {c}")

PYEOF

################################################################################
# SUMMARY
################################################################################
echo ""
echo -e "${BLUE}=== V3 PATCH COMPLETE ===${NC}"
echo ""
echo -e "${GREEN}All visual enhancements applied!${NC}"
echo ""
echo -e "${YELLOW}Summary of changes:${NC}"
echo ""
echo "index.html:"
echo "  [1] Fade-up scroll animations on all cards and content blocks"
echo "  [2] Subtle grain texture on solutions and security sections"
echo "  [3] Hero gradient warmed with subtle orange"
echo "  [4] Hero image placeholder strip (3 cards - add real photos later)"
echo "  [5] Emoji icons replaced with SVG line icons"
echo "  [6] Section divider lines before key headings"
echo "  [7] Hover lift effects on stat cards, solution cards, security cards"
echo "  [8] Intersection Observer JS for scroll-triggered animations"
echo ""
echo "ardis.html:"
echo "  [1] Fade-up animation CSS"
echo "  [2] Fade-up classes on feature cards, trust items, pillars"
echo "  [3] Intersection Observer JS"
echo ""
echo "training.html:"
echo "  [1] Fade-up animation CSS"
echo "  [2] Fade-up classes on track cards, modules, outcomes"
echo "  [3] Intersection Observer JS"
echo ""
echo -e "${YELLOW}NEXT STEP: Generate photos for the 3 hero image slots using${NC}"
echo -e "${YELLOW}Midjourney or Higgsfield, then replace the placeholder divs${NC}"
echo -e "${YELLOW}with <img> tags pointing to your hosted images.${NC}"
echo ""
echo -e "${GREEN}✓ Ready for review and testing${NC}"
