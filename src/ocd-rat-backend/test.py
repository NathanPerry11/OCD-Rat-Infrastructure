# from oaipmh_scythe import Scythe
# import xmltodict, json
import pandas as pd

# identifiers = {
#     "Q48": "oai:www.frdr-dfdr.ca:9f6c0cbd-a2a4-48ed-9802-3330833eeb69",
#     "Q47": "oai:www.frdr-dfdr.ca:9972ba15-caae-4ceb-bc7c-5e904b4a479c",
#     "Q46": "oai:www.frdr-dfdr.ca:2be673b2-c7ea-4de2-8fe8-b9db1dc6b63f",
#     "Q45": "oai:www.frdr-dfdr.ca:de9eb155-805d-4a67-b26f-6deb0dc3509d",
#     "Q44": "oai:www.frdr-dfdr.ca:a46c14b5-b0d0-44e9-8067-33170103bf6f"}

# print("hello")
# with Scythe("https://www.frdr-dfdr.ca/oai/request") as scythe:
#     records = scythe.get_record(identifier=identifiers["Q48"])
# xml_input = str(records)
# o = xmltodict.parse(xml_input)

# print(o['record']['metadata']['oai_dc:dc']['dc:identifier'][0])

# df = pd.DataFrame(o['record']['metadata'])
# print(df)

import pyodbc
import psycopg2
from openai import OpenAI

client = OpenAI()
nlp_message = "Note the following query: SELECT * FROM ((((((((ExperimentalSessions as E1 LEFT" \
" OUTER JOIN Rats as R1 ON R1.RatID = E1.RatID) " \
"LEFT OUTER JOIN BrainManipulations as B1 ON B1.RatID = E1.RatID) LEFT OUTER JOIN Testers as T1 ON T1.TesterID = E1.TesterID) " \
"LEFT OUTER JOIN Apparatuses as A1 ON A1.ApparatusID = E1.ApparatusID)" \
"LEFT OUTER JOIN ApparatusPatterns as AP1 ON AP1.PatternID = E1.PatternID) " \
"LEFT OUTER JOIN TestingRooms as TR1 ON TR1.RoomID = E1.RoomID) " \
"LEFT OUTER JOIN SessionDrugDetails as SDD1 ON SDD1.SessionID = E1.SessionID) "\
"LEFT OUTER JOIN SessionDataFiles as SDF1 ON SDF1.SessionID = E1.SessionID). The user's input will be a natural language input"\
"that is meant to filter this query in some way. Please interpret the input and return a set "\
"of filters in this exact form [<Table Attribute>,<Operator>,<Relevant values ([low$high] for a range)>]. Seperate each filter as such [<filter1>];[<filter2>]."\
"Please ensure that the table attribute follows <Table Alias>.<Table Attribute> and the only acceptable operators are [=,>=,<=,>,<,IN]. "

pd.set_option('display.max_colwidth', None)

operators = {
    "equal": "=",
    "gte": ">=",
    "lse": "<=",
    "gt": ">",
    "ls": "<",
    "range": "IN"
}

def query_filter_rules(query_filters):
    sql_extras = []
    filters = query_filters.split(";")

    for s in filters:
        print(s[1:-1])
        filter_components = s[1:-1].split(",")
        match filter_components[1]:
            case "IN":
                [low,high] = filter_components[2][1:-1].split("$")
                sql_extras.append(filter_components[0] + " >= "+low + " AND "+ Query_name+"."+filter_components[0] + " <= "+ high)
            case "=":
                sql_extras.append(filter_components[0] + " = "+filter_components[2])
            case ">=":
                sql_extras.append(filter_components[0] + " >= "+filter_components[2])
            case "<=":
                sql_extras.append(filter_components[0] + " <= "+filter_components[2])
    return sql_extras

# def nlp_module(natural_input):
#         response = client.responses.create(
#             model="gpt-4.1",
#             #input=(nlp_message+natural_input)
#             input=("Give me 10 random words")
#         )
#         print(f"ChatGPT: {response.output_text}")

    



try:
    cnxn = psycopg2.connect(
            host="localhost",
            database="postgres",
            user="postgres",
            password="Gouda",
            port=5432
        )
    print("Connection to PostgreSQL successful!")

        # You can now create a cursor and execute queries
    cursor = cnxn.cursor()

# db_path = "C:/Users/natha/Desktop/Year 4 Sem 1/4G06/Access Database/SPSS2FRDRdatabase.accdb"

# conn_str = conn_str = (
#         r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
#         r"DBQ=C:/Users/natha/Desktop/Year 4 Sem 1/4G06/Access Database/SPSS2FRDRdatabase.accdb;"
#     )
# cnxn = pyodbc.connect(conn_str)

# cursor = cnxn.cursor()

# subject = input("Enter filter subject:")
# range = input("Enter range or value:")

    filters = str(input("Enter filters in the form [<Filter Subject>,<Operator>,<Relevant values ([low$high] for a range)>]. Seperate each filter as such [<filter1>];[<filter2>]"))
# natural_input = str(input("Enter Natural Language Filter"))

#nlp_module(natural_input)

    extra_sql = query_filter_rules(filters)

    sql_query = "SELECT * FROM ((((((((experimental_sessions as E1 LEFT" \
" OUTER JOIN rats as R1 ON R1.rat_id = E1.rat_id) " \
"LEFT OUTER JOIN brain_manipulations as B1 ON B1.rat_id = E1.rat_id) LEFT OUTER JOIN testers as T1 ON T1.tester_id = E1.tester_id) " \
"LEFT OUTER JOIN apparatuses as A1 ON A1.apparatus_ID = E1.apparatus_ID)" \
"LEFT OUTER JOIN apparatus_patterns as AP1 ON AP1.pattern_ID = E1.pattern_ID) " \
"LEFT OUTER JOIN testing_rooms as TR1 ON TR1.Room_ID = E1.Room_ID) " \
"LEFT OUTER JOIN session_drug_details as SDD1 ON SDD1.Session_ID = E1.Session_ID) "\
"LEFT OUTER JOIN session_data_files as SDF1 ON SDF1.Session_ID = E1.Session_ID)"


    if (extra_sql != ""):
        sql_query = sql_query + " WHERE("
        start_flag = 0
        for s in extra_sql:
            print(s)
            if start_flag == 1:
                sql_query = sql_query + " AND "
            sql_query = sql_query + s
            start_flag = 1
        sql_query = sql_query + ")"

    print(sql_query)


    df = pd.read_sql_query(sql_query,cnxn)

    print(df)

except psycopg2.Error as e:
        print(f"Error connecting to PostgreSQL: {e}")

finally:
        if cnxn:
            cnxn.close()
            print("PostgreSQL connection closed.")


