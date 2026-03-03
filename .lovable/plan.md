

## Add Smart Connect Biz Resource to Affiliate Marketing

### What will change
A new **Smart Connect Biz** resource will be added to the Affiliate Marketing service card, positioned right after the three book covers and before the 4 Aces Mailer text link.

### Steps

1. **Save the uploaded image** as `src/assets/smart-connect-biz.png`

2. **Update `src/components/Services.tsx`**:
   - Import the new image asset
   - Insert a new resource entry in the Affiliate Marketing `resources` array at position index 3 (after the three books, before 4 Aces Mailer) with:
     - `title`: "Smart Connect Biz — This Entrepreneur offer has 7 different offers in one platform. Just join up by clicking the icon. No closing sales involved. Let my team deal with that — all you do is promote and talk about what you offer. Full training and weekly Zoom training included."
     - `url`: `https://smartconnectbiz.com/Quersmarketing`
     - `image`: the imported asset
     - `standalone: true` — so it renders as its own visual block (same pattern as iHub Global and PowerAdverts Pro), appearing below the book gallery and above the 4 Aces Mailer text link

3. **Adjust rendering order** in the card template so standalone images render **before** text-only resource links. Currently, text-only links render first and standalone images render at the bottom. The order will be updated to:
   - Book image gallery (non-standalone images)
   - Standalone image resources (Smart Connect Biz, iHub Global, PowerAdverts Pro)
   - Text-only links (4 Aces Mailer)

This follows the existing standalone resource pattern already used for iHub Global and PowerAdverts Pro.

