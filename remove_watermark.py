import cv2
import sys

def process_video(input_path, output_path):
    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        print("Error: Could not open video.")
        sys.exit(1)
        
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video Info: {width}x{height} at {fps} fps, {total_frames} frames")
    
    # We will try to blur the bottom right corner. Let's define a region.
    # The watermark looks like a small star in the bottom right. Let's use a 60x60 area.
    blur_w, blur_h = 60, 60
    x1, y1 = width - blur_w, height - blur_h
    x2, y2 = width, height
    
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        # Apply Gaussian Blur to the bottom right corner
        roi = frame[y1:y2, x1:x2]
        blurred_roi = cv2.GaussianBlur(roi, (99, 99), 30)
        frame[y1:y2, x1:x2] = blurred_roi
        
        out.write(frame)
        count += 1
        if count % 50 == 0:
            print(f"Processed {count}/{total_frames} frames")
            
    cap.release()
    out.release()
    print("Done!")

if __name__ == "__main__":
    process_video("video de fundo.mp4", "video_sem_marca.mp4")
