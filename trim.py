import sys
from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

if __name__ == '__main__':
    img_path = 'src/assets/image/bugsentry_dashboard_mockup.png'
    img = Image.open(img_path)
    # Convert to RGBA just to be safe
    img = img.convert("RGBA")
    
    # Try trimming based on corner colors
    # We might have a gradient, check 4 corners
    corners = [img.getpixel((0,0)), img.getpixel((img.width-1, 0)),
               img.getpixel((0, img.height-1)), img.getpixel((img.width-1, img.height-1))]
    print("Corner pixels:", corners)
    
    trimmed = trim(img)
    print("Original size:", img.size)
    print("Trimmed size:", trimmed.size)
    
    out_path = 'src/assets/image/bugsentry_dashboard_mockup_trimmed.png'
    trimmed.save(out_path)
    print("Saved trimmed image.")
