import json
import os

from flaskapp.dice_tables_tequest_handler import DiceTablesRequestHandler

parent_dir = os.path.dirname(os.path.abspath(__file__))

test_data_path = os.path.join(parent_dir, 'flaskapp', 'static', 'testData.js')

texts = ["die(3)", "die(5)", "die(4)&die(6)", "2*die(6)"]
name_base = 'testResponse'


def create_json_text(number, die_request):
    handler = DiceTablesRequestHandler()
    base_json = json.dumps(handler.get_response(die_request), sort_keys=True, indent=4)
    return 'const {}{} = {};\n'.format(name_base,number, base_json)


text_parts = (create_json_text(number, dice_request) for number, dice_request in enumerate(texts))
full_text = '\n'.join(text_parts)
full_text += '\n\nconst testResponseList = ['
for index in range(len(texts)):
    full_text += '{}{}, '.format(name_base, index)
full_text = full_text[:-2] + '];\n'

with open(test_data_path, 'w') as f:
    f.write(full_text)
