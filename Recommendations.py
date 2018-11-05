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

 