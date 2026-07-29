from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import A6
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
OUTPUT.mkdir(parents=True, exist_ok=True)

NAVY = HexColor("#07162B")
NAVY_2 = HexColor("#0D2038")
GOLD = HexColor("#C79A4C")
GOLD_LIGHT = HexColor("#E8D39B")
IVORY = HexColor("#FFF9EC")
MUTED = HexColor("#D9D0BC")
LINE = Color(199 / 255, 154 / 255, 76 / 255, alpha=0.6)

LOGO = ImageReader(str(ROOT / "public" / "images" / "dream-decor-mark.jpg"))
QR = ImageReader(str(ROOT / "public" / "images" / "qr-instagram.png"))


def background(c: canvas.Canvas, width: float, height: float):
    c.setFillColor(NAVY)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    c.setFillColor(NAVY_2)
    c.circle(width * 0.88, height * 0.88, min(width, height) * 0.38, fill=1, stroke=0)


def border(c: canvas.Canvas, width: float, height: float, inset=6 * mm):
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.65)
    c.rect(inset, inset, width - 2 * inset, height - 2 * inset, fill=0, stroke=1)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.35)
    c.rect(inset + 2.2 * mm, inset + 2.2 * mm, width - 2 * (inset + 2.2 * mm), height - 2 * (inset + 2.2 * mm), fill=0, stroke=1)
    corner = 8 * mm
    for x, y, sx, sy in (
        (inset, height - inset, 1, -1),
        (width - inset, height - inset, -1, -1),
        (inset, inset, 1, 1),
        (width - inset, inset, -1, 1),
    ):
        c.setStrokeColor(GOLD_LIGHT)
        c.setLineWidth(0.8)
        c.line(x, y, x + sx * corner, y)
        c.line(x, y, x, y + sy * corner)


def centered(c, text, y, font="Times-Roman", size=12, color=GOLD_LIGHT, tracking=0):
    c.setFillColor(color)
    c.setFont(font, size)
    if tracking:
        text_obj = c.beginText()
        text_obj.setTextOrigin(0, y)
        text_obj.setCharSpace(tracking)
        measured = c.stringWidth(text, font, size) + tracking * max(len(text) - 1, 0)
        text_obj.setTextOrigin((c._pagesize[0] - measured) / 2, y)
        text_obj.textLine(text)
        c.drawText(text_obj)
    else:
        c.drawCentredString(c._pagesize[0] / 2, y, text)


def wrapped_center(c, lines, y, font="Times-Roman", size=12, leading=None, color=GOLD_LIGHT):
    leading = leading or size * 1.15
    c.setFillColor(color)
    c.setFont(font, size)
    for line in lines:
        c.drawCentredString(c._pagesize[0] / 2, y, line)
        y -= leading
    return y


def wrap_lines(c, text, font, size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if current and c.stringWidth(candidate, font, size) > max_width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def logo(c, width, y, image_width=27 * mm):
    image_height = image_width * 288 / 530
    c.drawImage(LOGO, (width - image_width) / 2, y - image_height, image_width, image_height, preserveAspectRatio=True, mask="auto")
    return y - image_height


def qr(c, width, y, size=28 * mm):
    c.setFillColor(GOLD_LIGHT)
    c.roundRect((width - size) / 2 - 2 * mm, y - size - 2 * mm, size + 4 * mm, size + 4 * mm, 1.5 * mm, fill=1, stroke=0)
    c.drawImage(QR, (width - size) / 2, y - size, size, size, preserveAspectRatio=True, mask="auto")
    return y - size


def contact_lines(c, width, y, size=7.2):
    c.setFillColor(IVORY)
    c.setFont("Helvetica", size)
    for text in (
        "+354 766 6488",
        "dreamdecor.iceland@gmail.com",
        "@dream.decor.iceland",
        "Facebook: Dream Decor",
    ):
        c.drawCentredString(width / 2, y, text)
        y -= 4.2 * mm
    return y


def create_business_card():
    size = (85 * mm, 55 * mm)
    path = OUTPUT / "dream-decor-business-card.pdf"
    c = canvas.Canvas(str(path), pagesize=size)
    width, height = size

    background(c, width, height)
    border(c, width, height, 4 * mm)
    logo(c, width, height - 8 * mm, 23 * mm)
    centered(c, "DREAM DECOR", 19.5 * mm, "Times-Roman", 14, GOLD_LIGHT, 1.2)
    centered(c, "STUDIO ICELAND", 14 * mm, "Helvetica", 6.5, GOLD, 1.5)
    centered(c, "EVENT DECOR FOR EVERY CELEBRATION", 7.6 * mm, "Helvetica", 5.6, MUTED, 0.65)
    c.showPage()

    background(c, width, height)
    border(c, width, height, 4 * mm)
    c.setFillColor(GOLD_LIGHT)
    c.setFont("Times-Roman", 11)
    c.drawString(8 * mm, height - 13 * mm, "Dream Decor Studio Iceland")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    y = height - 20 * mm
    for text in (
        "+354 766 6488",
        "dreamdecor.iceland@gmail.com",
        "@dream.decor.iceland",
        "Facebook: Dream Decor",
    ):
        c.drawString(8 * mm, y, text)
        y -= 5 * mm
    qr_size = 23 * mm
    c.setFillColor(GOLD_LIGHT)
    c.roundRect(width - 8 * mm - qr_size - 1.5 * mm, 10 * mm - 1.5 * mm, qr_size + 3 * mm, qr_size + 3 * mm, 1.5 * mm, fill=1, stroke=0)
    c.drawImage(QR, width - 8 * mm - qr_size, 10 * mm, qr_size, qr_size, preserveAspectRatio=True, mask="auto")
    c.save()
    return path


def flyer_page(c, language, variant):
    width, height = c._pagesize
    background(c, width, height)
    border(c, width, height)

    if variant == "general":
        data = {
            "en": {
                "kicker": "EVENT DECOR IN ICELAND",
                "title": ["EVERY CELEBRATION", "DESERVES A SETTING", "TO REMEMBER."],
                "lead": "Tailored styling from first idea to final setup.",
                "services": ["WEDDINGS  •  PROPOSALS  •  BABY EVENTS", "CORPORATE  •  HOLIDAYS  •  PRIVATE EVENTS"],
                "cta": "TELL US WHAT YOU ARE CELEBRATING",
            },
            "is": {
                "kicker": "VIÐBURÐASKREYTINGAR Á ÍSLANDI",
                "title": ["ÖLL TILEFNI EIGA", "SKILIÐ EFTIRMINNILEGA", "UMGJÖRÐ."],
                "lead": "Sérsniðin hönnun frá fyrstu hugmynd til lokauppsetningar.",
                "services": ["BRÚÐKAUP  •  BÓNORÐ  •  BARNATILEFNI", "FYRIRTÆKI  •  HÁTÍÐIR  •  EINKAVIÐBURÐIR"],
                "cta": "SEGÐU OKKUR HVAÐ ÞÚ ERT AÐ FAGNA",
            },
        }[language]
    elif variant == "direct":
        data = {
            "en": {
                "kicker": "PLANNING SOMETHING SPECIAL?",
                "title": ["LET US CREATE", "THE ATMOSPHERE."],
                "lead": "Complimentary first decor consultation.",
                "services": ["WEDDINGS  •  PROPOSALS  •  BABY EVENTS", "CORPORATE  •  HOLIDAYS  •  MORE"],
                "cta": "SCAN TO SEE OUR WORK",
            },
            "is": {
                "kicker": "ERTU AÐ SKIPULEGGJA SÉRSTAKT TILEFNI?",
                "title": ["VIÐ SKÖPUM", "STEMNINGUNA."],
                "lead": "Fyrsta skreytingaráðgjöf án endurgjalds.",
                "services": ["BRÚÐKAUP  •  BÓNORÐ  •  BARNATILEFNI", "FYRIRTÆKI  •  HÁTÍÐIR  •  FLEIRA"],
                "cta": "SKANNAÐU TIL AÐ SKOÐA VERKEFNIN",
            },
        }[language]
    else:
        data = {
            "en": {
                "kicker": "FOR VENUES & EVENT PARTNERS",
                "title": ["A DECOR PARTNER", "YOUR CLIENTS", "CAN TRUST."],
                "lead": "Reliable styling, careful setup, and a polished result.",
                "services": ["VENUES  •  PHOTOGRAPHERS  •  PLANNERS", "RESTAURANTS  •  SALONS  •  BRANDS"],
                "cta": "LET US CREATE TOGETHER",
            },
            "is": {
                "kicker": "FYRIR VIÐBURÐASTAÐI OG SAMSTARFSAÐILA",
                "title": ["SKREYTINGAAÐILI", "SEM VIÐSKIPTAVINIR", "GETA TREYST."],
                "lead": "Áreiðanleg hönnun, vönduð uppsetning og fáguð útkoma.",
                "services": ["STAÐIR  •  LJÓSMYNDARAR  •  SKIPULEGGJENDUR", "VEITINGASTAÐIR  •  STOFUR  •  VÖRUMERKI"],
                "cta": "SKÖPUM SAMAN",
            },
        }[language]

    logo(c, width, height - 13 * mm, 31 * mm)
    centered(c, "DREAM DECOR STUDIO ICELAND", height - 37 * mm, "Helvetica", 7, GOLD, 1.0)
    centered(c, data["kicker"], height - 50 * mm, "Helvetica-Bold", 6.5, MUTED, 0.7)
    y = wrapped_center(c, data["title"], height - 68 * mm, "Times-Roman", 18, 20, IVORY)
    c.setStrokeColor(GOLD)
    c.line(width * 0.28, y - 1.5 * mm, width * 0.72, y - 1.5 * mm)
    lead_size = 8.5 if height > 180 * mm else 7.6
    lead_lines = wrap_lines(c, data["lead"], "Times-Italic", lead_size, width - 28 * mm)
    wrapped_center(c, lead_lines, y - 8 * mm, "Times-Italic", lead_size, 9, GOLD_LIGHT)
    if height > 180 * mm:
        y -= 23 * mm
        for line in data["services"]:
            centered(c, line, y, "Helvetica-Bold", 5.8, GOLD_LIGHT, 0.35)
            y -= 5 * mm
        qr(c, width, 52 * mm, 23 * mm)
        centered(c, data["cta"], 22 * mm, "Helvetica-Bold", 6.2, GOLD, 0.65)
        centered(c, "+354 766 6488  •  @dream.decor.iceland", 14 * mm, "Helvetica", 5.8, IVORY)
        centered(c, "dreamdecor.iceland@gmail.com", 9 * mm, "Helvetica", 5.5, IVORY)
    else:
        c.setFillColor(GOLD_LIGHT)
        c.setFont("Helvetica-Bold", 4.8)
        service_y = 47 * mm
        for line in data["services"]:
            c.drawString(13 * mm, service_y, line)
            service_y -= 5 * mm
        qr_size = 20 * mm
        qr_x = width - 15 * mm - qr_size
        qr_y = 13 * mm
        c.setFillColor(GOLD_LIGHT)
        c.roundRect(qr_x - 1.5 * mm, qr_y - 1.5 * mm, qr_size + 3 * mm, qr_size + 3 * mm, 1.4 * mm, fill=1, stroke=0)
        c.drawImage(QR, qr_x, qr_y, qr_size, qr_size, preserveAspectRatio=True, mask="auto")
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 5.7)
        c.drawString(13 * mm, 33 * mm, data["cta"])
        c.setFillColor(IVORY)
        c.setFont("Helvetica", 5.5)
        c.drawString(13 * mm, 27 * mm, "+354 766 6488")
        c.drawString(13 * mm, 22 * mm, "dreamdecor.iceland@gmail.com")
        c.drawString(13 * mm, 17 * mm, "@dream.decor.iceland")


def create_flyer(filename, pagesize, variant):
    path = OUTPUT / filename
    c = canvas.Canvas(str(path), pagesize=pagesize)
    for language in ("en", "is"):
        flyer_page(c, language, variant)
        c.showPage()
    c.save()
    return path


def create_voucher():
    size = (148 * mm, 148 * mm)
    path = OUTPUT / "dream-decor-consultation-voucher.pdf"
    c = canvas.Canvas(str(path), pagesize=size)
    width, height = size

    background(c, width, height)
    border(c, width, height, 8 * mm)
    logo(c, width, height - 17 * mm, 30 * mm)
    centered(c, "DREAM DECOR STUDIO", height - 41 * mm, "Helvetica", 7, GOLD, 1.1)
    centered(c, "ICELAND", height - 47 * mm, "Helvetica", 6, GOLD, 1.4)
    wrapped_center(c, ["COMPLIMENTARY", "DECOR CONSULTATION"], height - 68 * mm, "Times-Roman", 21, 22, GOLD_LIGHT)
    c.setStrokeColor(GOLD)
    c.line(width * 0.25, height - 94 * mm, width * 0.75, height - 94 * mm)
    centered(c, "For your next celebration in Iceland", height - 103 * mm, "Times-Italic", 10, GOLD_LIGHT)
    qr(c, width, height - 110 * mm, 23 * mm)
    centered(c, "WEDDINGS  •  PROPOSALS  •  BABY EVENTS  •  CORPORATE  •  HOLIDAYS", 12 * mm, "Helvetica-Bold", 5.2, GOLD, 0.25)
    c.showPage()

    background(c, width, height)
    border(c, width, height, 8 * mm)
    logo(c, width, height - 18 * mm, 25 * mm)
    wrapped_center(c, ["TELL US YOUR DATE,", "PLACE, AND MOOD."], height - 59 * mm, "Times-Roman", 20, 21, GOLD_LIGHT)
    wrapped_center(
        c,
        ["We shape a refined decor direction", "around your celebration."],
        height - 86 * mm,
        "Times-Italic",
        9,
        11,
        MUTED,
    )
    qr(c, width, height - 99 * mm, 25 * mm)
    centered(c, "SCAN TO VIEW OUR WORK AND CONTACT US", 17 * mm, "Helvetica-Bold", 6, GOLD, 0.55)
    centered(c, "+354 766 6488  •  @dream.decor.iceland", 10 * mm, "Helvetica", 6.3, IVORY)
    c.save()
    return path


if __name__ == "__main__":
    outputs = [
        create_business_card(),
        create_flyer("dream-decor-flyer-general-a6.pdf", A6, "general"),
        create_flyer("dream-decor-flyer-direct-dl.pdf", (99 * mm, 210 * mm), "direct"),
        create_flyer("dream-decor-flyer-partners-a6.pdf", A6, "partner"),
        create_voucher(),
    ]
    for output in outputs:
        print(output.name)
