import joblib
import pandas as pd
from flask import Flask, render_template, request

app = Flask(__name__)

# Load trained model
model = joblib.load("Codtech_task_3.pkl")

# Exact features used during training
feature_names = [
    'area', 'bedRoom', 'bathroom', 'balcony', 'floorNum',
    'facing_direction_clockwise', 'Environment', 'Lifestyle',
    'Connectivity', 'Safety', 'Furnished_Weighted_Score',
    'has_servant_room', 'has_store_room', 'has_pooja_room',
    'has_study_room', 'has_others'
]

@app.route('/', methods=['GET', 'POST'])
def index():
    predicted_price = None
    error = None

    if request.method == 'POST':
        try:
            data = {}

            for feature in feature_names: 
                value = request.form.get(feature)

                # If checkbox not checked → treat as 0
                if feature.startswith("has_"):
                    data[feature] = int(value) if value else 0

                # Integer fields
                elif feature in ['bedRoom', 'bathroom', 'balcony']:
                    data[feature] = int(value)

                # Float fields
                else:
                    data[feature] = float(value)


            # Create DataFrame with correct column order
            input_df = pd.DataFrame([data], columns=feature_names)

            print("Columns sent:", input_df.columns.tolist())
            print("Model expects:", model.feature_names_in_)

            predicted_price = model.predict(input_df.values)[0]

        except Exception as e:
            error = str(e)

    return render_template(
        "index.html",
        feature_names=feature_names,
        predicted_price=predicted_price,
        error=error
    )

if __name__ == '__main__':
    app.run()
