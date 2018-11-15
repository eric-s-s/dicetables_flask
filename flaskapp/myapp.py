from dicetables_db import RequestHandler, SQLConnection, MongoDBConnection
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)


@app.route('/_get_table')
def add_numbers():
    reqeust_str = request.args.get('requestStr', '', type=str)
    # handler = RequestHandler(MongoDBConnection('test_app', 'test'))
    handler = RequestHandler(SQLConnection(':memory:', 'test'))
    table_obj = handler.get_response(reqeust_str)
    handler.close_connection()
    if 'error' in table_obj:
        return jsonify(table_obj), 400
    return jsonify(table_obj), 200


@app.route('/')
def index():
    return render_template('index.html')
