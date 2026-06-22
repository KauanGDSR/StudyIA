import cv2
import numpy as np
import sys

def find_watermark(input_path):
    cap = cv2.VideoCapture(input_path)
    ret, frame = cap.read()
    if not ret:
        sys.exit(1)
        
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    # Check bottom right 100x100
    roi = frame[height-100:height, width-100:width]
    
    # Convert to grayscale
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    
    # Threshold to find the bright sparkle
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
    
    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    if contours:
        # Get the bounding box of the largest contour
        c = max(contours, key=cv2.contourArea)
        x, y, w, h = cv2.boundingRect(c)
        print(f"Watermark found at ROI coords: x={x}, y={y}, w={w}, h={h}")
        print(f"Global coords: x1={width-100+x}, y1={height-100+y}, x2={width-100+x+w}, y2={height-100+y+h}")
    else:
        print("No bright watermark found in the bottom right 100x100.")
        
    cap.release()

if __name__ == "__main__":
    find_watermark("video de fundo.mp4")
