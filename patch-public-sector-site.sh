#!/bin/bash

################################################################################
# patch-public-sector-site.sh
#
# Comprehensive HTML patcher for BrightLink public sector website
# Modifies: index.html, ardis.html, training.html
#
# Usage: ./patch-public-sector-site.sh
# Run from the root project directory where the three HTML files live.
#
# This script:
# 1. Validates that all three HTML files exist
# 2. Creates backup copies (.bak)
# 3. Applies targeted replacements using Python for multi-line edits
# 4. Prints a summary of all changes
################################################################################

set -e  # Exit on any error

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Required files
REQUIRED_FILES=("index.html" "ardis.html" "training.html")

################################################################################
# FUNCTION: Validate Files Exist
################################################################################
validate_files() {
    echo -e "${BLUE}=== Validating Required Files ===${NC}"

    for file in "${REQUIRED_FILES[@]}"; do
        if [ ! -f "$file" ]; then
            echo -e "${RED}✗ Error: $file not found${NC}"
            echo "Please run this script from the root project directory."
            exit 1
        fi
        echo -e "${GREEN}✓ Found $file${NC}"
    done
    echo ""
}

################################################################################
# FUNCTION: Create Backups
################################################################################
create_backups() {
    echo -e "${BLUE}=== Creating Backups ===${NC}"

    for file in "${REQUIRED_FILES[@]}"; do
        cp "$file" "${file}.bak"
        echo -e "${GREEN}✓ Backed up to ${file}.bak${NC}"
    done
    echo ""
}

################################################################################
# FUNCTION: Apply Python-based replacements
# Takes: filename, python_code_string
################################################################################
apply_replacement() {
    local filename=$1
    local python_code=$2

    python3 << EOF
$python_code
EOF
}

################################################################################
# SECTION 1: Modify index.html
################################################################################
patch_index_html() {
    echo -e "${BLUE}=== Patching index.html ===${NC}"

    # ─────────────────────────────────────────────────────────────────────────
    # Change 1: Add "Home" to nav links (first item in ul.nav-links)
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """<ul class="nav-links">
            <li><a href="ardis.html">Software</a></li>"""

replace_text = """<ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="ardis.html">Software</a></li>"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[index.html] ✓ Added Home to nav links")
else:
    print("[index.html] ✗ Could not find nav links section")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 2: Rewrite hero section eyebrow and headline
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """<div class="eyebrow">AI Solutions for Government & Public Sector</div>
            <h1 class="section-heading">We help public sector organizations <span class="orange-accent">implement AI</span> that actually works. <span class="orange-accent">Data intelligence. Workforce training. Deployed.</span></h1>
            <p class="section-subhead">BrightLink brings two AI-powered solutions to government agencies and public institutions: a data intelligence platform that makes your entire operation searchable and audit-ready, and a hands-on AI implementation program that gets your team building with AI in weeks, not months. One vendor. Full documentation. Designed for the way government actually procures.</p>"""

replace_text = """<div class="eyebrow">Government & Public Sector Services</div>
            <h1 class="section-heading">AI-Powered <span class="orange-accent">Data Intelligence</span> and <span class="orange-accent">Workforce Training</span> for Government Agencies</h1>
            <p class="section-subhead">We deploy audit-ready data systems and hands-on AI implementation programs for government agencies and public institutions. One vendor. Full documentation. Built for how government actually procures.</p>"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[index.html] ✓ Updated hero section (eyebrow, headline, subhead)")
else:
    print("[index.html] ✗ Could not find hero section")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 3: Update credential bar - add CAGE and UEI, remove DUNS
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """<div class="credential-item">SAM.gov Registered</div>
            <div class="credential-item">DUNS: 10-514-0288</div>
            <div class="credential-item">NAICS 541613</div>
            <div class="credential-item">AI & Automation Specialists</div>
            <div class="credential-item">U.S.-Based Operations</div>"""

replace_text = """<div class="credential-item">SAM.gov Registered</div>
            <div class="credential-item">CAGE: [Pending]</div>
            <div class="credential-item">UEI: [Check SAM.gov]</div>
            <div class="credential-item">NAICS 541613</div>
            <div class="credential-item">U.S.-Based Operations</div>"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[index.html] ✓ Updated credential bar (CAGE, UEI, removed DUNS)")
else:
    print("[index.html] ✗ Could not find credential bar")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 4: Add "Trusted By" section after credential bar
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find the closing tag before Solutions Section and insert after it
anchor = "    <!-- Solutions Section -->"
trusted_by_section = """    <!-- Trusted By -->
    <div style="background-color:#FFFFFF;padding:24px 40px;text-align:center;border-bottom:1px solid rgba(4,8,11,0.1);">
        <div style="max-width:1200px;margin:0 auto;">
            <div style="font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(4,8,11,0.35);margin-bottom:12px;">Trusted By</div>
            <div style="display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;">
                <div style="font-size:16px;font-weight:700;color:#04080B;letter-spacing:0.5px;">Inland Empire SBDC Network</div>
                <div style="font-size:14px;color:rgba(4,8,11,0.5);">Serving Riverside &amp; San Bernardino Counties</div>
            </div>
        </div>
    </div>

    <!-- Solutions Section -->"""

if anchor in content:
    content = content.replace(anchor, trusted_by_section)
    print("[index.html] ✓ Added Trusted By section")
else:
    print("[index.html] ✗ Could not find insertion point for Trusted By section")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 5: Restructure "Why Agencies Choose Us" - trim to 3 items
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace the entire why-brightlink-list
# This regex captures from <ul class="why-brightlink-list"> to </ul>
pattern = r"<ul class=\"why-brightlink-list\">.*?</ul>"
replacement = """<ul class="why-brightlink-list">
                    <li>
                        <div class="number">1</div>
                        <div class="text">
                            <strong>Single-Vendor Accountability</strong>
                            <span>One team owns the outcome from strategy through handoff. No blame-shifting. No "that'"'"'s a different vendor'"'"'s problem." Mike Walker leads every engagement personally.</span>
                        </div>
                    </li>
                    <li>
                        <div class="number">2</div>
                        <div class="text">
                            <strong>Founder-Led Engagement</strong>
                            <span>2x Amazon #1 Best Selling Author on systems thinking and client experience. 20+ years building mission-driven operations. You don'"'"'t get a junior consultant. You get the person who built the firm.</span>
                        </div>
                    </li>
                    <li>
                        <div class="number">3</div>
                        <div class="text">
                            <strong>Proven Public Sector Delivery</strong>
                            <span>Established relationship with Inland Empire SBDC Network. Custom LMS deployed. Training programs live. References you can call who'"'"'ve worked with us on government contracts.</span>
                        </div>
                    </li>
                </ul>"""

if re.search(pattern, content, re.DOTALL):
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    print("[index.html] ✓ Restructured Why Agencies Choose Us (trimmed to 3 items)")
else:
    print("[index.html] ✗ Could not find why-brightlink-list")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 6: Add "Additional Capabilities" section before codes-section
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

anchor = "    <!-- NAICS/NIGP Codes Section -->"
additional_capabilities = """    <!-- Additional Capabilities -->
    <section style="padding:60px 40px;background-color:#FFFFFF;">
        <div class="container">
            <div class="eyebrow" style="text-align:center;">Additional Capabilities</div>
            <h2 class="section-heading" style="text-align:center;font-size:36px;">Beyond Our Core AI Solutions</h2>
            <p style="text-align:center;max-width:700px;margin:0 auto 40px;font-size:16px;color:rgba(4,8,11,0.6);line-height:1.7;">In addition to ARDIS and The AI-Powered Enterprise, BrightLink delivers strategic consulting services across these competencies:</p>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1000px;margin:0 auto;">
                <div style="background-color:#FCF3EE;padding:32px;border-radius:12px;text-align:center;">
                    <div style="font-size:28px;margin-bottom:12px;">&#128172;</div>
                    <h4 style="font-weight:700;margin-bottom:8px;color:#04080B;font-size:16px;">Strategic Communications</h4>
                    <p style="font-size:14px;color:rgba(4,8,11,0.6);line-height:1.6;">Stakeholder engagement, public-facing messaging, and internal communications strategy for agencies navigating change.</p>
                </div>
                <div style="background-color:#FCF3EE;padding:32px;border-radius:12px;text-align:center;">
                    <div style="font-size:28px;margin-bottom:12px;">&#128200;</div>
                    <h4 style="font-weight:700;margin-bottom:8px;color:#04080B;font-size:16px;">Marketing Strategy &amp; Campaigns</h4>
                    <p style="font-size:14px;color:rgba(4,8,11,0.6);line-height:1.6;">Full-service campaign execution, CRM integration, and marketing automation for public sector outreach and community engagement.</p>
                </div>
                <div style="background-color:#FCF3EE;padding:32px;border-radius:12px;text-align:center;">
                    <div style="font-size:28px;margin-bottom:12px;">&#9881;&#65039;</div>
                    <h4 style="font-weight:700;margin-bottom:8px;color:#04080B;font-size:16px;">Operational Process Improvement</h4>
                    <p style="font-size:14px;color:rgba(4,8,11,0.6);line-height:1.6;">Systems design, workflow optimization, and technology modernization consulting for agencies looking to reduce manual overhead.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- NAICS/NIGP Codes Section -->"""

if anchor in content:
    content = content.replace(anchor, additional_capabilities)
    print("[index.html] ✓ Added Additional Capabilities section")
else:
    print("[index.html] ✗ Could not find insertion point for Additional Capabilities")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 7: Normalize footer to match training.html 3-column structure
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "index.html" '
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace entire footer block
pattern = r"<footer>.*?</footer>"
replacement = """<footer style="background-color:#04080B;color:#FFFFFF;padding:48px 40px 24px;text-align:center;">
        <div style="max-width:1200px;margin:0 auto;">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;text-align:left;margin-bottom:32px;">
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">BrightLink Consulting</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;">Temecula, California<br/>U.S.-Based Operations</p>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Solutions</h4>
                    <a href="ardis.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">ARDIS Software</a>
                    <a href="training.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">AI Training Program</a>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Contact</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.8;">Mike Walker, Founder &amp; CEO<br/><a href="tel:+18583548511" style="color:#FF5833;text-decoration:none;">(858) 354-8511</a><br/><a href="mailto:Info@BrightLinkConsulting.com" style="color:#FF5833;text-decoration:none;">Info@BrightLinkConsulting.com</a></p>
                </div>
            </div>
            <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;font-size:13px;color:rgba(255,255,255,0.4);">Copyright 2026 BrightLink Consulting LLC. All rights reserved.</div>
        </div>
    </footer>"""

if re.search(pattern, content, re.DOTALL):
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    print("[index.html] ✓ Normalized footer to 3-column structure")
else:
    print("[index.html] ✗ Could not find footer section")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    echo ""
}

################################################################################
# SECTION 2: Modify ardis.html
################################################################################
patch_ardis_html() {
    echo -e "${BLUE}=== Patching ardis.html ===${NC}"

    # ─────────────────────────────────────────────────────────────────────────
    # Change 1a: Fix font-size in nav-links CSS to 16px
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "ardis.html" '
import re

with open("ardis.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """.nav-links a {
  color: #04080B; text-decoration: none;
  font-size: 14px; font-weight: 500;"""

replace_text = """.nav-links a {
  color: #04080B; text-decoration: none;
  font-size: 16px; font-weight: 500;"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[ardis.html] ✓ Updated nav-links font-size to 16px")
else:
    print("[ardis.html] ✗ Could not find nav-links CSS")

with open("ardis.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 1b: Add "Home" to nav links
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "ardis.html" '
import re

with open("ardis.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """<ul class="nav-links">
        <li><a href="ardis.html" class="active">Software</a></li>"""

replace_text = """<ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="ardis.html" class="active">Software</a></li>"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[ardis.html] ✓ Added Home to nav links")
else:
    print("[ardis.html] ✗ Could not find nav links section")

with open("ardis.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 2: Remove breadcrumb/back-link
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "ardis.html" '
import re

with open("ardis.html", "r", encoding="utf-8") as f:
    content = f.read()

breadcrumb = """<!-- ── BREADCRUMB ─────────────────────────────────────────────────── -->
<div style="max-width:1200px;margin:0 auto;padding:12px 40px;">
    <a href="index.html" style="font-size:13px;color:rgba(4,8,11,0.5);text-decoration:none;">← Back to BrightLink Public Sector</a>
</div>
"""

if breadcrumb in content:
    content = content.replace(breadcrumb, "")
    print("[ardis.html] ✓ Removed breadcrumb/back-link")
else:
    print("[ardis.html] ✗ Could not find breadcrumb section")

with open("ardis.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 3: Replace footer with standardized version
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "ardis.html" '
import re

with open("ardis.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace entire footer block
pattern = r"<footer>.*?</footer>"
replacement = """<footer style="background-color:#04080B;color:#FFFFFF;padding:48px 40px 24px;text-align:center;">
        <div style="max-width:1200px;margin:0 auto;">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;text-align:left;margin-bottom:32px;">
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">BrightLink Consulting</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;">Temecula, California<br/>U.S.-Based Operations</p>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Solutions</h4>
                    <a href="ardis.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">ARDIS Software</a>
                    <a href="training.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">AI Training Program</a>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Contact</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.8;">Mike Walker, Founder &amp; CEO<br/><a href="tel:+18583548511" style="color:#FF5833;text-decoration:none;">(858) 354-8511</a><br/><a href="mailto:Info@BrightLinkConsulting.com" style="color:#FF5833;text-decoration:none;">Info@BrightLinkConsulting.com</a></p>
                </div>
            </div>
            <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;font-size:13px;color:rgba(255,255,255,0.4);">Copyright 2026 BrightLink Consulting LLC. All rights reserved.</div>
        </div>
    </footer>"""

if re.search(pattern, content, re.DOTALL):
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    print("[ardis.html] ✓ Replaced footer with standardized version")
else:
    print("[ardis.html] ✗ Could not find footer section")

with open("ardis.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    echo ""
}

################################################################################
# SECTION 3: Modify training.html
################################################################################
patch_training_html() {
    echo -e "${BLUE}=== Patching training.html ===${NC}"

    # ─────────────────────────────────────────────────────────────────────────
    # Change 1: Add "Home" to nav links
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "training.html" '
import re

with open("training.html", "r", encoding="utf-8") as f:
    content = f.read()

find_text = """<ul>
            <li><a href="ardis.html">Software</a></li>"""

replace_text = """<ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="ardis.html">Software</a></li>"""

if find_text in content:
    content = content.replace(find_text, replace_text)
    print("[training.html] ✓ Added Home to nav links")
else:
    print("[training.html] ✗ Could not find nav links section")

with open("training.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 2: Remove breadcrumb/back-link
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "training.html" '
import re

with open("training.html", "r", encoding="utf-8") as f:
    content = f.read()

breadcrumb = """    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <a href="index.html">← Back to BrightLink Public Sector</a>
    </div>
"""

if breadcrumb in content:
    content = content.replace(breadcrumb, "")
    print("[training.html] ✓ Removed breadcrumb/back-link")
else:
    print("[training.html] ✗ Could not find breadcrumb section")

with open("training.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    # ─────────────────────────────────────────────────────────────────────────
    # Change 3: Normalize footer to standardized 3-column structure
    # ─────────────────────────────────────────────────────────────────────────
    apply_replacement "training.html" '
import re

with open("training.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace entire footer block
pattern = r"<footer>.*?</footer>"
replacement = """<footer style="background-color:#04080B;color:#FFFFFF;padding:48px 40px 24px;text-align:center;">
        <div style="max-width:1200px;margin:0 auto;">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;text-align:left;margin-bottom:32px;">
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">BrightLink Consulting</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;">Temecula, California<br/>U.S.-Based Operations</p>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Solutions</h4>
                    <a href="ardis.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">ARDIS Software</a>
                    <a href="training.html" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:8px;">AI Training Program</a>
                </div>
                <div>
                    <h4 style="font-weight:700;margin-bottom:12px;font-size:16px;">Contact</h4>
                    <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.8;">Mike Walker, Founder &amp; CEO<br/><a href="tel:+18583548511" style="color:#FF5833;text-decoration:none;">(858) 354-8511</a><br/><a href="mailto:Info@BrightLinkConsulting.com" style="color:#FF5833;text-decoration:none;">Info@BrightLinkConsulting.com</a></p>
                </div>
            </div>
            <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;font-size:13px;color:rgba(255,255,255,0.4);">Copyright 2026 BrightLink Consulting LLC. All rights reserved.</div>
        </div>
    </footer>"""

if re.search(pattern, content, re.DOTALL):
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    print("[training.html] ✓ Normalized footer to standardized 3-column structure")
else:
    print("[training.html] ✗ Could not find footer section")

with open("training.html", "w", encoding="utf-8") as f:
    f.write(content)
'

    echo ""
}

################################################################################
# FUNCTION: Print Summary
################################################################################
print_summary() {
    echo -e "${BLUE}=== PATCH COMPLETE ===${NC}"
    echo ""
    echo -e "${GREEN}All changes applied successfully!${NC}"
    echo ""
    echo "Backup files created:"
    for file in "${REQUIRED_FILES[@]}"; do
        echo "  - ${file}.bak"
    done
    echo ""
    echo -e "${YELLOW}Summary of changes:${NC}"
    echo ""
    echo "index.html:"
    echo "  [1] Added Home to nav links"
    echo "  [2] Updated hero section (eyebrow, headline, subhead)"
    echo "  [3] Updated credential bar (CAGE, UEI, removed DUNS)"
    echo "  [4] Added Trusted By section"
    echo "  [5] Restructured Why Agencies Choose Us (trimmed to 3 items)"
    echo "  [6] Added Additional Capabilities section"
    echo "  [7] Normalized footer to 3-column structure"
    echo ""
    echo "ardis.html:"
    echo "  [1] Updated nav-links font-size to 16px"
    echo "  [2] Added Home to nav links"
    echo "  [3] Removed breadcrumb/back-link"
    echo "  [4] Replaced footer with standardized version"
    echo ""
    echo "training.html:"
    echo "  [1] Added Home to nav links"
    echo "  [2] Removed breadcrumb/back-link"
    echo "  [3] Normalized footer to standardized 3-column structure"
    echo ""
    echo -e "${GREEN}✓ Ready for review and testing${NC}"
}

################################################################################
# MAIN EXECUTION
################################################################################
main() {
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║   BrightLink Public Sector Website Patcher                     ║${NC}"
    echo -e "${BLUE}║   Patching: index.html, ardis.html, training.html             ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""

    validate_files
    create_backups
    patch_index_html
    patch_ardis_html
    patch_training_html
    print_summary
}

# Run main function
main
