#tema moneti
import numpy as np
import cv2 as cv
img2lv=cv.imread("moneti_2lv.jpg",0)
imgmoneti = cv.imread("moneti.jpg",0)
img2lvblur = cv.medianBlur(img2lv,5)
imgmonetiblur=cv.medianBlur(imgmoneti,5)
cimg2lv = cv.cvtColor(img2lv,cv.COLOR_GRAY2BGR)
circles2lvHough= cv.HoughCircles(img2lv,cv.HOUGH_GRADIENT,1,20,
                            param1=50,param2=30,minRadius=0,maxRadius=0)
circles2lv = np.uint16(np.around(circles2lvHough))
for i in circles2lv[0,:]:
    # draw the outer circle
    cv.circle(cimg2lv,(i[0],i[1]),i[2],(0,255,0),2)
    # draw the center of the circle
    cv.circle(cimg2lv,(i[0],i[1]),2,(0,0,255),3)
cv.imshow('detected circles',cimg2lv)
cv.waitKey(0)
cv.destroyAllWindows()
k=cv.waitKey(0)
