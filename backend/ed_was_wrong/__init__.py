from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/last-time-ed-was-wrong')
@cross_origin()
def last_time_ed_was_wrong():
    return "November 16, 2018";
