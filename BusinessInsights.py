import pandas as pd
import numpy as np
from nltk.tokenize import sent_tokenize, word_tokenize 
from string import punctuation
from nltk.corpus import stopwords
import nltk
import ssl
from time import time
from sklearn.ensemble import ExtraTreesRegressor

nltk.download('vader_lexicon')
nltk.download('punkt')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import re
from pprint import pprint
from sklearn.linear_model import Ridge
import pickle

# Gensim
import gensim
import gensim.corpora as corpora
from gensim.utils import simple_preprocess
from gensim.models import CoherenceModel


# Enable logging for gensim - optional
import warnings
warnings.filterwarnings("ignore",category=DeprecationWarning)
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.metrics import accuracy_score,classification_report
from datetime import datetime

class TopRecommendation:
        

    def prepareData(self):
        reviewData = pd.read_csv(self.reviews_filename)
        userData = pd.read_csv(self.users_filename)
        restaurantData = pd.read_csv(self.restaurants_filename)
        restaurantData = restaurantData.loc[restaurantData['business_id'].isin(reviewData['business_id'])]
        userData = userData.loc[userData['user_id'].isin(reviewData['user_id'])]
        return reviewData,userData,restaurantData


    def getSentimentScore(self,reviewData):
        sid = SentimentIntensityAnalyzer()
        pos = []
        neg = []
        for text in reviewData['text']:
            score = sid.polarity_scores(text)
            pos.append(score['pos'])
            neg.append(score['neg'])
        reviewData['PostiveScore'] = pos
        reviewData['NegativeScore'] = neg
        return reviewData

