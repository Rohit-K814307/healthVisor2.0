import firebase_admin
from firebase_admin import db
import json

cred_obj = firebase_admin.credentials.Certificate('adminSDK.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':"https://healthvisor-60926-default-rtdb.firebaseio.com/"
	})

ref = db.reference("/")

#sample query
t = json.loads(ref.order_by_child("steps").get())
print(t)