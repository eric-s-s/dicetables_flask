# from flask import Flask, render_template, request
#
#
# app = Flask(__name__)
#
#
# @app.route('/')
# def hello_world():
#     return 'hello'
#
#
# @app.route('/hello/', methods=['GET'])
# @app.route('/hello/<thing>', methods=['GET'])
# def gen_random(thing=None):
#     if request.method == 'GET':
#         if thing is None:
#             return render_template("hello.html")
#         else:
#             return "hi there"

from dicetables_db import RequestHandler, SQLConnection
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)

@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    answer = {'result': a+b}
    handler = RequestHandler(SQLConnection(':memory:', 'test'))
    to_add = handler.get_response('10*Die(6)')
    answer['info'] = to_add
    return jsonify(answer)

@app.route('/')
def index():
    return render_template('hello.html')

@app.route('/ajax', methods=['POST'])
def ajax_response():
    thing = request.form['userName']
    return jsonify(result=thing)