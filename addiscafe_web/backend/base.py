from flask import Flask, jsonify
from flask_cors import CORS
from flask_frozen import Freezer

# square stuff - TODO: have to organize code later
import os
from square.client import Client
from square.http.auth.o_auth_2 import BearerAuthCredentials

app = Flask(__name__)
CORS(app=app, origins=["http://localhost:3000"])
freezer = Freezer(app=app)

'''
    gets category data to later map by ID to the items
'''
# get_categories
def get_categories(client, object_type):

    result = client.catalog.search_catalog_objects(
    body = {
        "object_types": [
        object_type
        ],
        "include_related_objects": True
    }
    )

    categories = {}
    if result.is_success():
        # finds each category name and id and maps category to id name 
        objects = result.body["objects"]
        for category in objects:
            category_id = category["id"]
            name = category.get("category_data").get("name")
            categories[category_id] = name
    else:
        return {}

    return categories

#
# create_object()
# takes an object from objects list as an argument
# returns a JSON object literal
''' {
    name: ____,
    modifiers: [{
            modifier_name: ____
            price
        }],
    category: _____,
    variations: [{____}],
 }'''
# 
def create_object(item):
    item_id = item.get("id")
    item_name = item.get("item_data").get("name")

    # get all the variations and modifiers for the object for the user to display
    variations = []
    for variation in item.get("item_data").get("variations"):
        variation_object = {}
        variation_name = variation.get("item_variation_data").get("name")
        price = "{:.2f}".format(variation.get("item_variation_data").get("price_money").get("amount") / 100)
        currency = variation.get("item_variation_data").get("price_money").get("currency")

        variation_object["name"] = variation_name
        variation_object["price"] = price
        variation_object["currency"] = currency
        variations.append(variation_object)

    created_object = {
            "id": item_id,
            "name": item_name,
            "variations": variations
    }

    return created_object


def process_objects(objects, categories):
    # creates a list of dictionaries
    items = []
    for item in objects:
        created_object = create_object(item=item)
        created_object["category"] = categories[item.get("item_data").get("reporting_category").get("id")]
        items.append(created_object)
    return items

@app.route('/menu')
def my_profile(): 

    # client
    client = Client(
    bearer_auth_credentials=BearerAuthCredentials(
        access_token=os.environ['SQUARE_ACCESS_TOKEN']
    ), environment='sandbox')

    result = client.catalog.search_catalog_objects(
    body = {
        "object_types": [
        "ITEM"
        ],
        "include_related_objects": True
    }
    )

    if result.is_success():
        objects = result.body["objects"]
    else:
        return [{}]

    categories = get_categories(client=client, object_type="CATEGORY")
    items = process_objects(objects=objects, categories=categories)

    return items


if __name__ == '__main__':
    freezer.freeze()
    app.run(debug=True)