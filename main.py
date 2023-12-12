from flask import Flask, render_template
from data import get_voca_data

app = Flask(__name__)

voca_data = get_voca_data()

@app.route('/', methods=["GET"])
def main():
    return render_template("index.html")

@app.route('/get_data')
def data():
    return voca_data



if __name__ == "__main__":
    app.run(port=8000, debug=True)