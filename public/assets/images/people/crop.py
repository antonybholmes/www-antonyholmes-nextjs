import cv2
import numpy as np
import sys

file = sys.argv[1]

size = 600

out = f'{size}x{size}/' + file #.replace('.jpg', '.png')

img1 = cv2.imread(file)

# resize
img1 = cv2.resize(img1, (size, size), interpolation=cv2.INTER_AREA)

cv2.imwrite(out, img1)

out = f'rounded/{size}x{size}/' + file #.replace('.jpg', '.png')


height = img1.shape[0]
width = img1.shape[1]

mask = np.zeros((height,width), np.uint8)

circle_mask = cv2.circle(mask,(width//2,height//2),width//2,(255,255,255),thickness=-1)

fg_masked = cv2.bitwise_and(img1, img1, mask=circle_mask)

bg = np.full(img1.shape, 255, dtype=np.uint8)
bg_mask = cv2.bitwise_not(mask)
bg_masked = cv2.bitwise_and(bg, bg, mask=bg_mask)

final = cv2.bitwise_or(fg_masked, bg_masked)

alpha = np.full((height,width), 0, dtype=np.uint8)
# make the mask non transparent to see image
alpha[circle_mask == 255] = 255

print(alpha)

rgba = cv2.cvtColor(fg_masked, cv2.COLOR_RGB2RGBA)
rgba[:, :, 3] = alpha

cv2.imwrite(out, rgba)
