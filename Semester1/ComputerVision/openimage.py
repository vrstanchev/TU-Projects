#tema moneti
import cv2 as cv
import sys
img=cv.imread("moneti_2lv.jpg")
if img is None:
    sys.exit("Could not open image")
cv.imshow("Display window",img)
x=300
y=350
h=300
w=300
cropimg=img[y:y+x,x:x+w]
cv.imshow("Cropped",cropimg)
k=cv.waitKey(0)
