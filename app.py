from flask import Flask, render_template, request
import base64

app = Flask(__name__)

# Home page serves your HTML
@app.route("/")
def home():
    return render_template("index.html")

# Dynamic endpoint for JS to send data
@app.route("/connect")
def connect():
    b64_data = request.args.get("b64")
    if b64_data:
        decoded = base64.b64decode(b64_data).decode("utf-8")
        with open("data.txt", "a") as f:
            f.write(decoded + "\n")
    return "ok"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
