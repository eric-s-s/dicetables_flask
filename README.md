#This is a test for using flask

it's an app that runs on a database and fetches statistics for dice.

the following are notes to myself. you might find them useful

to run, you need to install the following packages:

[dicetables_db](https://github.com/eric-s-s/dicetables_db) 
(you'll have to clone my repository with the same name and then `pip install .` in the parent directory.

[dicetables](https://github.com/eric-s-s/dice-tables) (on pypi)

if using mongo db, don't forget to start it up
and make sure to start the proper virtualenv

lines 10 and 11 in `myapp.py` control what kind of database is used.

```
$ export FLASK_APP=myapp.py
$ flask run
```

if you're reading this and want ot play around on your own, to get results on the website, type a dicetable request
into the box and hit "submit"

here's an example `"3 * Die(6) & 2 * WeightedDie({1:1, 2: 2, 3: 1})"`

there are several kinds of accepted die objects and you can see the API at
<http://dice-tables.readthedocs.io/en/latest/the_dice.html>


