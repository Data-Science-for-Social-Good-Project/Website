from flask import Flask, request, render_template, make_response
import pandas as pd
import GetOldTweets3 as got;

app = Flask(__name__, static_url_path='/', static_folder='')

@app.route('/')
def root():
    return app.send_static_file('Page-1.html')

@app.route('/home')
def home():
    return app.send_static_file('Page-1.html')



@app.route("/webscraper", methods = ["GET"])
def scraper():
    df1 = pd.DataFrame()
    df1 = pd.DataFrame(
        {"User" : [],
        "Date" : [],
        "Tweet" : [],
        "Link" : []})

    username = str(request.args.get('name'))
    y = '.json'
    jsonFileName = username + y
    print(jsonFileName)
    max_tweets = 100
    tweetCriteria = got.manager.TweetCriteria().setUsername(username)\
                                            .setMaxTweets(max_tweets)\
                                            .setQuerySearch('(coronavirus OR covid OR masks OR mask OR Covid-19 OR covid19 OR SARS-CoV-2 OR corona OR Fauci OR CDC OR WHO OR epidemiologist OR vaccine OR vaccination OR testing OR tests OR masks OR quarantine OR social distancing OR cases OR lockdown OR pandemic OR ChinaVirus) filter:links')\

    tweets = got.manager.TweetManager.getTweets(tweetCriteria)
    user_tweets = [[tweet.date, tweet.text] for tweet in tweets]
    i = 0 
    while i<len(user_tweets):
        tweet = got.manager.TweetManager.getTweets(tweetCriteria)[i]
        df_tweet = pd.DataFrame(
                {"User" : [username],
                "Date" : [tweet.date],
                "Tweet" : [tweet.text],
                "Link" : [tweet.permalink]})
        df1 = df1.append(df_tweet)
        i += 1
    
    df1.to_json (jsonFileName, orient='records')
    pd.set_option("display.max_rows", None, "display.max_columns", None)
    print(df1)
    
    html = render_template("Page-4.html", X=username)
    response = make_response(html)
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)



#source ~/.virtualenvs/datasci/bin/activate
