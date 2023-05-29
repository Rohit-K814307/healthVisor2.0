#imports
import firebase_admin
from firebase_admin import db
import json
from generate_data.create_data import get_symptom_steps, get_symptom_descs

def populate():
    #establish db conection
    cred_obj = firebase_admin.credentials.Certificate('adminSDK.json')
    default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':"https://healthvisor-60926-default-rtdb.firebaseio.com/"
	})
    ref = db.reference("/")

    #get data
    steps = get_symptom_steps("generate_data/csv_data/symptom_precaution.csv")
    descs = get_symptom_descs("generate_data/csv_data/symptom_Description.csv")

    #turn data into json format for db
    full_data = {
    "steps":steps,
    "descriptions":descs
    }

    json_data = json.dumps(full_data)
    ref.set(json_data)
    
    print("populated")