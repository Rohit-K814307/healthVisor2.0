import pandas as pd

    
def get_symptom_steps(dir):
    data = pd.read_csv(dir)

    jsonData = {}

    dataNull = data.copy().isnull()

    for i in range(len(data["Disease"])):
        condition = data["Disease"][i]
        jsonData[condition] = []

        if dataNull["Precaution_1"][i] == False:
            jsonData[condition].append(data["Precaution_1"][i])
        else:
            pass

        if dataNull["Precaution_2"][i] == False:
            jsonData[condition].append(data["Precaution_2"][i])
        else:
            pass

        if dataNull["Precaution_3"][i] == False:
            jsonData[condition].append(data["Precaution_3"][i])
        else:
            pass

        if dataNull["Precaution_4"][i] == False:
            jsonData[condition].append(data["Precaution_4"][i])
        else:
            pass


    return jsonData

def get_symptom_descs(dir):
    data = pd.read_csv(dir)

    jsonData = {}

    dataNull = data.copy().isnull()

    for i in range(len(data["Disease"])):
        condition = data["Disease"][i]
        

        if dataNull["Description"][i] == False:
            jsonData[condition] = data["Description"][i]
        else:
            pass


    return jsonData