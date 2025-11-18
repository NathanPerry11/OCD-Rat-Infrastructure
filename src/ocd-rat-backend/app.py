from fastapi import FastAPI
import test as test

app = FastAPI()

@app.get("/")
async def root():

    df = test.main()
    jsonified = df.to_dict(orient='records')
    return jsonified