# CodTech-Task-3

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAHUL VERMA

*INTERN ID*: CTIS2711

*DOMAIN NAME*: DATA SCIENCE

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH

# 🏠 House Price Prediction System

A Machine Learning powered web application that predicts house prices based on property features and amenities.

This project combines **Data Science + Machine Learning + Web Deployment** into a complete end-to-end solution.

---

## 🚀 Live Demo

🔗 Hugging Face Deployment:  
*(Paste your Space link here)*

---

## 📌 Project Overview

This system predicts the estimated price of a house using important features like:

- Area (sq. ft.)
- Number of Bedrooms & Bathrooms
- Balcony count
- Floor number
- Facing direction
- Locality ratings (Environment, Lifestyle, Connectivity, Safety)
- Furnishing score
- Extra rooms (Servant room, Study room, Store room, etc.)

The prediction is powered by a **trained XGBoost Regression model**.

---

## 🧠 Machine Learning Details

| Item | Description |
|------|-------------|
| Algorithm Used | XGBoost Regressor |
| Problem Type | Regression |
| Target Variable | House Price |
| Model Saving | Joblib (`.pkl` file) |

The model was trained using structured housing data and optimized for accurate price estimation.

---

## 🌐 Web Application

The ML model is integrated into a **Flask web app** where users can input property details and instantly receive a predicted price.

### Features
✔ User-friendly input form  
✔ Handles missing optional room selections  
✔ Real-time price prediction  
✔ Deployed using Docker on Hugging Face Spaces  

---

## 🛠️ Tech Stack

**Machine Learning**
- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost

**Backend**
- Flask
- Gunicorn

**Deployment**
- Docker
- Hugging Face Spaces

---

## 📂 Project Structure

├── app.py # Flask application
├── Codtech_task_3.pkl # Trained ML model
├── requirements.txt # Python dependencies
├── Dockerfile # Container setup for deployment
├── templates/
│ └── index.html # Frontend form
├── static/ # CSS / assets
└── README.md # Project documentation


---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/house-price-prediction.git
cd house-price-prediction


Install dependencies
pip install -r requirements.txt

Run the app
python app.py

Open in browser:
http://127.0.0.1:5000

Run Using Docker
docker build -t house-price-app .
docker run -p 7860:7860 house-price-app

