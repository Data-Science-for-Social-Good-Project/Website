import GetOldTweets3 as got;

username = 'Kerad11106216'
max_tweets = 10

#tweetCriteria = got.manager.TweetCriteria().setUsername(username).setMaxTweets(max_tweets);
#tweets = got.manager.TweetManager.getTweets(tweetCriteria);
#for tweet in tweets:
    #print(tweet.text + '\n');

tweetCriteria = got.manager.TweetCriteria().setUsername("barackobama whitehouse")\
                                           .setMaxTweets(max_tweets)
i = 0
while i<max_tweets:
    tweet = got.manager.TweetManager.getTweets(tweetCriteria)[i]
    print(tweet.text)
    i += 1

tweetCriteria = got.manager.TweetCriteria().setUsername("username")\
                                           .setMaxTweets(max_tweets)
tweets = got.manager.TweetManager.getTweets(tweetCriteria)
text_tweets = [[tweet.date, tweet.text] for tweet in tweets]