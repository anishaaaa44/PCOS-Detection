from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.impute import SimpleImputer

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def say_hello() :
 return jsonify({'status': 'Server running'})


@app.route('/classify-pcos', methods=['POST'])
def classify_PCOS() :
 return jsonify({'Result': 'PCOS Detected'})


if __name__ == "__main__":
    app.run(debug=True)