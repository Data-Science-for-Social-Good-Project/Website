import pygsheets
import pandas as pd
import GetOldTweets3 as got;

# Create dataframe
df1 = pd.DataFrame()

df1 = pd.DataFrame(
{"User" : [],
"Date" : [],
"Tweet" : [],
"Link" : []})

username_list = ['baby_jeager','BurghliZiad','muhamma07531556','Real_WildNK','conusvayssiere','cityofnatalie','marcosv824','fuckblades','KwaneleMchunu12','Gabiand55147622','Dragaum','blackam59299815','TKC_UnKnown','BrenskyM','Michael10531432','XErindeere','Jiya_kapur208','oreoaw44','kr4ydnb','GYPSIEbeans','BestVels','CoraGre01415707','ChanYangki','Covidman2','Lush_Seed','Eduardo12163678','dynamic_avinash','maskedplaguedr','NyabutoBeruel','drichzzz','Charlot66186523','daineperry8','Vida47989916','DPatwardhan','SealyShaunna','quirvic1969','Bre15523579','ThatBitch_Rona','Zane62379667','Ali59223959','elliexdouglas3','Star1oK','nopanicpandemic','CallDevlin','danielvegan2','DiorxNoah','basicxpineapple','danilofu2000','Savageq02367075','oiitrouxa1','Mense92409486','Black_wolf27','MRamfolo','AmyKapalot','texasmomrockin','BoysBibhas','Jesse77469447','Jocelyn08081111','PKaguithia','cabbageface3696','amazon_status','OnerWavy','EniaZaki','AccountKinyas','U62649347','carrielee_cole','kyewer','JohnSha01446680','Amy88112','Frudeii','AdamTabouti','rajibjha418','HayaYsf','maddie43836864','7iloveu9','Vikrant9552','RicardoABallada','andres9421','christianclough','LiemaMtshabe','bcballard','tglynn6','JennyFrancisco','BeatrizCCabrit1','bablyplutofann','1878Mike','Yema05170877','percyephone','pizzaispog','khandekar_viraj','danielleboyd334','AmyLouLongmuir','DenwellNicole','MemeStealer','PoposkiFilip','LizKzoo16','phresqo','pinkypinkymoon','AnnCom57','Akbar_Raihana','1029_ten','vanity_roww','jordyn98785881','DavidGeare','jamallight','depressica2020','_cwnz_','digitalaaf','licherovava','larajea47788876','rameshsodha9t','norajanse','abbieflewitt','CaptKir45681730','KaliaRuhani','pukahi91','scottle64542386','alaza_utenok','AgochiD','Alikanbo','RebeccaFiedler1','coachvincer','Sienna_joy_','Amy_R_Shapiro','Salmasa16833057','tornadozwestori','Maja_cuz_yes','mumtaz_obaid','Sarah36615654','ThatTimeDannii','AlaeddineSafi','faiza333','ikram_ouhli','Bella91190449','TruthHU02820419','Lo____Co','less_moni','ineshartl5','ThaneMurphy','Adriana92433500','dayanar00521477','JustALittlePot1','javier23826242','x_rose_xx7','Joel_Va1era','stevecooke360','camilla56547559','Eliza68207318','HttpsGalore','lina18681204','gracedelaluna14','ELI07245200','demcj11','Rajveer650','levi74146242','LouisaPawusch','ManiacMunds802','theunkownguy32','4life_julybaby','mannaz0','Bigbootijay','tsakaillc','joseth_arely','adeemmeme','relithiphop','jpeake1987','HoneySnake777','salmamamoun1','DamianWells18','kristenkay81','puzzledpaki','weskerboss','NCorrin27','DannyMernerr','Whatdothebeans1','Rzvan26641853','mariateodoriu','AHRJulioH38','Alexandra246913','joudalamoudi3','Amidu89716710','assin_martin','tyt67754158','rheadhote','isabellat005','JohnDoe22867092','playb0ii_','drefyyy','mgabrielavp','Butcher12Candy','hrsmlzarn','FabienLagrange','Chimchim_mocha','LehoeCeleste','coronatme','SadamBean','B1uff1','DayMoods','whatacurveball','marie_khloie','buttmccracken','lily65071967','Rreruml','jxmes743','Annita32425135','Chaudha55159468','sxmanthaWhuuT','annabel90771202','_lwiz_','LucasBa48514384','Rony12214075','vim_deejay','RyanHookey','_Gamers_Switch_','k232uTcXj7QH886','Gudtogo1','Wb59vinfCh7TETz','Noormansouur','Farah88923981','MohsinAliQambr1','Vishalsodharaj','younes87491442','CGarcia39641654','bgirlsquirrel','JenniferN4444','sirnumidor','ivalentao','nao_devo_ser_eu','pafiiisempaiUwU','MatiasGaglio']

for x in username_list: 
    username = x
    max_tweets = 100
    tweetCriteria = got.manager.TweetCriteria().setUsername(username)\
                                           .setMaxTweets(max_tweets)\
                                        .setQuerySearch('(virus) filter:links')\

    tweets = got.manager.TweetManager.getTweets(tweetCriteria)
    user_tweets = [[tweet.date, tweet.text] for tweet in tweets]
    if len(user_tweets) > 0: 
        #authorization
        gc = pygsheets.authorize(service_file='/Users/nanyu/Documents/Python/client_secret.json')
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

        #open the google spreadsheet 
        sh = gc.open('Twitter_Data_Collection_EXPERIMENT')

        #select the first sheet 
        wks = sh[0]

        #update the first sheet with df
        wks.set_dataframe(df1,(1,1))

