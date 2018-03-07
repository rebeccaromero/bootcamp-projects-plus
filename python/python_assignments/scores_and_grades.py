import random
def get_scores():
    for results in range(0,10):
        score = random.randint(60,101)
        if score >= 60 and score <= 69:
            grade = "D"
        if score >= 70 and score <= 79:
            grade = "C"
        if score >= 80 and score <= 89:
            grade = "B"
        elif score >= 90 and score <= 100:
            grade = "A"
        print "Score:", score, "Your grade is :", grade

get_scores()

