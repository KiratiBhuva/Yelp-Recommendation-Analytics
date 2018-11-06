import numpy as np
import pandas as pd
import os
import sys
from surprise import BaselineOnly
from surprise import Dataset
from surprise import dataset
from surprise import Reader
from surprise.model_selection import cross_validate
from surprise import SVD
from surprise import accuracy
from surprise.model_selection import KFold
from surprise import KNNBasic
from surprise.model_selection import cross_validate, train_test_split
from time import time
from collections import defaultdict



class Recommendation_System:

    def __init__(self):
        tr = TopRecommendation()
        self.reviewData,self.userData,self.restaurantData = tr.prepareData()
        self.top_recs = defaultdict(list)

    def prepare_data(self):
        
        ldata = Dataset.load_from_df(self.reviewData[['user_id', 'business_id', 'stars']], Reader(rating_scale=(1, 5)))
        return ldata

    def build_model(self,data):
        algo = SVD()
        cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5)
        return algo

    def get_anti_testset(self, data):
        data_train = data.build_full_trainset()
        testset = data_train.build_anti_testset()
        return testset

    def store_predictions(self, testset,algo):
        result = []
        for row in testset:
            result.append(algo.predict(row[0], row[1]))
        return result

    def get_recommendations(self, predictions, topN):
        
        for uid, iid, r_ui, est, details in predictions:
            self.top_recs[uid].append((iid, est))

        for uid, user_ratings in self.top_recs.items():
            user_ratings.sort(key=lambda x: x[1], reverse=True)
            self.top_recs[uid] = user_ratings[:topN]

        return self.top_recs

    def get_recommendation_for_uid(self, user_id):
        for uid, user_ratings in self.top_recs.items():
            if (uid == user_id):
                return uid, ([iid for (iid, _) in user_ratings])
        return ''


