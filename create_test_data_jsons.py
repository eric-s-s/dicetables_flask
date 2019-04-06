import json
import os

from flaskapp.dice_tables_tequest_handler import DiceTablesRequestHandler

parent_dir = os.path.dirname(os.path.abspath(__file__))

test_data_path = os.path.join(parent_dir, 'flaskapp', 'static', 'testData.js')

texts = ["die(3)", "die(5)", "die(4)&die(6)", "2*die(6)"]
name_base = 'fakeAnswer{}'


def create_json_text(number, die_request):
    handler = DiceTablesRequestHandler()
    base_json = json.dumps(handler.get_response(die_request), sort_keys=True, indent=4)
    return 'const testResponse{} = {};\n'.format(number, base_json)


text_parts = (create_json_text(number, dice_request) for number, dice_request in enumerate(texts))

with open(test_data_path, 'w') as f:
    f.write('\n'.join(text_parts))
