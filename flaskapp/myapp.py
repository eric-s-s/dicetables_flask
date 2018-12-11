# from dicetables_db import RequestHandler, SQLConnection, MongoDBConnection
import os

from flask import Flask, jsonify, render_template, request

from flaskapp.dice_tables_tequest_handler import DiceTablesRequestHandler

app = Flask(__name__)


@app.route('/_get_table')
def add_numbers():
    reqeust_str = request.args.get('requestStr', '', type=str)
    # handler = RequestHandler(MongoDBConnection('test_app', 'test'))
    # handler = RequestHandler(SQLConnection(':memory:', 'test'))
    handler = DiceTablesRequestHandler(max_dice_value=6000)
    table_obj = handler.get_response(reqeust_str)
    # handler.close_connection()
    if 'error' in table_obj:
        return jsonify(table_obj), 400
    return jsonify(table_obj), 200


@app.route('/')
def index():
    directory = os.path.dirname(__file__)
    pathanme = os.path.join(directory, 'static', 'intro.txt')
    with open(pathanme, 'r') as f:
        contents = f.read()
    return render_template('index.html', intro_text=contents)


if __name__ == '__main__':
    app.run()
