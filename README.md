Understood 👍
Here is the **README file strictly in the exact format you gave**, nothing added, nothing removed.

---

# Team 14 – SMARTPNEUMO: Real-Time Pneumonia Detection Using MobileNetV2

## Team Info

* 23475A0515 — **Appini Manikanta** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
  *Work Done: Dataset collection, preprocessing, data augmentation, model training*

* 22471A05L6 — **Chakka Bharadwaj** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
  *Work Done: Literature survey, comparative analysis, documentation*

* 23475A0523 — **Chirakala Gopi Krishna** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
  *Work Done: Model implementation, testing, performance evaluation*

* Guide — **Karuna Kumar Valicharla, M.Tech**
  *Work Done: Project guidance and technical mentoring*

---

## Abstract

SMARTPNEUMO is a real-time pneumonia detection system developed using deep learning techniques on chest X-ray images. The project utilizes MobileNetV2, a lightweight convolutional neural network, to classify X-ray images as Normal or Pneumonia. By applying effective preprocessing, data augmentation, and transfer learning, the model achieves high accuracy with reduced computational cost, making it suitable for real-time and resource-constrained healthcare environments.

---

## Paper Reference (Inspiration)

👉 **[CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays
– Pranav Rajpurkar et al.](https://arxiv.org/abs/1711.05225)**
Original IEEE research paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper

MobileNetV2 is used instead of heavy CNN architectures like DenseNet, reducing computational complexity while maintaining high accuracy. The proposed model achieves faster inference, better efficiency, and suitability for real-time and mobile deployment.

---

## About the Project

The project automatically detects pneumonia from chest X-ray images using a deep learning model. It helps in early diagnosis, reduces dependency on expert radiologists, and supports faster medical decision-making.
Workflow: Chest X-ray image → Preprocessing → MobileNetV2 model → Output (Normal / Pneumonia)

---

## Dataset Used

👉 **[Chest X-Ray Pneumonia Dataset – Kaggle](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia)**

**Dataset Details:**
The dataset contains 5,855 chest X-ray images categorized into Normal and Pneumonia classes. All images are grayscale and widely used for medical image classification research.

---

## Dependencies Used

Python, TensorFlow, Keras, NumPy, Pandas, OpenCV, Matplotlib, Scikit-learn, Albumentations

---

## EDA & Preprocessing

Exploratory Data Analysis was performed to understand data distribution. Preprocessing included image resizing, normalization, grayscale conversion, noise removal, and data augmentation techniques such as rotation, flipping, zooming, and brightness adjustment.

---

## Model Training Info

The model was trained using MobileNetV2 with transfer learning. Adam optimizer and binary cross-entropy loss function were used. Training was performed on Google Colab GPU with validation monitoring to prevent overfitting.

---

## Model Testing / Evaluation

Model performance was evaluated using accuracy, precision, recall, F1-score, and confusion matrix.

---

## Results

The proposed system achieved approximately 98% accuracy. MobileNetV2 performed better than traditional CNN models like VGG16 and DenseNet in terms of speed and efficiency.

---

## Limitations & Future Work

The model currently supports only chest X-ray images and lacks explainability features. Future enhancements include integrating Grad-CAM, extending to multi-disease detection, and deploying the model as a web or mobile application.

---

## Deployment Info

The model can be deployed using Flask or FastAPI and integrated into web or mobile-based healthcare diagnostic systems for real-time pneumonia detection.

---

If you want, I can **replace LinkedIn links**, **change team number**, or **convert this directly into a `README.md` file download**.
