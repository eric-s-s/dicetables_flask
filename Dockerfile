FROM python:3.7

ADD . /code/
WORKDIR /code

RUN pip install -r requirements.txt


EXPOSE 8080


#CMD ["flask","run","--host=0.0.0.0","--port=8080"]
#CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8080", "flaskapp.myapp:app"]
CMD ["uwsgi", "--http-socket", "0.0.0.0:8080", "--wsgi-file", "flaskapp/myapp.py", "--callable", "app", "--processes", "4", "--threads", "2"]