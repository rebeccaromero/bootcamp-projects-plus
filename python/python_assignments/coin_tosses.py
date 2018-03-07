import random
def coin_toss5000():
    heads_total = 0
    tails_total = 0
    attempt = 0
    for attempt in range(0, 5000):
        attempt = attempt + 1
        result = random.randint(0,100)
        if result >= 0 and result >= 49:
            coin_face = "head"
            heads_total = heads_total + 1
        else:
            coin_face = "tails"
            tails_total = tails_total + 1
        print "Attempt #" + str(attempt) + ": Throwing a coin... It's a "+ str(coin_face) + "! Got", heads_total, "head(s) so far and", tails_total, " tail(s) so far"

coin_toss5000()
