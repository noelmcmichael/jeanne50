#!/usr/bin/env python3

from PIL import Image, ImageDraw, ImageFont
import os

# Create image with standard OG dimensions
width, height = 1200, 630
img = Image.new('RGB', (width, height), color='#1E1E1E')
draw = ImageDraw.Draw(img)

# Darkula colors
colors = {
    'bg': '#1E1E1E',
    'bg_secondary': '#2B2B2B', 
    'primary': '#CC7832',      # Darkula orange
    'accent': '#6897BB',       # Darkula blue
    'success': '#6A8759',      # Darkula green
    'text': '#A9B7C6',         # Default text
    'text_bright': '#BBBBBB',  # Light text
    'border': '#555555'
}

# Try to load fonts (fallback to default if not available)
try:
    title_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 60)
    subtitle_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 40)
    body_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 28)
    code_font = ImageFont.truetype('/System/Library/Fonts/Monaco.ttf', 18)
    small_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
except:
    # Fallback to default font
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    body_font = ImageFont.load_default()
    code_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# Background gradient effect (simulate with rectangles)
for i in range(height):
    alpha = i / height
    gray_value = int(0x1E + (0x2B - 0x1E) * alpha)
    color = f'#{gray_value:02x}{gray_value:02x}{gray_value:02x}'
    draw.rectangle([(0, i), (width, i+1)], fill=color)

# Add subtle dot pattern
for x in range(0, width, 80):
    for y in range(0, height, 80):
        if (x + y) % 160 == 0:
            draw.ellipse([(x-1, y-1), (x+1, y+1)], fill=colors['border'])

# Main title
title_text = "VibePlan"
title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
draw.text((title_x, 80), title_text, fill=colors['text_bright'], font=title_font)

# Subtitle with orange color
subtitle_text = "Plan Directly in Your Code"
subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0] 
subtitle_x = (width - subtitle_width) // 2
draw.text((subtitle_x, 160), subtitle_text, fill=colors['primary'], font=subtitle_font)

# MCP Server badge
badge_width, badge_height = 280, 45
badge_x = (width - badge_width) // 2
badge_y = 220
draw.rectangle([(badge_x, badge_y), (badge_x + badge_width, badge_y + badge_height)], 
               fill=colors['accent'])
badge_text = "MCP SERVER"
badge_text_bbox = draw.textbbox((0, 0), badge_text, font=small_font)
badge_text_width = badge_text_bbox[2] - badge_text_bbox[0]
badge_text_x = badge_x + (badge_width - badge_text_width) // 2
draw.text((badge_text_x, badge_y + 12), badge_text, fill=colors['bg'], font=small_font)

# Key benefits
benefits = [
    "🚀 Zero Context Switching",
    "⚡ Instant PRD Generation", 
    "🎯 Built for VibePlanners"
]

start_y = 300
for i, benefit in enumerate(benefits):
    draw.text((120, start_y + i * 50), benefit, fill=colors['text'], font=body_font)

# Code block background
code_x, code_y = 60, 460
code_width, code_height = 1080, 100
draw.rectangle([(code_x, code_y), (code_x + code_width, code_y + code_height)], 
               fill=colors['bg_secondary'], outline=colors['primary'], width=2)

# Code text
code_lines = [
    "// Ask VibePlan: Help me plan a user authentication system",
    "VibePlan: I'll help you plan a comprehensive auth system...",
    "✓ PRD generated  ✓ Implementation plan ready  ✓ Tasks prioritized"
]

colors_for_lines = [colors['success'], colors['text'], colors['accent']]
for i, (line, color) in enumerate(zip(code_lines, colors_for_lines)):
    draw.text((code_x + 15, code_y + 15 + i * 25), line, fill=color, font=code_font)

# Website URL at bottom
url_text = "VibePlan.it"
url_bbox = draw.textbbox((0, 0), url_text, font=subtitle_font)
url_width = url_bbox[2] - url_bbox[0]
url_x = (width - url_width) // 2
draw.text((url_x, 580), url_text, fill=colors['primary'], font=subtitle_font)

# Save the image
output_path = '/Users/davidgilmore/Workspace/vibecoder_stack_planner/public/vibeplan-social-share.png'
os.makedirs(os.path.dirname(output_path), exist_ok=True)
img.save(output_path, 'PNG', quality=95)

print(f"Social share image saved to: {output_path}")
print("Image dimensions: 1200x630 (optimized for social sharing)")